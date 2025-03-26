---
sidebar_position: 7
title: Retrieve Group Members
slug: /groups-retrieve-group-members
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Retrieve the List of Group Members

In order to fetch the list of groups members for a group, you can use the `GroupMembersRequest` class. To use this class i.e to create an object of the GroupMembersRequest class, you need to use the `GroupMembersRequestBuilder` class. The `GroupMembersRequestBuilder` class allows you to set the parameters based on which the groups are to be fetched.

The `GroupMembersRequestBuilder` class allows you to set the below parameters:

The GUID of the group for which the members are to be fetched must be specified in the constructor of the `GroupMembersRequestBuilder` class.

### Set Limit

This method sets the limit i.e. the number of members that should be fetched in a single iteration.

<Tabs>
<TabItem value="1" label="Set Limit">

```Javascript
let GUID = "GUID";
let limit = 30;
let groupMembersRequest = new CometChat.GroupMembersRequestBuilder(GUID)
    												.setLimit(limit)
    												.build();
```

</TabItem>
</Tabs>



### Set Search Keyword

This method allows you to set the search string based on which the group members are to be fetched.

<Tabs>
<TabItem value="1" label="Set Search Keyword">

```Javascript
let GUID = "GUID";
let limit = 30;
let searchKeyword = "super";
let groupMembersRequest = new CometChat.GroupMembersRequestBuilder(GUID)
    												.setLimit(limit)
    												.setSearchKeyword(searchKeyword)
    												.build();
```

</TabItem>
</Tabs>


### Set Scopes

This method allows you to fetch group members based on multiple scopes.

<Tabs>
<TabItem value="1" label="Set Scopes">

```Javascript
let GUID = "GUID";
let limit = 30;
let scopes = ["admin", "moderator"];
let groupMembersRequest = new CometChat.GroupMembersRequestBuilder(GUID)
    												.setLimit(limit)
    												.setScopes(scopes)
    												.build();
```

</TabItem>
</Tabs>



Finally, once all the parameters are set to the builder class, you need to call the build() method to get the object of the `GroupMembersRequest` class.

Once you have the object of the `GroupMembersRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `GroupMember` objects containing n number of members where n is the limit set in the builder class.

<Tabs>
<TabItem value="1" label="Group Members Request">

```Javascript
let GUID = "GUID";
let limit = 30;
lett groupMemberRequest = new CometChat.GroupMembersRequestBuilder(GUID)
    												.setLimit(limit)
    												.build();

groupMemberRequest.fetchNext().then(
  groupMembers => {
    console.log("Group Member list fetched successfully:", groupMembers);
  }, error => {
    console.log("Group Member list fetching failed with exception:", error);
  }
);
```

</TabItem>
</Tabs>

