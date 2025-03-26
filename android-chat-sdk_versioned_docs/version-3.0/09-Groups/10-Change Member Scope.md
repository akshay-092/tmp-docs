---
sidebar_position: 1
title: Change Member Scope
slug: /groups-change-member-scope
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Change Scope of a Group Member

In order to change the scope of a group member, you can use the `changeGroupMemberScope()`.

<Tabs>
<TabItem value="Java" label="Java">

```java
private String GUID = "GUID";
private String UID = "UID";
private String scope = CometChatConstants.SCOPE_ADMIN;

CometChat.updateGroupMemberScope(UID, GUID, scope, new CometChat.CallbackListener<String>() {
  @Override
  public void onSuccess(String successMessage) {
    Log.d(TAG, "User scope updated successfully");
  }

  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "User scope update failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val GUID: String = "GUID"
val UID: String = "UID"
val scope: String = CometChatConstants.SCOPE_ADMIN

CometChat.updateGroupMemberScope(UID, GUID, scope, object:CometChat.CallbackListener<String>(){
  override fun onSuccess(p0: String?) {
    Log.d(TAG, "User scope updated successfully")
  }
  
  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "User scope update failed with exception: " + p0?.message)
  }
})
```
</TabItem>
</Tabs>

This method takes the below parameters:

| Parameter | Description | 
| ---- | ---- | 
| `UID` | The UID of the member whose scope you would like to change | 
| `GUID` | The GUID of the group for which the member's scope needs to be changed | 
| `scope` | the updated scope of the member. This can be either of the 3 values:<br />1.`CometChatConstants.SCOPE_ADMIN` (admin)<br />2.`CometChatConstants.SCOPE_MODERATOR` (moderator)<br />3.`CometChatConstants.SCOPE_PARTICIPANT` (participant) | 


The default scope of any member is `participant`. Only the **Admin** of the group can change the scope of any participant in the group.

## Real-Time Group Member Scope Changed Events

_In other words, as a member of a group, how do I know when someone's scope is changed when my app is running?_

In order to receive real-time events whenever a group member's scope changes, you will need to override the `onGroupMemberScopeChanged()` method of the `GroupListener` class

<Tabs>
<TabItem value="Java" label="Java">

```java
CometChat.addGroupListener(YourActivity.class.getSimpleName(), new CometChat.GroupListener() {
  @Override
  public void onGroupMemberScopeChanged(Action action, User updatedBy, User updatedUser, String scopeChangedTo, String scopeChangedFrom, Group group) {

  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
CometChat.addGroupListener("ListenerID", object : CometChat.GroupListener() {
  override fun onGroupMemberScopeChanged(action: Action, updatedBy: User, updatedUser: User, scopeChangedTo: String, scopeChangedFrom: String, group: Group) {

  }
})
```
</TabItem>
</Tabs>

## Missed Group Member Scope Changed Events

_In other words, as a member of a group, how do I know when someone's scope is changed when my app is not running?_

When you retrieve the list of previous messages if a member's scope has been changed for any group that the logged-in user is a member of, the list of messages will contain an `Action` message. An `Action` message is a sub-class of `BaseMessage` class.

For the group member scope changed event, in the `Action` object received, the following fields can help you get the relevant information-

1. `action` - `scopeChanged`
2. `actionOn` - User object containing the details of the user whos scope has been changed
3. `actionBy` - User object containing the details of the user who changed the scope of the member
4. `actionFor` - Group object containing the details of the group in which the member scope was changed
5. `oldScope` - The original scope of the member
6. `newScope` - The updated scope of the member