---
sidebar_position: 6
title: Voice Transcription
slug: /voice-transcription
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Voice transcription extension allows you to convert an audio message into text.

## Before you begin

1. Sign up with [Rev.ai](https://rev.ai/)
2. Get your `Access Token` for configuring this extension.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Voice Transcription extension.
3. Open the Settings for this extension.
4. Enter the Rev.ai Access Token, and click on save.

## How does it work?

Once the Extension is enabled for your App and the settings are done, the recipients will receive metadata with the transcription details.

The transcription information will be updated later for the message and hence you need to implement the `onMessageEdited` listener. Please check our [Edit ,message](/sdk/javascript/edit-message) documentation under the SDK of your choice.

Here is a sample response:

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
  "extensions": {
    "voice-transcription": {
      "transcribed_message": "This is a test"
  }
}
```
</TabItem>
</Tabs>



If the voice-transcription key is missing, it means that either the extension is not enabled or has timed out.

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
    if (
      extensionsObject != null &&
      extensionsObject.hasOwnProperty("voice-transcription")
    ) {
      var voiceTranscriptionObject = extensionsObject["voice-transcription"];
      var transcribed_message = voiceTranscriptionObject["transcribed_message"];
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
    if (extensionsObject != null && extensionsObject.has("voice-transcription")) {
          JSONObject transcriptionObject = extensionsObject.getJSONObject("voice-transcription");
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

   if (extensionsObject != null && extensionsObject.has("voice-transcription")) {
     val transcriptionObject = extensionsObject.getJSONObject("voice-transcription")
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

      if extensionsObject != nil && extensionsObject?["voice-transcription"] != nil {
        var transcriptionObject = extensionsObject?["voice-transcription"] as! [String :  Any]
      }
   }
}
```
</TabItem>
<TabItem value="Flutter" label="Flutter">
```dart
Map<String, dynamic>? metadata = message.metadata;
try {
  if (metadata != null) {
    Map? injectedObject = metadata["@injected"];

    if (injectedObject != null &&
        injectedObject.containsKey("extensions")) {
      Map extensionsObject = injectedObject["extensions"];

      if (extensionsObject.containsKey("voice-transcription")) {
        Map voiceTranscriptionObject =
            extensionsObject["voice-transcription"];

        List attachments = voiceTranscriptionObject['attachments'];

        for (var attachment in attachments) {
          if (attachment['error'] == null) {
            final attachmentData = attachment['data'];
            final transcribedMessage = attachmentData['transcribed_message'];
          }
        }
      }
    }
  }
} catch (e, stack) {
  debugPrint("$stack");
}
```
</TabItem>
</Tabs>

