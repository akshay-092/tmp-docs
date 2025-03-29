---
sidebar_position: 0
title: Overview
slug: /overview
---

## AI-Enabled Messaging Experience

For users seeking guidance or insights from automated assistants, the **AI Bots** and **Ask Bot** features are designed to maintain conversational momentum.

## Pre-requisite

- Login to your [CometChat dashboard](https://app.cometchat.com/login) and choose your app.
- Navigate to **AI Chatbot** > **Settings** in the left-hand menu.

![CometChat AI settings](./assets/cometchat-dashboard-ai-overview.png)

### Set the GPT Model

Enter the name of the Open AI ChatGPT model that you intend to use.

### Save the Open AI Key

You can get the Open AI Key from your [Open AI Account](https://platform.openai.com/account/api-keys). This will be used by CometChat to interact with the Open AI APIs.

### Set a Custom Instruction

Custom Instruction is an information which gets added in each and every ChatGPT prompt made by the CometChat AI. Custom Instruction is app-level information you can add to describe your use-case & inform what kind of responses you need from the CometChat AI.

### Set the Temperature

The API is non-deterministic by default. This means that you might get a slightly different completion every time you call it, even if your prompt stays the same. Setting temperature to 0 will make the outputs mostly deterministic, but a small amount of variability will remain.

Lower values for temperature result in more consistent outputs, while higher values generate more diverse and creative results. Select a temperature value based on the desired trade-off between coherence and creativity for your specific application.

### Enable AI

Toggle on AI.
