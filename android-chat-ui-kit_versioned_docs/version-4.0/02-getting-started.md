---
sidebar_position: 2
title: Getting Started
slug: /getting-started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Start your first conversation

CometChat UI Kit for Android is a collection of prebuilt UI components designed to simplify the development of an in-app chat with all the essential messaging features. Our UI Kit offers light and dark themes, various fonts, colors, and additional customization options.

CometChat UI Kit supports both one-to-one and group conversations. Follow the guide below to initiate conversations from scratch using CometChat Android UI Kit.

![](./assets/chat_cometchat_screens.png)

## Prerequisites

Before installing the **UI Kit**, you need to create a CometChat application on the CometChat Dashboard, which includes all the necessary data for a chat service, such as users, groups, calls, and messages. You will require the `App ID`, `AuthKey`, and `Region` of your CometChat application when initializing the SDK.

**i. Register on CometChat**

- You need to register on the **CometChat Dashboard** first. [Click here to sign up](https://app.cometchat.com/login).

**ii. Get Your Application Keys**

- Create a **new app**
- Head over to the **QuickStart** or **API & Auth Keys section** and note the **App ID**, **Auth Key**, and **Region**.

**iii. IDE Setup**

-  You have Android Studio installed on your machine.
-  You have an Android device or emulator with Android version 6.0 or above.
-  Android 5.0 (API level 21) or higher is installed.
-  Java 8 or higher is installed.
-  Android Gradle plugin 4.0.1 or higher is installed.

## Getting Started

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 1</span>

### Create a project

    To get started, open Android Studio and create a new project for UI Kit in the Project window as follows:

    1. Click Start a **new Android Studio** project in the **Welcome to Android Studio** window.
    1. Select **Empty Activity** in the **Select a Project Template** window and click Next.
    1. Enter your project name in the **Name** field in the **Configure your project** window.
    1. Select your language as either **Java** or Kotlin from the Language drop-down menu.
    1. Select minimum API level as 21 or higher.

---

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 2</span>

### Add Dependency

This developer kit is an add-on feature to the CometChat Android SDK, so installing it will also install the core Chat SDK.

Open the **project-level** `settings.gradle` file and add the following repository URL in the `repositories` block under the `repositories` section.

```groovy title="settings.gradle"
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven{
            url "https://dl.cloudsmith.io/public/cometchat/cometchat/maven/"
        }
    }
}
```

Open the **app-level** `build.gradle` file and add your package name as indicated in the code.

```groovy title="build.gradle"
android {
    defaultConfig {
	...
	manifestPlaceholders = [file_provider: "YOUR_PACKAGE_NAME"] //add your application package.
    }
}
```

Open the **app level** `build.gradle` file and add the following dependency to fetch the chat UI kit into your project.

```groovy title="build.gradle"
dependencies {
    implementation 'com.cometchat:chat-uikit-android:4.3.18'
}
```

Open the gradle.properties file and verify if the specified line is present. If not, add it accordingly.

```groovy title="gradle.properties"
android.enableJetifier=true
```

---

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 3</span>

### Initialize CometChatUIkit

To integrate and run CometChat UI Kit in your app, you need to initialize it beforehand.

The [Init](/ui-kit/android/methods#init) method initializes the settings required for CometChat. Please ensure to call this method before invoking any other methods from CometChat UI Kit or CometChat SDK.

:::info

The Auth Key is an optional property of the `UIKitSettings` Class. It is intended for use primarily during proof-of-concept (POC) development or in the early stages of application development. You can use [Auth Token](/ui-kit/android/methods#login-using-auth-token) method to login securely.

:::

<Tabs>
<TabItem value="Java" label="Java">
```java title="YourActivity.java"
String appID = "APP_ID"; // Replace with your App ID
String region = "REGION"; // Replace with your App Region ("EU" or "US")
String authKey= "AUTH_KEY"; // Replace with your Auth Key or leave blank if you are authenticating using Auth Token

UIKitSettings uiKitSettings = new UIKitSettings.UIKitSettingsBuilder()
.setRegion(region)
.setAppId(appID)
.setAuthKey(authKey)
.subscribePresenceForAllUsers().build();

CometChatUIKit.init(this, uiKitSettings, new CometChat.CallbackListener<String>() {
@Override
public void onSuccess(String successString) {/_Your action after initializing CometChat_/}

    @Override
    public void onError(CometChatException e) {}

});

````
</TabItem>


<TabItem value="Kotlin" label="Kotlin">
```kotlin title="YourActivity.kt"
val appID = "APP_ID" // Replace with your App ID
val region = "REGION" // Replace with your App Region ("eu" or "us")
val authKey = "AUTH_KEY" // Replace with your Auth Key or leave blank if you are authenticating using Auth Token

val uiKitSettings = UIKitSettingsBuilder()
    .setRegion(region)
    .setAppId(appID)
    .setAuthKey(authKey)
    .subscribePresenceForAllUsers().build()

CometChatUIKit.init(this, uiKitSettings, object : CometChat.CallbackListener<String?>() {
    override fun onSuccess(successString: String?) {}
    override fun onError(e: CometChatException?) {}
})

````

</TabItem>
</Tabs>

> Make sure to replace the **APP_ID** with your CometChat appId, **AUTH_KEY** with your CometChat app auth key and **REGION** with your app region in the above code.

---

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 4</span>

### Login User

For login, you require a `UID`. You can create your own users on the CometChat Dashboard or via API. We have pre-generated test users: `cometchat-uid-1`, `cometchat-uid-2`, `cometchat-uid-3`, `cometchat-uid-4`, `cometchat-uid-5`.

The `login()` method returns the User object containing all the information of the logged-in user.

:::info

This straightforward authentication method is ideal for proof-of-concept (POC) development or during the early stages of application development. For production environments, however, we strongly recommend using an [Auth Token](/ui-kit/android/methods#login-using-auth-token) instead of an Auth Key to ensure enhanced security.

:::

<Tabs className="code-tabs">
<TabItem value="Java" label="Java">
```java title="YourActivity.java"
CometChatUIKit.login("cometchat-uid-1", new CometChat.CallbackListener<User>() {
    @Override
    public void onSuccess(User user) {
       Log.d(TAG, "Login Successful : " + user.toString());
    }

    @Override
    public void onError(CometChatException e) {
        Log.e(TAG, "Login Failed : " + e.getMessage());
    }

});

````
</TabItem>
<TabItem value="Kotlin" label="Kotlin">
```kotlin title="YourActivity.kt"
CometChatUIKit.login("cometchat-uid-1", object : CometChat.CallbackListener<User>() {
    override fun onSuccess(user: User) {
        Log.d(TAG, "Login Successful : $user")
    }

    override fun onError(e: CometChatException) {
        Log.e(TAG, "Login Failed : " + e.message)
    }
})

````

</TabItem>
</Tabs>

> It will be easier for you to open a new activity upon successful login.

---

<span style={{padding: '6px 15px', 'background-color': '#6851D6', color: 'white', 'border-radius': '15px', 'font-size': '0.9em', 'font-weight': 'bold'}}>Step 5</span>

### Render Conversation With Message

[ConversationsWithMessages](/ui-kit/android/conversations-with-messages) is a wrapper component that offers functionality to render both the [Conversations](/ui-kit/android/conversations) and [Messages](/ui-kit/android/messages) components. It also enables opening the [Messages](/ui-kit/android/messages) by tapping on any conversation rendered in the list of conversations.

![](./assets/chat_cometchat_screens.png)

[ConversationsWithMessages](/ui-kit/android/conversations-with-messages) can be rendered by adding the following code snippet into the `layout_activity.xml` file:

```xml title="layout_activity.xml
<com.cometchat.chatuikit.conversationswithmessages.CometChatConversationsWithMessages
        android:id="@+id/conversation"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
```

> It will automatically fetch the conversation data upon loading the list. If the conversation list is empty, you can start a new conversation.
