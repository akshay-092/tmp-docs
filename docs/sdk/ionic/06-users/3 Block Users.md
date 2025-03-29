---
sidebar_position: 3
title: Block Users
slug: /block-users
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Block Users

_In other words, as a logged-in user, how do I block a user from sending me messages?_

You can block users using the `blockUsers()` method.  Once any user is blocked, all the communication to and from the respective user will be completely blocked. You can block multiple users in a single operation. The `blockUsers()` method takes a `Array` as a parameter which holds the list of `UID's` to be blocked.

<Tabs>
<TabItem value="Block Users" label="Block Users">

  ```javascript
var usersList = ["UID1", "UID2", "UID3"];
CometChat.blockUsers(usersList).then(
  list => {
    console.log("users list blocked", { list });
  }, error => {
    console.log("Blocking user fails with error", error);
  }
); 
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
var usersList: String[] = ["UID1", "UID2", "UID3"];

CometChat.blockUsers(usersList).then(
    (list: Object) => {
        console.log("users list blocked", { list });
    }, (error: CometChat.CometChatException) => {
        console.log("Blocking user fails with error", error);
    }
);
  ```
</TabItem>
</Tabs>


It returns a Array which contains `UID's` as the keys and "success" or "fail" as the value based on if the block operation for the `UID` was successful or not.

## Unblock Users

_In other words, as a logged-in user, how do I unblock a user I previously blocked?_

You can unblock the already blocked users using the `unblockUsers()` method. You can unblock multiple users in a single operation. The `unblockUsers()` method takes a `Array` as a parameter which holds the list of `UID's` to be unblocked.

<Tabs>
<TabItem value="Unblock Users" label="Unblock Users">

  ```javascript
var usersList = ["UID1", "UID2", "UID3"];

CometChat.unblockUsers(usersList).then(
  list => {
    console.log("users list unblocked", { list });
  }, error => {
    console.log("unblocking user fails with error", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
var usersList: String[] = ["UID1", "UID2", "UID3"];

CometChat.unblockUsers(usersList).then(
    (list: Object) => {
        console.log("users list blocked", { list });
    }, (error: CometChat.CometChatException) => {
        console.log("Blocking user fails with error", error);
    }
);
  ```
</TabItem>
</Tabs>



It returns a Array which contains `UID's` as the keys and `success` or `fail` as the value based on if the unblock operation for the `UID` was successful or not.

## Get List of Blocked Users

_In other words, as a logged-in user, how do I get a list of all users I've blocked?_

In order to fetch the list of blocked users, you can use the `BlockedUsersRequest` class. To use this class i.e to create an object of the `BlockedUsersRequest class`, you need to use the `BlockedUsersRequestBuilder` class. The `BlockedUsersRequestBuilder` class allows you to set the parameters based on which the blocked users are to be fetched.

The `BlockedUsersRequestBuilder` class allows you to set the below parameters:

### Set Limit

This method sets the limit i.e. the number of blocked users that should be fetched in a single iteration.

<Tabs>
<TabItem value="Set Limit" label="Set Limit">

  ```javascript
let limit = 30;
let blockedUsersRequest = new BlockedUsersRequest.BlockedUsersRequestBuilder()
                    				.setLimit(limit)
                    				.build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let blockedUsersRequest: CometChat.BlockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
    .setLimit(limit)
    .build(); 
  ```
</TabItem>
</Tabs>



### Set Search Keyword

This method allows you to set the search string based on which the blocked users are to be fetched.

<Tabs>
<TabItem value="Set Search Keyword" label="Set Search Keyword">

  ```javascript
let limit = 30;
let searchKeyword = "super";
let blockedUsersRequest = new BlockedUsersRequest.BlockedUsersRequestBuilder()
                    				.setLimit(limit)
                    				.setSearchKeyword(searchKeyword)
                    				.build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let searchKeyword: string = "super";
let blockedUsersRequest: CometChat.BlockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
    .setLimit(limit)
    .setSearchKeyword(searchKeyword)
    .build();
  ```
</TabItem>
</Tabs>


### Set Direction

- CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME - This will ensure that the list of blocked users only contains the users blocked by the logged in user.
- CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME - This will ensure that the list of blocked users only contains the users that have blocked the logged in user.
- CometChat.BlockedUsersRequest.directions.BOTH - This will make sure the list of users includes both the above cases. This is the default value for the direction variable if it is not set.

<Tabs>
<TabItem value="Set Direction" label="Set Direction">

  ```javascript
let limit = 30;
let blockedUsersRequest = new BlockedUsersRequest.BlockedUsersRequestBuilder()
    .setLimit(limit)
    .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let blockedUsersRequest: CometChat.BlockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
    .setLimit(limit)
    .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
    .build();
  ```
</TabItem>
</Tabs>



Finally, once all the parameters are set to the builder class, you need to call the build() method to get the object of the `BlockedUsersRequest` class.

Once you have the object of the `BlockedUsersRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `User` objects containing n number of blocked users where N is the limit set in the builder class.

<Tabs>
<TabItem value="Blocked Users Request" label="Blocked Users Request">

  ```javascript
var limit = 30;
var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
                    				.setLimit(limit)
                    				.build();
blockedUsersRequest.fetchNext().then(
  userList => {
    console.log("Blocked user list received:", userList);
  }, error => {
    console.log("Blocked user list fetching failed with error:", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let blockedUsersRequest: CometChat.BlockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
    .setLimit(limit)
    .build();

blockedUsersRequest.fetchNext().then(
    (userList: CometChat.User[]) => {
        console.log("Blocked user list received:", userList);
    }, (error: CometChat.CometChatException) => {
        console.log("Blocked user list fetching failed with error:", error);
    }
);
  ```
</TabItem>
</Tabs>

