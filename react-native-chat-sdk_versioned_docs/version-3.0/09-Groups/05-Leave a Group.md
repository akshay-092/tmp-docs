---
sidebar_position: 5
title: Leave a Group
slug: /groups-leave-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Leave a Group

In order to stop receiving updates and messages for any particular joined group, you will have to leave the group using the `leaveGroup()` method.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
var GUID = "GUID"; // guid of the group to join

CometChat.leaveGroup(GUID).then(
  hasLeft => {
    console.log("Group left successfully:", hasLeft);
  }, error => {
    console.log("Group leaving failed with exception:", error);
  }
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
var GUID: string = "GUID";

CometChat.leaveGroup(GUID).then(
    (hasLeft: boolean) => {
        console.log("Group left successfully:", hasLeft);
    }, (error: CometChat.CometChatException) => {
        console.log("Group leaving failed with exception:", error);
    }
);
```

</TabItem>
</Tabs>



| Parameter | Description | 
| ---- | ---- | 
| `GUID` | The UID of the group you would like to leave | 


Once a group is left, the user will no longer receive any updates or messages pertaining to the group.

## Real-time Group Member Left Events

_In other words, as a member of a group, how do I know if someone has left it?_

If a user leaves any group, The members of the group receive a real-time event in the `onGroupMemberLeft()` method of the `GroupListener` class.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
CometChat.addGroupListener(
    "UNIQUE_LISTENER_ID",
    new CometChat.GroupListener({
        onGroupMemberLeft: (message, leavingUser, group) => {
            console.log("User left", { message, leavingUser, group });
        }
    })
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
CometChat.addGroupListener(
    "UNIQUE_LISTENER_ID",
    new CometChat.GroupListener({
        onGroupMemberLeft: (message: CometChat.Action, leavingUser: CometChat.User, group: CometChat.Group) => {
            console.log("User left", { message, leavingUser, group });
        }
    })
);
```

</TabItem>
</Tabs>



## Missed Group Member Left Events

_In other words, as a member of a group, how do I know if someone has left it when my app is not running?_

When you retrieve the list of previous messages if a member has left any group that the logged-in user is a member of, the list of messages will contain an `Action` message. An `Action` message is a sub-class of `BaseMessage` class.

For the group member left event, in the `Action` object received, the following fields can help you get the relevant information-

1. `action` - `left`
2. `actionBy` - User object containing the details of the user who left the group
3. `actionFor` - Group object containing the details of the group the user has left