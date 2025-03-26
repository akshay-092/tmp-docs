---
sidebar_position: 3
title: Direct Calling
slug: /direct-calling
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## **Generate Token**

Generate token method takes two parameter `authToken` and `sessionId`.

**`authToken`**: User can get the auth token from CometChatSDK that has a static method getUsersAuthToken().

**`sessionId`**: Any random string.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// jwtToken requires in the 3rd step. so when user get from the generate token
// store in jwtToken variable. 
var callToken: String?

CometChatCalls.generateToken(authToken: authToken as NSString, sessionID: sessionId) { token in
    self.callToken = token
} onError: { error in
    print("CometChatCalls generateToken error: \(String(describing: error?.errorDescription))")
}
```
</TabItem>
</Tabs>



| Parameter | Description | 
| ---- | ---- | 
| sessionId | The unique random session ID. In case you are using default call then session ID is available in the `Call` object. | 
| userAuthToken | The use auth token is logged in user auth token which you can get by calling CometChat Chat SDK method CometChat.getUserAuthToken() | 

<br/><br/>

| Error Code | Error Message | 
| ---- | ---- | 
| INVALID_ARGUMENT_EXCEPTION | If you pass invalid param to a function or you don't pass the required params. example: Authtoken and session are required, Invalid callToken passed, please verify. | 


**Settings**

The `CallSettings` class is the most important class when it comes to the implementation of the Calling feature. This is the class that allows user to customize the overall calling experience. The properties for the call/conference can be set using the `CallSettingsBuilder` class. This will eventually give user an object of the `CallSettings` class which user can pass to the `startCall()` method to start the call.

The **mandatory** parameters that are required to be present for any call/conference to work are:

1. UIView i.e a view in which user want to show the calling view inside it.
2. Video Settings.

|  | CallSettingsBuilder |  | 
| ---- | ---- | ---- | 
| Properties | Values | Description | 
| setDefaultLayout(Bool) | `true` `false` | If set to true, enables the default layout for handling the call operations. if set to false it hides the button layout and just displays the CallView default value = true | 
| setIsAudioOnly(Bool) | `true` `false` | If set to true, the call will be strictly an audio call. If ser to false, the call will be an audio-video call. Default value = false | 
| setIsSingleMode(Bool) | `true` `false` |  | 
| setShowSwitchToVideoCall(Bool) | `true` `false` | If set to true it displays the SwitchCameraButton in Button Layout.  if set to false it hides the SwitchCameraButton in Button Layout | 
| setEnableVideoTileClick(Bool) | `true` `false` | if set to true, video tile is clickable otherwise not. | 
| setEnableDraggableVideoTile(Bool) | `true` `false` | if set to true, video tile can draggable, otherwise not. this is only work in SPOTLIGHT Mode. | 
| setEndCallButtonDisable(Bool) | `true` `false` | If set to true it displays the EndCallButton in Button Layout.  if set to false it hides the EndCallButton in Button Layout Default value = true | 
| setShowRecordingButton(Bool) | `true` `false` | If set to true it displays the ShowRecordingButton in Button Layout.  if set to false it hides the ShowRecordingButton in Button Layout Default value = true | 
| setSwitchCameraButtonDisable(Bool) | `true` `false` | If set to true it displays the SwitchCameraButton in Button Layout.  if set to false it hides the SwitchCameraButton in Button Layout Default value = true | 
| setMuteAudioButtonDisable(Bool) | `true` `false` | If set to true it displays the MuteAudioButton in Button Layout.  if set to false it hides the MuteAudioButton in Button Layout | 
| setPauseVideoButtonDisable(Bool) | `true` `false` | If set to true it displays the PauseVideoButton in Button Layout.  if set to false it hides the PauseVideoButton in Button Layout Default value = true | 
| setAudioModeButtonDisable(Bool) | `true` `false` | If set to true it displays the AudioModeButton in Button Layout.  if set to false it hides the AudioModeButton in Button Layout Default value = true | 
| setStartAudioMuted(Bool) | `true` `false` | This ensures the call is started with the audio muted if set to true | 
| setMode(String) | `DEFAULT` `SINGLE` `SPOTLIGHT` | Currently, you can set 3 modes. DEFUALT  SINGLE SPOTLIGHT default value = DEFUALT | 
| setView(UIView) | `UIView` | it is view in which call screen will load. | 
| setDefaultAudioMode("BLUETOOTH") | `SPEAKER` `BLUETOOTH` `HEADPHONES` `EARPIECE` | This method can be used if you wish to start the call with a specific audio mode. The available options are  SPEAKEREARPIECE  BLUETOOTH  HEADPHONES | 
| setDelegate(self) | `self` | pass the reference of the UIViewController where the CallsEventsDelegate will conform. |


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// In the callSettings, User have to configure the callingView. 
// callSettings is required to start call.

callSettings = CometChatCalls.CallSettingsBuilder
          .setDefaultLayout(true)
          .setIsAudioOnly(false)
          .setIsSingleMode(false)
          .setShowSwitchToVideoCall(false)
          .setEnableVideoTileClick(true)
          .setEnableDraggableVideoTile(true)
          .setEndCallButtonDisable(false)
          .setShowRecordingButton(true)
          .setSwitchCameraButtonDisable(false)
          .setMuteAudioButtonDisable(false)
          .setPauseVideoButtonDisable(false)
          .setAudioModeButtonDisable(false)
          .setStartAudioMuted(true)
          .setStartVideoMuted(false)
          .setMode("DEFAULT")
          .setDefaultAudioMode("BLUETOOTH")
          .setDelegate(self)
          .build()
```
</TabItem>
</Tabs>



