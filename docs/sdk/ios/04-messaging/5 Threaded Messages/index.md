---
sidebar_position: 5
title: Threaded Messages
slug: /threaded-messages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Messages that are started from a particular message are called Threaded messages or simply threads.
Each Thread is attached to a message which is the Parent message for that thread.

## Send Message in a Thread

As mentioned in the [Send a Message](./send-message) section. You can either send a message to a User or a Group based on the `receiverType` and the UID/GUID specified for the message. A message can belong to either of the below types:

1. Text Message
2. Media Message
3. Custom Message.

Any of the above messages can be sent in a thread. As mentioned, a thread is identified based on the Parent message. So while sending a message the `parentMessageId` must be set for the message to indicate that the message to be sent needs to be a part of the thread with the specified `parentMessageId`.

This can be achieved using the `parentMessageId` property provided by the object of the `TextMessage`, `MediaMessage`, and `CustomMessage` class. The id specified in the `parentMessageId` property maps the message sent to the particular thread.

**Example to Send a Text Message in a thread in a user conversation.**

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let receiverID = "cometchat-uid-2"
let text = "Hello"

let textMessage = TextMessage(receiverUid: receiverID, text: text, receiverType: .user)
textMessage?.parentMessageId = 100
CometChat.sendTextMessage(message: textMessage, onSuccess: { (message) in

  print("TextMessage sent successfully. " + message.stringValue())

}) { (error) in

  print("TextMessage sending failed with error: " + error!.errorDescription);
}
```

</TabItem>
</Tabs>

The above snippet shows how a message with the text "Hello" can be sent in the thread with `parentMessageId` 100.

Similarly, using the `parentMessageId` property, Media and Custom Messages can be sent in threads too.

### Receiving Real-Time Messages

The procedure to receive real-time messages is exactly the same as mentioned in the [Receive Messages](./receive-message). This can be achieved using the `CometChatMessageDelegate` class provided by the SDK.

In order to receive incoming messages, you must add protocol conformance CometChatMessageDelegate as Shown in the below code example. The only thing that needs to be checked is if the received message belongs to the active thread. This can be done using the `parentMessageId` field of the message object.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var activeThreadId = 100;

extension ViewController: CometChatMessageDelegate {

  func onTextMessageReceived(textMessage: TextMessage) {
		if textMessage.id == activeThreadId {
    	print("TextMessage received successfully: " + textMessage.stringValue())
    }
  }

  func onMediaMessageReceived(mediaMessage: MediaMessage) {
	  if textMessage.id == activeThreadId {
    	print("MediaMessage received successfully: " + mediaMessage.stringValue())
    }
  }

  func onCustomMessageReceived(customMessage: CustomMessage) {
		if textMessage.id == activeThreadId {
    	print("CustomMessage received successfully: " + customMessage.stringValue())
    }
  }
}
```

</TabItem>
</Tabs>

### Fetch all the messages for any particular thread.

You can fetch all the messages belonging to a particular thread by using the `MessagesRequest` class. In order to get an object of the `MessagesRequest` class, you need to use the `MessagesRequestBuilder` class. and use the `setParentMessageId()` method of the `MessagesRequestBuilder` to inform the SDK that you only need the messages belonging to the thread with the specified parentMessageId.

Once you have the object of the `MessagesRequest` class, you need to call the `fetchPrevious()` method to get the latest messages in the thread. In one integration, a maximum of 100 messages can be fetched. If you wish to fetch the next set of messages, you need to call the `fetchPrevious()` method again on the same object.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 50;

let messagesRequest = MessageRequestBuilder().setParentMessageId(parentMessageId: 100).set(limit: limit).build()

messagesRequest.fetchPrevious(onSuccess: { (messages) in

  for message in messages!{

    if let receivedMessage = (message as ? TextMessage) {
      print("Text Messages for thread fetched successfully. " + receivedMessage.stringValue())
    }
    else if let receivedMessage = (message as ? MediaMessage) {
      print("Media Messages for thread fetched successfully. " + receivedMessage!.stringValue())
  }
}

}) { (error) in

  print("Messages fetching failed with error: " + error!.errorDescription);
}
```

</TabItem>
</Tabs>

## Avoid Threaded Messages in User/Group Conversations

While fetching messages for normal user/group conversations using the `MessagesRequest`, the threaded messages by default will be a part of the list of messages received. In order to exclude the threaded messages from the list of user/group messages, you need to use the `hideReplies()` method of the `MessagesRequestBuilder` class. This method takes a boolean argument which when set to true excludes the messages belonging to threads from the list of messages.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 50;

let messageRequest = MessagesRequest.MessageRequestBuilder().set(uid: "cometchat-uid-1").set(limit: limit).hideReplies(hide: true).build()

messagesRequest.fetchPrevious(onSuccess: { (messages) in

  for message in messages!{

    if let receivedMessage = (message as ? TextMessage) {
      print("Text Messages for thread fetched successfully. " + receivedMessage.stringValue())
    }
    else if let receivedMessage = (message as ? MediaMessage) {
      print("Media Messages for thread fetched successfully. " + receivedMessage!.stringValue())
  }
}

}) { (error) in

  print("Messages fetching failed with error: " + error!.errorDescription);
}
```

</TabItem>
</Tabs>

The above snippet will return messages between the logged in user and `cometchat-uid-1` excluding all the threaded messages belonging to the same conversation.
