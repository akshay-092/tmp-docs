---
sidebar_position: 2
title: Setup
slug: /setup
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API & Auth Keys** section and note the **Auth Key**, **App ID** & **Region**

## Add the CometChat Dependency

### NPM

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
npm install @cometchat-pro/chat@2.4.1 --save
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

Include the CometChat Javascript library in your HTML code.


<Tabs>
<TabItem value="HTML" label="HTML">

  ```html
<script type="text/javascript" src="https://unpkg.com/@cometchat-pro/chat@2.4.1/CometChat.js"></script>
  ```
</TabItem>
</Tabs>

## Initialize CometChat

The `init()` method initialises the settings required for CometChat. The `init()`  method takes the below parameters:

1. appID - You CometChat App ID
2. appSettings - An object of the AppSettings class can be created using the AppSettingsBuilder class. The region field is mandatory and can be set using the `setRegion()` method.

The `AppSettings` class allows you to configure two settings:

- **Region**: The region where you app was created.
- [Presence Subscription](./user-presence)

You need to call `init()` before calling any other method from CometChat. We suggest you call the `init()` method on app startup, preferably in the `index.js` file.

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
let appID = "APP_ID";
let region = "APP_REGION";
let appSetting = new CometChat.AppSettingsBuilder()
                    .subscribePresenceForAllUsers()
                    .setRegion(region)
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
</Tabs>


Make sure you replace the `APP_ID` with your CometChat **App ID** and `APP_REGION` with your **App Region** in the above code.

| Parameter | Description | 
| ---- | ---- | 
| appID | CometChat App ID | 
| appSetting | An object of the AppSettings class. | 
