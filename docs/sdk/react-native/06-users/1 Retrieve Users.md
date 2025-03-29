---
sidebar_position: 1
title: Retrieve Users
slug: /retrieve-users
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Retrieve Logged In User Details

You can get the details of the logged-in user using the `getLoggedInUser()` method. This method can also be used to check if the user is logged in or not.
If the method returns `Promise` with reject callback, it indicates that the user is not logged in and you need to log the user into CometChat SDK.

<Tabs>
<TabItem value="Get Logged In User Details" label="Get Logged In User Details">

  ```javascript
var user = CometChat.getLoggedinUser().then(
  user => {
    console.log("user details:", { user });
  }, error => {
    console.log("error getting details:", { error });
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
CometChat.getLoggedinUser().then(
    (user: CometChat.User) => {
        console.log("user details:", { user });
    }, (error: CometChat.CometChatException) => {
        console.log("error getting details:", { error });
    }
); 
  ```
</TabItem>
</Tabs>





This method will return a `User` object containing all the information related to the logged-in user.

## Retrieve List of Users

In order to fetch the list of users, you can use the `UsersRequest` class. To use this class i.e to create an object of the `UsersRequest` class, you need to use the `UsersRequestBuilder` class. The `UsersRequestBuilder` class allows you to set the parameters based on which the users are to be fetched.

The `UsersRequestBuilder` class allows you to set the below parameters:

### Set Limit

This method sets the limit i.e. the number of users that should be fetched in a single iteration.

<Tabs>
<TabItem value="Set Limit" label="Set Limit">

  ```javascript
let limit = 30;
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .build();  
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .build();
  ```
</TabItem>
</Tabs>



### Set Search Keyword

This method allows you to set the search string based on which the users are to be fetched.

<Tabs>
<TabItem value="Set Search Keyword" label="Set Search Keyword">

  ```javascript
let limit = 30;
let searchKeyword = "super";
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .setSearchKeyword(searchKeyword)
                    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let searchKeyword: string = "super";
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .setSearchKeyword(searchKeyword)
    .build();
  ```
</TabItem>
</Tabs>




### Search In

This method allows you to define in which user property should the searchKeyword be searched. This method only works in combination with `setSearchKeyword()`. By default the keyword is searched in both UID & Name.

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
let limit = 30;
let searchKeyword = "super";
let searchIn = ["uid", "name"];
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .setSearchKeyword(searchKeyword)
                    .searchIn(searchIn)
                    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let searchKeyword: string = "super";
let searchIn: Array<String> = ["uid", "name"];
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .setSearchKeyword(searchKeyword)
    .searchIn(searchIn)
    .build();
  ```
</TabItem>
</Tabs>




### Set Status

The status based on which the users are to be fetched. The status parameter can contain one of the below two values:

- CometChat.USER_STATUS.ONLINE - will return the list of only online users.
- CometChat.USER_STATUS.OFFLINE - will return the list of only offline users.

If this parameter is not set, will return all the available users.

<Tabs>
<TabItem value="Set Status" label="Set Status">

  ```javascript
let limit = 30;
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .setStatus(CometChat.USER_STATUS.ONLINE)
                    .build()
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .setStatus(CometChat.USER_STATUS.ONLINE)
    .build();
  ```
</TabItem>
</Tabs>


### Hide Blocked Users

This method is used to determine if the blocked users should be returned as a part of the user list. If set to true, the user list will not contain the users blocked by the logged in user.

<Tabs>
<TabItem value="Hide Blocked Users" label="Hide Blocked Users">

  ```javascript
let limit = 30;
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .hideBlockedUsers(true)
                    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .hideBlockedUsers(true)
    .build();
  ```
</TabItem>
</Tabs>




### Set Roles

This method allows you to fetch the users based on multiple roles.


<Tabs>
<TabItem value="Set Roles" label="Set Roles">

  ```javascript
let limit = 30;
let roles = ["default", "dev"];
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .setRoles(roles)
                    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let roles: Array<String> = ["default", "dev"];
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .setRoles(roles)
    .build();
  ```
</TabItem>
</Tabs>



### Friends Only

This property when set to true will return only the friends of the logged-in user.

<Tabs>
<TabItem value="Friends Only" label="Friends Only">

  ```javascript
let limit = 30;
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .friendsOnly(true)
                    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .friendsOnly(true)
    .build();
  ```
</TabItem>
</Tabs>





### Set Tags

This method accepts a list of tags based on which the list of users is to be fetched. The list fetched will only contain the users that have been tagged with the specified tags.

<Tabs>
<TabItem value="Set Tags" label="Set Tags">

  ```javascript
