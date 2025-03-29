---
sidebar_position: 5
title: Preferences, Templates & Sounds
slug: /preferences-templates-sounds
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Common Preferences

Login to CometChat dashboard and navigate to the Notifications section.

Under Preferences tab, set the event preferences at the CometChat app-level and decide if users have the capability to override these settings.
When **"Override"** toggle is enabled, users will have the capability to modify the default value that has been set.

### Group preferences

#### Dashboard configuration

As the name suggests, these preferences help you to configure Notifications for events generated in group conversations.

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Categories</th>
      <th>Events</th>
      <th>Available preferences</th>
      <th>Can user override?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Conversations</td>
      <td>New messages</td>
      <td>
        - Don't notify
        - **Notify for all messages (Default)**
        - Notify for messages with mentions
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td>New replies</td>
      <td>
        - Don't notify
        - **Notify for all replies (Default)**
        - Notify for replies with mentions
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td rowspan="3">Message actions</td>
      <td>Message is edited</td> 
      <td>
        - Don't notify 
        - **Notify (Default)** 
      </td>
      <td>
        - Yes
        - **No (Default)**
      </td>
    </tr>
    <tr>
      <td>Message is deleted</td> 
      <td>
        - Don't notify 
        - **Notify (Default)** 
      </td>
      <td>
        - Yes
        - **No (Default)**
      </td>
    </tr>
    <tr>
      <td>Message receives a reaction</td>
      <td>
        - Don't notify
        - Notify for reactions received on all messages
        - **Notify for reactions received on own messages (Default)**
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td rowspan="7">Group actions</td>
      <td>A member leaves</td>
      <td>
        - **Don't notify (Default)**
        - Notify
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td>A new member is added</td>
      <td>
        - **Don't notify (Default)**
        - Notify
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td>A new member joins</td>
      <td>
        - **Don't notify (Default)**
        - Notify
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td>A member is kicked</td>
      <td>
        - **Don't notify (Default)**
        - Notify
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td>A member is banned</td>
      <td>
        - **Don't notify (Default)**
        - Notify
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td>A member is unbanned</td>
      <td>
        - **Don't notify (Default)**
        - Notify
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td>A member's scope changes</td>
      <td>
        - **Don't notify (Default)**
        - Notify
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
  </tbody>
</table>
:::info Regarding Message edited & Message deleted events 
Push notifications should be triggered for the message edited and message deleted events in order to retract the notification displaying the original message. Turning them off is not recommended. 
:::

#### Client-side implementation

_Fetch group preferences_

`CometChatNotifications.fetchPreferences()` method retrieves the notification preferences as an instance of `NotificationPreferences` class. If the user has not configured any preferences, the default preferences defined by the CometChat administrator via the dashboard will be returned.

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
const preferences = await CometChatNotifications.fetchPreferences();

// Display Group preferences
const groupPreferences = preferences.getGroupPreferences();

const groupMessagesPreference = groupPreferences.getMessagesPreference();
const groupRepliesPreference = groupPreferences.getRepliesPreference();
const groupReactionsPreference = groupPreferences.getReactionsPreference();
const memberLeftPreference = groupPreferences.getMemberLeftPreference();
const memberAddedPreference = groupPreferences.getMemberAddedPreference();
const memberJoinedPreference = groupPreferences.getMemberJoinedPreference();
const memberKickedPreference = groupPreferences.getMemberKickedPreference();
const memberBannedPreference = groupPreferences.getMemberBannedPreference();
const memberUnbannedPreference = groupPreferences.getMemberUnbannedPreference();
const memberScopeChangedPreference =
  groupPreferences.getMemberScopeChangedPreference();
```

</TabItem>
<TabItem value="Java" label="Android">

```java
CometChatNotifications.fetchPreferences(new CometChat.CallbackListener<NotificationPreferences>() {
  @Override
  public void onSuccess(NotificationPreferences notificationPreferences) {
      // Display group preferences
      GroupPreferences groupPreferences = notificationPreferences.getGroupPreferences();

      MessagesOptions groupMessagesPreference = groupPreferences.getMessagesPreference();
      RepliesOptions groupRepliesPreference = groupPreferences.getRepliesPreference();
      ReactionsOptions groupReactionsPreference = groupPreferences.getReactionsPreference();
      MemberActionsOptions memberAddedPreference = groupPreferences.getMemberAddedPreference();
      MemberActionsOptions memberLeftPreference = groupPreferences.getMemberLeftPreference();
      MemberActionsOptions memberJoinedPreference = groupPreferences.getMemberJoinedPreference();
      MemberActionsOptions memberKickedPreference = groupPreferences.getMemberKickedPreference();
      MemberActionsOptions memberBannedPreference = groupPreferences.getMemberBannedPreference();
      MemberActionsOptions memberUnbannedPreference = groupPreferences.getMemberUnbannedPreference();
      MemberActionsOptions memberScopeChangedPreference = groupPreferences.getMemberScopeChangedPreference();
  }

  @Override
  public void onError(CometChatException e) {
      // Something went wrong while fetching notification preferences
  }
});
```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
CometChatNotifications.fetchPreferences { notificationPreferences in
  // Display group preferences
  let groupPreferences = notificationPreferences.groupPreferences;

  let groupMessages = groupPreferences?.messagesPreference;
  let groupReplies = groupPreferences?.repliesPreference;
  let groupReactions = groupPreferences?.reactionsPreference;
  let left = groupPreferences?.memberLeftPreference;
  let added = groupPreferences?.memberAddedPreference;
  let joined = groupPreferences?.memberJoinedPreference;
  let kicked = groupPreferences?.memberKickedPreference;
  let banned = groupPreferences?.memberBannedPreference;
  let unbanned = groupPreferences?.memberUnbannedPreference;
  let scope = groupPreferences?.memberScopeChangedPreference;

} onError: { error in
  // Something went wrong while fetching notification preferences.
  print("fetchPreferences: \(error.errorCode) \(error.errorDescription)");
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
CometChatNotifications.fetchPreferences(
    onSuccess: (notificationPreferences) {
      // Display group preferences
      GroupPreferences? groupPreferences = notificationPreferences.groupPreferences;

      MessagesOptions? messagesPreference = groupPreferences?.messages;
      RepliesOptions? repliesPreference = groupPreferences?.replies;
      ReactionsOptions? reactionsPreference = groupPreferences?.reactions;
      MemberActionsOptions? memberAddedPreference = groupPreferences?.memberAdded;
      MemberActionsOptions? memberJoinedPreference = groupPreferences?.memberJoined;
      MemberActionsOptions? memberLeftPreference = groupPreferences?.memberLeft;
      MemberActionsOptions? memberKickedPreference = groupPreferences?.memberKicked;
      MemberActionsOptions? memberBannedPreference = groupPreferences?.memberBanned;
      MemberActionsOptions? memberUnbannedPreference = groupPreferences?.memberUnbanned;
      MemberActionsOptions? memberScopeChangedPreference = groupPreferences?.memberScopeChanged;
    },
    onError: (e) {
      debugPrint("fetchPreferences:error ${e.toString()}");
    });
```

</TabItem>
</Tabs>

_Update group preferences_

`CometChatNotifications.updatePreferences()` method is used to update a user's notification preferences. The "**override**" toggle defined in the dashboard is crucial when updating preferences. If any preference is non-overridable, the method doesn't generate an error; it instead returns the `NotificationPreferences` object with the updated values where overrides are allowed.

This functionality can be beneficial for temporarily superseding certain user preferences to ensure notifications for a specific event are delivered. Nonetheless, it is advisable to use this approach temporarily to avoid confusing users with unexpected changes to their notification settings.

It is unnecessary to specify all values; only set and save the preferences that have been changed.

:::info
Since the user is performing this action, enums have values as `SUBSCRIBE` or `DONT_SUBSCRIBE`. It is equivalent to "Notify" and "Don't notify" respectively, from the dashboard preferences.
:::

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
const updatedPreferences = new NotificationPreferences();

