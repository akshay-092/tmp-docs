---
sidebar_position: 8
title: Retrieve Group Members
slug: /retrieve-group-members
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Retrieve the List of Group Members

In order to fetch the list of groups members for a group, you can use the `GroupMembersRequest` class. To use this class i.e to create an object of the GroupMembersRequest class, you need to use the `GroupMembersRequestBuilder` class. The `GroupMembersRequestBuilder` class allows you to set the parameters based on which the groups are to be fetched.

The `GroupMembersRequestBuilder` class allows you to set the below parameters:

The GUID of the group for which the members are to be fetched must be specified in the constructor of the `GroupMembersRequestBuilder` class.

1. `set(limit: Int)` - This method sets the limit i.e. the number of members that should be fetched in a single iteration.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let groupMembersRequest = GroupMembersRequest.GroupMembersRequestBuilder(guid: guid)
.set(limit: 30)
.build();
```

</TabItem>
</Tabs>




2. `set(searchKeyword: String)` - This method allows you to set the search string based on which the group members are to be fetched.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let groupMembersRequest = GroupMembersRequest.GroupMembersRequestBuilder(GUID: guid)
.set(limit: 30)
.set(searchKeyword : "abc")
.build();
```

</TabItem>
</Tabs>



3. `set(scopes: [String])` - This method allows you to fetch group members based on multiple scopes.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let groupMembersRequest = GroupMembersRequest.GroupMembersRequestBuilder(GUID: guid)
.set(limit: 30)
.set(scopes : ["admin","participant"])
.build();
```

</TabItem>
</Tabs>



Finally, once all the parameters are set to the builder class, you need to call the build() method to get the object of the `GroupMembersRequest` class.

Once you have the object of the `GroupMembersRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of  objects containing n number of members where n is the limit set in the builder class.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 10;
let guid = "cometchat-guid-11"

let groupMembersRequest = GroupMembersRequest.GroupMembersRequestBuilder(guid: guid).set(limit: limit).build();

groupMembersRequest.fetchNext(onSuccess: { (groupMembers) in

  for member in groupMembers {

     print("Group Member fetched successfully. " + member.stringValue())
  }

}) { (error) in

   print("Group Member list fetching failed with error:" + error!.errorDescription);
}
```

</TabItem>

<TabItem value="Objective C" label="Objective C">

```objectivec
NSString *guid = @"cometchat-guid-101";
NSInteger limit = 30;
GroupMembersRequest *groupMemberRequest = [[[[GroupMembersRequestBuilder alloc]initWithGuid:guid] setLimitWithLimit:limit] build];

[groupMemberRequest fetchNextOnSuccess:^(NSArray<GroupMember *> * groupMembers) {

    // received group members list
    
    for (GroupMember *member in groupMembers) {
        
        // member
        NSLog(@"Group Member fetched successfully: %@",[member stringValue]);
    }
    
} onError:^(CometChatException * error) {
    
    // Error
    NSLog(@"Group Member list fetching failed with exception: %@",[error ErrorDescription]);
    
}];
```

</TabItem>
</Tabs>