let limit = 30;
let tags = ["tag1", "tag2"];
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .setTags(tags)
                    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let tags: Array<String> = ["tag1", "tag2"];
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .setTags(tags)
    .build();
  ```
</TabItem>
</Tabs>




### With Tags

This property when set to true will fetch tags data along with the list of users.

<Tabs>
<TabItem value="With Tags" label="With Tags">

  ```javascript
let limit = 30;
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .withTags(true)
                    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .withTags(true)
    .build();
  ```
</TabItem>
</Tabs>



### Set UIDs

This method accepts a list of UIDs based on which the list of users is fetched. A maximum of `25` users can be fetched.

<Tabs>
<TabItem value="Set UIDs" label="Set UIDs">

  ```javascript
let limit = 30;
let UIDs = ["cometchat-uid-1", "cometchat-uid-2"];
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .setUIDs(UIDs)
                    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let UIDs: Array<String> = ["cometchat-uid-1", "cometchat-uid-2"];
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .setUIDs(UIDs)
    .build();
  ```
</TabItem>
</Tabs>





### Sort By

This method allows you to sort the User List by a specific property of User. By default the User List is sorted by `status => name => UID` . If `name` is pass to the `sortBy()` method the user list will be sorted by `name => UID`.

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
let limit = 30;
let UIDs = ["cometchat-uid-1", "cometchat-uid-2"];
let sortBy = "name";
let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .sortBy(sortBy)
                    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let sortBy: string = "name";
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .sortBy(sortBy)
    .build();
  ```
</TabItem>
</Tabs>




### Sort By Order

This method allows you to sort the User List in a specific order. By default the user list is sorted in ascending order.

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
let limit = 30;
let sortByOrder = "desc";
let usersReques = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .sortByOrder(sortOrder)
    .build();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let sortOrder: string = "desc";
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .sortOrder(sortOrder)
    .build();
  ```
</TabItem>
</Tabs>




Finally, once all the parameters are set to the builder class, you need to call the build() method to get the object of the UsersRequest class.

Once you have the object of the UsersRequest class, you need to call the fetchNext() method. Calling this method will return a list of User objects containing n number of users where n is the limit set in the builder class.

<Tabs>
<TabItem value="Users Request" label="Users Request">

  ```javascript
var limit = 30;
var usersRequest = new CometChat.UsersRequestBuilder()
											.setLimit(limit)
											.build();

usersRequest.fetchNext().then(
  userList => {
    console.log("User list received:", userList);
  }, error => {
    console.log("User list fetching failed with error:", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let limit: number = 30;
let usersRequest: CometChat.UsersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .build();

usersRequest.fetchNext().then(
    (userList: CometChat.User[]) => {
        console.log("User list received:", userList);
    }, (error: CometChat.CometChatException) => {
        console.log("User list fetching failed with error:", error);
    }
);
  ```
</TabItem>
</Tabs>



## Retrieve Particular User Details

To get the information of a user, you can use the `getUser()` method.

<Tabs>
<TabItem value="Retrieve Particular User's Details" label="Retrieve Particular User's Details">

  ```javascript
let UID = "UID";
CometChat.getUser(UID).then(
  user => {
    console.log("User details fetched for user:", user);
  }, error => {
    console.log("User details fetching failed with error:", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let UID: string = "UID";
CometChat.getUser(UID).then(
    (user: CometChat.User) => {
        console.log("User details fetched for user:", user);
    }, (error: CometChat.CometChatException) => {
        console.log("User details fetching failed with error:", error);
    }
);
  ```
</TabItem>
</Tabs>




The `getUser()` method takes the following parameters:

| Parameter | Description                                                |
| --------- | ---------------------------------------------------------- |
| UID       | The UID of the user for whom the details are to be fetched |


It returns the `User` object containing the details of the user.

## Get online user count

To get the total count of online users for your app, you can use the `getOnlineUserCount()` method.

<Tabs>
<TabItem value="Get Online User Count" label="Get Online User Count">

  ```javascript
CometChat.getOnlineUserCount().then(
  userCount => {
    console.log("Total online user count:", userCount);
  }, error => {
    console.log("Online user count fetching failed with error:", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
CometChat.getOnlineUserCount().then(
    (userCount: number) => {
        console.log("Total online user count:", userCount);
    }, (error: CometChat.CometChatException) => {
        console.log("Online user count fetching failed with error:", error);
    }
); 
  ```
</TabItem>
</Tabs>


This method returns the total online user count for your app.