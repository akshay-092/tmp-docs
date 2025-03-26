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
2. Performed the steps mentioned in the [Setup](./setup#calling-component-configuration) guide

:::info

v2.4+ onwards, Voice & Video Calling functionality has been moved to a separate library. Please add the following dependency to your package.json file in case you plan on using the Voice and Video Calling feature.

For capacitor v2 apps,
`dependencies: {>     "@cometchat-pro/ionic-calls": "2.1.2"> }`

For capacitor v3 apps,
`dependencies: { "@cometchat-pro/ionic-calls": "2.3.0" }`

And run `npm install` to install the package.

:::

**CometChat allows two mechanisms for calling:**

1. **Direct Calling**
2. **Default Calling**

![](./assets/1623199592.png)

## Direct Calling

Direct Calling allows you to start the call/conference sessions directly with the session Id of your choice. All the users joining the same session Id are connected to the same call/conference.
For more information on Direct Calling, please visit the [Direct Calling docs](./calling-direct-calling).

## Default Calling

The second approach that CometChat allows is to implement the entire calling flow where one user initiates a call/conference and other user/users who want to be a part of the call accept/reject the call. All the users that accept the call are connected to the same session.
For more information on Default Calling, please visit the [Default Calling docs](./calling-default-calling).