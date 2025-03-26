---
sidebar_position: 6
title: Delete a Group
slug: /groups-delete-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Delete Group

To delete a group you need to use the `deleteGroup()` method. The user must be an **Admin** of the group they are trying to delete.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
String GUID = "GUID";

CometChat.deleteGroup(GUID, onSuccess: (String message) {
  debugPrint("Deleted Group Successfully : $message ");
}, onError: (CometChatException e) {
  debugPrint("Delete Group failed with exception: ${e.message}");
});
```

</TabItem>
</Tabs>



The `deleteGroup()` method takes the following parameters:

| Parameter | Description | 
| ---- | ---- | 
| `GUID` | The GUID of the group you would like to delete | 