### **Start Call**

To start a call, user have to pass `callToken`, `callSettings` and `callView`.

**`callToken`** In the success block of `generateToken()`, user get the callToken.

**`callSettings`** `CallSettings` can be set from the `CallSettingsBuilder`

**`callView`** callView is a UIView in which you want to display the call UI 

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
guard let callToken = self.callToken, let callSettings = self.callSettings, let view = callView else { return }

CometChatCalls.startSession(callToken: callToken, callSetting: callSettings, view: view) { success in
    print("CometChatCalls startSession success: \(success)")
} onError: { error in
    print("CometChatCalls startSession error: \(String(describing: error?.errorDescription))")
}
```
</TabItem>
</Tabs>


| Error Code | Error Message | 
| ---- | ---- | 
| INVALID_PROP_EXCEPTION | If you pass an invalid prop to a functional component or you don't pass the required prop. example: Component requires valid call settings | 
| API_ERROR | If there is some error thrown by the API server For example unauthorized | 
| UNKNOWN_API_ERROR | If there is some API error but it didn't come from the server. For example, if the internet is not available and API is called. | 
| AUTH_ERR_TOKEN_INVALID_SIGNATURE | if Token is invalid | 


**Calling Events Listners**

To get calling events, User have to conform the **“CallsEventsDelegate”** delegate. For these events working, User have to pass **“self”** to **setDelegate()** in callSettingsBuilder.

|  | Listener (CallEventsDelegate) | 
| ---- | ---- | 
| **Listener** | **Description** | 
| _onCallEnded_() | This method is called when the call is successfully ended. | 
| _onCallEndButtonPressed()_ | This method is called when the end call button press. | 
| _onUserJoined(user: NSDictionary)_ | This method is called when any other user joins the call. The user details can be obtained from the user as parameter. | 
| _onUserLeft(user: NSDictionary)_ | This method is called when a user leaves the call. The details of the user can be obtained from the provided user as parameter. | 
| _onUserListChanged(userList: NSArray)_ | This method is triggered when user list changes. | 
| _onAudioModeChanged(audioModeList: NSArray)_ | This method is triggered when audio mode changes. | 
| _onCallSwitchedToVideo(info: NSDictionary)_ | This callback is triggered when an audio call is converted into a video call. you will get the information in info as parameter. | 
| _onUserMuted(info: NSDictionary)_ | This method is triggered when a user is muted in the ongoing call. | 
| _onRecordingToggled(info: NSDictionary)_ | This method is triggered when a user toggles recording. | 

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// These events will trigger only if user set the setDelegate(self) in callSettings.

extension ViewController: CallsEventsDelegate {
    
    func onCallEnded() {
        print("onCallEnded")
    }
    
    func onCallEndButtonPressed() {
        print("onCallEndButtonPressed")
    }
    
    func onUserJoined(user: NSDictionary) {
        print("onUserJoined")
    }
    
    func onUserLeft(user: NSDictionary) {
        print("onUserLeft")
    }
    
    func onUserListChanged(userList: NSArray) {
        print("onUserListChanged")
    }
    
    func onAudioModeChanged(audioModeList: NSArray) {
        print("onAudioModeChanged")
    }
    
    func onCallSwitchedToVideo(info: NSDictionary) {
        print("onCallSwitchedToVideo")
    }
    
    func onUserMuted(info: NSDictionary) {
        print("onUserMuted")
    }
    
    func onRecordingToggled(info: NSDictionary) {
        print("onRecordingToggled")
    } 
}
```
</TabItem>
</Tabs>

