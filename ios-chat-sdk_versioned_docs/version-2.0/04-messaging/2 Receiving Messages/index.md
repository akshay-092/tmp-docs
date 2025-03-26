---
sidebar_position: 2
title: Receive a Message
slug: /receive-a-message
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

sssss
Receiving messages with CometChat has two parts:

1. Adding a listener to receive [real-time messages](./receive-a-message#real-time-messages) when your app is running
2. Calling a method to retrieve [missed messages](./receive-a-message#missed-messages) when your app was not running

## Real-time Messages

_In other words, as a recipient, how do I receive messages when my app is running?_

In order to receive incoming messages, you must add protocol conformance `CometChatMessageDelegate` as Shown Below :


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
extension ViewController: CometChatMessageDelegate {

  func onTextMessageReceived(textMessage: TextMessage) {

    print("TextMessage received successfully: " + textMessage.stringValue())
  }

  func onMediaMessageReceived(mediaMessage: MediaMessage) {

    print("MediaMessage received successfully: " + mediaMessage.stringValue())
  }
  
  func onCustomMessageReceived(customMessage: CustomMessage) {

    print("CustomMessage received successfully: " + customMessage.stringValue())
  }
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```Objectivec
@interface ViewController ()<CometChatMessageDelegate>
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    CometChat.messagedelegate = self ;
}

- (void)onTextMessageReceivedWithTextMessage:(TextMessage *)textMessage {
 
    NSLog(@"TextMessage received successfully: %@",[textMessage stringValue]);
}

- (void)onMediaMessageReceivedWithMediaMessage:(MediaMessage *)mediaMessage {
 
    NSLog(@"MediaMessage received successfully: %@",[mediaMessage stringValue]);
}

- (void)onCustomMessageReceivedWithCustomMessage:(CustomMessage *)customMessage {
  
  	NSLog(@"CustomMessage received : %@",[customMessage stringValue]);
}

@end
```
</TabItem>
</Tabs>

Do not forget to set your view controller as a CometChat delegate probably in `viewDidLoad()` as  `CometChat.messagedelegate = self`

:::warning Warning
As a sender, you will not receive your own message in a real-time message event. However, if a user is logged-in using multiple devices, they will receive an event for their own message in other devices.
:::

## Missed Messages

_In other words, as a recipient, how do I receive messages that I missed when my app was not running?_

For most Use Cases, you will need to add functionality to load missed messages. If you're building an on-demand or live streaming app, you may choose to skip this and fetch message history instead.

Using the same `MessagesRequest` class and the filters provided by the `MessagesRequestBuilder` class, you can fetch the message that we sent to the logged-in user but were not delivered to him as he was offline. For this, you will require the Id of the last message received. You can either maintain it at your end or use the `getLastDeliveredMessageId()` method provided by the CometChat class. This Id needs to be passed to the `setMessageId()` method of the builder class.

Now using the `fetchNext()` method, you can fetch all the messages that were sent to the user when he/she was offline.

Below code, snippet demonstrates how this can be achieved.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 50;
let latestId = CometChat.getLastDeliveredMessageId()

let messagesRequest = MessagesRequest.MessageRequestBuilder().set(messageID: latestId).set(limit: limit).build();

messagesRequest.fetchNext(onSuccess: { (messages) in

 for message in messages!{

    if let receivedMessage = (message as? TextMessage) {
      print("Message received successfully. " + receivedMessage.stringValue())
    }
    else if let receivedMessage = (message as? MediaMessage) {
      print("Message received successfully. " + receivedMessage.stringValue())
  	}
  }

}) { (error) in

  print("Message receiving failed with error: " + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```Objectivec
NSInteger limit = 50;
NSString *latestMessageId = [CometChat getLatestDeliveredMessageId];

MessagesRequest *messageRequest = [[[[[MessageRequestBuilder alloc]init] setWithMessageID: latestMessageId] setWithLimit:limit] build];

[messageRequest fetchNextOnSuccess:^(NSArray<BaseMessage *> * messages) {

  for (BaseMessage *message in messages) {

      if ([message isKindOfClass:TextMessage.self]) {

          TextMessage *receivedMessage = (TextMessage *)message;
          NSLog(@"TextMessage received successfully. %@",[receivedMessage stringValue]);
      }
      else if ([messages isKindOfClass:MediaMessage.self]) {

          MediaMessage *receivedMessage = (MediaMessage *)message;
          NSLog(@"MediaMessage received successfully. %@",[receivedMessage stringValue]);
      }
  }

} onError:^(CometChatException * error) {

	NSLog(@"Message receiving failed with error: %@",[error ErrorDescription]);

}];
```
</TabItem>
</Tabs>

Using additional filters you can also fetch the offline messages for a particular User or a Group conversation too.

Calling the `fetchNext()` method on the same object repeatedly allows you to fetch all the offline messages for the logged-in user.

## Unread Messages

_In other words, as a logged-in user, how do I fetch the messages I've not read?_

### For All Users & Groups

Using the `MessagesRequest` class described above, you can fetch the unread messages for the logged-in user. In order to achieve this, you need to set the `unread` variable in the builder to true using the `setUnread()` method so that only the unread messages are fetched.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 50;
let uid = "UID"
let messagesRequest = MessagesRequest.MessageRequestBuilder().set(unread: true).set(limit: limit).build();

messagesRequest.fetchPrevious(onSuccess: { (messages) in

  for message in messages!{

    if let receivedMessage = (message as? TextMessage) {
      print("Message received successfully. " + receivedMessage.stringValue())
    }
    else if let receivedMessage = (message as? MediaMessage) {
      print("Message received successfully. " + receivedMessage.stringValue())
  	}
  }

}) { (error) in

  print("Message receiving failed with error: " + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```Objectivec
NSInteger limit = 50;
NSString *uid = "UID";

MessagesRequest *messageRequest = [[[[[MessageRequestBuilder alloc] init] setWithUnread:YES] setWithLimit:limit] build];

[messageRequest fetchPreviousOnSuccess:^(NSArray<BaseMessage *> * messages) {

  for (BaseMessage *message in messages) {

      if ([message isKindOfClass:TextMessage.self]) {

          TextMessage *receivedMessage = (TextMessage *)message;
          NSLog(@"TextMessage received successfully. %@",[receivedMessage stringValue]);
      }
      else if ([messages isKindOfClass:MediaMessage.self]) {

          MediaMessage *receivedMessage = (MediaMessage *)message;
          NSLog(@"MediaMessage received successfully. %@",[receivedMessage stringValue]);
      }
  }

} onError:^(CometChatException * error) {

	NSLog(@"Message receiving failed with error: %@",[error ErrorDescription]);

}];
```
</TabItem>
</Tabs>


The above snippet will help you fetch the last 20 unread messages for the logged-in user. You can also fetch the unread messages for a particular user or a group by setting the UID and GUID using the `setUID()` and `setGUID()` methods respectively.


:::info BaseMessage
The list of messages received is in the form of objects of `BaseMessage` class. A BaseMessage can either be a `TextMessage` or a `MediaMessage`. You can use the `instanceOf` operator to check the type of object.
:::

## Message History

_In other words, as a logged-in user, how do I fetch the complete message history?_

### For All Users & Groups

Using the same `MessagesRequest` class discussed above, you can fetch all the messages for a logged-in user which involves his messages for all the User and Group conversations. Applying the filters using the `MessagesRequestBuilder` class, you can fetch messages either before or after a particular messageId or timestamp.

The below code snippet shows how to fetch the latest 50 messages for the logged-in user which includes messages to and from the logged-in user as a part of any User or Group conversations.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 50;

let messagesRequest = MessagesRequest.MessageRequestBuilder().set(limit: limit).build();

messagesRequest.fetchPrevious(onSuccess: { (messages) in

  for message in messages!{

    if let receivedMessage = (message as ? TextMessage) {
      print("Message received successfully. " + receivedMessage.stringValue())
    }
    else if let receivedMessage = (message as ? MediaMessage) {
      print("Message received successfully. " + receivedMessage!.stringValue())
  }
}

}) { (error) in

  print("Message receiving failed with error: " + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```Objectivec
NSInteger limit = 50;

MessagesRequest *messageRequest = [[[[MessageRequestBuilder alloc]init] setWithLimit:limit] build];

[messageRequest fetchPreviousOnSuccess:^(NSArray<BaseMessage *> * messages) {

  for (BaseMessage *message in messages) {

      if ([message isKindOfClass:TextMessage.self]) {

          TextMessage *receivedMessage = (TextMessage *)message;
          NSLog(@"TextMessage received successfully. %@",[receivedMessage stringValue]);
      }
      else if ([messages isKindOfClass:MediaMessage.self]) {

          MediaMessage *receivedMessage = (MediaMessage *)message;
          NSLog(@"MediaMessage received successfully. %@",[receivedMessage stringValue]);
      }
  }

} onError:^(CometChatException * error) {

	NSLog(@"Message receiving failed with error: %@",[error ErrorDescription]);

}];
```
</TabItem>
</Tabs>


Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch all the previous messages in a paginated way.

### For searching messages

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can search the message for any particular user. For this use case, it is mandatory to set the UID parameter using the `set(UID:)` method of the builder and the searchKeyword. This UID is the unique id of the user for which the conversation needs to be fetched and searchKeyword contains the string of the message to be searched.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 50;
let uid = "UID"
let messagesRequest = MessagesRequest.MessageRequestBuilder().set(UID: uid).set(limit: limit).set(searchKeyword: "String To be searched").build();

messagesRequest.fetchPrevious(onSuccess: { (messages) in

  for message in messages!{

    if let receivedMessage = (message as ? TextMessage) {
      print("Message received successfully. " + receivedMessage.stringValue())
    }
    else if let receivedMessage = (message as ? MediaMessage) {
      print("Message received successfully. " + receivedMessage!.stringValue())
  	}
  }

}) { (error) in

  print("Message receiving failed with error: " + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```Objectivec
NSInteger limit = 50;
NSString *uid = "UID";

MessagesRequest *messageRequest = [[[[[[MessageRequestBuilder alloc] init] setWithUID: uid] setWithLimit:limit] setWithSearchKeyword: "String To be Searched"] build];

[messageRequest fetchPreviousOnSuccess:^(NSArray<BaseMessage *> * messages) {

  for (BaseMessage *message in messages) {

      if ([message isKindOfClass:TextMessage.self]) {

          TextMessage *receivedMessage = (TextMessage *)message;
          NSLog(@"TextMessage received successfully. %@",[receivedMessage stringValue]);
      }
      else if ([messages isKindOfClass:MediaMessage.self]) {

          MediaMessage *receivedMessage = (MediaMessage *)message;
          NSLog(@"MediaMessage received successfully. %@",[receivedMessage stringValue]);
      }
  }

} onError:^(CometChatException * error) {

	NSLog(@"Message receiving failed with error: %@",[error ErrorDescription]);

}];
```
</TabItem>
</Tabs>



### For a Single User

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation between the logged in user and any particular user. For this use case, it is mandatory to set the UID parameter using the `set(UID:)` method of the builder. This UID is the unique id of the user for which the conversation needs to be fetched.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 50;
let uid = "UID"
let messagesRequest = MessagesRequest.MessageRequestBuilder().set(UID: uid).set(limit: limit).build();

messagesRequest.fetchPrevious(onSuccess: { (messages) in

  for message in messages!{

    if let receivedMessage = (message as ? TextMessage) {
      print("Message received successfully. " + receivedMessage.stringValue())
    }
    else if let receivedMessage = (message as ? MediaMessage) {
      print("Message received successfully. " + receivedMessage!.stringValue())
  	}
  }

}) { (error) in

  print("Message receiving failed with error: " + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```Objectivec
NSInteger limit = 50;
NSString *uid = "UID";

MessagesRequest *messageRequest = [[[[[MessageRequestBuilder alloc] init] setWithUID: uid] setWithLimit:limit] build];

[messageRequest fetchPreviousOnSuccess:^(NSArray<BaseMessage *> * messages) {

  for (BaseMessage *message in messages) {

      if ([message isKindOfClass:TextMessage.self]) {

          TextMessage *receivedMessage = (TextMessage *)message;
          NSLog(@"TextMessage received successfully. %@",[receivedMessage stringValue]);
      }
      else if ([messages isKindOfClass:MediaMessage.self]) {

          MediaMessage *receivedMessage = (MediaMessage *)message;
          NSLog(@"MediaMessage received successfully. %@",[receivedMessage stringValue]);
      }
  }

} onError:^(CometChatException * error) {

	NSLog(@"Message receiving failed with error: %@",[error ErrorDescription]);

}];
```
</TabItem>
</Tabs>

Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch the entire conversation between the logged in user and the specified user. This can be implemented with upward scrolling to display the entire conversation.

### For a Single Group

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation for any group provided you have joined the group. For this use case, it is mandatory to set the GUID parameter using the `set(GUID:)` method of the builder. This GUID is the unique identifier of the Group for which the messages are to be fetched.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 50;
let guid = "GUID"
let messagesRequest = MessagesRequest.MessageRequestBuilder().set(GUID: guid).set(limit: limit).build();

messagesRequest.fetchPrevious(onSuccess: { (messages) in

  for message in messages!{

    if let receivedMessage = (message as ? TextMessage) {
      print("Message received successfully. " + receivedMessage.stringValue())
    }
    else if let receivedMessage = (message as ? MediaMessage) {
      print("Message received successfully. " + receivedMessage!.stringValue())
  	}
  }

}) { (error) in

  print("Message receiving failed with error: " + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```Objectivec
NSInteger limit = 50;
NSString *guid = "GUID";

MessagesRequest *messageRequest = [[[[[MessageRequestBuilder alloc] init] setWithGUID: guid] setWithLimit:limit] build];

[messageRequest fetchPreviousOnSuccess:^(NSArray<BaseMessage *> * messages) {

  for (BaseMessage *message in messages) {

      if ([message isKindOfClass:TextMessage.self]) {

          TextMessage *receivedMessage = (TextMessage *)message;
          NSLog(@"Text Message received successfully. %@",[receivedMessage stringValue]);
      }
      if ([messages isKindOfClass:MediaMessage.self]) {

          MediaMessage *receivedMessage = (MediaMessage *)message;
          NSLog(@"Media Message received successfully. %@",[receivedMessage stringValue]);
      }
  }

} onError:^(CometChatException * error) {

	NSLog(@"Message receiving failed with error: %@",[error ErrorDescription]);

}];
```
</TabItem>
</Tabs>


Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch the entire conversation for the group. This can be implemented with upward scrolling to display the entire conversation.

## Unread Messages Count

_In other words, as a logged-in user, how do I find out the number of unread messages that I have?_

### For a Particular User

In order to get the unread message count for a particular user, you can use the `getUnreadMessageCountForUser()`. 

This method has the below two variants:

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForUser(UID, callbacks)
```
</TabItem>
</Tabs>


If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForUser(UID, hideMessagesFromBlockedUsers:true, callbacks)
```
</TabItem>
</Tabs>

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let UID = "cometchat-uid-1"
  
CometChat.getUnreadMessageCountForUser(UID, onSuccess: { (response) in
                
    print("Unread count for users: \(response)")
                
}) { (error) in
                
    print("Error in unread count for users: \(error)")
}
```
</TabItem>
</Tabs>


In the `onSuccess()` callback, you will receive a dictionary that will contain the UID of the user as the key and the unread message count as the value.

### For a Particular Group

In order to get the unread message count for a particular group, you can use the `getUnreadMessageCountForGroup()`. 
This method has the below two variants:

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForGroup(GUID, callbacks)
```
</TabItem>
</Tabs>

If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForGroup(GUID, hideMessagesFromBlockedUsers:true, callbacks)
```
</TabItem>
</Tabs>
<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let GUID = "cometchat-guid-1"
  
CometChat.getUnreadMessageCountForGroup(GUID, onSuccess: { (response) in
                
    print("Unread count for groups: \(response)")
                
}) { (error) in
                
    print("Error in unread count for group: \(error.errorDescription)")
}
```
</TabItem>
</Tabs>



In the `onSuccess()` callback, you will receive a dictionary that will contain the GUID of the group as the key and the unread message count as the value.

### For All Users & Groups

In order to get all the unread message count combined i.e unread message counts for all the users and groups, you can use the `getUnreadMessageCount()` method. 
This method has two variants:

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCount(callbacks)
```
</TabItem>
</Tabs>

If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCount(hideMessagesFromBlockedUsers:true, callbacks)
```
</TabItem>
</Tabs>

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCount(onSuccess: { (response) in
            
    print("Unread message count: \(response)")
            
}) { (error) in
            
    print("Error in fetching unread count: \(error)")
}
```
</TabItem>
</Tabs>


In the `onSuccess()` callback, you will receive a dictionary having two keys:

1. user - The value for this key holds another dictionary that holds the UIDs of the users and their corresponding unread message counts
2. group - The value for this key holds another dictionary that holds the GUIDs of the groups and their corresponding unread message counts

### For All Users

In order to fetch the unread message counts for just the users, you can use the `getUnreadMessageCountForAllUsers()` method. 

This method just like others has two variants:


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForAllUsers(callbacks)
```
</TabItem>
</Tabs>

If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForAllUsers(hideMessagesFromBlockedUsers:true, callbacks)
```
</TabItem>
</Tabs>

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForAllUsers(onSuccess: { response in
            
    print("Unread count for all users: \(response)")
            
}) { (error) in
            
    print("Error in fetching unread count for all users: \(error?.errorDescription)")
}
```
</TabItem>
</Tabs>


In the `onSuccess()` callback, you will receive a dictionary that will contain the UIDs of the users as the key and the unread message counts as the values.

### For All Groups

In order to fetch the unread message counts for just the groups, you can use the `getUnreadMessageCountForAllGroups()` method. 
This method just like others has two variants:

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForAllGroups(callbacks)
```
</TabItem>
</Tabs>

If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to true:


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForAllGroups(hideMessagesFromBlockedUsers:true, callbacks)
```
</TabItem>
</Tabs>
<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.getUnreadMessageCountForAllGroups(onSuccess: { response in
            
    print("Unread count for all groups: \(response)")
            
}) { (error) in
            
    print("Error in fetching unread count for all groups: \(error.errorDescription)")
}
```
</TabItem>
</Tabs>


In the `onSuccess()` callback, you will receive a dictionary that will contain the GUIDs of the groups as the key and the unread message counts as the values.