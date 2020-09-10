FROM node:buster

WORKDIR /matt/app/keikogram-react

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]