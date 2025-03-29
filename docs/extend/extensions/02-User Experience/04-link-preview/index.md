---
sidebar_position: 4
title: Link Preview
slug: /link-preview
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Link Preview extension will help you show a preview of the web page for every link in your message.

While this extension gives you all the details required for generating a preview, our [Rich Media Preview](./rich-media-preview) gives you a decorated iframe with the styling.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Link Preview extension.

## How does it work?

We provide you a few details about the URL that is in your message. The details are as follows:

1. Description
2. Favicon
3. Image
4. Title
5. URL.

Say, for example, a user shares a Facebook link in their message, then our extension will query the link for the details that you need to build a preview.

These details are provided as part of metadata as shown in the example below:

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
  "extensions": {
    "link-preview": {
      "links": [
        {
          "description": "Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.",
          "favicon": "https://static.xx.fbcdn.net/rsrc.php/yz/r/KFyVIAWzntM.ico",
          "image": "https://www.facebook.com/images/fb/icon/325x325.png",
          "title": "Facebook - Log In or Sign Up",
          "url": "https://www.facebook.com"
        }
      ]
    }
  }
}
```
</TabItem>
</Tabs>



If the link-preview key is missing, it means that the extension is either not enabled or has timed out.

Also, it may happen that certain details are missing or the details are not available altogether. Consider switching to Rich Media Preview for better experience.

## Implementation

Using the Link Preview extension, you can build a preview box similar to the one you've seen in Slack.

![](./assets/1623199763.png)

You can fetch the details for the Link Preview using `getMetadata()` method.

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
      extensionsObject.hasOwnProperty("link-preview")
    ) {
      var linkPreviewObject = extensionsObject["link-preview"];
      var links = linkPreviewObject["links"];
      var description = links[0]["description"];
      var favicon = links[0]["favicon"];
      var image = links[0]["image"];
      var title = links[0]["title"];
      var url = links[0]["url"];
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
        if (extensionsObject != null && extensionsObject.has("link-preview")){
          
         JSONObject linkObject = extensionsObject.getJSONObject("link-preview");
         JSONArray linkArray= linkObject.getJSONArray("links");
         JSONObject linkPreviewObject=linkArray.getJSONObject(0);
          if (linkPreviewObject.has("description"))
         String description = linkPreviewObject.getString("description");
          if (linkPreviewObject.has("favicon"))
         String favicon = linkPreviewObject.getString("favicon");
          if (linkPreviewObject.has("image"))
         String image = linkPreviewObject.getString("image");
          if (linkPreviewObject.has("title"))
         String title = linkPreviewObject.getString("title");
          if (linkPreviewObject.has("url"))
         String url = linkPreviewObject.getString("url");

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
   if (extensionsObject.has("link-preview")) {

       val linkObject = extensionsObject.getJSONObject("link-preview")
       val linksArray = linkObject.getJSONArray("links")
       val linkPreviewObject = linksArray.getJSONObject(0)

       if (linkPreviewObject.has("description")) 
          val description = linkPreviewObject.getString("description")
       if (linkPreviewObject.has("favicon")) 
           val favicon = linkPreviewObject.getString("favicon")
       if (linkPreviewObject.has("image")) 
           val image= linkPreviewObject.getString("image")
       if (linkPreviewObject.has("title")) 
           val title= linkPreviewObject.getString("title")
       if (linkPreviewObject.has("url"))
           val url=  linkPreviewObject.getString("url")                      
        }
      }
   }
 }
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
let textMessage = message as? TextMessage

if let metaData = textMessage.metaData , let injected = metaData["@injected"] as? [String : Any], let cometChatExtension =  injected["extensions"] as? [String : Any], let linkPreviewDictionary = cometChatExtension["link-preview"] as? [String : Any], let linkArray = linkPreviewDictionary["links"] as? [[String: Any]] {

      guard let linkPreview = linkArray[safe: 0] else {
        return
      }

      if let linkTitle = linkPreview["title"] as? String {
          print(linkTitle)
      }

      if let description = linkPreview["description"] as? String {
          print(description)
      }

      if let thumbnail = linkPreview["image"] as? String {
          print(thumbnail)
      }

      if let linkURL = linkPreview["url"] as? String {
          print(linkURL)
      }

      if let favIcon = linkPreview["favicon"] as? String {
          print(favIcon)
      }
	}
```
</TabItem>
</Tabs>



:::warning Warning
 Links that take more than a second to resolve will be automatically skipped to keep in-flight transit time to a minimum.
:::