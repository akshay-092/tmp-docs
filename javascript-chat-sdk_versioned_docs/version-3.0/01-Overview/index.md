---
sidebar_position: 1
title: Overview
slug: /overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide demonstrates how to add chat to a Javascript application using CometChat. Before you begin, we strongly recommend you read the [Key Concepts](./key-concepts) guide.

<div style={{display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px'}}>
  <div style={{width: '75%', padding: '12px'}}>
    <h4>I want to integrate with my app</h4>
    <ol style={{marginBottom: 0}}>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#get-your-application-keys">Get your application keys</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#add-the-cometchat-dependency">Add the CometChat dependency</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#initialize-cometchat">Initialize CometChat</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#register-and-login-your-user">Register and Login your user</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#integrate-our-ui-kits">Integrate our UI Kits</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#integrate-our-chat-widget">Integrate our Chat Widget</a></li>
    </ol>
  </div>
  <div style={{width: '75%', wordBreak: 'break-word', padding: '12px', borderLeft: '1px solid #e3e5e7'}}>
    <h4>I want to explore a sample app (includes UI)</h4>
    <p className="magic-block-textarea">Open the app folder in your favourite code editor and follow the steps mentioned in the <code>README.md</code> file.</p>
    <p><a className="button btn" style={{backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline'}} href="https://github.com/cometchat-pro/javascript-react-chat-app/tree/v3">React Sample App</a></p>
    <p><a className="button btn" style={{backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline'}} href="https://github.com/cometchat-pro/javascript-angular-chat-app/tree/v3">Angular Sample App</a></p>
    <p><a className="button btn" style={{backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline'}} href="https://github.com/cometchat-pro/javascript-vue-chat-app/tree/v3">Vue Sample App</a></p>
  </div>
</div>


### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API & Auth Keys** section and note the **Auth Key**, **App ID** & **Region**

## Add the CometChat Dependency

### NPM

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
npm install @cometchat-pro/chat@3.0.13 --save
  ```
</TabItem>
</Tabs>





Then, import the `CometChat` object wherever you want to use CometChat.

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
import { CometChat } from "@cometchat-pro/chat";
  ```
</TabItem>
</Tabs>





### HTML (via CDN)

Include the CometChat Javascript library in your HTML code

<Tabs>
<TabItem value="HTML" label="HTML">

  ```html
<script type="text/javascript" src="https://unpkg.com/@cometchat-pro/chat@3.0.13/CometChat.js"></script>
  ```
</TabItem>
</Tabs>



### Server Side Rendering (SSR) Compatibility

You can use CometChat with SSR frameworks such as [Next.js](https://nextjs.org/) or [NuxtJS](https://nuxtjs.org/)  by importing it dynamically on the client side.

#### Next.js

You need to import the CometChat SDK dynamically in `useEffect`  React Hook or `componentDidMount()`  lifecycle method.

<Tabs>
<TabItem value="Home.js (Functional Component)" label="Home.js (Functional Component)">

  ```javascript
import React from 'react';
import Chat from './Chat';

export default function Home() {
  let [libraryImported, setLibraryImported] = React.useState(false);

  React.useEffect(()=>{
    window.CometChat = require('@cometchat-pro/chat').CometChat;
    setLibraryImported(true);
  });

  return(
    libraryImported ? <Chat/> : <p>Loading....</p>
  )

}
  ```
</TabItem>
<TabItem value="Home.js (Class Component)" label="Home.js (Class Component)">

  ```javascript
import React from 'react';
import Chat from './Chat';

export default class Home extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      libraryImported: false
    };
  }

  componentDidMount(){
    CometChat = require("@cometchat-pro/chat").CometChat;
    this.setState({libraryImported: true});
  }

  return(
    this.state.libraryImported ? <Chat/> : <p>Loading....</p>
  )

}
  ```
</TabItem>
<TabItem value="Chat.js" label="Chat.js">

  ```javascript
import React, { Component } from "react";

import { COMETCHAT_CONSTANTS } from './CONSTS';

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    this.init();
  }

  init(){
    CometChat.init(COMETCHAT_CONSTANTS.APP_ID, new CometChat.AppSettingsBuilder().setRegion(COMETCHAT_CONSTANTS.REGION).subscribePresenceForAllUsers().build()).then(
      () => {
        this.login();
      }, error => {
        console.log("Init failed with exception:", error);
      }
    );
  }

  login(){
		let UID = "UID";
    CometChat.login(UID, COMETCHAT_CONSTANTS.AUTH_KEY).then(
      user => {
        this.setState({ user });
      }, error => {
        console.log("Login failed with exception:", error);
      }
    );
  }

  render() {
   return this.state.user ?  <div>User logged in</div> : <div>User not logged in</div>;
  }

}
  ```
</TabItem>
<TabItem value="CONSTS.js" label="CONSTS.js">

  ```javascript
export const COMETCHAT_CONSTANTS =  {
  APP_ID: "APP_ID",
  REGION: "REGION",
  AUTH_KEY: "AUTH_KEY"
};
  ```
</TabItem>
</Tabs>


#### NuxtJS

You need to import the CometChat SDK dynamically in `mounted`  lifecycle hook.

<Tabs>
<TabItem value="index.vue" label="index.vue">

  ```javascript
<template>
    <div v-if="libraryImported">
      <chat/>
    </div>
    <div v-else>Loading....</div>
</template>

<script>
export default {
    name: "Index",
    components: {
        'chat': () => import('./chat')
    },
    data() {
      return{
        libraryImported: false
      }
    },
    mounted() {
      window.CometChat = require('@cometchat-pro/chat').CometChat;
      this.libraryImported = true;
    }
}
</script>
  ```
</TabItem>
<TabItem value="chat.vue" label="chat.vue">

  ```javascript
<template>
    <div v-if="user"> User logged in </div>
    <div v-else> User not logged in </div>
</template>

<script>
import CONSTS from './CONSTS';

export default {
    name: "chat",
    data() {
        return{
            user: null
        }
    },
    mounted() {
        CometChat.init(CONSTS.APP_ID, new CometChat.AppSettingsBuilder().setRegion(CONSTS.REGION).subscribePresenceForAllUsers().build()).then(
            () => {
              	let UID = "UID";
                CometChat.login(UID, CONSTS.AUTH_KEY).then(
                    user => {
                        this.user =  user;
                    }, error => {
                        console.log("Login failed with exception:", error);
                    }
                );
            }, error => {
                console.log("error in init", error);
            }
        );
    }
}
</script>
  ```
</TabItem>
<TabItem value="CONSTS.js" label="CONSTS.js">

  ```javascript
module.exports = {
	APP_ID: "APP_ID",
	REGION: "REGION",
	AUTH_KEY: "AUTH_KEY"
};
  ```
</TabItem>
</Tabs>


## Initialize CometChat

The `init()` method initialises the settings required for CometChat. The `init()` method takes the below parameters:

1. appID - Your CometChat App ID
2. appSettings - An object of the AppSettings class can be created using the AppSettingsBuilder class. The region field is mandatory and can be set using the `setRegion()` method.

The `AppSettings` class allows you to configure two settings:

- **Region**: The region where you app was created.
- [Presence Subscription](./user-presence): Represents the subscription type for user presence (real-time online/offline status)
- **autoEstablishSocketConnection(boolean value)**: This property takes a boolean value which when set to `true`  informs the SDK to manage the web-socket connection internally. If set to `false` , it informs the SDK that the web-socket connection will be managed manually. The default value for this parameter is true. For more information on this, please check the [Managing Web-Socket connections manually](./advanced-managing-web-socket-connections-manually) section. The default value for this property is **true.**
- **overrideAdminHost(adminHost: string)**: This method takes the admin URL as input and uses this admin URL instead of the default admin URL. This can be used in case of dedicated deployment of CometChat.
- **overrideClientHost(clientHost: string)**: This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

You need to call `init()` before calling any other method from CometChat. We suggest you call the `init()` method on app startup, preferably in the `index.js` file.


<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
let appID = "APP_ID";
let region = "APP_REGION";
let appSetting = new CometChat.AppSettingsBuilder()
                    .subscribePresenceForAllUsers()
                    .setRegion(region)
                    .autoEstablishSocketConnection(true)
                    .build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
  }, error => {
    console.log("Initialization failed with error:", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let appID: string = "APP_ID",
    region: string = "APP_REGION",
    appSetting: CometChat.AppSettings = new CometChat.AppSettingsBuilder()
			.subscribePresenceForAllUsers()
			.setRegion(region)
			.autoEstablishSocketConnection(true)
			.build();
CometChat.init(appID, appSetting).then(
  (initialized: boolean) => {
    console.log("Initialization completed successfully", initialized);
  }, (error: CometChat.CometChatException) => {
    console.log("Initialization failed with error:", error);
  }
);
  ```
</TabItem>
</Tabs>



Make sure you replace the `APP_ID` with your CometChat **App ID** and `APP_REGION` with your **App Region** in the above code.

## Register and Login your user

Once initialization is successful, you will need to create a user.
To create users on the fly, you can use the `createUser()` method. This method takes a `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.


<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
let authKey = "AUTH_KEY";
var UID = "user1";
var name = "Kevin";

var user = new CometChat.User(UID);

user.setName(name);

CometChat.createUser(user, authKey).then(
    user => {
        console.log("user created", user);
    }, error => {
        console.log("error", error);
    }
)
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let authKey: string = "AUTH_KEY",
    UID: string = "user1",
    name: string = "Kevin";

var user = new CometChat.User(UID);

user.setName(name);

CometChat.createUser(user, authKey).then(
    (user: CometChat.User) => {
        console.log("user created", user);
    }, (error: CometChat.CometChatException) => {
        console.log("error", error);
    }
)
  ```
</TabItem>
</Tabs>




Make sure that `UID`  and `name`  are specified as these are mandatory fields to create a user.

Once you have created the user successfully, you will need to log the user into CometChat using the `login()` method.

We recommend you call the CometChat `login()` method once your user logs into your app. The `login()` method needs to be called only once.


<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
var UID = "cometchat-uid-1";
var authKey = "AUTH_KEY";

CometChat.getLoggedinUser().then(
    (user) => {
				if(!user){
            CometChat.login(UID, authKey).then(
              user => {
                console.log("Login Successful:", { user });
              }, error => {
                console.log("Login failed with exception:", { error });
              }
            );
        }
		}, error => {
				console.log("Some Error Occured", { error });
		}
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
var UID: string = "cometchat-uid-1",
		authKey: string = "AUTH_KEY";

CometChat.getLoggedinUser().then(
    (user: CometChat.User) => {
			if(!user){
      	CometChat.login(UID, authKey).then(
					(user: CometChat.User) => {
						console.log("Login Successful:", { user });
					}, (error: CometChat.CometChatException) => {
						console.log("Login failed with exception:", { error });
					}
      	);
			}
    }, (error: CometChat.CometChatException) => {
			console.log("Some Error Occured", { error });
    }
);
  ```
</TabItem>
</Tabs>



Make sure you replace the `AUTH_KEY`  with your CometChat **AuthKey** in the above code.

:::info Sample Users
 We have set-up 5 users for testing having UIDs:  `cometchat-uid-1`, `cometchat-uid-2`, `cometchat-uid-3`, `cometchat-uid-4` and `cometchat-uid-5`.
:::

The `login()` method returns the `User`  object on `Promise` resolved containing all the information of the logged in user.

:::warning
 UID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.
:::


## Integrate our UI Kits

- Please refer to the [React UI Kit](/ui-kit/react/v3/overview) section to integrate React UI Kit in your website.
- Please refer to the [Angular UI Kit](/ui-kit/angular/3.0/overview) section to integrate Angular UI Kit in your website.
- Please refer to the [Vue UI Kit](/ui-kit/vue/3.0/overview) section to integrate Vue UI Kit in your website.

## Integrate our Chat Widget

- Please refer to the [Chat Widget](/widget/html-bootstrap-jquery) section to integrate Chat Widget in your Website.
