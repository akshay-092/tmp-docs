---
sidebar_position: 2
title: Default Calling
slug: /calling-default-calling
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section will provide information on how a complete calling workflow can be set up using the CometChat SDK. We've built the complete workflow to help your users make calls, receive calls as well as accept/reject calls.

Let us assume Alex to be the call initiator and Bob is the receiver.

1. Alex initiates the call to Bob using the **initiateCall()** method.
2. Bob now has two choices:
    1. Accept the call from Alex using the **acceptCall()** method.
    2. Reject the call from Alex using the **rejectCall()** method passing the status as `rejected`.

3. In the meantime, Alex has the option to cancel the call he initiated to Bob using the **rejectCall()** method passing the status as `cancelled`.
4. If Bob accepts the call from Alex, both Alex and Bob need to call the **startCall()** method. Alex in the **onOutgoingCallAccepted()** method of the `CallListener` and Bob in the success obtained from the `acceptCall()` method and both will be connected to each other.

## Initiate Call

The `initiateCall()` method sends a call request to a user or a group.


<Tabs>
<TabItem value="1" label="User Call">

```javascript
var receiverID = "UID";
var callType = CometChat.CALL_TYPE.VIDEO;
var receiverType = CometChat.RECEIVER_TYPE.USER;

var call = new CometChat.Call(receiverID, callType, receiverType);

CometChat.initiateCall(call).then(
  outGoingCall => {
    console.log("Call initiated successfully:", outGoingCall);
    // perform action on success. Like show your calling screen.
  },
  error => {
    console.log("Call initialization failed with exception:", error);
  }
);
```
</TabItem>
<TabItem value="2" label="Group call">

