
# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage
# specifying the working dir inside container 
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . . 
RUN REACT_APP_YOUTUBE_API_KEY=AIzaSyA7nP9HDYF2OvOpp1Ryp55J0um-b14V91Y npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /usr/src/app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf