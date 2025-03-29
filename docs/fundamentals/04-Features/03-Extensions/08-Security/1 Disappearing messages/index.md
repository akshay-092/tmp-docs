---
sidebar_position: 1
title: Disappearing Messages
slug: /disappearing-messages
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Disappearing Messages extension allows end-users to send messages that disappear after a certain interval of time. This extension works for both private (one-on-one) and group messages.

This extension is also known as exploding messages on some platforms.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Disappearing messages extension.

## How does it work?

Once the messages are sent, you can immediately schedule them for deletion using the disappearing messages extension. The message with the mentioned `msgId`  gets deleted at `timeInMS`.

:::warning Warning
 The value of timeInMS should strictly be less than 1 year
:::

This extension uses the `callExtension`  method provided by the CometChat SDK.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.sendMessage(textMessage) // Can be any type of message
  .then(message => {
  	CometChat.callExtension('disappearing-messages','DELETE','v1/disappear',{
    	msgId: message.id, // The id of the message that was just sent
    	timeInMS: 1633521809051 // Time in milliseconds. Should be a time from the future.
  	}).then(response => {
      // Successfully scheduled for deletion
    })
  
  	// Logic to display the sent message on the screen.
  	// ...
	}).catch(error => {
  	// Error occured
	});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();
body.put("msgId", ID_OF_THE_SENT_MESSAGE);
body.put("timeInMS", 1633521809051); // Change to a future timestamp

// Once the message is sent successfully, call this.
CometChat.callExtension("disappearing-messages", "DELETE", "/v1/disappear", body,
	new CometChat.CallbackListener<JSONObject>() {
    @Override
    public void onSuccess(JSONObject responseObject) {
        // Will disappear successfully.
    }

    @Override
    public void onError(CometChatException e) {
      	// Some error occured.
    }
});
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
// Once a message is sent successfully, call this.
// Change the timeInMS to a future timestamp.
CometChat.callExtension(slug: "disappearing-messages", type: .delete, endPoint: "v1/disappear", body: ["msgId":SENT_MESSAGE_ID, "timeInMS": 1633521809051], onSuccess: { (response) in
	// Will disappear successfully
}) { (error) in
  // Some error occured
}
```
</TabItem>
</Tabs>

