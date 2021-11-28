FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json ./
ARG URI
ENV REACT_APP_CPG_DOMAIN $URI
COPY . .
RUN npm install && npm run build

FROM nginx:1.19-alpine AS server
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html