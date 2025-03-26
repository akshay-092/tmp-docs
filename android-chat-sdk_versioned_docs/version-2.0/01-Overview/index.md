---
sidebar_position: 1
title: Overview
slug: /overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide demonstrates how to add chat to an Android application. Before you begin, we strongly recommend you read the [Key Concepts](./key-concepts) guide.

<div style={{display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px'}}>
  <div style={{width: '75%', padding: '12px'}}>
    <h4><strong>I want to integrate with my app</strong></h4>
    <ol style={{marginBottom: '0'}}>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="./overview#get-your-application-keys">Get your application keys</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="./overview#add-the-cometchat-dependency">Add the CometChat dependency</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="./overview#initialize-cometchat">Initialize CometChat</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="./overview#register-and-login-your-user">Register and Login your user</a></li>
      <li><a style={{color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em'}} target="_self" href="./overview#integrate-our-ui-kits">Integrate Our UI Kits</a></li>
    </ol>
  </div>
  <div style={{width: '75%', wordBreak: 'break-word', padding: '12px', borderLeft: '1px solid #e3e5e7'}}>
    <h4><strong>I want to explore a sample app (includes UI)</strong></h4>
    <p>Import the app into Android Studio and follow the steps mentioned in the <code>README.md</code> file.</p>
    <p><a className="button btn" style={{backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline'}} href="https://github.com/cometchat-pro/android-java-chat-app/">Java Chat App</a></p>
    <p><a className="button btn" style={{backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline'}} href="https://github.com/cometchat-pro/android-kotlin-chat-app">Kotlin Chat App</a></p>
  </div>
</div>

### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API Keys** section and note the **Auth Key**, **App ID** & **Region**

:::info Minimum Requirements

- Android API Level 21
- Androidx Compatibility
  :::

### Add the CometChat Dependency

First, add the repository URL to the **project level**`build.gradle` file in the `repositories` block under the `allprojects` section.

```
allprojects {
  repositories {
    maven {
      url "https://dl.cloudsmith.io/public/cometchat/cometchat-pro-android/maven/"
    }
  }
}
```

Then, add CometChat to the **app level**`build.gradle` file in the `dependencies` section.

```
dependencies {
  implementation 'com.cometchat:pro-android-chat-sdk:2.4.2'
  implementation 'com.cometchat:pro-android-calls-sdk:2.1.1'
}
```

:::info Important
v2.4+ onwards, Voice & Video Calling functionality has been moved to a separate library. In case you plan to use the calling feature, please add the Calling dependency `implementation 'com.cometchat:pro-android-calls-sdk:2.1.1'` in the dependencies section of the app-level `build.gradle` file.
:::

Finally, add the below lines `android` section of the **app level** gradle file

```
android {
  compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
  }
}
```

### Initialize CometChat

The `init()` method initialises the settings required for CometChat. We suggest calling the `init()` method on app startup .

<Tabs>
<TabItem value="Java" label="Java">

```java
String appID = "APP_ID"; // Replace with your App ID
String region = "REGION"; // Replace with your App Region ("eu" or "us")

AppSettings appSettings=new AppSettings.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();

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
val appID:String="APP_ID" // Replace with your App ID
val region:String="REGION" // Replace with your App Region ("eu" or "us")

val appSettings = AppSettings.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build()

CometChat.init(this,appID,appSettings, object : CometChat.CallbackListener<String>() {
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

Make sure you replace the `APP_ID` with your CometChat **App ID** and `region` with your **App Region** in the above code.

### Register and Login your User

Once initialisation is successful, you will need to create a user.

To create users on the fly, you can use the `createUser()` method. This method takes an `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.

<Tabs>
<TabItem value="Java" label="Java">

```java
String authKey = "AUTH_KEY"; // Replace with your App Auth Key
User user = new User();
user.setUid("user1"); // Replace with the UID for the user to be created
user.setName("Kevin"); // Replace with the name of the user

CometChat.createUser(user, authKey, new CometChat.CallbackListener<User>() {
  @Override
    public void onSuccess(User user) {
    Log.d("createUser", user.toString());
  }

  @Override
    public void onError(CometChatException e) {
    Log.e("createUser", e.getMessage());
  }
});
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val authKey = "AUTH_KEY" // Replace with your App Auth Key
val user = User()
user.uid = "user1" // Replace with the UID for the user to be created
user.name = "Kevin" // Replace with the name of the user

CometChat.createUser(user, authKey, object : CometChat.CallbackListener<User>() {
  override fun onSuccess(user: User) {
    Log.d("createUser", user.toString())
  }

  override fun onError(e: CometChatException) {
    Log.e("createUser", e.message)
  }
})
```

</TabItem>
</Tabs>

Make sure that `UID` and `name` are specified as these are mandatory fields to create a user.

Once you have created the user successfully, you will need to log the user into CometChat using the `login()` method.

We recommend you call the CometChat `login()` method once your user logs into your app. The `login()` method needs to be called only once.

<Tabs>
<TabItem value="Java" label="Java">

```java
String UID = "user1"; // Replace with the UID of the user to login
String authKey = "AUTH_KEY"; // Replace with your App Auth Key

if (CometChat.getLoggedInUser() == null) {
  CometChat.login(UID, authKey, new CometChat.CallbackListener<User>() {
    @Override
    public void onSuccess(User user) {
      Log.d(TAG, "Login Successful : " + user.toString());
    }

    @Override
    public void onError(CometChatException e) {
      Log.d(TAG, "Login failed with exception: " + e.getMessage());
    }
  });
} else {
  // User already logged in
}
```

</TabItem>
<TabItem value="Kotlin" label="Kotlin">

```kotlin
val UID:String="user1" // Replace with the UID of the user to login
 val authKey:String="AUTH_KEY" // Replace with your App Auth Key

if (CometChat.getLoggedInUser() == null) {
CometChat.login(UID,authKey, object : CometChat.CallbackListener<User>() {
     override fun onSuccess(p0: User?) {
         Log.d(TAG, "Login Successful : " + p0?.toString())
      }

     override fun onError(p0: CometChatException?) {
         Log.d(TAG, "Login failed with exception: " +  p0?.message)
      }

   })
}else{
   // User already logged in
}
```

</TabItem>
</Tabs>

Make sure you replace the `AUTH_KEY` with your App **Auth Key** in the above code.

The `login()` method returns the `User` object containing all the information of the logged-in user.

:::warning Warning
UID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.
:::

### Integrate our UI Kits

- Please refer [Overview](/ui-kit/android/v5/overview) section to integrate Android Java UI Kit inside your app.
- Please refer [Android Kotlin UI Kit](/ui-kit/kotlin/overview) section to integrate Android Kotlin UI Kit inside your app.
