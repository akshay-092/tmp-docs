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
2. Head over to the **Credentials** section and note the **App ID, Auth Key** & **Region**

## Add the CometChatCalls Dependency

Install the package as NPM module:

<Tabs>
<TabItem value="1" label="npm">

```CLI
npm install @cometchat-pro/ionic-calls@latest --save
```

</TabItem>

<TabItem value="2" label="yarn">

```CLI
yarn add @cometchat-pro/ionic-calls@latest
```

</TabItem>
</Tabs>



Then, import the `CometChatCalls` class wherever you want to use `CometChatCalls`.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
import { CometChatCalls } from "@cometchat-pro/ionic-calls";
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
import { CometChatCalls } from "@cometchat-pro/ionic-calls";
```

</TabItem>
</Tabs>


### Initialize CometChatCalls

The `init()` method initialises the settings required for `CometChatCalls`. The `init()` method takes a single paramater, that is the instance of `CallAppSettings` class.

The `CallAppSettingsBuilder` class allows you to configure three settings:

1. **appID:** You CometChat App ID
2. **region**: The region where your app was created
3. **host:** This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

You need to call init() before calling any other method from `CometChatCalls`. We suggest you call the init() method on app startup, preferably in the index.js file.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
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

<TabItem value="2" label="Typescript">

```typescript
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



Make sure you replace the `APP_ID` with your CometChat **App ID** and `REGION` with your **App Region** in the above code.

| Parameter | Description | 
| ---- | ---- | 
| `callAppSettings` | An object of the `CallAppSettings` class | 
