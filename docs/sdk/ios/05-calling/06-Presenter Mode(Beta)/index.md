---
sidebar_position: 6
title: Presenter Mode
slug: /presenter-mode
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The Presenter Mode feature allows developers to create a calling service experience in which:

1. There are one or more users who are presenting their video, audio and/or screen (Maximum 5)
2. Viewers who are consumers of that presentation. (They cannot send their audio, video or screen streams out).
3. The total number of presenters and viewers can go up to 100.
4. Features such as mute/unmute audio, show/hide camera capture, recording, etc. will be enabled only for the Presenter in this mode.
5. Other call participants will not get these features. Hence they act like passive viewers in the call.

Using this feature developers can create experiences such as:

1. All hands calls
2. Keynote speeches
3. Webinars
4. Talk shows
5. Online classes
6. and many more...

About this guide

This guide demonstrates how to start a presentation into an Android application. Before you begin, we strongly recommend you read the calling setup guide.

Before starting a call session you have to generate a call token using the below generateToken() method.

**Generate Token**

Generate token method takes two parameter `authToken` and `sessionId`.

**`authToken`**: User can get the auth token from CometChatSDK that has a static method getUsersAuthToken().

**`sessionId`**: Any random string.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// jwtToken requires in the 3rd step. so when user get from the generate token
// store in jwtToken variable.
var callToken: String?

CometChatCalls.generateToken(authToken: authToken as NSString, sessionID: sessionId) { (token, error)  in
            if let token = token {
                self.callToken = token
            } else if let error = error {
                print(error)
            }
}
```

</TabItem>
</Tabs>

| Parameter     | Description                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| sessionId     | The unique random session ID. In case you are using default call then session ID is available in the `Call` object.                 |
| userAuthToken | The use auth token is logged in user auth token which you can get by calling CometChat Chat SDK method CometChat.getUserAuthToken() |

| Error Code                 | Error Message                                                                                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INVALID_ARGUMENT_EXCEPTION | If you pass invalid param to a function or you don't pass the required params. example: Authtoken and session are required, Invalid callToken passed, please verify. |

**Start Presentation Session**

The most important class that will be used in the implementation is the `PresentationSettings` class. This class allows you to set the various parameters for the Presentation Mode. In order to set the various parameters of the `PresentationSettings` class, you need to use the `PresentationSettingsBuilder` class. Below are the various options available with the `PresentationSettings` class.

`PresentationSettingsBuilder` class takes the 1 mandatory parameter as a part of the constructor:

1. Context of the application

You will also need to set the User Type, There are 2 type of users in Presenter Mode, `Presenter` & `Participant` , You can set this `PresentationSettingsBuilder` by using the following method `isPresenter(true/false)`

A basic example of how to start a Presentation:

The **mandatory** parameters that are required to be present for any call/conference to work are:

1. UIView i.e a view in which user want to show the calling view inside it.
2. PresentationSettings.

**Initialise Presenter Settings**

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// In the callSettings, User have to configure the callingView.
// callSettings is required to start call.

let presenterSettings = CometChatCalls.presentationSettingsBuilder
                    .setIsPresenter(true)
                    .setDelegate(self) //class that confroms to CallsEventsDelegate
                    .setStartAudioMuted(true)
                    .setDefaultAudioMode("BLUETOOTH")
                    .build()
```

</TabItem>
</Tabs>

