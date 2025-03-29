---
sidebar_position: 1
title: Overview
slug: /overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide demonstrates how to add chat to a Flutter application. Before you begin, we strongly recommend you read the [Key Concepts](key-concepts) guide.

<div style={{ display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px' }}>
  <div style={{ width: '75%', padding: '12px' }}>
    <h4>I want to integrate with my app</h4>
    <ol style={{ marginBottom: '0' }}>
      <li><a style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} target="_self" href="overview#get-your-application-keys">Get your application keys</a></li>
      <li><a style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} target="_self" href="overview#add-the-cometchat-dependency">Add the CometChat dependency</a></li>
      <li><a style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} target="_self" href="overview#initialise-cometchat">Initialise CometChat</a></li>
      <li><a style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} target="_self" href="overview#register-and-login-your-user">Register and Login your user</a></li>
    </ol>
  </div>
  <div style={{ width: '75%', wordBreak: 'break-word', padding: '12px', borderLeft: '1px solid #e3e5e7' }}>
    <h4>I want to explore a sample app</h4>
    <p className="magic-block-textarea">Follow the steps mentioned in the <code>README.md</code> file to run the sample app</p>
    <p><a className="button btn" style={{ backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline' }} href="https://github.com/cometchat-pro/flutter-chat-app/">Flutter Chat App</a></p>
  </div>
</div>

### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com/) and then:

1. Create a new app
2. Head over to the **API Keys** section and note the **Auth Key**, **App ID** & **Region**

:::info Minimum Requirements

- Android API Level 21
- AndroidX Compatibility
- iOS 11 or higher
- Flutter SDK 1.2 or higher
  :::

### Add the CometChat Dependency

1. Add the following code in your `pubspec.yaml` file and run `pub get` command.

<Tabs>
<TabItem value="Dart" label="Dart">

```dart
cometchat_sdk: ^4.0.19
```

</TabItem>
</Tabs>

2. For iOS change iOS deployment target to 11 or higher.
3. Add the following code to podfile inside iOS section of your app.

<Tabs>
<TabItem value="Ruby" label="Ruby">

```ruby
post_install do |installer|

installer.pods_project.targets.each do |target|

flutter_additional_ios_build_settings(target)

//Copy from here------->

target.build_configurations.each do |build_configuration|

build_configuration.build_settings['EXCLUDED_ARCHS[sdk=iphonesimulator*]'] = 'arm64 i386'

end

//Copy TILL here------->

end

end
```

</TabItem>
</Tabs>

4. For iOS navigate to your iOS folder in terminal or CMD and do `pod install` . For apple chip system use rosetta terminal.
5. import CometChat SDK using the following code in dart.

<Tabs>
<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_sdk/cometchat_sdk.dart';
```

</TabItem>
</Tabs>

### Initialise CometChat

The `init()` method initializes the settings required for CometChat. The `init()` method takes the below parameters:

1. appID - You CometChat App ID
2. appSettings - An object of the AppSettings class can be created using the AppSettingsBuilder class. The region field is mandatory and can be set using the `setRegion()` method.

The `AppSettings` class allows you to configure three settings:

- **Region**: The region where your app was created.
- [User Presence](user-presence) Presence Subscription: Represents the subscription type for user presence (real-time online/offline status)
- **autoEstablishSocketConnection(boolean value)**: This property takes a boolean value which when set to true informs the SDK to manage the web-socket connection internally. If set to false, it informs the SDK that the web-socket connection will be managed manually. The default value for this parameter is true. For more information on this, please check the [Connection Behaviour](connection-behaviour) section. The default value for this property is **true.**
- **adminHost(adminHost: string)**: This method takes the admin URL as input and uses this admin URL instead of the default admin URL. This can be used in case of dedicated deployment of CometChat.
- **clientHost(clientHost: string)**: This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

<Tabs>
<TabItem value="Dart" label="Dart">

```dart
String region = "REGION";
String appId = "APP_ID";

AppSettings appSettings= (AppSettingsBuilder()
      ..subscriptionType = CometChatSubscriptionType.allUsers
      ..region= region
				..adminHost = "" //optional
				..clientHost = "" //optional
      ..autoEstablishSocketConnection =  true
).build();

CometChat.init(appId, appSettings,
	onSuccess: (String successMessage) {
		debugPrint("Initialization completed successfully  $successMessage");
	}, onError: (CometChatException excep) {
		debugPrint("Initialization failed with exception: ${excep.message}");
	}
);
```

</TabItem>
</Tabs>

Make sure you replace the `APP_ID` with your CometChat **App ID** and `region` with your **App Region** in the above code.

### Register and Login your User

Once initialization is successful, you will need to create a user.

To create users on the fly, you can use the `createUser()` method. This method takes an `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.

<Tabs>
<TabItem value="Dart" label="Dart">

```dart
String authKey = "AUTH_KEY";//Replace with the auth key of app
User user = User( uid: "usr1", name: "Kevin" );//Replace with name and uid of user

CometChat.createUser(user,  authKey,
	onSuccess: (User user){
		debugPrint("Create User succesful ${user}");
	}, onError: (CometChatException e){
		debugPrint("Create User Failed with exception ${e.message}");
	}
);
```

</TabItem>
</Tabs>

Make sure that `UID` and `name` are specified as these are mandatory fields to create a user.

Once you have created the user successfully, you will need to log the user into CometChat using the `login()` method.

:::info

This straightforward authentication method is ideal for proof-of-concept (POC) development or during the early stages of application development. For production environments, however, we strongly recommend using an [Auth Token](/sdk/flutter/authentication-overview#login-using-auth-token) instead of an Auth Key to ensure enhanced security.

:::

<Tabs>
<TabItem value="Dart" label="Dart">

```dart
String UID = "user_id"; // Replace with the UID of the user to login
String authKey = "AUTH_KEY"; // Replace with your App Auth Key

final user = await CometChat.getLoggedInUser();
if (user == null) {
await CometChat.login(UID, authKey,
		onSuccess: (User user) {
			debugPrint("Login Successful : $user" );
		}, onError: (CometChatException e) {
			debugPrint("Login failed with exception:  ${e.message}");
		}
	);
}
```

</TabItem>
</Tabs>

We recommend you call the CometChat `login()` method once your user logs into your app. The `login()` method needs to be called only once.
