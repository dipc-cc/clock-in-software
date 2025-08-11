# con nada más nuevo que la 14 no funciona el login, en la 14-alpine podemos instalar ldapsearch
FROM node:14.0-alpine

WORKDIR /opt/clock-in_server

# Install dependencies required by pm2 and bunyan
RUN apk add --update --no-cache make
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
# Install ldapsearch
RUN apk add --update --no-cache openldap-clients

# Install dependencies
COPY package*.json ./
# Copy source code
COPY . .

RUN npm install --unsafe-perm

# Install PM2 globally
RUN npm install -g pm2

# Install Bunyan for logging
RUN npm install bunyan -g

# Expose the API port
EXPOSE 8080

# Start the application
CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
