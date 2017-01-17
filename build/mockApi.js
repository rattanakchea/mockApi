"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.api = undefined;

var _data = require("./data");

var api = function api(key) {

    var myKey;

    if (!key) {
        console.error("Need a key: ");
    } else if (localStorage.getItem(key)) {
        console.error("The key exists already: ", key);
    }

    var apiKey = key;

    function init(data) {
        if (!data) {
            saveData(_data.sampleData);
        } else {
            saveData(data);
        }
    }

    //get a single or all items
    function add(obj) {
        var allData = getAll();

        if (_.isObject(obj) && !_.isEmpty(obj)) {
            allData.push(obj);
            saveData(allData);
        } else {
            console.error("Add: " + obj + " is not a valid object");
        }
    }

    //get a single or all items
    function get() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (_.isNumber(id)) {
            return getAnItem(id);
        } else {
            console.error("Get: " + id + " is not a valid number");
        }
    }

    function getAnItem(id) {
        var id = parseInt(id),
            allData = getAll();

        var theItem = _.findWhere(allData, { id: id });
        return theItem;

        // promise based
        return new Promise(function (resolve, reject) {
            theItem ? resolve(theItem) : reject({ err: 'Not found - id: ' + id });
        });
    }

    function getAll() {
        return JSON.parse(localStorage.getItem(apiKey));
    }

    function remove() {
        localStorage.removeItem(apiKey);
    }

    function saveData(data) {
        localStorage.setItem(apiKey, JSON.stringify(data));
    }

    return {
        init: init,
        remove: remove,
        getKey: function getKey() {
            return apiKey;
        },
        getAll: getAll,
        get: get,
        add: add
    };
};

exports.api = api;