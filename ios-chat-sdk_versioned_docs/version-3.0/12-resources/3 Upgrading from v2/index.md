---
sidebar_position: 3
title: Upgrading from v2
slug: /upgrading-from-v2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upgrading from v2.x to v3 is fairly simple. Below are the major changes that are released as a part of CometChat Pro v3:

Please follow the [setup](./overview) instructions to upgrade to the latest V3 version.

:::info Please note
v3 apps are compatible only with v3.x SDKs and will not function with v2.x SDKs. In case you want to migrate an existing v2 app to v3, you can achieve this from the [CometChat Dashboard](https://app.cometchat.com/).
:::

### Delivery Receipts

In v2.x, the messages were being marked as delivered internally by the SDKs. Starting v3, we have stopped marking the messages as delivered internally and this will have to be managed via the SDKs.

You can read more about the `markAsDelivered()` method [here](./delivery-read-receipts#mark-messages-as-delivered)

Starting v3.0, the method signature has been changed. Now the `markAsRead()` takes 4 parameters: `messageId`,`receiverId`, `receiverType` & `senderId` as input. This method will mark all the messages before the provided messageId for the conversation with the specified `receiverId` as read. Also, we have added one more signature of `markAsRead()` which takes only 1 parameter: `message` Object as input.

You can read more about the `markAsRead()` method [here](./delivery-read-receipts#mark-messages-as-read).


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// v2.x

CometChat.markAsRead(messageId: messageId, receiverId: receiverId, receiverType: .user)


// v3.x

CometChat.markAsRead(messageId: messageId, receiverId: receiverId, receiverType: .user, messageSender: senderId)
//OR
CometChat.markAsRead(baseMessage : baseMessage)
```
</TabItem>
</Tabs>



User/Group Tags in Conversation

In v2.x, the user/group tags were by default fetched in a `Conversation` Object while fetching the `Conversation List`.
Starting v3, we have added a method (`withUserAndGroupTags()`) to fetch the user/group tags in a `Conversation` Object while fetching the `Conversation List`.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let convRequest = ConversationRequest.ConversationRequestBuilder(limit: 50)
.setConversationType(conversationType: .user)
.withUserAndGroupTags(true)
.build()
```
</TabItem>
</Tabs>

