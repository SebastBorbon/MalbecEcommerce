FROM node:12

COPY [".", "/usr/src/malbecapi"]

WORKDIR /usr/src

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
