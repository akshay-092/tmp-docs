---
sidebar_position: 1
title: Retrieve Users
slug: /retrieve-users
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Retrieve Logged In User Details

You can get the details of the logged-in user using the `getLoggedInUser()` method. This method can also be used to check if the user is logged in or not. If the method returns `nil`, it indicates that the user is not logged in and you need to log the user into CometChat SDK.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let user = CometChat.getLoggedInUser();
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
User *user = [CometChat getLoggedInUser];
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
<TabItem value="Swift" label="Swift">

```swift
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: 30)
.build()
```
</TabItem>
</Tabs>


### Set Search Keyword

This method allows you to set the search string based on which the users are to be fetched.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: 30)
.set(searchKeyword: "abc")
.build()
```
</TabItem>
</Tabs>


### Search In

This method allows you to define in which user property should the searchKeyword be searched. This method only works in combination with `setSearchKeyword()`. By default the keyword is searched in both UID & Name.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let searchKeyword = "super"
let searchIn = ["uid", "name"]
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: 30)
.set(searchKeyword: searchKeyword)
..searchIn(searchIn)
.build()
```
</TabItem>
</Tabs>


### Set Status

The status based on which the users are to be fetched. The status parameter can contain one of the below two values:  

- CometChat.UserStatus.online - will return the list of only online users.
- CometChat.UserStatus.offline - will return the list of only offline users. 

If this parameter is not set, will return all the available users.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: 30)
.set(status: .online)
.build()
```
</TabItem>
</Tabs>


### Hide Blocked Users

This method is used to determine if the blocked users should be returned as a part of the user list. if set to true, the user list will not contain the users blocked by the logged-in user.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: 30)
.hideBlockedUsers(true)
.build()
```
</TabItem>
</Tabs>


### Set Roles

This method allows you to fetch the users based on multiple roles.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: 30)
.set(roles : ["role1","role2"])
.build()
```
</TabItem>
</Tabs>


### Friends Only

This property when set to true will return only the friends of the logged-in user.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: 30)
.friendsOnly(true)
.build();
```
</TabItem>
</Tabs>


### Set Tags

This method accepts a list of tags based on which the list of users is to be fetched. The list fetched will only contain the users that have been tagged with the specified tags.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: 30)
.set(tags: ["tag1", "tag2"])
.build();
```
</TabItem>
</Tabs>


### With Tags

This property when set to true will fetch tags data along with the list of users.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: 30)
.withTags(true)
.build()
```
</TabItem>
</Tabs>


### Set UIDs

This method accepts a list of UIDs based on which the list of users is fetched. A maximum of 25 users can be fetched.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let UIDs = ["cometchat-uid-1", "cometchat-uid-2"]
let limit = 30
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: limit)
.setUIDs(UIDs)
.build();
```
</TabItem>
</Tabs>


### Sort By

This method allows you to sort the User List by a specific property of User. By default the User List is sorted by `status => name => UID` . If `name` is pass to the `sortBy()` method the user list will be sorted by `name => UID`.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let sortBy = "name"
let limit = 30
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: limit)
.sortBy(sortBy)
.build();
```
</TabItem>
</Tabs>


### Sort By Order

This method allows you to sort the User List in a specific order. By default the user list is sorted in ascending order.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 30
let usersRequest = UsersRequest.UsersRequestBuilder()
.set(limit: limit)
.sortOrder(.desc)
.build();
```
</TabItem>
</Tabs>


Finally, once all the parameters are set to the builder class, you need to call the build() method to get the object of the UsersRequest class.

Once you have the object of the `UsersRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `User` objects containing n number of users where n is the limit set in the builder class.


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let limit = 20;

let usersRequest = UsersRequest.UsersRequestBuilder(limit: limit).build();

usersRequest.fetchNext(onSuccess: { (users) in

  for user in users {

     print("User: " + user.stringValue())
  }

}) { (error) in

  print("User list fetching failed with error: " + error!.errorDescription);
}
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSInteger limit = 30 ;

UsersRequest *userRequest = [[[UsersRequestBuilder alloc]initWithLimit:limit] build];

[userRequest fetchNextOnSuccess:^(NSArray<User *> * users) {
    
    for (User *user in users) {

      NSLog(@"User: %@ ",[user stringValue]);
    }
    
} onError:^(CometChatException * error) {
    
    NSLog(@"User list fetching failed with error: %@",[error errorDescription]);
    
}];
```
</TabItem>
</Tabs>


## Retrieve Particular User Details

To get the information of a user, you can use the `getUser()` method.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let uid  = "cometchat-uid-1";

CometChat.getUser(UID: uid, onSuccess: { (user) in

  print("User: " + user.stringValue())

}) { (error) in

  print("User fetching failed with error: " + error.errorDescription);
}
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSString *UID = @"cometchat-uid-1";

[CometChat getUserWithUID:UID onSuccess:^(User * user) {
    
    NSLog(@"User: %@",[user stringValue]);
    
} onError:^(CometChatException * error) {
    
    NSLog(@"User fetching failed with error: %@",[error errorDescription]);
}];
```
</TabItem>
</Tabs>


The `getUser()` method takes the following parameters:

| Parameter | Description | 
| ---- | ---- | 
| UID | The `UID` of the user for whom the details are to be fetched. | 


On success, the You will receive a `User` objects.