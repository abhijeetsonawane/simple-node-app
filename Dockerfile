FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Installs dependencies
RUN npm install

# Indicates that the nodejs application inside the docker will start on port 3000
EXPOSE 3000

CMD [ "node", "server.js" ]