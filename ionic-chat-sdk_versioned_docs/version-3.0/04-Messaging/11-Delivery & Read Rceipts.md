---
sidebar_position: 11
title: Delivery & Read Receipts
slug: /messaging-receipts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Mark Messages as Delivered

_In other words, as a recipient, how do I inform the sender that I've received a message?_

You can mark the messages for a particular conversation as read using the `markAsDelivered()` method. This method takes the below parameters as input:

| Parameter | Information | 
| ---- | ---- | 
| `messageId` | The ID of the message above which all the messages for a particular conversation are to be marked as read. | 
| `receiverId` | In case of one to one conversation message's sender `UID` will be the receipt's receiver Id.<br/>In case of group conversation message's receiver Id will be the receipt's receiver Id. | 
| `receiverType` | Type of the receiver. Could be either of the two values( user or group). | 
| `senderId` | The `UID`  of the sender of the message. | 


Messages for both User conversation and Groups can be marked as read using this method.

Ideally, you would like to mark all the messages as delivered for any conversation when the user opens the chat window for that conversation. This includes two scenarios:

1. **When the list of messages for the conversation is fetched**: In this case you need to obtain the last message in the list of messages and pass the message Id of that message to the markAsDelivered() method.
2. **When the user is on the chat window and a real-time message is received:** In this case you need to obtain the message Id of the message and pass it to the markAsDelivered() method.

<Tabs>
<TabItem value="js1" label="Javascript(User)">

```js
var messageId = "MESSAGE_ID";
var receiverId = "MESSAGE_SENDER_UID";
var receiverType = "user";
var senderId = "MESSAGE_SENDER_UID";
CometChat.markAsDelivered(messageId, receiverId, receiverType, senderId);
```

</TabItem>

<TabItem value="ts1" label="Javascript(Group)">

```js
var messageId = "MESSAGE_ID";
var receiverId = "MESSAGE_RECEIVER_GUID";
var receiverType = "group";
var senderId = "MESSAGE_SENDER_UID";
CometChat.markAsDelivered(messageId, receiverId, receiverType, senderId);
```

</TabItem>
<TabItem value="js" label="Typescript(User)">

```ts
var messageId: string = "MESSAGE_ID";
var receiverId: string = "MESSAGE_SENDER_UID";
var receiverType: string = "user";
var senderId: string = "MESSAGE_SENDER_UID";
CometChat.markAsDelivered(messageId, receiverId, receiverType, senderId);
```

</TabItem>

<TabItem value="ts" label="Typescript(Group)">

```ts
var messageId: string = "MESSAGE_ID";
var receiverId: string = "MESSAGE_RECEIVER_GUID";
var receiverType: string = "group";
var senderId: string = "MESSAGE_SENDER_UID";
CometChat.markAsDelivered(messageId, receiverId, receiverType, senderId);
```

</TabItem>
</Tabs>



This method will mark all the messages before the messageId specified, for the conversation with receiverId and receiverType(user/group) as delivered.

In case you would like to be notified of an error if the receipts fail to go through you can use `.then(successCallback, failureCallback)` of the `markAsDelivered` method.

<Tabs>
<TabItem value="js1" label="Javascript(User)">

```js
CometChat.markAsDelivered(message.getId(), message.getSender().getUid(), 'user', message.getSender().getUid()).then(
    () => {
        console.log("mark as delivered success.");
    }, error => {
        console.log("An error occurred when marking the message as delivered.", error);
    }
);
```

</TabItem>

<TabItem value="ts1" label="Javascript(Group)">

```js
CometChat.markAsDelivered(message.getId(), message.getReceiverUid(), 'group', message.getSender().getUid()).then(
    () => {
        console.log("mark as delivered success.");
    }, error => {
        console.log("An error occurred when marking the message as delivered.", error);
    }
);
```

</TabItem>
<TabItem value="js" label="Typescript(User)">

```ts
var messageId: string = "MESSAGE_ID";
var receiverId: string = "MESSAGE_SENDER_UID";
var receiverType: string = "user";
var senderId: string = "MESSAGE_SENDER_UID";
CometChat.markAsDelivered(messageId, receiverId, receiverType, senderId).then(
    () => {
        console.log("mark as delivered success.");
    }, (error: CometChat.CometChatException) => {
        console.log("An error occurred when marking the message as delivered.", error);
    }
);
```

</TabItem>

<TabItem value="ts" label="Typescript(Group)">

```ts
var messageId: string = "MESSAGE_ID";
var receiverId: string = "MESSAGE_RECEIVER_GUID";
var receiverType: string = "group";
var senderId: string = "MESSAGE_SENDER_UID";
CometChat.markAsDelivered(messageId, receiverId, receiverType, senderId).then(
    () => {
        console.log("mark as delivered success.");
    }, (error: CometChat.CometChatException) => {
        console.log("An error occurred when marking the message as delivered.", error);
    }
);
```