// Instantiate the preferences that you want to update.
const groupPreferences = new GroupPreferences();

// Change group preferences
groupPreferences.setMessagesPreference(MessagesOptions.DONT_SUBSCRIBE);
groupPreferences.setRepliesPreference(RepliesOptions.DONT_SUBSCRIBE);
groupPreferences.setReactionsPreference(ReactionsOptions.DONT_SUBSCRIBE);
groupPreferences.setMemberAddedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberKickedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberJoinedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberLeftPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberBannedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberUnbannedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberScopeChangedPreference(
  MemberActionsOptions.SUBSCRIBE
);

// Load the updates in the NotificationPreferences instance.
updatedPreferences.setGroupPreferences(groupPreferences);

// Update the preferences and receive the udpated copy.
const preferences = await CometChatNotifications.updatePreferences(
  updatedPreferences
);
```

</TabItem>
<TabItem value="Java" label="Android">

```java
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.
// Instantiate the NotificationPreferences.
NotificationPreferences updatedPreferences = new NotificationPreferences();

// Instantiate the preferences that you want to update.
GroupPreferences groupPreferences = new GroupPreferences();

// Change group preferences
groupPreferences.setMessagesPreference(MessagesOptions.DONT_SUBSCRIBE);
groupPreferences.setRepliesPreference(RepliesOptions.DONT_SUBSCRIBE);
groupPreferences.setReactionsPreference(ReactionsOptions.DONT_SUBSCRIBE);
groupPreferences.setMemberAddedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberKickedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberJoinedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberLeftPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberBannedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberUnbannedPreference(MemberActionsOptions.SUBSCRIBE);
groupPreferences.setMemberScopeChangedPreference(MemberActionsOptions.SUBSCRIBE);

// Load the updates in the NotificationPreferences instance.
updatedPreferences.setGroupPreferences(groupPreferences);

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences, new CometChat.CallbackListener<NotificationPreferences>() {
    @Override
    public void onSuccess(NotificationPreferences notificationPreferences) {
        // Updated notificationPreferences
    }

    @Override
    public void onError(CometChatException e) {
        // Something went wrong
    }
});
```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
let updatedPreferences = CometChatNotifications.NotificationPreferences();

// Instantiate the preferences that you want to update.
let groupPreferences = CometChatNotifications.GroupPreferences();

// Change group preferences
groupPreferences.set(messagesPreference: .DONT_SUBSCRIBE)
groupPreferences.set(repliesPreference: .DONT_SUBSCRIBE)
groupPreferences.set(reactionsPreference: .DONT_SUBSCRIBE)

groupPreferences.set(memberAddedPreference: .SUBSCRIBE)
groupPreferences.set(memberKickedPreference: .SUBSCRIBE)
groupPreferences.set(memberJoinedPreference: .SUBSCRIBE)
groupPreferences.set(memberLeftPreference: .SUBSCRIBE)
groupPreferences.set(memberBannedPreference: .SUBSCRIBE)
groupPreferences.set(memberUnbannedPreference: .SUBSCRIBE)
groupPreferences.set(memberScopeChangedPreference: .SUBSCRIBE)

// Load the updates in the NotificationPreferences instance.
updatedPreferences.set(groupPreferences: groupPreferences)

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences) { updatedPreferences in
    print("updatePreferences: \(updatedPreferences)")
} onError: { error in
    print("updatePreferences: \(error.errorCode) \(error.errorDescription)")
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences
NotificationPreferences updatedPreferences = NotificationPreferences();

GroupPreferences groupPreferences = GroupPreferences(
  messages: MessagesOptions.SUBSCRIBE_TO_MENTIONS,
  replies: RepliesOptions.SUBSCRIBE_TO_ALL,
  reactions: ReactionsOptions.SUBSCRIBE_TO_REACTIONS_ON_ALL_MESSAGES,
  memberAdded: MemberActionsOptions.SUBSCRIBE,
  memberJoined: MemberActionsOptions.SUBSCRIBE,
  memberLeft: MemberActionsOptions.SUBSCRIBE,
  memberKicked: MemberActionsOptions.SUBSCRIBE,
  memberBanned: MemberActionsOptions.SUBSCRIBE,
  memberUnbanned: MemberActionsOptions.SUBSCRIBE,
  memberScopeChanged: MemberActionsOptions.SUBSCRIBE,
);
updatedPreferences.groupPreferences = groupPreferences;

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences,
    onSuccess: (preferencesAfterUpdate) {
  debugPrint("updatePreferences:success");
  // Use the preferencesAfterUpdate
}, onError: (e) {
  debugPrint("updatePreferences:error: ${e.toString()}");
});

```

</TabItem>
</Tabs>

### One-on-one preferences

#### Dashboard configuration

As the name suggests, these preferences help you to configure Notifications for events generated in one-on-one conversations.

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Categories</th>
      <th>Events</th>
      <th>Available preferences</th>
      <th>Can user override?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Conversations</td>
      <td>New messages</td>
      <td>
        - Don't notify
        - **Notify for all messages (Default)**
        - Notify for messages with mentions
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td>New replies</td>
      <td>
        - Don't notify
        - **Notify for all replies (Default)**
        - Notify for replies with mentions
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
    <tr>
      <td rowspan="3">Message actions</td>
      <td>Message is edited</td> 
      <td>
        - Don't notify 
        - **Notify (Default)** 
      </td>
      <td>
        - Yes
        - **No (Default)**
      </td>
    </tr>
    <tr>
      <td>Message is deleted</td> 
      <td>
        - Don't notify 
        - **Notify (Default)** 
      </td>
      <td>
        - Yes
        - **No (Default)**
      </td>
    </tr>
    <tr>
      <td>Message receives a reaction</td>
      <td>
        - Don't notify
        - Notify for reactions received on all messages
        - **Notify for reactions received on own messages (Default)**
      </td>
      <td>
        - **Yes (Default)**
        - No
      </td>
    </tr>
  </tbody>
</table>

:::info Regarding Message edited & Message deleted events
Push notifications should be triggered for the message edited and message deleted events in order to retract the notification displaying the original message. Turning them off is not recommended.
:::

#### Client-side implementation

`CometChatNotifications.fetchPreferences()` method retrieves the notification preferences saved by the user as an instance of `NotificationPreferences` class. If the user has not configured any preferences, the default preferences defined by the CometChat administrator via the dashboard will be returned.

_Fetch one-on-one preferences_

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
const preferences = await CometChatNotifications.fetchPreferences();

// Display One-on-One preferences
const oneOnOnePreferences = preferences.getOneOnOnePreferences();

const oneOnOneMessagesPreference = oneOnOnePreferences.getMessagesPreference();
const oneOnOneRepliesPreference = oneOnOnePreferences.getRepliesPreference();
const oneOnOneReactionsPreference =
  oneOnOnePreferences.getReactionsPreference();
```

</TabItem>

<TabItem value="Java" label="Android">

```java
CometChatNotifications.fetchPreferences(new CometChat.CallbackListener<NotificationPreferences>() {
  @Override
  public void onSuccess(NotificationPreferences notificationPreferences) {
      // Display one-on-one preferences
      OneOnOnePreferences oneOnOnePreferences = notificationPreferences.getOneOnOnePreferences();

      MessagesOptions oneOnOneMessagesPreference = oneOnOnePreferences.getMessagesPreference();
      RepliesOptions oneOnOneRepliesPreference = oneOnOnePreferences.getRepliesPreference();
      ReactionsOptions oneOnOneReactionsPreference = oneOnOnePreferences.getReactionsPreference();
  }

  @Override
  public void onError(CometChatException e) {
      // Something went wrong while fetching notification preferences
  }
});

