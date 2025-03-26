---
sidebar_position: 2
title: Events
slug: /events
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

Events allow for a decoupled, flexible architecture where different parts of the application can interact without having to directly reference each other. This makes it easier to create complex, interactive experiences, as well as to extend and customize the functionality provided by the CometChat UI Kit.

Both Components and Composite Components have the ability to emit events. These events are dispatched in response to certain changes or user interactions within the component. By emitting events, these components allow other parts of the application to react to changes or interactions, thus enabling dynamic and interactive behavior within the application.

### User Events

`CometChatUserEvents` emit events when the logged-in user executes actions on another user. This class provides methods to add and remove listeners for user events, as well as methods to handle specific user actions such as blocking and unblocking users.

1. `ccUserBlocked`: Triggered when the logged-in user blocks another user.
1. `ccUserUnblocked`: Triggered when the logged-in user unblocks another user.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class UserEventsExample extends StatefulWidget {
  const UserEventsExample({super.key});

  @override
  State<UserEventsExample> createState() => _UserEventsExampleState();
}

class _UserEventsExampleState extends State<UserEventsExample> with CometChatUserEventListener {
  String listenerID = "unique_listener_ID";
  
  @override
  void initState() {
    super.initState();

    CometChatUserEvents.addUsersListener(listenerID, this); // Add the listener
  }

  @override
  void dispose() {
    super.dispose();

    CometChatUserEvents.removeUsersListener(listenerID); // Remove the listener
  }

  @override
  void ccUserBlocked(User user) {
    // TODO("Not yet implemented")
  }

  @override
  void ccUserUnblocked(User user) {
    // TODO("Not yet implemented")
  }

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
```

</TabItem>

</Tabs>

---

### Group Events

`CometChatGroupEvents` Emits events when the logged-in user performs actions related to groups. This class provides methods to listen to various group-related events and handle them accordingly.

Following are all the group events

1. `ccGroupCreated`: Triggered when the logged-in user creates a group.
1. `ccGroupDeleted`: Triggered when the logged-in user deletes a group.
1. `ccGroupLeft`: Triggered when the logged-in user leaves a group.
1. `ccGroupMemberScopeChanged`: Triggered when the logged-in user changes the scope of another group member.
1. `ccGroupMemberBanned`: Triggered when the logged-in user bans a group member from the group.
1. `ccGroupMemberKicked`: Triggered when the logged-in user kicks another group member from the group.
1. `ccGroupMemberUnbanned`: Triggered when the logged-in user unbans a user banned from the group.
1. `ccGroupMemberJoined`: Triggered when the logged-in user joins a group.
1. `ccGroupMemberAdded`: Triggered when the logged-in user adds new members to the group.
1. `ccOwnershipChanged`: Triggered when the logged-in user transfers the ownership of their group to some other member.

To listen to group events

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart' as sdk;
import 'package:flutter/material.dart';

class GroupEventsExample extends StatefulWidget {
  const GroupEventsExample({super.key});

  @override
  State<GroupEventsExample> createState() => _GroupEventsExampleState();
}

class _GroupEventsExampleState extends State<GroupEventsExample> with CometChatGroupEventListener {
  String listenerID = "unique_listener_ID";

  @override
  void initState() {
    super.initState();

    CometChatGroupEvents.addGroupsListener(listenerID, this); // Add the listener
  }

  @override
  void dispose() {
    super.dispose();

    CometChatGroupEvents.removeGroupsListener(listenerID); // Remove the listener
  }

  @override
  void ccGroupCreated(Group group) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupDeleted(Group group) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupLeft(sdk.Action message, User leftUser, Group leftGroup) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberScopeChanged(sdk.Action message, User updatedUser, String scopeChangedTo, String scopeChangedFrom, Group group) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberBanned(sdk.Action message, User bannedUser, User bannedBy, Group bannedFrom) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberKicked(sdk.Action message, User kickedUser, User kickedBy, Group kickedFrom) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberUnbanned(sdk.Action message, User unbannedUser, User unbannedBy, Group unbannedFrom) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberJoined(User joinedUser, Group joinedGroup) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberAdded(List<sdk.Action> messages, List<User> usersAdded, Group groupAddedIn, User addedBy) {
    // TODO("Not yet implemented")
  }

  @override
  void ccOwnershipChanged(Group group, GroupMember newOwner) {

  }

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }

}
```

</TabItem>

</Tabs>

---

### Conversation Events

The `CometChatConversationEvents` component emits events when the logged-in user performs actions related to conversations. This allows for the UI to be updated accordingly. Below are the events emitted by the Conversation Component:

1. `ccConversationDeleted`: Triggered when the logged-in user deletes a conversation.

To listen to conversation events and handle them in your application, you can use the following code snippets:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class ConversationEventsExample extends StatefulWidget {
  const ConversationEventsExample({super.key});

  @override
  State<ConversationEventsExample> createState() => _ConversationEventsExampleState();
}

class _ConversationEventsExampleState extends State<ConversationEventsExample> with CometChatConversationEventListener {
  String listenerID = "unique_listener_ID";

