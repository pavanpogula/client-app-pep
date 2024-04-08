FROM node:18-alpine

WORKDIR /app

ARG REACT_APP_BASE_URL=default
ARG REACT_APP_SECRET=default
ARG REACT_APP_URL=default

# Set environment variables using the build-time arguments
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL \
    REACT_APP_SECRET=$REACT_APP_SECRET \
    REACT_APP_URL=$REACT_APP_URL

COPY package.json ./


RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm","start"]