```

</TabItem>

<TabItem value="Swift" label="iOS">

```swift
CometChatNotifications.fetchPreferences { notificationPreferences in
  // Display one-on-one preferences
  let oneOnOnePreferences = notificationPreferences.oneOnOnePreferences;

  let oneMessages = oneOnOnePreferences?.messagesPreference;
  let oneReplies = oneOnOnePreferences?.repliesPreference;
  let oneReactions = oneOnOnePreferences?.reactionsPreference;
} onError: { error in
  // Something went wrong while fetching notification preferences.
  print("fetchPreferences: \(error.errorCode) \(error.errorDescription)");
}
```

</TabItem>

<TabItem value="Dart" label="Flutter">

```dart
CometChatNotifications.fetchPreferences(
    onSuccess: (notificationPreferences) {
      // Display one-on-one preferences
      OneOnOnePreferences? oneOnOnePreferences = notificationPreferences.oneOnOnePreferences;

      MessagesOptions? oneOnOneMessagesPreference = oneOnOnePreferences?.messages;
      RepliesOptions? oneOnOneRepliesPreference = oneOnOnePreferences?.replies;
      ReactionsOptions? oneOnOneReactionsPreference = oneOnOnePreferences?.reactions;
    },
    onError: (e) {
      debugPrint("fetchPreferences:error ${e.toString()}");
    });
```

</TabItem>
</Tabs>

_Update one-on-one preferences_

`CometChatNotifications.updatePreferences()` method is used to update a user's notification preferences. The "**override**" toggle defined in the dashboard is crucial when updating preferences. If any preference is non-overridable, the method doesn't generate an error; it instead returns the `NotificationPreferences` object with the updated values where overrides are allowed.

This functionality can be beneficial for temporarily superseding certain user preferences to ensure notifications for a specific event are delivered. Nonetheless, it is advisable to use this approach temporarily to avoid confusing users with unexpected changes to their notification settings.

It is unnecessary to specify all values; only set and save the preferences that have been changed.

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
const updatedPreferences = new NotificationPreferences();

// Instantiate the preferences that you want to update.
const oneOnOnePreferences = new OneOnOnePreferences();

// Change one-on-one preferences
oneOnOnePreferences.setMessagesPreference(MessagesOptions.DONT_SUBSCRIBE);
oneOnOnePreferences.setRepliesPreference(RepliesOptions.DONT_SUBSCRIBE);
oneOnOnePreferences.setReactionsPreference(ReactionsOptions.DONT_SUBSCRIBE);

// Load the updates in the NotificationPreferences instance.
updatedPreferences.setOneOnOnePreferences(oneOnOnePreferences);

// Update the preferences and receive the udpated copy.
const preferences = await CometChatNotifications.updatePreferences(
  updatedPreferences
);
```

</TabItem>
<TabItem value="Java" label="Android">

```java
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.
// Instantiate the NotificationPreferences.
NotificationPreferences updatedPreferences = new NotificationPreferences();

// Instantiate the preferences that you want to update.
OneOnOnePreferences oneOnOnePreferences = new OneOnOnePreferences();

// Change one-on-one preferences
oneOnOnePreferences.setMessagesPreference(MessagesOptions.DONT_SUBSCRIBE);
oneOnOnePreferences.setRepliesPreference(RepliesOptions.DONT_SUBSCRIBE);
oneOnOnePreferences.setReactionsPreference(ReactionsOptions.DONT_SUBSCRIBE);

// Load the updates in the NotificationPreferences instance.
updatedPreferences.setOneOnOnePreferences(oneOnOnePreferences);

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences, new CometChat.CallbackListener<NotificationPreferences>() {
    @Override
    public void onSuccess(NotificationPreferences notificationPreferences) {
        // Updated notificationPreferences
    }

    @Override
    public void onError(CometChatException e) {
        // Something went wrong
    }
});
```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
let updatedPreferences = CometChatNotifications.NotificationPreferences();

// Instantiate the preferences that you want to update.
let oneOnOnePreferences = CometChatNotifications.OneOnOnePreferences();

// Change one-on-one preferences
oneOnOnePreferences.set(messagesPreference: .DONT_SUBSCRIBE)
oneOnOnePreferences.set(repliesPreference: .DONT_SUBSCRIBE)
oneOnOnePreferences.set(reactionsPreference: .DONT_SUBSCRIBE)

// Load the updates in the NotificationPreferences instance.
updatedPreferences.set(oneOnOnePreferences: oneOnOnePreferences)

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences) { updatedPreferences in
    print("updatePreferences: \(updatedPreferences)")
} onError: { error in
    print("updatePreferences: \(error.errorCode) \(error.errorDescription)")
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences
NotificationPreferences updatedPreferences = NotificationPreferences();

// Instantiate the preferences that you want to update.
OneOnOnePreferences oneOnOnePreferences = OneOnOnePreferences(
  messages: MessagesOptions.SUBSCRIBE_TO_ALL,
  replies: RepliesOptions.SUBSCRIBE_TO_MENTIONS,
  reactions: ReactionsOptions.SUBSCRIBE_TO_REACTIONS_ON_ALL_MESSAGES);

// Load the updates in the NotificationPreferences instance.
updatedPreferences.oneOnOnePreferences = oneOnOnePreferences;

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences,
    onSuccess: (preferencesAfterUpdate) {
  debugPrint("updatePreferences:success");
  // Use the preferencesAfterUpdate
}, onError: (e) {
  debugPrint("updatePreferences:error: ${e.toString()}");
});

```

</TabItem>
</Tabs>

### Mute preferences

#### Dashboard configuration

These preferences allow you to control whether the users will be able to modify mute preferences.

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Mute preferences</th>
      <th>Can user configure?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mute all notifications (DND)</td>
      <td>
        - **Yes (Default)** - *Users can activate the Do Not Disturb (DND) feature.*
        - No
      </td>
    </tr>
    <tr>
      <td>Mute group conversations</td>
      <td>
        - **Yes (Default)** - *Users can mute notifications for chosen group conversations for a specified duration.*
        - No
      </td>
    </tr>
    <tr>
      <td>Mute one-on-one conversations</td>
      <td>
        - **Yes (Default)** - *Users can mute notifications for chosen one-on-one conversations for a specified duration.*
        - No
      </td>
    </tr>
    
  </tbody>
</table>

#### Client-side implementation

_Fetch mute preferences_

`CometChatNotifications.fetchPreferences()` method retrieves the notification preferences saved by the user as an instance of `NotificationPreferences` class. If the user has not configured any preferences, the default preferences defined by the CometChat administrator via the dashboard will be utilized.

You can use the `CometChatNotifications.getMutedConversations()` method to display a list of conversations that have been muted by users.
The method will return an array of `MutedConversations` object.

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
// Fetch mute preferences
const preferences = await CometChatNotifications.fetchPreferences();

// Display Mute preferences
const mutePreferences = preferences.getMutePreferences();
const DNDPreference = mutePreferences.getDNDPreference();

// Fetch muted conversations
const mutedConversations = await CometChatNotifications.getMutedConversations();
```

</TabItem>
<TabItem value="Java" label="Android">

```java
// Fetch mute preferences
CometChatNotifications.fetchPreferences(new CometChat.CallbackListener<NotificationPreferences>() {
  @Override
  public void onSuccess(NotificationPreferences notificationPreferences) {
      // Display mute preferences
      MutePreferences mutePreferences = notificationPreferences.getMutePreferences();
      DNDOptions dndPreference = mutePreferences.getDNDPreference();
  }

  @Override
  public void onError(CometChatException e) {
      // Something went wrong while fetching notification preferences
  }
});

// Fetch muted conversations
CometChatNotifications.getMutedConversations(new CometChat.CallbackListener<List<MutedConversation>>() {
  @Override
  public void onSuccess(List<MutedConversation> mutedConversations) {
      // List of muted conversations
  }

  @Override
  public void onError(CometChatException e) {
      // Fetching muted conversations failed.
  }
});
```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
CometChatNotifications.fetchPreferences { notificationPreferences in
  // Display mute preferences
  let mutePreferences = notificationPreferences.mutePreferences;
  let dndPreference = mutePreferences?.DNDPreference;
} onError: { error in
  // Something went wrong while fetching notification preferences.
  print("fetchPreferences: \(error.errorCode) \(error.errorDescription)");
}

