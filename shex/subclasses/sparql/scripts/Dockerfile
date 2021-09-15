FROM node:12.18.1
WORKDIR /app
COPY "package*.json" "./"
RUN npm install
COPY . .

ENV SHAPE_NAME="AnatomicalStructure"
ENV WIKIDATA_IDENTIFIER="Q4936952"
ENV ENDPOINT="https://query.wikidata.org/sparql"
ENV OUTPUT_FILE="AnatomicalStructure.shex"

CMD ["node","shex-subclass-generator.js"]