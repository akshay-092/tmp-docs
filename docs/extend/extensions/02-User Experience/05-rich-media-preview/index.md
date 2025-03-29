---
sidebar_position: 5
title: Rich Media Preview
slug: /rich-media-preview
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Rich Media Preview Extension allows the developer to generate rich preview panels for all the popular sites. This extension fetches the first URL from the message for the generation of a preview.

## Before you begin

1. Sign up with [Iframely](https://iframely.com/embed).
2. Get their API key to configure the extension.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Rich Media Preview extension.
3. Open the Settings for this extension.
4. Enter the iFramely API Key.
5. Save your settings.

## How does it work?

If the text message contains a URL, the extension will create a Preview using your iFramely credentials. These details can then be used to show a nice preview card for that URL.

The information about the Preview will be updated later for the message and hence you need to implement the `onMessageEdited` listener. Please check our [Edit message](/sdk/javascript/edit-message) documentation under the SDK of your choice.

Here is a sample response (for [https://stackoverflow.com](https://stackoverflow.com)):

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
  "extensions": {
    "rich-media": {
      "url": "https://stackoverflow.com",
        "meta": {
        "description": "Stack Overflow | The World’s Largest Online Community for Developers",
          "title": "Stack Overflow - Where Developers Learn, Share, & Build Careers",
            "canonical": "https://stackoverflow.com/",
              "site": "Stack Overflow"
      },
      "links": {
        "thumbnail": [
          {
            "href": "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded",
            "type": "image/png",
            "rel": [
              "thumbnail",
              "og",
              "ssl"
            ],
            "content_length": 6562,
            "media": {
              "width": 316,
              "height": 316
            }
          },
          {
            "href": "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
            "rel": [
              "thumbnail",
              "ssl",
              "apple-touch-icon",
              "icon"
            ],
            "type": "image/png"
          }
        ],
          "icon": [
            {
              "href": "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
              "rel": [
                "thumbnail",
                "ssl",
                "apple-touch-icon",
                "icon"
              ],
              "type": "image/png"
            },
            {
              "href": "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196",
              "rel": [
                "shortcut",
                "icon",
                "ssl"
              ],
              "type": "image/icon"
            }
          ]
      },
      "rel": [
        "summary",
        "ssl",
        "html5",
        "inline"
      ],
        "html": "<div class=\"iframely-embed\"><div class=\"iframely-responsive\" style=\"height: 140px; padding-bottom: 0;\"><a href=\"https://stackoverflow.com/\" data-iframely-url=\"//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fstackoverflow.com&amp;key=eda089f6090d00a60bba3ab368d2a3e6\"></a></div></div><script async src=\"//cdn.iframe.ly//embed.js\" charset=\"utf-8\"></script>"
    }
  }
}
```
</TabItem>
</Tabs>



## Implementation

At the recipients' end, from the message object, you can fetch the metadata by calling the getMetadata() method. Using this metadata, you can fetch the Rich Media Embed.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
var metadata = message.getMetadata();
if (metadata != null) {
  var injectedObject = metadata["@injected"];
  if (injectedObject != null && injectedObject.hasOwnProperty("extensions")) {
    var extensionsObject = injectedObject["extensions"];
    if (extensionsObject != null && extensionsObject.hasOwnProperty("rich-media")) {
      var richMediaObject = extensionsObject["rich-media"];
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
    if (extensionsObject != null && extensionsObject.has("rich-media")) {
          JSONObject richMediaObject = extensionsObject.getJSONObject("rich-media");
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

   if (extensionsObject != null && extensionsObject.has("rich-media")) {
     val richMediaObject = extensionsObject.getJSONObject("rich-media")
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

      if extensionsObject != nil && extensionsObject?["rich-media"] != nil {
        var richMediaObject = extensionsObject?["rich-media"] as! [String :  Any]
      }
   }
}
```
</TabItem>
</Tabs>

