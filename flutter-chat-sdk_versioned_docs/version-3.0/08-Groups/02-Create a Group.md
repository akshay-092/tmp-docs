---
sidebar_position: 2
title: Create a Group
slug: /groups-create-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


_In other words, as a logged-in user, how do I create a public, private or password-protected group?_

You can create a group using `createGroup()` method. This method takes a `Group` object as input.

The `groupType` needs to be either of the below 3 values:

1.`CometChatGroupType.`_public_ (public)

2.`CometChatGroupType.`_password_ (password)

3.`CometChatGroupType.`_private_ (private)

<Tabs>
<TabItem value="1" label="Dart">

```Dart
String GUID = "GUID";
     String groupName = "Hello Group!";
     String groupType = CometChatGroupType.public;
     String password = "";

await CometChat.createGroup(GUID , groupName, groupType ,password: password,
   onSuccess: (Group group){
     debugPrint("Group Created Successfully : $group ");
   },onError: (CometChatException e) {
     debugPrint("Group Creation failed with exception: ${e.message}");
   });
```

</TabItem>
</Tabs>



The `createGroup()` method takes the following parameters:

| Parameter | Description | 
| ---- | ---- | 
| `group` | An instance of `Group` class | 


After the successful creation of the group, you will receive an instance of `Group` class which contains all the information about the particular group.

:::warning Warning

GUID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.

:::

## Group Class

| Field | Editable | Information | 
| ---- | ---- | ---- | 
| guid | Needs to be specified at group creation. Cannot be edited later | A unique identifier for a group | 
| name | Yes | Name of the group | 
| type | No | Type of the group: Can be <br/>1. Public<br/>2. Password<br/>3. Private | 
| password | No | Password for the group in case the group is of type password. | 
| icon | Yes | An URL to group icon | 
| description | Yes | Description about the group | 
| owner | Yes | UID of the owner of the group. | 
| metadata | Yes | Additional data for the group as JSON | 
| createdAt | No | The unix timestamp of the time the group was created | 
| updatedAt | No | The unix timestamp of the time the group was last updated | 
| hasJoined | No | A boolean to determine if the logged in user is a member of the group. | 
| joinedAt | No | The unix timestamp of the time the logged in user joined the group. | 
| scope | Yes | Scope of the logged in user. Can be:<br/>1. Admin<br/>2. Moderator<br/>3. Participant | 
| membersCount | No | The number of members in the groups | 
| tags | Yes | A list of tags to identify specific groups. | 
