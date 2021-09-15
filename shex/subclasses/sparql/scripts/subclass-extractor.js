import {SPARQLQueryDispatcher} from './SPARQLQueryDispatcher.js';


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


let wikidataUri = 'http://www.wikidata.org/entity/';
let wikidataPrefix = 'prefix : <'+wikidataUri+'>';
let shape = wikidataPrefix +'\n\n';
shape+='<'+shapeName+'>  {\n  :P31\t[\n\t<'+wikidataUri+identifier+'>\n';
let schema = uris.reduce((acc,uri)=>{
	acc+= '\t<'+uri+'>\n';
	return acc;
},shape)
schema+='\t]\n}'

console.log(schema)