</TabItem>
</Tabs>



Another option the CometChat SDK provides is to pass the entire message object to the markAsDelivered() method.

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.markAsDelivered(message);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let message: CometChat.BaseMessage;
CometChat.markAsDelivered(message);
```

</TabItem>
</Tabs>



In case you would like to be notified of an error if the receipts fail to go through you can use `.then(successCallback, failureCallback)` of the `markAsDelivered` method.

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.markAsDelivered(message).then(
    () => {
        console.log("mark as delivered success.");
    }, error => {
        console.log("An error occurred when marking the message as delivered.", error);
    }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let message: CometChat.BaseMessage;
CometChat.markAsDelivered(message).then(
    () => {
        console.log("mark as delivered success.");
    }, (error: CometChat.CometChatException) => {
        console.log("An error occurred when marking the message as delivered.", error);
    }
);
```

</TabItem>
</Tabs>



## Mark Messages as Read

_In other words, as a recipient, how do I inform the sender I've read a message?_

You can mark the messages for a particular conversation as read using the `markAsRead()` method. This method takes the below parameters as input:

| Parameter | Information | 
| ---- | ---- | 
| `messageId` | The ID of the message above which all the messages for a particular conversation are to be marked as read. | 
| `receiverId` | In case of one to one conversation message's sender `UID` will be the receipt's receiver Id.<br/>In case of group conversation message's receiver Id will be the receipt's receiver Id | 
| `receiverType` | Type of the receiver. Could be either of the two values( user or group) | 
| `senderId` | The `UID` of the sender of the message. | 


Messages for both User conversation and Groups can be marked as read using this method.

Ideally, you would like to mark all the messages as read for any conversation when the user opens the chat window for that conversation. This includes two scenarios:

1. **When the list of messages for the conversation is fetched**: In this case you need to obtain the last message in the list of messages and pass the message Id of that message to the markAsRead() method.
2. **When the user is on the chat window and a real-time message is received:** In this case you need to obtain the message Id of the message and pass it to the markAsRead() method

<Tabs>
<TabItem value="js1" label="Javascript(User)">

```js
var messageId = "MESSAGE_ID";
var receiverId = "MESSAGE_SENDER_UID";
var receiverType = "user";
var senderId = "MESSAGE_SENDER_UID";
CometChat.markAsRead(messageId, receiverId, receiverType, senderId);
```

</TabItem>

<TabItem value="ts1" label="Javascript(Group)">

```js
var messageId = "MESSAGE_ID";
var receiverId = "MESSAGE_RECEIVER_GUID";
var receiverType = "group";
var senderId = "MESSAGE_SENDER_UID";
CometChat.markAsRead(messageId, receiverId, receiverType, senderId);
```

</TabItem>
<TabItem value="js" label="Typescript(User)">

```ts
var messageId: string = "MESSAGE_ID";
var receiverId: string = "MESSAGE_SENDER_UID";
var receiverType: string = "user";
var senderId: string = "MESSAGE_SENDER_UID";
CometChat.markAsRead(messageId, receiverId, receiverType, senderId);
```

</TabItem>

<TabItem value="ts" label="Typescript(Group)">

```ts
var messageId: string = "MESSAGE_ID";
var receiverId: string = "MESSAGE_RECEIVER_GUID";
var receiverType: string = "group";
var senderId: string = "MESSAGE_SENDER_UID";
CometChat.markAsRead(messageId, receiverId, receiverType, senderId);
```

</TabItem>
</Tabs>


This method will mark all the messages before the messageId specified, for the conversation with receiverId and receiverType(user/group) as read.

In case you would like to be notified of an error if the receipts fail to go through you can use `.then(successCallback, failureCallback)` of the `markAsDelivered` method.

<Tabs>
<TabItem value="js1" label="Javascript(User)">

```js
CometChat.markAsRead(message.getId(), message.getSender().getUid(), 'user', message.getSender().getUid()).then(
    () => {
        console.log("mark as read success.");
    }, error => {
        console.log("An error occurred when marking the message as read.", error);
    }
);
```

</TabItem>

<TabItem value="ts1" label="Javascript(Group)">

```js
CometChat.markAsRead(message.getId(), message.getReceiverUid(), 'group', message.getSender().getUid()).then(
    () => {
        console.log("mark as read success.");
    }, error => {
        console.log("An error occurred when marking the message as read.", error);
    }
);
```

</TabItem>
<TabItem value="js" label="Typescript(User)">

```ts
var messageId: string = "MESSAGE_ID";
var receiverId: string = "MESSAGE_SENDER_UID";
var receiverType: string = "user";
var senderId: string = "MESSAGE_SENDER_UID";
CometChat.markAsRead(messageId, receiverId, receiverType, senderId).then(
    () => {
        console.log("mark as read success.");
    }, (error: CometChat.CometChatException) => {
        console.log("An error occurred when marking the message as read.", error);
    }
);
```

