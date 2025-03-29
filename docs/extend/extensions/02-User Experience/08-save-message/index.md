---
sidebar_position: 9
title: Save Message
slug: /save-message
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Extension settings

1. Login to the [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Save message extension.

## How does it work?

Save message extension provides you the ability to:

1. Save messages
2. Unsave messages
3. Fetch all the saved messages by the user.

Saved messages are private and are visible to the user who has saved them.

### 1. Save a message

To save a message, use the `callExtension` method provided by the SDK to make an HTTP POST request with the parameters as shown below.
You need to pass the `msgId` of the message that has to be saved.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension('save-message', 'POST', 'v1/save', {
    "msgId": 111
}).then(response => {
    // { success: true }
})
.catch(error => {
    // Error occured
});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();
body.put("msgId", 111);

CometChat.callExtension("save-message", "POST", "/v1/save", body,
 new CometChat.CallbackListener < JSONObject > () {
    @Override
    public void onSuccess(JSONObject jsonObject) {
        //On Success
    }
    @Override
    public void onError(CometChatException e) {
        //On Failure
    }
});
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
CometChat.callExtension(slug: "save-message", type: .post, endPoint: "v1/save", body: ["msgId": 111] as [String : Any], onSuccess: { (response) in
         // Success
      }) { (error) in
         // Error occured
      }
```
</TabItem>
</Tabs>



### 2. Unsave a message

To unsave a message, use the `callExtension` method provided by the SDK to make an HTTP DELETE request with the parameters as shown below.
You need to pass the `msgId` of the message that needs to be unsaved.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension('save-message', 'DELETE', 'v1/unsave', {
    "msgId": 111
}).then(response => {
    // { success: true }
})
.catch(error => {
    // Error occured
});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();
body.put("msgId", 111);

CometChat.callExtension("save-message", "DELETE", "/v1/unsave", body,
 new CometChat.CallbackListener < JSONObject > () {
    @Override
    public void onSuccess(JSONObject jsonObject) {
        //On Success
    }
    @Override
    public void onError(CometChatException e) {
        //On Failure
    }
});
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
CometChat.callExtension(slug: "save-message", type: .delete, endPoint: "v1/unsave", body: ["msgId": 111] as [String : Any], onSuccess: { (response) in
         // Success
      }) { (error) in
         // Error occured
      }
```
</TabItem>
</Tabs>




### 3. Fetch saved messages

To fetch the saved messages for a user, use the `callExtension` method provided by the SDK to make an HTTP GET request with the query parameters as shown below.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
const URL = `v1/fetch`;
CometChat.callExtension('save-message', 'GET', URL, null).then(response => {
    // {savedMessages: []}
})
.catch(error => {
    // Error occured
});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
String URL = "/v1/fetch";

CometChat.callExtension("save-message", "GET", URL, null,
new CometChat.CallbackListener < JSONObject > () {
    @Override
    public void onSuccess(JSONObject jsonObject) {
        // {savedMessages: []}
    }
    @Override
    public void onError(CometChatException e) {
        // Some error occured
    }
});
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
CometChat.callExtension(slug: "save-message", type: .get, endPoint: "v1/fetch", body: nil, onSuccess: { (response) in
        // {savedMessages: []}
      }) { (error) in
        // Some error occured
      }
    }
```
</TabItem>
</Tabs>

