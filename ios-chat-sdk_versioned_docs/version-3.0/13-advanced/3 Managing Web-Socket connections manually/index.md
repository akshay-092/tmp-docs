---
sidebar_position: 3
title: Managing Web-Socket connections manually
slug: /managing-web-socket-connections-manually
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Default SDK behaviour on login

When the login method of the SDK is called, the SDK performs the below operations:

1. Logs the user into the SDK
2. Saves the details of the logged in user locally.
3. Creates a web-socket connection for the logged in user.

This makes sure that the logged in user starts receiving real-time messages sent to him or any groups that he is a part of as soon as he logs in.

When the app is reopened, and the init() method is called, the web-socket connection to the server is established automatically.

This is the default behaviour of the CometChat SDKs. However, if you wish to take control of the web-socket connection i.e if you wish to connect and disconnect to the web-socket server manually, you can refer to the Managing Web-socket Connection section.

## Managing the Web-socket connections manually

The CometChat SDK also allows you to modify the above default behaviour of the SDK and take the control of the web-socket connection into your own hands. In order to achieve this, you need to follow the below steps:

1. While calling the init() function on the app startup, you need to inform the SDK that you will be managing the web socket connect. You can do so by using the `autoEstablishSocketConnection()` method provided by the `AppSettingsBuilder` class. This method takes a boolean value as an input. If set to `true` , the SDK will manage the web-socket connection internally based on the default behaviour mentioned above. If set to `false` , the web socket connection can will not be managed by the SDK and you will have to handle it manually. You can refer to the below code snippet for the same:


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let appSettings = AppSettings.AppSettingsBuilder()
									.setRegion(region: "us")
									.autoEstablishSocketConnection(false)
									.build()
        
let _ =  CometChat.init(appId:"1976246d33493296",
                        appSettings: appSettings,
                        onSuccess: { (Success) in
            print( "Initialization onSuccess \(Success)")
        }) { (error) in
            print( "Initialization Error Code:  \(error.errorCode)")
            print( "Initialization Error Description:  \(error.errorDescription)")
        }
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
AppSettingsBuilder *appSettingBuilder = [[AppSettingsBuilder alloc]init];
AppSettings *appSettings = [[[appSettingBuilder autoEstablishSocketConnection:false]
														setRegionWithRegion: REGION_CODE]build];
[[CometChat alloc]initWithAppId:APP_ID appSettings:appSettings onSuccess:^(BOOL isSuccess) {
	NSLog(isSuccess ? @"CometChat Initialize Success:-YES" : @"CometChat Initialize Success:-NO");
} onError:^(CometChatException * error) {
	NSLog(@"Error %@",[error errorDescription]);
}];
```
</TabItem>
</Tabs>


2. You can manage the connection to the web-socket server using the `connect()` and `disconnect()` methods provided by the SDK.
1. **Connect to the web-socket server**

You need to use the `connect()` method provided by the `CometChat` class to establish the connection to the web-socket server. Please make sure that the user is logged in to the SDK before calling this method. You can use the CometChat.getLoggedInUser() method to check this. Once the connection is established, you will start receiving all the real-time events for the logged in user


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.connect()
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
CometChat.connect();
```
</TabItem>
</Tabs>


2. **Disconnect from the web-socket server**

You can use the `disconnect()` method provided by the `CometChat` class to break the established connection. Once the connection is broken, you will stop receiving all the real-time events for the logged in user.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.disconnect()
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
CometChat.disconnect();
```
</TabItem>
</Tabs>
