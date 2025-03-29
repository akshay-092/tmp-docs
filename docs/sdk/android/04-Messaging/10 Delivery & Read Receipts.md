---
sidebar_position: 10
title: Delivery & Read Receipts
slug: /delivery-read-receipts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import UMCFeatureNote from '../../shared/umc-feature-note.md';


## Mark Messages as Delivered

_In other words, as a recipient, how do I inform the sender that I've received a message?_

You can mark the messages for a particular conversation as read using the `markAsDelivered()` method. This method takes the below parameters as input:

| Parameter | Information | 
| ---- | ---- | 
| `messageId`    | The ID of the message above which all the messages for a particular conversation are to be marked as read.|
| `receiverId`   | In case of one to one conversation message's sender `UID` will be the receipt's receiver Id.<br/>In case of group conversation message's receiver Id will be the receipt's receiver Id. |
| `receiverType` | Type of the receiver. Could be either of the two values (user/group).|
| `senderId`     | The `UID` of the sender of the message.| 


Messages for both user & group conversations can be marked as read using this method.

Ideally, you would like to mark all the messages as delivered for any conversation when the user opens the chat window for that conversation. This includes two scenarios:

1. **When the list of messages for the conversation is fetched**: In this case you need to obtain the last message in the list of messages and pass the message ID of that message to the markAsDelivered() method.
2. **When the user is on the chat window and a real-time message is received:** In this case you need to obtain the message ID of the message and pass it to the markAsDelivered() method.

<Tabs>
<TabItem value="Java(User)" label="Java(User)">

  ```java
CometChat.markAsDelivered(message.getId(), message.getReceiverUid(), CometChatConstants.RECEIVER_TYPE_USER, message.getSender().getUid());
  ```
</TabItem>
<TabItem value="Kotlin(User)" label="Kotlin(User)">

  ```kotlin
CometChat.markAsDelivered(message.id, message.receiverUid, CometChatConstants.RECEIVER_TYPE_USER, message.sender.uid)
  ```
</TabItem>
<TabItem value="Java(Group)" label="Java(Group)">

  ```java
CometChat.markAsDelivered(message.getId(), message.getReceiverUid(), CometChatConstants.RECEIVER_TYPE_GROUP, message.getSender().getUid());
  ```
</TabItem>
<TabItem value="Kotlin(Group)" label="Kotlin(Group)">

  ```kotlin
CometChat.markAsDelivered(message.id, message.receiverUid, CometChatConstants.RECEIVER_TYPE_GROUP, message.sender.uid)
  ```
</TabItem>
</Tabs>


This method will mark all the messages before the messageId specified, for the conversation with receiverId and receiverType(user/group) as read.

In case you would like to be notified of an error if the receipts fail to go through you can use `markAsDelivered()` method with the callbacks as shown below:

<Tabs>
<TabItem value="Java(User)" label="Java(User)">

  ```java
  CometChat.markAsDelivered(message.getId(), receiverUID, CometChatConstants.RECEIVER_TYPE_USER, message.getSender().getUid(), new CometChat.CallbackListener<Void>() {
      @Override
      public void onSuccess(Void unused) {
          Log.e(TAG, "markAsDelivered : " + "Success");
      }

      @Override
      public void onError(CometChatException e) {
          Log.e(TAG, "markAsDelivered : " + e.getMessage());
      }
  });
  ```
</TabItem>
<TabItem value="Java(Group)" label="Java(Group)">

  ```java
  CometChat.markAsDelivered(message.getId(), receiverUID, CometChatConstants.RECEIVER_TYPE_GROUP, message.getSender().getUid(), new CometChat.CallbackListener<Void>() {
      @Override
      public void onSuccess(Void unused) {
          Log.e(TAG, "markAsDelivered : " + "Success");
      }

      @Override
      public void onError(CometChatException e) {
          Log.e(TAG, "markAsDelivered : " + e.getMessage());
      }
  });  
  ```
