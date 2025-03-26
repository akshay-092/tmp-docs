---
sidebar_position: 4
title: Recording (Beta)
slug: /calling-recording-v3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This section will guide you to implement call recording feature for the voice and video calls. 

## Implementation

Once you have decided to implement [Default Calling](./calling-default-calling) or [Direct Calling](./calling-direct-calling) calling and followed the steps to implement them. Just few additional listeners and methods will help you quickly implement call recording in your app.

You need to make changes in the CometChat.startCall method and add the required listeners for recording. Please make sure your callSettings is configured accordingly for [Default Calling](./calling-default-calling) or [Direct Calling](./calling-direct-calling).

A basic example of how to make changes to implement recording for a direct call/ a default call:
<Tabs>
<TabItem value="Javascript" label="Javascript">

  ```javascript
// Add listeners onRecordingStarted and onRecordingStopped to the startCall method
const defaultLayout = true;
const audioOnly = false;

const callListener = new CometChatCalls.OngoingCallListener({
    onRecordingStarted: (event) => console.log("Listener => onRecordingStarted", event.user),
    onRecordingStopped: (event) => console.log("Listener => onRecordingStopped", event.user),
})

const callSettings = new CometChatCalls.CallSettingsBuilder()
    .enableDefaultLayout(defaultLayout)
    .setIsAudioOnlyCall(audioOnly)
    .setCallListener(callListener)
    .build();

const htmlElement = document.getElementById("ELEMENT_ID");
CometChatCalls.startSession(
    callToken,
    callSettings,
    htmlElement
);
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
// Add listeners onRecordingStarted and onRecordingStopped to the startCall method
const defaultLayout = true;
const audioOnly = false;

const callListener = new CometChatCalls.OngoingCallListener({
    onRecordingStarted: (event) => console.log("Listener => onRecordingStarted", event.user),
    onRecordingStopped: (event) => console.log("Listener => onRecordingStopped", event.user),
})

const callSettings = new CometChatCalls.CallSettingsBuilder()
    .enableDefaultLayout(defaultLayout)
    .setIsAudioOnlyCall(audioOnly)
    .setCallListener(callListener)
    .build();

const htmlElement = document.getElementById("ELEMENT_ID");
CometChatCalls.startSession(
    callToken,
    callSettings,
    htmlElement
);
  ```
</TabItem>
</Tabs>



## Settings for call recording

The `CallSettings`class allows you to customise the overall calling experience. The properties for the call/conference can be set using the `CallSettingsBuilder` class. This will eventually give you and object of the `CallSettings` class which you can pass to the `startSession()` method to start the call.

The options available for recording of calls are:

| Setting | Description | 
| ---- | ---- | 
| `showRecordingButton(showRecordingButton: boolean)` | If set to `true` it displays the Recording button in the button Layout.<br/>if set to `false` it hides the Recording button in the button Layout.<br/>**Default value = false** | 
| `startRecordingOnCallStart(startRecordingOnCallStart: boolean)` | If set to `true` call recording will start as soon as the call is started.<br/>if set to `false` call recording will not start as soon as the call is started.<br/>**Default value = false** | 


For the use case where you wish to align your own custom buttons and not use the default layout provided by CometChat, you can embed the buttons in your layout and use the below methods to perform the corresponding operations:

### Start Recording

You can use the startRecording() method to start call recording.
<Tabs>
<TabItem value="Start Recording" label="Start Recording">

  ```javascript
CometChatCalls.startRecording();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
CometChatCalls.startRecording();
  ```
</TabItem>
</Tabs>



### Stop Recording

You can use the stopRecording() method to stop call recording.
<Tabs>
<TabItem value="Stop Recording" label="Stop Recording">

  ```javascript
CometChatCalls.stopRecording();
  ```
</TabItem>
<TabItem value="Typescript" label="Typescript">

  ```typescript
CometChatCalls.stopRecording();
  ```
</TabItem>
</Tabs>
