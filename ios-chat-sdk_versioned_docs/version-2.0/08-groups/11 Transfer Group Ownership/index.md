---
sidebar_position: 11
title: Transfer Group Ownership
slug: /transfer-group-ownership
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In other words, as a logged-in user, how do I transfer the ownership of any group if I am the owner of the group?

In order to transfer the ownership of any group, the first condition is that you must be the owner of the group. In case you are the owner of the group, you can use the transferGroupOwnership() method provided by the CometChat class.

This will be helpful as the owner is not allowed to leave the group. In case, you as the owner would like to leave the group, you will have to use this method and transfer your ownership first to any other member of the group and only then you will be allowed to leave the group.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var UID = "cometchat-uid-2"
var GUID = "cometchat-guid-1" 

CometChat.transferGroupOwnership(UID: UID, GUID: GUID) { (success) in
            
    print("Transfer Group Ownership Successfully")

} onError: { (error) in

    print("Transfer Group Ownership failed with error \(error?.errorDescription)")
}
```
</TabItem>
</Tabs>


