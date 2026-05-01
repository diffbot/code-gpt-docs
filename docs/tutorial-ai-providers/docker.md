---
sidebar_position: 14
---

# Docker 

Official website https://docs.docker.com

**Requires**:
- Docker Desktop 4.40 and later
- CodeGPT 3.11.54 and later

## Connect Docker Model Runner
- Download and Install Docker Desktop from the link: [docker.com](https://www.docker.com/products/docker-desktop/).


### Download models via the console

- Check whether the Docker Model Runner is active: `docker model status`

- To download a model in the terminal, run: `docker model pull <model>`. For example: `docker model pull ai/smollm2`

- Please wait until the loading reaches 100% completion.

# How to use Docker Model Runner 

- On the VSCode CodeGPT Extension, change the model on the chat.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/654fde38-2dac-453c-9769-830a70086504"/></p>

- Pick the `Local Models` and select `Docker` as `Provider`.
- Use the models available directly.
- Paste the link of the server where the model is running. For localhost: `http://localhost:12434`. 
- Click outside the options and ask to chat.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/77c4631c-5cec-4594-8d5b-6775866231d1"/></p>

## API Errors
If you are getting API errors, check the following link: [Docker Documentation](https://docs.docker.com/desktop/features/model-runner/)

## Docker Errors
- If the model does not respond in the chat, consider restarting it locally by turning it off and then on again. This action should resolve the issue.
