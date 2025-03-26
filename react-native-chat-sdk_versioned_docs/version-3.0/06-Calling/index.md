---
sidebar_position: 6
title: Calling
slug: /calling
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Calling is a core feature of CometChat. Calling allows users to connect over voice/video calls.

## Prerequisites

1. CometChat Core SDK installed.
2. Performed the steps mentioned in the [Setup](./setup#calling-component-configuration) guide.

:::info Add the CometChat Calls Dependency

v2.4+ onwards, Voice & Video Calling functionality has been moved to a separate library. Please add the following dependency to your package.json file in case you plan on using the Voice and Video Calling feature.

dependencies: \{ "@cometchat-pro/react-native-calls": "2.3.0" }

And run npm install to install the package.

:::

CometChat allows two mechanisms for calling:

1. **Direct Calling**
2. **Default Calling**

## Direct Calling

Direct Calling allows you to start the call/conference sessions directly with the session Id of your choice. All the users joining the same session Id are connected to the same call/conference.
For more information on Direct Calling, please visit the [Direct Calling](./calling-direct-calling).

## Default Calling

The second approach that CometChat SDK allows is to implement the entire calling flow where one user initiates a call/conference. The other user/users who want to be a part of the call accept the call. All the users that accept the call are connected to the same session.
The users also have an option to reject the call.
For more information on Default Calling, please visit the [Default Calling](./calling-default-calling).

:::danger

If you are using Expo CLI to build a React Native app, the calling component will not work as our calling component needs native-level changes. However, you can create a React Native app using React Native CLI or use the ‘expo eject’ command to convert your app from an expo-managed workflow to a bare workflow.

:::