  @override
  void initState() {
    super.initState();

    CometChatConversationEvents.addConversationListListener(listenerID, this); // Add the listener
  }

  @override
  void dispose() {
    super.dispose();

    CometChatConversationEvents.removeConversationListListener(listenerID); // Remove the listener
  }
  
  @override
  void ccConversationDeleted(Conversation conversation) {
    // TODO("Not yet implemented")
  }

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }

}
```

</TabItem>

</Tabs>

---

### Message Events

`CometChatMessageEvents` emits events when various actions are performed on messages within the application. These events facilitate updating the UI accordingly. Below are the events emitted by the MessageEvents component:

1. `ccMessageSent`: Triggered whenever a logged-in user sends any message. It can have two states: `inProgress` and `sent`.
1. `ccMessageEdited`: Triggered whenever a logged-in user edits any message from the list of messages. It can have two states: `inProgress` and `sent`.
1. `ccMessageDeleted`: Triggered whenever a logged-in user deletes any message from the list of messages.
1. `ccMessageRead`: Triggered whenever a logged-in user reads any message.
1. `ccLiveReaction`: Triggered whenever a logged-in user clicks on a live reaction.
1. `ccMessageForwarded`: Triggered whenever a logged-in user forwards any message to a list of users or groups. It can have a state of `status`.
1. `onTextMessageReceived`: Triggered when a text message is received.
1. `onMediaMessageReceived`: Triggered when a media message is received.
1. `onCustomMessageReceived`: Triggered when a custom message is received.
1. `onTypingStarted`: Triggered when a typing indicator starts.
1. `onTypingEnded`: Triggered when a typing indicator ends.
1. `onMessagesDelivered`: Triggered when messages are delivered.
1. `onMessagesRead`: Triggered when messages are read.
1. `onMessageEdited`: Triggered when a message is edited.
1. `onMessageDeleted`: Triggered when a message is deleted.
1. `onTransientMessageReceived`: Triggered when a transient message is received.
1. `onFormMessageReceived`: Triggered when a form message is received.
1. `onCardMessageReceived`: Triggered when a card message is received.
1. `onCustomInteractiveMessageReceived`: Triggered when a custom interactive message is received.
1. `onInteractionGoalCompleted`: Triggered when an interaction goal is completed.
1. `onSchedulerMessageReceived`: Triggered when a scheduler message is received.
1. `onMessageReactionAdded`: Triggered when a reaction is added to a message.
1. `onMessageReactionRemoved`: Triggered when a reaction is removed from a message.


To listen to message events and handle them in your application, you can use the following code snippets:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class MessageEventsExample extends StatefulWidget {
  const MessageEventsExample({super.key});

  @override
  State<MessageEventsExample> createState() => _MessageEventsExampleState();
}

class _MessageEventsExampleState extends State<MessageEventsExample> with CometChatMessageEventListener {
  String listenerID = "unique_listener_ID";

  @override
  void initState() {
    super.initState();

    CometChatMessageEvents.addMessagesListener(listenerID, this); // Add the listener
  }

  @override
  void dispose() {
    super.dispose();

    CometChatConversationEvents.removeConversationListListener(listenerID); // Remove the listener
  }
  
  @override
  void ccMessageSent(BaseMessage message, MessageStatus messageStatus) {
    // TODO("Not yet implemented")  
  }

  @override
  void ccMessageEdited(BaseMessage message, MessageEditStatus status) {
    // TODO("Not yet implemented")  
  }

  @override
  void ccMessageDeleted(BaseMessage message, EventStatus messageStatus) {
    // TODO("Not yet implemented")  
  }

  @override
  void ccMessageRead(BaseMessage message) {
    // TODO("Not yet implemented")  
  }

  @override
  void ccLiveReaction(String reaction) {
    // TODO("Not yet implemented")  
  }

  @override
  void onTextMessageReceived(TextMessage textMessage) {
    // TODO("Not yet implemented")  
  }

  @override
  void onMediaMessageReceived(MediaMessage mediaMessage) {
    // TODO("Not yet implemented")  
  }

  @override
  void onCustomMessageReceived(CustomMessage customMessage) {
    // TODO("Not yet implemented")  
  }

  @override
  void onTypingStarted(TypingIndicator typingIndicator) {
    // TODO("Not yet implemented")  
  }

  @override
  void onTypingEnded(TypingIndicator typingIndicator) {
    // TODO("Not yet implemented")  
  }

  @override
  void onMessagesDelivered(MessageReceipt messageReceipt) {
    // TODO("Not yet implemented")  
  }

  @override
  void onMessagesRead(MessageReceipt messageReceipt) {
    // TODO("Not yet implemented")  
  }

  @override
  void onMessageEdited(BaseMessage message) {
    // TODO("Not yet implemented")  
  }

  @override
  void onMessageDeleted(BaseMessage message) {
    // TODO("Not yet implemented")  
  }

  @override
  void onTransientMessageReceived(TransientMessage message) {
    // TODO("Not yet implemented")  
  }

  @override
  void onFormMessageReceived(FormMessage formMessage) {
    // TODO("Not yet implemented")  
  }

  @override
  void onCardMessageReceived(CardMessage cardMessage) {
    // TODO("Not yet implemented")  
  }

  @override
  void onCustomInteractiveMessageReceived(
      CustomInteractiveMessage customInteractiveMessage) {
    // TODO("Not yet implemented")  
  }

  @override
  void onInteractionGoalCompleted(InteractionReceipt receipt) {
    // TODO("Not yet implemented")  
  }

  @override
  void onSchedulerMessageReceived(SchedulerMessage schedulerMessage) {
    // TODO("Not yet implemented")  
  }

  @override
  void onMessageReactionAdded(ReactionEvent reactionEvent) {
    // TODO("Not yet implemented")  
  }

  @override
  void onMessageReactionRemoved(ReactionEvent reactionEvent) {
        // TODO("Not yet implemented")  
  }

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
```

