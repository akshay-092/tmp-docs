---
sidebar_position: 8
title: Expo Integration
slug: /expo-integration-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Add the CometChatCalls Dependency

:::info
To add CometChat Calls SDK, please refer to the steps mentioned [here](calling-setup#add-the-cometchatcalls-dependency).
:::

## Permissions

Our React Native Calls SDK does not work with Expo GO since it requires some custom native modules. Also, expo does not recommend using Expo GO for building production grade apps. So in order to use our Calls SDK in an expo app you need to use [development builds](https://docs.expo.dev/develop/development-builds/introduction/). You can follow the official Expo [guide](https://docs.expo.dev/guides/local-app-development/) for more details.

### Android

You need to add the below `permissions` & `plugin` block inside `android` block of the `app.json` file. You need to install `expo-build-properties` package in your app.

<Tabs>
<TabItem value="App JSON" label="app.json">

```json
"permissions": [
  "CAMERA",
  "READ_EXTERNAL_STORAGE",
  "WRITE_EXTERNAL_STORAGE",
  "VIBRATE",
  "INTERNET",
  "MODIFY_AUDIO_SETTINGS",
  "RECORD_AUDIO",
  "ACCESS_NETWORK_STATE"
],
"plugins": [
  [
    "expo-build-properties",
    {
      "android": {
        "minSdkVersion": 24,
        "extraMavenRepos": ["https://dl.cloudsmith.io/public/cometchat/cometchat-pro-android/maven/"]
      }
    }
  ]
]
```

</TabItem>
</Tabs>

### iOS

You need to add the below `permissions` block inside `ios` block of the `app.json` file.

<Tabs>
<TabItem value="App JSON" label="app.json">

```json
"infoPlist": {
    "NSCameraUsageDescription": "This app uses the camera for video calls.",
    "NSMicrophoneUsageDescription": "This app uses the microphonr for audio/video calls."
}
```

</TabItem>
</Tabs>

## Initialize CometChat Calls

:::info
To initialize CometChat Calls SDK, please refer to the guide [here](calling-setup#initialize-cometchatcalls)
:::
