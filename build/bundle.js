/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mockApi = __webpack_require__(1);

	var _data = __webpack_require__(2);

	var client = new _mockApi.api('movie');

	console.log('client: ', client);
	client.init(_data.data);

	client.get(0);

	debugger;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.api = undefined;

	var _data = __webpack_require__(2);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});


	var data = [{
	    "id": 0,
	    "title": "Title 0",
	    "image": "//images.redbox.com/Images/EPC/boxartlarge/8421.jpg",
	    "description": "title 0 description" }, {
	    "id": 1,
	    "title": "Title 1",
	    "image": "//images.redbox.com/Images/EPC/boxartlarge/8421.jpg",
	    "description": "Title 1 description"
	}];

	exports.data = data;

/***/ }
/******/ ]);