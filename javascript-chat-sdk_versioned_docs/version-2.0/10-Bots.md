---
sidebar_position: 9
title: Bots
slug: /bots
---

Bots are special users, in CometChat, who can send and receive messages autonomously. Users can text bots privately in one-on-one conversations as well as in groups. When a bot receives a message, either in a one-on-one conversation or in a group conversation, CometChat forwards the message to a Callback URL that you specify. Once you receive this message, you can send a reply using our API.


## The flow



### Create a user
CometChat requires you to connect every bot to a user. This has one major advantage- at any time, you can log in as that bot user and send out personalized replies. So before you create a bot, you must first create a new user.



### Create the bot
Once you've created a user, you can create a new bot. The actual implementation of the bot is entirely up to you. You simply need to specify a `Callback URL` and CometChat will automatically start forwarding all messages that fit the criteria to the URL.



### Reply to a message
When you receive a message from CometChat, you can process it and provide a response using our [Send Bot Message](https://api-explorer.cometchat.com/reference/sends-bot-message) Rest API.