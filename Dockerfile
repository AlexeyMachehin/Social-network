# Используем Node.js в качестве базового образа
FROM node:18.12.1

# Установка зависимостей
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Запуск приложения
CMD [ "npm", "run", "dev" ]
