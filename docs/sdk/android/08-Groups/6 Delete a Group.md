---
sidebar_position: 6
title: Delete a Group
slug: /delete-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Delete Group

To delete a group you need to use the `deleteGroup()` method. The user must be an **Admin** of the group they are trying to delete.

<Tabs>
<TabItem value="Java" label="Java">

```java
private String GUID = "GUID";

CometChat.deleteGroup(GUID, new CometChat.CallbackListener<String>() {
  @Override
  public void onSuccess(String successMessage) {
    Log.d(TAG, "Group deleted successfully: ");
  }

  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Group delete failed with exception: " + e.getMessage());
  }
});
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val GUID:String="GUID"

CometChat.deleteGroup(GUID,object :CometChat.CallbackListener<String>(){
  override fun onSuccess(p0: String?) {
    Log.d(TAG, "Groups deleted successfully: ")
  }

  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "Group delete failed with exception: " +p0?.message)
  }
})
```

</TabItem>
</Tabs>

The `deleteGroup()` method takes the following parameters:

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| `GUID`    | The GUID of the group you would like to delete |
