# Version alpine de node, ya que es muy ligera
FROM node:alpine
WORKDIR /usr/app

# Copy de los archivos necesarios
COPY ./src ./src
COPY ./docs ./docs
COPY ./package.json .
COPY ./package-lock.json .

# La aplicación se escucha el puerto que se indica en la variable de entorno PORT
EXPOSE $PORT

# El servidor en docker siemopre se lanza en produccion
ENV NODE_ENV=production

# Instalación de dependencias
RUN npm ci --only=prod

# Se lanza server
ENTRYPOINT npm run start-heroku



