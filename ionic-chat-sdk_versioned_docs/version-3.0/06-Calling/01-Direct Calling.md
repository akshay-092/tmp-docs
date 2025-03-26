---
sidebar_position: 1
title: Direct Calling
slug: /calling-direct-calling
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section will guide you to start the call/conference directly with the session id of your choice. The session id is the most important parameter as all the users joining the same session id will be connected to the same call/conference.

## Implementation

The most important class that will be used in the implementation is the `CallSettings` class. This class allows you to set the various parameters for the call/conference. In order to set the various parameters of the `CallSettings` class, you need to use the `CallSettingsBuilder` class. Below are the various options available with the `CallSettings` class.

The mandatory parameter is the sessionId for the call/conference. You can use the setSessionId() method of the `CallSettingsBuilder` to set the session Id of the call.

A basic example of how to start a direct call:

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let sessionID = "SESSION_ID";
let audioOnly = false;
let defaultLayout = true;
let callListener: CometChat.OngoingCallListener = new CometChat.OngoingCallListener({
    onUserJoined: (user: CometChat.User) => {
        console.log("user joined:", user);
    },
    onUserLeft: (user: CometChat.User) => {
        console.log("user left:", user);
    },
    onUserListUpdated: (userList: CometChat.User[]) => {
        console.log("user list:", userList);
    },
    onCallEnded: (call: CometChat.Call) => {
        console.log("Call ended:", call);
    },
    onError: (error: CometChat.CometChatException) => {
        console.log("Error :", error);
    },
    onAudioModesUpdated: (audioModes: CometChat.AudioMode[]) => {
        console.log("audio modes:", audioModes);
    },
  	onCallSwitchedToVideo: (sessionId, callSwitchInitiatedBy, callSwitchAcceptedBy) => {
        console.log("call switched to video:", {sessionId, callSwitchInitiatedBy, callSwitchAcceptedBy});
    },
  	onUserMuted: (userMuted, userMutedBy) => {
    	console.log("user muted:", {userMuted, userMutedBy});
    }
});

let callSettings = new CometChat.CallSettingsBuilder()
                    .enableDefaultLayout(defaultLayout)
                    .setSessionID(sessionID)
                    .setIsAudioOnlyCall(audioOnly)
                    .setCallEventListener(callListener)
                    .build();

CometChat.startCall(callSettings);
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let sessionID: string = "SESSION_ID";
let audioOnly: boolean = false;
let defaultLayout: boolean = true;
let callListener: CometChat.OngoingCallListener = new CometChat.OngoingCallListener({
    onUserJoined: (user: CometChat.User) => {
        console.log("user joined:", user);
    },
    onUserLeft: (user: CometChat.User) => {
        console.log("user left:", user);
    },
    onUserListUpdated: (userList: CometChat.User[]) => {
        console.log("user list:", userList);
    },
    onCallEnded: (call: CometChat.Call) => {
        console.log("Call ended:", call);
    },
    onError: (error: CometChat.CometChatException) => {
        console.log("Error :", error);
    },
    onAudioModesUpdated: (audioModes: CometChat.AudioMode[]) => {
        console.log("audio modes:", audioModes);
    }
});

let callSettings: CometChat.CallSettings = new CometChat.CallSettingsBuilder()
    .enableDefaultLayout(defaultLayout)
    .setSessionID(sessionID)
    .setIsAudioOnlyCall(audioOnly)
    .setCallEventListener(callListener)
    .build();

