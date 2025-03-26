---
sidebar_position: 6
title: Calling
slug: /calling
---

Calling is a core feature of CometChat. CometChat allows two mechanisms for calling

## Prerequisites

---

1. CometChat Core SDK installed.
2. Performed the steps mentioned in the [Setup](./setup) guide.

:::info Add the CometChat Calls Dependency
v3.0.2+ onwards, Voice & Video Calling functionality has been moved to a separate framework. Please add the following pod to your app `Podfile` in case you plan on using the Voice and Video Calling feature. <br /> 
`pod 'CometChatCalls', '2.3.0'`
:::



1. **Direct Calling**
2. **Default Calling**

## Direct Calling

Direct Calling allows you to start the call/conference sessions directly with the session Id of your choice. All the users joining the same session Id are connected to the same call/conference.
For more information on Direct Calling, please visit the [Direct Calling](./direct-calling1)

## Default Calling

The second approach that CometChat allows is to implement the entire calling flow where one user initiates a call/conference and other user/users who want to be a part of the call accept/reject the call. All the users that accept the call are connected to the same session.
For more information on Default Calling, please visit the [Default Calling docs](./default-calling1)