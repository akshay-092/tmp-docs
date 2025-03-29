---
sidebar_position: 8
title: Typing Indicators
slug: /typing-indicators
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Send a Typing Indicator

_In other words, as a sender, how do I let the recipient(s) know that I'm typing?_

### Start Typing

You can use the `startTyping()` method to inform the receiver that the logged in user has started typing. The receiver will receive this information in the `onTypingStarted()` method of the `MessageListener` class. In order to send the typing indicator, you need to use the `TypingIndicator` class.

<Tabs>
<TabItem value="Dart(Start Typing User)" label="Dart(Start Typing User)">

  ```dart
CometChat.startTyping(
            receaverUid: "UID",
            receiverType: CometChatReceiverType.user,
        ); 
  ```
</TabItem>
<TabItem value="Dart(Start Typing Group)" label="Dart(Start Typing Group)">

  ```dart
CometChat.startTyping(
            receaverUid: "GUID",
            receiverType: CometChatReceiverType.group,
        );
  ```
</TabItem>
</Tabs>



### Stop Typing

You can use the `endTyping()` method to inform the receiver that the logged in user has stopped typing. The receiver will receive this information in the `onTypingEnded()` method of the `MessageListener` class. In order to send the typing indicator, you need to use the `TypingIndicator` class.

<Tabs>
<TabItem value="Dart(End Typing User)" label="Dart(End Typing User)">

  ```dart
CometChat.endTyping(
            receaverUid: "UID",
            receiverType: CometChatReceiverType.user);
  ```
</TabItem>
<TabItem value="Dart(End Typing Group)" label="Dart(End Typing Group)">

  ```dart
CometChat.endTyping(
            receaverUid: "GUID",
            receiverType: CometChatReceiverType.group);
  ```
</TabItem>
</Tabs>


:::info Custom Data
 You can use the `metadata` field of the `TypingIndicator` class to pass additional data along with the typing indicators. The metadata field is a Map and can be set using the `.metadata` parameter of the `TypingIndicator` class. This data will be received at the receiver end and can be obtained using the same parameter.
:::

## Real-time Typing Indicators

_In other words, as a recipient, how do I know when someone is typing?_

You will receive the typing indicators in the `onTypingStarted()` and the `onTypingEnded()` method of the registered `MessageListener` class.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
class Class_Name  with MessageListener {

  //CometChat.addMessageListener("listenerId", this);
  @override
  void onTypingStarted(TypingIndicator typingIndicator) {
    // TODO: implement onTypingStarted
  }

  @override
  void onTypingEnded(TypingIndicator typingIndicator) {
    // TODO: implement onTypingEnded
  }

  
}
  ```
</TabItem>
</Tabs>

The `TypingIndicator` class consists of the below parameters:

| Parameter | Information | 
| ---- | ---- | 
| `sender` | An object of the `User` class holding all the information related to the sender of the typing indicator. | 
| `receiverId` | `UID` of the receiver. This is the ID of the group or the user the typing indicator is being sent to. | 
| `receiverType` | This parameter indicates if the typing indicator is to be sent to a user or a group. The possible values are:<br/>1. `CometChatConstants.RECEIVER_TYPE_USER`<br/>2. `CometChatConstants.RECEIVER_TYPE_GROUP` | 
| `metadata` | A JSONObject to provider additional data | 
