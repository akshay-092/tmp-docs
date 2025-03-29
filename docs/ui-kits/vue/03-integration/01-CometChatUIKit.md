---
sidebar_position: 1
title: CometChat UI Kit
slug: /ui-kit-methods
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatUIKit` is a class that contains all necessary methods to help initialise the [CometChat SDK](/sdk/javascript/overview) with valid credentials for the UI Kit to utilise.

### Init

This method initialises the settings required for [CometChat SDK](/sdk/javascript/overview). First, ensure UIKitSettings is set and then call the `init()` method on app startup

:::info

Make sure you replace the **APP_ID**, **REGION** and **AUTH_KEY** with your CometChat App ID, Region and Auth Key in the below code. The Auth Key is an optional property of the `UIKitSettings` Class. It is intended for use primarily during proof-of-concept (POC) development or in the early stages of application development. You can use the [Auth Token](#login-using-auth-token) method to log in securely.

:::

<Tabs>
<TabItem value="ts" label="Javascript">

```javascript
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";

const COMETCHAT_CONSTANTS = {
  APP_ID: "APP_ID", // Replace with your App ID
  REGION: "REGION", // Replace with your App Region ("eu" or "us")
  AUTH_KEY: "AUTH_KEY", // Replace with your Auth Key
};

//create the builder
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .setExtensions() //pass an array of extensions to enable. By default all the extensions will be enabled
  .build();

//Initialize CometChat
CometChatUIKit.init(UIKitSettings)?.then(() => {
  //login your user
});
```

</TabItem>
</Tabs>

### getLoggedInUser

You can use this method to check if there is any existing session in the SDK. This method should return the details of the logged-in user.

<Tabs>
<TabItem value="ts" label="Javascript">

```javascript
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";

