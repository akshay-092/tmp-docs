---
sidebar_position: 2
title: Setup
slug: /setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Migrating app version from v2 to v3 ?
Skip the create new app step. Your existing v2 app can be migrated to v3. Follow steps mentioned in **Add the CometChat dependency** section below to upgrade to latest version of v3
:::

## Get your Application Keys

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

:::info Important
v2.4+ onwards, Voice & Video Calling functionality has been moved to a separate library. In case you plan to use the calling feature, please install the Calling dependency (@cometchat-pro/ionic-calls). <br/>
For Capacitor v2 apps, `npm install @cometchat-pro/ionic-calls@2.1.2` <br/>
For capacitor v3 apps, `npm install @cometchat-pro/ionic-calls@2.3.0` <br/>
For capacitor v4 apps, `npm install @cometchat/calls-sdk-ionic` <br/>
The calling component requires some additional configuration. Please follow the steps mentioned [here](setup#calling-component-configuration).
:::

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
      url "https://dl.cloudsmith.io/public/cometchat/cometchat-pro-android/maven/"
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

In the Main activity you need to map Capacitor class add(Calling.class);

**Note**: Only for capacitor v2 plugin (`@cometchat-pro/ionic-calls: 2.1.2` )

<Tabs>
<TabItem value="Java" label="Java">

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

```swift
// For @cometchat-pro/ionic-calls version below 2.3.0
platform :ios, '11.0'

// For @cometchat-pro/ionic-calls version 2.3.0 & above
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
- **autoEstablishSocketConnection(boolean value)**: This property takes a boolean value which when set to true informs the SDK to manage the web-socket connection internally. If set to false, it informs the SDK that the web-socket connection will be managed manually. The default value for this parameter is true. For more information on this, please check the [Managing Web-Socket connections manually](/sdk/ionic/managing-connections-manually) section. The default value for this property is **true.**
- **overrideAdminHost(adminHost: string)**: This method takes the admin URL as input and uses this admin URL instead of the default admin URL. This can be used in case of dedicated deployment of CometChat.
- **overrideClientHost(clientHost: string)**: This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

You need to call `init()` before calling any other method from CometChat. We suggest you call the `init()` method on app startup, preferably in the `index.js` file.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
let appID = "APP_ID";
let region = "REGION";
let cometChatSettings = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .autoEstablishSocketConnection(true)
  .build();
CometChat.init(appID, cometChatSettings).then(
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

| Parameter  | Description                         |
| ---------- | ----------------------------------- |
| appID      | CometChat App ID                    |
| appSetting | An object of the AppSettings class. |
