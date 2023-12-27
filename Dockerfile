FROM node:14.16.0-alpine3.10
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
RUN npm i -g typescript
COPY . .
CMD ["npm", "run", "start"]