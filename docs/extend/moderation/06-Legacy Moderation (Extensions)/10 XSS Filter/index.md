---
sidebar_position: 10
title: XSS Filter
slug: /xss-filter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A client-side script can be injected into the message which can lead to an attack. The XSS Filter Extension helps you to sanitize the messages.

This is applicable only for the Web SDK.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the XSS Filter extension.
3. Open up the Settings and choose to Drop messages with XSS Scripts.

## How does it work?

Once the extension has been enabled from the Dashboard, recipients will receive metadata with the sanitized text.

Here is a sample response:

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"@injected": {
  "extensions": {
    "xss-filter": {
      "hasXSS": "yes"|"no",
      "sanitized_message": "<message>"
    }
  }
}
```
</TabItem>
</Tabs>



If the xss-filter key is missing, it means that the extension is either not enabled or has timed out.

## Implementation

At the recipients' end, from the message object, you can fetch the metadata by calling the getMetadata() method. Using this metadata, you can fetch the sanitized message.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
var metadata = message.getMetadata();
if (metadata != null) {
  var injectedObject = metadata["@injected"];
  if (injectedObject != null && injectedObject.hasOwnProperty("extensions")) {
    var extensionsObject = injectedObject["extensions"];
    if (extensionsObject != null &&
      extensionsObject.hasOwnProperty("xss-filter")){
      var xssFilterObject = extensionsObject["xss-filter"];
      var hasXSS = xssFilterObject["hasXSS"];
      var sanitized_message = xssFilterObject["sanitized_message"];
    }
  }
}
```
</TabItem>
</Tabs>



As mentioned earlier, the XSS is only possible for the web. So, the mobile platforms do not require you to fetch the sanitized message.