| Properties                            | Description                                                                                                                                                                              |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setIsPresenter(Bool)                  | If set to true, the user will join the call as a presenter.<br/>If set to false, the user will join the call as an audience member.<br/>**Default value = false**                        |
| setDefaultLayout(Bool)                | If set to true, enables the default layout for handling the call operations.<br/>If set to false it hides the button layout and just displays the CallView.<br/>**Default value = true** |
| setIsAudioOnly(Bool)                  | If set to true, the call will be strictly an audio call.<br/>If set to false, the call will be an audio-video call.<br/>**Default value = false**                                        |
| setEndCallButtonDisable(Bool)         | If set to true it displays the EndCallButton in Button Layout.<br/>If set to false it hides the EndCallButton in Button Layout.<br/>**Default value = true**                             |
| setShowRecordingButton(Bool)          | If set to true it displays the ShowRecordingButton in Button Layout.<br/>If set to false it hides the ShowRecordingButton in Button Layout.<br/>**Default value = true**                 |
| setSwitchCameraButtonDisable(Bool)    | If set to true it displays the SwitchCameraButton in Button Layout.<br/>If set to false it hides the SwitchCameraButton in Button Layout.<br/>**Default value = true**                   |
| setMuteAudioButtonDisable(Bool)       | If set to true it displays the MuteAudioButton in Button Layout.<br/>If set to false it hides the MuteAudioButton in Button Layout.                                                      |
| setPauseVideoButtonDisable(Bool)      | If set to true it displays the PauseVideoButton in Button Layout.<br/>If set to false it hides the PauseVideoButton in Button Layout.<br/>**Default value = true**                       |
| setAudioModeButtonDisable(Bool)       | If set to true it displays the AudioModeButton in Button Layout.<br/>If set to false it hides the AudioModeButton in Button Layout.<br/>**Default value = true**                         |
| setStartAudioMuted(Bool)              | This ensures the call is started with the audio muted if set to true.<br/>**Default value = false**                                                                                      |
| setStartVideoMuted(Bool)              | This ensures the call is started with the video muted if set to true.<br/>**Default value = false**                                                                                      |
| setDefaultAudioMode("BLUETOOTH")      | This method can be used if you wish to start the call with a specific audio mode.<br/>**The available options are SPEAKER, EARPIECE, BLUETOOTH & HEADPHONES**                            |
| setDelegate(CallsEventsDelegate.self) | Pass the reference of the UIViewController where the CallsEventsDelegate will conform.                                                                                                   |

### **Start Call**

To start a call, user have to pass `callToken` and `presenterSettings`.

**`callToken`** In the success block of generateToken(), user get the callToken.

**`PresentationSettings`** `presenterSettings` can be set from the `presentationSettingsBuilder`

**`View`** This is going to be the view in which CometChatCalls can load the calling views

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let callToken: String = self.callToken//Received on generate token onSuccess
let callView: UIView = self.callUIView// a UIView you want to show the calling view in


CometChatCalls.joinPresentation(callToken: callToken, presenterSettings: presenterSettings, view: callView) { success in
    print("success joinPresentation \(success)")
} onError: { error in
    print("error joinPresentation \(error?.errorCode)")
}
```

</TabItem>
</Tabs>

| Error Code                       | Error Message                                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| INVALID_PROP_EXCEPTION           | If you pass an invalid prop to a functional component or you don't pass the required prop. example: Component requires valid call settings |
| API_ERROR                        | If there is some error thrown by the API server For example unauthorized                                                                   |
| UNKNOWN_API_ERROR                | If there is some API error but it didn't come from the server. For example, if the internet is not available and API is called.            |
| AUTH_ERR_TOKEN_INVALID_SIGNATURE | if Token is invalid                                                                                                                        |

**Calling Events** **Listeners**

To get calling events, User have to conform the **“CallsEventsDelegate”** delegate. For these events working, User have to pass **“self”** to **setDelegate()** in presentationSettingsBuilder.

|                                              | Listener (CallEventsDelegate)                                                                                                    |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Listener**                                 | **Description**                                                                                                                  |
| _onCallEnded_()                              | This method is called when the call is successfully ended.                                                                       |
| _onCallEndButtonPressed()_                   | This method is called when the end call button press.                                                                            |
| _onUserJoined(user: NSDictionary)_           | This method is called when any other user joins the call. The user details can be obtained from the user as parameter.           |
| _onUserLeft(user: NSDictionary)_             | This method is called when a user leaves the call. The details of the user can be obtained from the provided user as parameter.  |
| _onUserListChanged(userList: NSArray)_       | This method is triggered when user list changes.                                                                                 |
| _onAudioModeChanged(audioModeList: NSArray)_ | This method is triggered when audio mode changes.                                                                                |
| _onCallSwitchedToVideo(info: NSDictionary)_  | This callback is triggered when an audio call is converted into a video call. you will get the information in info as parameter. |
| _onUserMuted(info: NSDictionary)_            | This method is triggered when a user is muted in the ongoing call.                                                               |
| _onRecordingToggled(info: NSDictionary)_     | This method is triggered when a user toggles recording.                                                                          |

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

In case you wish to achieve a completely customised UI for the Calling experience, you can do so by embedding default iOS buttons to the screen as per your requirement and then use the below methods to achieve different functionalities for the embedded buttons.
