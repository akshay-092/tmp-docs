---
sidebar_position: 7
title: Pin Message
slug: /pin-message
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Pin message extension.

## How does it work?

Pin message extension provides you the ability to:

1. Pin messages
2. Unpin messages
3. Fetch all the pinned messages for a conversation.

Messages pinned in a conversation (be it one-on-one or group) are visible to the receiver(s) as well.

### 1. Pin a message

To pin a message, use the `callExtension` method provided by the SDK to make an HTTP POST request with the parameters as shown below.
You need to pass the `msgId` that has to be pinned.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension('pin-message', 'POST', 'v1/pin', {
    "msgId": 280 // The ID of the message to be pinned. Here 280.
}).then(response => {
    // { success: true }
})
.catch(error => {
    // Error occurred
});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();
body.put("msgId", 280);

CometChat.callExtension("pin-message", "POST", "/v1/pin", body,
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
CometChat.callExtension(slug: "pin-message", type: .post, endPoint: "v1/pin", body: ["msgId": 280] as [String : Any], onSuccess: { (response) in
         // Success
      }) { (error) in
         // Error occured
      }
```
</TabItem>
</Tabs>



### 2. Unpin a message

To unpin a message, use the `callExtension` method provided by the SDK to make an HTTP DELETE request with the parameters as shown below.
You need to pass the `msgId`, `receiverType` and the `receiver` (can be either UID or GUID based on `receiverType`).

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension('pin-message', 'DELETE', 'v1/unpin', {
    "msgId": 111,
    "receiverType": "group",
    "receiver": "cometchat-guid-1"
}).then(response => {
    // { success: true }
})
.catch(error => {
    // Error occurred
});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();
body.put("msgId", 111);
body.put("receiverType", "group");
body.put("receiver", "cometchat-guid-1");

CometChat.callExtension("pin-message", "DELETE", "/v1/unpin", body,
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
CometChat.callExtension(slug: "pin-message", type: .delete, endPoint: "v1/unpin", body: ["msgId": 111, "receiverType": "group", "receiver": "cometchat-guid-1"] as [String : Any], onSuccess: { (response) in
         // Success
      }) { (error) in
         // Error occured
      }
```
</TabItem>
</Tabs>



### 3. Fetch pinned messages

To fetch the pinned messages for a conversation, use the `callExtension` method provided by the SDK to make an HTTP GET request with the query parameters as shown below.
You need to pass the `receiverType` and the `receiver` (can be either UID or GUID based on `receiverType`).

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
const URL = `v1/fetch?receiverType=${RECEIVER_TYPE}&receiver=${RECEIVER}`;
CometChat.callExtension('pin-message', 'GET', URL, null).then(response => {
    // {pinnedMessages: []}
})
.catch(error => {
    // Error occured
});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
String URL = "/v1/fetch?receiverType=" + RECEIVER_TYPE + "&receiver=" + RECEIVER;

CometChat.callExtension("pin-message", "GET", URL, null,
new CometChat.CallbackListener < JSONObject > () {
    @Override
    public void onSuccess(JSONObject jsonObject) {
        // {pinnedMessages: []}
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
CometChat.callExtension(slug: "pin-message", type: .get, endPoint: "v1/fetch?receiverType=\(RECEIVER_TYPE)&receiver=\(RECEIVER)", body: nil, onSuccess: { (response) in
        // {pinnedMessages: []}
      }) { (error) in
        // Some error occured
      }
    }
```
</TabItem>
</Tabs>

