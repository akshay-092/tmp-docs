---
sidebar_position: 10
title: Delivery & Read Receipts
slug: /delivery-read-receipts
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Mark Messages as Delivered

*In other words, as a recipient, how do I inform the sender that I've received a message?*

Messages are marked as delivered automatically by the SDK whenever the message is received.

## Mark Messages as Read

_In other words, as a recipient, how do I inform the sender I've read a message?_

You can mark the messages for a particular conversation as read using the `markAsRead()` method. This method takes the below parameters as input:

| Parameter | Information | 
| ---- | ---- | 
| messageId | The ID of the message above which all the messages for a particular conversation are to be marked as read. | 
| receiverId | In case of one to one conversation message's sender `UID` will be the receipt's receiver Id.<br />In case of group conversation message's receiver Id will be the receipts's receiver Id | 
| receiverType | type of the receiver. Could be either of the two values( user or group) | 


Messages for both User conversation and Groups can be marked as read using this method.

Ideally, you would like to mark all the messages as read for any conversation when the user opens the chat window for that conversation. This includes two scenarios:
1. **When the list of messages for the conversation is fetched**: In this case you need to obtain the last message in the list of messages and pass the message Id of that message to the markAsRead() method.
2. **When the user is on the chat window and a real-time message is received:** In this case you need to obtain the message Id of the message and pass it to the markAsRead() method

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var messageId = 123
var receiverId = "abc"

CometChat.markAsRead(messageId: messageId, receiverId: receiverId, receiverType: .user)
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
int messageId = 123;
NSString *receiverId = "abc";

[CometChat markAsReadWithMessageId:1 receiverId:receiverId receiverType:ReceiverTypeUser];
```
</TabItem>
</Tabs>


This method will mark all the messages before the messageId specified, for the conversation with receiverId and receiverType(user/group) as read.

## Receive Delivery & Read Receipts

_In other words, as a recipient, how do I know when a message I sent has been delivered or read by someone?_

### Real-time Receipts

Real-time events for messages of a conversation being read or delivered can be obtained in the `onMessagesRead()` and the `onMessagesDelivered()` methods of the `CometChatMessageDelegate`. In order to receive typing indicators, you must add protocol conformance `CometChatMessageDelegate`.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
 func onMessagesRead(receipt: MessageReceipt) {
    
   print("onMessagesRead \(receipt.stringValue())")
 }
    
 func onMessagesDelivered(receipt: MessageReceipt) {
        
  print("onMessagesDelivered \(receipt.stringValue())")
 }
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
-(void)onMessagesDeliveredWithReceipt:(MessageReceipt *)receipt
{
   NSLog(@"onMessagesDeliveredWithReceipt %@",receipt.stringValue)
}
-(void)onMessagesReadWithReceipt:(MessageReceipt *)receipt
{
   NSLog(@"onMessagesReadWithReceipt %@",receipt.stringValue)
}
```
</TabItem>
</Tabs>


You will receive events in the form of `MessageReceipt` objects. The message receipt contains the below parameters:

| Parameter | Information | 
| ---- | ---- | 
| messageId | The Id of the message prior to which all the messages for that particular conversation have been marked as read. | 
| sender | User object containing the details of the user who has marked the message as read. | 
| receiverId | Id of the receiver whose conversation has been marked as read. | 
| receiverType | type of the receiver (user/group) | 
| receiptType | Type of the receipt (read/delivered) | 
| deliveredAt | The timestamp of the time when the message was delivered. This will only be present if the receiptType is delivered. | 
| readAt | The timestamp of the time when the message was read. This will only be present when the receiptType is read. | 


While fetching messages in bulk, if the message is a part of a user conversation, the message object will have two fields viz. `deliveredAt` and `readAt` which hold the timestamp for the time the message was delivered and read respectively. using these two variables, the delivery and read status for a user message can be obtained.

However, for a group message, the `deliveredAt` and `readAt` fields are never set and hence to get the status of the message you can use the below-described method.



### Missed Receipts

You will receive message receipts when you load offline messages. For groups, we do not include the list the users that have received it. You need to call the `getMessageReceipts()` method for it.



### Receipt History for a Single Message

In order to fetch the message receipts, you can use the `getMessageReceipts()` method.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var messageId = 10101;

CometChat.getMessageReceipts(messageId, onSuccess: { (receipt) in
            
  print("getMessageReceipt \(receipt)")                                           
}) { (error) in
  print(error?.errorDescription)
}
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
int messageId =10101;

[CometChat getMessageReceipts:messageId onSuccess:^(NSArray<MessageReceipt *> * _Nonnull receipt) {
        
        NSLog(@"getMesssageReceipts %@",receipt);
    } onError:^(CometChatException * _Nullable error) {
        
        NSLog(@"CometChatException %@",error.errorDescription);
    }];
```
</TabItem>
</Tabs>

You will receive a list of `MessageReceipt` objects in the `onSuccess()` method.