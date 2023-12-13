# Usa la imagen oficial de Node.js como base
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias
RUN npm install

# Comando para ejecutar la aplicación
CMD npm start

# Comando la aplicación se coloca en un contenedor de
# docker build -t nodedocker .      

# Cuando ejecutar aplicación
# docker run -it nodedocker