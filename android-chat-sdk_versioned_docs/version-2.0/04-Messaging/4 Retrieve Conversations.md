---
sidebar_position: 4
title: Retrieve Conversations
slug: /retrieve-conversations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Conversations provide the last messages for every one-on-one and group conversation the logged-in user is a part of. This makes it easy for you to build a **Recent Chats** list.

## Retrieve List of Conversations

_In other words, as a logged-in user, how do I retrieve the latest conversations that I've been a part of?_

In order to fetch the list of conversations, you can use the `ConversationsRequest` class. To use this class i.e to create an object of the `ConversationsRequest` class, you need to use the `ConversationsRequestBuilder` class. The `ConversationsRequestBuilder` class allows you to set the parameters based on which the conversations are to be fetched.

The `ConversationsRequestBuilder` class allows you to set the below parameters:

### Set Limit

 This method sets the limit i.e. the number of conversations that should be fetched in a single iteration.


<Tabs>
<TabItem value="Java(Set Limit)" label="Java(Set Limit)">

```java
ConversationsRequest conversationRequest = ConversationsRequest.ConversationsRequestBuilder()
.set(limit: 50)
.build();
```
</TabItem>
</Tabs>


### Set Conversation Type

This method can be used to fetch user or group conversations specifically. The `conversationType` variable can hold one of the below two values:

- user - Only fetches user conversation.
- group - Only fetches group conversations.

If none is set, the list of conversations will include both user and group conversations.

<Tabs>
<TabItem value="Java" label="Java">

```java
ConversationsRequest conversationsRequest = new ConversationsRequest.ConversationsRequestBuilder()
.setLimit(50)
.setConversationType(CometChatConstants.CONVERSATION_TYPE_USER)
.build();
```
</TabItem>
</Tabs>


Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `ConversationsRequest` class.

Once you have the object of the `ConversationsRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `Conversation` objects containing X number of conversations depending on the limit set.

A Maximum of only 50 Conversations can be fetched at once.


<Tabs>
<TabItem value="Java" label="Java">

```java
ConversationsRequest conversationsRequest = new ConversationsRequest.ConversationsRequestBuilder().setLimit(50).build();

conversationsRequest.fetchNext(new CometChat.CallbackListener<List<Conversation>>() {
  @Override
    public void onSuccess(List<Conversation> conversations) {
    // Hanlde list of conversations
                       
  }

  @Override
    public void onError(CometChatException e) {
    // Hanlde failure
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
var conversationRequest: ConversationsRequest? = null
val LIMIT:Int=30
  
conversationRequest = ConversationsRequest.ConversationsRequestBuilder().setLimit(LIMIT).build()
conversationRequest?.fetchNext(object : CometChat.CallbackListener<List<Conversation>>() {
            override fun onSuccess(p0: List<Conversation>?) {
                //Handle List of Conversations
            }
            override fun onError(p0: CometChatException?) {
                //Handle Failure
            }
        })
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


## Retrieve Single Conversation

_In other words, as a logged-in user, how do I retrieve a specific conversation?_

In order to fetch a specific conversation, you can use the `getConversation` method. The `getConversation` method accepts two parameters.

1. `conversationWith`: UID/GUID of the user/group whose conversation you want to fetch.
2. `conversationType`: The `conversationType` variable can hold one of the below two values:

- user - Only fetches user conversation.
- group - Only fetches group conversations.

<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.getConversation(conversationWith, conversationType, new CometChat.CallbackListener<Conversation>() {
                @Override
                public void onSuccess(Conversation conversation) {
                    
                }

                @Override
                public void onError(CometChatException e) {

                }
            });
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
CometChat.getConversation(conversationWith, conversationType, new CometChat.CallbackListener<Conversation>() {
                @Override
                public void onSuccess(Conversation conversation) {
                    
                }

                @Override
                public void onError(CometChatException e) {

                }
            });
```
</TabItem>
</Tabs>


## Convert Messages to Conversations

As per our [Receive Messages](./receive-messages) guide, for real-time messages, you will always receive `Message` objects and not `Conversation` objects. Thus, you will need a mechanism to convert the `Message` object to a `Conversation` object. You can use the `getConversationFromMessage` method for this purpose.



<Tabs>
<TabItem value="Java" label="Java">

```java
Conversation conversation = CometChatHelper.getConversationFromMessage(message);
```
</TabItem>
</Tabs>



:::danger Danger
While converting a `Message` object to `Conversation` object, the `unreadMessagecount` will not be available in the `Conversation` object. As this is for the real-time events, the unread message count needs to be managed in your client-side code.
:::