</TabItem>
<TabItem value="Kotlin(User)" label="Kotlin(User)">

  ```kotlin
  CometChat.markAsDelivered(message.id, receiverUID, CometChatConstants.RECEIVER_TYPE_USER, message.sender.uid, object : CallbackListener<Void?>() {
      override fun onSuccess(unused: Void?) {
          Log.e(TAG, "markAsDelivered : " + "Success")
      }

      override fun onError(e: CometChatException) {
          Log.e(TAG, "markAsDelivered : " + e.message)
      }
  })
  ```
</TabItem>
<TabItem value="Kotlin(Group)" label="Kotlin(Group)">

  ```kotlin
  CometChat.markAsDelivered(message.id, receiverUID, CometChatConstants.RECEIVER_TYPE_GROUP, message.sender.uid, object : CallbackListener<Void?>() {
      override fun onSuccess(unused: Void?) {
          Log.e(TAG, "markAsDelivered : " + "Success")
      }

      override fun onError(e: CometChatException) {
          Log.e(TAG, "markAsDelivered : " + e.message)
      }
  })
  ```
</TabItem>
</Tabs>


Another option the CometChat SDK provides is to pass the entire message object to the markAsDelivered() method.

<Tabs>
<TabItem value="Java" label="Java">

  ```java
CometChat.markAsRead(baseMessage)
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
CometChat.markAsRead(baseMessage)
  ```
</TabItem>
</Tabs>


In case you would like to be notified of an error if the receipts fail to go through you can use `markAsDelivered()` method with the callbacks as shown below:

<Tabs>
<TabItem value="Java" label="Java">

  ```java
  CometChat.markAsDelivered(message, new CometChat.CallbackListener<Void>() {
    @Override
      public void onSuccess(Void unused) {
      Log.e(TAG, "markAsDelivered : " + "success");
    }

    @Override
      public void onError(CometChatException e) {
      Log.e(TAG, "markAsDelivered : " + e.getMessage());
    }
  });
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
  CometChat.markAsDelivered(message, object : CallbackListener<Void?>() {
      override fun onSuccess(unused: Void?) {
          Log.e(TAG, "markAsDelivered : " + "success")
      }

      override fun onError(e: CometChatException) {
          Log.e(TAG, "markAsDelivered : " + e.message)
      }
  })
  ```
</TabItem>
</Tabs>



:::info Please Note
 Starting v3, the messages will not be marked delivered internally by the SDK. You will have to use the `markAsDelivered()` method. You will either have to use one of the above method signatures to mark the messages as delivered.
:::

## Mark Messages as Read

_In other words, as a recipient, how do I inform the sender I've read a message?_

You can mark the messages for a particular conversation as read using the `markAsRead()` method. This method takes the below parameters as input:

| Parameter | Information | 
| ---- | ---- | 
| `messageId` | The ID of the message above which all messages for a particular conversation are to be marked as read. | 
| `receiverId` | In case of one to one conversation message's sender `UID` will be the receipt's receiver Id.<br/>In case of group conversation message's receiver Id will be the receipts's receiver Id | 
| `receiverType` |  Type of the receiver. Could be either of the two values (user/group). The possible values are:<br/>1. `CometChatConstants.RECEIVER_TYPE_USER`<br/>2. `CometChatConstants.RECEIVER_TYPE_GROUP` | 
| `senderId` | The UID of the sender of the message | 

Messages for both user and group conversations can be marked as read using this method.

Ideally, you should mark all the messages as read for any conversation when the user opens the chat window for that conversation. This includes two scenarios:

1. **When the list of messages for the conversation is fetched**: In this case you need to obtain the last message in the list of messages and pass the message ID of that message to the `markAsRead()` method.
2. **When the user is on the chat window and a real-time message is received:** In this case you need to obtain the message ID of the message and pass it to the `markAsRead()` method

<Tabs>
<TabItem value="Java(User Conversation)" label="Java(User Conversation)">

  ```java
CometChat.markAsRead(message.getId(),message.getSender().getUid(),CometChatConstants.RECEIVER_TYPE_USER,message.getSender().getUid());
  ```
