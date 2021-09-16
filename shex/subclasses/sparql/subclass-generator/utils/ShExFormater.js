
export class ShExFormater {
	constructor( shapeName, wikidataId, uris) {
		this.shapeName = shapeName;
        this.wikidataId = wikidataId;
        this.uris = uris;
	}

	format() {
        let schema  =  WIKIDATA_PREFIX +'\n\n';
        schema += '<'+this.shapeName+'>  {\n  :P31\t[\n\t<'+WIKIDATA_URI+this.wikidataId+'>\n';
        schema = this.uris.reduce((acc,uri)=>{
            acc+= '\t<'+uri+'>\n';
            return acc;
        },schema)
        schema+='\t]\n}';
        return schema;
	}
}

const WIKIDATA_URI = 'http://www.wikidata.org/entity/';
const WIKIDATA_PREFIX = 'prefix : <'+WIKIDATA_URI+'>';
