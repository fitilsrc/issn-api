FROM node

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn install

COPY . .

RUN npx prisma generate

RUN npx prisma migrate dev
