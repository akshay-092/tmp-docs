---
sidebar_position: 3
title: Update a Group
slug: /groups-update-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


_In other words, as a group owner, how can I update the group details?_

You can update the existing details of the group using the `updateGroup()` method.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
String GUID = "GUID";
String groupName = "Hello Group!";
String groupType = CometChatGroupType.public;
String password = "";

CometChat.updateGroup(guid: GUID,groupName: groupName,groupType: groupType,password: password ,
                      onSuccess: (Group group) {
                        debugPrint("Group Updated Successfully : $group");
                      },
                      onError: (CometChatException e) {
                        debugPrint("Group Updated failed with exception: ${e.message}");
                    });
```

</TabItem>
</Tabs>



This method takes an instance of the `Group` class as a parameter which should contain the data that you wish to update.

| Parameter | Description | 
| ---- | ---- | 
| `group` | an instance of class `Group` | 


After the successful update of the group, you will receive an instance of `Group` class containing updated information of the group.

For more information on the `Group` class, please check [here](./groups-create-group#group-class)