---
sidebar_position: 2
title: Default Calling
slug: /calling-default-calling
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section will provide information on how a complete calling workflow can be set up using CometChat. We've built the complete workflow to help your users make calls, receive calls as well as accept/reject calls.

Let us assume Alex to be the call initiator and Bob is the receiver.

1. Alex initiates the call to Bob using the **initiateCall()** method.
2. Bob now has two choices:
    1. Accept the call from Alex using the **acceptCall()** method.
    2. Reject the call from Alex using the **rejectCall()** method passing the status as `rejected`.

3. In the meantime, Alex has the option to cancel the call he initiated to Bob using the **rejectCall()** method passing the status as `cancelled`.
4. If Bob accepts the call from Alex, both Alex and Bob need to call the **startCall()** method. Alex in the **onOutgoingCallAccepted()** method of the `CallListener` and Bob in the success obtained from the **acceptCall()** method and both will be connected to each other.

## Initiate Call

The `initiateCall()` method sends a call request to a user or a group.

<Tabs>
<TabItem value="User Call" label="User Call">

  ```javascript
var receiverID = "UID";
var callType = CometChat.CALL_TYPE.VIDEO;
var receiverType = CometChat.RECEIVER_TYPE.USER;

var call = new CometChat.Call(receiverID, callType, receiverType);

CometChat.initiateCall(call).then(
  outGoingCall => {
    console.log("Call initiated successfully:", outGoingCall);
  }, error => {
    console.log("Call initialization failed with exception:", error);
  }
);
  ```
</TabItem>
<TabItem value="Group Call" label="Group Call">

  ```javascript
var receiverID = "GUID";
var callType = CometChat.CALL_TYPE.VIDEO;
var receiverType = CometChat.RECEIVER_TYPE.GROUP;

var call = new CometChat.Call(receiverID, callType, receiverType);

CometChat.initiateCall(call).then(
  outGoingCall => {
    console.log("Call initiated successfully:", outGoingCall);
  }, error => {
    console.log("Call initialization failed with exception:", error);
  }
);
  ```
</TabItem>
<TabItem value="User Call (Typescript)" label="User Call (Typescript)">

  ```typescript
var receiverID: string = "UID";
var callType: string = CometChat.CALL_TYPE.VIDEO;
var receiverType: string = CometChat.RECEIVER_TYPE.USER;

var call: CometChat.Call = new CometChat.Call(receiverID, callType, receiverType);

CometChat.initiateCall(call).then(
    (outGoingCall: CometChat.Call) => {
        console.log("Call initiated successfully:", outGoingCall);
    }, (error: CometChat.CometChatException) => {
        console.log("Call initialization failed with exception:", error);
    }
);
  ```
</TabItem>
<TabItem value="Group Call (Typescript)" label="Group Call (Typescript)">

  ```typescript
var receiverID: string = "GUID";
var callType: string = CometChat.CALL_TYPE.VIDEO;
var receiverType: string = CometChat.RECEIVER_TYPE.GROUP;

var call: CometChat.Call = new CometChat.Call(receiverID, callType, receiverType);

CometChat.initiateCall(call).then(
    (outGoingCall: CometChat.Call) => {
        console.log("Call initiated successfully:", outGoingCall);
    }, (error: CometChat.CometChatException) => {
        console.log("Call initialization failed with exception:", error);
    }
);
  ```
</TabItem>
</Tabs>



This method takes an object of the `Call` class. The constructor for `Call` class takes the following parameters:

| Parameter | Description |
| ---- | ---- |
| `receiverID` | The UID or GUID of the recipient |
| `receiverType` | The type of the receiver can be,<br/>1.`CometChat.RECEIVER_TYPE.USER`<br/>2.`CometChat.RECEIVER_TYPE.GROUP` |
| `callType` | The type of call can be,<br/>1.`CometChat.CALL_TYPE.AUDIO`<br/>2.`CometChat.CALL_TYPE.VIDEO` |


On successful initialization, a `Call` object is returned with the details of the call including a unique session ID for the call.

## Receive Calls

Wherever you wish to receive the call events in, you need to register the `CallListener` listener using the `addCallListener()` method.

