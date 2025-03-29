---
sidebar_position: 2
title: Upgrading from V3
slug: /upgrading-from-v3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Upgrading From v3

Upgrading from v3.x to v4 is fairly simple. Below are the major changes that are released as a part of CometChat v4:

Please follow the [setup](./setup-sdk) instructions to upgrade to latest version of V4 before proceeding further


## Dependency Change

# Chat SDK

<Tabs>
<TabItem value="js" label="Javascript">

  ```javascript
npm i @cometchat/chat-sdk-javascript
  ```
</TabItem>
</Tabs>

# Calls SDK

<Tabs>
<TabItem value="js" label="Javascript">

  ```javascript
npm i @cometchat/calls-sdk-javascript
  ```
</TabItem>
</Tabs>

## Change The Import Statements
Change the import statements all around the project.

# Chat SDK
<Tabs>
<TabItem value="js" label="Javascript">

  ```javascript
import {CometChat} from '@cometchat/chat-sdk-javascript';
  ```
</TabItem>
</Tabs>

# Calls SDK
<Tabs>
<TabItem value="js" label="Javascript">

  ```javascript
import {CometChatCalls} from '@cometchat/calls-sdk-javascript';
  ```
</TabItem>
</Tabs>