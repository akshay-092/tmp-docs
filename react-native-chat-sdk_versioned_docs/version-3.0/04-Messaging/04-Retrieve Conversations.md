---
sidebar_position: 4
title: Retrieve Conversations
slug: /messaging-retrieve-conversations
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
<TabItem value="1" label="Javascript">

```Javascript
let limit = 30;
let conversationRequest = new CometChat.ConversationsRequestBuilder()
														.setLimit(limit)
														.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let limit: number = 30,
    conversationRequest: CometChat.ConversationsRequest = new CometChat.ConversationsRequestBuilder()
        .setLimit(limit)
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
<TabItem value="1" label="Javascript">

```Javascript
let limit = 30;
let conversationType = "group";
let conversationRequest = new CometChat.ConversationsRequestBuilder()
														.setLimit(limit)
														.setConversationType(conversationType)
														.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let limit: number = 30,
    conversationType: string = "group",
    conversationRequest: CometChat.ConversationsRequest = new CometChat.ConversationsRequestBuilder()
        .setLimit(limit)
        .setConversationType(conversationType)
        .build();
```

</TabItem>
</Tabs>



### With User and Group Tags

This method can be used to fetch the user/group tags in the `Conversation` Object. By default the value is false.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let limit = 30;
let conversationRequest = new CometChat.ConversationsRequestBuilder()
														.setLimit(limit)
														.withUserAndGroupTags(true)
														.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let limit: number = 30,
    conversationRequest: CometChat.ConversationsRequest = new CometChat.ConversationsRequestBuilder()
        .setLimit(limit)
        .withUserAndGroupTags(true)
        .build();
```

</TabItem>
</Tabs>



### Set User Tags

This method fetches user conversations which has the specified tags.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let limit = 30;
let userTags = ["tag1"];
let conversationRequest = new CometChat.ConversationsRequestBuilder()
														.setLimit(limit)
														.setUserTags(userTags)
														.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let limit: number = 30,
    userTags: Array<String> = ["tag1"],
    conversationRequest: CometChat.ConversationsRequest = new CometChat.ConversationsRequestBuilder()
        .setLimit(limit)
        .setUserTags(userTags)
        .build();
```

</TabItem>
</Tabs>


### Set Group Tags

This method fetches group conversations which has the specified tags.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let limit = 30;
let groupTags = ["tag1"];
let conversationRequest = new CometChat.ConversationsRequestBuilder()
														.setLimit(limit)
														.setGroupTags(groupTags)
														.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let limit: number = 30,
    groupTags: Array<String> = ["tag1"],
    conversationRequest: CometChat.ConversationsRequest = new CometChat.ConversationsRequestBuilder()
        .setLimit(limit)
        .setGroupTags(groupTags)
        .build();
```

</TabItem>
</Tabs>



### With Tags

This method makes sure that the tags associated the conversations are returned along with the other details of the conversations. The default value for this parameter is `false`

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let limit = 30;
let conversationRequest = new CometChat.ConversationsRequestBuilder()
														.setLimit(limit)
														.withTags(true)
														.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let limit: number = 30,
    conversationRequest: CometChat.ConversationsRequest = new CometChat.ConversationsRequestBuilder()
        .setLimit(limit)
        .withTags(true)
        .build();
```

</TabItem>
</Tabs>



### Set Tags

This method helps you fetch the conversations based on the specified tags.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let limit = 30;
let tags = ["archivedChat"];
let conversationRequest = new CometChat.ConversationsRequestBuilder()
														.setLimit(limit)
														.setTags(tags)
														.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let limit: number = 30,
    tags: Array<String> = ["archivedChat"],
    conversationRequest: CometChat.ConversationsRequest = new CometChat.ConversationsRequestBuilder()
        .setLimit(limit)
        .setTags(tags)
        .build();
```

</TabItem>
</Tabs>



Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `ConversationsRequest` class.

Once you have the object of the `ConversationsRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `Conversation` objects containing X number of users depending on the limit set.

A Maximum of only 50 Conversations can be fetched at once.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let limit = 30;
let conversationsRequest = new CometChat.ConversationsRequestBuilder()
														.setLimit(limit)
														.build();

conversationsRequest.fetchNext().then(
  conversationList => {
    console.log("Conversations list received:", conversationList);
  }, error => {
    console.log("Conversations list fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let limit: number = 30,
    conversationsRequest: CometChat.ConversationsRequest = new CometChat.ConversationsRequestBuilder()
        .setLimit(limit)
        .build();

conversationsRequest.fetchNext().then(
    (conversationList: CometChat.Conversation[]) => {
        console.log("Conversations list received:", conversationList);
    }, (error: CometChat.CometChatException) => {
        console.log("Conversations list fetching failed with error:", error);
    }
);
```

</TabItem>
</Tabs>



The `Conversation` Object consists of the below fields:

| Field | Information | 
| ---- | ---- | 
| conversationId | ID of the conversation. | 
| conversationType | Type of conversation. (user/group) | 
| lastMessage | Last message the conversation. | 
| conversationWith | User or Group object containing the details of the user or group. | 
| unreadMessageCount | Unread message count for the conversation. | 


## Tag Conversation

_In other words, as a logged-in user, how do I tag a conversation?_

In order to tag a specific conversation, you can use the `tagConversation()` method. The `tagConversation()` method accepts three parameters.

1. `conversationWith`: UID/GUID of the user/group whose conversation you want to fetch.
2. `conversationType`: The `conversationType` variable can hold one of the below two values:
    1. user - Only fetches user conversation.
    2. group - Only fetches group conversations.

3. `tags`: The `tags` variable will be a list of tags you want to add to a conversation.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let tags = ["archivedChat"];
CometChat.tagConversation('conversationWith', 'conversationType', tags).then(
    conversation => {
        console.log('conversation', conversation);
    }, error => {
        console.log('error while fetching a conversation', error);
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
<TabItem value="1" label="Javascript">

```Javascript
CometChat.getConversation('conversationWith', 'conversationType').then(
    conversation => {
        console.log('conversation', conversation);
    }, error => {
        console.log('error while fetching a conversation', error);
    }
);
```

</TabItem>
</Tabs>



## Convert Messages to Conversations

As per our [receive messages](./messaging-receive-messages) guide, for real-time messages, you will always receive `Message` objects and not `Conversation` objects. Thus, you will need a mechanism to convert the Message object to `Conversation` object. You can use the `getConversationFromMessage(BaseMessage message)` of the `CometChatHelper` class.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
CometChat.CometChatHelper.getConversationFromMessage(message).then(
  conversation => {
    console.log("Conversation Object", conversation);
  }, error => {
    console.log("Error while converting message object", error);
  }
);
```

</TabItem>
</Tabs>



:::info Note

While converting `Message` object to `Conversation` object, the `unreadMessageCount` & `tags` will not be available in the `Conversation` object. The unread message count needs to be managed in your client-side code.

:::