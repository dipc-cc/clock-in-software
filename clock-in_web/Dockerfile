# Stage 1: Build the Angular app
FROM node:20.19 AS build
env NODE_OPTIONS="--openssl-legacy-provider --no-experimental-fetch"

WORKDIR /var/www/html

# Install Angular CLI
RUN npm install -g @angular/cli

# Copy package files
COPY package*.json ./

# Copy all source files
COPY . .

# Install dependencies
RUN npm install

# Build the app for dev
RUN ng build
# Build the app for prod
#RUN ng build --prod

# Stage 2: Serve the app with Nginx
FROM nginx:latest

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built app from previous stage
COPY --from=build /var/www/html/dist/clock-in-web /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
