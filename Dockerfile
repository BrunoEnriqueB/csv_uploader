FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i --silent

COPY . .

CMD ["npm", "start"]