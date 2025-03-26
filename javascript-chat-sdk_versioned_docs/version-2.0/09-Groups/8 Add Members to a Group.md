---
sidebar_position: 8
title: Add Members to a Group
slug: /groups-add-members-to-group
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Add Members to Group

You can add members to the group using the `addMembersToGroup()` method. This method takes the below parameters:

1. `GUID`  - GUID of the group the members are to be added to.
2. `members` - This is a list of `GroupMember` objects. In order to add members, you need to create an object of the `GroupMember` class. The UID and the scope of the   `GroupMember` are mandatory.
3. `bannedMembers` - This is the list of `UID's` that need to be banned from the Group. This can be set to `null` if there are no members to be banned.

<Tabs>
<TabItem value="Add Members to Group" label="Add Members to Group">

  ```javascript
let GUID = "GUID";
let UID =  "UID";
let membersList = [
  new CometChat.GroupMember(UID, CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT)
];

CometChat.addMembersToGroup(GUID, membersList, []).then(
  response => {
    console.log("response", response);
  }, error => {
    console.log("Something went wrong", error);
  }
);
  ```
</TabItem>

</Tabs>



It will return a Array which will contain the `UID` of the users and the value will either be `success` or an error message describing why the operation to add the user to the group.

## Real-Time Group Member Added Events

_In other words, as a member of a group, how do I know when someone is added to the group when my app is running?_

:::info
 When a group member is added by another member, this event is triggered. When a user joins a group on their own, the joined event is triggered.
:::

To receive real-time events whenever a new member is added to a group, you need to implement the  `onMemberAddedToGroup()` methods of the `GroupListener` class.

`onMemberAddedToGroup()` - This method is triggered when any user is added to the group so that the logged in user is informed of the other members added to the group.

<Tabs>
<TabItem value="Group Listener" label="Group Listener">

  ```javascript
var listenerID = "UNIQUE_LISTENER_ID";

CometChat.addGroupListener(
  listenerID,
  new CometChat.GroupListener({
    onMemberAddedToGroup: (message, userAdded, userAddedBy, userAddedIn) => {
      console.log("User joined", {message, userAdded, userAddedBy, userAddedIn});
    }
  })
);
  ```
</TabItem>

</Tabs>





## Member Added to Group event in Message History

_In other words, as a member of a group, how do I know when someone is added to the group when my app is not running?_

When you retrieve the list of previous messages if a member has been added to any group that the logged-in user is a member of, the list of messages will contain an `Action` message. An `Action` message is a sub-class of `BaseMessage` class.

For the group member added event, in the `Action` object received, the following fields can help you get the relevant information-

1. `action` - `added`
2. `actionOn` - User object containing the details of the user who was added to the group
3. `actionBy` - User object containing the details of the user who added the member to the group
4. `actionFor` - Group object containing the details of the group to which the member was added