</TabItem>
<TabItem value="Kotlin(User Conversation)" label="Kotlin(User Conversation)">

  ```kotlin
CometChat.markAsRead(message.id, message.sender.uid, CometChatConstants.RECEIVER_TYPE_USER, message.sender.uid)
  ```
</TabItem>
<TabItem value="Java(Group Conversation)" label="Java(Group Conversation)">

  ```java
CometChat.markAsRead(message.getId(), message.getReceiverUID(), CometChatConstants.RECEIVER_TYPE_GROUP,message.getSender().getUid())
  ```
</TabItem>
<TabItem value="Kotlin(Group Conversation)" label="Kotlin(Group Conversation)">

  ```kotlin
CometChat.markAsRead(message.id, message.receiverUID, CometChatConstants.RECEIVER_TYPE_GROUP, message.sender.uid)
  ```
</TabItem>
</Tabs>



This method will mark all the messages before the messageId specified, for the conversation with `receiverId` and `receiverType` (user/group) as read.

In case you would like to be notified of an error if the receipts fail to go through you can use the `markAsRead()` method with the callbacks as shown below:

<Tabs>
<TabItem value="Java(User)" label="Java(User)">

  ```java
  CometChat.markAsRead(message.getId(), message.getSender().getUid(),CometChatConstants.RECEIVER_TYPE_USER, message.getSender().getUid(), new CometChat.CallbackListener<Void>() {
    @Override
      public void onSuccess(Void unused) {
      Log.e(TAG, "markAsRead : " + "Success");
    }
    
    @Override
      public void onError(CometChatException e) {
      Log.e(TAG, "markAsRead : " + e.getMessage());
    }
  });
  ```
</TabItem>
<TabItem value="Java(Group)" label="Java(Group)">

  ```java
  CometChat.markAsRead(message.getId(), message.getRecieverUID(), CometChatConstants.RECEIVER_TYPE_USER, message.getSender().getUid(), new CometChat.CallbackListener<Void>() {
    @Override
      public void onSuccess(Void unused) {
      Log.e(TAG, "markAsRead : " + "Success");
    }
    
    @Override
      public void onError(CometChatException e) {
      Log.e(TAG, "markAsRead : " + e.getMessage());
    }
  });
  ```
</TabItem>
<TabItem value="Kotlin(User)" label="Kotlin(User)">

  ```kotlin
  CometChat.markAsRead(message.id, message.sender.uid, CometChatConstants.RECEIVER_TYPE_USER, message.sender.uid, object : CallbackListener<Void?>() {
      override fun onSuccess(unused: Void?) {
          Log.e(TAG, "markAsRead : " + "Success")
      }
      
      override fun onError(e: CometChatException) {
          Log.e(TAG, "markAsRead : " + e.message)
      }
    }
  )
  ```
</TabItem>
<TabItem value="Kotlin(Group)" label="Kotlin(Group)">

  ```kotlin
  CometChat.markAsRead(message.id, message.receiverUID, CometChatConstants.RECEIVER_TYPE_GROUP, message.sender.uid, object : CallbackListener<Void?>() {
      override fun onSuccess(unused: Void?) {
          Log.e(TAG, "markAsRead : " + "Success")
      }
      
      override fun onError(e: CometChatException) {
          Log.e(TAG, "markAsRead : " + e.message)
      }
    }
  )
  ```
</TabItem>
</Tabs>



Another option the CometChat SDK provides is to pass the entire message object to the markAsRead() method.

<Tabs>
<TabItem value="Java" label="Java">

  ```java
CometChat.markAsRead(baseMessage) 
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
CometChat.markAsRead(baseMessage)
  ```
</TabItem>
</Tabs>



In case you would like to be notified of an error if the receipts fail to go through you can use the `markAsRead()` method with the callbacks as shown below:

