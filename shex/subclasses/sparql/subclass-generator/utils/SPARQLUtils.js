export class SPARQLUtils{
    static getQueryForItem(id){
        return baseQuery.replace("<_identifier_>",id);
    }
}

const baseQuery = `
prefix wdt: <http://www.wikidata.org/prop/direct/>
prefix wd:  <http://www.wikidata.org/entity/>

# Subclasses of anatomicStructure
select ?subclass where {
    ?subclass wdt:P279+ wd:<_identifier_>
}`