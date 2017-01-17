import { sampleData } from "./data";

var api =  function(key){

    var myKey;

    if (!key) {
        console.error("Need a key: ");
    } else if (localStorage.getItem(key)) {
        console.error("The key exists already: ", key);
    }

    var apiKey = key;


    function init(data){
        if (!data){
            saveData(sampleData)
        } else {
            saveData(data);
        }
    }

    //get a single or all items
    function add(obj){
       let allData = getAll();

       if (_.isObject(obj) && !_.isEmpty(obj)){
            allData.push(obj);
            saveData(allData);
       } else {
            console.error(`Add: ${obj} is not a valid object`);
       }
       
    }

    //get a single or all items
    function get( id = null){
        if ( _.isNumber(id)) {
            return getAnItem(id);
        } else {
            console.error(`Get: ${id} is not a valid number`);
        }
    }

    function getAnItem(id){
        var id = parseInt(id),
            allData = getAll();

        var theItem = _.findWhere(allData, {id: id});
        return theItem;

        // promise based
        return new Promise(function (resolve, reject) {
            theItem ? resolve(theItem) : reject({err: 'Not found - id: ' + id});
        });
    }


    function getAll(){
        return JSON.parse(localStorage.getItem(apiKey));
    }

    function remove(){
        localStorage.removeItem(apiKey);
    }

    function saveData(data){
        localStorage.setItem(apiKey, JSON.stringify(data));
    }



    return {
        init: init,
        remove: remove,
        getKey: function(){
            return apiKey;
        },
        getAll: getAll,
        get: get,
        add: add
    }
};


export {api};