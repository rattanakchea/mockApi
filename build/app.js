'use strict';

var _mockApi = require('./mockApi');

var _data = require('./data');

var client = new _mockApi.api('movie');

console.log('client: ', client);
client.init(_data.data);

client.get(0);

debugger;