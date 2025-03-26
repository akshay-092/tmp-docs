---
sidebar_position: 9
title: Typing Indicators
slug: /messaging-typing-indicators
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Send a Typing Indicator

_In other words, as a sender, how do I let the recipient(s) know that I'm typing?_

### Start Typing

You can use the `startTyping()` method to inform the receiver that the logged in user has started typing. The receiver will receive this information in the `onTypingStarted()` method of the `MessageListener` class. In order to send the typing indicator, you need to use the `TypingIndicator` class.

<Tabs>
<TabItem value="1" label="Start Typing (User)">

```javascript
let receiverId = "UID";
let receiverType = CometChat.RECEIVER_TYPE.USER;

let typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
CometChat.startTyping(typingNotification);
```
</TabItem>
<TabItem value="2" label="Start Typing (Group)">

```javascript
let receiverId = "GUID";
let receiverType = CometChat.RECEIVER_TYPE.GROUP;

let typingNotification = new CometChat.TypingIndicator(receiverId,receiverType);
CometChat.startTyping(typingNotification);
```
</TabItem>
</Tabs>

### Stop Typing

You can use the `endTyping()` method to inform the receiver that the logged in user has stopped typing. The receiver will receive this information in the `onTypingEnded()` method of the `MessageListener` class. In order to send the typing indicator, you need to use the `TypingIndicator` class.

<Tabs>
<TabItem value="1" label="Stop Typing (User)">

```javascript
let receiverId = "UID";
let receiverType = CometChat.RECEIVER_TYPE.USER;

let typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
CometChat.endTyping(typingNotification);
```
</TabItem>
<TabItem value="2" label="Stop Typing (Group)">

```javascript
let receiverId = "GUID";
let receiverType = CometChat.RECEIVER_TYPE.GROUP;

let typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
CometChat.endTyping(typingNotification);
```
</TabItem>
</Tabs>


:::info Custom Data
 You can use the `metadata` field of the `TypingIndicator` class to pass additional data along with the typing indicators. The metadata field is a JSONObject and can be set using the `setMetadata()` method of the `TypingIndicator` class. This data will be received at the receiver end and can be obtained using the `getMetadata()` method.
:::

## Real-time Typing Indicators

_In other words, as a recipient, how do I know when someone is typing?_

You will receive the typing indicators in the `onTypingStarted()` and the `onTypingEnded()` method of the registered `MessageListener` class.

<Tabs>
<TabItem value="1" label="Message Listener">

```javascript
let listenerId = "UNIQUE_LITENER_ID";

CometChat.addMessageListener(
  listenerId,
  new CometChat.MessageListener({
    onTypingStarted: typingIndicator => {
      console.log("Typing started :", typingIndicator);
    },
    onTypingEnded: typingIndicator => {
      console.log("Typing ended :", typingIndicator);
    }
  })
);
```
</TabItem>
</Tabs>

The `TypingIndicator` class consists of the below parameters:

| Parameter | Information | 
| ---- | ---- | 
| **sender** | An object of the `User` class holding all the information. related to the sender of the typing indicator. | 
| **receiverId** | Unique Id of the receiver. This can be the Id of the group or the user the typing indicator is sent to. | 
| **receiverType** | This parameter indicates if the typing indicator is to be sent to a user or a group. The possible values are: <br/> 1.`CometChat.RECEIVER_TYPE.USER` <br/>2. `CometChat.RECEIVER_TYPE.GROUP` | 
| **metadata** | A JSON Object to provider additional data. | 
