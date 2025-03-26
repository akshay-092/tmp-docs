---
sidebar_position: 1
title: Overview
slug: /overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide demonstrates how to add chat to a React Native application using CometChat. Before you begin, we strongly recommend you read the [Key Concepts](./01-Key%20Concepts.md) guide.

<div style={{ display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px' }}>
  <div style={{ width: '75%', padding: '12px' }}>
    <h4>I want to integrate with my app</h4>
    <ol style={{ marginBottom: '0' }}>
      <li>
        <a 
          style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} 
          target="_self" 
          href="overview#get-your-application-keys"
        >
          Get your application keys
        </a>
      </li>
      <li>
        <a 
          style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} 
          target="_self" 
          href="overview#add-the-cometchat-dependency"
        >
          Add the CometChat dependency
        </a>
      </li>
      <li>
        <a 
          style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} 
          target="_self" 
          href="overview#initialize-cometchat"
        >
          Initialize CometChat
        </a>
      </li>
      <li>
        <a 
          style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} 
          target="_self" 
          href="overview#register-and-login-your-user"
        >
          Register and Login your user
        </a>
      </li>
      <li>
        <a 
          style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} 
          target="_self" 
          href="overview#integrate-our-ui-kits"
        >
          Integrate our UI Kits
        </a>
      </li>
    </ol>
  </div>
  <div style={{ width: '75%', wordBreak: 'break-word', padding: '12px', borderLeft: '1px solid #e3e5e7' }}>
    <h4>I want to explore a sample app (includes UI)</h4>
    <p className="magic-block-textarea">Open the app folder in your favourite code editor and follow the steps mentioned in the <code>README.md</code> file.</p>
    <p>
      <a 
        className="button btn" 
        style={{ backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline' }} 
        href="https://github.com/cometchat-pro/react-native-chat-app"
      >
        React Native Sample App
      </a>
    </p>
  </div>
</div>

### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then: 

1. Create a new app
2. Head over to the **API & Auth Keys** section and note the **Auth Key**, **App ID** & **Region**

## Add the CometChat Dependency

Install the package as NPM module:

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
npm install @cometchat-pro/react-native-chat@3.0.13 --save
```

</TabItem>
</Tabs>



**In order to integrate the CometChat Pro React Native SDK, you need to install one more dependencies.**

1. Async-Storage:

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
npm install @react-native-async-storage/async-storage --save
```

</TabItem>
</Tabs>



:::info

v2.4+ onwards, Voice & Video Calling functionality has been moved to a separate library. In case you plan to use the calling feature, please install the Calling dependency (@cometchat-pro/react-native-calls).

`npm install @cometchat-pro/react-native-calls@2.3.0 --save`

The calling component requires some configuration. Please follow the steps mentioned [here](./overview#calling-component-configuration).

:::

## Calling Component Configuration

For `@cometchat-pro/react-native-calls` version starting **2.3.0**, please make sure you add the following additional dependencies & permissions.

<Tabs>
<TabItem value="1" label="Json">

```Json
{
  "@cometchat-pro/react-native-chat": "^3.0.13",
  "@react-native-async-storage/async-storage": "^1.17.5",
  "@react-native-community/netinfo": "7.1.7", // for react-native 0.63 & above.
  "@react-native-community/netinfo": "6.1.0", // for react-native below 0.63
  "react-native-background-timer": "2.4.1",
  "react-native-callstats": "3.73.7",
  "react-native-webrtc": "1.100.0"
}
```

</TabItem>
</Tabs>



#### Permissions:

**Android:**

<Tabs>
<TabItem value="1" label="XML">

```XML
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

</TabItem>
</Tabs>



**iOS:**

<Tabs>
<TabItem value="1" label="XML">

```XML
<key>NSCameraUsageDescription</key>
<string>This is for Camera permission</string>
<key>NSMicrophoneUsageDescription</key>
<string>This is for Mic permission</string>
```

</TabItem>
</Tabs>



#### Android:

Goto `./android` folder and open **project level** `build.gradle` file and add all repository URLs in the `repositories` block under the `allprojects` section.

<Tabs>
<TabItem value="1" label="build.gradle">

```groovy
allprojects {
  repositories {
    maven {
			url "https://dl.cloudsmith.io/public/cometchat/cometchat-pro-android/maven/"
		}
  }
}
```

</TabItem>
</Tabs>




Also in the same file in `buildscript` section in `ext` block make sure you have set **minSdkVersion** to **24.**

<Tabs>
<TabItem value="1" label="build.gradle">

```groovy
buildscript {
    ext {
        buildToolsVersion = "29.0.2"
        minSdkVersion = 24
        compileSdkVersion = 29
        targetSdkVersion = 29
    }
}
```

</TabItem>
</Tabs>



#### iOS:

Please update the minimum target version in the Podfile. Goto ./ios folder and open the Podfile. In the Podfile update the platform version to `11.0`

<Tabs>
<TabItem value="1" label="Podfile">

```pod
platform :ios, '11.0'
```

</TabItem>
</Tabs>



Open the `ios/App` folder and run `pod install` this will create an `App.xcworkspace` open this and run the app.

## Initialize CometChat

The `init()` method initialises the settings required for CometChat. The `init()` method takes the below parameters:

1. appID - You CometChat App ID
2. appSettings - An object of the AppSettings class can be created using the AppSettingsBuilder class. The region field is mandatory and can be set using the `setRegion()` method.

The `AppSettings` class allows you to configure two settings:

- **Region**: The region where your app was created.
- [Presence Subscription](./user-presence): Represents the subscription type for user presence (real-time online/offline status)
- **autoEstablishSocketConnection(boolean value)**: This property takes a boolean value which when set to true informs the SDK to manage the web-socket connection internally. If set to false, it informs the SDK that the web-socket connection will be managed manually. The default value for this parameter is true. For more information on this, please check the [Managing Web-Socket connections manually](./managing-web-socket-connections-manually) section. The default value for this property is **true.**
- **overrideAdminHost(adminHost: string)**: This method takes the admin URL as input and uses this admin URL instead of the default admin URL. This can be used in case of dedicated deployment of CometChat.
- **overrideClientHost(clientHost: string)**: This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

You need to call `init()` before calling any other method from CometChat. We suggest you call the `init()` method on app startup, preferably in the `index.js` file.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let appID = "APP_ID";
let region = "REGION";
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
<TabItem value="2" label="Typescript">

```Typescript
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



Make sure you replace the `APP_ID`  with your CometChat **App ID** and `REGION`  with your **App Region** in the above code.

## Register and Login your user

Once initialization is successful, you will need to create a user.
To create users on the fly, you can use the `createUser()` method. This method takes a `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let authKey = "AUTH_KEY";
let uid = "user1";
let name = "Kevin";

let user = new CometChat.User(uid);

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
<TabItem value="2" label="Typescript">

```Typescript
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



Make sure that `UID` and `name` are specified as these are mandatory fields to create a user.

Once you have created the user successfully, you will need to log the user into CometChat using the `login()` method.

We recommend you call the CometChat `login()` method once your user logs into your app. The `login()` method needs to be called only once.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let UID = "cometchat-uid-1";
let authKey = "AUTH_KEY";

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
<TabItem value="2" label="Typescript">

```Typescript
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



Make sure you replace the `AUTH_KEY`  with your CometChat **Auth Key** in the above code.

:::info

We have set-up 5 users for testing having UIDs:  `cometchat-uid-1`, `cometchat-uid-2`, `cometchat-uid-3`, `cometchat-uid-4` and `cometchat-uid-5`.

:::

The `login()` method returns the `User` object containing all the information of the logged-in user.

:::warning Warning

UID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.

:::

## Integrate our UI Kits

Please refer to the [React Native UI Kit ](/ui-kit/react-native/overview) section to integrate React Native UI Kit inside your app.