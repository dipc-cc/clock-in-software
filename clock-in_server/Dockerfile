# con nada más nuevo que la 14 no funciona el login, pero en la 14 no podemos instalar ldapsearch
#FROM node:20.19-bullseye
FROM node:14.0-alpine
#FROM node:14.0

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

#RUN apt install -y ldap-utils
#RUN wget http://ftp.ca.debian.org/debian/pool/main/o/openldap/libldap-2.4-2_2.4.57+dfsg-3+deb11u1_amd64.deb
#RUN dpkg -i libldap-2.4-2_2.4.57+dfsg-3+deb11u1_amd64.deb
#RUN wget http://ftp.ca.debian.org/debian/pool/main/o/openldap/ldap-utils_2.4.57+dfsg-3+deb11u1_amd64.deb
#RUN dpkg -i ldap-utils_2.4.57+dfsg-3+deb11u1_amd64.deb

# Expose the API port
EXPOSE 8080

# Start the application
CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
