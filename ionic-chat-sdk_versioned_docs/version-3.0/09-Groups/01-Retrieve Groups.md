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

The `GroupsRequestBuilder` class allows you to set the below parameters:

### Set Limit

This method sets the limit i.e. the number of groups that should be fetched in a single iteration.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let limit = 30;
let groupsRequest = new CometChat.GroupsRequestBuilder()
                    	.setLimit(limit)
                    	.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let limit: number = 30;
let groupsRequest: CometChat.GroupsRequest = new CometChat.GroupsRequestBuilder()
    .setLimit(limit)
    .build();
```

</TabItem>
</Tabs>



### Set Search Keyword

This method allows you to set the search string based on which the groups are to be fetched.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let limit = 30;
let searchKeyword = "group";
let groupsRequest = new CometChat.GroupsRequestBuilder()
                    	.setLimit(limit)
                    	.setSearchKeyword(searchKeyword)
                    	.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let limit: number = 30;
let searchKeyword: string = "group";
let groupsRequest: CometChat.GroupsRequest = new CometChat.GroupsRequestBuilder()
    .setLimit(limit)
    .setSearchKeyword(searchKeyword)
    .build();
```

</TabItem>
</Tabs>




### Joined Only

This method when used, will ask the SDK to only return the groups that the user has joined or is a part of.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let limit = 30;
let groupsRequest = new CometChat.GroupsRequestBuilder()
                    	.setLimit(limit)
                    	.joinedOnly(true)
                    	.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let limit: number = 30;
let groupsRequest: CometChat.GroupsRequest = new CometChat.GroupsRequestBuilder()
    .setLimit(limit)
    .joinedOnly(true)
    .build();
```

</TabItem>
</Tabs>


### Set Tags

This method accepts a list of tags based on which the list of groups is to be fetched. The list fetched will only contain the groups that have been tagged with the specified tags.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let limit = 30;
let tags = ["tag1", "tag2"];
let groupsRequest = new CometChat.GroupsRequestBuilder()
                    	.setLimit(limit)
                    	.setTags(tags)
                    	.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let limit: number = 30;
let tags: Array<String> = ["tag1", "tag2"];
let groupsRequest: CometChat.GroupsRequest = new CometChat.GroupsRequestBuilder()
    .setLimit(limit)
    .setTags(tags)
    .build();
```

</TabItem>
</Tabs>



### With Tags

This property when set to true will fetch tags data along with the list of groups.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let limit = 30;
let groupsRequest = new CometChat.GroupsRequestBuilder()
                    	.setLimit(limit)
                    	.withTags(true)
                    	.build();
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let limit: number = 30;
let groupsRequest: CometChat.GroupsRequest = new CometChat.GroupsRequestBuilder()
    .setLimit(limit)
    .withTags(true)
    .build();
```

</TabItem>
</Tabs>


Finally, once all the parameters are set to the builder class, you need to call the build() method to get the object of the `GroupsRequest` class.

Once you have the object of the `GroupsRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `Group` objects containing n number of groups where n is the limit set in the builder class.

The list of groups fetched will only have the public and password type groups. The private groups will only be available if the user is a member of the group.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let limit = 30;
let groupsRequest = new CometChat.GroupsRequestBuilder()
                    	.setLimit(limit)
                    	.build();

groupsRequest.fetchNext().then(
  groupList => {
    console.log("Groups list fetched successfully", groupList);
  }, error => {
    console.log("Groups list fetching failed with error", error);
  }
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let limit: number = 30;
let groupsRequest: CometChat.GroupsRequest = new CometChat.GroupsRequestBuilder()
    .setLimit(limit)
    .build();

groupsRequest.fetchNext().then(
    (groupList: CometChat.Group[]) => {
        console.log("Groups list fetched successfully", groupList);
    }, (error: CometChat.CometChatException) => {
        console.log("Groups list fetching failed with error", error);
    }
);
```

</TabItem>
</Tabs>



## Retrieve Particular Group Details

_In other words, as a logged-in user, how do I retrieve information for a specific group?_

To get the information of a group, you can use the `getGroup()` method.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
var GUID = "GUID";
CometChat.getGroup(GUID).then(
  group => {
    console.log("Group details fetched successfully:", group);
  }, error => {
    console.log("Group details fetching failed with exception:", error);
  }
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
var GUID: string = "GUID";
CometChat.getGroup(GUID).then(
    (group: CometChat.Group) => {
        console.log("Group details fetched successfully:", group);
    }, (error: CometChat.CometChatException) => {
        console.log("Group details fetching failed with exception:", error);
    }
);
```

</TabItem>
</Tabs>




| Parameter | Description | 
| ---- | ---- | 
| `GUID` | The GUID of the group for whom the details are to be fetched | 


It returns `Group` object containing the details of the group.

## Get online group member count

To get the total count of online users in particular groups, you can use the `getOnlineGroupMemberCount()` method.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let guids = ["cometchat-guid-1"];
CometChat.getOnlineGroupMemberCount(guids).then(
  groupMemberCount => {
    console.log("Total online user for specified groups:", groupMemberCount);
  }, error => {
    console.log("Online group member count fetching failed with error:", error);
  }
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let guids: String[] = ["cometchat-guid-1"];
CometChat.getOnlineGroupMemberCount(guids).then(
    (groupMemberCount: number) => {
        console.log("Total online user for specified groups:", groupMemberCount);
    }, (error: CometChat.CometChatException) => {
        console.log("Online group member count fetching failed with error:", error);
    }
);
```

</TabItem>
</Tabs>



This method returns a JSON Object with the GUID as the key and the online member count for that group as the value.