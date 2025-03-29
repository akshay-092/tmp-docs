---
sidebar_position: 11
title: Bitly
slug: /bitly
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Learn how to minify the long website links in your text messages using Bitly._

## Before you begin

1. Sign up with [Bitly](https://bitly.com/).
2. Once you have logged in, click on the Account name displayed in the top right corner.
3. Click on Settings and in the left navigation pane, select API.
4. Click on Generate Token to create a new Access Token.
5. Using the above Access Token, fetch the GUID for your group using their [Get Groups API](https://dev.bitly.com/api-reference#getGroups).
6. The Access Token and Bitly Group's GUID are required in extension settings.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Bitly extension.
3. Open the settings for this extension.
4. Enter your Bitly Access Token and Group's GUID.
5. Save your settings.

## How does it work?

This extension uses the `callExtension` method provided by the CometChat SDK.
You can call the extension as follows:

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension("url-shortener-bitly", "POST", "v1/shorten", {
  text: "Your message with URL https://yourdomain.com/very/very/long/url",
})
  .then((response) => {
    // minifiedText in response
  })
  .catch((error) => {
    // Error occured
  });
```

</TabItem>
<TabItem value="Java" label="Java">

```java
String URL = "/v1/shorten";
JSONObject body=new JSONObject();

body.put("text", "Your message with URL https://yourdomain.com/very/very/long/url");

CometChat.callExtension("url-shortener-bitly", "POST", URL, body,
new CometChat.CallbackListener < JSONObject > () {
    @Override
    public void onSuccess(JSONObject jsonObject) {
        // minifiedText from the extension
    }
    @Override
    public void onError(CometChatException e) {
        // Some error occured
    }
});
```

</TabItem>
<TabItem value="Swift" label="Swift">

```swift
CometChat.callExtension(slug: "url-shortener-bitly", type: .post, endPoint: "v1/shorten", body: ["text": "Your message with URL https://yourdomain.com/very/very/long/url"], onSuccess: { (response) in
        // minifiedText from the extension
      }) { (error) in
        // Some error occured
      }
    }
```

</TabItem>
</Tabs>