</TabItem>

<TabItem value="ts" label="Typescript(Group)">

```ts
var messageId: string = "MESSAGE_ID";
var receiverId: string = "MESSAGE_RECEIVER_GUID";
var receiverType: string = "group";
var senderId: string = "MESSAGE_SENDER_UID";
CometChat.markAsRead(messageId, receiverId, receiverType, senderId).then(
    () => {
        console.log("mark as read success.");
    }, (error: CometChat.CometChatException) => {
        console.log("An error occurred when marking the message as read.", error);
    }
);
```

</TabItem>
</Tabs>



Another option the CometChat SDK provides is to pass the entire message object to the markAsRead() method.

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.markAsRead(message)
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let message: CometChat.BaseMessage;
CometChat.markAsRead(message);
```

</TabItem>
</Tabs>


In case you would like to be notified of an error if the receipts fail to go through you can use `.then(successCallback, failureCallback)` of the `markAsDelivered` method.

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.markAsRead(message).then(
    () => {
        console.log("mark as read success.");
    }, error => {
        console.log("An error occurred when marking the message as read.", error);
    }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let message: CometChat.BaseMessage;
CometChat.markAsRead(message).then(
    () => {
        console.log("mark as read success.");
    }, (error: CometChat.CometChatException) => {
        console.log("An error occurred when marking the message as read.", error);
    }
);
```

</TabItem>
</Tabs>



## Receive Delivery & Read Receipts

_In other words, as a recipient, how do I know when a message I sent has been delivered or read by someone?_

### Real-time Receipts

Real-time events for messages of a conversation being read or delivered can be obtained in the `onMessagesRead()` and the `onMessagesDelivered()` methods of the `MessageListener` class.

<Tabs>
<TabItem value="js" label="Javascript">

```js
let listenerId = "UNIQUE_LISTENER_ID";

CometChat.addMessageListener(
  "listenerId",
  new CometChat.MessageListener({
    onMessagesDelivered: messageReceipt => {
      console.log("MessageDeliverd", { messageReceipt });
    },
    onMessagesRead: messageReceipt => {
      console.log("MessageRead", { messageReceipt });
    }
  })
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let listenerId: string = "UNIQUE_LISTENER_ID";

CometChat.addMessageListener(
    listenerId,
    new CometChat.MessageListener({
        onMessagesDelivered: (messageReceipt: CometChat.MessageReceipt) => {
            console.log("MessageDeliverd", { messageReceipt });
        },
        onMessagesRead: (messageReceipt: CometChat.MessageReceipt) => {
            console.log("MessageRead", { messageReceipt });
        }
    })
);
```

</TabItem>
</Tabs>



You will receive events in the form of `MessageReceipt` objects. The message receipt contains the below parameters:

| Parameter | Information | 
| ---- | ---- | 
| `messageId` | The Id of the message prior to which all the messages for that particular conversation have been marked as read. | 
| `sender` | User object containing the details of the user who has marked the message as read. | 
| `receiverId` | Id of the receiver whose conversation has been marked as read. | 
| `receiverType` | type of the receiver (user/group) | 
| `receiptType` | Type of the receipt (read/delivered) | 
| `deliveredAt` | The timestamp of the time when the message was delivered. This will only be present if the receiptType is delivered. | 
| `readAt` | The timestamp of the time when the message was read. This will only be present when the receiptType is read. | 


### Missed Receipts

You will receive message receipts when you load offline messages. For groups, we do not include the list the users that have received it. You need to call the `getMessageReceipts()` method for it.

While fetching messages in bulk, if the message is a part of a user conversation, the message object will have two fields viz. `deliveredAt` and `readAt` which hold the timestamp for the time the message was delivered and read respectively. using these two variables, the delivery and read status for a user message can be obtained.

However, for a group message, the `deliveredAt` and `readAt` fields are never set and hence to get the status of the message you can use the below-described method.

### Receipt History for a Single Message

In order to fetch the message receipts, you can use the `getMessageReceipts()` method.

<Tabs>
<TabItem value="js" label="Javascript">

```js
let messageId = msgId;
CometChat.getMessageReceipts(messageId).then(
  receipts => {
    console.log("Message details fetched:", receipts);
  },
  error => {
    console.log("Error in getting messag details ", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let messageId: number = 1;
CometChat.getMessageReceipts(messageId).then(
    (receipts: CometChat.MessageReceipt[]) => {
        console.log("Message details fetched:", receipts);
    }, (error: CometChat.CometChatException) => {
        console.log("Error in getting messag details ", error);
    }
);
```

</TabItem>
</Tabs>



You will receive a list of `MessageReceipt` objects.