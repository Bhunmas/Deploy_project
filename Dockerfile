
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 10000
# CMD [ "npm", "run", "dev"]
CMD [ "npm","run","build" ]