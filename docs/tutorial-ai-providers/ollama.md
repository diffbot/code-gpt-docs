---
sidebar_position: 14
---

# Ollama

Official website https://ollama.ai

Opensource project to run, create, and share large language models (LLMs).
## Connect Ollama Models
- Download and Install Ollama from the link: [ollama.ai](https://ollama.ai/).


### Download models via the console
- To download and use a model immediately in the terminal, run: `ollama run MODEL`. For example: `ollama run deepseek-r1`

   <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/258d5faa-3d8c-4198-aabe-5378b3bf3aae"/></p>
   This command downloads the model (if not already available) and starts using it right away.

- To only download the model for later use in CodeGPT, run: `ollama pull MODEL`, for example :`ollama pull deepseek-r1`.
  This command downloads the model without running it, making it available for integration in CodeGPT.
- Please wait until the loading reaches 100% completion.
<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/11bc56a1-62d1-46ad-96cd-465a325b2c7c"/></p>


# How to use Ollama

- On the VSCode CodeGPT Extension, change the model on the chat.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/654fde38-2dac-453c-9769-830a70086504"/></p>

- Pick the `Local LLMs` and select `Ollama` as `Provider`.
- Use the models available directly.
- Paste the link of the server where the model is running. For localhost: `http://localhost:11434`. 
- Click outside the options and ask to chat.

<p align="center"><img width="537" height="771" alt="image" src="https://github.com/user-attachments/assets/6471e45a-b971-41cf-9033-fbf538c1e800" /></p>


:::caution Remove or edit Key
To remove the port, click on `Change connection settings` button.
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/b32595a0-47de-4f9b-804b-3d6188fb1027"/></p>
:::
 

## Autocomplete models availables:
- codestral:latest
- qwen2.5-coder:7b
- deepseek-coder:base
- qwen2.5-coder:1.5b
- codegemma:code
- codellama:code

## API Errors
If you are getting API errors, check the following link: [Ollama Documentation](https://ollama.ai/)

## Ollama Errors
- If the Ollama model does not respond in the chat, consider restarting it locally by turning it off and then on again. This action should resolve the issue.
 
- If the Ollama is running but not responding, please manually remove 'Ollama_Host' from the environment variables and let it revert to the default setting.
    
We recomment this article to solve the issue of : [Ollama_Host](https://insights.codegpt.co/codegpt-wsl-ollama-setup-guide) 

 