// Fetch muted conversations
CometChatNotifications.getMutedConversations { mutedConversations in
  print("getMutedConversations: \(mutedConversations)")
} onError: { error in
  print("getMutedConversations: \(error.errorCode) \(error.errorDescription)")
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
// Fetch mute preferences
CometChatNotifications.fetchPreferences(
  onSuccess: (notificationPreferences) {
    // Display mute preferences
    MutePreferences? mutePreferences = notificationPreferences.mutePreferences;
    DNDOptions? dndPreference = mutePreferences?.dnd;
  },
  onError: (e) {
    debugPrint("fetchPreferences:error ${e.toString()}");
  });

// Fetch muted conversations
CometChatNotifications.getMutedConversations(
    onSuccess: (mutedConversations) {
  debugPrint("getMutedConversations:success");
  // use mutedConversations
}, onError: (e) {
  debugPrint("getMutedConversations:error ${e.toString()}");
});
```

</TabItem>
</Tabs>

_Update mute preferences_

`CometChatNotifications.updatePreferences()` method is used to update a user's notification preferences. The "**override**" toggle defined in the dashboard is crucial when updating preferences. If any preference is non-overridable, the method doesn't generate an error; it instead returns the `NotificationPreferences` object with the updated values where overrides are allowed.

This functionality can be beneficial for temporarily superseding certain user preferences to ensure notifications for a specific event are delivered. Nonetheless, it is advisable to use this approach temporarily to avoid confusing users with unexpected changes to their notification settings. It is unnecessary to specify all values; only set and save the preferences that have been changed.

**To mute** one or more group or one-on-one conversations, utilize the `CometChatNotifications.muteConversations()` method. This method requires an array of `MutedConversation` objects, each containing the following properties:

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>String</td>
      <td>This can either be `uid` or `guid`.</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>String</td>
      <td>This can either be `oneOnOne` or `group`.</td>
    </tr>
    <tr>
      <td>`until`</td>
      <td>Number</td>
      <td>This is a valid timestamp from the future. Eg: 1710696964705.</td>
    </tr>
  </tbody>
</table>

**To unmute** one or more group or one-on-one conversations that were muted by the user, utilize the `CometChatNotifications.unmuteConversations()` method. This method requires an array of `UnmutedConversation` objects, each containing the following properties:

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>String</td>
      <td>This can either be `uid` or `guid`.</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>String</td>
      <td>This can either be `oneOnOne` or `group`.</td>
    </tr>
  </tbody>
</table>

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
const updatedPreferences = new NotificationPreferences();

const mutePreferences = new MutePreferences();

// Change mute preferences
mutePreferences.setDNDPreference(DNDOptions.ENABLED);

// Load the updates in the NotificationPreferences instance.
updatedPreferences.setMutePreferences(mutePreferences);

// Update the preferences and receive the udpated copy.
const notificationPreferences = await CometChatNotifications.updatePreferences(
  updatedPreferences
);

// Mute conversations
const until = Date.now() + 86400000; // Mute for 1 day

const mutedUser = new MutedConversation();
mutedUser.setId('cometchat-uid-1');
mutedUser.setType(MutedConversationType.ONE_ON_ONE);
mutedUser.setUntil(until);

const mutedGroup = new MutedConversation();
mutedGroup.setId('cometchat-guid-1');
mutedGroup.setType(MutedConversationType.GROUP);
mutedGroup.setUntil(until);

await CometChatNotifications.muteConversations([mutedUser, mutedGroup]);

// Unmute conversations
const unmutedUser = new UnmutedConversation();
unmutedUser.setId('cometchat-uid-1');
unmutedUser.setType(MutedConversationType.ONE_ON_ONE);

const unmuteList = [unmutedUser];

await CometChatNotifications.unmuteConversations(unmuteList);
```

</TabItem>
<TabItem value="Java" label="Android">

```java
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.
// Instantiate the NotificationPreferences.
NotificationPreferences updatedPreferences = new NotificationPreferences();

// Instantiate the preferences that you want to update.
MutePreferences mutePreferences = new MutePreferences();

// Change mute preferences
mutePreferences.setDNDPreference(DNDOptions.ENABLED);

// Load the updates in the NotificationPreferences instance.
updatedPreferences.setMutePreferences(mutePreferences);

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences, new CometChat.CallbackListener<NotificationPreferences>() {
    @Override
    public void onSuccess(NotificationPreferences notificationPreferences) {
        // Updated notificationPreferences
    }

    @Override
    public void onError(CometChatException e) {
        // Something went wrong
    }
});

// Mute conversations
long until = System.currentTimeMillis() + 86400000; // Mute for 1 day

MutedConversation mutedUser = new MutedConversation();
mutedUser.setId("cometchat-uid-1");
mutedUser.setType(MutedConversationType.ONE_ON_ONE);
mutedUser.setUntil(until);

MutedConversation mutedGroup = new MutedConversation();
mutedGroup.setId("cometchat-guid-1");
mutedGroup.setType(MutedConversationType.GROUP);
mutedGroup.setUntil(until);

List<MutedConversation> allMuted = new ArrayList<>();
allMuted.add(mutedUser);
allMuted.add(mutedGroup);

CometChatNotifications.muteConversations(allMuted, new CometChat.CallbackListener<String>() {
    @Override
    public void onSuccess(String s) {
        // Mute success
    }

    @Override
    public void onError(CometChatException e) {
        // Mute failed
    }
});

// Unmute conversations
UnmutedConversation u = new UnmutedConversation();
u.setId("cometchat-uid-1");
u.setType(MutedConversationType.ONE_ON_ONE);

List<UnmutedConversation> unmuteList = new ArrayList<>();
unmuteList.add(u);

CometChatNotifications.unmuteConversations(unmuteList, new CometChat.CallbackListener<String>() {
    @Override
    public void onSuccess(String s) {
        // Unmute success
    }

    @Override
    public void onError(CometChatException e) {
        // Unmute failed
    }
});
```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
let updatedPreferences = CometChatNotifications.NotificationPreferences();

// Instantiate the preferences that you want to update.
let mutePreferences = CometChatNotifications.MutePreferences();

// Change mute preferences
mutePreferences.set(DNDPreference:.ENABLED)

// Load the updates in the NotificationPreferences instance.
updatedPreferences.set(mutePreferences: mutePreferences);

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences) { updatedPreferences in
    print("updatePreferences: \(updatedPreferences)")
} onError: { error in
    print("updatePreferences: \(error.errorCode) \(error.errorDescription)")
}

// Mute conversations
let untilInterval = Date().addingTimeInterval(86400) // Mute for 1 day
let until = Int(untilInterval.timeIntervalSince1970 * 1000) // Convert to milliseconds

var mutedUser = CometChatNotifications.MutedConversation()
mutedUser.id = "cometchat-uid-1"
mutedUser.type = .ONE_ON_ONE
mutedUser.until = until

var mutedGroup = CometChatNotifications.MutedConversation()
mutedGroup.id = "cometchat-guid-1"
mutedGroup.type = .GROUP
mutedGroup.until = until

let allMuted = [mutedUser, mutedGroup]

CometChatNotifications.muteConversations(allMuted) { success in
  print("muteConversations: \(success)")
} onError: { error in
  print("muteConversations: \(error.errorCode) \(error.errorDescription)")
}

// Unmute conversations

var unmutedUser = CometChatNotifications.UnmutedConversation()
unmutedUser.id = "cometchat-uid-1"
unmutedUser.type = .ONE_ON_ONE

let unmuteList = [unmutedUser]
CometChatNotifications.unmuteConversations(unmuteList) { success in
  print("unmuteConversations: \(success)")
} onError: { error in
  print("unmuteConversations: \(error.errorCode) \(error.errorDescription)")
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences
NotificationPreferences updatedPreferences = NotificationPreferences();

MutePreferences mutePreferences = MutePreferences(dnd: DNDOptions.DISABLED);

updatedPreferences.mutePreferences = mutePreferences;

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences,
    onSuccess: (preferencesAfterUpdate) {
  debugPrint("updatePreferences:success");
  // Use the preferencesAfterUpdate
}, onError: (e) {
  debugPrint("updatePreferences:error: ${e.toString()}");
});

