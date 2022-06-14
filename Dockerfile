#Specify the version of nodejs.
FROM node:12.0

#Install required packages in os(It is recommended to write it as a spell)
RUN apt-get update && apt-get install -y \
    #Because non-root users use root privileges
    sudo \
    #Get tools from internet
    wget \
    vim \
    apt-utils

#Creating an application directory
RUN mkdir /app
#Use app directory as development directory
WORKDIR /app

# RUN echo "DefaultLimitNOFILE=65535" >> /etc/systemd/system.conf
# RUN echo "DefaultLimitNOFILE=65535" >> /etc/systemd/user.conf

# https://www.codegrepper.com/code-examples/whatever/material+ui+Error%3A+ENOSPC%3A+System+limit+for+number+of+file+watchers+reached
RUN echo "fs.inotify.max_user_watches=524288" >> /etc/sysctl.conf

#Package in container.json and packate-lock.Make sure that two of json are copied
COPY postcss.config.js ./

# package.Install the package described in json.
COPY package.json ./
RUN npm i

#installed node_Copy files such as module to the container side.
#COPY . .

#RUN ls /app/*

CMD ["npm","run", "w4.webpack-build-production"]