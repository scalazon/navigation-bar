FROM node:10

WORKDIR /Users/gwelson/code/navigation-bar

COPY package*.json ./

RUN npm install

ENV PORT=8080

COPY . /Users/gwelson/code/navigation-bar

CMD [ "node", "server/server.js" ]

EXPOSE 8080