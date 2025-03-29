---
sidebar_position: 9
title: Live Streaming by API Video
slug: /video-broadcasting
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Live streaming by api.video extension enables you to set up a live stream to broadcast to a large number of users.

## Before you begin

1. Sign up with [api.video](https://api.video/)
2. Get your **API Key**. Make sure you set up a payment method with them in order to get the **Production API key**. The Sandbox API Key will not work.
3. Broadcaster needs to download and install [OBS](https://obsproject.com/), a free and open-source software.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Live Streaming (Video Broadcasting) extension.
3. Open the Settings for this extension.
4. Enter the api.video Production API Key.
5. You can also select whether you want to record the live stream.

## How does it work?

This extension delivers 2 different configurations:

1. The broadcaster gets the `server` address and `streamKey`.
2. The viewers get the `embed link` along with a few more details.

### Broadcaster

#### 1. Get broadcast details

The CometChat SDKs provide a `callExtension` method that can be called to trigger this extension. The broadcaster has to provide the following:

1. Receiver type - `user` or `group`
2. The `receiver` of the broadcast link (can be a `uid` for a user or `guid` in case of a group)

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension('broadcast', 'POST', 'v1/broadcast', {
  receiverType: 'user/group',
  receiver: 'uid/guid'
}).then(response => {
	// Success response
}).catch(error => {
	// Some error occured
});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();
body.put("receiverType", "user/group");
body.put("receiver", "uid/guid");

CometChat.callExtension("broadcast", "POST", "/v1/broadcast", body,
    new CometChat.CallbackListener<JSONObject>() {
    @Override
    public void onSuccess(JSONObject responseObject) {
        // Broadcaster details
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
CometChat.callExtension(slug: "broadcast", type: .post, endPoint: "v1/broadcast", body: ["receiverType":"user/group", "receiver":"uid/guid"], onSuccess: { (response) in
        // Success response
      }) { (error) in
        // Some error occured
      }
```
</TabItem>
</Tabs>



If the call is successful, the method will return the following JSON response:

<Tabs>
<TabItem value="JSON" label="JSON">

```json
{
   "broadcaster": {
      "server": "rtmp://broadcast.api.video_s",
      "streamKey": "04cb0167-5za4-4ba6-831x-efa28e1917o3"
  	}
}
```
</TabItem>
</Tabs>



#### 2. Start Streaming

In order to start streaming/broadcasting, launch OBS studio and go to:
**Settings &gt; Stream &gt;  Select `Custom`** from drop-down and enter the `server` and `streamKey`**.**

Once the details have been entered, click OK and close the Settings Panel.
Next, you can click on the "Start Streaming" button.

### Viewers

The viewers can either be a Group or a User.

The recipient(s) will receive a text message with `embed link` and `metadata` as follows:

<Tabs>
<TabItem value="Text message" label="Text message">

```Text message
Hello! I’m currently broadcasting. Use this link to join the broadcast: https://embed.api.video/live/li3WPpN3Ixj7dTDwdtL0dKt1
```
</TabItem>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
  "extensions": {
    "broadcast": {
      "hls": "https://live.api.video/li6xl2dCcboxPGTFq1D4Fhmb.m3u8",
      "iframe": "<iframe src=\"https://embed.api.video/live/li6xl2dCcboxPGTFq1D4Fhmb\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
      "player": "https://embed.api.video/live/li6xl2dCcboxPdGTFq1D4Fhmb",
      "thumbnail": "https://cdn.api.video/live/li6xl2dCcboxPGTFq1D4Fhmb/thumbnail.jpg"
    }
  }
}
```
</TabItem>
</Tabs>



## Implementation

At the viewers' end, from the message object, you can fetch the metadata by calling the getMetadata() method. Using this metadata, you can fetch the broadcast details.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
var metadata = message.getMetadata();
if (metadata != null) {
  var injectedObject = metadata["@injected"];
  if (injectedObject != null && injectedObject.hasOwnProperty("extensions")) {
    var extensionsObject = injectedObject["extensions"];
    if (
      extensionsObject != null &&
      extensionsObject.hasOwnProperty("broadcast")
    ) {
      var broadcastObject = extensionsObject["broadcast"];
    }
  }
}
```
</TabItem>
<TabItem value="Java" label="Java">

```java
JSONObject metadata = message.getMetadata();
if (metadata != null) {
  JSONObject injectedObject = metadata.getJSONObject("@injected");
  if (injectedObject != null && injectedObject.has("extensions")) {
    JSONObject extensionsObject = injectedObject.getJSONObject("extensions");
    if (extensionsObject != null && extensionsObject.has("broadcast")) {
          JSONObject broadcastObject = extensionsObject.getJSONObject("broadcast");
        }
    }
}
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
if (metadata != null) {
  if (metadata.has("@injected")) {
   val injectedJSONObject = metadata.getJSONObject("@injected")
   if (injectedJSONObject != null && injectedJSONObject.has("extensions")) {
   val extensionsObject = injectedJSONObject.getJSONObject("extensions")

   if (extensionsObject != null && extensionsObject.has("broadcast")) {
     val broadcastObject = extensionsObject.getJSONObject("broadcast")
   }
  }
 }
}
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
let textMessage = message as? TextMessage
var metadata : [String : Any]? = textMessage.metaData
if metadata != nil {

    var injectedObject : [String : Any]? = (metadata?["@injected"] as? [String : Any])!
            
    if injectedObject != nil && (injectedObject!["extensions"] != nil){

      var extensionsObject : [String : Any]? = injectedObject?["extensions"] as? [String : Any]

      if extensionsObject != nil && extensionsObject?["broadcast"] != nil {
        var broadcastObject = extensionsObject?["broadcast"] as! [String :  Any]
      }
   }
}
```
</TabItem>
</Tabs>

