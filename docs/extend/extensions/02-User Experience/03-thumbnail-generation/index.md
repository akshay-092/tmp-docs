---
sidebar_position: 3
title: Thumbnail Generation
slug: /thumbnail-generation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Thumbnail Generation extension will help you generate a thumbnail preview of an image or a video message.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to Extensions section and enable the Thumbnail Generation extension.

## How does it work?

A small, medium and large thumbnail is generated for every attachment of a Media message of type video or image.

For eg, if a Media message of type video is sent with 2 attachments, the links to these thumbnails are then provided in the metadata of the message as shown below:

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
 	"extensions": {
		"thumbnail-generation": {
			"url_small": "https://data.cometchat.io/a1/small.png",
			"url_medium": "https://data.cometchat.io/a1/medium.png",
    	"url_large": "https://data.cometchat.io/a1/large.png",
			"attachments": [
				{
					"data": {
          	"name": "a1.mp4",
          	"extension": "mp4",
          	"mimeType": "video/mp4",
          	"url": "http://commondatastorage.com/sample/a1.mp4",
          	"thumbnails": {
							"url_small": "https://data.cometchat.io/a1/small.png",
          		"url_medium": "https://data.cometchat.io/a1/medium.png",
          		"url_large": "https://data.cometchat.io/a1/large.png",
        		},
      		},
	      	"error": null,
				},
				{
      		"data": {
        		"name": "a2.mp4",
        		"extension": "mp4",
        		"mimeType": "video/mp4",
        		"url": "http://data.cometchat.io/media/asdfasdf.mp4",
        		"thumbnails": {
          		"url_small": "https://data.cometchat.io/a2/small.png",
          		"url_medium": "https://data.cometchat.io/a2/medium.png",
          		"url_large": "https://data.cometchat.io/a2/large.png",
        		},
      		},
      		"error": null,
    		},
    		{
      		"data": {
        		"name": "a3.mp3",
        		"extension": "mp3",
        		"mimeType": "audio/mp3",
        		"url": "http://data.cometchat.io/media/asdfasdf.mp3",
        		"thumbnails": null,
      		},
      		"error": {
        		"code": "ERR_FILETYPE_NOT_SUPPORTED",
        		"message": "Support only for jpg, jpeg, png, gif, mov, mpg, mpeg, mp4, wmv, avi",
        		"devMessage": "Support only for jpg, jpeg, png, gif, mov, mpg, mpeg, mp4, wmv, avi",
        		"httpStatusCode": 400,
      		}
    		}
  		]
		}
  }
}
```
</TabItem>
</Tabs>



If the thumbnail-generation key is missing, it means that the extension is either not enabled or has timed out.

:::info
 The `url_small`, `url_medium` & `url_large` keys to the outside of `attachments` are the thumbnail URLs for the first attachment from the `attachments` array. These have been retained for backward compatibility only.<br/>You can iterate over `attachments` array for better implementation.
:::

## Implementation

You can make use of the `getMetadata()` method to extract the thumbnail details for a message.

The `url` field is the link to the actual image or video.

You can make use of `url_small`, `url_medium` & `url_large` keys for showing thumbnails based on the device of your end users.

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
      extensionsObject.hasOwnProperty("thumbnail-generation")
    ) {
      const { attachments } = extensionsObject["thumbnail-generation"];
      for (const attachment of attachments) {
        if (!attachment.error) {
        	const { url_small, url_medium, url_large } = attachment.data.thumbnails;
        	// Use the urls accordingly.
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
    if (extensionsObject != null && extensionsObject.has("thumbnail-generation"))
        {
          JSONObject tg = extensionsObject.getJSONObject("thumbnail-generation");
      		JSONArray attachments = tg.getJSONArray("attachments");

      		for (int i = 0; i < attachments.length(); i++) {
            JSONObject attachment = attachments.getJSONObject(i);
            JSONObject error = attachment.getJSONObject("error");
            if (error == null) {
              JSONObject data = attachment.getJSONObject("data");
              JSONObject thumbnails = data.getJSONObject("thumbnails");
            	String url_small = thumbnails.getString("url_small");
            	String url_medium = thumbnails.getString("url_medium");
            	String url_large = thumbnails.getString("url_large");
							// Use the urls are per requirement
            }
          }
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
			if (extensions != null && extensions.has("thumbnail-generation")) {
  			val tg = extensions.getJSONObject("thumbnail-generation")
  			val attachments = tg.getJSONArray("attachments")
				for (i in 0 until attachments.length()) {
          val attachment = attachments.getJSONObject(i)
          val error = attachment.getJSONObject("error")
          if (error == null) {
            val data = attachment.getJSONObject("data")
            val thumbnails = data.getJSONObject("thumbnails")
          	val url_small = thumbnails.getString("url_small")
  					val url_medium = thumbnails.getString("url_medium")
  					val url_large = thumbnails.getString("url_large")
          }
        }
			}
		}
	}
}
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
if let metaData = message?.metaData , let injected = metaData["@injected"] as? [String : Any], let extensions = injected["extensions"] as? [String : Any], let attachments = extensions["thumbnail-generation"] as? [[String : Any]] {

    for attachment in attachments {

      if let data = attachment["data"] as? [String:Any] , let thumbnails = data["thumbnails"] as? [String:any] {
    
       if let urlSmall = URL(string: thumbnails["url_small"] as? String) {
        // Use the url accordingly.
      }
       if let urlMedium = URL(string: thumbnails["url_medium"] as? String) {
        // Use the url accordingly.
      }
      if let urlLarge = URL(string: thumbnails["url_large"] as? String) {
        // Use the url accordingly.
      }
      // check for attachment.error if "thumbnails" is null
   }
}
}
```
</TabItem>
</Tabs>



:::info warning
 Unlike image thumbnails, which are normally generated in milliseconds, video thumbnails may take a little longer. Before viewing the preview, we recommend verifying to see if the file exists. If the difference between message sentAt and the current time is less than 5 seconds, you can set a simple timer to monitor every second.
:::