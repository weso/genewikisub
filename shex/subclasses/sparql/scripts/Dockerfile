FROM node:12.18.1
WORKDIR /app
COPY "package*.json" "./"
RUN npm install
COPY . .

ARG SHAPE_NAME="AnatomicalStructure"
ARG WIKIDATA_IDENTIFIER="Q4936952"

ENTRYPOINT ["node","shex-subclass-generator.js"]