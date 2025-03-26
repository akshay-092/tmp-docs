---
sidebar_position: 2
title: Receive Messages
slug: /messaging-receive-messages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Receiving messages with CometChat has two parts:

1. Adding a listener to receive [real-time messages](./messaging-receive-messages#real-time-messages) when your app is running.
2. Calling a method to retrieve [missed messages](./messaging-receive-messages#missed-messages) when your app was not running.

## Real-Time Messages

_In other words, as a recipient, how do I receive messages when my app is running?_

To receive real-time incoming messages, you need to register the `MessageListener` wherever you wish to receive the incoming messages.
You can use the `addMessageListener()` method to do so.

<Tabs>
<TabItem value="js" label="Javascript">

```js
let listenerID = "UNIQUE_LISTENER_ID";

CometChat.addMessageListener(
  listenerID,
  new CometChat.MessageListener({
    onTextMessageReceived: (textMessage) => {
      console.log("Text message received successfully", textMessage);
    },
    onMediaMessageReceived: (mediaMessage) => {
      console.log("Media message received successfully", mediaMessage);
    },
    onCustomMessageReceived: (customMessage) => {
      console.log("Custom message received successfully", customMessage);
    },
  })
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let listenerID: string = "UNIQUE_LISTENER_ID";

CometChat.addMessageListener(
  listenerID,
  new CometChat.MessageListener({
    onTextMessageReceived: (textMessage: CometChat.TextMessage) => {
      console.log("Text message received successfully", textMessage);
    },
    onMediaMessageReceived: (mediaMessage: CometChat.MediaMessage) => {
      console.log("Media message received successfully", mediaMessage);
    },
    onCustomMessageReceived: (customMessage: CometChat.CustomMessage) => {
      console.log("Custom message received successfully", customMessage);
    },
  })
);
```

</TabItem>
</Tabs>

| Parameter      | Description                                   |
| -------------- | --------------------------------------------- |
| **listenerId** | An ID that uniquely identifies that listener. |

We recommend you remove the listener once you don't want to receive a message for particular listener.

<Tabs>
<TabItem value="js" label="Javascript">

```js
let listenerID = "UNIQUE_LISTENER_ID";

CometChat.removeMessageListener(listenerID);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let listenerID: string = "UNIQUE_LISTENER_ID";

CometChat.removeMessageListener(listenerID);
```

</TabItem>
</Tabs>

:::info Note

As a sender, you will not receive your own message in a real-time message event. However, if a user is logged-in using multiple devices, they will receive an event for their own message in other devices.

:::

## Missed Messages

_In other words, as a recipient, how do I receive messages that I missed when my app was not running?_

For most use cases, you will need to add functionality to load missed messages. If you're building an on-demand or live streaming app, you may choose to skip this and fetch message history instead.

Using the same `MessagesRequest` class and the filters provided by the `MessagesRequestBuilder` class, you can fetch the message that we sent to the logged-in user but were not delivered to him as he was offline. For this, you will require the ID of the last message received. You can either maintain it at your end or use the `getLastDeliveredMessageId()` method provided by the CometChat class. This ID needs to be passed to the `setMessageId()` method of the builder class.

Now using the `fetchNext()` method, you can fetch all the messages that were sent to the user when he/she was offline.

Calling the `fetchNext()` method on the same object repeatedly allows you to fetch all the offline messages for the logged in user.

### Fetch Missed Messages of a particular one-on-one conversation

<Tabs>
<TabItem value="js" label="Javascript">

```js
let UID = "UID";
let limit = 30;
let latestId = await CometChat.getLastDeliveredMessageId();

var messagesRequest = new CometChat.MessagesRequestBuilder()
  .setUID(UID)
  .setMessageId(latestId)
  .setLimit(limit)
  .build();

messagesRequest.fetchNext().then(
  (messages) => {
    console.log("Message list fetched:", messages);
  },
  (error) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let UID: string = "UID",
  limit: number = 30,
  latestId: number = await CometChat.getLastDeliveredMessageId(),
  messagesRequest: CometChat.MessagesRequest =
    new CometChat.MessagesRequestBuilder()
      .setUID(UID)
      .setMessageId(latestId)
      .setLimit(limit)
      .build();

messagesRequest.fetchNext().then(
  (messages: CometChat.BaseMessage[]) => {
    console.log("Message list fetched:", messages);
  },
  (error: CometChat.CometChatException) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

### Fetch Missed Messages of a particular group conversation

<Tabs>
<TabItem value="js" label="Javascript">

```js
let GUID = "GUID";
var limit = 30;
let latestId = await CometChat.getLastDeliveredMessageId();

var messagesRequest = new CometChat.MessagesRequestBuilder()
  .setGUID(GUID)
  .setMessageId(latestId)
  .setLimit(limit)
  .build();

messagesRequest.fetchNext().then(
  (messages) => {
    console.log("Message list fetched:", messages);
  },
  (error) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let GUID: string = "GUID",
  limit: number = 30,
  latestId: number = await CometChat.getLastDeliveredMessageId(),
  messagesRequest: CometChat.MessagesRequest =
    new CometChat.MessagesRequestBuilder()
      .setGUID(GUID)
      .setMessageId(latestId)
      .setLimit(limit)
      .build();

messagesRequest.fetchNext().then(
  (messages: CometChat.BaseMessage[]) => {
    console.log("Message list fetched:", messages);
  },
  (error: CometChat.CometChatException) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

## Unread Messages

_In other words, as a logged-in user, how do I fetch the messages I've not read?_

Using the `MessagesRequest` class described above, you can fetch the unread messages for the logged in user. In order to achieve this, you need to set the `unread` variable in the builder to `true` using the `setUnread()` method so that only the unread messages are fetched.

### Fetch Unread Messages of a particular one-on-one conversation

<Tabs>
<TabItem value="js" label="Javascript">

```js
let UID = "UID";
let limit = 30;
let messagesRequest = new CometChat.MessagesRequestBuilder()
  .setUID(UID)
  .setUnread(true)
  .setLimit(limit)
  .build();

messagesRequest.fetchPrevious().then(
  (messages) => {
    console.log("Message list fetched:", messages);
  },
  (error) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let UID: string = "UID",
  limit: number = 30,
  messagesRequest: CometChat.MessagesRequest =
    new CometChat.MessagesRequestBuilder()
      .setUID(UID)
      .setUnread(true)
      .setLimit(limit)
      .build();

messagesRequest.fetchPrevious().then(
  (messages: CometChat.BaseMessage[]) => {
    console.log("Message list fetched:", messages);
  },
  (error: CometChat.CometChatException) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

### Fetch Unread Messages of a particular group conversation

<Tabs>
<TabItem value="js" label="Javascript">

```js
let GUID = "GUID";
let limit = 30;
let messagesRequest = new CometChat.MessagesRequestBuilder()
  .setGUID(GUID)
  .setUnread(true)
  .setLimit(limit)
  .build();

messagesRequest.fetchPrevious().then(
  (messages) => {
    console.log("Message list fetched:", messages);
  },
  (error) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let GUID: string = "GUID",
  limit: number = 30,
  messagesRequest: CometChat.MessagesRequest =
    new CometChat.MessagesRequestBuilder()
      .setGUID(GUID)
      .setUnread(true)
      .setLimit(limit)
      .build();

messagesRequest.fetchPrevious().then(
  (messages: CometChat.BaseMessage[]) => {
    console.log("Message list fetched:", messages);
  },
  (error: CometChat.CometChatException) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

:::info Base Message

The list of messages received is in the form of objects of `BaseMessage` class. A BaseMessage can either be an object of the `TextMessage`, `MediaMessage`, `CustomMessage`, `Action` or `Call` class. You can use the `instanceOf` operator to check the type of object.

:::

## Message History

_In other words, as a logged-in user, how do I fetch the complete message history?_

### Fetch Message History of a particular one-on-one conversation

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation between the logged in user and any particular user. For this use case, it is mandatory to set the UID parameter using the `setUID()` method of the builder. This UID is the unique id of the user for which the conversation needs to be fetched.

<Tabs>
<TabItem value="js" label="Javascript">

```js
let UID = "UID";
let limit = 30;
let messagesRequest = new CometChat.MessagesRequestBuilder()
  .setUID(UID)
  .setLimit(limit)
  .build();

messagesRequest.fetchPrevious().then(
  (messages) => {
    console.log("Message list fetched:", messages);
  },
  (error) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let UID: string = "UID",
  limit: number = 30,
  messagesRequest: CometChat.MessagesRequest =
    new CometChat.MessagesRequestBuilder().setUID(UID).setLimit(limit).build();

messagesRequest.fetchPrevious().then(
  (messages: CometChat.BaseMessage[]) => {
    console.log("Message list fetched:", messages);
  },
  (error: CometChat.CometChatException) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch the entire conversation between the logged in user and the specified user. This can be implemented with upward scrolling to display the entire conversation.

### Fetch Message History of a particular group conversation

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation for any group provided you have joined the group. For this use case, it is mandatory to set the GUID parameter using the `setGUID()` method of the builder. This GUID is the unique identifier of the Group for which the messages are to be fetched.

<Tabs>
<TabItem value="js" label="Javascript">

```js
let GUID = "GUID";
let limit = 30;
let messagesRequest = new CometChat.MessagesRequestBuilder()
  .setGUID(GUID)
  .setLimit(limit)
  .build();

messagesRequest.fetchPrevious().then(
  (messages) => {
    console.log("Message list fetched:", messages);
  },
  (error) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let GUID: string = "GUID",
  limit: number = 30,
  messagesRequest: CometChat.MessagesRequest =
    new CometChat.MessagesRequestBuilder()
      .setGUID(GUID)
      .setLimit(limit)
      .build();

messagesRequest.fetchPrevious().then(
  (messages: CometChat.BaseMessage[]) => {
    console.log("Message list fetched:", messages);
  },
  (error: CometChat.CometChatException) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch the entire conversation for the group. This can be implemented with upward scrolling to display the entire conversation.

## Search Messages

Along with the other parameters mentioned above, you can use the `setSearchKeyword()` method provided by the `MessagesRequestBuilder` class. This method takes a string as input. This is the string that is to be searched amongst the messages. This can be used to fetch all the messages that contain the string in a paginated way. Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch all the messages with the keyword specified in all your conversations.

### Search Messages in a particular one-on-one conversation

<Tabs>
<TabItem value="js" label="Javascript">

```js
let UID = "UID";
let limit = 30;
let searchKeyword = "Hello";
let messagesRequest = new CometChat.MessagesRequestBuilder()
  .setUID(UID)
  .setLimit(limit)
  .setSearchKeyword(searchKeyword)
  .build();

messagesRequest.fetchPrevious().then(
  (messages) => {
    console.log("Message list fetched:", messages);
  },
  (error) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let UID: string = "UID",
  limit: number = 30,
  searchKeyword: string = "Hello",
  messagesRequest: CometChat.MessagesRequest =
    new CometChat.MessagesRequestBuilder()
      .setUID(UID)
      .setLimit(limit)
      .setSearchKeyword(searchKeyword)
      .build();

messagesRequest.fetchPrevious().then(
  (messages: CometChat.BaseMessage[]) => {
    console.log("Message list fetched:", messages);
  },
  (error: CometChat.CometChatException) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

### Search Messages in a particular group conversation

<Tabs>
<TabItem value="js" label="Javascript">

```js
let GUID = "GUID";
let limit = 30;
let searchKeyword = "Hello";
let messagesRequest = new CometChat.MessagesRequestBuilder()
  .setGUID(GUID)
  .setLimit(limit)
  .setSearchKeyword(searchKeyword)
  .build();

messagesRequest.fetchPrevious().then(
  (messages) => {
    console.log("Message list fetched:", messages);
  },
  (error) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let GUID: string = "GUID",
  limit: number = 30,
  searchKeyword: string = "Hello",
  messagesRequest: CometChat.MessagesRequest =
    new CometChat.MessagesRequestBuilder()
      .setGUID(GUID)
      .setLimit(limit)
      .setSearchKeyword(searchKeyword)
      .build();

messagesRequest.fetchPrevious().then(
  (messages: CometChat.BaseMessage[]) => {
    console.log("Message list fetched:", messages);
  },
  (error: CometChat.CometChatException) => {
    console.log("Message fetching failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

## Unread Message Count

_In other words, as a logged-in user, how do I find out the number of unread messages that I have?_

### Fetch Unread Message Count of a particular one-on-one conversation

_In other words, how do I find out the number of unread messages I have from a particular user?_

In order to get the unread message count for a particular user, you can use the `getUnreadMessageCountForUser()`.

This method has the below two variants:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForUser(UID);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let UID: string = "UID";
CometChat.getUnreadMessageCountForUser(UID);
```

</TabItem>
</Tabs>

if you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForUser(UID, hideMessagesFromBlockedUsers);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let UID: string = "UID",
  hideMessagesFromBlockedUsers: boolean = true;
CometChat.getUnreadMessageCountForUser(UID, hideMessagesFromBlockedUsers);
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="js" label="Javascript">

```js
let UID = "UID";

CometChat.getUnreadMessageCountForUser(UID).then(
  (array) => {
    console.log("Message count fetched", array);
  },
  (error) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let UID: string = "UID";

CometChat.getUnreadMessageCountForUser(UID).then(
  (unreadMessageCount: Object) => {
    console.log("Message count fetched", unreadMessageCount);
  },
  (error: CometChat.CometChatException) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>
</Tabs>

In the `then()` callback, you will receive an array which will contain the `UID` of the user as the key and the unread message count as the value.

### Fetch Unread Message Count of a particular group conversation

_In other words, how do I find out the number of unread messages I have in a single group?_

In order to get the unread message count for a particular group, you can use the `getUnreadMessageCountForGroup()`.

This method has the below two variants:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForGroup(GUID);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let GUID: string = "GUID";
CometChat.getUnreadMessageCountForGroup(GUID);
```

</TabItem>
</Tabs>

if you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForGroup(GUID, hideMessagesFromBlockedUsers);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let GUID: string = "GUID",
  hideMessagesFromBlockedUsers: boolean = true;
CometChat.getUnreadMessageCountForGroup(GUID, hideMessagesFromBlockedUsers);
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="js" label="Javascript">

```js
let GUID = "GUID";

CometChat.getUnreadMessageCountForGroup(GUID).then(
  (array) => {
    console.log("Message count fetched", array);
  },
  (error) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let GUID: string = "GUID";

CometChat.getUnreadMessageCountForGroup(GUID).then(
  (unreadMessageCount: Object) => {
    console.log("Message count fetched", unreadMessageCount);
  },
  (error: CometChat.CometChatException) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>
</Tabs>

In the `then()` callback, you will receive an array which will contain the `UID` of the user as the key and the unread message count as the value.

### Fetch Unread Message Count of all one-on-one & group conversations

_In other words, how do I find out the number of unread messages for every one-on-one and group conversation?_

In order to get all the unread message count combined i.e unread message counts for all the users and groups, you can use the `getUnreadMessageCount()` method.

This method has two variants:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCount();
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
CometChat.getUnreadMessageCount();
```

</TabItem>
</Tabs>

if you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCount(hideMessagesFromBlockedUsers);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let hideMessagesFromBlockedUsers: boolean = true;
CometChat.getUnreadMessageCount(hideMessagesFromBlockedUsers);
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCount().then(
  (array) => {
    console.log("Message count fetched", array);
  },
  (error) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
CometChat.getUnreadMessageCount().then(
  (unreadMessageCount: Object) => {
    console.log("Message count fetched", unreadMessageCount);
  },
  (error: CometChat.CometChatException) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>
</Tabs>

It return array having two keys:

1. user - The value for this key holds another array that holds the UIDs of the users and their corresponding unread message counts
2. group - The value for this key holds another array that holds the GUIDs of the groups and their corresponding unread message counts

### Fetch Unread Message Count of all one-on-one conversations

In order to fetch the unread message counts for just the users, you can use the `getUnreadMessageCountForAllUsers()` method. This method just like others has two variants:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForAllUsers();
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
CometChat.getUnreadMessageCountForAllUsers();
```

</TabItem>
</Tabs>

if you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForAllUsers(hideMessagesFromBlockedUsers);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let hideMessagesFromBlockedUsers: boolean = true;
CometChat.getUnreadMessageCountForAllUsers(hideMessagesFromBlockedUsers);
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForAllUsers().then(
  (array) => {
    console.log("Message count fetched", array);
  },
  (error) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
CometChat.getUnreadMessageCountForAllUsers().then(
  (unreadMessageCount: Object) => {
    console.log("Message count fetched", unreadMessageCount);
  },
  (error: CometChat.CometChatException) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>
</Tabs>

It returns a Array which will contain the UIDs of the users as the key and the unread message counts as the values.

### Fetch Unread Message Count of all group conversations

In order to fetch the unread message counts for just the groups, you can use the `getUnreadMessageCountForAllGroups()` method. This method just like others has two variants:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForAllGroups();
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
CometChat.getUnreadMessageCountForAllGroups();
```

</TabItem>
</Tabs>

if you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForAllGroups(hideMessagesFromBlockedUsers);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
let hideMessagesFromBlockedUsers: boolean = true;
CometChat.getUnreadMessageCountForAllGroups(hideMessagesFromBlockedUsers);
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="js" label="Javascript">

```js
CometChat.getUnreadMessageCountForAllGroups().then(
  (array) => {
    console.log("Message count fetched", array);
  },
  (error) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>

<TabItem value="ts" label="Typescript">

```ts
CometChat.getUnreadMessageCountForAllGroups().then(
  (unreadMessageCount: Object) => {
    console.log("Message count fetched", unreadMessageCount);
  },
  (error: CometChat.CometChatException) => {
    console.log("Error in getting message count", error);
  }
);
```

</TabItem>
</Tabs>

It returns a Array which will contain the GUIDs of the groups as the key and the unread message counts as the values.
