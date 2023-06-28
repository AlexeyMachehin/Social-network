FROM node:18.12.1 as base

WORKDIR /app

COPY package*.json ./

RUN npm install -g --force yarn

RUN yarn add concurrently

RUN yarn add rimraf


FROM base as server

WORKDIR /app/server

COPY server/package*.json ./

RUN yarn

COPY server/ .


FROM base as client

WORKDIR /app/client

COPY client/package*.json ./

RUN yarn

COPY client/ .


FROM base as production

COPY --from=server /app/server /app/server

COPY --from=client /app/client /app/client

EXPOSE 5000

EXPOSE 3000

CMD [ "yarn", "run", "start" ]