## **MultiListener For Call Events**

Through Multi Listener you can get Inn-call events in any class that accepts `CallsEventsDelegate`

**Add listener for a calls** 

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let observerId = "" //unique ID that is going to be needed for removing CallEventListener
CometChatCalls.addCallEventListener(observerId: observerId, delegate: self) //self must conform to CallsEventsDelegate
```
</TabItem>
</Tabs>

**Remove listener for a calls**

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChatCalls.removeCallEventListener(observerId: observerId)
```
</TabItem>
</Tabs>


On removing the listener, user will not get callbacks for call events for that particular unique ID associated class
 

**Custom Events**

In case user wish to achieve a completely customized UI for the Calling experience, user can do so by embedding default iOS buttons to the screen as per requirements and then use the below methods to achieve different functionalities for the embedded buttons.

For the use case where user wish to align own custom buttons and not use the default layout provided by CometChat, user can embed the buttons in the layout and use the below methods to perform the corresponding operations:

**End Call**

User can end the call by using the `CometChatCalls.endSession()`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To end session
		CometChatCalls.endSession()
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To end session
		[CometChatCalls endSession];
```
</TabItem>
</Tabs>



### **Switch Camera**

User can end the call by using the `CometChatCalls.switchCamera()`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To switch Camera from front to rear and vice versa.     
 // To switch Camera from front to rear and vice versa.     
		CometChatCalls.switchCamera()
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To switch Camera from front to rear and vice versa. 
[CometChatCalls switchCamera];
```
</TabItem>
</Tabs>



### **Audio Muted**

User can end the call by using the `audioMuted(true)`


<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To mute audio
		CometChatCalls.audioMuted(true)
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To mute audio
		[CometChatCalls audioMuted:YES];
```
</TabItem>
</Tabs>



**Audio Unmute**

User can end the call by using the `audioMuted(false)`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To umMute audio
		CometChatCalls.audioMuted(false)
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To umMute audio
		[CometChatCalls audioMuted:NO];
```
</TabItem>
</Tabs>



**Pause Video**

User can end the call by using the `videoPaused(true)`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To paused video
		CometChatCalls.videoPaused(true)
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To paused video
		[CometChatCalls videoPaused:YES];
```
</TabItem>
</Tabs>



### **Unpause Video**

User can end the call by using the `videoPaused(false)`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To unpaused video
		CometChatCalls.videoPaused(false)
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To unpaused video
		[CometChatCalls videoPaused:NO];
```
</TabItem>
</Tabs>



**Set Audio Mode**

User can end the call by using the `**setAudioMode(mode: "**_**MODE**_**")**`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To set audio mode.
		CometChatCalls.setAudioMode(mode: "DEFAULT")
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To set audio mode.
      [CometChatCalls setAudioModeWithMode:@"DEFAULT"];
```
</TabItem>
</Tabs>



### **Enter PIP Mode**

User can end the call by using the `**enterPIPMode()**`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To enter PIP mode.
		CometChatCalls.enterPIPMode()
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To enter PIP mode.
		[CometChatCalls enterPIPMode];
```
</TabItem>
</Tabs>



**Exit PIP Mode**

User can end the call by using the `**exitPIPMode()**`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To exit PIP mode.    
		CometChatCalls.exitPIPMode()
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To exit PIP mode.    
		[CometChatCalls exitPIPMode];
```
</TabItem>
</Tabs>



**SwitchToVideoCall**

User can end the call by using the `**switchToVideoCall()**`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To switch video call.
		CometChatCalls.switchToVideoCall()
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To switch video call.
		[CometChatCalls switchToVideoCall];
```
</TabItem>
</Tabs>



**Start Recording**

User can end the call by using the `**startRecording()**`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To start recording.
		CometChatCalls.startRecording()
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To start recording.
		[CometChatCalls startRecording];
```
</TabItem>
</Tabs>



**Stop Recording**

User can end the call by using the `**stopRecording()**`

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// To stop recording.
		CometChatCalls.stopRecording()
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
// To stop recording.
		[CometChatCalls stopRecording];
```
</TabItem>
</Tabs>