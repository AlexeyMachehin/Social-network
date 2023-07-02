FROM node:18.12.1 as base

WORKDIR /app

COPY package*.json yarn.lock ./

RUN npm install -g --force yarn

RUN yarn --frozen-lockfile


FROM base as server

WORKDIR /app/server

COPY server/package*.json server/yarn.lock ./

RUN yarn --frozen-lockfile

COPY server/ .


FROM base as client

WORKDIR /app/client

COPY client/package*.json client/yarn.lock ./

RUN yarn --frozen-lockfile

COPY client/ .


FROM base as production

COPY --from=server /app/server /app/server

COPY --from=client /app/client /app/client

EXPOSE 5000

EXPOSE 3000

CMD [ "yarn", "run", "start" ]
