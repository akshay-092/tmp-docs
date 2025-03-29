---
sidebar_position: 10
title: TinyURL
slug: /tinyurl
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Learn how to minify the long website links in your text messages using TinyURL._

## Before you begin

1. Sign up with [TinyURL](https://tinyurl.com/app/login)
2. Once you have logged in, click on Account in the top right corner.
3. In the left navigation pane, select API.
4. Create an API Token by giving it a name and permission to Create TinyURL.
5. Make note of the API Token as it will be required in Extension's settings.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the TinyURL extension.
3. Open the settings and enter the TinyURL API Token.
4. If you have chosen a paid plan, you can also save your BYO domain or subdomain. Default is set to `tinyurl.com`
5. Save your settings.

:::info BYO Domain
If you don't plan on using a custom domain, please save `tinyurl.com` as the default value here.
:::

## How does it work?

This extension uses the `callExtension` method provided by CometChat SDK. You can call the extension as follows:

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension("url-shortener-tinyurl", "POST", "v1/shorten", {
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

CometChat.callExtension("url-shortener-tinyurl", "POST", URL, body,
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
CometChat.callExtension(slug: "url-shortener-tinyurl", type: .post, endPoint: "v1/shorten", body: ["text": "Your message with URL https://yourdomain.com/very/very/long/url"], onSuccess: { (response) in
        // minifiedText from the extension
      }) { (error) in
        // Some error occured
      }
    }
```

</TabItem>
</Tabs>
