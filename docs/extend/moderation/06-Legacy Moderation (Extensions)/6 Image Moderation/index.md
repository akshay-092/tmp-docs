---
sidebar_position: 6
title: Image Moderation
slug: /image-moderation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

AI-powered image moderation to detect unsafe content.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Image Moderation extension.
3. Open up the Settings and choose to Drop messages with NSFW images.

## How does it work?

After analyzing, it classifies the image into four categories:

1. Explicit Nudity
2. Suggestive Nudity
3. Violence
4. Visually Disturbing.

Along with that, you will receive the confidence, on a scale of 0 to 100.

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
  "extensions": {
    "image-moderation": {
      "unsafe": "yes/no",
      "confidence": "99",
      "category": "explicit_nudity/suggestive/violence/visually_disturbing",
      "attachments": [
        {
        	"data": {
            "name": "1584307225_38928710_1d3e5acc1b009e1c4ce239bedc2851f9.jpeg",
            "extension": "jpeg",
						"size": 402852,
						"mimeType": "image/png",
						"url": "https://media.com/1594986359_2067554844_9.png",
          	"verdict": {
            	"unsafe": "yes/no",
      				"confidence": "99",
      				"category": "explicit_nudity/suggestive/violence/visually_disturbing",
            }
          },
          "error": null,
        },
        {
          "data": {
          	"name": "1584307225_38928710_1d3e5acc1b009e1c4ce239bedc2851f9.jpeg",
            "extension": "jpeg",
						"size": 402852,
						"mimeType": "image/png",
						"url": "https://media.com/1594986359_2067554844_9.png",
            "verdict": null,
          },
          "error": {
          	"code": "ERROR_CODE",
            "message": "Error Message",
            "devMessage": "Error message",
            "source": "ext-api"
          }
        }
      ]
    }
  }
}
```
</TabItem>
</Tabs>



A value for `confidence` that is less than 50 is likely to be a false-positive. So we recommend moderating only if `confidence` is higher than 50.

If the image-moderation key is missing, it means that either the extension is not enabled or has timed out.

:::info
 The `unsafe`, confidence & category keys to the outside of `attachments` are the result for the first attachment from the `attachments` array. These have been retained for backward compatibility only.<br/> You can iterate over `attachments` array for better implementation.
:::

## Implementation

You can then either show a warning or drop the image message. 

![](./assets/3azkty7v69ivt0o8g6i1zt26wqjudtkenwdjw5ua9mku21rfbr8zous9yuaqrlh0.png)

At the recipients' end, from the `message` object, you can fetch the metadata by calling the  `getMetadata()` method. Using this metadata, you can fetch information whether the image is safe or unsafe.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
const metadata = message.getMetadata();
if (metadata != null) {
  const injectedObject = metadata["@injected"];
  if (injectedObject != null && injectedObject.hasOwnProperty("extensions")) {
    const extensionsObject = injectedObject["extensions"];
    if (
      extensionsObject != null &&
      extensionsObject.hasOwnProperty("image-moderation")
    ) {
      const { attachments } = extensionsObject["image-moderation"];
      for (const attachment of attachments) {
        if (!attachment.error) {
        	const { unsafe } = attachment.data.verdict;
        	// Check the other parameters as required.
        }
      }
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
    if (extensionsObject != null && extensionsObject.has("image-moderation"))
        {
          JSONObject tg = extensionsObject.getJSONObject("image-moderation");
      		JSONArray attachments = tg.getJSONArray("attachments");

      		for (int i = 0; i < attachments.length(); i++) {
            JSONObject attachment = attachments.getJSONObject(i);
            JSONObject error = attachment.getJSONObject("error");
            if (error == null) {
              JSONObject data = attachment.getJSONObject("data");
              JSONObject verdict = data.getJSONObject("verdict");
            	String unsafe = thumbnails.getString("unsafe");
							// Check the other parameters as required.
            }
          }
        }
    }
}
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
if let metaData = message?.metaData , let injected = metaData["@injected"] as? [String : Any], let extensions = injected["extensions"] as? [String : Any], let attachments = extensions["image-moderation"] as? [[String : Any]] {

    for attachment in attachments {

      if let data = attachment["data"] as? [String:Any] , let verdict = data["verdict"] as? [String:any] {
    	// Check for the parameters as required.
       if let unsafe = URL(string: verdict["unsafe"] as? String) {
        // Use the url accordingly.
      }
      
      // check for attachment.error if "verdict" is null
   }
}
}
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
if (metadata != null) {
  if (metadata.has("@injected")) {
		val injected = metadata.getJSONObject("@injected")
    if (injected != null && injected.has("extensions")) {
    	val extensions = injectedJSONObject.getJSONObject("extensions")
			if (extensions != null && extensions.has("image-moderation")) {
  			val tg = extensions.getJSONObject("image-moderation")
  			val attachments = tg.getJSONArray("attachments")
				for (i in 0 until attachments.length()) {
          val attachment = attachments.getJSONObject(i)
          val error = attachment.getJSONObject("error")
          if (error == null) {
            val data = attachment.getJSONObject("data")
            val verdict = data.getJSONObject("verdict")
          	val unsafe = verdict.getString("unsafe")
            // use other parameters are required.
          }
        }
			}
		}
	}
}
```
</TabItem>
</Tabs>

