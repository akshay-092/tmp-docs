---
sidebar_position: 1
title: React UI Kit: Overview
slug: /overview
---

:::info Introducing CometChat UIKit v4

> V4 UI kits offer modular design, extended functionality & customization for a tailored chat experience. Check out our new UIKits [here](./docs/ui-kit/react/overview).

:::

Our React Chat UI Kit lets developers easily add text, voice & video to your website. It a fully polished UI and the complete business logic.

Don't forget to check out the [Key Concepts](/ui-kit/react/key-concepts) for your React Chat UI Kit before proceeding.

![](./assets/1623200296.png)

:::note What's New in v3

> -  Seamless scaling to over 1M+ concurrent users <br/>
> - Faster connection & response times <br/>
> - Higher rate limits <br/>
> - Supports up to 100K users in a group <br/>
> - Unlimited groups <br/>
> - Support for Transient Messages <br/>
> - Real-time user & group members count <br/>
> - And more! <br/>

:::

CometChat's React UI Kit’s customizable UI components simplify the process of integrating text chat and voice/video calling features to your website or mobile application in a few minutes.

## I want to checkout React UI Kit.

Follow the steps mentioned in the README.md file.

Kindly, click on below button to download our React UI Kit.

<div style={{display: 'flex', borderRadius: '3px'}}>
  <div style={{width: '100%', wordBreak: 'break-word', padding: '12px 12px 0 12px'}}>
    <p style={{margin: '0'}}>
      <a class="button btn" style={{backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline'}} href="https://github.com/cometchat-pro/flutter-chat-app/">
        REACT UI KIT
      </a>
    </p>
  </div>
</div>

<div style={{display: 'flex', borderRadius: '3px'}}>
  <div style={{width: '100%', wordBreak: 'break-word', padding: '12px 12px 0 12px'}}>
    <p style={{margin: '0'}}>
      <a class="button btn" style={{backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline'}} href="https://github.com/cometchat-pro/flutter-chat-app/">
        VIEW ON GITHUB
      </a>
    </p>
  </div>
</div>

---

## I want to explore the sample app

Kindly, click on below button to download our React Sample App.

<div style={{display: 'flex', borderRadius: '3px'}}>
  <div style={{width: '100%', wordBreak: 'break-word', padding: '12px 12px 0 12px'}}>
    <p style={{margin: '0'}}>
      <a class="button btn" style={{backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline'}} href="https://github.com/cometchat-pro/flutter-chat-app/">
        REACT SAMPLE APP
      </a>
    </p>
  </div>
</div>

<div style={{display: 'flex', borderRadius: '3px'}}>
  <div style={{width: '100%', wordBreak: 'break-word', padding: '12px 12px 0 12px'}}>
    <p style={{margin: '0'}}>
      <a class="button btn" style={{backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline'}} href="https://github.com/cometchat-pro/flutter-chat-app/">
        VIEW ON GITHUB
      </a>
    </p>
  </div>
</div>

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

1. A text editor. (e.g. Visual Studio Code, Notepad++, Sublime Text, Atom, or VIM)
2. [Node](https://nodejs.org/en/)
3. [npm](https://www.npmjs.com/get-npm)
4. [React](https://reactjs.org/)

```cli
npm install react@17.0.2
```

5. [React DOM](https://reactjs.org/docs/react-dom.html)

```cli
npm install react-dom@17.0.2
```

6. [React Scripts](https://www.npmjs.com/package/react-scripts)

```cli
npm install react-scripts@4.0.3
```

## Installing the React Chat UI Kit

:::note Important

> Please follow the steps provided in the [Key Concepts](/ui-kit/react/key-concepts) to create V3 apps before you proceed.

:::

### Setup

1. Register on CometChat
    - To install React UI Kit, you need to first register on the CometChat Dashboard. Click [here](https://app.cometchat.com) to Sign Up.

2. Get your application keys
    - Create a new app.
    - Head over to the QuickStart or API & Auth Keys section and note the App ID, Auth Key, and Region.

3. Add the CometChat dependency

```cli
npm install @cometchat-pro/chat@3.0.11 --save
```

### Configure CometChat inside your app

- Import CometChat SDK

```Javascript
import { CometChat } from "@cometchat-pro/chat";
```

- Initialize CometChat

The init() method initializes the settings required for CometChat.
We suggest calling the init() method on app startup, preferably in the index.js file.

```Javascript
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

:::note 

> Replace APP_ID and REGION with your CometChat App ID and Region in the above code.

:::

- Create user

This method takes a `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.


```Javascript
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

:::note

> Replace AUTH_KEY with your CometChat Auth Key in the above code.

:::

- Login your user

This method takes `UID` and `Auth Key` as input parameters and returns the User object containing all the information of the logged-in user.

```Javascript
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

:::note

> Replace AUTH_KEY with your CometChat Auth Key in the above code.

:::

:::info

> We have set up 5 users for testing having UIDs: cometchat-uid-1, cometchat-uid-2, cometchat-uid-3, cometchat-uid-4, and cometchat-uid-5.

> We have used uid cometchat-uid-1 as an example here. You can create a User from CometChat Dashboard as well.

:::

### Add the React UI Kit to your project

- Clone this repository

```cli
git clone https://github.com/cometchat-pro/cometchat-pro-react-ui-kit.git
```

- Copy the cloned repository to your source folder

![](./assets/5p1s5fydgt07yucxkvc52f3eb71ggc3b2fxpxbxrtqjwlu6ucprecaafptqsubcv.png)

- Copy all the dependencies from package.json into your project's package.json and install them

![](./assets/n4xhanpy3xmvh13e5qh2hk84kojuiotug2silsban3mju3g9rezxm3m3cr8jvn22.png)

### Launch CometChat

Using the CometChatUI component, you can launch a fully functional chat application. In this component, all the UI Screens and UI Components are interlinked and work together to launch a fully functional chat on your website/application.

![](./assets/1623200307.gif)


### Usage

```React
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

## Check out our React chat sample app

Visit our [React sample app](https://github.com/cometchat-pro/javascript-react-chat-app) repository to run the sample app yourself.

