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

The mandatory parameter is the sessionId for the call/conference. You can use the `setSessionId()`  method of the `CallSettingsBuilder` to set the session Id of the call.

A basic example of how to start a direct call:


<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
let sessionID = "SESSION_ID";
let audioOnly = false;
let deafaultLayout = true;

let callSettings = new CometChat.CallSettingsBuilder()
                    .enableDefaultLayout(deafaultLayout)
                    .setSessionID(sessionID)
                    .setIsAudioOnlyCall(audioOnly)
                    .build();

CometChat.startCall(
  callSettings,
  document.getElementById("callScreen"),
  new CometChat.OngoingCallListener({
		onUserListUpdated: userList => {
			console.log("user list:", userList);
    },
    onCallEnded: call => {
      console.log("Call ended:", call);
    },
    onError: error => {
      console.log("Error :", error);
    },
    onMediaDeviceListUpdated: deviceList => {
      console.log("Device List:", deviceList);
    },
    onUserMuted: (userMuted, userMutedBy) => {
      // This event will work in JS SDK v2.4.1-beta1 & later.
      console.log("Listener => onUserMuted:", userMuted, userMutedBy);
    },
    onScreenShareStarted: () => {
      // This event will work in JS SDK v2.4.1 & later.
      console.log("Screen sharing started.");
    },
    onScreenShareStopped: () => {
      // This event will work in JS SDK v2.4.1 & later.
      console.log("Screen sharing stopped.");
    }
  })
);
  ```
</TabItem>

</Tabs>


The `setAudioOnlyCall()` method allows you to set if the call is supposed to be an audio call or an audio-video call. If set to `true` , the call will be an audio-only call else when set to `false`  the call will be an audio-video call. The default is `false` , so if not set, the call will be an audio-video call. 

## Settings

The `CallSettings` class is the most important class when it comes to the implementation of the Calling feature. This is the class that allows you to customize the overall calling experience. The properties for the call/conference can be set using the `CallSettingsBuilder` class. This will eventually give you an object of the `CallSettings` class which you can pass to the `startCall()` method to start the call.

The **mandatory** parameters that are required to be present for any call/conference to work are:

1. sessionId - The unique session Id for the call/conference session.

The options available for customization of calls are:

| Setting | Description | 
| ---- | ---- | 
| `enableDefaultLayout(defaultLayout: boolean)` | If set to `true` enables the default layout for handling the call operations. <br/>If set to `false` it hides the button layout and just displays the Call View.<br/>**Default value = true** | 
| `showEndCallButton(showEndCallButton: boolean)` | If set to `true` it displays the EndCallButton in Button Layout. <br/>if set to `false` it hides the EndCallButton in Button Layout.<br/>**Default value = true** | 
| `showPauseVideoButton(showPauseVideoButton: boolean)` | If set to `true` it displays the PauseVideoButton in Button Layout. <br/>if set to `false` it hides the PauseVideoButton in Button Layout.<br/>**Default value = true** | 
| `showMuteAudioButton(showMuteAudioButton: boolean)` | If set to `true` it displays the MuteAudioButton in Button Layout. <br/>if set to `false` it hides the MuteAudioButton in Button Layout.<br/>**Default value = true** | 
| `showScreenShareButton(showScreenShareButton: boolean)` | If set to `true` it displays the ShareScreenButton in Button Layout. <br/>if set to `false` it hides the ShareScreenButton in Button Layout.<br/>**Default value = true** | 
| `showModeButton(showModeButton: boolean)` | If set to `true` it displays the ShowModeButton in Button Layout. <br/>if set to `false` it hides the ShowModeButton in Button Layout.<br/>**Default value = true** | 
| `setIsAudioOnlyCall(audioOnly: boolean)` | If set to true, the call will be strictly an audio call. If ser to false, the call will be an audio-video call.<br/>**Default value = false** | 
| `setMode(mode: string)` | CometChat provides 4 options for the calling UI.<br/>1. CometChat.CALL_MODE.DEFAULT<br/>2. CometChat.CALL_MODE.SPOTLIGHT<br/>3. CometChat.CALL_MODE.SINGLE<br/>4. CometChat.CALL_MODE.GRID<br/>**Default value = CometChat.CALL_MODE.DEFAULT** | 
| `startWithAudioMuted(audioMuted: boolean)` | This ensures the call is started with the audio muted if set to true.<br/>**Default value = false** | 
| `startWithVideoMuted(videoMuted: boolean)` | This ensures the call is started with the video paused if set to true.<br/>**Default value = false** | 
| `setCustomCSS(customCSS: string)` | This will apply the given CSS on the Calling UI.<br/>For example:<br/>let customCSS = ".main-container\{border: 1px solid yellow}";<br/>setCustomCSS(customCSS)<br/>You can read more about custom CSS [here](./calling-custom-css). | 
| `forceLegacyUI(legacyUI: boolean)` | This ensures that the legacy UI is used.<br/>**Default value = true** | 


In case you wish to achieve a completely customized UI for the Calling experience, you can do so by embedding default android buttons to the screen as per your requirement and then use the below methods to achieve different functionalities for the embedded buttons.

For the use case where you wish to align your own custom buttons and not use the default layout provided by CometChat, you can embed the buttons in your layout and use the below methods to perform the corresponding operations:

### Mute Audio

You can call the `muteAudio(mute: boolean)` method to mute/unmute your audio stream.


<Tabs>
<TabItem value="Mute Audio" label="Mute Audio">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.muteAudio(true);
  ```
