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

### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API Keys** section and note the **Auth Key**, **App ID** & **Region**

:::info Minimum Requirement
 - Android API Level 21 
 - Android API level 24 (in case you are using the calls SDKS)
 - Androidx Compatibility
:::

### Add the CometChat Dependency

### Gradle

First, add the repository URL to the **project level** `build.gradle` file in the `repositories` block under the `allprojects` section:

<Tabs>
<TabItem value="Groovy" label="Groovy">

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

Then, add CometChat to the **app level** `build.gradle` file in the `dependencies` section.

<Tabs>
<TabItem value="Groovy" label="Groovy">

```groovy
dependencies {
  implementation 'com.cometchat:pro-android-chat-sdk:3.0.17'
}
```
</TabItem>
</Tabs>

:::info Important
v2.4+ onwards, Voice & Video Calling functionality has been moved to a separate library. In case you plan to use the calling feature, please add the Calling dependency `implementation 'com.cometchat:pro-android-calls-sdk:3.0.1'` in the dependencies section of the app-level `build.gradle` file.
:::

Finally, add the below lines `android` section of the **app level** gradle file.

<Tabs>
<TabItem value="Groovy" label="Groovy">

```groovy
android {
  compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
  }
}
```
</TabItem>
</Tabs>

## Initialize CometChat

The `init()` method initialises the settings required for CometChat. The `init()` method takes the below parameters:

1. appID - You CometChat App ID
2. appSettings - An object of the AppSettings class can be created using the AppSettingsBuilder class. The region field is mandatory and can be set using the `setRegion()` method.

The `AppSettings` class allows you to configure three settings:

- **Region**: The region where you app was created.
- **[Presence Subscription](./user-presence) :** Represents the subscription type for user presence (real-time online/offline status)
- **autoEstablishSocketConnection(boolean value)**: This property takes a boolean value which when set to true informs the SDK to manage the web-socket connection internally. If set to false, it informs the SDK that the web-socket connection will be managed manually. The default value for this parameter is true. For more information on this, please check the  [Managing Web-Socket connections manually](./advanced-managing-web-socket-connections-manually) section.  The default value for this property is **true.**
- **overrideAdminHost(adminHost: string)**: This method takes the admin URL as input and uses this admin URL instead of the default admin URL. This can be used in case of dedicated deployment of CometChat.
- **overrideClientHost(clientHost: string)**: This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

We suggest you call the `init()` method on app startup.

<Tabs>
<TabItem value="Java" label="Java">

```java
private String appID = "APP_ID"; // Replace with your App ID
private String region = "REGION"; // Replace with your App Region ("eu" or "us")

AppSettings appSettings= new AppSettings.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .autoEstablishSocketConnection(true)
  .build();

CometChat.init(this, appID,appSettings, new CometChat.CallbackListener<String>() {
  @Override
  public void onSuccess(String successMessage) {
    Log.d(TAG, "Initialization completed successfully");
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Initialization failed with exception: " + e.getMessage());
  }
});
```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val appID:String="APP_ID"  // Replace with your App ID
val region:String="REGION"  // Replace with your App Region ("eu" or "us")
   
AppSettings appSetting = AppSettings.AppSettingsBuilder()
  .setRegion(region)
  .subscribePresenceForAllUsers()
  .autoEstablishSocketConnection(true)
  .build();   

CometChat.init(this,appID,appSetting, object : CometChat.CallbackListener<String>() {
 override fun onSuccess(p0: String?) {
    Log.d(TAG, "Initialization completed successfully")
  }

  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "Initialization failed with exception: " + p0?.message)
  }
})
```
</TabItem>
</Tabs>

| Parameter    | Description                          |
| ------------ | ------------------------------------ |
| `this`       | Android context for your application |
| `appID`      | CometChat App ID                     |
| `appSetting` | An object of the AppSettings class.  |