<Tabs>
<TabItem value="Java" label="Java">

  ```java
  CometChat.markAsRead(message, new CometChat.CallbackListener<Void>() {
    @Override
      public void onSuccess(Void unused) {
      Log.e(TAG, "markAsRead : " + "success");
    }

    @Override
      public void onError(CometChatException e) {
      Log.e(TAG, "markAsRead : " + e.getMessage());
    }
  });
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
  CometChat.markAsRead(message, object : CallbackListener<Void?>() {
    override fun onSuccess(unused: Void?) {
      Log.e(TAG, "markAsRead : " + "success")
    }
    
    override fun onError(e: CometChatException) {
      Log.e(TAG, "markAsRead : " + e.message)
    }
})
  ```
</TabItem>
</Tabs>




:::info
 Starting v3, the `markAsRead()` method working with v2.x is deprecated and will not work. You will either have to use one of the above method signatures to mark the messages as read.
:::


## Mark Messages as Unread
The Mark as Unread feature allows users to designate specific messages or conversations as unread, even if they have been previously viewed.

This feature is valuable for users who want to revisit and respond to important messages or conversations later, ensuring they don't forget or overlook them.

In other words, how I can mark a message as unread?

You can mark the messages for a particular conversation as unread using the `markAsUnread()` method. This method takes the below parameters as input:


| Parameter | Information |
|-----------|-------------|
| message   | To mark a message as unread, pass a non-null BaseMessage instance to the markAsUnread() function. All messages below that message in the conversation will contribute to the unread messages count. <br/> **Example:** <br/> When User B sends User A a total of 10 messages, and User A invokes the markAsUnread() method on the fifth message, all messages located below the fifth message within the conversation list will be designated as unread. This results in a notification indicating there are 5 unread messages in the conversation list. |
| listener  | The callback listener that will be called on success or error. This should be a non-null `CallbackListener` instance. |


<Tabs>
<TabItem value="Java(User)" label="Java(User)">

  ```java
  BaseMessage message = messageInstance;

  CometChat.markAsUnread(message, new CometChat.CallbackListener<Void>() {
      @Override
      public void onSuccess(Void unused) {
          Log.e("TAG", "markAsUnread: onSuccess");
      }

      @Override
      public void onError(CometChatException e) {
          Log.e("TAG", "markAsUnread: onError: " + e);
      }
  });
  ```
</TabItem>
<TabItem value="Kotlin(User)" label="Kotlin(User)">

  ```kotlin
  val message: BaseMessage = messageInstance

  CometChat.markAsUnread(message, object : CometChat.CallbackListener<Void>() {
      override fun onSuccess(unused: Void) {
          Log.e("TAG", "markAsUnread: onSuccess")
      }

      override fun onError(e: CometChatException) {
          Log.e("TAG", "markAsUnread: onError: $e")
      }
  })
  ```
</TabItem>
<TabItem value="Java(Group)" label="Java(Group)">

  ```java
  BaseMessage message = messageInstance;

  CometChat.markAsUnread(message, new CometChat.CallbackListener<Void>() {
      @Override
      public void onSuccess(Void unused) {
          Log.e("TAG", "markAsUnread: onSuccess");
      }

      @Override
      public void onError(CometChatException e) {
          Log.e("TAG", "markAsUnread: onError: " + e);
      }
  });
  ```
</TabItem>
<TabItem value="Kotlin(Group)" label="Kotlin(Group)">

  ```kotlin
  val message: BaseMessage = messageInstance

  CometChat.markAsUnread(message, object : CometChat.CallbackListener<Void>() {
      override fun onSuccess(unused: Void) {
          Log.e("TAG", "markAsUnread: onSuccess")
      }

      override fun onError(e: CometChatException) {
          Log.e("TAG", "markAsUnread: onError: $e")
      }
  })
  ```
</TabItem>
</Tabs>


## Receive Delivery & Read Receipts

_In other words, as a recipient, how do I know when a message I sent has been delivered or read by someone?_

### Real-time events

1. `onMessagesDelivered()` - This event is triggered when a message is delivered to a user.
2. `onMessagesRead()` - This event is triggered when a message is read by a user.
3. `onMessagesDeliveredToAll()` - This event is triggered when a group message is delivered to all members of the group. This event is only for Group conversations.
4. `onMessagesReadByAll()` - This event is triggered when a group message is read by all members of the group. This event is only for Group conversations.

