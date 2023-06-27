FROM node:18.12.1

WORKDIR /app/client

COPY package*.json ./

RUN npm install -g --force yarn

RUN yarn

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD [ "yarn", "run", "start" ]
