---
sidebar_position: 2
title: Getting Started
slug: /getting-started
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Start your first conversation

The CometChat UI Kit for Angular simplifies the process of integrating in-app chat functionality with essential messaging features. With a collection of prebuilt UI components, it offers seamless theming options, including light and dark themes, various fonts, colors, and extensive customization possibilities.

Supporting both one-to-one and group conversations, the CometChat UI Kit for Angular empowers developers to initiate chat functionalities effortlessly. Follow the guide below to begin implementing chat features into your Angular applications using CometChat Angular UI Kit.


![](./assets/intro_web_screens.png)


## Prerequisites

Before installing **UI Kit** for Angular, you need to create a CometChat application on the CometChat Dashboard, which comprises everything required in a chat service including users, groups, calls & messages. You will require the `App ID`, `AuthKey`, and `Region` of your CometChat application when initializing the **UI Kit**.

**i. Register on CometChat**

- You need to register on the **CometChat Dashboard** first. [Click here to sign up](https://app.cometchat.com/login).

**ii. Get Your Application Keys**

- Create a **new app**
- Head over to the **QuickStart** or **API & Auth Keys section** and note the **App ID**, **Auth Key**, and **Region**.

> Each CometChat application can be integrated with a single client app. Within the same application, users can communicate with each other across all platforms, whether they are on mobile devices or on the web.


**iii. IDE Setup**

- You have Node.js installed on your machine.
- You have a code editor like Visual Studio Code or Atom installed.
- You have npm or Yarn installed.
- You have Angular installed.


---

### Built With

- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)
- [Angular CLI](https://angular.io/cli)


---

## Getting Started

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 1</span>



### Create a project

    To get started with Angular, follow these steps:

    1. Open your code editor.
    2. Create a new project by initializing a new Angular application.
    3. Navigate to your project directory and open the project in your code editor.
    4. Begin developing your Angular application in the "src" directory.
    5. Install additional dependencies as required.

---


<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 2</span>

### Add Dependency

This developer kit is an add-on feature to CometChat Javascript SDK, so installing it will also install the core Chat SDK.

```CLI
npm install @cometchat/chat-uikit-angular
```


:::info

If your npm version is 3 through 6, install the below-mentioned peer dependencies as well.

:::

```CLI
npm install @cometchat/uikit-elements @cometchat/uikit-resources @cometchat/uikit-shared
```


<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 3</span>

###  Link the assets

<Tabs>
<TabItem value="pkg" label="angular.json">

```javascript
"assets": [
"src/favicon.ico",
"src/assets",
// add this inside angular.json build/assets section
{
	"glob": "**/*",
	"input":  "./node_modules/@cometchat/chat-uikit-angular/assets/",
	"output": "assets/"
}],

```

</TabItem>
</Tabs>

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 4</span>

### Initialize CometChatUIkit

The [Init](/ui-kit/angular/methods#init) method initialises the settings required for CometChat. Please ensure to call this method before invoking any other methods from CometChat UI Kit or CometChat SDK.


:::info

The Auth Key is an optional property of the `UIKitSettings` Class. It is intended for use primarily during proof-of-concept (POC) development or in the early stages of application development. You can use the [Auth Token](/ui-kit/angular/methods#login-using-auth-token) method to log in securely.

:::



```javascript
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatUIKit } from "@cometchat/chat-uikit-angular";

const COMETCHAT_CONSTANTS = {
  APP_ID: "APP_ID", //Replace with your App ID
  REGION: "REGION", //Replace with your App Region
  AUTH_KEY: "AUTH_KEY", //Replace with your Auth Key
};

//create the builder
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

//Initialize CometChat UI Kit
CometChatUIKit.init(UIKitSettings)
  .then(() => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  })
  .catch(console.log);
```

> Make sure to replace the **APP_ID** with your CometChat appId, **AUTH_KEY** with your CometChat app auth key and **REGION** with your app region in the above code.

---

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 5</span>

### Login User

For login, you require a `UID`. You can create your own users on the CometChat Dashboard or via API. We have pre-generated test users: `cometchat-uid-1`, `cometchat-uid-2`, `cometchat-uid-3`, `cometchat-uid-4`, `cometchat-uid-5`.

The [Login](/ui-kit/angular/methods#login) method returns the User object containing all the information of the logged-in user.

:::info

This straightforward authentication method is ideal for proof-of-concept (POC) development or during the early stages of application development. For production environments, however, we strongly recommend using an [Auth Token](/ui-kit/angular/methods#login-using-auth-token) instead of an Auth Key to ensure enhanced security.

:::

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import { CometChatUIKit } from "@cometchat/chat-uikit-angular";

const UID = "UID"; // Replace with your UID
const authKey = "AUTH_KEY"; // Replace with your Auth Key

CometChatUIKit.getLoggedinUser().then((user) => {
  if (!user) {
    // Login user
    CometChatUIKit.login({ uid: UID })
      .then((user) => {
        console.log("Login Successful:", { user });
        // mount your app
      })
      .catch(console.log);
  } else {
    // mount your app
  }
});
```

</TabItem>

<TabItem value="ts" label="Typescript">

```typescript
import { CometChatUIKit } from "@cometchat/chat-uikit-angular";

const UID = "UID"; // Replace with your UID
const authKey = "AUTH_KEY"; // Replace with your Auth Key

CometChatUIKit.getLoggedinUser().then((user: CometChat.User) => {
  if (!user) {
    // Login user
    CometChatUIKit.login({ uid: UID })
      .then((user: CometChat.User) => {
        console.log("Login Successful:", { user });
        // mount your app
      })
      .catch(console.log);
  } else {
    // mount your app
  }
});
```

</TabItem>
</Tabs>


---

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 6</span>



### Render Conversation With Message

[ConversationsWithMessages](/ui-kit/angular/conversations-with-messages) is a wrapper component that offers functionality to render both the [Conversations](/ui-kit/angular/conversations) and [Messages](/ui-kit/angular/messages) components. It also enables opening the [Messages](/ui-kit/angular/messages) by tapping on any conversation rendered in the list of conversations.

![](./assets/intro_web_screens.png)

[ConversationsWithMessages](/ui-kit/angular/conversations-with-messages) can be rendered by adding the following code snippet:


<Tabs>
<TabItem value="js" label="app.module.ts">

```javascript
//import the component in your module.ts file
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CometChatConversationsWithMessages } from '@cometchat/chat-uikit-angular';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CometChatConversationsWithMessages,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

</TabItem>

<TabItem value="ts" label="app.component.html">

```html
<!--render the component in your html file-->
<cometchat-conversations-with-messages></cometchat-conversations-with-messages>; 
```

</TabItem>
</Tabs>


> It will automatically fetch the conversation data upon loading the list. If the conversation list is empty, you can start a new conversation.

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 7</span>

### Run the project

<Tabs>
<TabItem value="js" label="Javascript">

```bash
ng serve
```

</TabItem>

</Tabs>
