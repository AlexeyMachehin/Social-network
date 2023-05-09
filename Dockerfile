# используем node версии 18
FROM node:18

# создаем и переходим в рабочую директорию приложения
WORKDIR /app

# копируем package.json и package-lock.json
COPY package*.json ./

# устанавливаем зависимости
RUN npm install

# копируем все файлы проекта
COPY . .

# билдим приложение
RUN npm run build

# задаем команду запуска приложения
CMD ["npm", "run", "dev"]
