import {SPARQLQueryDispatcher} from './utils/SPARQLQueryDispatcher.js';
import {ShExFormater} from './utils/ShExFormater.js';
import {FileUtils} from './utils/FileUtils.js';
import {SPARQLUtils} from './utils/SPARQLUtils.js';
import {ArgumentUtils} from './utils/ArgumentUtils.js';
const endpoint = 'https://query.wikidata.org/sparql'

const shapeName = process.argv[2];
const identifier = process.argv[3];
const output = process.argv[4];

if(ArgumentUtils.checkArguments(shapeName,identifier,output)){

	const query = SPARQLUtils.getQueryForItem(identifier);
	const queryDispatcher = new SPARQLQueryDispatcher( endpoint,query);

	queryDispatcher.query().then( (data)=>{
		let uris  = data.results.bindings.map((element)=>{
			return element.subclass.value;
		})
		let shexFormater = new ShExFormater(shapeName,identifier,uris);
		let schema = shexFormater.format();
		FileUtils.writeShExFile(output+"/"+shapeName,schema);
	} );

}


