FROM node:alpine

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install

COPY ./dist .

EXPOSE 3050

CMD ["npm","start"]