// Mute conversations
int current = DateTime.now().millisecondsSinceEpoch;
int oneDayMillis = 24 * 60 * 60 * 1000;
int until = current + oneDayMillis;

MutedConversation mutedUser = MutedConversation(
    id: "cometchat-uid-1", type: MutedConversationType.ONE_ON_ONE, until: until);
MutedConversation mutedGroup = MutedConversation(
    id: "cometchat-guid-1", type: MutedConversationType.GROUP, until: until);

List<MutedConversation> mutedConversations = [];
mutedConversations.add(mutedUser);
mutedConversations.add(mutedGroup);

CometChatNotifications.muteConversations(
  mutedConversations,
  onSuccess: (response) {
    debugPrint("muteConversations:success ${response.toString()}");
  },
  onError: (e) {
    debugPrint("muteConversations:error ${e.toString()}");
  },
);

// Unmute conversations

UnmutedConversation unmutedUser = UnmutedConversation(id: "cometchat-uid-1", type: MutedConversationType.ONE_ON_ONE);
List<UnmutedConversation> unmuteList = [];
unmuteList.add(unmutedUser);

CometChatNotifications.unmuteConversations(unmuteList, onSuccess: (response) {
  debugPrint("unmuteConversations:success ${response.toString()}");
},onError: (e) {
  debugPrint("unmuteConversations:success ${e.toString()}");
});
```

</TabItem>
</Tabs>

### Notification schedule

#### Dashboard configuration

Notifications will be delivered based on the specified daily timetable, adhering to the user's local time zone.
Select **"None"** to disable Notifications for that day.
For instance, this can be applied to weekends, such as Saturday and Sunday.

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Day</th>
      <th>From</th>
      <th>To</th>
      <th>Can user override?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td>
        - 0 to 2359 **(Default: 0)**
        - None
      </td>
      <td>
        - Upto 2359 **(Default: 2359)**
      </td>
      <td rowspan="7">
        - **Yes (Default)** - *Users can configure a personalized notification schedule.*
        - No
      </td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>
        - 0 to 2359 **(Default: 0)**
        - None
      </td>
      <td>
        - Upto 2359 **(Default: 2359)**
      </td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td>
        - 0 to 2359 **(Default: 0)**
        - None
      </td>
      <td>
        - Upto 2359 **(Default: 2359)**
      </td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>
        - 0 to 2359 **(Default: 0)**
        - None
      </td>
      <td>
        - Upto 2359 **(Default: 2359)**
      </td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>
        - 0 to 2359 **(Default: 0)**
        - None
      </td>
      <td>
        - Upto 2359 **(Default: 2359)**
      </td>
    </tr>
    <tr>
      <td>Saturday</td>
      <td>
        - 0 to 2359 **(Default: 0)**
        - None
      </td>
      <td>
        - Upto 2359 **(Default: 2359)**
      </td>
    </tr>
    <tr>
      <td>Sunday</td>
      <td>
        - 0 to 2359 **(Default: 0)**
        - None
      </td>
      <td>
        - Upto 2359 **(Default: 2359)**
      </td>
    </tr>
  </tbody>
</table>

#### Client-side implementation

_Fetch schedule preferences_

`CometChatNotifications.fetchPreferences()` method retrieves the notification preferences saved by the user as an instance of `NotificationPreferences` class. If the user has not configured any preferences, the default preferences defined by the CometChat administrator via the dashboard will be utilized.

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
const preferences = await CometChatNotifications.fetchPreferences();

// Display schedule preferences
const mutePreferences = preferences.getMutePreferences();
const schedulePreference = mutePreferences.getSchedulePreference();

const mondaySchedule = schedulePreference.get(DayOfWeek.MONDAY);
const tuesdaySchedule = schedulePreference.get(DayOfWeek.TUESDAY);
const wednesdaySchedule = schedulePreference.get(DayOfWeek.WEDNESDAY);
const thursdaySchedule = schedulePreference.get(DayOfWeek.THURSDAY);
const fridaySchedule = schedulePreference.get(DayOfWeek.FRIDAY);
const saturdaySchedule = schedulePreference.get(DayOfWeek.SATURDAY);
const sundaySchedule = schedulePreference.get(DayOfWeek.SUNDAY);

// This action can be performed on other days of the week.
const mondayFrom = mondaySchedule?.getFrom();
const mondayTo = mondaySchedule?.getTo();
const mondayDnd = mondaySchedule?.getDND();
```

</TabItem>
<TabItem value="Java" label="Android">

```java
CometChatNotifications.fetchPreferences(new CometChat.CallbackListener<NotificationPreferences>() {
  @Override
  public void onSuccess(NotificationPreferences notificationPreferences) {
      // Display schedule preferences
      MutePreferences mutePreferences = notificationPreferences.getMutePreferences();
      Map<DayOfWeek, DaySchedule> scheduleMap = mutePreferences.getSchedulePreference();

      DaySchedule monday = scheduleMap.get(DayOfWeek.MONDAY);
      DaySchedule tuesday = scheduleMap.get(DayOfWeek.TUESDAY);
      DaySchedule wednesday = scheduleMap.get(DayOfWeek.WEDNESDAY);
      DaySchedule thrusday = scheduleMap.get(DayOfWeek.THURSDAY);
      DaySchedule friday = scheduleMap.get(DayOfWeek.FRIDAY);
      DaySchedule saturday = scheduleMap.get(DayOfWeek.SATURDAY);
      DaySchedule sunday = scheduleMap.get(DayOfWeek.SUNDAY);

      // This action can be performed on other days of the week.
      int mondayFrom = monday.getFrom();
      int mondayTo = monday.getTo();
      boolean mondayDnd = monday.getDnd();
  }

  @Override
  public void onError(CometChatException e) {
      // Something went wrong while fetching notification preferences
  }
});

```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
CometChatNotifications.fetchPreferences { notificationPreferences in
  // Display schedule preferences
  let mutePreferences = notificationPreferences.mutePreferences;

  let schedulePref = mutePreferences?.schedulePreference;

  let mondaySchedule = schedulePref?[.MONDAY];
  let tuesdaySchedule = schedulePref?[.TUESDAY];
  let wednesdaySchedule = schedulePref?[.WEDNESDAY];
  let thursdaySchedule = schedulePref?[.THURSDAY];
  let fridaySchedule = schedulePref?[.FRIDAY];
  let saturdaySchedule = schedulePref?[.SATURDAY];
  let sundaySchedule = schedulePref?[.SUNDAY];


  // This action can be performed on other days of the week.
  let mondayFrom = mondaySchedule?.from;
  let mondayTo = mondaySchedule?.to;
  let mondayDND = mondaySchedule?.dnd;
} onError: { error in
  // Something went wrong while fetching notification preferences.
  print("fetchPreferences: \(error.errorCode) \(error.errorDescription)");
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
CometChatNotifications.fetchPreferences(
      // Display schedule preferences
      MutePreferences? mutePreferences = notificationPreferences.mutePreferences;
      Map<DayOfWeek, DaySchedule>? scheduleMap = mutePreferences?.schedule;

      DaySchedule? mondaySchedule = scheduleMap?[DayOfWeek.MONDAY];
      DaySchedule? tuesdaySchedule = scheduleMap?[DayOfWeek.TUESDAY];
      DaySchedule? wednesdaySchedule = scheduleMap?[DayOfWeek.WEDNESDAY];
      DaySchedule? thursdaySchedule = scheduleMap?[DayOfWeek.THURSDAY];
      DaySchedule? fridaySchedule = scheduleMap?[DayOfWeek.FRIDAY];
      DaySchedule? saturdaySchedule = scheduleMap?[DayOfWeek.SATURDAY];
      DaySchedule? sundaySchedule = scheduleMap?[DayOfWeek.SUNDAY];

      // This action can be performed on other days of the week.
      int? mondayFrom = mondaySchedule?.from;
      int? mondayTo = mondaySchedule?.to;
      bool? mondayDnd = mondaySchedule?.dnd;
    },
    onError: (e) {
      debugPrint("fetchPreferences:error ${e.toString()}");
    });
