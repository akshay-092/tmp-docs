---
sidebar_position: 4
title: Retrieve Conversations
slug: /messaging-retrieve-conversations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Retrieve List of Conversations

_In other words, as a logged-in user, how do I retrieve the latest conversations that I've been a part of?_

In order to fetch the list of conversations, you can use the `ConversationsRequest` class. To use this class i.e to create an object of the `ConversationsRequest` class, you need to use the `ConversationsRequestBuilder` class. The `ConversationsRequestBuilder` class allows you to set the parameters based on which the conversations are to be fetched.

The `ConversationsRequestBuilder` class allows you to set the below parameters:

### Set Limit

This method sets the limit i.e. the number of conversations that should be fetched in a single iteration.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
ConversationsRequest conversationRequest = (ConversationsRequestBuilder()
      ..limit = 50
    ).build();
```

</TabItem>
</Tabs>



### Set Conversation Type

This method can be used to fetch user or group conversations specifically. The `conversationType` variable can hold one of the below two values:

- user - Only fetches user conversation.
- group - Only fetches group conversations.

If none is set, the list of conversations will include both user and group conversations.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
ConversationsRequest conversationRequest = (ConversationsRequestBuilder()
      ..limit = 50
      ..conversationType =  CometChatConversationType.user                                      
    ).build();
```

</TabItem>
</Tabs>




### With User and Group Tags

This method can be used to fetch the user/group tags in the `Conversation` Object. By default the value is false.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
ConversationsRequest conversationRequest = (ConversationsRequestBuilder()
      ..limit = 50
      ..withUserAndGroupTags  = true                                      
    ).build();
```

</TabItem>
</Tabs>



### With Tags

This method makes sure that the tags associated the conversations are returned along with the other details of the conversations. The default value for this parameter is `false`

<Tabs>
<TabItem value="1" label="Dart">

```Dart
ConversationsRequest conversationRequest = (ConversationsRequestBuilder()
      ..limit = 50
      ..withTags = true                                     
    ).build();
```

</TabItem>
</Tabs>



### Set Tags

This method helps you fetch the conversations based on the specified tags.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
List<String> tags = [];
tags.add("archived");
ConversationsRequest conversationRequest = (ConversationsRequestBuilder()
      ..limit = 50
      ..tags = tags
    ).build();
```

</TabItem>
</Tabs>


Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `ConversationsRequest` class.

Once you have the object of the `ConversationsRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `Conversation` objects containing X number of conversations depending on the limit set.

A Maximum of only 50 Conversations can be fetched at once.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
ConversationsRequest conversationRequest = (ConversationsRequestBuilder()
      ..limit = 50
    ).build();

conversationRequest.fetchNext(
        onSuccess: (List<Conversation> conversations){


        }, onError: (CometChatException e){

        }
```

</TabItem>
</Tabs>



The `Conversation`object consists of the below fields:

| Field | Information | 
| ---- | ---- | 
| `conversationId` | ID of the conversation | 
| `conversationType` | Type of conversation (user/group) | 
| `lastMessage` | Last message the conversation | 
| `conversationWith` | `User` or `Group` object containing the details of the user or group | 
| `unreadMessageCount` | Unread message count for the conversation | 


## Tag Conversation

_In other words, as a logged-in user, how do I tag a conversation?_

In order to tag a specific conversation, you can use the `tagConversation()` method. The `tagConversation()` method accepts three parameters.

1. `conversationWith`: UID/GUID of the user/group whose conversation you want to fetch.
2. `conversationType`: The `conversationType` variable can hold one of the below two values:
    1. user - Only fetches user conversation.
    2. group - Only fetches group conversations.

3. `tags`: The `tags` variable will be a list of tags you want to add to a conversation.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
String conversationWith = "cometchat-uid-1"; //id of the user/group
String conversationType = "user";
List<String> tags = [];
tags.add("archived");

CometChat.tagConversation(conversationWith, conversationType, tags,
	onSuccess: (Conversation conversation) {
		debugPrint("Conversation tagged Successfully : $conversation");
	}, onError: (CometChatException e) {
		debugPrint("Conversation tagging failed  : ${e.message}");
	}
);
```

</TabItem>
</Tabs>



:::info

The tags for conversations are one-way. This means that if user A tags a conversation with user B, that tag will be applied to that conversation only for user A.

:::

## Retrieve Single Conversation

_In other words, as a logged-in user, how do I retrieve a specific conversation?_

In order to fetch a specific conversation, you can use the `getConversation` method. The `getConversation` method accepts two parameters.

1. `conversationWith`: UID/GUID of the user/group whose conversation you want to fetch.
2. `conversationType`: The `conversationType` variable can hold one of the below two values:

- user - Only fetches user conversation.
- group - Only fetches group conversations.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
String conversationWith = "cometchat-uid-1"; //id of the user/group
String conversationType = "user";
CometChat.getConversation(conversationWith, conversationType,
	onSuccess: (Conversation conversation) {
		debugPrint("Fetch Conversation Successfully : $conversation");
	}, onError: (CometChatException e) {
		debugPrint("Fetch Conversation  failed  : ${e.message}");
	}
);
```

</TabItem>
</Tabs>



## Convert Messages to Conversations

As per our [Receive Messages](./messaging-receive-messages) guide, for real-time messages, you will always receive `Message` objects and not `Conversation` objects. Thus, you will need a mechanism to convert the `Message` object to a `Conversation` object. You can use the `getConversationFromMessage` method for this purpose.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
Conversation conversation = CometChatHelper.getConversationFromMessage(message);
```

</TabItem>
</Tabs>



:::info Note

While converting `Message` object to `Conversation` object, the `unreadMessageCount` & `tags` will not be available in the `Conversation` object. The unread message count needs to be managed in your client-side code.

:::