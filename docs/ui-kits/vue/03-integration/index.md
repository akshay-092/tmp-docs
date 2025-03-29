---
sidebar_position: 2
title: Integration
slug: /integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Before you begin

Before installing **UI Kit**, you need to create a CometChat application on the CometChat Dashboard, which comprises everything required in a chat service including users, groups, calls & messages. You will need the `App ID` , `AuthKey`, `Region` of your CometChat application when initialising the SDK.

**i. Register on CometChat **

- You need to first register on **CometChat Dashboard**. [Click here to sign up](https://app.cometchat.com/signup).

**ii. Get Your Application Keys **

:::info Note

Each CometChat application can be integrated with a single client app. Within the same application, users can communicate with each other across all platforms, whether they are on mobile devices or on the web.

:::

- Create a **new app**
- Head over to the **Credentials** **section** and note the **App ID**, **Region and** **Auth Key**.

:::info

to know more about the Nuxt.js integration [click here](./nuxtjs-integration)

## :::

### Built With

- Node 16.15.0
- npm 8.5.5
- Vue 3.3.2

---

### Get Started

You can start building a modern messaging experience in your app by installing UI Kit.

### 1. Add UI Kit as Dependency

This developer kit is an add-on feature to [CometChat Javascript SDK](/sdk/javascript/overview), so installing it will also install the core Chat SDK.

<Tabs>
<TabItem value="cli" label="CLI">

```CLI
npm install @cometchat/chat-uikit-vue
```

</TabItem>
</Tabs>

:::info

If your npm version is 3 through 6, install the below mentioned peer dependencies as well.

:::

<Tabs>
<TabItem value="cli" label="CLI">

```CLI
npm install @cometchat/uikit-elements @cometchat/uikit-resources @cometchat/uikit-shared
@cometchat/chat-sdk-javascript
```

</TabItem>
</Tabs>

### 2. Initialise CometChatUIKit

The `init()` method initialises the settings required for CometChat. We suggest calling the `init()` method on app startup.

:::info

Make sure you replace the **APP_ID**, **REGION** and **AUTH_KEY** with your CometChat App ID, Region and Auth Key in the below code. The Auth Key is an optional property of the `UIKitSettings` Class. It is intended for use primarily during proof-of-concept (POC) development or in the early stages of application development. You can use the [Auth Token](#login-using-auth-token) method to log in securely.

:::

<Tabs>
<TabItem value="js" label="main.js">

```javascript
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";

const COMETCHAT_CONSTANTS = {
  APP_ID: "APP_ID", // Replace with your App ID
  REGION: "REGION", // Replace with your App Region
  AUTH_KEY: "AUTH_KEY", // Replace with your Auth Key
};

//create the builder
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForFriends()
  .build();

//Initialize CometChat
CometChatUIKit.init(UIKitSettings)?.then(() => {
  //login your user
});
```

</TabItem>
</Tabs>

### 3. Login User

The login() method returns the User object containing all the information of the logged-in user.

#### Login using Auth Key

:::info

This straightforward authentication method is ideal for proof-of-concept (POC) development or during the early stages of application development. For production environments, however, we strongly recommend using an [Auth Token](#login-using-auth-token) instead of an Auth Key to ensure enhanced security.


:::

<Tabs>
<TabItem value="js" label="main.js">

```javascript
import { createApp, ref } from "vue";
import { CometChatUIKit, CometChatTheme } from "@cometchat/chat-uikit-vue";

const UID = "UID";

CometChatUIKit.getLoggedinUser()
  .then((user) => {
    if (!user) {
      //Login user
      CometChatUIKit.login(UID)
        .then((user) => {
          console.log("Login Successful:", { user });
          //mount your app
          mountApp();
        })
        .catch(console.log);
    } else {
      //mount your app
      mountApp();
    }
  })
  .catch(console.log);

const mountApp = () => {
  const app = createApp(App);
  app.mount("#app");
};
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
<TabItem value="js" label="main.js">

```javascript
import { createApp, ref } from "vue";
import { CometChatUIKit, CometChatTheme } from "@cometchat/chat-uikit-vue";

const theme = ref(new CometChatTheme({}));

const authToken = "AUTH_TOKEN"; //Replace with your auth token
CometChatUIKit.getLoggedinUser()
  .then((user) => {
    if (!user) {
      //Login user
      CometChatUIKit.loginWithAuthToken(authToken)
        .then((user) => {
          console.log("Login Successful:", { user });
          //mount your app
          mountApp();
        })
        .catch(console.log);
    } else {
      //mount your app
      mountApp();
    }
  })
  .catch(console.log);

const mountApp = () => {
  const app = createApp(App);

  app.mount("#app");
};
```

</TabItem>
</Tabs>

### 4. Launch UI Components

The UI Kit is a set of prebuilt UI components that allows you to easily build beautiful in-app chat with all the essential messaging features.

#### Add the required components inside your project.

<Tabs>
<TabItem value="vue" label="App.vue">

```javascript
<template>
  <div class="chat"><CometChatUsersWithMessages :isMobileView="true" /></div>
</template>

<script>
import { CometChatUsersWithMessages } from '@cometchat/chat-uikit-vue';
import "@cometchat/chat-uikit-vue/dist/style.css";

export default {
  name: 'App',
  components: {
    CometChatUsersWithMessages
  }
}
</script>
<style>
  div.chat {
  	width: 800px;
  }
</style>
```

</TabItem>
</Tabs>

#### Run the project

<Tabs>
<TabItem value="cli" label="CLI">

```CLI
//run the project
npm run serve
```

</TabItem>
</Tabs>

---

| Component           | Description                                                                                                                                      |                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| **`UI Components`** | CometChat's UI Kit is a set of pre-built UI components that allows you to easily craft an in-app chat with all the essential messaging features. | [Navigate](/ui-kit/vue/ui-components-overview) |

