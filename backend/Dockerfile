# syntax=docker/dockerfile:1
FROM node:18-alpine
RUN npm install -g npm@8.19.2
WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 1080
CMD ["npm", "run", "dev"]