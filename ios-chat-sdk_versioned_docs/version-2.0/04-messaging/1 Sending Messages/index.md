---
sidebar_position: 1
title: Send a Message
slug: /send-a-message
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using CometChat, you can send three types of messages:

1. A [text message](./send-a-message#text-message), the most common and standard message type.
2. A [media message](./send-a-message#media-message), for sending photos, videos and files.
3. A [custom message](./send-a-message#custom-message), for sending completely custom data using JSON structures.

You can also send metadata along with a text, media or custom message. Think, for example, if you'd want to share the user's location with every message, you can use the metadata field.

---

## Text Message

_In other words, as a sender, how do I send a text message?_

To send a text message to a single user or group, you need to use the `sendMessage()` method and pass a `TextMessage` object to it.


<Tabs>
<TabItem value="User(Swift)" label="User(Swift)">

```swift
let receiverID = "cometchat-uid-2"
let text = "Hello"

let textMessage = TextMessage(receiverUid: receiverID, text: text, receiverType: .user)

CometChat.sendTextMessage(message: textMessage, onSuccess: { (message) in

  print("TextMessage sent successfully. " + message.stringValue())

}) { (error) in

  print("TextMessage sending failed with error: " + error!.errorDescription);
}
```
</TabItem>
<TabItem value="User(Objective C)" label="User(Objective C)">

```objectivec
NSString *receiverID = @"cometchat-uid-1";
NSString *text       = @"Hello";

TextMessage *textMessage = [[TextMessage alloc]initWithReceiverUid:receiverID text:text receiverType:ReceiverTypeUser];

[CometChat sendTextMessageWithMessage:textMessage onSuccess:^(TextMessage * message) {
    
    NSLog(@"TextMessage sent successfully. %@",[message stringValue]);
  
} onError:^(CometChatException * error) {
    
    NSLog(@"TextMessage sending failed with error: %@",[error errorDescription]);
}];
```
</TabItem>
<TabItem value="Group(Swift)" label="Group(Swift)">

```swift
let receiverID = "cometchat-guid-102"
let text = "Hello"

let textMessage = TextMessage(receiverUid: receiverID, text: text, receiverType: .group)

CometChat.sendTextMessage(message: textMessage, onSuccess: { (message) in

  print("TextMessage sent successfully. " + message.stringValue())

}) { (error) in

  print("TextMessage sending failed with error: " + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Group(Objective C)" label="Group(Objective C)">

```objectivec
NSString *receiverID = @"cometchat-guid-101";
NSString *text       = @"Hello";

TextMessage *textMessage = [[TextMessage alloc]initWithReceiverUid:receiverID text:text receiverType:ReceiverTypeGroup];

[CometChat sendTextMessageWithMessage:textMessage onSuccess:^(TextMessage * message) {
    
    NSLog(@"TextMessage sent successfully. %@",[message stringValue]);
  
} onError:^(CometChatException * error) {
    
    NSLog(@"TextMessage sending failed with error: %@",[error errorDescription]);
}];
```
</TabItem>
</Tabs>


To send a message you need to create an object of the `TextMessage` class. The initialize method of the TextMessage class takes the following mandatory parameters:

The `TextMessage` class constructor takes the following parameters:

| Parameters | Information | 
| ---- | ---- | 
| receiverID | The `UID` or `GUID` of the recipient | 
| text | The text to be sent | 
| receiverType | The type of the receiver to whom the message is to be sent i.e `user` or `group` | 


When a text message is sent successfully, the response will include a `TextMessage` object which includes all information related to the sent message.

## Add Metadata to Text Message

To send custom data along with a text message, you can use the metadata field provided in `TextMessage`. A metadata field is a [`dictionary`](https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html) of type `[String: Any]` which will be received as it was sent without any processing from CometChat. It can be used to send any additional data that needs to be sent along with a message.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let metadata = ["latitude":"50.6192171633316","longitude":"-72.68182268750002"];

textMessage.metaData = metadata;
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSDictionary * metadata = @{@"latitude":@"50.6192171633316",@"longitude":@"-72.68182268750002"};

[textMessage setMetaData:metadata];
```
</TabItem>
</Tabs>


---

## Media Message

_In other words, as a sender, how do I send a media message like photos, videos & files?_

To send a media message to any user or group, you need to use the `sendMediaMessage()` method and pass a `MediaMessage` object to it.


<Tabs>
<TabItem value="User(Swift)" label="User(Swift)">

```swift
let receiverid = "cometchat-uid-2"

let mediaUrl = "Library/Developer/CoreSimulator/Devices/(numbers and letters)/data/Containers/Data/Application/(numbers and letters)/Documents/image.jpg"

let mediaMessage = MediaMessage(receiverUid: receiverid, fileurl:mediaUrl, messageType: .image, receiverType: .user);

CometChat.sendMediaMessage(message: mediaMessage, onSuccess: { (message) in

  print("MediaMessage sent successfully. " + message.stringValue())

}) { (error) in

  print("MediaMessage sending failed with error: " + error.errorDescription);
}
```
</TabItem>
<TabItem value="User(Objective C)" label="User(Objective C)">

```objectivec
NSString *receiverID = @"cometchat-uid-1";

NSString *filePath = @"Library/Developer/CoreSimulator/Devices/(numbers and letters)/data/Containers/Data/Application/(numbers and letters)/Documents/image.jpg";

MediaMessage *mediaMessage = [MediaMessage alloc]initWithReceiverUid:receiverID fileurl:filePath messageType:messageTypeImage receiverType:ReceiverTypeUser];

[CometChat sendMediaMessageWithMessage:mediaMessage onSuccess:^(MediaMessage * message) {
    
    NSLog(@"MediaMessage sent successfully. %@",[message stringValue]);
  
} onError:^(CometChatException * error) {
    
    NSLog(@"MediaMessage sending failed with error: %@",[error errorDescription]);
    
}];
```
</TabItem>
<TabItem value="Group(Swift)" label="Group(Swift)">

```swift
let receiverid = "cometchat-uid-2"

let mediaUrl = "Library/Developer/CoreSimulator/Devices/(numbers and letters)/data/Containers/Data/Application/(numbers and letters)/Documents/image.jpg"

let mediaMessage = MediaMessage(receiverUid: receiverid, fileurl:mediaUrl, messageType: .image, receiverType: .group);

CometChat.sendMediaMessage(message: mediaMessage, onSuccess: { (message) in

  print("MediaMessage sent successfully. " + message.stringValue())

}) { (error) in

  print("MediaMessage sending failed with error: " + error.errorDescription);
}
```
</TabItem>
<TabItem value="Group(Objective C)" label="Group(Objective C)">

```objectivec
NSString *receiverID = @"cometchat-uid-1";

NSString *filePath = @"Library/Developer/CoreSimulator/Devices/(numbers and letters)/data/Containers/Data/Application/(numbers and letters)/Documents/image.jpg";

MediaMessage *mediaMessage = [MediaMessage alloc]initWithReceiverUid:receiverID fileurl:filePath messageType:messageTypeImage receiverType:ReceiverTypeGroup];

[CometChat sendMediaMessageWithMessage:mediaMessage onSuccess:^(MediaMessage * message) {
    
    NSLog(@"MediaMessage sent successfully. %@",[message stringValue]);
  
} onError:^(CometChatException * error) {
    
    NSLog(@"MediaMessage sending failed with error: %@",[error errorDescription]);
    
}];
```
</TabItem>
</Tabs>


To send a media message you need to create an object of the `MediaMessage` class. The initialize method of the `MediaMessage` class takes the following mandatory parameters:

| Parameter | Description | 
| ---- | ---- | 
| receiverId | The UID or GUID of the recipient | 
| fileurl | The file path object to be sent | 
| messageType | The type of the message that needs to be sent which in this case can be:<br />- image<br />- video<br />- audio<br />- file | 
| receiverType | The type of the receiver to whom the message is to be sent<br />- user<br />- group | 


On success, you will receive an object of the `MediaMessage` class containing all the information related to the sent media message.

### Add Metadata

To send custom data along with a media message, you can use the metadata field provided in `MediaMessage`. A metadata field is a [`dictionary`](https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html) of type `[String: Any]` which will be received as it was sent without any processing from CometChat. It can be used to send any additional data that needs to be sent along with a message.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let metadata = ["latitude":"50.6192171633316","longitude":"-72.68182268750002"];

mediaMessage.metaData = metadata;
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSDictionary * metadata = @{@"latitude":@"50.6192171633316",@"longitude":@"-72.68182268750002"};

[mediaMessage setMetaData:metadata];
```
</TabItem>
</Tabs>




---

## Custom Message

CometChat SDK allows you to send a completely custom message across. You can use this feature to send messages that do not fit in any default categories provided. In order to send a custom message, you need to use the `sendCustomMessage()` method.

The `sendCustomMessage()` methods takes an object of the `CustomMessage` which can be obtained using  the below two constructor:


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let customMessage : CustomMessage = CustomMessage(receiverId: receiverId, receiverType: .user, customData : customData, type: "Custom Type")
```

</TabItem>
</Tabs>


The above constructor, helps you create a custom message with the message type set to whatever is passed to the constructor and the category set to `custom`.

The parameters involved are:

1. receiverId - Unique id of the user or group to which the message is to be sent.
2. receiverType - Type of the receiver i.e user or group
3. type - custom message type that you need to set
4. customData - The data to be passed as the message in the form of a Dictionary object.

You can also use the subType field of the `CustomMessage` class to set a specific type for the CustomeMessage.

Once the object of `CustomMessage` class is ready you can send the custom message using the `sendCustomMessage()` method.


<Tabs>
<TabItem value="User(Swift)" label="User(Swift)">

```swift
let receiverid = "cometchat-uid-2"

let customData : [String : Any] = ["customKey" : "customData"]

let customMessage = CustomMessage(receiverUid: receiverid, receiverType: .user, customData : customData, type: "Custom Type");

CometChat.sendCustomMessage(message: customMessage, onSuccess: { (message) in

  print("CustomMessage sent successfully. " + message.stringValue())

}) { (error) in

  print("CustomMessage sending failed with error: " + error!.errorDescription);
}
```

</TabItem>
<TabItem value="User(Objective C)" label="User(Objective C)">

```objectivec
NSString *receiverID = @"cometchat-uid-1";

NSMutableDictionary<NSString *, id> *customData = [NSMutableDictionary new];
    [customData setObject:@"customData" forKey:@"customKey"];

CustomMessage *customMessage = [CustomMessage alloc]initWithReceiverUid:receiverID receiverType:ReceiverTypeUser customData: customData type:@"Custom Type"];

[CometChat sendCustomMessageWithMessage:customMessage onSuccess:^(CustomMessage * message) {
    
    NSLog(@"CustomMessage sent successfully. %@",[message stringValue]);
  
} onError:^(CometChatException * error) {
    
    NSLog(@"CustomMessage sending failed with error: %@",[error errorDescription]);
    
}];
```
</TabItem>
<TabItem value="Group(Swift)" label="Group(Swift)">

```swift
let receiverid = "cometchat-uid-2"

let customData : [String : Any] = ["customKey" : "customData"]

let customMessage = CustomMessage(receiverUid: receiverid, receiverType: .group, customData : customData, type: "Custom Type");

CometChat.sendCustomMessage(message: customMessage, onSuccess: { (message) in

  print("CustomMessage sent successfully. " + message.stringValue())

}) { (error) in

  print("CustomMessage sending failed with error: " + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Group(Objective C)" label="Group(Objective C)">

```objectivec
NSString *receiverID = @"cometchat-uid-1";

NSMutableDictionary<NSString *, id> *customData = [NSMutableDictionary new];
[customData setObject:@"customData" forKey:@"customKey"];

CustomMessage *customMessage = [CustomMessage alloc]initWithReceiverUid:receiverID receiverType:ReceiverTypeGroup customData: customData type:@"Custom Type"];

[CometChat sendCustomMessageWithMessage:customMessage onSuccess:^(CustomMessage * message) {
    
    NSLog(@"CustomMessage sent successfully. %@",[message stringValue]);
  
} onError:^(CometChatException * error) {
    
    NSLog(@"CustomMessage sending failed with error: %@",[error errorDescription]);
    
}];
```
</TabItem>
</Tabs>


The above sample explains how custom messages can be used to share the location with a user. The same can be achieved for groups.

In success, you will receive an object of the `CustomMessage` class.