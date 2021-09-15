FROM node:12.18.1
WORKDIR /app
COPY "package*.json" "./"
RUN npm install
COPY . .

ENV SHAPE_NAME="disease"
ENV WIKIDATA_IDENTIFIER="Q4936952"
ENV ENDPOINT="https://query.wikidata.org/sparql"
ENV SPARQL_QUERY_PATH="query-sample.sparql"
ENV OUTPUT_FILE="docker-output"

CMD ["node","shex-subclass-generator.js"]