<Tabs>
<TabItem value="Receive Calls" label="Receive Calls">

  ```javascript
var listnerID = "UNIQUE_LISTENER_ID";
CometChat.addCallListener(
  listnerID,
  new CometChat.CallListener({
    onIncomingCallReceived: (call) => {
      console.log("Incoming call:", call);
    },
    onOutgoingCallAccepted: (call) => {
      console.log("Outgoing call accepted:", call);
    },
    onOutgoingCallRejected: (call) => {
      console.log("Outgoing call rejected:", call);
    },
    onIncomingCallCancelled: (call) => {
      console.log("Incoming call calcelled:", call);
    }
  })
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
var listnerID: string = "UNIQUE_LISTENER_ID";
CometChat.addCallListener(
    listnerID,
    new CometChat.CallListener({
        onIncomingCallReceived: (call: CometChat.Call) => {
            console.log("Incoming call:", call);
        },
        onOutgoingCallAccepted: (call: CometChat.Call) => {
            console.log("Outgoing call accepted:", call);
        },
        onOutgoingCallRejected: (call: CometChat.Call) => {
            console.log("Outgoing call rejected:", call);
        },
        onIncomingCallCancelled: (call: CometChat.Call) => {
            console.log("Incoming call calcelled:", call);
        }
    })
);
  ```
</TabItem>
</Tabs>



| Parametrer | Description |
| ---- | ---- |
| `listenerID` | An ID that uniquely identifies that listener. We recommend using the activity or fragment name |


We recommend you remove the listener once the activity or fragment is not in use.

<Tabs>
<TabItem value="Remove Call Listener" label="Remove Call Listener">

  ```javascript
var listenerID = "UNIQUE_LISTENER_ID";

CometChat.removeCallListener(listenerID);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
var listenerID: string = "UNIQUE_LISTENER_ID";

CometChat.removeCallListener(listenerID);
  ```
</TabItem>
</Tabs>


As mentioned in the [Overview](./calling-default-calling) section, Once the call is initiated, there are three options that can be possible:

1. The receiver of the call accepts the call.
2. The receiver of the call rejects the call.
3. The initiator of the call cancels the call.

Please find below how these three scenarios can be implemented:

### Accept the Incoming Call

Once you have received an incoming call from a user or in any group, to accept the call using the `acceptCall()` method.

<Tabs>
<TabItem value="Accept Incoming Call" label="Accept Incoming Call">

  ```javascript
var sessionID = "SESSION_ID";

CometChat.acceptCall(sessionID).then(
  call => {
    console.log("Call accepted successfully:", call);
  }, error => {
    console.log("Call acceptance failed with error", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
var sessionID: string = "SESSION_ID";

CometChat.acceptCall(sessionID).then(
    (call: CometChat.Call) => {
        console.log("Call accepted successfully:", call);
    }, (error: CometChat.CometChatException) => {
        console.log("Call acceptance failed with error", error);
    }
);
  ```
</TabItem>
</Tabs>


| Parameter | Description |
| ---- | ---- |
| `sessionID` | The unique session ID available in the `Call` object |


### Reject the Incoming Call

To reject the incoming call once it is received using the `rejectCall()` method.

<Tabs>
<TabItem value="Reject Incoming Call" label="Reject Incoming Call">

  ```javascript
var sessionID = "SESSION_ID";
var status = CometChat.CALL_STATUS.REJECTED;

CometChat.rejectCall(sessionID, status).then(
  call => {
    console.log("Call rejected successfully", call);
  }, error => {
    console.log("Call rejection failed with error:", error);
  }
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
var sessionID: string = "SESSION_ID";
var status: string = CometChat.CALL_STATUS.REJECTED;

CometChat.rejectCall(sessionID, status).then(
    (call: CometChat.Call) => {
        console.log("Call rejected successfully", call);
    }, (error: CometChat.CometChatException) => {
        console.log("Call rejection failed with error:", error);
    }
);
  ```
</TabItem>
</Tabs>


| Parameter | Description |
| ---- | ---- |
| `sessionID` | The unique session ID available in the `Call` object |
| `status` | Reason for rejection of the call |


Here the status needs to be set as `CometChat.CALL_STATUS.REJECTED` as the call is being rejected by the receiver of the call.

### Cancel the Outgoing Call

In the case where the initiator wishes to cancel the call, use the same above `rejectCall()` method and just pass the status to the `rejectCall()` method as `CometChat.CALL_STATUS.CANCELLED`

## Start a Call

Once the call request is sent and the receiver has accepted the call, both the initiator and the receiver need to call the `startCall()` method.

You need to call this method for two scenarios:

1. After you accept an incoming call i.e. in the `onSuccess()` callback of the `acceptCall()` method.
2. After the recipient accepts an outgoing call i.e. in the `onOutgoingCallAccepted()` callback of the `CallListener` listener.

