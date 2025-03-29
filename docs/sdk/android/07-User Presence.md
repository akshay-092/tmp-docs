---
sidebar_position: 7
title: User Presence
slug: /user-presence
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

User Presence helps us understand if a user is available to chat or not.

## Real-time Presence

_In other words, as a logged-in user, how do I know if a user is online or offline?_

Based on the settings provided in the `AppSettings` class while initializing CometChat using the `init()` method, the logged-in user will receive the presence for the other users in the app.

In the `AppSettings` class, you can set the type of presence you wish to receive.

For presence subscription, the `AppSettingsBuilder` provides 3 methods :

- `subscribePresenceForAllUsers()` - This will inform the logged-in user when any user in the app comes online or goes offline.
- `subscribePresenceForRoles(List<String> roles)` - This will inform the logged-in user, only when the users with the specified roles come online or go offline.
- `subscribePresenceForFriends()` - This will inform the logged-in user when any of their friends come online or go offline.

If none of the above methods are set, no presence will be sent to the logged-in user.

For every activity or fragment you wish to receive user events in, you need to register the `UserListener` using the `addUserListener()` method.

We suggest adding the listener in the `onResume()` method of the activity or the fragment where you wish to receive these events in.

<Tabs>
<TabItem value="Java" label="Java">

  ```java
  private String listenerID = "UNIQUE_LISTENER_ID";

  CometChat.addUserListener(listenerID, new CometChat.UserListener() {
    @Override public void onUserOnline(User user) {
      Log.d(TAG, user.getName() + "is online.");
    }
    @Override public void onUserOffline(User user) {
      Log.d(TAG, user.getName() + "is offline.");
    }
  });   
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
  val listenerID:String = "UNIQUE_LISTENER_ID"

  CometChat.addUserListener(listenerID,object :CometChat.UserListener(){
    override fun onUserOffline(user: User?) {
      Log.d(TAG, user?.name + "is offline.")
    }
    override fun onUserOnline(user: User?) {
      Log.d(TAG, user?.name + "is online.")
    }
  })
  ```
</TabItem>
</Tabs>






| Parameter    | Description                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------- |
| `listenerID` | An ID that uniquely identifies that listener. We recommend using the activity or fragment name. |


You will receive an object of the `User` class in the listener methods.

We recommend you remove the listener once the activity or fragment is not in use. We suggest adding this method in the `onPause()` method of the activity or the fragment where you wish to receive these events in.

<Tabs>
<TabItem value="Java" label="Java">

  ```java
  private String listenerID = "UNIQUE_LISTENER_ID";

  CometChat.removeUserListener(listenerID);     
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
  val listenerID:String = "UNIQUE_LISTENER_ID"

  CometChat.removeUserListener(listenerID)   
  ```
</TabItem>
</Tabs>


## User List Presence

_In other words, as a logged-in user, when I retrieve the user list, how do I know if a user is online/offline?_

When you [retrieve the list of users](retrieve-users), in the [User](user-management#user-class) object, you will receive 2 keys:

1. `status` - This will hold either of the two values :

- `online` - This indicates that the user is currently online and available to chat.
- `offline` - This indicates that the user is currently offline and is not available to chat.

2. `lastActiveAt` - In case the user is offline, this field holds the timestamp of the time when the user was last online. This can be used to display a **Last seen** for that user.

