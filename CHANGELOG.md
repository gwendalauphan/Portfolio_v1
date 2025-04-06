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
[v0.0.2]: https://gitlab.com/web6464113/portfolio_v1/-/commits/v0.0.2

# Job DEPLOY
update-variable-managment:
  variables:
    REGISTRY_IMAGE:
      value: ""
    PROJECT_NAME:
      value: ""
    ENV_DEPLOYMENT:
      value: ""
      
  stage: deploy

  rules:
    # Déclenchement automatique après un tag
    - if: '$CI_COMMIT_TAG'
      when: on_success
    # Sinon, déclenchement manuel avec inputs
    - when: manual
      allow_failure: false
  needs:
    - job: build-tag
      artifacts: true
      optional: true
      
  script:
    - |
      echo "Déploiement du projet : $PROJECT_NAME"
      echo "Image utilisée : $REGISTRY_IMAGE"
      echo "Environnement : $ENV_DEPLOYMENT"
      if [[ -z "$REGISTRY_IMAGE" || -z "$PROJECT_NAME" || -z "$ENV_DEPLOYMENT" ]]; then
        echo "Erreur : une ou plusieurs variables d'environnement sont vides."
        exit 1
      fi
      exit 1
      curl -X POST \
      -F token=$TRIGGER_PIPELINE_TOKEN \
      -F ref=main \
      -F "variables[REGISTRY_IMAGE]=$REGISTRY_IMAGE" \
      -F "variables[PROJECT_NAME]=$PROJECT_NAME" \
      -F "variables[ENV_DEPLOYMENT]=$ENV_DEPLOYMENT" \
      https://gitlab.com/api/v4/projects/$VARIABLES_MANAGMENT_PROJECT_ID/trigger/pipeline