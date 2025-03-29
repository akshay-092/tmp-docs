---
sidebar_position: 4
title: Retrieve Conversations
slug: /retrieve-conversations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

CometChat Allows you to fetch the list of conversations the logged-in user is a part of. This list of conversations consists of both user and group conversations.

## Retrieve List of Conversations

_In other words, as a logged-in user, how do I retrieve the latest conversations that I've been a part of?_

To fetch the list of conversations, you can use the `ConversationsRequest` class. To use this class i.e. to create an object of the `ConversationsRequest` class, you need to use the `ConversationsRequestBuilder` class. The `ConversationsRequestBuilder` class allows you to set the parameters based on which the conversations are to be fetched.

The `ConversationsRequestBuilder` class allows you to set the below parameters:

### Set Limit

This method sets the limit i.e. the number of conversations that should be fetched in a single iteration.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .build()
```

</TabItem>
</Tabs>

:::info
A Maximum of only 50 Conversations can be fetched at once. If you want to fetch more conversation, you can use the fetchNext() on the same conversationsRequest Object
:::

### Set Conversation Type

This method can be used to fetch user or group conversations specifically. The `conversationType` variable can hold one of the below two values:
a. CometChat.conversationType.user(user) - Only fetches user conversation.
b. CometChat.conversationType.group(group)- Only fetches group conversations.

If none is set, the list of conversations will include both user and group conversations.

<Tabs>
<TabItem value="Swift(User)" label="Swift(User)">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .setConversationType(conversationType: .group)
  .build();
```

</TabItem>
<TabItem value="Swift(Group)" label="Swift(Group)">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .setConversationType(conversationType: .group)
  .build();
```

</TabItem>
</Tabs>

### With User and Group Tags

This method can be used to fetch the user/group tags in the `Conversation` Object. By default the value is false.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .withUserAndGroupTags(true)
  .build();
```

</TabItem>
</Tabs>

### Set User Tags

This method fetches user conversations that have the specified tags.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let userTags = ["tag1"]
let conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .setUserTags(userTags)
  .build();
```

</TabItem>
</Tabs>

### Set Group Tags

This method fetches group conversations that have the specified tags.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let userTags = ["tag1"]
let conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .setGroupTags(userTags)
  .build();
```

</TabItem>
</Tabs>

### With Tags

This method makes sure that the tags associated with the conversations are returned along with the other details of the conversations. The default value for this parameter is `false`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .withTags(true)
  .build();
```

</TabItem>
</Tabs>

### Set Tags

This method helps you fetch the conversations based on the specified tags.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let tags = ["pinned","archived"]
var conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .setTags(tags)
  .build();
```

</TabItem>
</Tabs>

### Include Blocked Users

This method helps you fetch the conversations of users whom the logged-in user has blocked.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .include(blockedUsers: true)
  .build();
```

</TabItem>
</Tabs>

### With Blocked Info

This method can be used to fetch the blocked information of the blocked user in the ConversationWith object.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder(limit: 30)
  .with(blockedInfo: true)
  .build();
```

</TabItem>
</Tabs>

Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `ConversationsRequest` class.

Once you have the object of the `ConversationsRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `Conversation` objects containing X number of users depending on the limit set.

<Tabs>
<TabItem value="Swift(User)" label="Swift(User)">

```swift
let convRequest = ConversationRequest.ConversationRequestBuilder(limit: 20)
  .setConversationType(conversationType: .user)
  .build()

convRequest.fetchNext(onSuccess: { (conversationList) in
  print("success of convRequest \(conversationList)")
}) { (exception) in
  print("here exception \(String(describing: exception?.errorDescription))")
}
```

</TabItem>
<TabItem value="Swift(Group)" label="Swift(Group)">

```swift
let convRequest = ConversationRequest.ConversationRequestBuilder(limit: 20)
  .setConversationType(conversationType: .group)
  .build()

convRequest.fetchNext(onSuccess: { (conversationList) in
  print("success of convRequest \(conversationList)")
}) { (exception) in
  print("here exception \(String(describing: exception?.errorDescription))")
}
```

</TabItem>
</Tabs>

The `Conversation` object consists of the below fields:

| Field               | Information                                     |
| ------------------- | ----------------------------------------------- |
| conversationId      | id of the conversation                          |
| conversationType    | type of conversation (user/group)               |
| lastMessage         | last message in the conversation                |
| conversationWith    | User or Group object containing the details     |
| unreadMessageCount  | unread message count for the conversation       |
| unreadMentionsCount | count of unread mentions in the conversation    |
| lastReadMessageId   | ID of the last read message in the conversation |

## Tag Conversation

_In other words, as a logged-in user, how do I tag a conversation?_

To tag a specific conversation, you can use the `tagConversation()` method. The `tagConversation()` method accepts three parameters.

1. `conversationWith`: UID/GUID of the user/group whose conversation you want to fetch.
2. `conversationType`: The `conversationType` variable can hold one of the below two values:
   1. user - Only fetches user conversation.
   2. group - Only fetches group conversations.
3. `tags`: The `tags` variable will be a list of tags you want to add to a conversation.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let id = "cometchat-uid-1"; //id of the user/group
let tags = ["pinned"];

CometChat.tagConversation(conversationWith: id, conversationType: .user, tags: tags,
  onSuccess: { conversation in
    print("conversation", conversation)
  },
  onError: { error in
    print("error", error)
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

To fetch a specific conversation, you can use the `getConversation` method. The `getConversation` method accepts two parameters.

1. `conversationWith`: UID/GUID of the user/group whose conversation you want to fetch.
2. `conversationType`: The `conversationType` variable can hold one of the below two values:

- user - Only fetches user conversation.
- group - Only fetches group conversations.

<Tabs>
<TabItem value="Swift(User)" label="Swift(User)">

```swift
CometChat.getConversation(conversationWith: "conversationWith", conversationType: .user) { conversation in
  print("success \(String(describing: conversation?.stringValue()))")
} onError: { error in
  print("error \(String(describing: error?.errorDescription))")
}
```

</TabItem>
<TabItem value="Swift(Group)" label="Swift(Group)">

```swift
CometChat.getConversation(
  conversationWith: "conversationWith", conversationType: .group,
  onSuccess: { (conversation) in
    print("success \(String(describing: conversation?.stringValue()))")
  }
) { (error) in
  print("error \(String(describing: error?.errorDescription))")
}
```

</TabItem>
</Tabs>

## Get Conversation From Message

For real-time events, you will always receive Message objects and not conversation objects. Thus, you will need a mechanism to convert the Message object to the `Conversation` object. You can use the `getConversationFromMessage(BaseMessage message)` of the `CometChatHelper` class.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let myConversation = CometChat.getConversationFromMessage(message)
```

</TabItem>
</Tabs>

:::info
While converting a `Message` object to a `Conversation` object, the `unreadMessageCount` will not be available in the `Conversation` object. As this is for real-time events, the unread message count needs to be managed in your client-side code.
:::
