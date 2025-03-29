---
sidebar_position: 2
title: Smart Replies
slug: /smart-replies
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Smart Reply extension allows you to show quick reply options to a user so that they can easily respond to a message. We will always suggest 3 options; one positive, one neutral and one negative. We also add a category, in case you want to skip some suggestions.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Smart Reply extension.

## How does it work?

When a user sends a message, our Smart Reply extension will add metadata while the message is in-flight. The recipient will receive the message with metadata suggesting the responses.

At the recipients' end, from the message object, you can fetch the metadata by calling the getMetadata() method. Using this metadata, you can fetch suggested responses for the message.

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
  "extensions": {
    "smart-reply": {
          "reply_positive": "<possible positive response>",
          "reply_neutral": "<possible neutral response>",
          "reply_negative": "<possible negative response>",
          "category": "<category>"
    }
  }
}
```
</TabItem>
</Tabs>



If the data is missing, it means that the extension has timed out.

## Implementation

Using the Smart Reply extension, you can build a UI like this:

![](./assets/1623199856.png)

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
      extensionsObject.hasOwnProperty("smart-reply")
    ) {
      var smartReplyObject = extensionsObject["smart-reply"];
      var reply_positive = smartReplyObject["reply_positive"];
      var reply_neutral = smartReplyObject["reply_neutral"];
      var reply_negative = smartReplyObject["reply_negative"];
      var category = smartReplyObject["category"];
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
  if (extensionsObject != null && extensionsObject.has("smart-reply")) {
   JSONObject smartReply = extensionsObject.getJSONObject("smart-reply");
   String reply_positive = smartReply.getString("reply_positive");
   String reply_neutral = smartReply.getString("reply_neutral");
   String reply_negative = smartReply.getString("reply_negative");
   String category = smartReply.getString("category");

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
    if (extensionsObject.has("smart-reply")) {
    val smartReplyObject = extensionsObject.getJSONObject("smart-reply")
    if (smartReplyObject.has("reply_positive"))
    val reply_positive = smartReplyObject.getString("reply_positive")
    if (smartReplyObject.has("reply_neutral"))
    val reply_neutral = smartReplyObject.getString("reply_neutral")
    if (smartReplyObject.has("reply_negative"))
    val reply_negative = smartReplyObject.getString("reply_negative")
    if (smartReplyObject.has("category"))
    val category = smartReplyObject.getString("category")               
      }
    }
  }
}
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
var metadata : [String : Any]? = textMessage.metaData
if metadata != nil {
            
  var injectedObject : [String : Any]? = (metadata?["@injected"] as? [String : Any])!
            
  if injectedObject != nil && (injectedObject!["extensions"] != nil){
                
    var extensionsObject : [String : Any]? = injectedObject?["extensions"] as? [String : Any]
                
    if extensionsObject != nil && extensionsObject?["smart-reply"] != nil {
                    
      var smartReply = extensionsObject?["smart-reply"] as! [String :  Any]
      let reply_positive = smartReply["reply_positive"]
      let reply_neutral = smartReply["reply_neutral"]
      let reply_negative = smartReply["reply_negative"]
      let category = smartReply["category"]
    }
  }
}
```
</TabItem>
</Tabs>

