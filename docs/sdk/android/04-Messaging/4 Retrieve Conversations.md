---
sidebar_position: 4
title: Retrieve Conversations
slug: /retrieve-conversations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Conversations provide the last messages for every one-on-one and group conversation the logged-in user is a part of. This makes it easy for you to build a **Recent Chat** list.

## Retrieve List of Conversations

_In other words, as a logged-in user, how do I retrieve the latest conversations that I've been a part of?_

To fetch the list of conversations, you can use the `ConversationsRequest` class. To use this class i.e. to create an object of the `ConversationsRequest` class, you need to use the `ConversationsRequestBuilder` class. The `ConversationsRequestBuilder` class allows you to set the parameters based on which the conversations are to be fetched.

The `ConversationsRequestBuilder` class allows you to set the below parameters:

### Set Limit

This method sets the limit i.e. the number of conversations that should be fetched in a single iteration.

<Tabs>
<TabItem value="Java(Set Limit)" label="Java(Set Limit)">

```java
ConversationsRequest conversationRequest = new ConversationsRequest.ConversationsRequestBuilder()
  .setLimit(100)
  .build();
```

</TabItem>
<TabItem value="Kotlin(Set Limit)" label="Kotlin(Set Limit)">

```kotlin
val conversationRequest = ConversationsRequestBuilder()
  .setLimit(100)
  .build()
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
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val conversationsRequest = ConversationsRequestBuilder()
  .setLimit(50)
  .setConversationType(CometChatConstants.CONVERSATION_TYPE_USER)
  .build()
```

</TabItem>
</Tabs>

### With User and Group Tags

This method can be used to fetch the user/group tags in the `Conversation` Object. By default the value is false.

<Tabs>
<TabItem value="Java" label="Java">

```java
ConversationsRequest conversationsRequest = new ConversationsRequest.ConversationsRequestBuilder()
  .setLimit(50)
  .withUserAndGroupTags(true)
  .build();
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val conversationsRequest = ConversationsRequestBuilder()
  .setLimit(50)
  .withUserAndGroupTags(true)
  .build()
```

</TabItem>
</Tabs>

### Set User Tags

This method fetches user conversations that have the specified tags.

<Tabs>
<TabItem value="Java" label="Java">

```java
List<String> tags = new ArrayList<>();
tags.add("tag_1");
conversationsRequest = new ConversationsRequest.ConversationsRequestBuilder()
  .setLimit(10)
  .setUserTags(tags)
  .build();
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val tags: MutableList<String> = ArrayList()
tags.add("tag_1")
conversationsRequest = ConversationsRequestBuilder()
  .setLimit(10)
  .setUserTags(tags)
  .build()
```

</TabItem>
</Tabs>

### Set Group Tags

<Tabs>
<TabItem value="Java" label="Java">

```java
List<String> tags = new ArrayList<>();
tags.add("tag_1");
conversationsRequest = new ConversationsRequest.ConversationsRequestBuilder()
  .setLimit(10)
  .setGroupTags(tags)
  .build();
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val tags: MutableList<String> = ArrayList()
tags.add("tag_1")
conversationsRequest = ConversationsRequestBuilder()
  .setLimit(10)
  .setGroupTags(tags)
  .build()
```

</TabItem>
</Tabs>

This method fetches group conversations that have the specified tags.

### With Tags

This method makes sure that the tags associated with the conversations are returned along with the other details of the conversations. The default value for this parameter is `false`

<Tabs>
<TabItem value="Java" label="Java">

```java
ConversationsRequest conversationsRequest = new ConversationsRequest.ConversationsRequestBuilder()
  .setLimit(50)
  .withTags(true)
  .build();
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val conversationsRequest = ConversationsRequestBuilder()
  .setLimit(50)
  .withTags(true)
  .build()
```

</TabItem>
</Tabs>

### Set Tags

This method helps you fetch the conversations based on the specified tags.

<Tabs>
<TabItem value="Java" label="Java">

