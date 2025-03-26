---
sidebar_position: 6
title: Delete a Group
slug: /groups-delete-group
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Delete a Group

To delete a group you need to use the `deleteGroup()` method. The user must be an `Admin` of the group they are trying to delete.

<Tabs>
<TabItem value="Delete Group" label="Delete Group">

  ```javascript
var GUID = "GUID";

CometChat.deleteGroup(GUID).then(
  response => {
    console.log("Groups deleted successfully:", response);
  }, error => {
    console.log("Group delete failed with exception:", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
var GUID: string = "GUID";

CometChat.deleteGroup(GUID).then(
    (response: boolean) => {
        console.log("Group deleted successfully:", response);
    }, (error: CometChat.CometChatException) => {
        console.log("Group delete failed with exception:", error);
    }
);
  ```
</TabItem>
</Tabs>



The `deleteGroup()` method takes the following parameters:

| Parameter | Description | 
| ---- | ---- | 
| `GUID` | The GUID of the group you would like to delete | 
