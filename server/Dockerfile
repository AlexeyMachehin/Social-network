FROM node:18.12.1

WORKDIR /app/server

COPY package*.json ./

RUN npm install -g --force yarn

RUN yarn

COPY . .

EXPOSE 5000

CMD [ "yarn", "run", "start" ]
