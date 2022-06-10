FROM node:14.18.1-alpine
WORKDIR /usr/src/app

COPY package*.json . 
COPY index.js .
RUN npm ci 

EXPOSE 8082
USER node:node 

CMD [ "npm", "run", "server" ]