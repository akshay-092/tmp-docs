---
sidebar_position: 3
title: Update a Group
slug: /update-a-group
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Update Group

*In other words, as a group owner, how can I update the group details?*

You can update the existing details of the group using the `updateGroup()` method.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let GUID = "GUID";
let groupName = "Hello Group!";
let groupType: CometChat.groupType = .public;

let groupTobeUpdated = Group(guid: GUID, name: groupName, groupType: groupType, password: nil)

CometChat.updateGroup(group: groupTobeUpdated, onSuccess: { (group) in

  print("Groups details updated successfully. " + group.stringValue())

}) { (error) in

   print("Group details update failed with error: " + error!.errorDescription);
}
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSString *guid = @"cometchat-guid-101";
NSString *name = @"TestGroup1";
NSString *password = nil ; // mandatory in case of password protected group type
NSInteger limit = 30;

Group *groupToBeUpdated = [[Group alloc]initWithGuid:guid name:name groupType:groupTypePublic password:password];

[CometChat updateGroupWithGroup:groupToBeUpdated onSuccess:^(Group * group) {
    
    NSLog(@"Groups details updated successfully. %@",[group stringValue]);
    
} onError:^(CometChatException * error) {
    
    NSLog(@"Group details update failed with error: %@",[error errorDescription]);
}];
```
</TabItem>
</Tabs>


This method takes an instance of the `Group` class as a parameter that should contain the data that you wish to update.

| Parameter | Description | 
| ---- | ---- | 
| group | an instance of class `Group` | 


After a successful update of the group, you will receive an instance of the `Group` class containing update information of the group.