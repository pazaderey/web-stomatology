FROM node:21-alpine

WORKDIR /home/web-stomatology

COPY . .

RUN npm ci

EXPOSE 80 80

CMD [ "npm", "start" ]