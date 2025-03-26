---
sidebar_position: 1
title: Retrieve Groups
slug: /retrieve-groups
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Retrieve List of Groups

_In other words, as a logged-in user, how do I retrieve the list of groups I've joined and groups that are available?_

In order to fetch the list of groups, you can use the `GroupsRequest` class. To use this class i.e to create an object of the GroupsRequest class, you need to use the `GroupsRequestBuilder` class. The `GroupsRequestBuilder` class allows you to set the parameters based on which the groups are to be fetched.

The `GroupsRequestBuilder` class allows you to set the below parameters:

### Set Limit

 This method sets the limit i.e. the number of groups that should be fetched in a single iteration.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let groupsRequest  = GroupsRequest.GroupsRequestBuilder.set(limit: 30).build();
```
</TabItem>
</Tabs>


### Set Search Keyword

This method allows you to set the search string based on which the groups are to be fetched.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let groupsRequest  = GroupsRequest.GroupsRequestBuilder
.set(searchKeyword : "abc")
.set(limit: 30)
.build();
```
</TabItem>
</Tabs>


### Joined Only

This method when used, will ask the SDK to only return the groups that the user has joined or is a part of.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let groupsRequest  = GroupsRequest.GroupsRequestBuilder
.set(joinedOnly: true)
.build();
```
</TabItem>
</Tabs>


### Set Tags

This method accepts a list of tags based on which the list of groups is to be fetched. The list fetched will only contain the groups that have been tagged with the specified tags.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let groupRequest = GroupsRequest.GroupsRequestBuilder()
.set(limit: 30)
.set(tags: ["tag1", "tag2"])
.build();
```
</TabItem>
</Tabs>


### With Tags

This property when set to true will fetch tags data along with the list of groups.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let groupRequest = GroupsRequest.GroupsRequestBuilder()
.set(limit: 30)
.withTags(true)
.build();
```
</TabItem>
</Tabs>


Finally, once all the parameters are set to the builder class, you need to call the build() method to get the object of the `GroupsRequest` class.

Once you have the object of the `GroupsRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `Group` objects containing n number of groups where n is the limit set in the builder class.

The list of groups fetched will only have the public and password type groups. The private groups will only be available if the user is a member of the group.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 30 

let groupsRequest  = GroupsRequest.GroupsRequestBuilder(limit: limit).build();

groupsRequest.fetchNext(onSuccess: { (groups) in

  for group in groups {

    print("Groups list fetched successfully. " + group.stringValue())
  }

}) { (error) in

    print("Groups list fetching failed with error:" + error!.errorDescription);
}
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSInteger limit = 30 ;

GroupsRequest *groupRequest  = [[[GroupsRequestBuilder alloc]initWithLimit:limit] build];

[groupRequest fetchNextOnSuccess:^(NSArray<Group *> * groups) {
    
    for (Group *group in groups) {
        NSLog(@"Groups list fetched successfully. %@",[group stringValue]);
    }
  
} onError:^(CometChatException * error) {
    
    NSLog(@"Groups list fetching failed with error: %@",[error errorDescription]);
}];
```
</TabItem>
</Tabs>


## Retrieve Particular Group Details

_In other words, as a logged-in user, how do I retrieve information for a specific group?_

To get the information of a group, you can use the `getGroup()` method.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let guid = "cometchat-guid-11"

CometChat.getGroup(GUID: guid, onSuccess: { (group) in

    print("Group details fetched successfully. " + group!.stringValue())

}) { (error) in

    print("Group details fetching failed with error:" + error!.errorDescription);
}
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSString *guid = @"cometchat-guid-101";

[CometChat getGroupWithGUID:guid onSuccess:^(Group * group) {
    
    NSLog(@"Group details fetched successfully. %@",[group stringValue]);
    
} onError:^(CometChatException * error) {
    
    NSLog(@"Group details fetching failed with error: %@",[error errorDescription]);
}];
```
</TabItem>
</Tabs>


| Parameter | Description | 
| ---- | ---- | 
| GUID | The `GUID` of the group for whom the details are to be fetched. | 


On success, the `Group` object containing the details of the group is returned.

## Get online group member count

To get the total count of online users in particular groups, you can use the `getOnlineGroupMemberCount()` method.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let data = ["cometchat-guid-1","cometchat-guid-11"]
CometChat.getOnlineGroupMemberCount(data, onSuccess: {
    countData in
  print(countData)
}, onError: {
  error in
  print(error?.errorDescription)
 })
```
</TabItem>
</Tabs>


This method returns a Dictionary&lt;String, Int&gt; with the GUID as the key and the online member count for that group as the value.