</TabItem>
</Tabs>



If set to `true` the audio stream will be muted and if set to `false` the audio stream will be unmuted.

### Pause Video

You can call the `pauseVideo(pause: boolean)` method to pause/unpause video stream.


<Tabs>
<TabItem value="Pause Video" label="Pause Video">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.pauseVideo(true);   
  ```
</TabItem>
</Tabs>


If set to `true` the video stream will be paused and if set to `false` the video stream will be unpaused.

### Start Screen Share

You can call `startScreenShare()` to start the screen share.


<Tabs>
<TabItem value="Start Screen Share" label="Start Screen Share">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.startScreenShare();
  ```
</TabItem>
</Tabs>



### Stop Screen Share

You can call `stopScreenShare()` to stop the screen share.


<Tabs>
<TabItem value="Stop Screen Share" label="Stop Screen Share">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.stopScreenShare();
  ```
</TabItem>
</Tabs>


### Set Mode

You can use the `setMode(mode: string)` method to set the mode.


<Tabs>
<TabItem value="Set Mode" label="Set Mode">

  ```javascript
let mode = CometChat.CALL_MODE.SPOTLIGHT;
let callController = CometChat.CallController.getInstance();
callController.setMode(mode);
  ```
</TabItem>
</Tabs>


### Get Audio Input Devices

You can use the `getAudioInputDevices()` method to get all the available audio input devices.


<Tabs>
<TabItem value="Get Audio Input Devices" label="Get Audio Input Devices">

  ```javascript
let callController = CometChat.CallController.getInstance();
let audioInputDevices = callController.getAudioInputDevices();
  ```
</TabItem>
</Tabs>



### Get Audio Output Devices

You can use the `getAudioOutputDevices()` method to get all the available audio output devices.


<Tabs>
<TabItem value="Get Audio Output Devices" label="Get Audio Output Devices">

  ```javascript
let callController = CometChat.CallController.getInstance();
let audioOutputDevices = callController.getAudioOutputDevices();
  ```
</TabItem>
</Tabs>


### Get Video Input Devices

You can use the `getVideoInputDevices()` method to get all the available video input devices.


<Tabs>
<TabItem value="Get Video Input Devices" label="Get Video Input Devices">

  ```javascript
let callController = CometChat.CallController.getInstance();
let videoInputDevices = callController.getVideoInputDevices();
  ```
</TabItem>

</Tabs>


### Set Audio Input Device

You can use the `setAudioInputDevice(deviceId)` method to set the active audio input device.


<Tabs>
<TabItem value="Set Audio Input Devices" label="Set Audio Input Devices">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.setAudioInputDevice(deviceId);
  ```
</TabItem>

</Tabs>


### Set Audio Output Device

You can use the `setAudioOutputDevice(deviceId)` method to set the active audio output device.


<Tabs>
<TabItem value="Set Audio Output Devices" label="Set Audio Output Devices">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.setAudioOutputDevice(deviceId);
  ```
</TabItem>

</Tabs>



### Set Video Input Device

You can use the `setVideoInputDevice(deviceId)` method to set the active video input device.


<Tabs>
<TabItem value="Set Video Input Devices" label="Set Video Input Devices">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.setVideoInputDevice(deviceId);
  ```
</TabItem>
</Tabs>



### End Call

You can use the `CometChat.endCall()` method of the `CometChat` class to end the call.


<Tabs>
<TabItem value="End Call" label="End Call">

  ```javascript
CometChat.endCall("SESSION_ID_FOR_THE_CALL").then(
	call => {
		console.log('call ended', call);
	}, error => {
		console.log('error', error);
	}
);
  ```
</TabItem>
</Tabs>




:::danger Please note
  The `CometChat.getActiveCall()` method in case of Direct Calling will return null and all the details related to the call session will have to be saved and maintained at your end.
:::

## Call Participant Count

In order to get the number of participants in any call, you can use the `getCallParticipantCount()` method. This method takes the session id for the call and returns the number or participants that are active in the call


<Tabs>
<TabItem value="Call Participant Count" label="Call Participant Count">

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
</Tabs>