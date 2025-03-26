---
title: Create and Log In a User
description: This guide walks you through how to log in and create a cometchat user.
slug: Create-and-Log-In-a-User
authors:
  - name: Erica Pereira
    title: Solution Engineer
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
tags: [api]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

This documentation provides a step-by-step guide on creating and logging in a user using the CometChat platform.

## Introduction

To log on a user, the user must exist within the CometChat server. If it's the first time the user is logging on, we must create
the user in CometChat. After the user is created, we can generate an authentication for the user.
Finally, we use the authentication token to log in the user via CometChat SDK/UI Kit.
Once the User is successfully logged on to CometChat, we can request/post any data needed for the app.
We recommend to create a new token for each device that logs in.