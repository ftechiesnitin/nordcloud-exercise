FROM node:alpine
EXPOSE 3000

RUN mkdir /app
WORKDIR /app
# add package.json and run npm install before adding the rest of the files
# this way, you only run npm install when package.json changes
ADD ./package.json ./

RUN apk add --no-cache make gcc g++ python

COPY . ./
RUN npm install
CMD ["npm", "start"]
