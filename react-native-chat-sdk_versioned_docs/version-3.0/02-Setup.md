---
sidebar_position: 2
title: Setup
slug: /setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Migrating app version from v2 to v3 ?

Skip the create new app step. Your existing v2 app can be migrated to v3.

Follow steps mentioned in **Add the CometChat dependency** section below to upgrade to latest version of v3

:::


## Get your Application Keys

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



**In order to integrate the CometChat Pro React Native SDK, you need to install one more dependencies**

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

The calling component requires some configuration. Please follow the steps mentioned [here](./setup#calling-component-configuration).

:::

## Calling Component Configuration

For `@cometchat-pro/react-native-calls` version starting **2.3.0**, please make sure you add the following additional dependencies & permissions.

<Tabs>
<TabItem value="1" label="JSON">

```JSON
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
<TabItem value="1" label="Java">

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



Also in the same file in  `buildscript` section in `ext` block make sure you have set **minSdkVersion** to **24.**

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

Please update the minimum target version in the Podfile. Goto ./ios folder and open the Podfile. In the Podfile update the platform version to `11.0.`

<Tabs>
<TabItem value="1" label="Podfile">

```ruby
platform :ios, '11.0'
```

</TabItem>
</Tabs>



Open the `ios/App` folder and run `pod install` this will create an `App.xcworkspace` open this and run the app.

## Initialize CometChat

The `init()` method initialises the settings required for CometChat. The `init()`  method takes the below parameters:

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



Make sure you replace the `APP_ID` with your CometChat **App ID** and `REGION` with your **App Region** in the above code.

| Parameter | Description | 
| ---- | ---- | 
| appID | CometChat App ID | 
| appSetting | An object of the AppSettings class. | 
