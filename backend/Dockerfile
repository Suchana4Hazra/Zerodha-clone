FROM node

ENV MONGO_DB_USERNAME=mongoadmin \
    MONGO_DB_PWD=secret

RUN mkdir -p zerodha/backend

COPY . /zerodha/backend

CMD ["node", "/zerodha/backend/index.js"]
