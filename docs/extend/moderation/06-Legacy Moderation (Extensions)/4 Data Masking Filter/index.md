---
sidebar_position: 4
title: Data Masking Filter
slug: /data-masking-filter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Data Masking Extension allows you to hide phone numbers, email address and other sensitive information in messages.
You as a developer, can add regular expressions for matching & masking.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Data Masking Filter extension.
3. Open the Settings for this extension and configure the following:
    1. Drop Message: If enabled, any message with sensitive information will be dropped.
    2. Default Masks: Masks for Emails, Social Security Numbers (SSN), US phone numbers are built in.
    3. Custom Masks: Add more regex that will act as masks for some form of sensitive information.

4. Save the extension settings.

:::info
 Refer [this](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) for more details on Regular Expressions.
:::

## How does it work?

Once the Extension is enabled for your App and the Extension Settings are done, the recipients will receive metadata with the masked message. Here is a sample response:

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
	"extensions": {
		"data-masking": {
      "data": {
      	"sensitive_data": "yes",
				"message_masked": "My number is ***** & my email id is ****"
      }
 		}
	}
}
```
</TabItem>
</Tabs>



If the data-masking key is missing, it means that the extension is either not enabled or has timed out.

## Implementation

At the recipients' end, from the message object, you can fetch the metadata by calling the getMetadata() method. Using this metadata, you can fetch the masked message.

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
      extensionsObject.hasOwnProperty("data-masking")
    ) {
      var dataMaskingFilterObject = extensionsObject["data-masking"]["data"];
      var sensitive_data = dataMaskingFilterObject["sensitive_data"];
      var message_masked = dataMaskingFilterObject["message_masked"];
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
    if (extensionsObject != null && extensionsObject.has("data-masking"))
        {
          JSONObject dataMaskingObject = extensionsObject.getJSONObject("data-masking");
      		JSONObject data = dataMaskingObject.getJSONObject("data");
          String sensitive_data = data.getString("sensitive_data");
          String message_masked = data.getString("message_masked");
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

   if (extensionsObject != null && extensionsObject.has("data-masking")) {
     val dataMaskingDetails = extensionsObject.getJSONObject("data")
     val dataMaskingObject = dataMaskingDetails.getJSONObject("data")
     val sensitive_data = dataMaskingObject.getString("sensitive_data")
     val message_masked = dataMaskingObject.getString("message_masked"))
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

      if extensionsObject != nil && extensionsObject?["data-masking"] != nil 			 {                   
        var dataMasking = extensionsObject?["data-masking"] as! [String :  Any]
	      var dataMaskingDetails = dataMasking?["data"] as! [String :  Any]
        let sensitive_data = dataMaskingDetails["sensitive_data"] as! String
        let message_masked = dataMaskingDetails["message_masked"] as! String
      }
   }
}
```
</TabItem>
</Tabs>

