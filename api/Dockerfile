FROM node:20.11.1-alpine

WORKDIR /api

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3030

CMD ["npm", "run", "start:dev"]