FROM node:17-alpine as backend

WORKDIR /app

COPY package*.json /app

RUN npm install pm2 -g

RUN npm install

COPY ./client/package*.json /app/client/

RUN cd client && npm install 

COPY . .

RUN cd client && npm run build

CMD ["pm2-runtime", "process.json"]








