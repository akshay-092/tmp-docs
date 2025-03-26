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

Install the package as NPM module:

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
npm install @cometchat-pro/cordova-ionic-chat@2.4.1 --save
  ```
</TabItem>
</Tabs>




:::info Important
 v2.4+ onwards, Voice & Video Calling functionality has been moved to a separate library. In case you plan to use the calling feature, please install the Calling dependency (@cometchat-pro/ionic-calls).
 
  `npm install @cometchat-pro/ionic-calls@2.1.2--save`
  
   The calling component requires some configuration. Please follow the steps mentioned [here](./setup#calling-component-configuration).
:::

:::danger
 The Calling Component (@cometchat-pro/ionic-calls) is a capacitor plugin so it won't work in a Cordova project.
:::

## Calling Component Configuration

**Android**

Goto `./android` folder and open **project-level** build Gradle file and add all repository URLs in the `repositories` block under the `allprojects` section.
<Tabs>
<TabItem value="build.gradle" label="build.gradle">

  ```javascript
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

  ```javascript
minSdkVersion = 24
  ```
</TabItem>
</Tabs>


In the Main activity you need to map Capacitor class add(Calling.class);

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

Please update the minimum target version in the Podfile. Goto ./ios folder and open the Podfile. In the Podfile update the platform version to `11.0`.

<Tabs>
<TabItem value="Podfile" label="Podfile">

  ```swift
platform :ios, '11.0'
  ```
</TabItem>
</Tabs>



Open the `ios/App` folder and run `pod install` this will create an `App.xcworkspace` open this and run the app.

## Initialize CometChat

The `init()` method initialises the settings required for CometChat. The `init()`  method takes the below parameters:

1. appId - Your CometChat App ID
2. appSettings - An object of the AppSettings class can be created using the AppSettingsBuilder class. The region field is mandatory and can be set using the `setRegion()` method.

The `AppSettings` class allows you to configure two settings:

- Region: The region where you app was created.
- [Presence Subscription](./user-presence)

You need to call `init()` before calling any other method from CometChat. We suggest you call the `init()` method on app startup, preferably in the `index.js` file.

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
let appID = "APP_ID";
let region = "REGION";
let cometChatSettings = new CometChat.AppSettingsBuilder()
													.subscribePresenceForAllUsers()
													.setRegion(region)
													.build();
CometChat.init(appID,cometChatSettings).then(
	() => {
		console.log("Initialization completed successfully");
	}, error => {
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