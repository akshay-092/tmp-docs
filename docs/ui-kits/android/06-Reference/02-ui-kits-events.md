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

`UserEvents` emit events when the logged-in user executes actions on another user. This class provides methods to add and remove listeners for user events, as well as methods to handle specific user actions such as blocking and unblocking users.

1. `ccUserBlocked`: Triggered when the logged-in user blocks another user.
1. `ccUserUnblocked`: Triggered when the logged-in user unblocks another user.

<Tabs>

<TabItem value="java" label="Java">

```java
CometChatUserEvents.addUserListener(LISTENERS_TAG, new CometChatUserEvents() {
    @Override
    public void ccUserBlocked(User user) {
        // Perform action when user is blocked
    }

    @Override
    public void ccUserUnblocked(User user) {
        // Perform action when user is unblocked
    }
});

```

</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin
CometChatUserEvents.addUserListener(LISTENERS_TAG, object : CometChatUserEvents() {
    override fun ccUserBlocked(user: User) {
        // Perform action when user is blocked
    }

    override fun ccUserUnblocked(user: User) {
        // Perform action when user is unblocked
    }
})
```

</TabItem>

</Tabs>

### Group Events

`GroupEvents` Emits events when the logged-in user performs actions related to groups. This class provides methods to listen to various group-related events and handle them accordingly.

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

```java
CometChatGroupEvents.addGroupListener(LISTENERS_TAG, new CometChatGroupEvents() {
    @Override
    public void ccGroupCreated(Group group) {
        // Perform action when group is created
    }

    @Override
    public void ccGroupDeleted(Group group) {
        // Perform action when group is deleted
    }

    @Override
    public void ccGroupLeft(Group group) {
        // Perform action when user leaves group
    }

    @Override
    public void ccGroupMemberScopeChanged(Group group, User user, String scope) {
        // Perform action when group member scope is changed
    }

    @Override
    public void ccGroupMemberBanned(Group group, User user, User bannedBy) {
        // Perform action when user is banned from group
    }

    @Override
    public void ccGroupMemberKicked(Group group, User kickedUser, User kickedBy) {
        // Perform action when user is kicked from group
    }

    @Override
    public void ccGroupMemberUnbanned(Group group, User user, User unbannedBy) {
        // Perform action when user is unbanned from group
    }

    @Override
    public void ccGroupMemberJoined(Group group, User joinedUser) {
        // Perform action when user joins group
    }

    @Override
    public void ccGroupMemberAdded(Group group, List<User> addedMembers, User addedBy) {
        // Perform action when members are added to group
    }

    @Override
    public void ccOwnershipChanged(Group group, User newOwner, User oldOwner) {
        // Perform action when group ownership is changed
    }
});
```

### Conversation Events

The `ConversationEvents` component emits events when the logged-in user performs actions related to conversations. This allows for the UI to be updated accordingly. Below are the events emitted by the Conversation Component:

- `ccConversationDeleted`: Triggered when the logged-in user deletes a conversation.

To listen to conversation events and handle them in your application, you can use the following code snippets:

<Tabs>

<TabItem value="java" label="Java">

```java
CometChatConversationEvents.addListener("LISTENERS_TAG", new CometChatConversationEvents() {
    @Override
    public void ccConversationDeleted(Conversation conversation) {
        // Perform action when conversation is deleted
    }
});
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin
CometChatConversationEvents.addListener("LISTENERS_TAG", object : CometChatConversationEvents() {
    override fun ccConversationDeleted(conversation: Conversation) {
        // Perform action when conversation is deleted
    }
})
```

</TabItem>

</Tabs>

### Message Events

`MessageEvents` emits events when various actions are performed on messages within the application. These events facilitate updating the UI accordingly. Below are the events emitted by the MessageEvents component:

- `ccMessageSent`: Triggered whenever a loggedIn user sends any message. It can have two states: `inProgress` and `sent`.
- `ccMessageEdited`: Triggered whenever a loggedIn user edits any message from the list of messages. It can have two states: `inProgress` and `sent`.
- `ccMessageDeleted`: Triggered whenever a loggedIn user deletes any message from the list of messages.
- `ccMessageRead`: Triggered whenever a loggedIn user reads any message.
- `ccLiveReaction`: Triggered whenever a loggedIn user clicks on live reaction.
- `onFormMessageReceived`: Triggered when a form message is received.
- `onCardMessageReceived`: Triggered when a card message is received.
- `onCustomInteractiveMessageReceived`: Triggered when a custom interactive message is received.
- `onInteractionGoalCompleted`: Triggered when an interaction goal is completed.
- `onSchedulerMessageReceived`: Triggered when a scheduler message is received.

To listen to message events and handle them in your application, you can use the following code snippets:

<Tabs>

<TabItem value="java" label="Java">

```java
CometChatMessageEvents.addListener("UNIQUE_ID", new CometChatMessageEvents() {
    @Override
    public void ccMessageSent(BaseMessage baseMessage, int status) {
        // Perform action when message is sent
    }

    @Override
    public void ccMessageEdited(BaseMessage baseMessage, int status) {
        // Perform action when message is edited
    }

    @Override
    public void ccMessageDeleted(BaseMessage baseMessage) {
        // Perform action when message is deleted
    }

    @Override
    public void ccMessageRead(BaseMessage baseMessage) {
        // Perform action when message is read
    }

    @Override
    public void ccLiveReaction(int icon) {
        // Perform action on live reaction
    }

    // Other overridden methods for handling specific message types and actions
});
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin
CometChatMessageEvents.addListener("UNIQUE_ID", object : CometChatMessageEvents() {
    override fun ccMessageSent(baseMessage: BaseMessage?, status: Int) {
        // Perform action when message is sent
    }

    override fun ccMessageEdited(baseMessage: BaseMessage?, status: Int) {
        // Perform action when message is edited
    }

    override fun ccMessageDeleted(baseMessage: BaseMessage?) {
        // Perform action when message is deleted
    }

    override fun ccMessageRead(baseMessage: BaseMessage?) {
        // Perform action when message is read
    }

    override fun ccLiveReaction(icon: Int) {
        // Perform action on live reaction
    }

    // Other overridden methods for handling specific message types and actions
})
```

</TabItem>

</Tabs>

### Call Events

`Call Events` emits events related to calls within the application. This class provides methods to listen to call-related events and handle them accordingly.

- `ccOutgoingCall`: Triggered when the logged-in user initiates an outgoing call.
- `ccCallAccepted`: Triggered when a call is accepted.
- `ccCallRejected`: Triggered when a call is rejected.
- `ccCallEnded`: Triggered when a call is ended.

To listen to call events and handle them in your application, you can use the following code snippet:

```java
CometChatCallEvents.addListener("ListenerID", new CometChatCallEvents() {
    @Override
    public void ccOutgoingCall(Call call) {
        // Perform action when outgoing call is initiated
    }

    @Override
    public void ccCallAccepted(Call call) {
        // Perform action when call is accepted
    }

    @Override
    public void ccCallRejected(Call call) {
        // Perform action when call is rejected
    }

    @Override
    public void ccCallEnded(Call call) {
        // Perform action when call is ended
    }
});
```

### UI Events

`UIEvents` emits events related to UI components within the CometChat UI. This class provides methods to listen to UI-related events and handle them accordingly.

Following are the UI events

- `showPanel`: Triggered to show an additional UI panel with custom elements.
- `hidePanel`: Triggered to hide a previously shown UI panel.
- `ccActiveChatChanged`: Triggered when the active chat changes, providing information about the current message, user, and group.
- `ccOpenChat`: Triggered to open a chat with a specific user or group.

To listen to UI events and handle them in your application, you can use the following code snippet:

```java
CometChatUIEvents.addListener("UNIQUE_ID", new CometChatUIEvents() {
    @Override
    public void showPanel(HashMap<String, String> id, UIKitConstants.CustomUIPosition alignment, Function1<Context, View> view) {
        // Perform action to show UI panel with custom elements
    }

    @Override
    public void hidePanel(HashMap<String, String> id, UIKitConstants.CustomUIPosition alignment) {
        // Perform action to hide UI panel
    }

    @Override
    public void ccActiveChatChanged(HashMap<String, String> id, BaseMessage message, User user, Group group) {
        // Perform action when active chat changes
    }

    @Override
    public void ccOpenChat(User user, Group group) {
        // Perform action to open a chat with a specific user or group
    }
});
```
