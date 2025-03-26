---
sidebar_position: 2
title: Upgrading from V1
slug: /resources-upgrading-from-v1
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![](./assets/1623199338.png)

Upgrading from v1.x to v2 is fairly simple. Below are the major changes that are released as a part of CometChat Pro v2.

## Initialization

The `CometChat.init()` method now takes an additional parameter. This parameter is an object of the `AppSettings` class. This object can be created by using the `AppSettingsBuilder` class. The `AppSettings` class provides CometChat with the below 2 details:

1. Region: The region of your app
2. [Presence Subscription](./user-presence)


<Tabs>
<TabItem value="Java" label="Java">

```java
// v1.x

CometChat.init(this, appID, new CometChat.CallbackListener<String>() {
  @Override
  public void onSuccess(String successMessage) {
    Log.d(TAG, "Initialization completed successfully");
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Initialization failed with exception: " + e.getMessage());
  }
});


// v2.0

AppSettings appSettings=new AppSettings.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion("eu").build();

CometChat.init(this, appID,appSettings, new CometChat.CallbackListener<String>() {
  @Override
  public void onSuccess(String successMessage) {
    Log.d(TAG, "Initialization completed successfully");
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Initialization failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
</Tabs>

## Text Message Constructor

Since the only possible valid value the `messageType` parameter could take in the constructor was `CometChatConstants.MESSAGE_TYPE_TEXT`, we have removed the `messageType` parameter from the `TextMessage` constructor.


<Tabs>
<TabItem value="Java" label="Java">

```java
// v1.x

TextMessage textMessage = new TextMessage(receiverID, messageText, messageType, receiverType);


// v2.0

TextMessage textMessage = new TextMessage(receiverID, messageText, receiverType);
```
</TabItem>
</Tabs>


## Mark a Message as Read

In v1.x, for marking the messages as read, every message had to marked as read individually using the `CometChat.markMessageAsRead()` which took the entire message object as the input parameter.

Starting v2.0, the method name has been changed to `markAsRead()` which takes the `messageId `,`receiverId`, and `receiverType` as input. This method, will mark all the messages as read. For more information, please check the [mark messages as read](./delivery-read-receipts#mark-messages-as-read) guide.




<Tabs>
<TabItem value="Java" label="Java">

```java
// v1.x

CometChat.markMessageAsRead(message);

// v2.0

CometChat.markAsRead(messageId, receiverId, receiverType);
```
</TabItem>
</Tabs>

## Retrieve List of Friends

In v1.x to fetch only friends, you had to enable the Show only friends setting in the CometChat Dashboard.

Starting v2.x, we have added a method in the UsersRequestBuilder to fetch only friends. This method accepts `boolean` and fetches only friends if it is set to `true` else it fetches all the users. By default it is set to `false`. For more information, please check the [retrieve list of users](./retrieve-users#retrieve-list-of-users) guide.


<Tabs>
<TabItem value="Java" label="Java">

```java
//v2.x

UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
.setLimit(limit)
.friendsOnly(true)
.build();
```
</TabItem>
</Tabs>
