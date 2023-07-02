FROM node:18.12.1

WORKDIR /app/server

COPY package*.json yarn.lock ./

RUN npm install -g --force yarn

RUN yarn --frozen-lockfile

COPY . .

EXPOSE 5000

CMD [ "yarn", "run", "start" ]
