FROM node:20.11.1-bullseye-slim

RUN apt-get update && \
    apt-get install -y git && \
    rm -rf /var/lib/apt/lists/* && \
    npm install -g @angular/cli

WORKDIR /app