CometChatUIKit.getLoggedinUser()
  .then((user) => {
    //Login user
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

### Login

The login() method returns the User object containing all the information of the logged-in user.

#### Login using Auth Key

:::info

This straightforward authentication method is ideal for proof-of-concept (POC) development or during the early stages of application development. For production environments, however, we strongly recommend using an [Auth Token](#login-using-auth-token) instead of an Auth Key to ensure enhanced security.

:::

<Tabs>
<TabItem value="ts" label="Javascript">

```javascript
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";

const UID = "UID";
const authKey = "AUTH_KEY";

CometChatUIKit.getLoggedinUser()
  .then((user) => {
    if (!user) {
      //Login user
      CometChatUIKit.login(UID)
        .then((user) => {
          console.log("Login Successful:", { user });
          //mount your app
        })
        .catch(console.log);
    } else {
      //user already logged in
      //mount your app
    }
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

:::info Note

- Make sure you replace the UID with a genuine UID in the above code.

- We have set up 5 users for testing having UIDs: cometchat-uid-1, cometchat-uid-2, cometchat-uid-3, cometchat-uid-4, and cometchat-uid-5.

:::

#### Login using Auth Token

This advanced authentication procedure does not use the Auth Key directly in your client code thus ensuring safety.

1.  [Create a User](https://api-explorer.cometchat.com/reference/creates-user) via the CometChat API when the user signs up in your app.
2.  [Create an Auth Token](https://api-explorer.cometchat.com/reference/create-authtoken) via the CometChat API for the new user and save the token in your database.
3.  Load the Auth Token in your client and pass it to the `loginWithAuthToken()` method.

<Tabs>
<TabItem value="ts" label="Javascript">

```javascript
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";

const authToken = "AUTH_TOKEN";

CometChatUIKit.getLoggedinUser()
  .then((user) => {
    if (!user) {
      //Login user
      CometChatUIKit.loginWithAuthToken(authToken)
        .then((user) => {
          console.log("Login Successful:", { user });
          //mount your app
        })
        .catch(console.log);
    } else {
      //user already logged in
      //mount your app
    }
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

### Logout

This method is used for ending user session of the logged in user

<Tabs>
<TabItem value="ts" label="Javascript">

```javascript
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";

CometChatUIKit.logout();
```

</TabItem>
</Tabs>

### Create user

This method takes a `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.

<Tabs>
<TabItem value="ts" label="Javascript">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";

const authKey = "AUTH_KEY";
const UID = "user1";
const name = "Kevin";

var user = new CometChat.User(UID);
user.setName(name);
CometChatUIKit.createUser(user, authKey)
  .then((user) => {
    console.log("user created", user);

    CometChatUIKit.login(UID, authKey)
      .then((user) => {
        console.log("Login Successful:", { user });
        //mount your app
      })
      .catch(console.log);
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

### Update user

This method takes a `User` object and the `Auth Key` as inputs and returns the updated `User` object on the successful execution of the request.

<Tabs>
<TabItem value="ts" label="Javascript">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";

const authKey = "AUTH_KEY";
const UID = "user1";
const name = "Kevin Fernandez";

var user = new CometChat.User(UID);
user.setName(name);
CometChatUIKit.updateUser(user, authKey)
  .then((user) => {
    console.log("user updated", user);
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

### Send text message

This method sends a text message in a 1:1 or group chat. You need to pass a `TextMessage` object to it.

<Tabs>
<TabItem value="1c" label="1:1 Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";
import { CometChatUIKitConstants } from "@cometchat/uikit-resources";

const receiverID = "UID";
const messageText = "Hello world!";
const receiverType = CometChatUIKitConstants.MessageReceiverType.user;
const textMessage = new CometChat.TextMessage(
  receiverID,
  messageText,
  receiverType
);

CometChatUIKit.sendMessage(textMessage)
  .then((message) => {
    console.log("Message sent successfully:", message);
  })
  .catch(console.log);
```

</TabItem>
<TabItem value="gc" label="Group Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";
import { CometChatUIKitConstants } from "@cometchat/uikit-resources";

const receiverID = "GUID";
const messageText = "Hello world!";
const receiverType = CometChatUIKitConstants.MessageReceiverType.group;
const textMessage = new CometChat.TextMessage(
  receiverID,
  messageText,
  receiverType
);

CometChatUIKit.sendMessage(textMessage)
  .then((message) => {
    console.log("Message sent successfully:", message);
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

### Send media message

This method sends a media message in a 1:1 or group chat. You need to pass a `MediaMessage` object to it.

:::info

Make sure you replace the `INPUT FILE OBJECT` with the actual [file](https://developer.mozilla.org/en-US/docs/Web/API/File).

:::

<Tabs>
<TabItem value="1c" label="1:1 Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";
import { CometChatUIKitConstants } from "@cometchat/uikit-resources";

const receiverID = "UID";
const messageType = CometChat.MESSAGE_TYPE.FILE;
const receiverType = CometChatUIKitConstants.MessageReceiverType.user;
const mediaMessage = new CometChat.MediaMessage(
  receiverID,
  `INPUT FILE OBJECT`,
  messageType,
  receiverType
);

CometChatUIKit.sendMediaMessage(mediaMessage)
  .then((message) => {
    console.log("Media message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
<TabItem value="gc" label="Group Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";
import { CometChatUIKitConstants } from "@cometchat/uikit-resources";

const receiverID = "GUID";
const messageType = CometChatUIKitConstants.MessageTypes.file;
const receiverType = CometChatUIKitConstants.MessageReceiverType.group;
const mediaMessage = new CometChat.MediaMessage(
  receiverID,
  `INPUT FILE OBJECT`,
  messageType,
  receiverType
);

CometChatUIKit.sendMediaMessage(mediaMessage)
  .then((message) => {
    console.log("Media message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

### Send custom message

This method allows you to send custom messages which are neither text nor media messages.

<Tabs>
<TabItem value="1c" label="1:1 Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";
import { CometChatUIKitConstants } from "@cometchat/uikit-resources";

const receiverID = "UID";
const customData = {
  latitude: "50.6192171633316",
  longitude: "-72.68182268750002",
};
const customType = "location";
const receiverType = CometChatUIKitConstants.MessageReceiverType.user;
const customMessage = new CometChat.CustomMessage(
  receiverID,
  receiverType,
  customType,
  customData
);

CometChatUIKit.sendCustomMessage(customMessage)
  .then((message) => {
    console.log("custom message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
<TabItem value="gc" label="Group Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";
import { CometChatUIKitConstants } from "@cometchat/uikit-resources";

const receiverID = "GUID";
const customData = {
  latitude: "50.6192171633316",
  longitude: "-72.68182268750002",
};
const customType = "location";
const receiverType = CometChatUIKitConstants.MessageReceiverType.group;
const customMessage = new CometChat.CustomMessage(
  receiverID,
  receiverType,
  customType,
  customData
);

CometChatUIKit.sendCustomMessage(customMessage)
  .then((message) => {
    console.log("custom message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

### Send Form message

This method allows you to send [Form Message](/web-shared/form-message) which are the extension of Interactive Message

<Tabs>
<TabItem value="1c" label="1:1 Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript"; //import sdk package
import { CometChatUIKit } from "@cometchat/chat-uikit-vue"; //import uikit package
import {
  CometChatUIKitConstants,
  APIAction,
  ButtonElement,
  TextInput,
  FormMessage,
} from "@cometchat/uikit-resources"; //import shared package

const receiverID = "UID";
// Create an instance of APIAction
let apiAction = new APIAction("https://example.com/api", "POST");

// Create an instance of ButtonElement
let submitButton = new ButtonElement("1", apiAction, "Submit");

// Create an instance of TextInput
let nameInput = new TextInput("1", "Please enter your name");
// Create a new instance of FormMessage

let formMessage = new FormMessage(
  "receiverId",
  CometChatUIKitConstants.MessageReceiverType.group,
  "Title",
  [nameInput],
  submitButton
);

CometChatUIKit.sendFormMessage(formMessage)
  .then((message) => {
    console.log("Form message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
<TabItem value="gc" label="Group Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript"; //import sdk package
import { CometChatUIKit } from "@cometchat/chat-uikit-vue"; //import uikit package
import {
  CometChatUIKitConstants,
  APIAction,
  ButtonElement,
  TextInput,
  FormMessage,
} from "@cometchat/uikit-resources"; //import shared package

const receiverID = "GUID";
// Create an instance of APIAction
let apiAction = new APIAction("https://example.com/api", "POST");
// Create an instance of ButtonElement
let submitButton = new ButtonElement("1", apiAction, "Submit");
// Create an instance of TextInput
let nameInput = new TextInput("1", "Please enter your name");
// Create a new instance of FormMessage
let formMessage = new FormMessage(
  "receiverId",
  CometChat.RECEIVER_TYPE.GROUP,
  "Title",
  [nameInput],
  submitButton
);

CometChatUIKit.sendFormMessage(formMessage)
  .then((message) => {
    console.log("Form message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

### Send Card message

This method allows you to send [Card Message](/web-shared/card-message) which are the extension of Interactive Message

<Tabs>
<TabItem value="1c" label="1:1 Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript"; //import sdk package
import { CometChatUIKit } from "@cometchat/chat-uikit-vue"; //import uikit package
import {
  CometChatUIKitConstants,
  ButtonElement,
  CardMessage,
} from "@cometchat/uikit-resources"; //import shared package

const receiverID = "UID";
// Create instance of ButtonElement for card actions
let cardAction = new ButtonElement(
  "1",
  new APIAction("https://example.com/api", "POST"),
  "Click Me"
);
// Create a new instance of CardMessage
let cardMessage = new CardMessage(
  "receiverId",
  CometChatUIKitConstants.MessageReceiverType.user,
  "This is a card",
  [cardAction]
);

CometChatUIKit.sendCardMessage(cardMessage)
  .then((message) => {
    console.log("card message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
<TabItem value="gc" label="Group Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript"; //import sdk package
import { CometChatUIKit } from "@cometchat/chat-uikit-vue"; //import uikit package
import {
  CometChatUIKitConstants,
  ButtonElement,
  CardMessage,
} from "@cometchat/uikit-resources"; //import shared package

const receiverID = "GUID";
// Create instance of ButtonElement for card actions
let cardAction = new ButtonElement(
  "1",
  new APIAction("https://example.com/api", "POST"),
  "Click Me"
);
// Create a new instance of CardMessage
let cardMessage = new CardMessage(
  "receiverId",
  CometChatUIKitConstants.MessageReceiverType.group,
  "This is a card",
  [cardAction]
);

CometChatUIKit.sendCardMessage(cardMessage)
  .then((message) => {
    console.log("card message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
</Tabs>

### Send CustomInteractive message

This method allows you to send [Custom Interactive Message](/web-shared/custom-interactive-message) which are the extension of Interactive Message

<Tabs>
<TabItem value="1c" label="1:1 Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript"; //import sdk package
import { CometChatUIKit } from "@cometchat/chat-uikit-vue"; //import uikit package
import {
  CometChatUIKitConstants,
  ButtonElement,
  CardMessage,
} from "@cometchat/uikit-resources"; //import shared package

const receiverID = "UID";
// Create instance of ButtonElement for card actions
let cardAction = new ButtonElement(
  "1",
  new APIAction("https://example.com/api", "POST"),
  "Click Me"
);
// Create a new instance of CardMessage
let cardMessage = new CardMessage(
  "receiverId",
  CometChatUIKitConstants.MessageReceiverType.user,
  "This is a card",
  [cardAction]
);

CometChatUIKit.sendCardMessage(cardMessage)
  .then((message) => {
    console.log("card message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
<TabItem value="gc" label="Group Chat">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript"; //import sdk package
import { CometChatUIKit } from "@cometchat/chat-uikit-vue"; //import uikit package
import {
  CometChatUIKitConstants,
  ButtonElement,
  CardMessage,
} from "@cometchat/uikit-resources"; //import shared package

const receiverID = "GUID";
// Create instance of ButtonElement for card actions
let cardAction = new ButtonElement(
  "1",
  new APIAction("https://example.com/api", "POST"),
  "Click Me"
);
// Create a new instance of CardMessage
let cardMessage = new CardMessage(
  "receiverId",
  CometChatUIKitConstants.MessageReceiverType.group,
  "This is a card",
  [cardAction]
);

CometChatUIKit.sendCardMessage(cardMessage)
  .then((message) => {
    console.log("card message sent successfully", message);
  })
  .catch(console.log);
```

</TabItem>
</Tabs>
