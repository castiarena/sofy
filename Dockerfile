FROM node:latest
RUN mkdir -p /usr/src/sofy
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
WORKDIR /usr/src/sofy
COPY package.json /usr/src/sofy/
COPY yarn.lock /usr/src/sofy/
RUN yarn install
COPY . /usr/src/sofy
EXPOSE 3000
CMD [ "yarn", "build", "&&", "yarn", "start" ]