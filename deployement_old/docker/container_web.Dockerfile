# Étape de construction avec Node.js
FROM node:18 AS build

WORKDIR /app
COPY new_site/package*.json ./
RUN npm install
COPY new_site/ ./
RUN npm run build

RUN ls -l /app/dist

# Étape pour servir l'application avec NGINX et SQLite
FROM nginx:alpine

# Installation de SQLite (pour Alpine)
RUN apk add --no-cache sqlite

# Copie des fichiers de build et des autres ressources nécessaires
COPY --from=build /app/dist /usr/share/nginx/html
RUN ls -l /usr/share/nginx/html

# (Optionnel)
#COPY ./path_to_your_sqlite_db /path_inside_container/

# (Optionnel) Si tu as une configuration NGINX personnalisée
# COPY ./nginx-custom-config /etc/nginx/conf.d/default.conf