<Tabs>
<TabItem value="Start a Call" label="Start a Call">

  ```javascript
/**
 * You can get the call Object from the success of acceptCall() or from the onOutgoingCallAccepted() callback of the CallListener.
*/
var sessionId = call.sessionId;
var callType = call.type;
var callSettings = new CometChat.CallSettingsBuilder()
									.setSessionID(sessionId)
									.enableDefaultLayout(true)
									.setIsAudioOnlyCall(callType == 'audio' ? true : false)
									.build();
CometChat.startCall(
  callSettings,
  document.getElementById("callScreen"),
  new CometChat.OngoingCallListener({
    onUserJoined: user => {
      console.log("User joined call:", user);
    },
    onUserLeft: user => {
      console.log("User left call:", user);
    },
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
      // This event will work in JS SDK v3.0.2-beta1 & later.
      console.log("Listener => onUserMuted:", userMuted, userMutedBy);
    },
    onScreenShareStarted: () => {
      // This event will work in JS SDK v3.0.3 & later.
      console.log("Screen sharing started.");
    },
    onScreenShareStopped: () => {
      // This event will work in JS SDK v3.0.3 & later.
      console.log("Screen sharing stopped.");
    },
  	onCallSwitchedToVideo: (sessionId, callSwitchInitiatedBy, callSwitchAcceptedBy) => {
      	// This event will work in JS SDK v3.0.8 & later.
        console.log("call switched to video:", {sessionId, callSwitchInitiatedBy, callSwitchAcceptedBy});
    }
  })
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
/**
 * You can get the call Object from the success of acceptCall() or from the onOutgoingCallAccepted() callback of the CallListener.
*/
var call: CometChat.Call;
var sessionId: string = call.getSessionId();
var callType: string = call.getType();
var callSettings: CometChat.CallSettings = new CometChat.CallSettingsBuilder()
    .setSessionID(sessionId)
    .enableDefaultLayout(true)
    .setIsAudioOnlyCall(callType == 'audio' ? true : false)
    .build();
CometChat.startCall(
    callSettings,
    document.getElementById("callScreen"),
    new CometChat.OngoingCallListener({
        onUserJoined: (user: CometChat.User) => {
            console.log("User joined call:", user);
        },
        onUserLeft: (user: CometChat.User) => {
            console.log("User left call:", user);
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
        onMediaDeviceListUpdated: (deviceList: Object) => {
            console.log("Device List:", deviceList);
        },
        onUserMuted: (userMuted: CometChat.User, userMutedBy: CometChat.User) => {
            // This event will work in JS SDK v3.0.2-beta1 & later.
            console.log("Listener => onUserMuted:", userMuted, userMutedBy);
        },
        onScreenShareStarted: () => {
            // This event will work in JS SDK v3.0.3 & later.
            console.log("Screen sharing started.");
        },
        onScreenShareStopped: () => {
            // This event will work in JS SDK v3.0.3 & later.
            console.log("Screen sharing stopped.");
        }
    })
);
  ```
</TabItem>
</Tabs>


:::info Please Note:
 The current `startCall()` method which takes the  `sessionId`, `view`, `Ongoing Call Listener` to load the call view is deprecated and will be replaced in the future versions. It will continue to work on this version but we suggest moving to the new method as shown above using the object of the `CallSettings` class as the parameter.
:::

| Parameter | Description |
| ---- | ---- |
| `callSettings` | Object of CallSettings class. |
| `callScreen` | DOM element where you want show the call UI. |
| `OngoingCallListener` | CometChat.OngoingCallListener where the real-time events will be received. |


The `OngoingCallListener` listener provides you with the below callback methods:

