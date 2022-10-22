FROM node:19.0-bullseye

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Install node-postgres 
RUN npm install pg

# If you are building your code for production
# RUN npm ci

# Layer 2

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "npm", "start" ]