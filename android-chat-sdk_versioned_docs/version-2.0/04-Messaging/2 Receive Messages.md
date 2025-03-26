---
sidebar_position: 2
title: Receive a Message
slug: /receive-messages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Receiving messages with CometChat has two parts:

1. Adding a listener to receive [Real-time Messages](./receive-messages#real-time-messages) when your app is running
2. Calling a method to retrieve [Missed Messages](./receive-messages#missed-messages) when your app was not running

## Real-time Messages

_In other words, as a recipient, how do I receive messages when my app is running?_

For every activity or fragment you wish to receive messages in, you need to register the `MessageListener` using the `addMessageListener()` method.

We suggest adding the listener in the `onResume()` method of the activity or the fragment where you wish to receive these events in.


<Tabs>
<TabItem value="Java" label="Java">

```java
private String listenerID = "UNIQUE_LISTENER_ID";

CometChat.addMessageListener(listenerID, new CometChat.MessageListener() {
  @Override
  public void onTextMessageReceived(TextMessage textMessage) {
    Log.d(TAG, "Text message received successfully: " + textMessage.toString());
  }
  @Override
  public void onMediaMessageReceived(MediaMessage mediaMessage) {
    Log.d(TAG, "Media message received successfully: " + mediaMessage.toString());
  }
@Override
  public void onCustomMessageReceived(CustomMessage customMessage) {
  Log.d(TAG, "Custom message received successfully: " +customMessage.toString());
}
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val listenerID:String = "UNIQUE_LISTENER_ID"

CometChat.addMessageListener(listenerID,object :CometChat.MessageListener(){

    override fun onTextMessageReceived(message: TextMessage?) {
        Log.d(TAG, "Text message received successfully: " + message?.toString())
    }

    override fun onMediaMessageReceived(message: MediaMessage?) {
        Log.d(TAG, "Media message received successfully: " + message?.toString())
    }
  
  override fun onCustomMessageReceived(message: CustomMessage?) {
    Log.d(TAG, "Custom message received successfully: " + message?.toString())
  }

})
```
</TabItem>
</Tabs>





| Parameter | Description | 
| ---- | ---- | 
| `listenerID` | An ID that uniquely identifies that listener. We recommend using the activity or fragment name | 


We recommend you remove the listener once the activity or fragment is not in use. Typically, this can be added in the `onPause()` method.


<Tabs>
<TabItem value="Java" label="Java">

```java
private String listenerID = "UNIQUE_LISTENER_ID";

CometChat.removeMessageListener(listenerID);
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val listenerID:String = "UNIQUE_LISTENER_ID"

CometChat.removeMessageListener(listenerID)
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
<TabItem value="Java" label="Java">

```java
private int limit = 30;
private int latestId = CometChat.getLastDeliveredMessageId();
private String UID = "cometchat-uid-1";

MessagesRequest messagesRequest=MessagesRequest.MessagesRequestBuilder()
									.setMessageId(latestId)
  								.setLimit(limit)
  								.setUID(UID)
  								.build()

messagesRequest.fetchNext(new CometChat.CallbackListener<List<BaseMessage>>() {
  @Override
  public void onSuccess(List <BaseMessage> list) {
    for (BaseMessage message: list) {
      if (message instanceof TextMessage) {
        Log.d(TAG, "Text message received successfully: " +
          ((TextMessage) message).toString());
      } else if (message instanceof MediaMessage) {
        Log.d(TAG, "Media message received successfully: " +
          ((MediaMessage) message).toString());
      }
    }
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
var messagesRequest:MessagesRequest?=null
val latestId=CometChat.getLastDeliveredMessageId()
val limit:Int=30
val UID:String = "cometchat-uid-1";

messagesRequest=MessagesRequest.MessagesRequestBuilder()
									.setMessageId(latestId)
  								.setLimit(limit)
  								.setUID(UID)
  								.build()
                  
messagesRequest?.fetchNext(object:CometChat.CallbackListener<List<BaseMessage>>(){
       override fun onSuccess(p0: List<BaseMessage>?) {
         if (!p0.isNullOrEmpty()) {
            for (baseMessage in p0) {
              if (baseMessage is TextMessage) {
                 Log.d(TAG, "TextMessage: $baseMessage")
               }
              if (baseMessage is MediaMessage) {
                Log.d(TAG, "MediaMessage: $baseMessage")
               }
             }
           }
	}
      override fun onError(p0: CometChatException?) {
      	Log.d(TAG, "Message fetching failed with exception: " + p0?.message)
      }
})
```
</TabItem>
</Tabs>



### For a Particular Group Conversation

<Tabs>
<TabItem value="Java" label="Java">

```java
private int limit = 30;
private int latestId = CometChat.getLastDeliveredMessageId();
private String GUID = "cometchat-guid-1";

MessagesRequest messagesRequest=MessagesRequest.MessagesRequestBuilder()
									.setMessageId(latestId)
  								.setLimit(limit)
  								.setGUID(GUID)
  								.build()

messagesRequest.fetchNext(new CometChat.CallbackListener<List<BaseMessage>>() {
  @Override
  public void onSuccess(List <BaseMessage> list) {
    for (BaseMessage message: list) {
      if (message instanceof TextMessage) {
        Log.d(TAG, "Text message received successfully: " +
          ((TextMessage) message).toString());
      } else if (message instanceof MediaMessage) {
        Log.d(TAG, "Media message received successfully: " +
          ((MediaMessage) message).toString());
      }
    }
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
var messagesRequest:MessagesRequest?=null
val latestId=CometChat.getLastDeliveredMessageId()
val limit:Int=30
val GUID:String = "cometchat-uid-1";
   
messagesRequest=MessagesRequest.MessagesRequestBuilder()
									.setMessageId(latestId)
  								.setLimit(limit)
  								.setGUID(GUID)
  								.build()
                  
messagesRequest?.fetchNext(object:CometChat.CallbackListener<List<BaseMessage>>(){
       override fun onSuccess(p0: List<BaseMessage>?) {
         if (!p0.isNullOrEmpty()) {
            for (baseMessage in p0) {
              if (baseMessage is TextMessage) {
                 Log.d(TAG, "TextMessage: $baseMessage")
               }
              if (baseMessage is MediaMessage) {
                Log.d(TAG, "MediaMessage: $baseMessage")
               }
             }
           }
	}
      override fun onError(p0: CometChatException?) {
      	Log.d(TAG, "Message fetching failed with exception: " + p0?.message)
      }
})
```
</TabItem>
</Tabs>


## Unread Messages

_In other words, as a logged-in user, how do I fetch the messages I've not read?_

Using the `MessagesRequest` class described above, you can fetch the unread messages for the logged-in user. In order to achieve this, you need to set the `unread` variable in the builder to `true` using the `setUnread()` method so that only the unread messages are fetched.

### For a Particular One-on-one Conversation

<Tabs>
<TabItem value="Java" label="Java">

```java
String UID = "cometchat-uid-1";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setUnread(true)
  .setLimit(20)
  .setUID(UID)
  .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
  @Override
  public void onSuccess(List <BaseMessage> list) {
    for (BaseMessage message: list) {
      if (message instanceof TextMessage) {
        Log.d(TAG, "Text message received successfully: " +
          ((TextMessage) message).toString());
      } else if (message instanceof MediaMessage) {
        Log.d(TAG, "Media message received successfully: " +
          ((MediaMessage) message).toString());
      }
    }
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val UID:String = "cometchat-uid-1"

val messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setUnread(true)
  .setLimit(20)
  .setUID(UID)
  .build();

messagesRequest.fetchPrevious(object : CometChat.CallbackListener<List<BaseMessage>>() {
        override fun onSuccess(list: List<BaseMessage>) {
            for (message in list) {
                if (message is TextMessage) {
                     Log.d(TAG, "Text message received successfully: $message")
                 } else if (message is MediaMessage) {
                     Log.d(TAG, "Media message received successfully: $message")
                 }
              }
           }

        override fun onError(e: CometChatException) {
            Log.d(TAG, "Message fetching failed with exception: " + e.message)
          }
      })
```
</TabItem>
</Tabs>



### For a Particular Group Conversation

<Tabs>
<TabItem value="Java" label="Java">

```java
String GUID = "cometchat-guid-1";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setUnread(true)
  .setLimit(20)
  .setGUID(GUID)
  .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
  @Override
  public void onSuccess(List <BaseMessage> list) {
    for (BaseMessage message: list) {
      if (message instanceof TextMessage) {
        Log.d(TAG, "Text message received successfully: " +
          ((TextMessage) message).toString());
      } else if (message instanceof MediaMessage) {
        Log.d(TAG, "Media message received successfully: " +
          ((MediaMessage) message).toString());
      }
    }
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val GUID:String = "cometchat-guid-1"

val messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setUnread(true)
  .setLimit(20)
  .setGUID(GUID)
  .build();

messagesRequest.fetchPrevious(object : CometChat.CallbackListener<List<BaseMessage>>() {
        override fun onSuccess(list: List<BaseMessage>) {
            for (message in list) {
                if (message is TextMessage) {
                     Log.d(TAG, "Text message received successfully: $message")
                 } else if (message is MediaMessage) {
                     Log.d(TAG, "Media message received successfully: $message")
                 }
              }
           }

        override fun onError(e: CometChatException) {
            Log.d(TAG, "Message fetching failed with exception: " + e.message)
          }
      })
```
</TabItem>
</Tabs>

 
:::info BaseMessage
The list of messages received is in the form of objects of `BaseMessage` class. A `BaseMessage` can either be an object of the `TextMessage`, `MediaMessage`, `CustomMessage`, `Action` or `Call` class. You can use the `instanceOf` operator to check the type of object.
:::



## Message History

_In other words, as a logged-in user, how do I fetch the message history for a user or a group conversation?_

### For a Particular One-on-one Conversation

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation between the logged in user and any particular user. For this use case, it is mandatory to set the UID parameter using the `setUID()` method of the builder. This UID is the unique id of the user for which the conversation needs to be fetched.

<Tabs>
<TabItem value="Java" label="Java">

```java
private int limit = 50;
private String UID = "cometchat-uid-1"

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setLimit(20)
  .setUID(UID)
  .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
  @Override
  public void onSuccess(List <BaseMessage> list) {
    for (BaseMessage message: list) {
      if (message instanceof TextMessage) {
        Log.d(TAG, "Text message received successfully: " +
          ((TextMessage) message).toString());
      } else if (message instanceof MediaMessage) {
        Log.d(TAG, "Media message received successfully: " +
          ((MediaMessage) message).toString());
      }
    }
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
var messagesRequest:MessagesRequest?=null
val limit:Int=30
val UID:String = "cometchat-uid-1"

messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setLimit(20)
  .setUID(UID)
  .build();
       messagesRequest?.fetchPrevious(object:CometChat.CallbackListener<List<BaseMessage>>(){
       override fun onSuccess(p0: List<BaseMessage>?) {
       if (!p0.isNullOrEmpty()) {
          for (baseMessage in p0) {
            if (baseMessage is TextMessage) {
               Log.d(TAG, "TextMessage: $baseMessage")
             }
            if (baseMessage is MediaMessage) {
              Log.d(TAG, "MediaMessage: $baseMessage")
             }
           }
         }
         
}
      override fun onError(p0: CometChatException?) {
      Log.d(TAG, "Message fetching failed with exception: " + p0?.message)
      
      }
})
```
</TabItem>
</Tabs>



Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch all the previous messages in a paginated way.

### For a Particular Group Conversation

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation for any group provided you have joined the group. For this use case, it is mandatory to set the GUID parameter using the `setGUID()` method of the builder. This GUID is the unique identifier of the Group for which the messages are to be fetched.

<Tabs>
<TabItem value="Java" label="Java">

```java
private int limit = 30;
private String GUID = "cometchat-guid-1"

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setLimit(20)
  .setGUID(GUID)
  .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
  @Override
  public void onSuccess(List <BaseMessage> list) {
    for (BaseMessage message: list) {
      if (message instanceof TextMessage) {
        Log.d(TAG, "Text message received successfully: " +
          ((TextMessage) message).toString());
      } else if (message instanceof MediaMessage) {
        Log.d(TAG, "Media message received successfully: " +
          ((MediaMessage) message).toString());
      }
    }
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
var messagesRequest:MessagesRequest?=null
val limit:Int=30
val GUID:String = "cometchat-guid-1"

messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setLimit(20)
  .setGUID(GUID)
  .build();

messagesRequest?.fetchPrevious(object:CometChat.CallbackListener<List<BaseMessage>>(){
       override fun onSuccess(p0: List<BaseMessage>?) {
       if (p0 is TextMessage){
         Log.d(TAG, "Text message received successfully: " + p0.toString())
         
         }
         if (p0 is MediaMessage){
         Log.d(TAG, "Media message received successfully: " + p0.toString())
         }
         
}
      override fun onError(p0: CometChatException?) {
      Log.d(TAG, "Message fetching failed with exception: " + p0?.message)
      
      }
})
```
</TabItem>
</Tabs>



Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch the entire conversation between the logged in user and the specified user. This can be implemented with upward scrolling to display the entire conversation.


## Search Messages

Along with the other parameters mentioned above, you can use the `setSearchKeyword()` method provided by the `MessagesRequestBuilder` class. This method takes a string as input. This is the string that is to be searched amongst the messages. This can be used to fetch all the messages that contain the string in a paginated way. Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch all the messages with the keyword specified in all your conversations.

### For a Particular One-on-one Conversation


<Tabs>
<TabItem value="Java" label="Java">

```java
private int limit = 30;
private String UID = "cometchat-uid-1";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setSearchKeyword("Hello")
  .setUID(UID)
  .setLimit(limit)
  .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
  @Override
  public void onSuccess(List <BaseMessage> list) {
    for (BaseMessage message: list) {
      if (message instanceof TextMessage) {
        Log.d(TAG, "Text message received successfully: " +
          ((TextMessage) message).toString());
      } else if (message instanceof MediaMessage) {
        Log.d(TAG, "Media message received successfully: " +
          ((MediaMessage) message).toString());
      }
    }
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
</Tabs>


### For a Particular Group Conversation

<Tabs>
<TabItem value="Java" label="Java">

```java
private int limit = 30;
private String GUID = "cometchat-guid-1";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
  .setSearchKeyword("Hello")
  .setGUID(GUID)
  .setLimit(limit)
  .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
  @Override
  public void onSuccess(List <BaseMessage> list) {
    for (BaseMessage message: list) {
      if (message instanceof TextMessage) {
        Log.d(TAG, "Text message received successfully: " +
          ((TextMessage) message).toString());
      } else if (message instanceof MediaMessage) {
        Log.d(TAG, "Media message received successfully: " +
          ((MediaMessage) message).toString());
      }
    }
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
  }
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
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForUser(String UID, Callbacks);
```
</TabItem>
</Tabs>



If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to `true`:

<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForUser(String UID, boolean hideMessagesFromBlockedUsers, Callbacks);
```
</TabItem>
</Tabs>


<Tabs>
<TabItem value="Java" label="Java">

```java
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
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val UID:String="cometchat-uid-1"
        
CometChat.getUnreadMessageCountForUser(UID, object : CometChat.CallbackListener<HashMap<String, Int>>() {
       override fun onSuccess(stringIntegerHashMap: HashMap<String, Int>) {
              Log.d(TAG,"onSuccess: ${stringIntegerHashMap.size}")
            }
       override fun onError(e: CometChatException) {
              Log.d(TAG,"onError: ${e.message}")
            }
    })
```
</TabItem>
</Tabs>




In the `onSuccess()` callback, you will receive a Hashmap which will contain the `UID` of the user as the key and the unread message count as the value.

### For a Particular Group Conversation

_In other words, how do I find out the number of unread messages I have in a single group?_

In order to get the unread message count for a particular group, you can use the `getUnreadMessageCountForGroup()`.

This method has two variants:

<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForGroup(String GUID, Callbacks);
```
</TabItem>
</Tabs>

If you wish to ignore the messages from blocked users you can use the following syntax setting the boolean parameter to `true`:


<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForGroup(String GUID, boolean hideMessagesFromBlockedUsers, Callbacks);
```
</TabItem>
</Tabs>

<Tabs>
<TabItem value="Java" label="Java">

```java
private String GUID = "cometchat-guid-1"
  
CometChat.getUnreadMessageCountForGroup(GUID, new CometChat.CallbackListener<HashMap<String, Integer>>() {
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
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val GUID:String="cometchat-guid-1"

 CometChat.getUnreadMessageCountForGroup(GUID, object : CometChat.CallbackListener<HashMap<String, Int>>() {
        override fun onSuccess(stringIntegerHashMap: HashMap<String, Int>) {
             Log.d(TAG,"onSuccess: ${stringIntegerHashMap.size}")
        }

        override fun onError(e: CometChatException) {
             Log.d(TAG,"onError: ${e.message}")
        }
     })
```
</TabItem>
</Tabs>


In the `onSuccess()` callback, you will receive a Hashmap which will contain the `GUID` of the group as the key and the unread message count as the value.

### For All One-on-one & Group Conversations

_In other words, how do I find out the number of unread messages for every one-on-one and group conversation?_

In order to get all the unread message counts, you can use the `getUnreadMessageCount()` method.
This method has two variants:


<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCount(Callbacks);
```
</TabItem>
</Tabs>


If you wish to ignore the messages from blocked users you can use the following syntax setting the boolean parameter to `true`:


<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCount(boolean hideMessagesFromBlockedUsers, Callbacks);
```
</TabItem>
</Tabs>


<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCount(new CometChat.CallbackListener<HashMap<String, HashMap<String, Integer>>>() {
  @Override
    public void onSuccess(HashMap<String, HashMap<String, Integer>> stringHashMapHashMap) {
    	// handle success
  }

  @Override
    public void onError(CometChatException e) {
    	// handle error
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
CometChat.getUnreadMessageCount(object : CometChat.CallbackListener<HashMap<String, HashMap<String,Int>>>() {
          override fun onSuccess(p0: HashMap<String, HashMap<String, Int>>?) {
                Log.d(TAG,"onSuccess: ${p0?.size}")
            }

           override fun onError(e: CometChatException) {
                Log.d(TAG,"onError: ${e.message}")
            }
        })
```
</TabItem>
</Tabs>


In the `onSuccess()` callback, you will receive a hashmap having two keys:

1. `user` - The value for this key holds another hashmap that holds the `UIDs` of users and their corresponding unread message counts.
2. `group` - The value for this key holds another hashmap that holds the `GUIDs` of groups and their corresponding unread message counts.

### For Unread Count for all One-on-one Conversations

_In other words, how do I find out the number of unread messages I have for every user?_

In order to fetch the unread message counts for just the users, you can use the `getUnreadMessageCountForAllUsers()` method.

This method, just like others, has two variants:

<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForAllUsers(Callbacks);
```
</TabItem>
</Tabs>


If you wish to ignore the messages from blocked users you can use the following syntax setting the boolean parameter to `true`:

<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForAllUsers(boolean hideMessagesFromBlockedUsers, Callbacks);
```
</TabItem>
</Tabs>



<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForAllUsers(new CometChat.CallbackListener<HashMap<String, Integer>>() {
  @Override
    public void onSuccess(HashMap<String, Integer> stringIntegerHashMap) {
    	// Handle Success
  }

  @Override
    public void onError(CometChatException e) {
    	// Handle Error
  }

});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
CometChat.getUnreadMessageCountForAllUsers(object : CometChat.CallbackListener<HashMap<String, Int>>() {
      override fun onSuccess(stringIntegerHashMap: HashMap<String, Int>) {
            Log.d(TAG,"onSuccess: ${stringIntegerHashMap.size}")
       }
      override fun onError(e: CometChatException) {
            Log.d(TAG,"onError: ${e.message}")
       }

  })
```
</TabItem>
</Tabs>


In the `onSuccess()` callback, you will receive a Hashmap that will contain the `UIDs` of users as the key and the unread message counts as the values.


### Fetch Unread Count for all Group Conversations

_In other words, how do I find out the number of unread messages for every group?_

In order to fetch the unread message counts for all groups, you can use the `getUnreadMessageCountForAllGroups()` method.

This method has two variants:

<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForAllGroups(Callbacks);
```
</TabItem>
</Tabs>


If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to `true`:

<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForAllGroups(boolean hideMessagesFromBlockedUsers, Callbacks);
```
</TabItem>
</Tabs>


<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getUnreadMessageCountForAllGroups(new CometChat.CallbackListener<HashMap<String, Integer>>() {
  @Override
    public void onSuccess(HashMap<String, Integer> stringIntegerHashMap) {
    	// Handle success
  }
  

  @Override
    public void onError(CometChatException e) {
    // Handle Error
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
CometChat.getUnreadMessageCountForAllGroups(object : CometChat.CallbackListener<HashMap<String, Int>>() {
        override fun onSuccess(stringIntegerHashMap: HashMap<String, Int>) {
             Log.d(TAG,"onSuccess: ${stringIntegerHashMap.size}")
        }

        override fun onError(e: CometChatException) {
             Log.d(TAG,"onError: ${e.message}")
        }
})
```
</TabItem>
</Tabs>



In the `onSuccess()` callback, you will receive a hashmap which will contain the `GUIDs` of the groups as the key and the unread message counts as the values.