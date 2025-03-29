---
sidebar_position: 10
title: Mentions
slug: /mentions
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Mentions are a great way to get someone's attention in a conversation. Mentions start with the @ symbol followed by a  name.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Mentions extension.

## How does it work?

### Implement UI logic in your app

 Simply enabling the extension will not add the functionality to your apps. The Mentions extension heavily depends on the UI. It should have the following logic already implemented.

1. When `@` symbol is typed in the message composer, show a list of all the users of that group.
2. Insert the selected name from the list in the message composer as `@{Name|UID}`.
3. The message bubbles and the message composer render the `@{Name|UID}` as just `@Name`.

For showing a list of users in a group, you can refer to our [Retrieve Group Members](/sdk/javascript/retrieve-group-members) documentation under the SDK of your choice.

_**For example:**_

To mention Andrew Joseph with UID `cometchat-uid-1`, the text message should be **Hello @\{Andrew Joseph|cometchat-uid-1}**. However, it should be rendered or formatted as **Hello @Andrew Joseph** in the message composer as well as the message bubbles in the chat.

You have to use third party libraries that make the above mentioned implementation simpler and a rich text editor like [Quill](https://quilljs.com/) or [TinyMCE](https://www.tiny.cloud/tinymce/features/).

### Listing messages with mentions

To get all the messages with mentions for a user, make use of the `callExtension` method provided by CometChat SDK as shown below:

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
const URL = "v1/fetch";
CometChat.callExtension('mentions', 'GET', URL, null).then(response => {
    // {messages: []}
})
.catch(error => {
    // Error occured
});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
String URL = "/v1/fetch";

CometChat.callExtension("mentions", "GET", URL, null,
new CometChat.CallbackListener < JSONObject > () {
    @Override
    public void onSuccess(JSONObject jsonObject) {
        // {messages: []}
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
CometChat.callExtension(slug: "mentions", type: .get, endPoint: "v1/fetch", body: nil, onSuccess: { (response) in
        // { messages: [] }
      }) { (error) in
        // Some error occured
      }
    }
```
</TabItem>
</Tabs>


