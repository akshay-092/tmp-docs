---
sidebar_position: 11
title: Token Management
slug: /token-management
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Register tokens

Token registration can now be done using the callExtension method provided by the CometChat SDK. The token can be FCM token or APNs token and VoIP token.

This can be achieved using the code snippet below:

**For FCM token:**

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
// For FCM Token
CometChat.callExtension('push-notification', 'POST', 'v2/tokens', {
	fcmToken: "fcm_token"
})
.then(response => {
	// Success response
})
.catch(error => {
	// Error occured
})
```

</TabItem>
<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();

body.put("fcmToken", "fcm_token");

CometChat.callExtension("push-notification", "POST", "/v2/tokens", body,
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
CometChat.callExtension(slug: "push-notification", type: .post, endPoint: "v2/tokens", body: ["fcmToken": "fcm_token"] as [String : Any], onSuccess: { (response) in
         // success response
      }) { (error) in
         // Error occured
      }
```
</TabItem>
</Tabs>


**For APNs tokens:**

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
// For APNs tokens
CometChat.callExtension('push-notification', 'POST', 'v2/tokens', {
	apnsToken: "apns_token",
  voipToken: "voip_token"
})
.then(response => {
	// Success response
})
.catch(error => {
	// Error occured
})
```

</TabItem>
<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();

body.put("apnsToken", "apns_token");
body.put("voipToken", "voip_token");

CometChat.callExtension("push-notification", "POST", "/v2/tokens", body,
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
CometChat.callExtension(slug: "push-notification", type: .post, endPoint: "v2/tokens", body: ["apnsToken": "apns_token", "voipToken": "voip_token"] as [String : Any], onSuccess: { (response) in
         // Success response
      }) { (error) in
         // Error occured
      }
```
</TabItem>
</Tabs>


## Get tokens

This provides a list of all the Push Notifications tokens that have been registered for the current user. The tokens are segregated based on the platform.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension('push-notification', 'GET', 'v2/tokens', null)
.then(response => {
	// Success response
})
.catch(error => {
	// Error occured
})
```

</TabItem>
<TabItem value="Java" label="Java">

```java
CometChat.callExtension("push-notification", "GET", "/v2/tokens", null,
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
CometChat.callExtension(slug: "push-notification", type: .get, endPoint: "v2/tokens", body: nil, onSuccess: { (response) in
         // Success response
      }) { (error) in
         // Error occured
      }
```
</TabItem>
</Tabs>


The response will be as follows:
<Tabs>
<TabItem value="JSON" label="JSON">

```json
{
  "ios": [
    "cLztQGbuPA91bG3rkRcgcQYvlKuTlWGmHC1RnCwrTrbyT0VF"
  ],
  "web": [
    "cLztQGbuPA91bG3rkRcgcQYvlKuTlWGmHC1RnxyzTrbyT0VF"
  ],
  "android": [
    "dLztQGbuPA91bG3rkRckcQYvlKuTlWGmHC1RnxyzTrbyT0VF"
  ]
}
```
</TabItem>
</Tabs>


## Delete tokens

Token deletion is handled implicitly by the `CometChat.logout()` method. That is, once the user is logged out of the current CometChat session, his/her registered Push Notification token automatically gets deleted.

The same can be achieved explicitly by making a call to the extension using `callExtension` method as shown below. However, the token that is deleted belongs to the current session of the end-user by passing `all=false` as a parameter.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension('push-notification', 'DELETE', 'v2/tokens', {
  all: false, // true when ALL the registered tokens for the logged-in user need to be deleted
})
  .then((response) => {
    // Success response
  })
  .catch((error) => {
    // Error occured
  });
```

</TabItem>
<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();

body.put("all", false); // true when ALL the registered tokens for the logged-in user need to be deleted

CometChat.callExtension("push-notification", "DELETE", "/v2/tokens", body,
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
CometChat.callExtension(slug: "push-notification", type: .delete, endPoint: "v2/tokens", body: ["all": false] as [String : Any], onSuccess: { (response) in // true when ALL the registered tokens for the logged-in user need to be deleted
         // Details about the created poll
      }) { (error) in
         // Error occured
      }
```
</TabItem>
</Tabs>


:::warning Warning
 All the tokens for the current user will be deleted if you pass `all=true`. This needs to be used with care as the other logins of the current user will stop receiving Push Notifications.
:::