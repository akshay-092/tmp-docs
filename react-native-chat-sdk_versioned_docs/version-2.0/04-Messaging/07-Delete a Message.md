---
sidebar_position: 7
title: Delete a Message
slug: /messaging-delete-message
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


While [deleting a message](./messaging-delete-message#delete-a-message) is straightforward, receiving events for deleted messages with CometChat has two parts:

1. Adding a listener to receive [real-time message deletes](./messaging-delete-message#real-time-message-delete-events) when your app is running.
2. Calling a method to retrieve [missed message deletes](./messaging-delete-message#missed-message-delete-events) when your app was not running.

## Delete a Message

_In other words, as a sender, how do I delete a message?_

In case you have to delete a message, you can use the `deleteMessage()` method. This method takes the message ID of the message to be deleted.

<Tabs>
<TabItem value="1" label="Delete Message">

```Javascript
let messageId = "ID_OF_THE_MESSAGE_YOU_WANT_TO_DELETE";

CometChat.deleteMessage(messageId).then(
  message => {
    console.log("Message deleted", message);
  }, error => {
    console.log("Message delete failed with error:", error);
  }
);
```

</TabItem>
</Tabs>



Once the message is deleted, In the `onSuccess()` callback, you get an object of the `BaseMessage` class, with the `deletedAt` field set with the timestamp of the time the message was deleted. Also, the `deletedBy` field is set. These two fields can be used to identify if the message is deleted while iterating through a list of messages.

By default, CometChat allows certain roles to delete a message.

| User Role | Conversation Type | Deletion Capabilities | 
| ---- | ---- | ---- | 
| Message Sender | One-on-One Conversation | Messages they have sent. | 
| Message Sender | Group Conversation | Messages they have sent. | 
| Group Admin | Group Conversation | All the messages in the group. | 
| Group Moderator | Group Conversation | All the messages in the group. | 


## Real-time Message Delete Events

_In other words, as a recipient, how do I know when someone deletes a message when my app is running?_

In order to receive real-time events for a message being deleted, you need to override the `onMessageDeleted()` method of the `MessageListener`  class.

<Tabs>
<TabItem value="1" label="Message Listener">

```Javascript
var listenerID = "UNIQUE_LISTENER_ID";

CometChat.addMessageListener(
  listenerID,
  new CometChat.MessageListener({
    onMessageDeleted: message => {
      console.log("Deleted Message", message);
    }
  })
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let listenerID: string = "UNIQUE_LISTENER_ID";

CometChat.addMessageListener(
    listenerID,
    new CometChat.MessageListener({
        onMessageDeleted: (message: CometChat.BaseMessage) => {
            console.log("Deleted Message", message);
        }
    })
);
```

</TabItem>
</Tabs>



## Missed Message Delete Events

_In other words, as a recipient, how do I know if someone deleted a message when my app was not running?_

When you retrieve the list of previous messages, for the messages that were deleted, the `deletedAt` and the `deletedBy` fields will be set. Also, for example, of the total number of messages for a conversation are 100, and the message with message ID 50 was deleted. Now the message with id 50 will have the `deletedAt` and the `deletedBy` fields set whenever it is pulled from the history. Also, the 101st message will be an Action message informing you that the message with id 50 has been deleted.

For the message deleted event, in the `Action` object received, the following fields can help you get the relevant information-

1. `action` - `deleted`
2. `actionOn` - Updated message object which was deleted.
3. `actionBy` - User object containing the details of the user who has deleted the message.
4. `actionFor` - User/group object having the details of the receiver to which the message was sent.

:::info Important

In order to edit or delete a message you need to be either the sender of the message or the admin/moderator of the group in which the message was sent.

:::