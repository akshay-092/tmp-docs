---
sidebar_position: 1
title: Chatwoot
slug: /chatwoot
---

The Chatwoot extension makes customer support seamless for your users. Instead of having two interfaces- one for chat between users and one for chat with your support team, you can use CometChat as a front-end for your customer support use case as well!

![](./assets/hou0795h82wqx8nuao1gvuhj8voozcv5194qj2axb54bd7k3xugudpga1xb4z180.jpg)

## Before you begin

1. You may have an existing account created with Chatwoot. If not, sign up with [Chatwoot](https://app.chatwoot.com/app/auth/signup).
2. Do the following mandatory setup on Chatwoot:
    1. To add Agent(s): [Click here](https://www.chatwoot.com/docs/user-guide/add-agent-settings)
    2. To create a Channel and Inbox: [Click here](https://www.chatwoot.com/docs/product/channels/api/create-channel)
    3. Only mention the name of the channel for now. The webhook URL can be skipped.

3. Get your Chatwoot Access token:
    1. Once you have logged in, click on your avatar in the bottom left corner.
    2. Scroll to the bottom of the Account settings section that opens up.
    3. You should find the Access token.

4. Get the inbox id:
    1. Once you have logged in, click on the Settings icon in the left bar.
    2. Click on the "Inboxes" in the navigation.
    3. Click on the Inbox that you want to set up for the CometChat support.
    4. Copy the Inbox ID from the URL. For eg, if the URL is: `https://app.chatwoot.com/app/accounts/123/settings/inboxes/12128` then the Inbox ID is `12128.`

5. Get the Account ID:
    1. While you have the settings open, click on the Account Settings in the navigation bar
    2. Copy the Account ID from there.

6. The above details will be required during the Extension's settings.

![_Getting Chatwoot Access token_](./assets/g2n77fcz39iqinz41evmcod3sj8vksy9ktzwup8d6j4zu5hrkbee9o3ny2jonvyr.png)

![_Getting Chatwoot Inbox ID_](./assets/b7txv8gls0lbwzs3v7rsw4eqvfvp1d1e7qefzsgphgqxubh96o0847qyj2e6wy8f.png)

![_Getting Chatwoot Account ID_](./assets/n70nc1y16b7ue64a9o4px5w9uspmwremxvdgvvcb54khoi55924e1h62bfkjzart.png)

## Extension settings

#### **On CometChat Dashboard**

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Chatwoot extension.
3. Open the Settings for this extension.
4. Enter the following details about your Chatwoot account (copied earlier):
    1. Chatwoot Access token
    2. Chatwoot Account ID
    3. Chatwoot Inbox ID

5. Enter the user's UID on CometChat who's going to be the Customer Support contact.
6. Once you save the settings, a webhook URL will be generated for you.

![_Chatwoot extension settings_](./assets/poi305w548f8iby8n7b5a2bstoibjp9pxippeq8oqygdesa82berqmj8ny7rj5dj.png)

#### On Chatwoot Dashboard

1. Go to the Settings and the Inboxes section.
2. Click on the settings icon for the inbox in use.
3. Paste the above copied URL in the Webhook URL section.

![_Paste the webhook URL on Chatwoot dashboard_](./assets/35xzn5birxb74d3h29n6stmalis93ks4ffy5s3xcf24vnwacx4a6c6jvuqgapmoi.png)

## How does it work?

- The end users of your app can send queries to the Customer Support user that you have set in the extension's settings.
- These queries will be forwarded to the configured Chatwoot inbox.
- When an agent replies to the queries, those will be sent over to CometChat and received by your end user.
- With this, your end users can communicate with each other as well as your Customer support team using the same Chat interface.