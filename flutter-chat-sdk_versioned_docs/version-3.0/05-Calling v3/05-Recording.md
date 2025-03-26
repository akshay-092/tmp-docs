---
sidebar_position: 5
title: Recording
slug: /recording
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This section will guide you to implement call recording feature for the voice and video calls.

## Implementation

Once you have decided to implement [Default Calling](./default-calling) or [Direct Calling](./direct-calling) calling and followed the steps to implement them. Just few additional listeners and methods will help you quickly implement call recording in your app.

You need to make changes in the CometChat.startCall method and add the required listeners for recording. Please make sure your callSettings is configured accordingly for [Default Calling](./default-calling) or [Direct Calling](./direct-calling).

A basic example of how to make changes to implement recording for a direct/default call:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
CallSettings callSettings= (CallSettingsBuilder()
  ..defaultLayout = true
  ..showCallRecordButton = true //Show recording button
  ..listener = this //CometChatCallsEventsListener
).build();

CometChatCalls.startSession(generatedToken, callSettings, onSuccess: (Widget? callingWidget){
  debugPrint("Success");
}, onError: (CometChatCallsException e){	  
  debugPrint("Error: $e");
});
```

</TabItem>
</Tabs>



## Settings for call recording

The `CallSettings`class allows you to customise the overall calling experience. The properties for the call/conference can be set using the `CallSettingsBuilder` class. This will eventually give you and object of the `CallSettings` class which you can pass to the `startCall()` method to start the call.

The options available for recording of calls are:

| Setting | Description | 
| ---- | ---- | 
| `showCallRecordButton(boolean showCallRecordButton)` | If set to `true` it displays the Recording button in the button Layout.<br />if set to `false` it hides the Recording button in the button Layout.<br />**Default value = false** | 
| `startRecordingOnCallStart(boolean startRecordingOnCallStart)` | If set to `true` call recording will start as soon as the call is started.<br />if set to `false` call recording will not start as soon as the call is started.<br />**Default value = false** | 


### Start Recording

You can use the startRecording() method to start call recording.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
CometChatCalls.startRecording(onSuccess: (success) {
  debugPrint("Success $success");
}, onError: (error) {
  debugPrint("Error $error");
});
```

</TabItem>
</Tabs>



### Stop Recording

You can use the stopRecording() method to stop call recording.

<Tabs>
<TabItem value="1" label="Dart">

```Dart
CometChatCalls.stopRecording(onSuccess: (success) {
  debugPrint("Success $success");
}, onError: (error) {
  debugPrint("Error $error");
});
```

</TabItem>
</Tabs>

