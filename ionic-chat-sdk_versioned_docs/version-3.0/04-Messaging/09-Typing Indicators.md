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
<TabItem value="js1" label="Start User Typing(Javascript)">

```js
let receiverId = "UID";
let receiverType = CometChat.RECEIVER_TYPE.USER;

let typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
CometChat.startTyping(typingNotification);
```

</TabItem>

<TabItem value="ts1" label="Start Group Typing(Javascript)">

```js
let receiverId = "GUID";
let receiverType = CometChat.RECEIVER_TYPE.GROUP;

let typingNotification = new CometChat.TypingIndicator(receiverId,receiverType);
CometChat.startTyping(typingNotification);
```

</TabItem>
<TabItem value="js" label="Start User Typing(Typescript)">

```ts
let receiverId: string = "UID";
let receiverType: string = CometChat.RECEIVER_TYPE.USER;

let typingNotification: CometChat.TypingIndicator = new CometChat.TypingIndicator(receiverId, receiverType);
CometChat.startTyping(typingNotification);
```

</TabItem>

<TabItem value="ts" label="Start Group Typing(Typescript)">

```ts
let receiverId: string = "GUID";
let receiverType: string = CometChat.RECEIVER_TYPE.GROUP;

let typingNotification: CometChat.TypingIndicator = new CometChat.TypingIndicator(receiverId, receiverType);
CometChat.startTyping(typingNotification);
```

</TabItem>
</Tabs>



### Stop Typing

You can use the `endTyping()` method to inform the receiver that the logged in user has stopped typing. The receiver will receive this information in the `onTypingEnded()` method of the `MessageListener` class. In order to send the typing indicator, you need to use the `TypingIndicator` class.

<Tabs>
<TabItem value="js1" label="Stop User Typing(Javascript)">

```js
let receiverId = "UID";
let receiverType = CometChat.RECEIVER_TYPE.USER;

let typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
CometChat.endTyping(typingNotification);
```

</TabItem>

<TabItem value="ts1" label="Stop Group Typing(Javascript)">

```js
let receiverId = "GUID";
let receiverType = CometChat.RECEIVER_TYPE.GROUP;

let typingNotification = new CometChat.TypingIndicator(receiverId, receiverType);
CometChat.endTyping(typingNotification);
```

</TabItem>
<TabItem value="js" label="Stop User Typing(Typescript)">

```ts
let receiverId: string = "UID";
let receiverType: string = CometChat.RECEIVER_TYPE.USER;

let typingNotification: CometChat.TypingIndicator = new CometChat.TypingIndicator(receiverId, receiverType);
CometChat.endTyping(typingNotification);
```

</TabItem>

<TabItem value="ts" label="Stop Group Typing(Typescript)">

```ts
let receiverId: string = "GUID";
let receiverType: string = CometChat.RECEIVER_TYPE.GROUP;

let typingNotification: CometChat.TypingIndicator = new CometChat.TypingIndicator(receiverId, receiverType);
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
<TabItem value="js" label="Message Listener">

```js
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

<TabItem value="ts" label="Typescript">

```ts
let listenerId: string = "UNIQUE_LITENER_ID";

CometChat.addMessageListener(
    listenerId,
    new CometChat.MessageListener({
        onTypingStarted: (typingIndicator: CometChat.TypingIndicator) => {
            console.log("Typing started :", typingIndicator);
        },
        onTypingEnded: (typingIndicator: CometChat.TypingIndicator) => {
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
| **receiverType** | This parameter indicates if the typing indicator is to be sent to a user or a group. The possible values are:<br/>1. `CometChatConstants.RECEIVER_TYPE_USER`<br/>2. `CometChatConstants.RECEIVER_TYPE_GROUP` | 
| **metadata** | A JSONObject to provider additional data. | 