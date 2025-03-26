---
sidebar_position: 6
title: Delete a Group
slug: /delete-a-group
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Delete a Group

To delete a group you need to use the `deleteGroup()` method. The user must be an `Admin` of the group they are trying to delete.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let GUID = "GUID";

CometChat.deleteGroup(GUID: GUID, onSuccess: { (response) in

  print("Group deleted successfully.")

}) { (error) in

  print("Group delete failed with error: " + error!.errorDescription);
}
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSString *guid = @"cometchat-guid-101";

[CometChat deleteGroupWithGUID:guid onSuccess:^(NSString * response) {
    
    NSLog(@"Group deleted successfully.");
    
} onError:^(CometChatException * error) {
   
    NSLog(@"Group deletion failed with error: %@",[error errorDescription]);
    
}];
```
</TabItem>
</Tabs>



The `deleteGroup()` method takes the following parameters:

| Parameter | Description | 
| ---- | ---- | 
| GUID | The GUID of the group you would like to delete | 