| Callback Method | Description |
| ---- | ---- |
| `onUserJoined(user)` | This method is called when any other user joins the call. The user details can be obtained from the `User` object provided. |
| `onUserLeft(user)` | This method is called when a user leaves the call. The details of the user can be obtained from the provided `User` object. |
| `onError()` | This method is called when there is some error in establishing the call. |
| `onCallEnded()` | This method is called when the call is successfully ended. The call details can be obtained from the `Call` object provided. |
| `onUserListUpdated(userList)` | This method is triggered every time a participant joins or leaves the call providing the list of users active in the call. |
| `onMediaDeviceListUpdated(deviceList)` | This method is triggered if any new audio output source is available or becomes unavailable. |
| `onUserMuted(userMuted, userMutedBy)` | This method is triggered when a user is muted in the ongoing call. |
| `onScreenShareStarted()` | This method is triggered when the local user starts sharing a screen. |
| `onScreenShareStopped()` | This method is triggered when the local user stops sharing a screen. |
| `onCallSwitchedToVideo(sessionId, callSwitchInitiatedBy, callSwitchAcceptedBy)` | This callback is triggered when an audio call is converted into a video call. |


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
| `forceLegacyUI(useLegacyUI: boolean)` | This ensures that the legacy UI is used. <br/>**<br/>**<br/>**Default value = true** |
| `showSwitchToVideoCallButton(switchCall: boolean)` | This method shows/hides the switch to video call button. If set to true it will display the switch to video call button. If set to false it will hide the switch to video call button.<br/>**Default value = true** |
| `setMainVideoContainerSetting(containerSettings: MainVideoContainerSetting)` | This method can be used to customize the main video container. You can read more about this [here](./video-view-customisation). |


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
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
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
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
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
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
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
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
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
<TabItem value="Typescript" label="Typescript">

  ```typescript
let mode: string = CometChat.CALL_MODE.SPOTLIGHT;
let callController: CometChat.CallController = CometChat.CallController.getInstance();
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
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
let audioInputDevices: CometChat.MediaDevice[] = callController.getAudioInputDevices();
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
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
let audioOutputDevices: CometChat.MediaDevice[] = callController.getAudioOutputDevices();
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
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
let videoInputDevices: CometChat.MediaDevice[] = callController.getVideoInputDevices();
  ```
</TabItem>
</Tabs>


### Set Audio Input Device

You can use the `setAudioInputDevice(deviceId)` method to set the active audio input device.

<Tabs>
<TabItem value="Set Audio Input Device" label="Set Audio Input Device">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.setAudioInputDevice(deviceId);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
callController.setAudioInputDevice(deviceId);
  ```
</TabItem>
</Tabs>



### Set Audio Output Device

You can use the `setAudioOutputDevice(deviceId)` method to set the active audio output device.

<Tabs>
<TabItem value="Set Audio Output Device" label="Set Audio Output Device">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.setAudioOutputDevice(deviceId);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
callController.setAudioOutputDevice(deviceId);
  ```
</TabItem>
</Tabs>


### Set Video Input Device

You can use the `setVideoInputDevice(deviceId)` method to set the active video input device.

<Tabs>
<TabItem value="Set Video Input Device" label="Set Video Input Device">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.setVideoInputDevice(deviceId);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
callController.setVideoInputDevice(deviceId);
  ```
</TabItem>
</Tabs>

### Switch To Video Call

You can use the `switchToVideoCall()` method to switch from audio call to video call.

<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
let callController = CometChat.CallController.getInstance();
callController.switchToVideoCall();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let callController: CometChat.CallController = CometChat.CallController.getInstance();
callController.switchToVideoCall();
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
<TabItem value="Typescript" label="Typescript">

  ```typescript
let sessionId: string = "SESSION_ID_FOR_THE_CALL"
CometChat.endCall(sessionId).then(
    (call: CometChat.Call) => {
        console.log('call ended', call);
    }, (error: CometChat.CometChatException) => {
        console.log('error', error);
    }
);
  ```
</TabItem>
</Tabs>




## Active Call

CometChat provides a method to get the details of the call that is currently active. The `CometChat.getActiveCall()` will return an object of the `Call` class containing the details of the ongoing call. If there is no ongoing call this method will return null.

<Tabs>
<TabItem value="Get Active Call" label="Get Active Call">

  ```javascript
let activeCall = CometChat.getActiveCall();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let activeCall: CometChat.Call = CometChat.getActiveCall();
  ```
</TabItem>
</Tabs>




:::info Important
 The `getActiveCall()` method will only return the details of the active call for the ongoing session in which the call has been started. If the app is restarted, the data will be lost.
:::

## Call Participant Count

In order to get the number of participants in any call, you can use the `getCallParticipantCount()` method. This method takes the session id for the call and returns the number of participants that are active in the call.

<Tabs>
<TabItem value="Get Call Participant Count" label="Get Call Participant Count">

  ```javascript
let sessionId = "CALL_SESSION_ID";
let callType = "DEFAULT";

CometChat.getCallParticipantCount(sessionId, callType).then(
	count => {
		console.log("Participants count =", count);
	}, error => {
		console.log("Some error occurred =", error);
	}
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
let sessionId: string = "CALL_SESSION_ID";
let callType: string = "DEFAULT";

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
