# Usar la imagen base de Node.js 18
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y yarn.lock
COPY package.json package-lock.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar todos los archivos del proyecto al contenedor
COPY . .

# Construir el proyecto para producción
RUN npm run build

# Instalar un servidor estático para servir el contenido
RUN npm install -g serve

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar el servidor y exponer el contenido del build en el puerto 80
CMD ["serve", "-s", "dist", "-l", "80"]
