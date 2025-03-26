---
sidebar_position: 1
title: Setup
slug: /v3-setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API & Auth Keys** section and note the **Auth Key**, **App ID** & **Region**

## Add the CometChatCalls Dependency

Install the package as NPM module:

<Tabs>
<TabItem value="1" label="npm">

```CLI
npm install @cometchat-pro/react-native-calls@latest --save
```

</TabItem>

<TabItem value="2" label="yarn">

```CLI
yarn add @cometchat-pro/react-native-calls@latest
```

</TabItem>
</Tabs>



Then, import the `CometChatCalls` class wherever you want to use `CometChatCalls`.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
import { CometChatCalls } from "@cometchat-pro/react-native-calls";
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
import { CometChatCalls } from "@cometchat-pro/react-native-calls";
```

</TabItem>
</Tabs>



## Calling Component Configuration

For `@cometchat-pro/react-native-calls` version starting **3.0.0**, please make sure you add the following additional dependencies & permissions.

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
  "react-native-webrtc": "^1.106.1"
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

Please update the minimum target version in the Podfile. Goto ./ios folder and open the Podfile. In the Podfile update the platform version to `12.0.`

<Tabs>
<TabItem value="1" label="Podfile">

```ruby
platform :ios, '12.0'
```

</TabItem>
</Tabs>



Open the `ios/App` folder and run `pod install` this will create an `App.xcworkspace` open this and run the app.

## Initialize CometChatCalls

The init() method initialises the settings required for CometChatCalls. The init() method takes a single paramater, that is the instance of CallAppSettingsBuilder class.

The `CallAppSettings` class allows you to configure three settings:

- **App ID**: CometChat app ID.
- **Region**: The region where you app was created.
- **Host(host: string)**: This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

You need to call `init()` before calling any other method from CometChatCalls. We suggest you call the `init()` method on app startup, preferably in the `index.js` file.

<Tabs>
<TabItem value="1" label="Javascript">

```Javascript
let appID = "APP_ID";
let region = "REGION";

const callAppSettings = new CometChatCalls.CallAppSettingsBuilder()
    .setAppId(appID)
    .setRegion(region)
    .build();

CometChatCalls.init(callAppSettings).then(
    () => {
        console.log('CometChatCalls initialization completed successfully');
    },
    error => {
        console.log('CometChatCalls initialization failed with error:', error);
    },
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```Typescript
let appID = "APP_ID";
let region = "REGION";

const callAppSetting = new CometChatCalls.CallAppSettingsBuilder()
    .setAppId(appID)
    .setRegion(region)
    .build();

CometChatCalls.init(callAppSetting).then(
    () => {
        console.log('CometChatCalls initialization completed successfully');
    },
    error => {
        console.log('CometChatCalls initialization failed with error:', error);
    },
);
```

</TabItem>
</Tabs>



Make sure you replace the `APP_ID` with your CometChat `AppID`  and `REGION` with your **App Region** in the above code.

| Parameter | Description | 
| ---- | ---- | 
| `callAppSettings` | An object of the `CallAppSettings`  class | 

