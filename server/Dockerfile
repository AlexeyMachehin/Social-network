FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g cross-env

COPY . .

ENV PORT=${SERVER_PORT}

EXPOSE ${SERVER_PORT}

CMD [ "npm", "run", "start_prod" ]
