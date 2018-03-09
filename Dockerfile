FROM node:8.9.3-alpine
LABEL maintainer="Partner Ecosystem Team, IBM Digital Business Group <imcloud@ca.ibm.com>"

# Build time variable
ARG NPM_PASSWORD
ARG NPM_USERNAME
ARG NPM_EMAIL
ENV NPM_REGISTRY //na.artifactory.swg-devops.com/artifactory/api/npm/apset-npm/

RUN mkdir /app
WORKDIR /app

ADD . /app

# Install app dependencies
RUN printf "@apset:registry=https:${NPM_REGISTRY}\n${NPM_REGISTRY}:_password=${NPM_PASSWORD}\n${NPM_REGISTRY}:username=${NPM_USERNAME}\n${NPM_REGISTRY}:email=${NPM_EMAIL}\n${NPM_REGISTRY}:always-auth=true\n" > .npmrc && yarn install

ENV PORT 80

EXPOSE 80

CMD [ "yarn", "start" ]
