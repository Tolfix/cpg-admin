FROM node:14 as BUILDER

ENV JQ_VERSION=1.6
RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq

WORKDIR /app
COPY . .
RUN jq 'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)' ./src/config.json > ./src/config.tmp.json && mv ./src/config.tmp.json ./src/config.json
RUN npm install && npm run build

FROM nginx:1.19-alpine AS server
ENV JSFOLDER=/usr/share/nginx/html/static/js/*.js
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./start-nginx.sh /usr/bin/start-nginx.sh
COPY --from=builder ./app/build /usr/share/nginx/html
ENTRYPOINT [ "start-nginx.sh" ]