```

</TabItem>
</Tabs>

_Update schedule preferences_

`CometChatNotifications.updatePreferences()` method is used to update a user's notification preferences. The "**override**" toggle defined in the dashboard is crucial when updating preferences. If any preference is non-overridable, the method doesn't generate an error; it instead returns the `NotificationPreferences` object with the updated values where overrides are allowed.

This functionality can be beneficial for temporarily superseding certain user preferences to ensure notifications for a specific event are delivered. Nonetheless, it is advisable to use this approach temporarily to avoid confusing users with unexpected changes to their notification settings.

It is unnecessary to specify all values; only set and save the preferences that have been changed.

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
const updatedPreferences = new NotificationPreferences();

// Instantiate the preferences that you want to update.
const mutePreferences = new MutePreferences();

// Change schedule preferences
const scheduleMap = new Map<DayOfWeek, DaySchedule>();
const mondaySchedule = new DaySchedule(2015, 2345, false);

scheduleMap.set(DayOfWeek.MONDAY, mondaySchedule);

mutePreferences.setSchedulePreference(scheduleMap);

// Load the updates in the NotificationPreferences instance.
updatedPreferences.setOneOnOnePreferences(oneOnOnePreferences);
updatedPreferences.setGroupPreferences(groupPreferences);
updatedPreferences.setMutePreferences(mutePreferences);

// Update the preferences and receive the udpated copy.
const preferences = await CometChatNotifications.updatePreferences(updatedPreferences);

```

</TabItem>
<TabItem value="Java" label="Android">

```java
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.
// Instantiate the NotificationPreferences.
NotificationPreferences updatedPreferences = new NotificationPreferences();

// Instantiate the preferences that you want to update.
MutePreferences mutePreferences = new MutePreferences();

// Change schedule preferences
Map scheduleMap = new ArrayMap<DayOfWeek, DaySchedule>();
DaySchedule mondaySchedule = new DaySchedule();
mondaySchedule.setFrom(2015);
mondaySchedule.setTo(2345);
mondaySchedule.setDnd(false);

scheduleMap.put(DayOfWeek.MONDAY, mondaySchedule);

mutePreferences.setSchedulePreference(scheduleMap);

// Load the updates in the NotificationPreferences instance.
updatedPreferences.setMutePreferences(mutePreferences);

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences, new CometChat.CallbackListener<NotificationPreferences>() {
    @Override
    public void onSuccess(NotificationPreferences notificationPreferences) {
        // Updated notificationPreferences
    }

    @Override
    public void onError(CometChatException e) {
        // Something went wrong
    }
});
```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
let updatedPreferences = CometChatNotifications.NotificationPreferences();

// Instantiate the preferences that you want to update.
let mutePreferences = CometChatNotifications.MutePreferences();

// Change schedule preferences
var dictionary = [CometChatNotifications.DayOfWeek:CometChatNotifications.DaySchedule]();
dictionary[.MONDAY] = CometChatNotifications.DaySchedule(from: 2015, to: 2345, dnd: false)
mutePreferences.set(schedulePreference: dictionary)

// Load the updates in the NotificationPreferences instance.
updatedPreferences.set(mutePreferences: mutePreferences);

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences) { updatedPreferences in
    print("updatePreferences: \(updatedPreferences)")
} onError: { error in
    print("updatePreferences: \(error.errorCode) \(error.errorDescription)")
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences
NotificationPreferences updatedPreferences = NotificationPreferences();

// Instantiate the preferences that you want to update.
MutePreferences mutePreferences = MutePreferences(dnd: DNDOptions.DISABLED);
Map<DayOfWeek, DaySchedule> scheduleMap = {};

DaySchedule mondaySchedule = DaySchedule(from: 2015, to: 2345, dnd: false);
scheduleMap[DayOfWeek.MONDAY] = mondaySchedule;

mutePreferences.schedule = scheduleMap;
updatedPreferences.mutePreferences = mutePreferences;

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences,
    onSuccess: (preferencesAfterUpdate) {
  debugPrint("updatePreferences:success");
  // Use the preferencesAfterUpdate
}, onError: (e) {
  debugPrint("updatePreferences:error: ${e.toString()}");
});

```

</TabItem>
</Tabs>

### Calls preferences

These preferences are configured on behalf of you for CometChat calls and cannot be modified. These don't apply for Email and SMS notifications. Only Push Notifications are triggered for:

1. Incoming calls
2. Missed calls
3. Busy calls
4. Ongoing calls
5. Call ended
6. Call rejected

### Reset preferences

`CometChatNotifications.resetPreferences()` method is used to reset the preferences for a user to their default state. The default state of preferences is defined by the CometChat administrator via the dashboard.

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
const defaultPreferences = await CometChatNotifications.resetPreferences();
```

</TabItem>
<TabItem value="Java" label="Android">

