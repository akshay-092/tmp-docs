---
sidebar_position: 11
title: Transient Messages
slug: /transient-messages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Transient messages are messages that are sent in real-time only and are not saved or tracked anywhere. The receiver of the message will only receive the message if he is online and these messages cannot be retrieved later.

## Send a Transient Message

You can use the `sendTransientMessage()` method to send a transient message to a user or in a group. The receiver will receive this information in the `onTransientMessageReceived()` method of the `MessageListener` class. In order to send the transient message, you need to use the `TransientMessage` class.

<Tabs>
<TabItem value="User" label="User">

  ```javascript
let receiverId = "UID";
let receiverType = CometChat.RECEIVER_TYPE.USER;
let data = { "LIVE_REACTION": "heart" };

let transientMessage = new CometChat.TransientMessage(receiverId, receiverType, data);
CometChat.sendTransientMessage(transientMessage);
  ```
</TabItem>
<TabItem value="Group" label="Group">

  ```javascript
let receiverId = "GUID";
let receiverType = CometChat.RECEIVER_TYPE.GROUP;
let data = { "LIVE_REACTION": "heart" };

let transientMessage = new CometChat.TransientMessage(receiverId, receiverType, data);
CometChat.sendTransientMessage(transientMessage);
  ```
</TabItem>
<TabItem value="Typescript (User)" label="Typescript (User)">

  ```typescript
let receiverId: string = "UID";
let receiverType: string = CometChat.RECEIVER_TYPE.USER;
let data: Object = { "LIVE_REACTION": "heart" };

let transientMessage: CometChat.TransientMessage = new CometChat.TransientMessage(receiverId, receiverType, data);
CometChat.sendTransientMessage(transientMessage);
  ```
</TabItem>
<TabItem value="Typescript (Group)" label="Typescript (Group)">

  ```typescript
let receiverId: string = "GUID";
let receiverType: string = CometChat.RECEIVER_TYPE.GROUP;
let data: Object = { "LIVE_REACTION": "heart" };

let transientMessage: CometChat.TransientMessage = new CometChat.TransientMessage(receiverId, receiverType, data);
CometChat.sendTransientMessage(transientMessage);
  ```
</TabItem>
</Tabs>


## Real-time Transient Messages

_In other words, as a recipient, how do I know when someone sends a transient message?_

You will receive the transient message in the `onTransientMessageReceived()` method of the registered `MessageListener` class.



<Tabs>
<TabItem value="Message Listener" label="Message Listener">

  ```javascript
let listenerId = "UNIQUE_LITENER_ID";

CometChat.addMessageListener(
  listenerId,
  new CometChat.MessageListener({
    onTransientMessageReceived: transientMessage => {
      console.log('transient message received', transientMessage);
    },
  })
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let listenerId: string = "UNIQUE_LITENER_ID";

CometChat.addMessageListener(
    listenerId,
    new CometChat.MessageListener({
        onTransientMessageReceived: (transientMessage: CometChat.TransientMessage) => {
            console.log('transient message received', transientMessage);
        },
    })
);
  ```
</TabItem>
</Tabs>


The `TransientMessage` class consists of the below parameters:

| Parameter | Information | 
| ---- | ---- | 
| **sender** | An object of the User class holding all the information. related to the sender of the transient message. | 
| **receiverId** | Unique Id of the receiver. This can be the Id of the group or the user the transient message is sent to. | 
| **receiverType** | The type of the receiver - `CometChat.RECEIVER_TYPE.USER` or `CometChat.RECEIVER_TYPE.GROUP` | 
| **data** | A JSONObject to provide data. | 
