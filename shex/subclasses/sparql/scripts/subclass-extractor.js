import {SPARQLQueryDispatcher} from './SPARQLQueryDispatcher.js';
import {ShExFormater} from './ShExFormater.js';


const endpointUrl = 'https://query.wikidata.org/sparql';
const sparqlQuery = `	
		prefix wdt: <http://www.wikidata.org/prop/direct/>
		prefix wd:  <http://www.wikidata.org/entity/>
	
		# Subclasses of anatomicStructure
		select ?subclass where {
			?subclass wdt:P279+ wd:Q4936952
		}limit 10`;


const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl,sparqlQuery );
let uris = await queryDispatcher.query( sparqlQuery ).then( (data)=>{
	return data.results.bindings.map((element)=>{
		return element.subclass.value;
	})
} );

//PARÁMETROS
let shapeName = 'disease';
let identifier = 'Q4936952';
let shexFormater = new ShExFormater(shapeName,identifier,uris);

let schema = shexFormater.format();
console.log(schema)