---
sidebar_position: 3
title: Block Users
slug: /block-users
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Block Users

_In other words, as a logged-in user, how do I block a user from sending me messages?_

You can block users using the `blockUsers()` method.  Once any user is blocked, all the communication to and from the respective user will be completely blocked. You can block multiple users in a single operation. The `blockUsers()` method takes a `List<String>` as a parameter which holds the list of `UIDs` to be blocked.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
List<String > uids = [];
uids.add("UID1");
uids.add("UID2");
uids.add("UID3");
CometChat.blockUser(uids, onSuccess: (Map<String, dynamic> map) {
  debugPrint("Blocked User Successfully $map ");
}, onError: (CometChatException e) {
  debugPrint("Blocked User Unsuccessful ${e.message} ");
});
  ```
</TabItem>
</Tabs>



In the `onSuccess()` callback, you receive a Map which contains `UIDs` as the keys and `success` or `fail` as the value based on if the block operation for the `UID` was successful or not.

## Unblock Users

_In other words, as a logged-in user, how do I unblock a user I previously blocked?_

You can unblock the already blocked users using the `unblockUsers()` method. You can unblock multiple users in a single operation. The `unblockUsers()` method takes a `List<String>` as a parameter which holds the list of `UIDs` to be unblocked.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
List<String > uids = [];
uids.add("UID1");
uids.add("UID2");
uids.add("UID3");

CometChat.unblockUser(uids, onSuccess: (Map<String, dynamic> map) {
   debugPrint("Blocked User Successfully $map ");
   }, onError: (CometChatException e) {
   debugPrint("Blocked User Unsuccessful ${e.message} ");
   });
  ```
</TabItem>
</Tabs>



In the `onSuccess()` callback, you receive a Map which contains `UIDs` as the keys and `success` or `fail` as the value based on if the unblock operation for the `UID` was successful or not.

## Get list of blocked users

_In other words, as a logged-in user, how do I get a list of all users I've blocked?_

In order to fetch the list of blocked users, you can use the `BlockedUsersRequest` class. To use this class i.e to create an object of the `BlockedUsersRequest class`, you need to use the `BlockedUsersRequestBuilder` class. The `BlockedUsersRequestBuilder` class allows you to set the parameters based on which the blocked users are to be fetched.

The `BlockedUsersRequestBuilder` class allows you to set the below parameters:

### Set Limit

This method sets the limit i.e. the number of blocked users that should be fetched in a single iteration.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
BlockedUsersRequest blockedUsersRequest =   (BlockedUsersRequestBuilder()
    ..limit = 50
    ).build();
  ```
</TabItem>
</Tabs>


### Set Search Keyword

This method allows you to set the search string based on which the blocked users are to be fetched.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
BlockedUsersRequest blockedUsersRequest =  (BlockedUsersRequestBuilder()
    ..limit = 50
    ..searchKeyword = "abc"
    ).build();
  ```
</TabItem>
</Tabs>



### Set Direction

- `CometChatBlockedUsersDirection.`_directionBlockedByMe_ - This will ensure that the list of blocked users only contains the users blocked by the logged in user.
- `CometChatBlockedUsersDirection.`_directionHasBlockedMe_ - This will ensure that the list of blocked users only contains the users that have blocked the logged in user.
- `CometChatBlockedUsersDirection.`_directionBoth_ - This will make sure the list of users includes both the above cases. This is the default value for the direction variable if it is not set.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
BlockedUsersRequest blockedUsersRequest = (BlockedUsersRequestBuilder()
    ..limit = 50
    .direction = CometChatBlockedUsersDirection.directionBlockedByMe
    ).build();  
  ```
</TabItem>
</Tabs>



Finally, once all the parameters are set in the builder class, you need to call the `build()` method to get the object of the `BlockedUsersRequest` class.

Once you have the object of the `BlockedUsersRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `User` objects containing n number of blocked users where N is the limit set in the builder class.


<Tabs>
<TabItem value="Dart" label="Dart">

  ```dart
BlockedUsersRequest blockedUsersRequest = (BlockedUsersRequestBuilder()
      ..limit = 30
    ).build();

blockedUsersRequest.fetchNext(onSuccess: (List<User> userList){
      debugPrint("Custom Message Sent Successfully : $userList ");
    }, onError: (CometChatException e){
      debugPrint("Blocked User Request failed with exception: ${e.message}");
}); 
  ```
</TabItem>
</Tabs>