</TabItem>

</Tabs>

---

### Call Events

`CometChatCallEvents` emits events related to calls within the application. This class provides methods to listen to call-related events and handle them accordingly.

1. `ccOutgoingCall`: Triggered when the logged-in user initiates an outgoing call.
1. `ccCallAccepted`: Triggered when a call is accepted.
1. `ccCallRejected`: Triggered when a call is rejected.
1. `ccCallEnded`: Triggered when a call is ended.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class CallEventsExample extends StatefulWidget {
  const CallEventsExample({super.key});

  @override
  State<CallEventsExample> createState() => _CallEventsExampleState();
}

class _CallEventsExampleState extends State<CallEventsExample> with CometChatCallEventListener {
  String listenerID = "unique_listener_ID";

  @override
  void initState() {
    super.initState();

    CometChatCallEvents.addCallEventsListener(listenerID, this); // Add the listener
  }

  @override
  void dispose() {
    super.dispose();

    CometChatCallEvents.removeCallEventsListener(listenerID); // Remove the listener 
  }

  @override
  void ccOutgoingCall(Call call) {
    // TODO("Not yet implemented")
  }

  @override
  void ccCallAccepted(Call call) {
    // TODO("Not yet implemented")  
  }

  @override
  void ccCallRejected(Call call) {
    // TODO("Not yet implemented")  
  }

  @override
  void ccCallEnded(Call call) {
    // TODO("Not yet implemented")  
  }

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
```

</TabItem>

</Tabs>

---

### UI Events

`CometChatUIEvents` emits events related to UI components within the CometChat UI. This class provides methods to listen to UI-related events and handle them accordingly.

Following are the UI events

1. `showPanel`: Triggered to show an additional UI panel with custom elements.
1. `hidePanel`: Triggered to hide a previously shown UI panel.
1. `ccActiveChatChanged`: Triggered when the active chat changes, providing information about the current message, user, and group.
1. `ccOpenChat`: Triggered to open a chat with a specific user or group.

To listen to UI events and handle them in your application, you can use the following code snippet:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class UIEventsExample extends StatefulWidget {
  const UIEventsExample({super.key});

  @override
  State<UIEventsExample> createState() => _UIEventsExampleState();
}

class _UIEventsExampleState extends State<UIEventsExample> with CometChatUIEventListener {
  String listenerID = "unique_listener_ID";

  @override
  void initState() {
    super.initState();

    CometChatUIEvents.addUiListener(listenerID, this); // Add the listener
  }

  @override
  void dispose() {
    super.dispose();

    CometChatUIEvents.removeUiListener(listenerID); // Remove the listener
  }

  @override
  void showPanel(Map<String, dynamic>? id, CustomUIPosition uiPosition, WidgetBuilder child) {
    // TODO("Not yet implemented")
  }

  @override
  void hidePanel(Map<String, dynamic>? id, CustomUIPosition uiPosition) {
    // TODO("Not yet implemented")
  }

  @override
  void ccActiveChatChanged(Map<String, dynamic>? id, BaseMessage? lastMessage, User? user, Group? group, int unreadMessageCount) {
    // TODO("Not yet implemented")
  }

  @override
  void openChat(User? user, Group? group) {
    // TODO("Not yet implemented")
  }

  @override
  void ccComposeMessage(String text, MessageEditStatus status) {
    // TODO("Not yet implemented")
  }

  @override
  void onAiFeatureTapped(User? user, Group? group) {
    // TODO("Not yet implemented")
  }

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
```

</TabItem>

</Tabs>

---

