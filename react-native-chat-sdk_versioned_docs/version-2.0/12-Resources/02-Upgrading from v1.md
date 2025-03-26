---
sidebar_position: 2
title: Upgrading from v1
slug: /resources-upgrading-from-v1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


![](./assets/comet.png)

Upgrading from v1.x to v2 is fairly simple. Below are the major changes that are released as a part of CometChat Pro v2:

## Initialization

The `CometChat.init()` method now takes an additional parameter. This parameter is an object of the `AppSettings` class. This object can be created by using the `AppSettingsBuilder` class. The `AppSettings` class provides the CometChat SDK with the below 2 details:

1. **Region of your app**: The region of your app is the code of the region your app is hosted in. Currently, this can only hold one of the below two values:
a. **eu** -  If your app is hosted in Europe
b. **us** - If your app is hosted in the United States of America.
2. [Presence Subscription](./user-presence).

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
//v1.x

var appID = "APP_ID";
CometChat.init(appID).then(
  () => {
    console.log("Initialization completed successfully");
  }, error => {
    console.log("Initialization failed with error:", error);
  }
);

//v2.x

var appId = "APP_ID";
let cometChatSettings = new CometChat.AppSettingsBuilder()
                          .subscribePresenceForAllUsers()
                          .setRegion("us")
                          .build();
CometChat.init(appId, cometChatSettings).then(
  () => {
    console.log("Initialization completed successfully");
  }, error => {
    console.log("Initialization failed with error:", error);
  }
);
```
</TabItem>
</Tabs>

## Text Message Constructor

Since the only possible valid value the `messageType` parameter could take in the constructor was `CometChatConstants.MESSAGE_TYPE_TEXT(text)`, we have excluded the `messageType` parameter from the `TextMessage` constructor.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
//v1.x

var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

//v2.x

var textMessage = new CometChat.TextMessage(receiverID, messageText, receiverType);
```
</TabItem>
</Tabs>

## Mark a Message as Read

In v1.x, for marking the messages as read, every message had to marked as read individually using the `CometChat.markMessageAsRead()` which took the entire message object as the input parameter.

Starting v2.0, the method name has been changed to `markAsRead()` which takes the `messageId`, `receiverId`, and `receiverType` as input. This method, will mark all the messages before the provided messageId for the conversation with the specified `receiverId` as read. For more information, please check [here](./messaging-receipts#mark-messages-as-read).

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
//v1.x
CometChat.markMessageAsRead(message);

//v2.x
CometChat.markAsRead(messageId, receiverId, receiverType);
```
</TabItem>
</Tabs>


## Receive Real Time Delivery & Read Receipts

In v1.x, Real-time events for messages of a conversation being read or delivered can be obtained in the `onMessageRead()` and the `onMessageDelivered()` methods of the `MessageListener` class since in v1.x single messages would be marked as read.

Starting v2.x, multiple messages are being read at a time. So the method names are changed a bit. `onMessageRead()` is changed to `onMessagesRead()` and `onMessageDelivered()` is changed to `onMessagesDelivered()`.


<Tabs>
<TabItem value="1" label="Javascript">

```javascript
//v1.x

let listenerId = "UNIQUE_LISTENER_ID";

CometChat.addMessageListener(
  "listenerId",
  new CometChat.MessageListener({
    onMessageDelivered: messageReceipt => {
      console.log("MessageDeliverd", { messageReceipt });
    },
    onMessageRead: messageReceipt => {
      console.log("MessageRead", { messageReceipt });
    }
  })
);


//v2.x

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
</Tabs>


## Retrieve List of Friends

In v1.x to fetch only friends, you had to enable the Show only friends setting in the CometChat Dashboard.

Starting v2.x, we have added a method in the UsersRequestBuilder to fetch only friends. This method accepts `boolean` and fetches only friends if it is set to `true` else it fetches all the users. By default it is set to `false`. For more information, please check [here](./users-retrieve-users#friends-only).


<Tabs>
<TabItem value="1" label="Javascript">

```javascript
//v2.x

let usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(limit)
  .friendsOnly(true)
  .build();
```

</TabItem>
</Tabs>