FROM node:18.12.1

WORKDIR /app/client

COPY package*.json ./

RUN npm install -g --force yarn

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "start" ]