```java
CometChatNotifications.resetPreferences(new CometChat.CallbackListener<NotificationPreferences>() {
    @Override
    public void onSuccess(NotificationPreferences defaultPreferences) {
        // Display the defaultPreferneces.
    }

    @Override
    public void onError(CometChatException e) {
        // Something went wrong.
    }
});
```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
CometChatNotifications.resetPreferences { defaultPreferences in
    print("resetPreferences: defaultPreferences \(defaultPreferences)");
} onError: { error in
    print("resetPreferences: \(error.errorCode) \(error.errorDescription)");
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
CometChatNotifications.resetPreferences(onSuccess: (defaultPreferences) {
  debugPrint("resetPreferences:success");
  // defaultPreferences are available after reset.
},onError: (e) {
  debugPrint("resetPreferences:error ${e.toString()}");
});
```

</TabItem>
</Tabs>

## Email notification preferences

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Preference</th>
      <th>Values</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Notify for unread messages only</td>
      <td>
        - **true (Default)**
        - false
      </td>
      <td>
        - Email notifications are sent only when there are unread messages in a conversation.
        - When set to `false`, the notifications are sent irrespective of whether there are unread messages or not.
      </td>
    </tr>
    <tr>
      <td>The interval between two emails (in minutes)</td>
      <td>
        120
      </td>
      <td>
        - By default, the notifications are triggered after 120 minutes.
        - The minimum allowed value is 30.
        - The maximum is 1440 minutes (24 hours).
      </td>
    </tr>
    <tr>
      <td>Maximum emails per day</td>
      <td>
        20
      </td>
      <td>
        - By default, a maximum of 20 email notifications can be sent to a user on a given day.
        - The minimum value can be set to 1.
        - The maximum can be 30.
      </td>
    </tr>
    <tr>
      <td>Maximum emails per conversation per day</td>
      <td>
        2
      </td>
      <td>
        - By default, a maximum of 2 email notifications can be sent to a user for a given conversation on a given day.
        - The minimum value can be set to 1.
        - The maximum can be 30.
      </td>
    </tr>
  </tbody>
</table>

## SMS notification preferences

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Preference</th>
      <th>Values</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Notify for unread messages only</td>
      <td>
        - **true (Default)**
        - false
      </td>
      <td>
        - SMS notifications are sent only when there are unread messages in a conversation.
        - When set to `false`, the notifications are sent irrespective of whether there are unread messages or not.
      </td>
    </tr>
    <tr>
      <td>The interval between two emails (in minutes)</td>
      <td>
        120
      </td>
      <td>
        - By default, the notifications are triggered after 120 minutes.
        - The minimum allowed value is 30.
        - The maximum is 1440 minutes (24 hours).
      </td>
    </tr>
    <tr>
      <td>Maximum emails per day</td>
      <td>
        20
      </td>
      <td>
        - By default, a maximum of 20 SMS notifications can be sent to a user on a given day.
        - The minimum value can be set to 1.
        - The maximum can be 30.
      </td>
    </tr>
    <tr>
      <td>Maximum emails per conversation per day</td>
      <td>
        2
      </td>
      <td>
        - By default, a maximum of 2 SMS notifications can be sent to a user for a given conversation on a given day.
        - The minimum value can be set to 1.
        - The maximum can be 30.
      </td>
    </tr>
  </tbody>
</table>

## Common templates and sounds

Templates are designed to specify the content displayed in notifications on the user's device for different events.

Templates incorporate `placeholders`, which reference specific pieces of information determined by properties from the event.

**For example**, New message event has the following structure:

```
{
  "data": {
    "id": "17",
    "conversationId": "group_cometchat-guid-1",
    "sender": "cometchat-uid-2",
    "receiverType": "group",
    "receiver": "cometchat-guid-1",
    "category": "message",
    "type": "text",
    "data": {
      "text": "Hello! How are you?",
      "entities": {
        "sender": {
          "entity": {
            "uid": "cometchat-uid-2",
            "name": "George Alan",
            "role": "default",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
            "status": "available",
            "lastActiveAt": 1707901272
          },
          "entityType": "user"
        },
        "receiver": {
          "entity": {
            "guid": "cometchat-guid-1",
            "icon": "https://assets.cometchat.io/sampleapp/v2/groups/cometchat-guid-1.webp",
            "name": "Hiking Group",
            "type": "public",
            "owner": "cometchat-uid-1",
            "createdAt": 1706014061,
            "conversationId": "group_cometchat-guid-1",
            "onlineMembersCount": 3
          },
          "entityType": "group"
        }
      },
    },
    "sentAt": 1707902030,
    "updatedAt": 1707902030
  }
}
```

The sender's name is accessible via `data.entities.sender.name`, so the placeholder for the sender's name will be `{{message.data.entities.sender.name}}`. This `placeholder` is substituted within the template with the actual name of the sender aka the `substitution value`.

As an administrator, you can configure:

1. **Default templates** - Use these templates to display previews by leveraging the information contained in the event.
2. **Privacy templates** - Employ these templates to present generic content in the notification.

### Privacy setting

#### Dashboard configuration

Configure which template will be used for displaying the content of the notifications displayed on user's devices.
The available preferences are:

1. Use default template - Enforces the use of default templates for all the users.
2. Use privacy template - Enforces the use of privacy templates for all the users.
3. **Use default templates with user privacy override (Default)** - Uses default templates by default, but allows the users to enable privacy to hide the previews.

#### Client-side implementation

_Fetch privacy setting_

The method `CometChatNotifications.fetchPreferences()` retrieves the notification preferences saved by the user as an instance of `NotificationPreferences` class. If the user has not configured any preferences, the default preferences defined by the CometChat administrator via the dashboard will be utilized.

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
const preferences = await CometChatNotifications.fetchPreferences();

// Display a toggle for use privacy option TODO
const usePrivacyTemplate = preferences.getUsePrivacyTemplate();
```

</TabItem>
<TabItem value="Java" label="Android">

```java
CometChatNotifications.fetchPreferences(new CometChat.CallbackListener<NotificationPreferences>() {
  @Override
  public void onSuccess(NotificationPreferences notificationPreferences) {
      // Display a toggle for use privacy option
      boolean usePrivacyTemplate = notificationPreferences.getUsePrivacyTemplate();
  }

  @Override
  public void onError(CometChatException e) {
      // Something went wrong while fetching notification preferences
  }
});
```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
CometChatNotifications.fetchPreferences { notificationPreferences in
  // Display a toggle for use privacy option
  let usePrivacyTemplate = notificationPreferences.usePrivacyTemplate;

} onError: { error in
  // Something went wrong while fetching notification preferences.
  print("fetchPreferences: \(error.errorCode) \(error.errorDescription)");
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
CometChatNotifications.fetchPreferences(
    onSuccess: (notificationPreferences) {
      // Display a toggle for use privacy option
      bool? usePrivacyTemplate = notificationPreferences.usePrivacyTemplate;

    },
    onError: (e) {
      debugPrint("fetchPreferences:error ${e.toString()}");
    });
```

</TabItem>
</Tabs>

_Update privacy setting_

`CometChatNotifications.updatePreferences()` method is used to update a user's notification preferences. The "**override**" toggle defined in the dashboard is crucial when updating preferences. If any preference is non-overridable, the method doesn't generate an error; it instead returns the `NotificationPreferences` object with the updated values where overrides are allowed.

This functionality can be beneficial for temporarily superseding certain user preferences to ensure notifications for a specific event are delivered. Nonetheless, it is advisable to use this approach temporarily to avoid confusing users with unexpected changes to their notification settings.

It is unnecessary to specify all values; only set and save the preferences that have been changed.

<Tabs>
<TabItem value="Javascript" label="JavaScript">

```javascript
// This is applicable for web, React native, Ionic cordova
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
const updatedPreferences = new NotificationPreferences();

// To update the preference for privacy template
updatedPreferences.setUsePrivacyTemplate(true);

// Update the preferences and receive the udpated copy.
const notificationPreferences = await CometChatNotifications.updatePreferences(
  updatedPreferences
);
```

</TabItem>
<TabItem value="Java" label="Android">

```java
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.
// Instantiate the NotificationPreferences.
NotificationPreferences updatedPreferences = new NotificationPreferences();

// To update the preference for privacy template
updatedPreferences.setUsePrivacyTemplate(true);

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences, new CometChat.CallbackListener<NotificationPreferences>() {
    @Override
    public void onSuccess(NotificationPreferences notificationPreferences) {
        // Updated notificationPreferences
    }

    @Override
    public void onError(CometChatException e) {
        // Something went wrong
    }
});
```

</TabItem>
<TabItem value="Swift" label="iOS">

```swift
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences.
let updatedPreferences = CometChatNotifications.NotificationPreferences();

// To update the preference for privacy template
updatedPreferences.set(usePrivacyTemplate: true)

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences) { prefs in
    print("updatePreferences: \(prefs)")
} onError: { error in
    print("updatePreferences: \(error.errorCode) \(error.errorDescription)")
}
```

</TabItem>
<TabItem value="Dart" label="Flutter">

```dart
// The example demonstrates modifying all values; however, modifying only the changed values is sufficient.

// Instantiate the NotificationPreferences
NotificationPreferences updatedPreferences = NotificationPreferences();

// To update the preference for privacy template
updatedPreferences.usePrivacyTemplate = true;

// Update the preferences.
CometChatNotifications.updatePreferences(updatedPreferences,
    onSuccess: (preferencesAfterUpdate) {
  debugPrint("updatePreferences:success");
  // Use the preferencesAfterUpdate
}, onError: (e) {
  debugPrint("updatePreferences:error: ${e.toString()}");
});

