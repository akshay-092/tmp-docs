---
sidebar_position: 3
title: Update a Group
slug: /update-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Update Group

_In other words, as a group owner, how can I update the group details?_

You can update the existing details of the group using the `updateGroup()` method.


<Tabs>
<TabItem value="Update Group" label="Update Group">

  ```javascript
var GUID = "GUID";
var groupName = "Hello Group";
var groupType = CometChat.GROUP_TYPE.PUBLIC;
var group = new CometChat.Group(GUID, groupName, groupType);

CometChat.updateGroup(group).then(
  group => {
    console.log("Groups details updated successfully:", group);
  }, error => {
    console.log("Group details update failed with exception:", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
var GUID: string = "GUID";
var groupName: string = "Hello Group!";
var groupType: string = CometChat.GROUP_TYPE.PUBLIC;

var group: CometChat.Group = new CometChat.Group(GUID, groupName, groupType);

CometChat.updateGroup(group).then(
    (group: CometChat.Group) => {
        console.log("Group details updated successfully:", group);
    }, (error: CometChat.CometChatException) => {
        console.log("Group details update failed with exception:", error);
    }
);
  ```
</TabItem>
</Tabs>


This method takes an instance of the `Group` class as a parameter which should contain the data that you wish to update.

| Parameter | Description | 
| ---- | ---- | 
| `group` | an instance of class `Group` | 


After a successful update of the group, you will receive an instance of `Group` class containing update information of the group.

For more information on the `Group` class, please check [here](create-group#group-class).