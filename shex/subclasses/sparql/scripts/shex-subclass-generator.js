import {SPARQLQueryDispatcher} from './SPARQLQueryDispatcher.js';
import {ShExFormater} from './ShExFormater.js';
import {FileUtils} from './FileUtils.js';

const shapeName = process.argv[2];
const identifier = process.argv[3];
const endpointUrl = process.argv[4];
const sparqlQuery = FileUtils.getFileContent(process.argv[5]);
const output = process.argv[6];


const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl,sparqlQuery );
let uris = await queryDispatcher.query().then( (data)=>{
	return data.results.bindings.map((element)=>{
		return element.subclass.value;
	})
} );

let shexFormater = new ShExFormater(shapeName,identifier,uris);
let schema = shexFormater.format();
FileUtils.writeFile(output,schema);