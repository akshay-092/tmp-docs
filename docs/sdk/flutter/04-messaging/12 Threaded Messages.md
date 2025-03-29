---
sidebar_position: 12
title: Threaded Messages
slug: /threaded-messages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Messages that are started from a particular message are called Threaded messages or simply threads.
Each Thread is attached to a message which is the Parent message for that thread.

## Send Message in a Thread

As mentioned in the [Send a Message](send-message) section, you can send a message to a User or a Group by mentioning the receiver (uid/guid) and  `receiverType`(user/group).

A message can be categorized as:

1. Text Message
2. Media Message
3. Custom Message.
4. Interactive Message

Any of the above messages can be sent in a thread. As a thread is identified with a parent message, the `parentMessageId` must be set for the message. This will indicate that the message to be sent has to be a part of the thread of the message with the specified `parentMessageId`.

This can be achieved using the `parentMessageId` parameter provided by the object of the `TextMessage`, `MediaMessage` and `CustomMessage` class. The id specified in the `parentMessageId` parameter maps the message sent to the particular thread.

**Example to Send a Text Message in a thread in a user conversation.**

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
String receiverID = "UID";
String messagesText = "Hello";
String receiverType = CometChatConversationType.user;
String type = CometChatMessageType.text; 

TextMessage textMessage = TextMessage(
                          text: messagesText,
                          receiverUid: receiverID,
                          receiverType: receiverType,
                          type: type);
textMessage.parentMessageId = 103

CometChat.sendMessage(textMessage,onSuccess: (TextMessage message) {
  debugPrint("Message sent successfully:  $message");
}, onError: (CometChatException e) {
  debugPrint("Message sending failed with exception:  ${e.message}");
});
  ```
</TabItem>
</Tabs>


The above snippet shows how a message with the text "Hello" can be sent in the thread with `parentMessageId` 103.

Similarly, using the `parentMessageId` parameter, Media and Custom Messages can be sent in threads too.

### Receiving Real-Time Messages

The procedure to receive real-time messages is exactly the same as mentioned in the [Receive Messages](receive-messages). This can be achieved using the `MessageListener` class provided by the SDK.
To add a MessageListener, you can use the `addMessageListener()` method of the SDK.
The only thing that needs to be checked is if the received message belongs to the active thread. This can be done using `parentMessageId` field of the message object.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
class Class_Name  with MessageListener {
	int activeParentMessageId= 103;
  //CometChat.addMessageListener("listenerId", this);
	@override
  void onTextMessageReceived(TextMessage textMessage) {
     if(textMessage.parentMessageId == activeParentMessageId){
        debugPrint("Text message received successfully: $textMessage");
    }
   
  }
  
  @override
  void onMediaMessageReceived(MediaMessage mediaMessage) {
    if(mediaMessage.parentMessageId== activeParentMessageId){
    	debugPrint("Media message received successfully: $mediaMessage");  
    } 	 
  }
  
  @override
  void onCustomMessageReceived(CustomMessage customMessage) {
    if(customMessage.parentMessageId== activeParentMessageId){
      debugPrint("Custom message received successfully: $customMessage"); 
    }    
  }  
} 
  ```
</TabItem>
</Tabs>



### Fetch all the messages for any particular thread.

You can fetch all the messages belonging to a particular thread by using the `MessagesRequest` class.

The `MessageRequestBuilder` builds the `MessageRequest` object using the following functions:

1. parentMessageId: Takes the parentId of the message as argument whose thread needs to be requested.
2. build(): returns the MessageRequest object.

Once you have the  `MessagesRequest` object, you can call the `fetchPrevious()` method to get the latest messages in the thread. In one iteration, a maximum of 100 messages can be fetched. If you wish to fetch the next set of messages, you need to call the fetchPrevious() method again on the same object.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
String UID = "cometchat-uid-1";

MessagesRequest messageRequest = (MessagesRequestBuilder()
            ..UID = UID
            ..parentMessageId = 103
            ..limit = 50).build();

messageRequest.fetchNext(onSuccess: (List<BaseMessage> list) {
           debugPrint("Message fetching Successful");
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
  ```
</TabItem>
</Tabs>



## Avoid Threaded Messages in User/Group Conversations

While fetching messages for normal user/group conversations using the `MessagesRequest`, the threaded messages by default will be a part of the list of messages received. In order to exclude the threaded messages from the list of user/group messages, you need to use the `hideReplies` parameter of the `MessagesRequestBuilder` class. This method takes a boolean argument which when set to true excludes the messages belonging to threads from the list of messages.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
String UID = "cometchat-uid-1";

MessagesRequest messageRequest = (MessagesRequestBuilder()
            ..UID = UID
            ..hideReplies = true
            ..limit = 50).build();

messageRequest.fetchNext(onSuccess: (List<BaseMessage> list) {
           debugPrint("Message fetching Successful");
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
  ```
</TabItem>
</Tabs>


The above snippet will return messages between the logged in user and `cometchat-uid-1` excluding all the threaded messages belonging to the same conversation.