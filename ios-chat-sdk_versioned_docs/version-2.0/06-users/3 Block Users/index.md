---
sidebar_position: 3
title: Block Users
slug: /block-users
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Block Users

_In other words, as a logged-in user, how do I block a user from sending me messages?_

You can block users using the `blockUsers()` method.  Once any user is blocked, all the communication to and from the respective user will be completely blocked. You can block multiple users in a single operation. The`blockUsers()` method takes an array of string as a parameter that holds the list of UIDs to be blocked.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let blockUsers = ["UID1", "UID2", "UID3"]

CometChat.blockUsers(blockUsers, onSuccess: {
                
   print("Blocked user successfully.")
                
}, onError: { (error) in
                
   print("Blocked user failed with error: \(error?.errorDescription)")
                
})
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSMutableArray *users = [NSMutableArray alloc]init];
[users addObject:@"UID1"];
[users addObject:@"UID2"];
[users addObject:@"UID3"];

[CometChat blockUsers: users onSuccess:^ (NSDictionary *dict) {

  NSLog(@"Blocked user successfully.");
  
}, onError:^ (CometChatException *error){

  NSLog(@"Blocked user failed with error: %@", error.errorDescription);
}];
```
</TabItem>
</Tabs>


In the `onSuccess()` callback, you receive a dictionary which contains UIDs as the keys and "success" or "fail" as the value based on if the block operation for the UID was successful or not.

## Unblock Users

You can unblock the already blocked users using the `unblockUsers()` method. You can unblock multiple users in a single operation. The`unblockUsers()` method takes an array of string as a parameter that holds the list of UIDs to be unblocked.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let unblockUsers = ["UID1", "UID2", "UID3"]

CometChat.unblockUsers(unblockUsers, onSuccess: { (users) in
                
   print("Unblocked user successfully.")
                
}, onError: { (error) in
                
   print("Unblocked user failed with error: \(error?.errorDescription)")
                
})
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSMutableArray *users = [NSMutableArray alloc]init];
[users addObject:@"UID1"];
[users addObject:@"UID2"];
[users addObject:@"UID3"];

[CometChat unblockUsers: users onSuccess:^ (NSDictionary *dict){

  NSLog(@"unblocked user successfully.");
  
}, onError:^ (CometChatException *error){

  NSLog(@"unblocked user failed with error : %@", error.errorDescription);
}];
```
</TabItem>
</Tabs>


In the `onSuccess()` callback, you receive a HashMap which contains UIDs as the keys and "success" or "fail" as the value based on if the unblock operation for the UID was successful or not.

## Get list of blocked users

In order to fetch the list of blocked users, you can use the `BlockedUsersRequest` class. To use this class i.e to create an object of the `BlockedUsersRequest class`, you need to use the `BlockedUsersRequestBuilder` class. The `BlockedUsersRequestBuilder` class allows you to set the parameters based on which the blocked users are to be fetched.

The `BlockedUsersRequestBuilder` class allows you to set the below parameters:

1. `set(limit: Int)` - This method sets the limit i.e. the number of blocked users that should be fetched in a single iteration.


```
let blockedUserRequest = BlockedUserRequest.BlockedUserRequestBuilder.set(limit: 20).build();
```


2. `set(searchKeyword: String)` - This method allows you to set the search string based on which the blocked users are to be fetched.

```
let blockedUserRequest = BlockedUserRequest.BlockedUserRequestBuilder
.set(searchKeyword: "abc")
.set(limit: 20)
.build();
```

3. `set(direction: CometChat.Blocked)` - This can hold one of the below values:
a. CometChat.Blocked.byMe - This will ensure that the list of blocked users only contains the users blocked by the logged-in user.
b. CometChat.Blocked.me - setting the direction to this will return only the list of users that have blocked the logged-in user.
c. CometChat.Blocked.both - this will make sure the list of users includes both the above cases. This is the default value for the direction variable if it is not set.

```
let blockedUserRequest = BlockedUserRequest.BlockedUserRequestBuilder
.set(searchKeyword: "abc")
.set(limit: 20)
.set(direction: .both)
.build();
```


Finally, once all the parameters are set to the builder class, you need to call the build() method to get the object of the `BlockedUsersRequest` class.

Once you have the object of the `BlockedUsersRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `User` objects containing n number of blocked users where n is the limit set in the builder class.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let blockedUserRequest = BlockedUserRequest.BlockedUserRequestBuilder(limit: 20).build();

blockedUserRequest.fetchNext(onSuccess : { (users) in
            
   print("Blocked users: \(users)")
            
}, onError : { (error) in
            
   print("Error while fetching the blocked user request:  \(error?.errorDescription)")

})
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
BlockedUserRequest *blockedUserRequest = [[[BlockedUserRequestBuilder alloc]initWithLimit:2] build];

[blockedUserRequest fetchNextOnSuccess: ^(NSArray<User *> * users){

  NSLog(@"Blocked user list fetched successfully.")
  
} OnError:^ (CometChatException *error){

  NSLog(@"Fetching block user list failed with error: %@", error.errorDescription);
  
}];
```
</TabItem>
</Tabs>
