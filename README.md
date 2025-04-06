# Portfolio V1

## Description
This is a simple portfolio website built with HTML, CSS, and JavaScript. It showcases my projects and skills in a clean and modern design.

# How to contribute

```bash
cd app
npm install
npm run dev
```
# How to run standalone
```bash
cd standalone
docker compose up -d
```
# How to deploy in production
```bash
cd docker
docker compose build
docker push registry.gitlab.com/web6464113/portfolio_v1/portfolio_v1-app-builder:v0.0.1
```

Update the repo variables_management:
- https://gitlab.com/web6464113/variables_management


Then, goto the project:
- https://gitlab.com/web6464113/reverse_proxy_vm_2cpu

And build the project the image.
Run the pipeline or the playbooks to deploy the project.



Quality tools
- Gitlab CI/CD
- npm run lint
- npm run format
- npm run test
- hadolint
- CHANGELOG.md

Need to finish:
- tag-release, implement trigger to update variables_management for dev and prd

Need to check:
- https://docs.gitlab.com/ci/docker/docker_layer_caching/
- https://docs.docker.com/build/bake/reference/
- Dockle
- Hadolint


