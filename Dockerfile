FROM node:7.4-alpine

RUN mkdir -p /usr/src/react-progress-bar-demo
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
RUN npm run build

COPY . /usr/src/app

EXPOSE 8080

CMD ["npm", "start"]