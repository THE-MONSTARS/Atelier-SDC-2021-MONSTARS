FROM node:12-alpine
WORKDIR /atelier
COPY . /atelier/
RUN npm install
RUN npm run database
CMD [ "npm", "run", "start" ]