---
sidebar_position: 3
title: Update a Group
slug: /update-a-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Update Group

_In other words, as a group owner, how can I update the group details?_

You can update the existing details of the group using the `updateGroup()` method.

<Tabs>
<TabItem value="Java" label="Java">

```java
private String GUID = "GUID";
private String groupName = "Hello Group!";
private String groupType = CometChatConstants.GROUP_TYPE_PUBLIC;
private String password = "";
Group group = new Group(GUID, groupName, groupType, password);

CometChat.updateGroup(group,  new CometChat.CallbackListener<Group>() {
  @Override
  public void onSuccess(Group group) {
    Log.d(TAG, "Groups details updated successfully: " + group.toString());
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Group details update failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val GUID:String="GUID"
val groupName:String="Hello Group!"
val groupType:String = CometChatConstants.GROUP_TYPE_PUBLIC
val password:String=""

val group=Group(GUID,groupName,groupType,password)

   CometChat.updateGroup(group,object :CometChat.CallbackListener<Group>(){
     override fun onSuccess(p0: Group?) {
       Log.d(TAG, "Groups details updated successfully: " + p0?.toString())
     }
     override fun onError(p0: CometChatException?) {
       Log.d(TAG, "Group details update failed with exception: " + p0?.message)
     }
   })
```
</TabItem>
</Tabs>



This method takes an instance of the `Group` class as a parameter which should contain the data that you wish to update.

| Parameter | Description | 
| ---- | ---- | 
| `group` | an instance of class `Group` | 


After the successful update of the group, you will receive an instance of `Group` class containing updated information of the group.

For more information on the `Group` class, please check [here](./create-a-group#group-class)