---
sidebar_position: 7
---

# Microsoft Azure AI

Official website https://azure.microsoft.com/en-us/products/ai-services/openai-service

## Microsoft Azure

- Create an account in [Microsoft Azure](https://azure.microsoft.com/en-us/free).
- Get access to [Azure OpenAI Services](https://azure.microsoft.com/en-us/products/ai-services/openai-service).
- Go to [Azure AI Foundry](https://ai.azure.com/) (formerly Azure OpenAI Studio) and deploy a model. Note the **deployment name** you give it.
- Open the deployment and select **View code**. It shows two things you need:
  - the **API key**
  - the **endpoint**. Either form works in CodeGPT:
    - the resource host only, for example `https://my-resource.openai.azure.com`
    - the full request URL from the code sample, for example `https://my-resource.openai.azure.com/openai/deployments/my-deployment/chat/completions?api-version=2024-10-21`. When you paste this form, CodeGPT uses the deployment and api-version from it.
- In the CodeGPT extension, open **Select your model** → **Manage Models** → **API Keys** and pick **Azure** as the provider.
- Paste the endpoint into **Custom Link** and the key into **API Key**, then click **Connect**.
- Select a model. The model name must be your **deployment name** as shown in Azure, not the underlying model's name. If your deployment is not in the list, type it in.
- Click outside the options and ask something in the chat.

:::note api-version
If you paste only the resource host, CodeGPT calls the `2024-10-21` API version. To use a different version, paste the full request URL from **View code** and CodeGPT will use the api-version it contains.
:::

:::caution Remove or edit Key
To remove your API Key from CodeGPT, click on `Change connection settings` button
:::

## API Errors

- `404 Resource not found`: the model name in CodeGPT does not match a deployment name in your resource, or the endpoint points at a different resource.
- `401 Access denied`: wrong key, or the key belongs to another resource.
- Other errors: check the [Microsoft Azure Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference).
