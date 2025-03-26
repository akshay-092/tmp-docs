---
sidebar_position: 1
title: Retrieve Groups
slug: /groups-retrieve-groups
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Retrieve List of Groups

_In other words, as a logged-in user, how do I retrieve the list of groups I've joined and groups that are available?_

In order to fetch the list of groups, you can use the `GroupsRequest` class. To use this class i.e to create an object of the `GroupsRequest` class, you need to use the `GroupsRequestBuilder` class. The `GroupsRequestBuilder` class allows you to set the parameters based on which the groups are to be fetched.

### Set Limit

This method sets the limit i.e. the number of groups that should be fetched in a single iteration.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
GroupsRequest groupsRequest =  (GroupsRequestBuilder()
    ..limit= 20
  ).build();
```

</TabItem>
</Tabs>



### Set Search Keyword

This method allows you to set the search string based on which the groups are to be fetched.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
GroupsRequest groupsRequest =  (GroupsRequestBuilder()
    ..limit= 20
    ..searchKeyword = "abc"  
  ).build();
```

</TabItem>
</Tabs>




### Joined Only

This method when used, will ask CometChat to only return the groups that the user has joined or is a part of.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
GroupsRequest groupsRequest =  (GroupsRequestBuilder()
    ..limit= 20
    ..joinedOnly = true
  ).build();
```

</TabItem>
</Tabs>



### Set Tags

This method accepts a list of tags based on which the list of groups is to be fetched. The list fetched will only contain the groups that have been tagged with the specified tags.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
List<String> tags =[];
tags.add("archived");
GroupsRequest groupsRequest =  (GroupsRequestBuilder()
    ..limit= 20
     ..tags = tags
  ).build();
```

</TabItem>
</Tabs>



### With Tags

This property when set to true will fetch tags data along with the list of groups.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
GroupsRequest groupsRequest =  (GroupsRequestBuilder()
    ..limit= 20
    ..withTags = true
  ).build();
```

</TabItem>
</Tabs>



Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `GroupsRequest` class.

Once you have the object of the `GroupsRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `Group` objects containing 'n' number of groups depending on the limit set.

The list of groups fetched will only have the public and password type groups. The private groups will only be available if the user is a member of that private group.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
GroupsRequest groupsRequest =  (GroupsRequestBuilder()
    ..limit= 20
  ).build();

groupsRequest.fetchNext(onSuccess: (List<Group> groupList) {
      debugPrint("Fetched Group Successfully : $groupList ");
    }, onError: (CometChatException e) {
      debugPrint("Group Request failed with exception: ${e.message}");
    });
```

</TabItem>
</Tabs>




## Retrieve Particular Group Details

_In other words, as a logged-in user, how do I retrieve information for a specific group?_

To get the information of a group, you can use the `getGroup()` method.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
String GUID = "GUID";

CometChat.getGroup(GUID, onSuccess: (Group group) {
        debugPrint("Fetched Group Successfully : $group ");
      }, onError: (CometChatException e) {
        debugPrint("Group Request failed with exception: ${e.message}");
      });
```

</TabItem>
</Tabs>



| Parameter | Description | 
| ---- | ---- | 
| `GUID` | The GUID of the group for whom the details are to be fetched | 


On success, the `Group` object containing the details of the group is returned.

## Get online group member count

To get the total count of online users in particular groups, you can use the `getOnlineGroupMemberCount()` method.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
List<String> guids =  [];
guids.add("cometchat-guid-1");
guids.add("cometchat-guid-11");

CometChat.getOnlineGroupMemberCount(guids,
          onSuccess: (Map<String, int> count) {
        debugPrint("Fetched Online Group Member Count Successfully : $count ");
      }, onError: (CometChatException e) {
        debugPrint("Online Group Member failed with exception: ${e.message}");
      });
```

</TabItem>
</Tabs>



This method returns a `Map`  with the GUID of the group as the key and the online member count for that group as the value.