---
sidebar_position: 0
title: Setup
slug: /setup-calling
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Get your Application Keys

[Signup for CometChat](https://app.cometchat.com/signup) and then:

1. Create a new app
2. Head over to the API Keys section and note the Auth Key, App ID & Region

:::info Minimum Requirement

- Android API Level 21
- Android API level 24 (in case you are using the calls SDKS)
- Androidx Compatibility
  :::

## Add the CometChatCalls Dependency

### Gradle

First, add the repository URL to the **project level** `build.gradle` file in the `repositories` block under the `allprojects` section:

<Tabs>
<TabItem value="Groovy" label="Groovy">

```groovy
allprojects {
  repositories {
    maven {
        url "https://dl.cloudsmith.io/public/cometchat/cometchat/maven/"
    }
  }
}
```

</TabItem>
</Tabs>

Then, add CometChatCalls to the app level `build.gradle` file in the `dependencies` section.

<Tabs>
<TabItem value="Groovy" label="Groovy">

```groovy
dependencies {
  implementation 'com.cometchat:calls-sdk-android:4.0.7'
}
```

</TabItem>
</Tabs>

## Initialize CometChatCalls

The `init()` method initialises the settings required for CometChatCalls. The`init()`method takes the below parameters:

context - Your activity context
callAppSettings - An object of the CallAppSettings class can be created using the CallAppSettingBuilder class. The appId and region field is mandatory and can be set using the `setAppId()` and `setRegion()` method.
The `CallAppSettings` class allows you to configure three settings:

App ID: CometChat app ID.
Region: The region where you app was created.
Host(host: string): This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.
We suggest you call the `init()` method on activity onCreate() method.

<Tabs>
<TabItem value="Java" label="Java">

```java
private Context context = this;
private String appID = "APP_ID"; // Replace with your App ID
private String region = "REGION"; // Replace with your App Region ("eu" or "us")

CallAppSettings callAppSettings = CallAppSettingBuilder()
  .setAppId(appID)
  .setRegion(region)
  .build();

CometChatCalls.init(
    context,
    callAppSettings,
    new CometChatCalls.CallbackListener<String>() {
        override public void onSuccess(String successMessage) {

        }

        override public void onError(CometChatException e) {

        }
    }
)
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val context:Context = this  // Replace with your App Region ("eu" or "us")
val appID:String ="APP_ID"  // Replace with your App ID
val region:String ="REGION"  // Replace with your App Region ("eu" or "us")

val callAppSettings = CallAppSettingBuilder()
  .setAppId(appID)
  .setRegion(region).build()

CometChatCalls.init(
    context,
    callAppSettings,
    object : CometChatCalls.CallbackListener<String>() {
        override fun onSuccess(s: String?) {

        }

        override fun onError(e: CometChatException) {

        }
    }
)
```

</TabItem>
</Tabs>

| Parameter         | Description                            |
| ----------------- | -------------------------------------- |
| `context`         | Android context for your application   |
| `callAppSettings` | An object of the CallAppSettings class |
