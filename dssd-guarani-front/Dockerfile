FROM node:alpine

WORKDIR /app

COPY package.json /app
RUN apk add --no-cache git
RUN yarn install

COPY . /app

CMD ["yarn", "run", "start"]