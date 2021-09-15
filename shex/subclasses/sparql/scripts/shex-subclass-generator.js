import {SPARQLQueryDispatcher} from './utils/SPARQLQueryDispatcher.js';
import {ShExFormater} from './utils/ShExFormater.js';
import {FileUtils} from './utils/FileUtils.js';

const shapeName = process.env.SHAPE_NAME;
const identifier = process.env.WIKIDATA_IDENTIFIER;
const endpointUrl = process.env.ENDPOINT;
const sparqlQuery = FileUtils.getFileContent(process.env.SPARQL_QUERY_PATH);
const output = process.env.OUTPUT_FILE;

const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl,sparqlQuery );
queryDispatcher.query().then( (data)=>{
	let uris  = data.results.bindings.map((element)=>{
		return element.subclass.value;
	})
	let shexFormater = new ShExFormater(shapeName,identifier,uris);
	let schema = shexFormater.format();
	FileUtils.writeFile(output,schema);
} );


