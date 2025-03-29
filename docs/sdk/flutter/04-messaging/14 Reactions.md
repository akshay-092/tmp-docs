---
sidebar_position: 14
title: Reactions
slug: /reactions
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Enhance user engagement in your chat application with message reactions. Users can express their emotions using reactions to messages. This feature allows users to add or remove reactions, and to fetch all reactions on a message. You can also listen to reaction events in real-time. Let's see how to work with reactions in CometChat's Flutter SDK.

## Add a Reaction
Users can add a reaction to a message by calling `addReaction` with the message ID and the reaction emoji.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
int messageId = 1;

CometChat.addReaction(messageId, "😴", onSuccess: (message) {
  debugPrint("Success : ${message.getReactions().last}");
}, onError: (e) {
  debugPrint("Error: ${e.message}");
});    
  ```
</TabItem>
</Tabs>

:::info Note
You can react on Text, Media and Custom messages.
:::

## Remove a Reaction
Removing a reaction from a message can be done using the `removeReaction` method.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
int messageId = 1;

CometChat.removeReaction(messageId, "😴", onSuccess: (message) {
  debugPrint("Success : ${message.getReactions().last}");
}, onError: (e) {
  debugPrint("Error: ${e.message}");
});
  ```
</TabItem>
</Tabs>


## Fetch Reactions for a Message
To get all reactions for a specific message, first create a `ReactionRequest` using `ReactionRequestBuilder`. You can specify the number of reactions to fetch with `limit` with max limit 100. For this, you will require the ID of the message. This ID needs to be passed to the `messageId` property of the builder class. The `reaction` property will allow you to fetch details for specific reaction or emoji.


| Setting                           | Description                                                                                                      |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------|
| `setMessageId(int value)`          | Specifies the unique identifier of the message for which you want to fetch reactions. This parameter is mandatory as it tells the SDK which message's reactions are being requested. |
| `setReaction(String value)`        | Filters the reactions fetched by the specified reaction type (e.g., "😊", "😂", "👍"). When set, this method will cause the ReactionRequest to only retrieve details of the provided reaction for the given message. |


## Fetch Next
The fetchNext() method fetches the next set of reactions for the message.



<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
int messageId = 1;

ReactionRequest reactionRequest  = (ReactionRequestBuilder()..limit = 30..messageId = messageId).build();

reactionRequest.fetchNext(
  onSuccess: (messageReactions) {
    for (MessageReaction messageReaction in messageReactions) {
      debugPrint("Success: ${messageReaction.getReactions()}");
    }
  },
  onError: (e) {
    debugPrint("Error: ${e.message}");
  },
);
  ```
</TabItem>
</Tabs>

## Fetch Previous
The `fetchPrevious()` method fetches the previous set of reactions for the message.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
int messageId = 1;

ReactionRequest reactionRequest  = (ReactionRequestBuilder()..limit = 30..messageId = messageId).build();

reactionRequest.fetchPrevious(
  onSuccess: (messageReactions) {
    for (MessageReaction messageReaction in messageReactions) {
      debugPrint("Success: ${messageReaction.getReactions()}");
    }
  },
  onError: (e) {
    debugPrint("Error: ${e.message}");
  },
);
  ```
</TabItem>
</Tabs>

## Real-time Reaction Events
Keep the chat interactive with real-time updates for reactions. Register a listener for these events and make your UI responsive.


<Tabs>
<TabItem value="dart" label="dart">

  ```dart
class MyClass with MessageReactionListener {
  
  String listenerID = "UNIQUE_LISTENER_ID";

  MyClass() {
    CometChat.addMessageReactionListener(listenerID, this);
  }

  @override
  void onMessageReactionAdded(MessageReaction messageReaction) {
    debugPrint("Reaction added ${messageReaction.reaction}");
  }

  @override
  void onMessageReactionRemoved(MessageReaction messageReaction) {
    debugPrint("Reaction removed ${messageReaction.reaction}");
  }
} 
  ```
</TabItem>
</Tabs>



## Removing a Reaction Listener
To stop listening for reaction events, remove the listener as follows:

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
String listenerID = "UNIQUE_LISTENER_ID";

CometChat.removeMessageReactionListener(listenerID);
  ```
</TabItem>
</Tabs>

## Get Reactions List
To retrieve the list of reactions reacted on particular message, you can use the `reactions` property on `TextMessage`, `MediaMessage` and `CustomMessage`. This property will return a List of `ReactionCount` containing the reactions, or an empty list if no one reacted on the message.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
message.reactions
  ```
</TabItem>
</Tabs>


## Check if Logged-in User has Reacted on Message
To check if the logged-in user has reacted on a particular message or not, You can use the `reactedByMe` property on any `ReactionCount` object. This method will return a boolean value, `true` if the logged-in user has reacted on that message, otherwise `false`.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
for (ReactionCount reactionCount in message.reactions) {
    debugPrint("isReactedByMe ${reactionCount.reactedByMe}"); //Return true is logged-in user reacted on that message, otherwise false
}
  ```
</TabItem>
</Tabs>

## Updated Message With Reaction Info
When a user adds or removes a reaction, you will receive a real-time event. Once you receive the real time event you would want to update the message with the latest reaction information. To do so you can use the `updateMessageWithReactionInfo()` method.

The `updateMessageWithReactionInfo()` method provides a seamless way to update the reactions on a message instance (`BaseMessage`) in real-time. This method ensures that when a reaction is added or removed from a message, the BaseMessage object's `getReactions()` property reflects this change immediately.

When you receive a real-time reaction event (MessageReaction), call the `updateMessageWithReactionInfo()` method, passing the BaseMessage instance (message), event data (MessageReaction) and reaction event action type (`ReactionAction.REACTION_ADDED` or `ReactionAction.REACTION_REMOVED`) that corresponds to the message being reacted to.

<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
// The message to which the reaction is related
BaseMessage message = ...;

// The reaction event data received in real-time
MessageReaction messageReaction = ...;

// The recieved reaction event real-time action type. Can be CometChatConstants.REACTION_ADDED or CometChatConstants.REACTION_REMOVED
var action = CometChatConstants.REACTION_ADDED;

BaseMessage modifiedBaseMessage = await CometChatHelper.updateMessageWithReactionInfo(
  baseMessage, 
  messageReaction, 
  action
); 
  ```
</TabItem>
</Tabs>