FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

RUN cd client && npm install && npm run build

EXPOSE 5000

CMD ["npm","start"]