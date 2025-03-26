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

In order to fetch the list of conversations, you can use the `ConversationsRequest` class. To use this class i.e to create an object of the `ConversationsRequest` class, you need to use the `ConversationsRequestBuilder` class. The `ConversationsRequestBuilder` class allows you to set the parameters based on which the conversations are to be fetched.

The `ConversationsRequestBuilder` class allows you to set the below parameters:

1. `setLimit(int limit)` - This method sets the limit i.e. the number of conversations that should be fetched in a single iteration.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder()
.set(limit: 30)
.build();
```
</TabItem>
</Tabs>


:::info
A Maximum of only 50 Conversations can be fetched at once. If you want to fetch more conversation, you can use the fetchNext() on the same conversationsRequest Object
:::

2. `setConversationType(String conversationType)` - This method can be used to fetch user or group conversations specifically. <br />
The `conversationType` variable can hold one of the below two values:<br />
a. CometChat.conversationType.user(user) - Only fetches user conversation. <br />
b. CometChat.conversationType.group(group)- Only fetches group conversations <br />
If none is set, the list of conversations will include both user and group conversations.


<Tabs>
<TabItem value="Swift(User)" label="Swift(User)">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder()
.setLimit(50)
.setConversationType(conversationType: .user)
.build();
```
</TabItem>
<TabItem value="Swift(Group)" label="Swift(Group)">

```swift
var conversationRequest = ConversationRequest.ConversationRequestBuilder()
.setLimit(50)
.setConversationType(conversationType: .group)
.build();
```
</TabItem>
</Tabs>


Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `ConversationsRequest` class.

Once you have the object of the `ConversationsRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `Conversation` objects containing X number of users depending on the limit set.

<Tabs>
<TabItem value="Swift(User)" label="Swift(User)">

```swift
let convRequest = ConversationRequest.ConversationRequestBuilder(limit: 20).setConversationType(conversationType: .user).build()

convRequest.fetchNext(onSuccess: { (conversationList) in
            
  print("success of convRequest \(conversationList)")            
}) { (exception) in
            
  print("here exception \(String(describing: exception?.errorDescription))")
}
```
</TabItem>
<TabItem value="Swift(Group)" label="Swift(Group)">

```swift
let convRequest = ConversationRequest.ConversationRequestBuilder(limit: 20).setConversationType(conversationType: .group).build()

convRequest.fetchNext(onSuccess: { (conversationList) in
            
  print("success of convRequest \(conversationList)")            
}) { (exception) in
            
  print("here exception \(String(describing: exception?.errorDescription))")
}
```
</TabItem>
</Tabs>


The `Conversation`object consists of the below fields:

| Field | Information | 
| ---- | ---- | 
| conversationId | id of the conversation | 
| conversationType | type of conversation (user/group) | 
| lastMessage | last message the conversation. | 
| conversationWith | User or Group object containing the details of the user or group. | 
| unreadMessageCount | unread message count for the conversation. | 


## Retrieve Single Conversation

_In other words, as a logged-in user, how do I retrieve a specific conversation?_

In order to fetch a specific conversation, you can use the `getConversation` method. The `getConversation` method accepts two parameters.

1. `conversationWith`: UID/GUID of the user/group whose conversation you want to fetch.
2. `conversationType`: The `conversationType` variable can hold one of the below two values:

- user - Only fetches user conversation.
- group - Only fetches group conversations.


<Tabs>
<TabItem value="Swift(User)" label="Swift(User)">

```swift
CometChat.getConversation(conversationWith: "conversationWith", conversationType: .user, onSuccess: { (conversation) in
	print("success \(String(describing: conversation?.stringValue()))")
}) { (error) in
  print("error \(String(describing: error?.errorDescription))")
}
```
</TabItem>
<TabItem value="Swift(Group)" label="Swift(Group)">

```swift
CometChat.getConversation(conversationWith: "conversationWith", conversationType: .group, onSuccess: { (conversation) in
	print("success \(String(describing: conversation?.stringValue()))")
}) { (error) in
  print("error \(String(describing: error?.errorDescription))")
}
```
</TabItem>
</Tabs>


## Get Conversation From Message

For real-time events, you will always receive Message objects and not conversation objects. Thus, you will need a mechanism to convert the Message object to `Conversation` object. You can use the `getConversationFromMessage(BaseMessage message)` of the `CometChatHelper` class.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let myConversation = CometChat.getConversationFromMessage(message)
```
</TabItem>
</Tabs>


:::danger Danger
While converting a `Message` object to `Conversation` object, the `unreadMessagecount` will not be available in the `Conversation` object. As this is for the real-time events, the unread message count needs to be managed in your client-side code.
:::