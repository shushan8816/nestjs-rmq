FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ARG PORT=3000

CMD npm run start:prod