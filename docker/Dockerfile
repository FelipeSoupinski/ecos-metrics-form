FROM node:20
RUN mkdir -p /app
RUN chown node:node /app
WORKDIR /app

COPY --chown=node:node . /app

RUN npm install

VOLUME [ "/app/server/db" ]

CMD [ "node", "server/server.js" ]
