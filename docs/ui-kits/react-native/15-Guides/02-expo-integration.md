---
sidebar_position: 2
title: Expo Integration
slug: /expo-integration-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
To run the CometChat UI Kit in Expo version **0.52** & above, you need to disable the new architecture of react native. You need to add/update the `newArchEnabled` flag in the `app.json` file present in the root directory of your project. 

```JSON
{
  "expo": {
    "newArchEnabled": false
  }
}
```

:::

Our React Native UI Kit does not work with Expo GO since it requires some custom native modules. Also, expo does not recommend using Expo GO for building production grade apps. So in order to use our UI Kit in an expo app you need to use [development builds](https://docs.expo.dev/develop/development-builds/introduction/). You can follow [this](https://docs.expo.dev/guides/local-app-development/) official Expo guide for more details.

The UI Kit requires a few permissions to run so you need to make some changes in your `app.json` file. You need to add the below `permissions` block inside `android` block of the `app.json` file.

<Tabs>
<TabItem value="ts2" label="app.json">

```json
"permissions": [
  "READ_EXTERNAL_STORAGE",
  "WRITE_EXTERNAL_STORAGE",
  "VIBRATE",
  "INTERNET"
],
```

</TabItem>

</Tabs>
