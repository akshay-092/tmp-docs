---
sidebar_position: 4
title: Join a Group
slug: /join-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Join a Group

In order to start participating in group conversations, you will have to join a group. You can do so using the `joinGroup()` method.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
String GUID = "GUID";
String groupType = CometChatGroupType.public;
String password = "";

CometChat.joinGroup(GUID, groupType, password: password,
                    onSuccess: (Group group) {
                      debugPrint("Group Joined Successfully : $group ");
                    }, onError: (CometChatException e) {
                      debugPrint("Group Joining failed with exception: ${e.message}");
    });
  ```
</TabItem>
</Tabs>



The `joinGroup()` method takes the below parameters

| Parameter | Description | 
| ---- | ---- | 
| `GUID` | The GUID of the group you would like to join | 
| `groupType` | Type of the group. CometChat provides 3 types of groups viz. 1.CometChatGroupType._public_ (public).                  2.CometChatGroupType._password_ (password)                3.CometChatGroupType._private_ (private) | 
| `password` | Password is mandatory in case of a password protected group. | 


Once you have joined a group successfully, you can send and receive messages in that group.

CometChat keeps a track of the groups joined and you do not need to join the group everytime you want to communicate in the group.

You can identify if a group is joined using the `hasJoined` parameter in the `Group` object.

## Real-time Group Member Joined Events

_In other words, as a member of a group, how do I know if someone joins the group when my app is running?_

If a user joins any group, the members of the group receive a real-time event in the `onGroupMemberJoined()` method of the `GroupListener` class.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
class Class_Name  with GroupListener {

  //CometChat.addGroupListener("group_Listener_id", this);
  @override
  void onGroupMemberJoined(Action action, User joinedUser, Group joinedGroup) {
    debugPrint("onGroupMemberJoined");
}
  ```
</TabItem>
</Tabs>



## Missed Group Member Joined Events

_In other words, as a member of a group, how do I know if someone joins the group when my app is not running?_

When you retrieve the list of previous messages if a member has joined any group that the logged-in user is a member of, the list of messages will contain an `Action` message. An `Action` message is a sub-class of `BaseMessage` class.

For the group member joined event, in the `Action` object received, the following fields can help you get the relevant information-

1. `action` - `joined`
2. `actionBy` - User object containing the details of the user who joined the group
3. `actionFor`- Group object containing the details of the group the user has joined