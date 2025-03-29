---
sidebar_position: 8
title: Stickers
slug: /stickers
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Stickers Extension is more like an image manager which allows you to quickly add/remove stickers directly from the dashboard.

![](./assets/1623199860.png)

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Stickers extension.
3. Open the Settings for this extension.
4. Click on Save to start using Stickers with in your app.

CometChat provides 14 Default Sets of stickers for your use. Apart from these 14 sets, you can also create your own sets.
Moreover, you can also choose stickers from each set as per your liking and use only those in your app.

## How does it work?

### Loading stickers

Before you start Sending or Receiving stickers in your app, you first have to load the Sticker Sets.
In your app, you can add a section/drawer that shows the enabled stickers. A user can click on any of these stickers to send it in a chat.

In order to load stickers, you can use the `callExtension` method provided by our SDKs.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension('stickers', 'GET', 'v1/fetch', null)
.then(stickers => {
 	// Stickers received
})
.catch(error => {
	// Some error occured
});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
CometChat.callExtension("stickers", "GET", "/v1/fetch", null,
    new CometChat.CallbackListener<JSONObject>() {
    @Override
    public void onSuccess(JSONObject responseObject) {
        // Stickers received here.
    }

    @Override
    public void onError(CometChatException e) {
        // Some error occured.
    }
});
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
CometChat.callExtension(slug: "stickers", type: .get, endPoint: "v1/fetch", body: nil, onSuccess: { (response) in
	print("Success",response)
}) { (error) in
  print("Error",error?.errorCode, error?.errorDescription)
}
```
</TabItem>
</Tabs>



In response, you will get the following JSON which contains `defaultStickers` and `customStickers` arrays. Stickers with the same stickerSetId can be grouped together while displaying them in your application.

<Tabs>
<TabItem value="JSON" label="JSON">

```json
{
  "defaultStickers": [
    { 
      "stickerOrder": "4",
      "stickerSetId": "9bc4bf29-6913-4a95-84c5-53a385c8fa0f",
      "stickerUrl": "https://site.bear1.png",
      "stickerSetName": "Bear",
      "id": "530fe94e-e7b9-424b-8f6f-fa8454ae8d97",
      "stickerSetOrder": "1",
      "stickerName": "bear_1.png"
    },
    {
      ...
    }, ...
  ],
  "customStickers":[
    {
      "modifiedAt": "2020-06-03T14:28:17.339Z",
      "stickerOrder": "1",
      "stickerSetId": "70bcd62c-103a-4d8a-acc8-a9af3debd423",
      "stickerUrl": "https://images.com/812/hurray.png",
      "createdAt": "2020-04-25T10:41:42.697Z",
      "stickerSetName": "rejoice",
      "id": "dd8ab83a-b036-4220-9351-ad968152fd36",
      "stickerSetOrder": "1",
      "stickerName": "hurray"
    },
    {
      ...
    }, ...
  ]
}
```
</TabItem>
</Tabs>



### Sending Stickers

Stickers can be sent as a media message. You can check [Send message](/sdk/javascript/send-message) section (linked for JavaScript) of our SDKs for more details.

Also, you can send stickers as [Custom message](/sdk/javascript/send-message#custom-message) and include the `incrementUnreadCount: true` in the metadata of that custom message. This will help you increment unread counts for Custom messages (in this case stickers).

### Receiving Stickers

Stickers are images that can be received and displayed as any regular media message.
In your application, you can use the `onMediaMessageReceived` listener in order to receive stickers.

Refer to our [Receive Messages](/sdk/javascript/receive-message) documentation under the SDK of your choice.