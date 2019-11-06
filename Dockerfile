FROM node:stretch-slim

RUN mkdir -p /usr/esummit-frontend
WORKDIR /usr/esummit-frontend

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY package.json /usr/esummit-frontend
RUN npm install --silent
COPY . /usr/esummit-frontend

EXPOSE 3000