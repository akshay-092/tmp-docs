---
sidebar_position: 8
title: Upgrading from v3
slug: /upgrading-from-v3-to-v4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upgrading from v3 to v4 is fairly simple. Below are the major changes that are released as a part of CometChat v4. We have renamed our SDK from CometChatPro to CometChatSDK and CometChatCalls to CometChatCallsSDK for Chat and Calls SDK receptively. Note only import name is changed all class name inside the SDKs are same as it is before. There will only be few changes required for v4 migration. Let's start!

### Pod file Changes

Change the SDK name CometChatPro to CometChatSDK for chat SDK and provide it v4's latest version. Same for calls SDK change it from CometChatCalls to CometChatCallsSDK.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
pod 'CometChatSDK', '4.0.54'
pod 'CometChatCallsSDK', '4.0.8'
```
</TabItem>
</Tabs>

:::info 
For the next steps, it recommended to open you iOS project root Folder in VSCode and use it's global find and replace feature.
:::

## Import statement changes

For each and every file in your project that uses CometChat's chat SDK or calls SDK, the import statement needs to be change 

#### Chat SDK

Changing import statement to CometChatSDK for every file where chat SDK is used. You can do VSCode's find and replace for the particular statement `import CometChatPro`  to `import CometChatSDK` .  

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
import CometChatPro ~> import CometChatSDK
```
</TabItem>
</Tabs>

#### Calls SDK

Changing import statement to CometChatCallsSDK for every file where calls SDK is used. You can do VSCode's find and replace for the particular statement `import CometChatCalls` to `import CometChatCallsSDK` .

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
import CometChatCalls ~> import CometChatCallsSDK
```
</TabItem>
</Tabs>

## Access class via SDK name changes

In your project there might be cases where you have accessed SDK classes with the SDK name. Like `CometChatPro.User` or `CometChatSDK.Call` . Since this import is done using SDK name, you have to replace that as well with the new SDK's name.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChatPro. ~> CometChatSDK.
CometChatCalls. ~> CometChatCallsSDK
```
</TabItem>
</Tabs>

For this as well do a find and replace all over the project for exact statement `CometChatPro.` to `CometChatSDK.` for chat SDK. And from `CometChatCalls.` to `CometChatCallsSDK.` for calls SDK.

All Done! now just do pod install, build you project and enjoy all the new features from v4.

---
