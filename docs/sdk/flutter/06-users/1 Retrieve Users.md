---
sidebar_position: 1
title: Retrieve Users
slug: /retrieve-users
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Retrieve Logged In User Details

You can get the details of the logged-in user using the `getLoggedInUser()` method. This method can also be used to check if the user is logged in or not. If the method returns `null`, it indicates that the user is not logged in and you need to log the user into CometChat.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
User user = await CometChat.getLoggedInUser()   
  ```
</TabItem>
</Tabs>


This method will return a `User` object containing all the information related to the logged-in user.

## Retrieve List of Users

In order to fetch the list of users, you can use the `UsersRequest` class. To use this class i.e to create an object of the UsersRequest class, you need to use the `UsersRequestBuilder` class. The `UsersRequestBuilder` class allows you to set the parameters based on which the users are to be fetched.

The `UsersRequestBuilder` class allows you to set the below parameters:

### Set Limit

This method sets the limit i.e. the number of users that should be fetched in a single iteration.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 50
    ).build();
  ```
</TabItem>
</Tabs>



### Set Search Keyword

This method allows you to set the search string based on which the users are to be fetched.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 50
  	..searchKeyword = "abc"
    ).build();
  ```
</TabItem>
</Tabs>


### Set Status

The status based on which the users are to be fetched. The status parameter can contain one of the below two values:

- CometChatUserStatus.online - will return the list of only online users.
- CometChatUserStatus.offline - will return the list of only offline users.

If this parameter is not set, will return all the available users.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 50
  	..userStatus = CometChatUserStatus.online
    ).build(); 
  ```
</TabItem>
</Tabs>



If this parameter is not set, will return all users.

### Hide Blocked Users

This method is used to determine if the blocked users should be returned as a part of the user list. If set to `true`, the user list will not contain the users blocked by the logged-in user.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 50
  	..hideBlockedUsers = true
    ).build();  
  ```
</TabItem>
</Tabs>



### Set Roles

This method allows you to fetch the users based on multiple roles.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
List<String> roles = [];
roles.add("role1");
roles.add("role2");
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 50
  	..roles = roles
    ).build();
  ```
</TabItem>
</Tabs>



### Friends Only

This property when set to true will return only the friends of the logged-in user.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 50
  	..friendsOnly = true
    ).build();
  ```
</TabItem>
</Tabs>


### Set Tags

This method accepts a list of tags based on which the list of users is to be fetched. The list fetched will only contain the users that have been tagged with the specified tags.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
List<String> tags = [];
tags.add("tag1");
tags.add("tag2");
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 50
  	..tags = tags
    ).build();  
  ```
</TabItem>
</Tabs>


### With Tags

This property when set to true will fetch tags data along with the list of users.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
List<String> tags = [];
tags.add("tag1");
tags.add("tag2");
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 50
  	..withTags = true
    ).build();
  ```
</TabItem>
</Tabs>


### Set UIDs

This method accepts a list of UIDs based on which the list of users is fetched. A maximum of 25 users can be fetched.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
List<String> uids = [];
uids.add("UID1");
uids.add("UID2");
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 25
  	..uids = uids
    ).build(); 
  ```
</TabItem>
</Tabs>




Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `UsersRequest` class.

Once you have the object of the `UsersRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `User` objects containing 'n' number of users depending on the limit set.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
UsersRequest usersRequest = (UsersRequestBuilder()
    ..limit = 25
    ).build();

usersRequest.fetchNext(onSuccess: (List<User> userList){
      debugPrint("User List Fetched Successfully : $userList");
    },onError: (CometChatException e){
      debugPrint("User List Fetch Failed: ${e.message}");
    });
  ```
</TabItem>
</Tabs>

## Retrieve Particular User Details

To get the information of a user, you can use the `getUser()` method.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
String UID = "UID";
    
CometChat.getUser(UID, onSuccess: (User user){
      debugPrint("User Fetched Successfully : $user");
    }, onError: (CometChatException e){
      debugPrint("User Fetch Failed: ${e.message}");
    });
  ```
</TabItem>
</Tabs>




The `getUser()` method takes the following parameters:

| Parameter | Description | 
| ---- | ---- | 
| `UID` | The UID of the user for whom the details are to be fetched | 


On success, the `User` object containing the details of the user is returned.

## Get online user count

To get the total count of online users for your app, you can use the `getOnlineUserCount()` method.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
CometChat.getOnlineUserCount(onSuccess: (int count){
      debugPrint("Online User Count: $count"); 
    }, onError: (CometChatException e){
      debugPrint("User Count Fetch Failed: ${e.message}");
    });
  ```
</TabItem>
</Tabs>
