---
sidebar_position: 10
title: Delivery & Read Receipts
slug: /delivery-read-receipts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Mark Messages as Delivered

_In other words, as a recipient, how do I inform the sender that I've received a message?_

Messages are marked as delivered automatically by the SDK whenever the message is received.

## Mark Messages as Read

_In other words, as a recipient, how do I inform the sender I've read a message?_

You can mark the messages for a particular conversation as read using the `markAsRead()` method. This method takes the below parameters as input:

| Parameter | Information | 
| ---- | ---- | 
| `messageId` | The ID of the message above which all messages for a particular conversation are to be marked as read. | 
| `receiverId` | In case of one to one conversation message's sender `UID` will be the receipt's receiver Id.<br />In case of group conversation message's receiver Id will be the receipts's receiver Id | 
| `receiverType` | This parameter indicates if the typing indicator is to be sent to a user or a group. The possible values are:<br />1. `CometChatConstants.RECEIVER_TYPE_USER`<br />2. `CometChatConstants.RECEIVER_TYPE_GROUP` | 


Messages for both user and group conversations can be marked as read using this method.

Ideally, you should mark all the messages as read for any conversation when the user opens the chat window for that conversation. This includes two scenarios:

1. **When the list of messages for the conversation is fetched**: In this case you need to obtain the last message in the list of messages and pass the message ID of that message to the `markAsRead()` method.
2. **When the user is on the chat window and a real-time message is received:** In this case you need to obtain the message ID of the message and pass it to the `markAsRead()` method

<Tabs>
<TabItem value="Java(User)" label="Java(User)">

```java
CometChat.markAsRead(message.getId(),message.getSender().getUid(),CometChatConstants.RECEIVER_TYPE_USER);
```
</TabItem>
<TabItem value="Kotlin(User)" label="Kotlin(User)">

```kotlin
CometChat.markAsRead(message.getId(),message.getSender().getUid(),CometChatConstants.RECEIVER_TYPE_USER);
```
</TabItem>
<TabItem value="Java(Group)" label="Java(Group)">

```java
CometChat.markAsRead(message.getId(),message.getReceiverUid(),CometChatConstants.RECEIVER_TYPE_GROUP);
```
</TabItem>
<TabItem value="Kotlin(Group)" label="Kotlin(Group)">

```kotlin
CometChat.markAsRead(message.getId(),message.getReceiverUid(),CometChatConstants.RECEIVER_TYPE_GROUP)
```
</TabItem>
</Tabs>


This method will mark all the messages before the messageId specified, for the conversation with `receiverId` and `receiverType` (user/group) as read.

## Receive Delivery & Read Receipts

_In other words, as a recipient, how do I know when a message I sent has been delivered or read by someone?_

### Real-time Receipts

Real-time events for messages of a conversation being read or delivered can be obtained in the `onMessagesRead()` and the `onMessagesDelivered()` methods of the `MessageListener` class.

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
 });
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
CometChat.addMessageListener("Listener 1",object :CometChat.MessageListener(){
        override fun onMessageDelivered(messageReceipt: MessageReceipt?) {
          Log.d(TAG,"onMessageDelivered: ${messageReceipt.toString()}")
       }

        override fun onMessageRead(messageReceipt: MessageReceipt?) {
          Log.d(TAG,"onMessageRead: ${messageReceipt.toString()}")
       }
   })
```
</TabItem>
</Tabs>


You will receive events in the form of `MessageReceipt` objects. The message receipt contains the following parameters:

| Parameter | Information | 
| ---- | ---- | 
| `messageId` | The ID of the message prior to which all the messages for that particular conversation have been marked as read. | 
| `sender` | User object containing the details of the user who has marked the message as read. | 
| `receiverId` | Id of the receiver whose conversation has been marked as read. | 
| `receiverType` | Type of the receiver (user/group) | 
| `receiptType` | Type of the receipt (read/delivered) | 
| `deliveredAt` | The timestamp of the time when the message was delivered. This will only be present if the receiptType is delivered. | 
| `readAt` | The timestamp of the time when the message was read. This will only be present when the receiptType is read. | 


### Missed Receipts

You will receive message receipts when you load offline messages. For groups, we do not include the list the users that have received it. You need to call the `getMessageReceipts()` method for it.

While fetching messages in bulk, if the message is a part of a one-on-one conversation, the message object will have two fields viz. `deliveredAt` and `readAt` which hold the timestamp for the time the message was delivered and read respectively. Using these two variables, the delivery and read status for a one-on-one conversation message can be obtained.

However, for a group conversation message, the `deliveredAt` and `readAt` fields are set once a message is delivered to or read by all members of the group.

### Receipt History for a Single Message

In order to fetch the message receipts, you can use the `getMessageReceipts()` method.

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

CometChat.getMessageReceipts(messageId, object : CometChat.CallbackListener<List<MessageReceipt>>() {
     override fun onSuccess(messageReceipts: List<MessageReceipt>) {
            Log.d(TAG,"onSuccess: ${messageReceipts.size}")
        }

     override fun onError(e: CometChatException) {
            Log.d(TAG,"onError: ${e.message} ")
        }
    })
```
</TabItem>
</Tabs>

You will receive a list of `MessageReceipt` objects in the `onSuccess()` method.

