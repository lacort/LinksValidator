###########################################################
# Dockerfile to build LINK VALIDATOR
# Based on Ubuntu 16.04 LTS
# VERSION 1.0
############################################################

## IMPORTANT - OTHER SETTINGS PER ENVIROMENT ARE REQUIRED
# - Set up UFW's Rules
# - "Let's Encrypt" Configuration and Scheduling
# - Set up the Apache Enviroment (dev|prod|test)
# - Clone App From Github
# - Composer dependences instalation
# - Create the CDN's folders and their permissions

FROM ubuntu:20.04


# UBUNTU UPGRADE
RUN apt-get update --fix-missing
RUN apt-get -y upgrade
RUN apt-get -y update
RUN apt-get -y install nano

# GENERAL PACKAGES
RUN apt-get install -y curl
RUN apt-get -y install git
RUN apt-get -y install wget
RUN apt-get -y install unzip
RUN apt-get -y install inetutils-ping
RUN apt-get -y install cron

# NODE.JS INSTALLATION
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get -y update --fix-missing
RUN apt-get install -y nodejs
RUN mkdir /var/node