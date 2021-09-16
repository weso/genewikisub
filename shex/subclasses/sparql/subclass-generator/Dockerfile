FROM node:12.18.1
WORKDIR /app
COPY "package*.json" "./"
RUN npm install
COPY . .
ENTRYPOINT ["node","shex-subclass-generator.js"]