```

</TabItem>
</Tabs>

### Text message templates

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Template for</th>
      <th>Default template values</th>
      <th>Privacy template values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title (One-on-one)</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
    </tr>
    <tr>
      <td>Title (Group)</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
    </tr>
    <tr>
      <td>Body</td>
      <td>`{{message.data.text}}`</td>
      <td>New message</td>
    </tr>
  </tbody>
</table>

### Media message templates

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Template for</th>
      <th>Default template values</th>
      <th>Privacy template values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title (One-on-one)</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
    </tr>
    <tr>
      <td>Title (Group)</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
    </tr>
    <tr>
      <td>Body for Image</td>
      <td>📷 Has sent an image</td>
      <td>New image message</td>
    </tr>
    <tr>
      <td>Body for Audio</td>
      <td>🔈 Has sent an audio</td>
      <td>New audio message</td>
    </tr>
    <tr>
      <td>Body for Audio</td>
      <td>🎥 Has sent a video</td>
      <td>New video message</td>
    </tr>
    <tr>
      <td>Body for Audio</td>
      <td>📄 Has sent a file</td>
      <td>New file message</td>
    </tr>
  </tbody>
</table>

### Custom message templates

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Template for</th>
      <th>Default template values</th>
      <th>Privacy template values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title (One-on-one)</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
    </tr>
    <tr>
      <td>Title (Group)</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
    </tr>
     <tr>
      <td>Body</td>
      <td>`{{message.data.text}}`</td>
      <td>`{{message.data.text}}`</td>
    </tr>
    <tr>
      <td>Body (Fallback)</td>
      <td>New message</td>
      <td>New message</td>
    </tr>
  </tbody>
</table>

**Note:** The "Body (Fallback)" value is utilized when any placeholders within the "Body" fail to resolve to an appropriate substitution value.

**For example**, if `{{message.data.text}}` in the aforementioned scenario evaluates to `null` or `undefined`, the "Body (Fallback)" value will be utilized.

Ideally, the "Body (Fallback)" value should not contain any placeholders to prevent additional resolution failures.

### Interactive form templates

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Template for</th>
      <th>Default template values</th>
      <th>Privacy template values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title (One-on-one)</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
    </tr>
    <tr>
      <td>Title (Group)</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
    </tr>
     <tr>
      <td>Body</td>
      <td>`{{data.interactiveData.title}}`</td>
      <td>New message</td>
    </tr>
  </tbody>
</table>

### Interactive card templates

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Template for</th>
      <th>Default template values</th>
      <th>Privacy template values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title (One-on-one)</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
    </tr>
    <tr>
      <td>Title (Group)</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
    </tr>
     <tr>
      <td>Body</td>
      <td>`{{data.interactiveData.title}}`</td>
      <td>New message</td>
    </tr>
  </tbody>
</table>

### Interactive scheduler templates

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Template for</th>
      <th>Default template values</th>
      <th>Privacy template values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title (One-on-one)</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
    </tr>
    <tr>
      <td>Title (Group)</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
    </tr>
     <tr>
      <td>Body</td>
      <td>New invite</td>
      <td>New invite</td>
    </tr>
  </tbody>
</table>

### Custom Interactive message templates

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Template for</th>
      <th>Default template values</th>
      <th>Privacy template values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title (One-on-one)</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}`</td>
    </tr>
    <tr>
      <td>Title (Group)</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
      <td>`{{message.data.entities.sender.entity.name}}` @ `{{message.data.entities.receiver.entity.name}}`</td>
    </tr>
     <tr>
      <td>Body</td>
      <td>New message</td>
      <td>New message</td>
    </tr>
  </tbody>
</table>

### Sounds

The sound files must be included within the app's bundle. These values are set within the notification payload as values of the "sound" field.

**Sound for Call Notifications:** Specify the name of the sound file you wish to play for call notifications.

**Sound for Chat Notifications:** Specify the name of the sound file you wish to play for chat notifications.

## Email notification templates

You can use a default template or a privacy template in case you consider the information to be displayed as sensitive.
The data available for email's subject template is as follows:
<Tabs>
<TabItem value="JSON" label="For one-on-one conversation">

```JSON
{
  "to": {
    "uid": "cometchat-uid-1",
    "name": "Andrew Joseph",
    "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp"
  },
  "messages": [
    {
      "sender": {
        "uid": "cometchat-uid-4",
        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
        "name": "Susan Marie"
      },
      "message": "Are we meeting on this weekend?"
    },
    {
      "sender": {
        "uid": "cometchat-uid-4",
        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
        "name": "Susan Marie"
      },
      "message": "📷 Has shared an image"
    }
  ],
  "senderDetails": {
    "uid": "cometchat-uid-4",
    "name": "Susan Marie",
    "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp"
  }
}
```

</TabItem>
<TabItem value="JSONP" label="For group conversation">

```JSON
{
  "to": {
    "uid": "cometchat-uid-1",
    "name": "Andrew Joseph",
    "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp"
  },
  "messages": [
    {
      "sender": {
        "uid": "cometchat-uid-4",
        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
        "name": "Susan Marie"
      },
      "message": "Hello all! What's up?"
    },
    {
      "sender": {
        "uid": "cometchat-uid-4",
        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
        "name": "Susan Marie"
      },
      "message": "This is the place I was thinking about"
    }
  ],
  "groupDetails": {
    "guid": "cometchat-guid-1",
    "name": "Hiking Group",
    "icon": "https://assets.cometchat.io/sampleapp/v2/groups/cometchat-guid-1.webp"
  }
}
```

</TabItem>
</Tabs>

Considering the above data, an email's subject can be formatted as follows:

<table border='1' style={{ borderCollapse:'collapse'}}>
  <thead>
    <tr>
      <th>Subject for</th>
      <th>Template</th>
      <th>Final subject</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Group notification
      </td>
      <td>
        Hello `{{to.name}}`! You have `{{messages.length}}` message(s) in `{{groupDetails.name}}`.
      </td>
      <td>
        Hello **Andrew Joseph**! You have **2** message(s) in **Hiking Group**.
      </td>
    </tr>
    <tr>
      <td>
        One-on-one notification
      </td>
      <td>
        Hello `{{to.name}}`! You have `{{messages.length}}` message(s) from `{{senderDetails.name}}`.
      </td>
      <td>
        Hello **Andrew Joseph**! You have **2** message(s) from **Susan Marie**.
      </td>
    </tr>
  </tbody>
</table>

## SMS notification templates

You can use a default template or a privacy template in case you consider the information to be displayed as sensitive.
The data available for SMS template is as follows:
<Tabs>
<TabItem value="JSON" label="For one-on-one conversation">

```JSON
{
  "to": {
    "uid": "cometchat-uid-1",
    "name": "Andrew Joseph",
    "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp"
  },
  "messages": [
    {
      "sender": {
        "uid": "cometchat-uid-4",
        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
        "name": "Susan Marie"
      },
      "message": "Are we meeting on this weekend?"
    },
    {
      "sender": {
        "uid": "cometchat-uid-4",
        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
        "name": "Susan Marie"
      },
      "message": "📷 Has shared an image"
    }
  ],
  "senderDetails": {
    "uid": "cometchat-uid-4",
    "name": "Susan Marie",
    "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp"
  }
}
```

</TabItem>
<TabItem value="JSONP" label="For group conversation">

```JSON
{
  "to": {
    "uid": "cometchat-uid-1",
    "name": "Andrew Joseph",
    "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp"
  },
  "messages": [
    {
      "sender": {
        "uid": "cometchat-uid-4",
        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
        "name": "Susan Marie"
      },
      "message": "Hello all! What's up?"
    },
    {
      "sender": {
        "uid": "cometchat-uid-4",
        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
        "name": "Susan Marie"
      },
      "message": "This is the place I was thinking about"
    }
  ],
  "groupDetails": {
    "guid": "cometchat-guid-1",
    "name": "Hiking Group",
    "icon": "https://assets.cometchat.io/sampleapp/v2/groups/cometchat-guid-1.webp"
  }
}
```

</TabItem>
</Tabs>

Considering the above data, an SMS can be formatted as follows:

<table border='1' style={{ borderCollapse:'collapse'}}>
  <thead>
    <tr>
      <th>SMS for</th>
      <th>Template</th>
      <th>Final content</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Group notification
      </td>
      <td>
        You've received `{{messages.length}}` message(s) in `{{groupDetails.name}}`! Read them at https://your-website.com.
      </td>
      <td>
        You've received **2** message(s) in Hiking Group! Read them at https://your-website.com.
      </td>
    </tr>
    <tr>
      <td>
        One-on-one notification
      </td>
      <td>
        You've received `{{messages.length}}` message(s) from `{{senderDetails.name}}`! Read them at https://your-website.com/chat.
      </td>
      <td>
        You've received **2** message(s) from **Susan Marie**! Read them at https://your-website.com/chat.
      </td>
    </tr>
  </tbody>
</table>

:::info
Replace https://your-website.com/chat with the URL of your actual website.
:::
