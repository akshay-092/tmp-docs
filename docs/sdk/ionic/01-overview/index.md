---
sidebar_position: 1
title: Overview
slug: /overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide demonstrates how to add real-time Ionic chat to a Cordova/Ionic application using CometChat.

Before you begin, we strongly recommend you read the [Key Concepts](key-concepts) guide.

<div style={{display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px'}}>
  <div style={{width: '50%', padding: '12px'}}>
    <h4>I want to integrate with my app</h4>
    <ol style={{marginBottom: '0'}}>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#get-your-application-keys">Get your application keys</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#add-the-cometchat-dependency">Add the CometChat dependency</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#initialize-cometchat">Initialize CometChat</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="overview#register-and-login-your-user">Register and Login your user</a></li>
    </ol>
  </div>
</div>

### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API & Auth Keys** section and note the **Auth Key**, **App ID** & **Region**

## Add the CometChat Dependency

Install the package as NPM module:

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
npm install @cometchat/chat-sdk-ionic
```

</TabItem>
</Tabs>

:::danger Note
The Calling Component (@cometchat/calls-sdk-ionic) is a capacitor plugin so it won't work in a Cordova project.
:::

## Calling Component Configuration

**Android**

Goto `./android` folder and open **project-level** build Gradle file and add all repository URLs in the `repositories` block under the `allprojects` section.

<Tabs>
<TabItem value="build.gradle" label="build.gradle">

```java
allprojects {
repositories {
  maven {
      url "https://dl.cloudsmith.io/public/cometchat/cometchat/maven/"
  }
}
}
```

</TabItem>
</Tabs>

You also need to update the minimum SDK version to `24`. You can update the minSDKVersion in the `variables.gradle` file located in the `android` folder.

<Tabs>
<TabItem value="variables.gradle" label="variables.gradle">

```java
minSdkVersion = 24
```

</TabItem>
</Tabs>

For capacitor **v2**, you need to add the Calling Plugin in the Main Activity. The below changes are not required for capacitor **v3** & above.

<Tabs>
<TabItem value="java" label="java">

```java
package io.ionic.starter;

import android.os.Bundle;

import com.cometchat.calling.Calling; //Add this line

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(Calling.class);
  }});
}
}
```

</TabItem>
</Tabs>

**iOS**:

Please update the minimum target version in the Podfile. Goto **./ios/App** folder and open the Podfile.

<Tabs>
<TabItem value="Podfile" label="Podfile">

```java
platform :ios, '12.0'
```

</TabItem>
</Tabs>

Open the `ios/App` folder and run `pod install` this will create an `App.xcworkspace` open this and run the app.

## Initialize CometChat

The `init()` method initialises the settings required for CometChat. The `init()` method takes the below parameters:

1. appId - Your CometChat App ID
2. appSettings - An object of the AppSettings class can be created using the AppSettingsBuilder class. The region field is mandatory and can be set using the `setRegion()` method.

The `AppSettings` class allows you to configure two settings:

- **Region**: The region where you app was created.
- [Presence Subscription](user-presence): Represents the subscription type for user presence (real-time online/offline status)
- **autoEstablishSocketConnection(boolean value)**: This property takes a boolean value which when set to `true` informs the SDK to manage the web-socket connection internally. If set to `false` , it informs the SDK that the web-socket connection will be managed manually. The default value for this parameter is true. For more information on this, please check the [ Managing connections manually ](managing-connections-manually) section. The default value for this property is **true.**
- **overrideAdminHost(adminHost: string)**: This method takes the admin URL as input and uses this admin URL instead of the default admin URL. This can be used in case of dedicated deployment of CometChat.
- **overrideClientHost(clientHost: string)**: This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

You need to call `init()` before calling any other method from CometChat. We suggest you call the `init()` method on app startup, preferably in the `index.js` file.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
var appID = "APP_ID";
var region = "REGION";
var appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .autoEstablishSocketConnection(true)
  .build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
  },
  (error) => {
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
  },
  (error: CometChat.CometChatException) => {
    console.log("Initialization failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

Make sure you replace the `APP_ID` with your CometChat **App ID** and `REGION` with your **App Region** in the above code.

## Register and Login your user

Once initialization is successful, you will need to create a user.
To create users on the fly, you can use the `createUser()` method. This method takes a `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
let authKey = "AUTH_KEY";
var uid = "user1";
var name = "Kevin";

var user = new CometChat.User(uid);

user.setName(name);

CometChat.createUser(user, authKey).then(
  (user) => {
    console.log("user created", user);
  },
  (error) => {
    console.log("error", error);
  }
);
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
  },
  (error: CometChat.CometChatException) => {
    console.log("error", error);
  }
);
```

</TabItem>
</Tabs>

Make sure that `UID` and `name` are specified as these are mandatory fields to create a user.

Once you have created the user successfully, you will need to log the user into CometChat using the `login()` method.

We recommend you call the CometChat `login()` method once your user logs into your app. The `login()` method needs to be called only once.

:::info

This straightforward authentication method is ideal for proof-of-concept (POC) development or during the early stages of application development. For production environments, however, we strongly recommend using an [Auth Token](/sdk/ionic/authentication#login-using-auth-token) instead of an Auth Key to ensure enhanced security.

:::

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
var UID = "cometchat-uid-1";
var authKey = "AUTH_KEY";

CometChat.getLoggedinUser().then(
  (user) => {
    if (!user) {
      CometChat.login(UID, authKey).then(
        (user) => {
          console.log("Login Successful:", { user });
        },
        (error) => {
          console.log("Login failed with exception:", { error });
        }
      );
    }
  },
  (error) => {
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
    if (!user) {
      CometChat.login(UID, authKey).then(
        (user: CometChat.User) => {
          console.log("Login Successful:", { user });
        },
        (error: CometChat.CometChatException) => {
          console.log("Login failed with exception:", { error });
        }
      );
    }
  },
  (error: CometChat.CometChatException) => {
    console.log("Some Error Occured", { error });
  }
);
```

</TabItem>
</Tabs>

Make sure you replace the `AUTH_KEY` with your CometChat **Auth Key** in the above code.

:::info Sample Users
We have set-up 5 users for testing having UIDs: `cometchat-uid-1`, `cometchat-uid-2`, `cometchat-uid-3`, `cometchat-uid-4` and `cometchat-uid-5`.
:::

The `login()` method returns the `User` object containing all the information of the logged-in user.

:::warning Warning
UID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.
:::
