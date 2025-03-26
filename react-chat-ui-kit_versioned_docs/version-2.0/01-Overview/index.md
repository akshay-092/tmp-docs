---
sidebar_position: 1
title: Overview
slug: /overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FolderStructureImg from "./assets/1623200303.png"
import DependenciesImg from "./assets/1634634559.png"
import CometChatUIImg from "./assets/1623200307.gif"

The CometChat React UI Kit is developed to keep developers in mind and aims to reduce development efforts significantly. 

![React UI Kit](./assets/1623200296.png)

The UI Kit’s customizable UI components simplify the process of integrating text chat and voice/video calling features to your website or mobile application in a few minutes.

<div style={{display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px'}}>
  <div style={{padding: '24px'}}>
  	<h4 style={{fontWeight: 'bold'}}>I want to checkout React UI Kit</h4>
    <p>Follow the steps mentioned in the <code>README.md</code> file.</p>
    <p>Kindly, click on below button to download our React UI Kit.</p>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%', marginBottom: '8px'}} href="https://github.com/cometchat-pro/cometchat-pro-react-ui-kit/archive/v2.zip">React UI Kit</a>
		<a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%'}} href="https://github.com/cometchat/cometchat-chat-uikit-react/tree/v2" target="_blank">View on Github</a>
  </div>
  <div style={{padding: '24px', borderLeft: '1px solid #e3e5e7'}}>
  	<h4 style={{fontWeight: 'bold'}}>I want to explore the sample app</h4>
    <p>Kindly, click on below button to download our React Sample App.</p>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%', marginBottom: '8px'}} href="https://github.com/cometchat-pro/javascript-react-chat-app/archive/v2.zip">React Sample App</a>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%'}} href="https://github.com/cometchat/cometchat-chat-sample-app-react/tree/v2" target="_blank">View on Github</a>
  </div>
</div>


## Prerequisites

Before you begin, ensure you have met the following requirements:

1. A text editor. (e.g. Visual Studio Code, Notepad++, Sublime Text, Atom, or VIM)
2. [Node](https://nodejs.org/en/)
3. [npm](https://www.npmjs.com/get-npm)
4. [React](https://reactjs.org/)

<Tabs>
<TabItem value="cli" label="CLI">

```bash
npm install react@17.0.2
```

</TabItem>
</Tabs>



5. [React DOM](https://reactjs.org/docs/react-dom.html)

<Tabs>
<TabItem value="cli" label="CLI">

```bash
npm install react-dom@17.0.2
```

</TabItem>
</Tabs>



6. [React Scripts](https://www.npmjs.com/package/react-scripts)

<Tabs>
<TabItem value="cli" label="CLI">

```bash
npm install react-scripts@4.0.3
```

</TabItem>
</Tabs>




## Installing React UI Kit

### Setup

1. Register on CometChat
    - To install React UI Kit, you need to first register on the CometChat Dashboard. Click [here](https://app.cometchat.com/signup) to Sign Up.

2. Get your application keys
    - Create a new app.
    - Head over to the QuickStart or API & Auth Keys section and note the App ID, Auth Key, and Region.

3. Add the CometChat dependency

<Tabs>
<TabItem value="cli" label="CLI">

```bash
npm install @cometchat-pro/chat@2.4.0 --save
```

</TabItem>
</Tabs>



:::info Note

We have released recording feature in beta. Please install the latest beta version to enable recording feature in UI Kit. Please refer to [Recording (Beta)](/sdk/javascript/2.0/calling-recording) documentation to know more.
**npm install @cometchat-pro/chat@ v2.4.1-beta1 --save**

:::

### Configure CometChat inside your app

- Import CometChat SDK

<Tabs>
<TabItem value="js" label="Javascript">

```javascript

import { CometChat } from "@cometchat-pro/chat";
```

</TabItem>
</Tabs>




- Initialize CometChat 

The init() method initializes the settings required for CometChat.
We suggest calling the init() method on app startup, preferably in the index.js file.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
const appID = "APP_ID";
const region = "REGION";
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
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

Replace APP_ID and REGION with your CometChat App ID and Region in the above code.

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




- Login your user 

This method takes `UID` and `Auth Key` as input parameters and returns the User object containing all the information of the logged-in user.

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

We have set up 5 users for testing having UIDs: cometchat-uid-1, cometchat-uid-2, cometchat-uid-3, cometchat-uid-4, and cometchat-uid-5.

We have used uid cometchat-uid-1 as an example here. You can create a User from CometChat Dashboard as well.

:::


### Add UI Kit to your project

- Clone this repository

<Tabs>
<TabItem value="js" label="CLI">

```javascript
git clone https://github.com/cometchat/cometchat-chat-uikit-react.git -b v2
```

</TabItem>
</Tabs>



- Copy the cloned repository to your source folder
<div class="image_wrapper" style={{display: "flex",justifyContent: "center"}}>
  <img src={FolderStructureImg} width="200" alt="Folder structure of React Sample App" />
</div>

- Copy all the dependencies from package.json into your project's package.js and install them
<div class="image_wrapper" style={{display: "flex",justifyContent: "center"}}>
  <img src={DependenciesImg} width="400" alt="Package.json of React UI Kit" />
</div>


### Launch CometChat

Using the CometChatUI component, you can launch a fully functional chat application. In this component, all the UI Screens and UI Components are interlinked and work together to launch a fully functional chat on your website/application.
<div class="image_wrapper" style={{display: "flex",justifyContent: "center"}}>
  <img src={CometChatUIImg} width="400" alt="CometChatUI" />
</div>

### Usage

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import { CometChatUI } from "./CometChatWorkspace/src";

class App extends React.Component {
  
  render() {

    return (
      <div style={{width: '800px', height:'800px' }}>
      	<CometChatUI />
      </div>
	);
	}
}
```

</TabItem>
</Tabs>



## Checkout our sample app

Visit our [React sample app](https://github.com/cometchat/cometchat-chat-sample-app-react/tree/v2) repository to run the React sample app.