```java
List<String> tags = new ArrayList<>();
tags.add("archived");
ConversationsRequest conversationsRequest = new ConversationsRequest.ConversationsRequestBuilder()
  .setLimit(50)
  .setTags(tags)
  .build();
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val tags: MutableList<String> = ArrayList()
tags.add("archived")
val conversationsRequest = ConversationsRequestBuilder()
  .setLimit(50)
  .setTags(tags)
  .build()
```

</TabItem>
</Tabs>

### Include Blocked Users

This method helps you fetch the conversations of users whom the logged-in user has blocked.

<Tabs>
<TabItem value="Java" label="Java">

```java
ConversationsRequest conversationsRequest = new ConversationsRequest.ConversationsRequestBuilder()
  .setLimit(50)
  .includeBlockedUsers(true)
  .build();
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val conversationsRequest = ConversationsRequestBuilder()
  .setLimit(50)
  .includeBlockedUsers(true)
  .build()
```

</TabItem>
</Tabs>

### With Blocked Info

This method helps you fetch the conversations of users whom the logged-in user has blocked.

<Tabs>
<TabItem value="Java" label="Java">

```java
ConversationsRequest conversationsRequest = new ConversationsRequest.ConversationsRequestBuilder()
  .setLimit(50)
  .withBlockedInfo(true)
  .build();
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val conversationsRequest = ConversationsRequestBuilder()
  .setLimit(50)
  .withBlockedInfo(true)
  .build()
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

The `Conversation` object consists of the following fields:

| Field                | Information                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `conversationId`     | ID of the conversation                                               |
| `conversationType`   | Type of conversation (user/group)                                    |
| `lastMessage`        | Last message the conversation                                        |
| `conversationWith`   | `User` or `Group` object containing the details of the user or group |
| `unreadMessageCount` | Unread message count for the conversation                            |

## Tag Conversation

_In other words, as a logged-in user, how do I tag a conversation?_

To tag a specific conversation, you can use the `tagConversation()` method. The `tagConversation()` method accepts three parameters.

1. `conversationWith`: UID/GUID of the user/group whose conversation you want to fetch.
2. `conversationType`: The `conversationType` variable can hold one of the below two values:

   1. user - Only fetches user conversation.
   2. group - Only fetches group conversations.

3. `tags`: The `tags` variable will be a list of tags you want to add to a conversation.

<Tabs>
<TabItem value="Java" label="Java">

```java
String id = "cometchat-uid-1"; //id of the user/group
String conversationType = "user";
List<String> tags = new ArrayList<>();
tags.add("archived");

CometChat.tagConversation(id, conversationWith, tags, new CometChat.CallbackListener<Conversation>() {
  @Override
  public void onSuccess(Conversation conversation) {
    Log.d(TAG, conversation.toString());
  }

  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, e.getMessage());
  }
});
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val id = "cometchat-uid-1" //id of the user/group

val conversationType = "user"
val tags: MutableList<String> = ArrayList()
tags.add("archived")

CometChat.tagConversation(id, conversationWith, tags, object : CallbackListener<Conversation>() {
    override fun onSuccess(conversation: Conversation) {
        Log.d(TAG, conversation.toString())
    }

    override fun onError(e: CometChatException) {
        Log.d(TAG, e.message)
    }
  }
)
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
<TabItem value="Java" label="Java">

```java
CometChat.getConversation(conversationWith, conversationType, new CometChat.CallbackListener<Conversation>() {
  @Override
  public void onSuccess(Conversation conversation) {
    // Handle getConversation success
  }

  @Override
  public void onError(CometChatException e) {
    // Handle getConversation error
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

As per our [Receive Messages](receive-messages) guide, for real-time messages, you will always receive `Message` objects and not `Conversation` objects. Thus, you will need a mechanism to convert the `Message` object to a `Conversation` object. You can use the `getConversationFromMessage` method for this purpose.

<Tabs>
<TabItem value="Java" label="Java">

```java
Conversation conversation = CometChatHelper.getConversationFromMessage(message);
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val conversation = CometChatHelper.getConversationFromMessage(message)
```

</TabItem>
</Tabs>

:::info
While converting a `Message` object to a `Conversation` object, the `unreadMessageCount` & `tags` will not be available in the `Conversation` object. The unread message count needs to be managed in your client-side code.
:::
