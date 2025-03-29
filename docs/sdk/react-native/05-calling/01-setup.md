---
sidebar_position: 1
title: Setup
slug: /calling-setup
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
<TabItem value="npm" label="npm">

```bash
npm install @cometchat/calls-sdk-react-native
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add @cometchat/calls-sdk-react-native
```

</TabItem>
</Tabs>

The CometChat Calls SDK also requires the below dependencies to be installed.

<Tabs>
<TabItem value="Package JSON" label="package.json">

```json
{
  "@cometchat/chat-sdk-react-native": "^4.0.12",
  "@react-native-async-storage/async-storage": "^1.23.1",
  "@react-native-community/netinfo": "^11.3.1", // for react-native 0.63 & above.
  "@react-native-community/netinfo": "6.1.0", // for react-native below 0.63
  "react-native-background-timer": "^2.4.1",
  "react-native-callstats": "^3.73.7",
  "react-native-webrtc": "^1.106.1"
}
```

</TabItem>
</Tabs>

## Permissions

:::info
If you’re using Expo, please refer to the [Expo Integration Guide](expo-integration-guide) for setting up permissions.
:::

### Android

You need to add the below in your App's `AndroidManifest.xml` file.

<Tabs>
<TabItem value="AndroidManifest" label="AndroidManifest.xml">

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

</TabItem>
</Tabs>

Also in the same file in `buildscript` section in `ext` block make sure you have set **minSdkVersion** to **24.**

<Tabs>
<TabItem value="build.gradle" label="build.gradle">

```java
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

### iOS

You need to add the below in your App's `Info.plist` file.

<Tabs>
<TabItem value="Info" label="Info.plist">

```xml
<key>NSCameraUsageDescription</key>
<string>This is for Camera permission</string>
<key>NSMicrophoneUsageDescription</key>
<string>This is for Mic permission</string>
```

</TabItem>
</Tabs>

Also, update the minimum target version in the Podfile. Goto `./ios` folder and open the `Podfile`. In the Podfile update the platform version to `12.0.`

<Tabs>
<TabItem value="Podfile" label="Podfile">

```swift
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
<TabItem value="Javascript" label="Javascript">

```javascript
import { CometChatCalls } from "@cometchat/calls-sdk-react-native";

let appID = "APP_ID";
let region = "REGION";

const callAppSettings = new CometChatCalls.CallAppSettingsBuilder()
  .setAppId(appID)
  .setRegion(region)
  .build();

CometChatCalls.init(callAppSettings).then(
  () => {
    console.log("CometChatCalls initialization completed successfully");
  },
  (error) => {
    console.log("CometChatCalls initialization failed with error:", error);
  }
);
```

</TabItem>
<TabItem value="Typescript" label="Typescript">

```typescript
import { CometChatCalls } from "@cometchat/calls-sdk-react-native";

let appID = "APP_ID";
let region = "REGION";

const callAppSetting = new CometChatCalls.CallAppSettingsBuilder()
  .setAppId(appID)
  .setRegion(region)
  .build();

CometChatCalls.init(callAppSetting).then(
  () => {
    console.log("CometChatCalls initialization completed successfully");
  },
  (error) => {
    console.log("CometChatCalls initialization failed with error:", error);
  }
);
```

</TabItem>
</Tabs>

Make sure you replace the `APP_ID` with your CometChat `AppID` and `REGION` with your **App Region** in the above code.

| Parameter         | Description                              |
| ----------------- | ---------------------------------------- |
| `callAppSettings` | An object of the `CallAppSettings` class |
