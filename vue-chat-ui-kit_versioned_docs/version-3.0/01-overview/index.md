---
sidebar_position: 1
title: Overview
slug: /overview
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Introducing CometChat UIKit v4

V4 UI kits offer modular design, extended functionality & > customization for a tailored chat experience. Check out our new UIKits [here](/ui-kit/vue/overview).

:::

The CometChat **Vue JS UI Kit** lets developers integrate text chat & voice/video calling features into websites seamlessly. 

![](assets/1623200343.png)

:::success 👍 Improvements in V3.0
Faster connection & response times <br />
Higher rate limits<br />
Supports up to 100K users in a group<br /> 
Unlimited groups<br />
Support for Transient Messages<br />
Real-time user & group members count And more!
:::

The Vue Chat UI Kit’s customizable **VueJS UI components** simplify the process of integrating text chat and voice/video calling features to your website in a few minutes.

<div style={{display: 'flex', boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.18)', borderRadius: '3px'}}>
  <div style={{padding: '24px'}}>
    <h4 style={{fontWeight: 'bold'}}>I want to checkout Vue UI Kit</h4>
    <p>Follow the steps mentioned in the <code>README.md</code> file.</p>
    <p>Kindly, click on below button to download our Vue UI Kit.</p>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%', marginBottom: '8px'}} href="https://github.com/cometchat-pro/cometchat-pro-vue-ui-kit/archive/master.zip">Vue UI Kit</a>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%'}} href="https://github.com/cometchat-pro/cometchat-pro-vue-ui-kit/" target="_blank">View on Github</a>
  </div>
  <div style={{padding: '24px', borderLeft: '1px solid #e3e5e7'}}>
    <h4 style={{fontWeight: 'bold'}}>I want to explore the sample app</h4>
    <p>Kindly, click on below button to download our Vue Sample App.</p>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%', marginBottom: '8px'}} href="https://github.com/cometchat-pro/javascript-vue-chat-app/archive/master.zip">Vue Sample App</a>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%'}} href="https://github.com/cometchat-pro/javascript-vue-chat-app/" target="_blank">View on Github</a>
  </div>
</div>


## Prerequisites

Before you begin, ensure you have met the following requirements:

1. A text editor. (e.g. Visual Studio Code, Notepad++, Sublime Text, Atom, or VIM)
2. [Node](https://nodejs.org/en/)
3. [npm](https://www.npmjs.com/get-npm)
4. [Vue](https://vuejs.org/)

For installing Vue 2

<Tabs>
<TabItem value="cli" label="CLI">

```bash
npm install vue@2.6.14
```


</TabItem>
</Tabs>


For installing Vue 3

<Tabs>
<TabItem value="cli" label="CLI">

```bash
npm install vue@3.2.11
```

</TabItem>
</Tabs>



## Installing Vue JS UI Components

:::warning Important

Please follow the steps provided in the [Key Concepts](./key-concepts) to create V3 apps before you proceed.

:::

### Setup

1. Register on CometChat 🔧
   - To install Vue UI Kit, you need to first register on the CometChat Dashboard. Click here to Sign Up.

2. Get your application keys 🔑 <br />
   a. Create a new app. <br />
   b. Head over to the QuickStart or API & Auth Keys section and note the App ID, Auth Key, and Region.

3. Add the CometChat dependency 📦

<Tabs>
<TabItem value="cli" label="CLI">

```bash
npm install @cometchat-pro/chat@3.0.13 --save
```


</TabItem>
</Tabs>



### Configure CometChat inside your app

- Import CometChat SDK

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import { CometChat } from "@cometchat-pro/chat";
```


</TabItem>
</Tabs>




- Initialize CometChat 🌟 

The init() method initializes the settings required for CometChat.
We suggest calling the init() method on app startup, preferably in the created() method of the Application class.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
const appID = "APP_ID";
const region = "REGION";
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);
```



</TabItem>
</Tabs>



:::warning Note
Replace APP_ID and REGION with your CometChat App ID and Region in the above code
:::

- Create user

This method takes a `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
let authKey = "AUTH_KEY";
var uid = "user1";
var name = "Kevin";

var user = new CometChat.User(uid);
user.setName(name);
CometChat.createUser(user, authKey).then(
    user => {
        console.log("user created", user);
    },error => {
        console.log("error", error);
    }
)
```


</TabItem>
</Tabs>

:::warning Note
Replace AUTH_KEY with your CometChat Auth Key in the above code.
:::

- Login your user 👤 

This method takes UID and Auth Key as input parameters and returns the User object containing all the information of the logged-in user.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
const authKey = "AUTH_KEY";
const uid = "cometchat-uid-1";

CometChat.login(uid, authKey).then(
  user => {
    console.log("Login Successful:", { user });    
  },
  error => {
    console.log("Login failed with exception:", { error });    
  }
);
```

</TabItem>
</Tabs>

:::warning Note
Replace AUTH_KEY with your CometChat Auth Key in the above code.
:::

:::info Note
We have set up 5 users for testing having UIDs: cometchat-uid-1, cometchat-uid-2, cometchat-uid-3, cometchat-uid-4, and cometchat-uid-5.<br /><br /> We have used uid cometchat-uid-1 as an example here. You can create a User from CometChat Dashboard as well.

:::

### Add the Vue Chat UI Kit to your project

- Clone this repository.

<Tabs>
<TabItem value="js" label="CLI">

```bash
git clone https://github.com/cometchat-pro/cometchat-pro-vue-ui-kit.git
```

</TabItem>
</Tabs>



- Copy the cloned repository to your source folder

![](assets/1631549878.png)

- Copy all the dependencies from package.json of `cometchat-pro-vue-ui-kit` into your project's package.json and install them.
- We are using [emoji-mart-vue-fast](https://www.npmjs.com/package/emoji-mart-vue-fast) Please install respective library depending on your Vue version
- 
    - For Vue2 : `npm install emoji-mart-vue-fast@7.0.7`
    - For Vue3 : `npm install emoji-mart-vue-fast@8.0.3`
    - For **Vite** users : `npm install emoji-mart-vue-fast@9.1.2`

![](assets/1634215228.png)

### Support for Vite

If you are using Vite, please update your `vite.config.js`

<Tabs>
<TabItem value="js" label="vite.config.js">

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
```

</TabItem>
</Tabs>



### Launch CometChat

Using the `CometChatUI` component from the UI Kit, you can launch a fully functional chat application.
In this component, all the UI Components are interlinked and work together to launch a fully functional chat on your website/application.

![](assets/1623200351.gif)

### Usage

<Tabs>
<TabItem value="js" label="Vue">

```html
<template>
 <div id="app">
   <CometChatUI />
 </div>
</template>

<script>
 import { CometChatUI } from "./cometchat-pro-vue-ui-kit/CometChatWorkspace/src";
 export default {
   name: "App",
   components: {
     CometChatUI,
   }
 };
</script>
```

</TabItem>
</Tabs>



## Checkout our Vue Chat sample app

Visit our [Vue Chat sample app](https://github.com/cometchat-pro/javascript-vue-chat-app) repo to see it in action.