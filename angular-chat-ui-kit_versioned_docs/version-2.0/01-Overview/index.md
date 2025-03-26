---
sidebar_position: 1
title: Overview
slug: /overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The CometChat Angular UI Kit is developed to keep developers in mind and aims to reduce development efforts significantly.

![Angular UI Kit](./assets/1623200223.png)

The UI Kit’s customizable UI components simplify the process of integrating text chat and voice/video calling features to your website or mobile application in a few minutes.

<div style={{display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px'}}>
  <div style={{padding: '24px'}}>
    <h4 style={{fontWeight: 'bold'}}>I want to checkout Angular UI Kit</h4>
    <p>Follow the steps mentioned in the <code>README.md</code> file.</p>
    <p>Kindly, click on below button to download our Angular UI Kit.</p>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%', marginBottom: '8px'}} href="https://github.com/cometchat-pro/cometchat-pro-angular-ui-kit/archive/v2.zip">Angular UI Kit</a>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%'}} href="https://github.com/cometchat-pro/cometchat-pro-angular-ui-kit/tree/v2" target="_blank">View on Github</a>
  </div>
  <div style={{padding: '24px', borderLeft: '1px solid #e3e5e7'}}>
    <h4 style={{fontWeight: 'bold'}}>I want to explore the sample app</h4>
    <p>Kindly, click on below button to download our Angular Sample App.</p>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%', marginBottom: '8px'}} href="https://github.com/cometchat-pro/javascript-angular-chat-app/archive/v2.zip">Angular Sample App</a>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%'}} href="https://github.com/cometchat-pro/javascript-angular-chat-app/tree/v2" target="_blank">View on Github</a>
  </div>
</div>

## Prerequisites

1. A text editor. (e.g. Visual Studio Code, Notepad++, Sublime Text, Atom, or VIM)
2. [Node](https://nodejs.org/en/)
3. [npm](https://www.npmjs.com/get-npm)
4. [Angular CLI](https://angular.io/cli)

<Tabs>
<TabItem value="cli" label="CLI">

```bash
npm install -g @angular/cli
```

</TabItem>
</Tabs>




## Installing Angular UI Kit

### Setup

1. Register on CometChat<br />
   a. To install the Angular UI Kit, you need to first register on the CometChat Dashboard. Click [here](https://app.cometchat.com/) to sign up 

2. Get Your Application Keys 🔑
   - Create a new app
   - Head over to the QuickStart or API & Auth Keys section and note the App ID, Auth Key, and Region.

3. Add the CometChat Dependency

<Tabs>
<TabItem value="cli" label="CLI">

```bash
npm install @cometchat-pro/chat@2.4.0 --save
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



- Initialize CometChat 🌟  The `init()` method initializes the settings required for CometChat. We suggest calling the `init()` method on app startup, i.e main.ts file of the application.

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
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);
```

</TabItem>
</Tabs>



:::info Note

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




- Login your user 👤 

This method takes UID and Auth Key as input parameters and returns the User object containing all the information of the logged-in user

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
const authKey = "AUTH_KEY";
const uid = "cometchat-uid-1";

CometChat.login(uid, authKey).then(
  (user) => {
    console.log("Login Successful:", { user });
  },
  (error) => {
    console.log("Login failed with exception:", { error });
  }
);
```

</TabItem>
</Tabs>


:::info Note

Replace AUTH_KEY with your CometChat Auth Key in the above code.

:::

:::info Note

We have set up 5 users for testing having UIDs: cometchat-uid-1, cometchat-uid-2, cometchat-uid-3, cometchat-uid-4, and cometchat-uid-5.

We have used uid cometchat-uid-1 as an example here. You can create a User from CometChat Dashboard as well.

:::

### Add UI Kit to your project

- Clone this repository

<Tabs>
<TabItem value="cli" label="CLI">

```cli
git clone https://github.com/cometchat-team/cometchat-pro-angular-ui-kit.git -b v2
```

</TabItem>
</Tabs>


- Copy the cloned repository into your project src folder.

![Folder structure of Angular sample app](./assets/1623200229.png)

- Import the Components in the respective module where the component will be used.
- Install @ctrl/ngx-emoji-mart according to the angular version of your project @ctrl/ngx-emoji-mart
- Add these styles to your angular.json
- Wrap all the selectors in a div with class=responsive as shown in the next step

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
"styles": [
  "node_modules/@ctrl/ngx-emoji-mart/picker.css",
  "src/cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/ui-kit/angular/src/css/styles.scss"
]
```

</TabItem>
</Tabs>




### Launch CometChat

CometChatUI is an option to launch a fully functional chat application using the UI Kit. In UI Kit all the UI Components are interlinked and work together to launch a fully functional chat on your website/application.

![CometChatUI](./assets/1623200230.gif)

### Usage

<Tabs>
<TabItem value="js" label="Angular">

```javascript
import { CometChatUI } from "../components/CometChatUI/CometChat/cometchat-ui.module";

#Use this selector in your html file

<div class="responsive">
  <CometChatUI></CometChatUI>
</div>
```

</TabItem>
</Tabs>



## Checkout our sample app

Visit our [Angular sample app](https://github.com/cometchat-pro/javascript-angular-chat-app/tree/v2) repo to run the Angular sample app.