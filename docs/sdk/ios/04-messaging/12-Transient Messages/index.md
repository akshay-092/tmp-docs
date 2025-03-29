---
sidebar_position: 12
title: Transient Messages
listed: true
slug: /transient-messages
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Transient messages are messages that are sent in real-time only and are not saved or tracked anywhere. The receiver of the message will only receive the message if he is online and these messages cannot be retrieved later.

## Send a Transient Message

You can use the `sendTransientMessage()` method to send a transient message to a user or in a group. The receiver will receive this information in the `onTransientMessageReceived()` method of the `MessageListener` class. In order to send the transient message, you need to use the `TransientMessage` class.
<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let receiverId = "cometchat-uid-2";
let data = ["LIVE_REACTION","heart"]
let transientMessage = TransientMessage(receiverID: receiverId, receiverType: .user, data: data)
CometChat.sendTransientMessage(message: transientMessage)
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```Objective C
NSString *receiverId = @"cometchat-uid-2";
NSArray *arr = [[NSArray arrayWithObjects: @"LIVE_REACTION",@"heart"];
let transientMessage = TransientMessage(receiverID: receiverId, receiverType: .user, data: data)
CometChat.sendTransientMessage(message: transientMessage)
```
</TabItem>
</Tabs>


## Real-time Transient Messages

_In other words, as a recipient, how do I know when someone sends a transient message?_

In order to receive incoming transient messages, you must add protocol conformance `CometChatMessageDelegate` as Shown Below :

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
extension ViewController: CometChatMessageDelegate {
  public func onTransisentMessageReceived(_ message: TransientMessage) {
        print("TransientMessage received successfully: " + message.stringValue())
    }
}
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```Objective C
-(void)onTransisentMessageReceived:(TransientMessage *)message {
    NSlog(@"TransientMessage received successfully:%@", [message stringValue]);
}
```
</TabItem>
</Tabs>


The `TransientMessage` class consists of the below parameters:

| Parameter | Information | 
| ---- | ---- | 
| **sender** | An object of the `User` class holding all the information. related to the sender of the transient message. | 
| **receiverId** | Unique Id of the receiver. This can be the Id of the group or the user the transient message is sent to. | 
| **receiverType** | This parameter indicates if the transient message is to be sent to a user or a group. The possible values are: <br/>1. `.user`<br/>2.`.group` | 
| **data** | A Dictionary to provide data. | 


