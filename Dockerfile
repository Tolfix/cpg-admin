FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN npm run export

FROM nginx:1.19-alpine AS server
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/out /usr/share/nginx/html
