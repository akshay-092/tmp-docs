---
sidebar_position: 8
title: User Presence
slug: /user-presence
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

User Presence helps us understand if a user is available to chat or not.

## Real-time Presence

_In other words, as a logged-in user, how do I know if a user is online or offline?_

Based on the settings provided in the AppSettings class while initializing the SDK using the `init()` method, the logged-in user will receive the presence for the other users in the app.

In the `AppSettings` class, you can set the type of Presence you wish to receive for that particular session of the app.

For presence subscription, the AppSettingsBuilder provides 3 methods :

- `subscribePresenceForAllUsers()` - This will inform the logged-in user when any user in the app comes online or goes offline.
- `subscribePresenceForRoles(Array roles)` - This will inform the logged-in user, only when the users with the specified roles come online or go offline.
- `subscribePresenceForFriends()` - This will inform the logged-in user, only when either of his friends come online or go offline.

If none of the above methods are used, no presence will be sent to the logged-in user.

You need to register the `UserListener` using the `addUserListener()` method where ever you wish to receive these events in.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let listenerID = "UNIQUE_LISTENER_ID";

CometChat.addUserListener(
  listenerID,
  new CometChat.UserListener({
    onUserOnline: onlineUser => {
      console.log("On User Online:", { onlineUser });
    },
    onUserOffline: offlineUser => {
      console.log("On User Offline:", { offlineUser });
    }
  })
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let listenerID: string = "UNIQUE_LISTENER_ID";

CometChat.addUserListener(
    listenerID,
    new CometChat.UserListener({
        onUserOnline: (onlineUser: CometChat.User) => {
            console.log("On User Online:", { onlineUser });
        },
        onUserOffline: (offlineUser: CometChat.User) => {
            console.log("On User Offline:", { offlineUser });
        }
    })
);
```

</TabItem>
</Tabs>



| Parameter | Description | 
| ---- | ---- | 
| `listenerID` | An ID that uniquely identifies that listener. | 


You will receive an object of the `User` class in the listener methods.

We recommend you remove the listener once the activity or view is not in use. We suggest adding this method when not in use.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let listenerID = "UNIQUE_LISTENER_ID";
CometChat.removeUserListener(listenerID);
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let listenerID: string = "UNIQUE_LISTENER_ID";
CometChat.removeUserListener(listenerID);
```

</TabItem>
</Tabs>



## User List Presence

_In other words, as a logged-in user, when I retrieve the user list, how do I know if a user is online/offline?_

When you fetch the list of users, in the [User](./users-user-management#user-class) object, you will receive 2 fields

1. `status` - This will hold either of the two values :

- online - This indicates that the user is currently online and available to chat.
- offline - This indicates that the user is currently offline and is not available to chat.

2. `lastActiveAt` - in case the user is offline, this field holds the timestamp of the time when the user was last online. This can be used to display the Last seen of the user if need be.