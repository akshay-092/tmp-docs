---
sidebar_position: 1
title: Receive Messages
slug: /messaging-receive-messages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Receiving messages with CometChat has two parts:

1. Adding a listener to receive [Real-time Messages](./messaging-receive-messages#real-time-messages) when your app is running
2. Calling a method to retrieve [Missed Messages](./messaging-receive-messages#missed-messages) when your app was not running

## Real-time Messages

_In other words, as a recipient, how do I receive messages when my app is running?_

For every activity or fragment you wish to receive messages in, you need to register the `MessageListener` using the `addMessageListener()` method.

We suggest adding the listener in the `init` method of the Stateful class or at the initialization of class where you wish to receive these events in.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
class Class_Name  with MessageListener {

  //CometChat.addMessageListener("listenerId", this);
	@override
  void onTextMessageReceived(TextMessage textMessage) {
    debugPrint("Text message received successfully: $textMessage");
  }
  
  @override
  void onMediaMessageReceived(MediaMessage mediaMessage) {
  	debugPrint("Media message received successfully: $mediaMessage"); 
  }
  
  @override
  void onCustomMessageReceived(CustomMessage customMessage) {
    debugPrint("Custom message received successfully: $customMessage");  
  }
  

}
```

</TabItem>
</Tabs>



| Parameter | Description | 
| ---- | ---- | 
| listenerID | An ID that uniquely identifies that listener. We recommend using the activity or fragment name | 


We recommend you remove the listener once the activity or fragment is not in use. Typically, this can be added in the `dispose()` method.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
private String listenerID = "UNIQUE_LISTENER_ID";

CometChat.removeMessageListener(listenerID);
```

</TabItem>
</Tabs>


:::warning Warning

As a sender, you will not receive your own message in a real-time message event. However, if a user is logged-in using multiple devices, they will receive an event for their own message in other devices.

:::


## Missed Messages

_In other words, as a recipient, how do I receive messages that I missed when my app was not running?_

For most use cases, you will need to add functionality to load missed messages. If you're building an on-demand or live streaming app, you may choose to skip this and fetch the message history (say, last 100 messages) instead.

Using the same `MessagesRequest` class and the filters provided by the `MessagesRequestBuilder` class, you can fetch the message that we sent to the logged-in user but were not delivered to them as they were offline. For this, you will require the ID of the last message received. You can either maintain it at your end or use the `getLastDeliveredMessageId()` method provided by the CometChat class. This ID needs to be passed to the `setMessageId()` method of the builder class.

Now using the `fetchNext()` method, you can fetch all the messages that were sent to the user when they were offline.

Calling the `fetchNext()` method on the same object repeatedly allows you to fetch all the offline messages for the logged in user in a paginated manner

### For a Particular One-on-one Conversation

<Tabs>
<TabItem value="1" label="Dart">

```Dart
int limit = 30;
int lastMessageId = -1;
String UID = "cometchat-uid-1";

MessagesRequest messageRequest = (MessagesRequestBuilder()
        ..uid = UID
        ..limit = limit
        ..messageId = lastMessageId
      ).build();

messageRequest.fetchNext(onSuccess: (List<BaseMessage> list) {
            for (BaseMessage message in list) {
              if(message is TextMessage){
                debugPrint("Text message received successfully: "+(message as TextMessage).toString());
              }else if(message is MediaMessage){
                debugPrint("Media message received successfully: "+(message as MediaMessage).toString());
              }
            }
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
```

</TabItem>
</Tabs>



### For a Particular Group Conversation

<Tabs>
<TabItem value="1" label="Dart">

```Dart
int limit = 30;
int lastMessageId = -1;
String GUID = "cometchat-uid-1";

MessagesRequest messageRequest = (MessagesRequestBuilder()
        ..guid = GUID
        ..limit = limit
        ..messageId = lastMessageId
      ).build();

messageRequest.fetchNext(onSuccess: (List<BaseMessage> list) {
            for (BaseMessage message in list) {
              if(message is TextMessage){
                debugPrint("Text message received successfully: "+(message as TextMessage).toString());
              }else if(message is MediaMessage){
                debugPrint("Media message received successfully: "+(message as MediaMessage).toString());
              }
            }
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
```

</TabItem>
</Tabs>


## Unread Messages

_In other words, as a logged-in user, how do I fetch the messages I've not read?_

Using the `MessagesRequest` class described above, you can fetch the unread messages for the logged-in user. In order to achieve this, you need to set the `unread` variable in the builder to `true`  so that only the unread messages are fetched.

### For a Particular One-on-one Conversation

<Tabs>
<TabItem value="1" label="Dart">

```Dart
int limit = 30;
int lastMessageId = -1;
String GUID = "cometchat-uid-1";

MessagesRequest messageRequest = (MessagesRequestBuilder()
        ..guid = GUID
        ..limit = limit
        ..messageId = lastMessageId
				..unread = true
      ).build();

messageRequest.fetchPrevious(onSuccess: (List<BaseMessage> list) {
            for (BaseMessage message in list) {
              if(message is TextMessage){
                debugPrint("Text message received successfully: "+(message as TextMessage).toString());
              }else if(message is MediaMessage){
                debugPrint("Media message received successfully: "+(message as MediaMessage).toString());
              }
            }
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
```

</TabItem>
</Tabs>



### For a Particular Group Conversation

<Tabs>
<TabItem value="1" label="Dart">

```Dart
int limit = 30;
int lastMessageId = -1;
String GUID = "cometchat-uid-1";

MessagesRequest messageRequest = (MessagesRequestBuilder()
        ..guid = GUID
        ..limit = limit
        ..messageId = lastMessageId
        ..unread = true
      ).build();

messageRequest.fetchPrevious(onSuccess: (List<BaseMessage> list) {
            for (BaseMessage message in list) {
              if(message is TextMessage){
                debugPrint("Text message received successfully: "+(message as TextMessage).toString());
              }else if(message is MediaMessage){
                debugPrint("Media message received successfully: "+(message as MediaMessage).toString());
              }
            }
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
```

</TabItem>
</Tabs>



:::info BaseMessage

The list of messages received is in the form of objects of `BaseMessage` class. A `BaseMessage` can either be an object of the `TextMessage`, `MediaMessage`, `CustomMessage`, `Action` or `Call` class. You can use the `is` operator to check the type of object.

:::

## Message History

_In other words, as a logged-in user, how do I fetch the message history for a user or a group conversation?_

### For a Particular One-on-one Conversation

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation between the logged in user and any particular user. For this use case, it is mandatory to set the UID parameter  of the builder. This UID is the unique id of the user for which the conversation needs to be fetched.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
int limit = 30;
int lastMessageId = -1;
String UID = "cometchat-uid-1";

MessagesRequest messageRequest = (MessagesRequestBuilder()
        ..uid = UID
        ..limit = limit
      ).build();

messageRequest.fetchPrevious(onSuccess: (List<BaseMessage> list) {
            for (BaseMessage message in list) {
              if(message is TextMessage){
                debugPrint("Text message received successfully: "+(message as TextMessage).toString());
              }else if(message is MediaMessage){
                debugPrint("Media message received successfully: "+(message as MediaMessage).toString());
              }
            }
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
```

</TabItem>
</Tabs>



Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch all the previous messages in a paginated way.

### For a Particular Group Conversation

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation for any group provided you have joined the group. For this use case, it is mandatory to set the GUID parameter  of the builder. This GUID is the unique identifier of the Group for which the messages are to be fetched.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
int limit = 30;
String GUID = "cometchat-uid-1";

MessagesRequest messageRequest = (MessagesRequestBuilder()
        ..guid = GUID
        ..limit = limit
      ).build();

messageRequest.fetchPrevious(onSuccess: (List<BaseMessage> list) {
            for (BaseMessage message in list) {
              if(message is TextMessage){
                debugPrint("Text message received successfully: "+(message as TextMessage).toString());
              }else if(message is MediaMessage){
                debugPrint("Media message received successfully: "+(message as MediaMessage).toString());
              }
            }
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
```

</TabItem>
</Tabs>



Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch the entire conversation between the logged in user and the specified user. This can be implemented with upward scrolling to display the entire conversation.

## Search Messages

Along with the other parameters mentioned above, you can use the `searchKeyword`parameter provided by the `MessagesRequestBuilder` class. This method takes a string as input. This is the string that is to be searched amongst the messages. This can be used to fetch all the messages that contain the string in a paginated way. Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch all the messages with the keyword specified in all your conversations.

### For a Particular One-on-one Conversation

<Tabs>
<TabItem value="1" label="Dart">

```Dart
int limit = 30;
int searchKeyword = "search keyboard";
String UID = "cometchat-uid-1";

MessagesRequest  messageRequest = (MessagesRequestBuilder()
        ..uid = UID
        ..limit = limit
        .searchKeyword=searchKeyword
      ).build();

messageRequest.fetchPrevious(onSuccess: (List<BaseMessage> list) {
            for (BaseMessage message in list) {
              if(message is TextMessage){
                debugPrint("Text message received successfully: "+(message as TextMessage).toString());
              }else if(message is MediaMessage){
                debugPrint("Media message received successfully: "+(message as MediaMessage).toString());
              }
            }
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
```

</TabItem>
</Tabs>



### For a Particular Group Conversation

<Tabs>
<TabItem value="1" label="Dart">

```Dart
int limit = 30;
int searchKeyword = "search keyboard";
String GUID = "cometchat-guid-1";

MessagesRequest  messageRequest = (MessagesRequestBuilder()
        ..guid = GUID
        ..limit = limit
        .searchKeyword=searchKeyword
      ).build();

messageRequest.fetchPrevious(onSuccess: (List<BaseMessage> list) {
            for (BaseMessage message in list) {
              if(message is TextMessage){
                debugPrint("Text message received successfully: "+(message as TextMessage).toString());
              }else if(message is MediaMessage){
                debugPrint("Media message received successfully: "+(message as MediaMessage).toString());
              }
            }
        }, onError: (CometChatException e) {
          debugPrint("Message fetching failed with exception: ${e.message}");
        });
```

</TabItem>
</Tabs>



## Unread Messages Count

_In other words, as a logged-in user, how do I find out the number of unread messages that I have?_

### For a Particular One-on-one Conversation

_In other words, how do I find out the number of unread messages I have from a particular user?_

In order to get the unread message count for a particular user (with respect to the logged-in user), you can use the `getUnreadMessageCountForUser()`.

This method has the two variants:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
CometChat.getUnreadMessageCountForUser(String UID, Callbacks);
```

</TabItem>
</Tabs>



If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to `true`:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
CometChat.getUnreadMessageCountForUser(String UID, boolean hideMessagesFromBlockedUsers, Callbacks);
```

</TabItem>
</Tabs>



<Tabs>
<TabItem value="1" label="Dart">

```Dart
private String UID = "cometchat-uid-1"
  
CometChat.getUnreadMessageCountForUser(UID, new CometChat.CallbackListener<HashMap<String, Integer>>() {
  @Override
    public void onSuccess(HashMap<String, Integer> stringIntegerHashMap) {
    	// handle success
  }

  @Override
    public void onError(CometChatException e) {
    	// handle error
  }
});
```

</TabItem>
</Tabs>



In the `onSuccess()` callback, you will receive a `Map` which will contain the `UID` of the user as the key and the unread message count as the value.

### For a Particular Group Conversation

_In other words, how do I find out the number of unread messages I have in a single group?_

In order to get the unread message count for a particular group, you can use the `getUnreadMessageCountForGroup()`.

This method has two variants:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
Map? ab = await CometChat.getUnreadMessageCountForGroup(guid: guid);
```

</TabItem>
</Tabs>



If you wish to ignore the messages from blocked users you can use the following syntax setting the boolean parameter to `true`:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
Map? ab = await CometChat.getUnreadMessageCountForGroup(guid: guid,hideMessagesFromBlockedUsers: hideBlockedUser);
```

</TabItem>
</Tabs>



<Tabs>
<TabItem value="1" label="Dart">

```Dart
private String GUID = "cometchat-guid-1"
  
CometChat.getUnreadMessageCountForGroup(guid: GUID,hideMessagesFromBlockedUsers: hideBlockedUser,
                                        onSuccess: (Map<String, int> map) {
                                        
                                        },
          															onError: (CometChatException e) {
                                        
                                        });
```

</TabItem>
</Tabs>



In the `onSuccess()` callback, you will receive a `Map` which will contain the `GUID` of the group as the key and the unread message count as the value.

### For All One-on-one & Group Conversations

_In other words, how do I find out the number of unread messages for every one-on-one and group conversation?_

In order to get all the unread message counts, you can use the `getUnreadMessageCount()` method. This method has two variants:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
await CometChat.getUnreadMessageCount();
```

</TabItem>
</Tabs>



If you wish to ignore the messages from blocked users you can use the following syntax setting the boolean parameter to `true`:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
await CometChat.getUnreadMessageCount(hideMessagesFromBlockedUsers: true);
```

</TabItem>
</Tabs>



<Tabs>
<TabItem value="1" label="Dart">

```Dart
CometChat.getUnreadMessageCount(hideMessagesFromBlockedUsers: hideBlockedUser,
        onSuccess: (Map<String, Map<String, int>> map) {
         
        },onError: (CometChatException e) {
         
        });
```

</TabItem>
</Tabs>



In the `onSuccess()` callback, you will receive a `Map` having two keys:

1. `user` - The value for this key holds another `Map` that holds the `UIDs` of users and their corresponding unread message counts.
2. `group` - The value for this key holds another `Map` that holds the `GUIDs` of groups and their corresponding unread message counts.

### For Unread Count for all One-on-one Conversations

_In other words, how do I find out the number of unread messages I have for every user?_

In order to fetch the unread message counts for just the users, you can use the `getUnreadMessageCountForAllUsers()` method.

This method, just like others, has two variants:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
await CometChat.getUnreadMessageCountForAllUsers();
```

</TabItem>
</Tabs>



If you wish to ignore the messages from blocked users you can use the following syntax setting the boolean parameter to `true`:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
await CometChat.getUnreadMessageCountForAllUsers(hideMessagesFromBlockedUsers: true);
```

</TabItem>
</Tabs>



<Tabs>
<TabItem value="1" label="Dart">

```Dart
CometChat.getUnreadMessageCountForAllUsers(hideMessagesFromBlockedUsers: hideMessagesFromBlockedUsers,
        onSuccess: (Map<String, int> map) {
         
        },
        onError: (CometChatException e) {
         
        });
```

</TabItem>
</Tabs>




In the `onSuccess()` callback, you will receive a `Map` that will contain the `UIDs` of users as the key and the unread message counts as the values.

### Fetch Unread Count for all Group Conversations

_In other words, how do I find out the number of unread messages for every group?_

In order to fetch the unread message counts for all groups, you can use the `getUnreadMessageCountForAllGroups()` method.

This method has two variants:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
await CometChat.getUnreadMessageCountForAllGroups();
```

</TabItem>
</Tabs>




If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to `true`:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
await CometChat.getUnreadMessageCountForAllGroups(hideMessagesFromBlockedUsers: true);
```

</TabItem>
</Tabs>



<Tabs>
<TabItem value="1" label="Dart">

```Dart
CometChat.getUnreadMessageCountForAllGroups(hideMessagesFromBlockedUsers: hideMessagesFromBlockedUsers,
        onSuccess: (Map<String, int> map) {
         
        },
        onError: (CometChatException e) {
          
        });
```

</TabItem>
</Tabs>



In the `onSuccess()` callback, you will receive a `Map` which will contain the `GUIDs` of the groups as the key and the unread message counts as the values.