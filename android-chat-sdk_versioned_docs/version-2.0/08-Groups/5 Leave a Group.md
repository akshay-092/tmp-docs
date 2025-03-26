---
sidebar_position: 5
title: Leave a Group
slug: /leave-a-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Leave a Group

In order to stop receiving updates and messages for any particular joined group, you will have to leave the group using the `leaveGroup()` method.

<Tabs>
<TabItem value="Java" label="Java">

```java
private String GUID = "GUID";

CometChat.leaveGroup(GUID, new CometChat.CallbackListener<String>() {
   @Override
   public void onSuccess(String successMessage) {
      Log.d(TAG, successMessage);        
    }

   @Override
   public void onError(CometChatException e) {
      Log.d(TAG, "Group leaving failed with exception: " + e.getMessage());
    }
  });
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val GUID:String="GUID"

CometChat.leaveGroup(GUID,object :CometChat.CallbackListener<String>(){
  override fun onSuccess(p0: String?) {
    Log.d(TAG, "Group left successfully")
  }
  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "Group leaving failed with exception: " + p0?.message)
  }

})
```
</TabItem>
</Tabs>


| Parameter | Description | 
| ---- | ---- | 
| `GUID` | The GUID of the group you would like to leave | 


Once a group is left, the user will no longer receive any updates or messages pertaining to the group.

## Real-time Group Member Left Events

_In other words, as a member of a group, how do I know if someone has left it when my app is running?_

If a user leaves a group, the members of the group receive a real-time event in the `onGroupMemberLeft()` method of the `GroupListener` class.

<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.addGroupListener(UNIQUE_LISTENER_ID, new CometChat.GroupListener() {
@Override
public void onGroupMemberLeft(Action action, User leftUser, Group leftGroup) {
	Log.d(TAG, "User left");
}
});
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