<Tabs>
<TabItem value="Java" label="Java">

  ```java
  CometChat.addMessageListener("Listener 1", new CometChat.MessageListener() {
    @Override
    public void onMessagesDelivered(MessageReceipt messageReceipt) {
      Log.e(TAG, "onMessagesDelivered: " + messageReceipt.toString());
    }
    
    @Override
    public void onMessagesRead(MessageReceipt messageReceipt) {
      Log.e(TAG, "onMessagesRead: " + messageReceipt.toString());
    }

    @Override
    public void onMessagesDeliveredToAll(MessageReceipt messageReceipt) {
      Log.e(TAG, "onMessagesDeliveredToAll: " + messageReceipt.toString());
    }

    @Override
    public void onMessagesReadByAll(MessageReceipt messageReceipt) {
      Log.e(TAG, "onMessagesReadByAll: " + messageReceipt.toString());
    }
  });
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
  CometChat.addMessageListener("Listener 1", object : MessageListener() {
    override fun onMessagesDelivered(messageReceipt: MessageReceipt) {
      Log.e(TAG, "onMessagesDelivered: $messageReceipt")
    }

    override fun onMessagesRead(messageReceipt: MessageReceipt) {
      Log.e(TAG, "onMessagesRead: $messageReceipt")
    }
    
    override fun onMessagesDeliveredToAll(messageReceipt: MessageReceipt) {
      Log.e(TAG, "onMessagesDeliveredToAll: $messageReceipt")
    }
    
    override fun onMessagesReadByAll(messageReceipt: MessageReceipt) {
      Log.e(TAG, "onMessagesReadByAll: $messageReceipt")
    }
  })
  ```
</TabItem>
</Tabs>



You will receive events in the form of `MessageReceipt` objects. The message receipt contains the following parameters:

| Parameter      | Information                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `messageId`    | The Id of the message prior to which all the messages for that particular conversation have been marked as read.                          |
| `sender`       | User object containing the details of the user who has marked the message as read. System User for `deliveredToAll` & `readByAll` events. |
| `receiverId`   | Id of the receiver whose conversation has been marked as read.                                                                            |
| `receiverType` | type of the receiver (user/group)                                                                                                         |
| `receiptType`  | Type of the receipt (read/delivered)                                                                                                      |
| `deliveredAt`  | The timestamp of the time when the message was delivered. This will only be present if the receiptType is delivered.                      |
| `readAt`       | The timestamp of the time when the message was read. This will only be present when the receiptType is read.                              |


### Missed Receipts

You will receive message receipts when you load offline messages. While fetching messages in bulk, the message object will have two fields i.e. `deliveredAt` and `readAt` which hold the timestamp for the time the message was delivered and read respectively. Using these two variables, the delivery and read status for a message can be obtained.

However, for a group message, if you wish to fetch the `deliveredAt` and `readAt` fields of individual member of the group you can use the below-described method.

### Receipt History for a Single Message

To fetch the message receipts, you can use the `getMessageReceipts()` method.

<Tabs>
<TabItem value="Java" label="Java">

  ```java
  private int messageId = 10101;

  CometChat.getMessageReceipts(messageId, new CometChat.CallbackListener<List<MessageReceipt>>() {
    @Override
      public void onSuccess(List<MessageReceipt> messageReceipts) {
        // Handle message receipts
    }

    @Override
      public void onError(CometChatException e) {
      // Handle error
    }
  });
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
  val messageId:Int=10101

  CometChat.getMessageReceipts(messageId, object : CallbackListener<List<MessageReceipt?>?>() {
    override fun onSuccess(messageReceipts: List<MessageReceipt?>?) {
      // Handle message receipts
    }

    override fun onError(e: CometChatException) {
      // Handle error
    }
  })
  ```
</TabItem>
</Tabs>


You will receive a list of `MessageReceipt` objects in the `onSuccess()` method.

<UMCFeatureNote />
