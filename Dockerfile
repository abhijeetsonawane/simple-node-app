FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package.json .

# Installs dependencies
RUN npm install

# Bundle app source
COPY . .

# Indicates that the nodejs application inside the docker will start on port 3000
EXPOSE 3000

CMD [ "node", "server.js" ]