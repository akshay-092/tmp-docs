---
sidebar_position: 1
title: Overview
slug: /overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide demonstrates how to add chat to an iOS application using CometChat. Before you begin, we strongly recommend you read the [Key Concepts](./key-concepts) guide.

<div style={{ display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px' }}>
  <div style={{ width: '75%', padding: '12px' }}>
    <h4>I want to integrate with my app</h4>
    <ol style={{ marginBottom: '0' }}>
      <li><a style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} target="_self" href="./overview#get-your-application-keys">Get your application keys</a></li>
      <li><a style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} target="_self" href="./overview#add-the-cometchat-dependency">Add the CometChat dependency</a></li>
      <li><a style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} target="_self" href="./overview#initialize-cometchat">Initialize CometChat</a></li>
      <li><a style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} target="_self" href="./overview#register-and-login-your-user">Register or Login new user</a></li>
      <li><a style={{ color: '#7c55c9', textDecoration: 'underline', fontSize: '.9em', lineHeight: '2em' }} target="_self" href="../../ui-kit/ios/getting-started">Integrate our iOS UI Kit</a></li>
    </ol>
  </div>
  <div style={{ width: '75%', wordBreak: 'break-word', padding: '12px', borderLeft: '1px solid #e3e5e7' }}>
    <h4>I want to explore iOS sample apps.</h4>
    <p className="magic-block-textarea">Import the app into Xcode and follow the steps mentioned in the <code>README.md</code> file.</p>
    <p><a className="button btn" style={{ backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline' }} href="https://github.com/cometchat/cometchat-chat-sample-app-ios-swift/archive/v4.zip">Download Swift Chat App</a></p>
    <p><a className="button btn" style={{ backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline' }} href="https://github.com/cometchat-pro/ios-objective-c-chat-app/archive/master.zip">Download Obj-c Chat App</a></p>
    <p style={{ marginBottom: '0' }}><a className="button btn" style={{ backgroundColor: '#7c55c9', color: 'white', textDecoration: 'underline' }} href="https://github.com/cometchat/chat-sdk-ios" target="_blank">Download iOS SDK from Github</a></p>
  </div>
</div>

---

## Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API & Auth Keys** section and note the **Auth Key**, **App ID** & **Region**

:::tip Minimum Requirement

1. Xcode 12 or above
2. iOS 11 or higher
   :::

---

## Add the CometChat Dependency

### CocoaPods

We recommend using [CocoaPods](https://cocoapods.org/), as they are the most advanced way of managing iOS project dependencies. Open a terminal window, move to your project directory, and then create a `Podfile` by running the following command.

:::warning Note

1.  CometChat SDK supports installation through Cocoapods only. Currently, we are supporting Xcode 12 or above versions of Xcode.
2.  CometChat SDK includes video calling components. We suggest you run on physical devices to avoid errors.
    :::

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
$ pod init
```

</TabItem>
</Tabs>

Add the following lines to the Podfile.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
platform :ios, '12.0'
use_frameworks!

target 'YourApp' do
  pod 'CometChatSDK', '4.0.54'
end
```

</TabItem>
</Tabs>

And then install the `CometChatSDK` framework through CocoaPods.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
$ pod install
```

</TabItem>
</Tabs>

If you're facing any issues while installing pods then use the below command.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
pod install --repo-update
```

</TabItem>
</Tabs>

Always get the latest version of `CometChatSDK` by command.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
$ pod update CometChatSDK
```

</TabItem>
</Tabs>

### Swift Packages

To install **Swift Packages** you can use Xcode package manager **.**

1. Open **Xcode**, go to the project's **General** settings tab and select the project under **Project** in the left column.
2. Go to the **Swift packages** tab and click on the **+** button.

![](./assets/1634031189.png)

3. Once the pop-up appears, enter the github repository address in the search bar [`https://github.com/cometchat/sdk/ios.git`](https://github.com/cometchat/sdk/ios.git) and set dependency rule to `Up to Next Major Version` and set version as `6` . Then click on the **Add Package** button.

![](./assets/jeddfycfr3rgt55jf06ssufo78n3rzvp80ahwupm2bf41xvynzbjor53n8pjwqm1.png)

4. **CometChatSDK** must be checked in the **Package Product** column and click on Add Package. This will add **Package Dependencies** menu in Xcode.

![](./assets/1jtrb9jnorzkr2b6mmm06jzf250grq7gazzksch2wqa73ketpyhta0s749njpwdm.png)

Setup Bitcode

You can set the Enable Bitcode setting to **YES** present in build settings in your XCode project.

![](./assets/1623200428.png)

### Swift Standard Libraries

`CometChatSDK`framework build on Swift, you have to ensure the required libraries are embedded. This can be done by setting the `“Always Embed Swift Standard Libraries”` checkbox in your target’s build settings to “Yes”:

![](./assets/1623200430.png)

### Set Header Search Path

Set the `Header Search Paths` to `$SDKROOT/usr/include/libxml2`.

![](./assets/1623200431.png)

## Initialize CometChat

The `init()` method initializes the settings required for CometChat.

The `init()` method takes the below parameters:

1. appID - You CometChat App ID
2. appSettings - An object of the AppSettings class can be created using the AppSettingsBuilder class. The region field is mandatory and can be set using the `setRegion()` method.

The `AppSettings` class allows you to configure three settings:

- **Region**: The region where you app was created.
- [Presence Subscription](./user-presence): Represents the subscription type for user presence (real-time online/offline status)
- **autoEstablishSocketConnection(boolean value)**: This property takes a boolean value which when set to true informs the SDK to manage the web-socket connection internally. If set to false, it informs the SDK that the web-socket connection will be managed manually. The default value for this parameter is true. For more information on this, please check the [Managing Web-Socket connections manually](./managing-web-socket-connections-manually) section. The default value for this property is **true.**
- **overrideAdminHost(adminHost: string)**: This method takes the admin URL as input and uses this admin URL instead of the default admin URL. This can be used in case of dedicated deployment of CometChat.
- **overrideClientHost(clientHost: string)**: This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

We suggest you call the method on app startup preferably in the `didFinishLaunchingWithOptions:` method of the `AppDelegate` class.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
import CometChatSDK

class AppDelegate: UIResponder, UIApplicationDelegate{
{
   var window: UIWindow?
   let appId: String = "ENTER APP ID"
   let region: String = "ENTER REGION CODE"

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

let mySettings = AppSettings.AppSettingsBuilder()
  							.subscribePresenceForAllUsers()
  							.setRegion(region: region)
  							.autoEstablishSocketConnection(true)
  							.build()

  CometChat.init(appId: appId ,appSettings: mySettings,onSuccess: { (isSuccess) in
            if (isSuccess) {
                print("CometChat SDK intialise successfully.")
            }
        }) { (error) in
                print("CometChat SDK failed intialise with error: \\(error.errorDescription)")
        }
        return true
    }
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
#import <CometChatSDK_CometChatSDK-Swift.h>

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  NSString *region = @"REGION";
  NSString *appID = @"YOUR_APP_ID";

    AppSettingsBuilder *appSettingBuilder = [[AppSettingsBuilder alloc]init];
    AppSettings *appSettings = [[[appSettingBuilder subscribePresenceForAllUsers]setRegionWithRegion:region]build];

    [[CometChat alloc]initWithAppId: appID appSettings:appSettings onSuccess:^(BOOL isSuccess) {
        NSLog(isSuccess ? @"CometChat Initialize Success:-YES" : @"CometChat Initialize Success:-NO");
    } onError:^(CometChatException * error) {
        NSLog(@"Error %@",[error errorDescription]);
    }];
    return YES;
}
```

</TabItem>
</Tabs>

Make sure you replace the `appId` with your CometChat **App ID** in the above code.

## Register and Login your User

Once initialization is successful, you will need to create a user.
To create users on the fly, you can use the `createUser()` method. This method takes a `User` object and the `API Key` as input parameters and returns the created `User` object if the request is successful.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let newUser : User = User(uid: "user1", name: "Kevin") __ Replace with your uid and the name for the user to be created.
let authKey = "AUTH_KEY" __ Replace with your Auth Key.
CometChat.createUser(user: newUser, apiKey: apiKey, onSuccess: { (User) in
      print("User created successfully. \\(User.stringValue())")
  }) { (error) in
     print("The error is \\(String(describing: error?.description))")
}
```

</TabItem>
</Tabs>

Once initialization is successful, you will need to log the user into CometChat using the `login()` method.

The login method needs to be called in the following scenarios:

1.  When the user is logging into the App for the first time.
2.  If the `CometChat.getLoggedInUser()` function returns nil.

:::info

This straightforward authentication method is ideal for proof-of-concept (POC) development or during the early stages of application development. For production environments, however, we strongly recommend using an [Auth Token](/sdk/ios/authentication-overview#login-using-auth-token) instead of an Auth Key to ensure enhanced security.

:::

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let uid    = "cometchat-uid-1"
let authKey = "YOUR_AUTH_KEY"

if CometChat.getLoggedInUser() == nil {

	CometChat.login(UID: uid, apiKey: apiKey, onSuccess: { (user) in

  	print("Login successful : " + user.stringValue())

	}) { (error) in

  	print("Login failed with error: " + error.errorDescription);

	}

}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSString *uid 	 = @"cometchat-uid-1";
NSString *apiKey = @"YOUR_API_KEY";

if ([CometChat getLoggedInUser == nil]){

[CometChat loginWithUID:uid apiKey:apiKey onSuccess:^(User * user) {

    __ Login Successful
    NSLog(@" Login Successful :%@",[user stringValue]);

} onError:^(CometChatException * error) {

    __ Login error
    NSLog(@" Login failed with exception: %@",[error errorDescription]);

}];
}
```

</TabItem>
</Tabs>

Make sure you replace the `API_KEY` with your CometChat **ApiKey** in the above code.

:::info Sample Users
We have set up 5 users for testing having UIDs: `cometchat-uid-1`, `cometchat-uid-2`, `cometchat-uid-3`, `cometchat-uid-4` and `cometchat-uid-5`.
:::

The `login()` method returns the User object containing all the information of the logged in user.

:::warning Warning
UID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.
:::

## Integrate our iOS UI Kit

Please refer [iOS UI Kit](/ui-kit/ios/v5/overview) section to integrate iOS UI Kit inside your app.
