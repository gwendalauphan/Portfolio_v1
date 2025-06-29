# Changelog

Toutes les modifications notables de ce projet seront consignées ici.
Mettre à jour ce fichier est un bon moyen de suivre l'évolution du projet et de garder une trace des modifications apportées.
Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), et ce projet suit la [versionnage sémantique](https://semver.org/spec/v2.0.0.html).

### Liste des ajouts possibles
- ✨ Ajouts
- ⚙️ Changements
- 🔥 Suppressions
- 🐛 Corrections
- 📝 Documentation

## [unreleased]
🎉 Prochaine version

### ✨ Ajouts
- Ajout de la valeur "active" dans les inputs de la CI/CD pour permettre ou non le déploiement de l'application

### 🐛 Corrections
- Petites améliorations du système de détection de changements dans la CI/CD
- Modification des inputs de la CI/CD pour `update_variable_managment`
- Ajout de fiabilité dans la CI/CD pour éviter les erreurs de déploiement


## [v0.1.1] - 2025-10-05
🎉 Améliorations de la CI

### ✨ Ajouts
- Mise en place des secrets dans le vault
- Ajout du script de chargement des secrets

### ⚙️ Changements
- Amélioration de la pipeline pour éviter le rouge

## [v0.1.0] - 2025-08-05
🎉 Améliorations majeures et corrections

### ✨ Ajouts
- Ajout du schéma d'architecture
- Ajout des refs
- Ajout de depcheck, eslint et prettier et fix des erreurs
- Ajout de vars_env dans les inputs de la CI/CD

### ⚙️ Changements
- Amélioration du readme

### 🐛 Corrections
- Fix de la page Coming Soon
- Fix de la page About


## [v0.0.9] - 2025-05-05
🎉 Good fixes

- Meilleure responsivité pour mobile
- Amélioration de la page contact

### ✨ Ajouts
- Meilleures explications dans le README.md

### ⚙️ Changements
- Modification de la logique de la page Work
- Implémentation manuelle de la timeLine en react pour mobile

### 🐛 Corrections
- Ajustement de la page contact pour mobile

## [v0.0.8] - 2025-03-05
🎉 Seconde vraie release

- Amélioreation de la CI/CD
- Ajout d'un Health

### ✨ Ajouts
- Ajout d'un health dans l'application web
- Ajout d'un health check dans la CI/CD

### ⚙️ Changements
- Refacorisation de la CI/CD en plusieurs fichiers
- Mise en place de détection de changements dans certains dossiers pour éviter de lancer des tests et reconstruire l'image Docker à chaque fois

## [v0.0.2] - 2025-04-06
🎉 Première version stable du portfolio V1

- Mise en place du CHANGELOG.md
- Mise en place de la CI/CD
- Refactorisation du projet
- Ajout de la documentation

### ⚙️ Changements
- Refactor du Dockerfile avec multi-stage

### 🐛 Corrections
- Correction de l'affichage responsive
- Remplacement de librairies pour les icons

[unreleased]: https://gitlab.com/web6464113/portfolio_v1/-/commits/main
[v0.1.1]: https://gitlab.com/web6464113/portfolio_v1/-/commits/v0.1.1
[v0.1.0]: https://gitlab.com/web6464113/portfolio_v1/-/commits/v0.1.0
[v0.0.9]: https://gitlab.com/web6464113/portfolio_v1/-/commits/v0.0.9
[v0.0.8]: https://gitlab.com/web6464113/portfolio_v1/-/commits/v0.0.8
[v0.0.2]: https://gitlab.com/web6464113/portfolio_v1/-/commits/v0.0.2

