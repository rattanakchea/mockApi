import {api} from './mockApi';
import { data } from "./data";


var client = new api('movie');

console.log('client: ', client);
client.init(data);

client.get(0);

debugger;