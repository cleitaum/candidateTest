# Introduction

Criar o build e implantar para rodar no cluster swarm junto com nginx na porta 80

```bash
docker build -t node-docker-api .
```

Command to run

```bash
docker run -p 3000:3000 node-docker-api
```
