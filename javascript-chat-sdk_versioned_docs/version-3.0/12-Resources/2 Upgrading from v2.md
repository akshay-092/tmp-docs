---
sidebar_position: 2
title: Upgrading from v2
slug: /resources-upgrading-from-v2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upgrading from v2.x to v3 is fairly simple. Below are the major changes that are released as a part of CometChat Pro v3:

Please follow the [setup](./setup) instructions to upgrade to latest version of V3 before proceeding further

:::info Please Note
 v3 apps are compatible only with v3.x SDKs and will not function with v2.x SDKs. In case you want to migrate an existing v2 app to v3, you can achieve this from the [CometChat Dashboard](https://app.cometchat.com/).
:::

## Delivery Receipts

In v2.x, the messages were being marked as delivered internally by the SDKs. Starting v3, we have stopped marking the messages as delivered internally and it will have to be managed via the SDK.

You can read more about the `markAsDelivered()` method [here](./messaging-receipts#mark-messages-as-delivered).

## Read Receipts

Starting v3.0, the method signature has been changed. Now the `markAsRead()` takes 4 parameters: `messageId`, `receiverId`, `receiverType` & `senderId` as input. This method will mark all the messages before the provided messageId for the conversation with the specified `receiverId` as read. Also, we have added one more signature of `markAsRead()` which takes only 1 parameter: `message` Object as input.

You can read more about the `markAsRead()` method [here](./messaging-receipts#mark-messages-as-read).

<Tabs>
<TabItem value="Mark as Read" label="Mark as Read">

  ```javascript
//v2.x

CometChat.markAsRead(messageId, receiverId, receiverType);

//v3.x

CometChat.markAsRead(messageId, receiverId, receiverType, senderId);
// OR
CometChat.markAsRead(message);  
  ```
</TabItem>
</Tabs>



## User/Group Tags in Conversation

In v2.x, the user/group tags were by default fetched in a `Conversation` Object while fetching the `Conversation List`.

Starting v3, we have added a method (`withUserAndGroupTags()`) to fetch the user/group tags in a `Conversation` Object while fetching the `Conversation List`.

<Tabs>
<TabItem value="Fetching User/Group Tags in Conversation" label="Fetching User/Group Tags in Conversation">

  ```javascript
let conversationRequest = new CometChat.ConversationsRequestBuilder()
														.setLimit(50)
														.withUserAndGroupTags(true)
														.build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let conversationRequest: CometChat.ConversationsRequest = new CometChat.ConversationsRequestBuilder()
    .setLimit(50)
    .withUserAndGroupTags(true)
    .build();
  ```
</TabItem>
</Tabs>