CometChat.startCall(callSettings);
```

</TabItem>
</Tabs>


The `setAudioOnlyCall()` method allows you to set if the call is supposed to be an audio call or an audio-video call. If set to true, the call will be an audio-only call else when set to false the call will be an audio-video call. The default is false, so if not set, the call will be an audio-video call.

| Parameter | Description | 
| ---- | ---- | 
| `callSettings` | Object of CallSettings class. | 


The `OngoingCallListener` listener provides you with the below callback methods:

| Callback Method | Description | 
| ---- | ---- | 
| `onUserJoined(User user)` | This method is called when any other user joins the call. The user details can be obtained from the `User` object provided. | 
| `onUserLeft(User user)` | This method is called when a user leaves the call. The details of the user can be obtained from the provided `User` object. | 
| `onCallEnded()` | This method is called when the call is successfully ended. | 
| `onUserListUpdated(userList)` | This method is triggered every time a participant joins or leaves the call providing the list of users active in the call. | 
| `onAudioModesUpdated(audioModes)` | This callback is triggered if any new audio output source is available or becomes unavailable. | 
| `onCallSwitchedToVideo(sessionId, callSwitchInitiatedBy, callSwitchAcceptedBy)` | This callback is triggered when an audio call is converted into a video call. | 
| `onUserMuted(userMuted, userMutedBy)` | This callback is triggered when a user is muted in the call. | 


## Settings

The `CallSettings` class is the most important class when it comes to the implementation of the Calling feature. This is the class that allows you to customize the overall calling experience. The properties for the call/conference can be set using the `CallSettingsBuilder` class. This will eventually give you and object of the `CallSettings` class which you can pass to the `startCall()` method to start the call.

The **mandatory** parameters that are required to be present for any call/conference to work are:

1. sessionId - The unique session Id for the call/conference session.

The options available for customization of calls are:

| Setting | Description | 
| ---- | ---- | 
| `enableDefaultLayout(defaultLayout: boolean)` | If set to `true` enables the default layout for handling the call operations. <br/>If set to `false` it hides the button layout and just displays the Call View.<br/>**Default value = true** | 
| `showEndCallButton(showEndCallButton: boolean)` | If set to `true` it displays the EndCallButton in Button Layout. <br/>if set to `false` it hides the EndCallButton in Button Layout.<br/>**Default value = true** | 
| `showPauseVideoButton(showPauseVideoButton: boolean)` | If set to `true` it displays the PauseVideoButton in Button Layout. <br/>if set to `false` it hides the PauseVideoButton in Button Layout.<br/>**Default value = true** | 
| `showMuteAudioButton(showMuteAudioButton: boolean)` | If set to `true` it displays the MuteAudioButton in Button Layout. <br/>if set to `false` it hides the MuteAudioButton in Button Layout.<br/>**Default value = true** | 
| `showSwitchCameraButton(showSwitchCameraButton: boolean)` | If set to `true` it displays the SwitchCameraButton in Button Layout.<br/>if set to `false` it hides the SwitchCameraButton in Button Layout.<br/>**Default value = true** | 
| `showAudioModeButton(showAudioModeButton: boolean)` | If set to `true` it displays the AudioModeButton in Button Layout.<br/>if set to `false` it hides the AudioModeButton in Button Layout.<br/>**Default value = true** | 
| `setIsAudioOnlyCall(audioOnly: boolean)` | If set to true, the call will be strictly an audio call. If ser to false, the call will be an audio-video call.<br/><br />**Default value = false** | 
| `setMode(mode: string)` | CometChat provides 3 options for the calling UI.<br/>1. CometChat.CALL_MODE.DEFAULT<br />2. CometChat.CALL_MODE.SPOTLIGHT<br />3. CometChat.CALL_MODE.SINGLE<br/><br />**Default value = CometChat.CALL_MODE.DEFAULT** | 
| `startWithAudioMuted(audioMuted: boolean)` | This ensures the call is started with the audio muted if set to true.<br/>**Default value = false** | 
| `startWithVideoMuted(videoMuted: boolean)` | This ensures the call is started with the video paused if set to true.<br/>**Default value = false** | 
| `setDefaultAudioMode(audioMode: string)` | This method can be used if you wish to start the call with a specific audio mode. The available options are <br/>1. CometChat.AUDIO_MODE.SPEAKER = "SPEAKER"<br />2. CometChat.AUDIO_MODE.EARPIECE = "EARPIECE"<br />3. CometChat.AUDIO_MODE.BLUETOOTH = "BLUETOOTH"<br />4. CometChat.AUDIO_MODE.HEADPHONES = "HEADPHONES" | 
| `showSwitchToVideoCallButton(switchCall: boolean)` | This method shows/hides the switch to video call button. If set to true it will display the switch to video call button. If set to false it will hide the switch to video call button.<br/>**Default value = true** | 
| `setAvatarMode(avatarMode: string)` | This method sets the mode of avatar. The avatar mode can be `circle`, `square` or `fullscreen`.<br/>**Default value = circle** | 
| `setMainVideoContainerSetting(containerSettings: MainVideoContainerSetting)` | This method can be used to customize the main video container. You can read more about this [here](./video-view-customisation). | 
| `enableVideoTileClick(enableVideoTileClick: boolean)` | This method can be used to enable/disable video tile click functionality in **Spotlight** mode.<br/>**Default value = true** | 
| `enableVideoTileDrag(enableVideoTileDrag: boolean)` | This method can be used to enable/disable video tile drag functionality in **Spotlight** mode.<br/>**Default value = true** | 


:::danger Please note

The `CometChat.getActiveCall()` method in case of Direct Calling will return null and all the details related to the call session will have to be saved and maintained at your end.

:::


## Call Participant Count

In order to get the number of participants in any call, you can use the `getCallParticipantCount()` method. This method takes the session id for the call and returns the number or participants that are active in the call.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let sessionId = "CALL_SESSION_ID";
let callType = "DIRECT";

CometChat.getCallParticipantCount(sessionId, callType).then(
	count => {
		console.log("Participants count =", count);
	}, error => {
		console.log("Some error occurred =", error);
	}
);
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let sessionId: string = "CALL_SESSION_ID";
let callType: string = "DIRECT";

CometChat.getCallParticipantCount(sessionId, callType).then(
    (count: number) => {
        console.log("Participants count =", count);
    }, (error: CometChat.CometChatException) => {
        console.log("Some error occurred =", error);
    }
);
```

</TabItem>
</Tabs>