```javascript
var receiverID = "GUID";
var callType = CometChat.CALL_TYPE.VIDEO;
var receiverType = CometChat.RECEIVER_TYPE.GROUP;

var call = new CometChat.Call(receiverID, callType, receiverType);

CometChat.initiateCall(call).then(
  outGoingCall => {
    console.log("Call initiated successfully:", outGoingCall);
    // perform action on success. Like show your calling screen.
  },
  error => {
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
<TabItem value="1" label="Javascript">

```javascript
var listnerID = "UNIQUE_LISTENER_ID";
CometChat.addCallListener(
  listnerID,
  new CometChat.CallListener({
    onIncomingCallReceived: (call) => {
      console.log("Incoming call:", call);
      // Handle incoming call
    },
    onOutgoingCallAccepted: (call) => {
      console.log("Outgoing call accepted:", call);
      // Outgoing Call Accepted
    },
    onOutgoingCallRejected: (call) => {
      console.log("Outgoing call rejected:", call);
      // Outgoing Call Rejected
    },
    onIncomingCallCancelled: (call) => {
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
<TabItem value="1" label="Javascript">

```javascript
var listenerID = "UNIQUE_LISTENER_ID";

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
<TabItem value="1" label="Accept Incoming Call">

```javascript
var sessionID = "SESSION_ID";

CometChat.acceptCall(sessionID).then(
  call => {
    console.log("Call accepted successfully:", call);
    // start the call using the startCall() method
  },
  error => {
    console.log("Call acceptance failed with error", error);
    // handle exception
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
<TabItem value="1" label="Reject Incoming Call">

```javascript
var sessionID = "SESSION_ID";
var status = CometChat.CALL_STATUS.REJECTED;

CometChat.rejectCall(sessionID, status).then(
  call => {
    console.log("Call rejected successfully", call);
  },
  error => {
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
<TabItem value="1" label="Start a Call">

```javascript
/**
* You can get the call Object from the success of acceptCall() or from the onOutgoingCallAccepted() callback of the CallListener.
*/
var sessionId = call.sessionId;
var callType = call.type;
let callListener = new CometChat.OngoingCallListener({
    onUserJoined: user => {
        console.log('User joined call:', user);
    },
    onUserLeft: user => {
        console.log('User left call:', user);
    },
    onUserListUpdated: userList => {
			console.log("user list:", userList);
    },
  	onAudioModesUpdated: (audioModes) => {
        console.log("audio modes:", audioModes);
    },
    onCallEnded: call => {
        console.log('Call ended listener', call);
    },
    onError: error => {
        console.log('Call Error: ', error);
    },
});
var callSettings = new CometChat.CallSettingsBuilder()
									.setSessionID(sessionId)
									.enableDefaultLayout(true)
									.setIsAudioOnlyCall(callType == 'aduio' ? true : false)
                  .setCallEventListener(callListener)
									.build();

var callSettings = new CometChat.CallSettingsBuilder()
            .setSessionID(sessionId)
            .setCallEventListener(callListener)
            .build();


render(){
   return(
      <View style={{height: '100%', width: '100%', position: 'relative'}}>
          <CometChat.CallingComponent callsettings= {callSettings} />
       </View>
   );
}
```
</TabItem>
</Tabs>


:::info Please Note
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
| `onUserJoined(User user)` | This method is called when any other user joins the call. The user details can be obtained from the `User` object provided. | 
| `onUserLeft(User user)` | This method is called when a user leaves the call. The details of the user can be obtained from the provided `User` object. | 
| `onError()` | This method is called when there is some error in establishing the call. | 
| `onCallEnded()` | This method is called when the call is successfully ended. The call details can be obtained from the `Call` object provided. | 
| `onUserListUpdated(userList)` | This method is triggered every time a participant joins or leaves the call providing the list of users active in the call. | 
| `onAudioModesUpdated(audioModes)` | This callback is triggered if any new audio output source is available or becomes unavailable. | 


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
| `showMuteAudioButton(showMuteAudioButton: boolean)` | If set to `true` it displays the MuteAudioButton in Button Layout. <br/>if set to `false` it hides the MuteAudioButton in Button Layout<br/>**Default value = true** | 
| `showSwitchCameraButton(showSwitchCameraButton: boolean)` | If set to `true` it displays the SwitchCameraButton in Button Layout. <br/>if set to `false` it hides the SwitchCameraButton in Button Layout.<br/>**Default value = true** | 
| `showAudioModeButton(showAudioModeButton: boolean)` | If set to `true` it displays the AudioModeButton in Button Layout. <br/>if set to `false` it hides the AudioModeButton in Button Layout.<br/>**Default value = true** | 
| `setIsAudioOnlyCall(audioOnly: boolean)` | If set to true, the call will be strictly an audio call. If ser to false, the call will be an audio-video call.<br/>**Default value = false** | 
| `setMode(mode: string)` | CometChat provides 3 options for the calling UI. <br/>1. CometChat.CALL_MODE.DEFAULT<br/>2. CometChat.CALL_MODE.SPOTLIGHT<br/>3. CometChat.CALL_MODE.SINGLE<br/>**Default value = CometChat.CALL_MODE.DEFAULT** | 
| `startWithAudioMuted(audioMuted: boolean)` | This ensures the call is started with the audio muted if set to true.<br/>**Default value = false** | 
| `startWithVideoMuted(videoMuted: boolean)` | This ensures the call is started with the video paused if set to true.<br/>**Default value = false** | 
| `setDefaultAudioMode(audioMode: string)` | This method can be used if you wish to start the call with a specific audio mode. The available options are <br/>1. CometChat.AUDIO_MODE.SPEAKER = "SPEAKER"<br/>2. CometChat.AUDIO_MODE.EARPIECE = "EARPIECE"<br/>3. CometChat.AUDIO_MODE.BLUETOOTH = "BLUETOOTH"<br/>4. CometChat.AUDIO_MODE.HEADPHONES = "HEADPHONES" | 


In case you wish to achieve a completely customised UI for the Calling experience, you can do so by embedding default android buttons to the screen as per your requirement and then use the below methods to achieve different functionalities for the embedded buttons.

For the use case where you wish to align your own custom buttons and not use the default layout provided by the SDK you can embed the buttons in your layout and use the below methods to perform the corresponding operations:

### Switch Camera

You can call the `switchCamera()` Method to toggle between camera sources.

<Tabs>
<TabItem value="1" label="Switch Camera">

```javascript
let callController = CometChat.CallController.getInstance();
callController.switchCamera();
```
</TabItem>
</Tabs>

### Mute Audio

You can call `muteAudio(mute: boolean)` Method to mute your Audio Stream to the end-user.

<Tabs>
<TabItem value="1" label="Mute Audio">

```javascript
let callController = CometChat.CallController.getInstance();
callController.muteAudio(true);
```
</TabItem>
</Tabs>

if set to `true` the Audio Stream is muted and if set to `false` Audio Stream is transmitted.

### Pause Video

You can call `pauseVideo(pause: boolean)` Method to pause Video Stream to the end-user.

<Tabs>
<TabItem value="1" label="Pause Video">

```javascript
let callController = CometChat.CallController.getInstance();
callController.pauseVideo(true);
```
</TabItem>
</Tabs>


if set to `true` the Video Stream is muted and if set to `false` Video Stream is transmitted.

### Set Audio Mode

You can call the `setAudioMode(mode: string)` to set the output of the audio stream.


<Tabs>
<TabItem value="1" label="Set Audio Mode">

```javascript
let callController = CometChat.CallController.getInstance();
let earPieceMode = CometChat.AUDIO_MODE.EARPIECE;
callController.setAudioMode(earPieceMode);
```
</TabItem>
</Tabs>


The audio mode string can have either one of the below 4 values:

- CometChat.AUDIO_MODE.SPEAKER = "SPEAKER"
- CometChat.AUDIO_MODE.EARPIECE = "EARPIECE"
- CometChat.AUDIO_MODE.BLUETOOTH = "BLUETOOTH"
- CometChat.AUDIO_MODE.HEADPHONES= "HEADPHONES"

### End Call

You can use the `CometChat.endCall()` method of the `CometChat` class to end the call.

<Tabs>
<TabItem value="1" label="End Call">

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


### Get the list of available audio modes

This method will return the list of available audio modes. Based on the list received, you can set the audio mode for the ongoing call using the `setAudioMode()` method.

<Tabs>
<TabItem value="1" label="Get audio modes">

```javascript
let callController = CometChat.CallController.getInstance();
callController.getAudioOutputModes().then(
    modes => {
      console.log('getAudioOutputModes :: modes', modes);
    }, error => {
      console.log('getAudioOutputModes :: error', error);
    }
);
```
</TabItem>
</Tabs>

The AudioMode class has the below properties:

1. mode - The mode can be either one of the below values:

- CometChat.AUDIO_MODE.SPEAKER = "SPEAKER"
- CometChat.AUDIO_MODE.EARPIECE = "EARPIECE"
- CometChat.AUDIO_MODE.BLUETOOTH = "BLUETOOTH"
- CometChat.AUDIO_MODE.HEADPHONES= "HEADPHONES"

2. isSelected - This is a boolean value that indicates if the audio mode is the active mode.

## Active Call

CometChat SDK provides a method to get the details of the call that is currently active. The `CometChat.getActiveCall()` will return an object of the `Call` class containing the details of the ongoing call. If there is no ongoing call this method will return null.

<Tabs>
<TabItem value="1" label="Get Active Call">

```javascript
let activeCall = CometChat.getActiveCall();
```
</TabItem>
</Tabs>

:::info Important
 The `getActiveCall()` method will only return the details of the active call for the ongoing session in which the call has been started. If the app is restarted, the data will be lost.
:::

## Call Participant Count

In order to get the number of participants in any call, you can use the `getCallParticipantCount()` method. This method takes the session id for the call and returns the number of participants that are active in the call.


<Tabs>
<TabItem value="1" label="Get Call Participant Count">

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
</Tabs>
