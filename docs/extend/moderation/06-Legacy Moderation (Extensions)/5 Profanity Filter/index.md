---
sidebar_position: 5
title: Profanity Filter
slug: /profanity-filter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Profanity Filter Extension helps you to mask or hide profanity in a message. We check for words from a blacklist (which you can customize) and then mask them.

## Extension settings

1. Login to the [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Profanity Filter extension.
3. Open Settings and choose to Drop messages with Profanity.
4. Also, you can provide the comma separated list of words that you would like to filter.

### Support for filtering emojis

Apart from words, we have also added support for filtering Profane emojis along with words.
The only thing that you need to keep in mind is, certain emojis have skin tones or other variations associated with them.

As part of the comma separated values, all the variations need to be covered.

**For eg:** In case of finger pointing left, you need to add:  👈🏿,👈🏾,👈🏽,👈🏼,👈🏻,👈.
Please note that the **yellow variant** has to be entered at the end of the list.

Refer [https://emojipedia.org/](https://emojipedia.org/) for details.

## How does it work?

The recipients will receive the normal message in the text field of the message object. Also, there will be a clean/filtered version of the message in the metadata section as shown below:

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
  "extensions": {
    "profanity-filter": {
      "profanity": "yes",
      "message_clean": "This is ****"
    }
  }
}
```
</TabItem>
</Tabs>



If the profanity-filter key is missing, it means that the extension is either not enabled or has timed out.

If there is some error inside the profanity-filter object, the list of bad words is probably empty. Save the settings with bad words to get the desired results.

## Implementation

By checking if `profanity` is set to `yes`, you can also consider showing a warning before reading the message.

From the extension settings, you can also choose to drop the message altogether.

At the recipients' end, from the `message` object, you can fetch the metadata by calling the  `getMetadata()` method. Using this metadata, you can fetch the masked message.

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
      extensionsObject.hasOwnProperty("profanity-filter")
    ) {
      var profanityFilterObject = extensionsObject["profanity-filter"];
      var profanity = profanityFilterObject["profanity"];
      var cleanMessage = profanityFilterObject["message_clean"];
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
    if (extensionsObject != null && extensionsObject.has("profanity-filter"))
        {
          JSONObject profanityFilterObject = extensionsObject.getJSONObject("profanity-filter");
          String profanity = profanityFilterObject.getString("profanity");
          String cleanMessage = profanityFilterObject.getString("message_clean");

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

   if (extensionsObject != null && extensionsObject.has("profanity-filter")) {
   val profanityFilterObject = extensionsObject.getJSONObject("profanity-filter")
   val dataObject = profanityFilterObject.getJSONObject("data")
      if (dataObject.has("profanity"))
         val profanity = dataObject.getString("profanity")
      if (dataObject.has("message_clean"))
        val message_clean= dataObject.getString("message_clean"))
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

      if extensionsObject != nil && extensionsObject?["profanity-filter"] != nil 			 {
                    
        var profanityFilterObject = extensionsObject?["profanity-filter"] as! [String :  Any]

        let profanity = profanityFilterObject["profanity"] as! String
        let cleanMessage = profanityFilterObject["language_translated"] as! String
      }
   }
}
```
</TabItem>
</Tabs>

