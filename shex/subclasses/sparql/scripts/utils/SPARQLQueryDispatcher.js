import fetch from 'node-fetch';

export class SPARQLQueryDispatcher {
	constructor( endpoint, sparqlQuery) {
		this.endpoint = endpoint;
        this.sparqlQuery = sparqlQuery;
	}

	query() {
		const fullUrl = this.endpoint + '?query=' + encodeURIComponent( this.sparqlQuery );
		const headers = { 'Accept': 'application/sparql-results+json' };

		return fetch( fullUrl, { headers } ).then( body => body.json() );
	}
}
