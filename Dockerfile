FROM node:latest
RUN mkdir -p /usr/src/db-live
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
WORKDIR /usr/src/db-live
COPY package.json /usr/src/db-live/
COPY yarn.lock /usr/src/db-live/
RUN yarn install
COPY . /usr/src/db-live
EXPOSE 3000
CMD [ "yarn", "start" ]