#!/bin/sh

# Utilisation de la variable d'environnement pour le répertoire de build

echo "Nettoyage du répertoire de build..."
rm -rf ${BUILD_PATH}/*

echo "Démarrage du processus de build..."
npm run build

echo 'Build complete'

exit 0
