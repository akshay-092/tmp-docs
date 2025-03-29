---
sidebar_position: 3
title: Recording
slug: /recording
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section will guide you to implement call recording feature for the voice and video calls.

## Implementation

Once you have decided to implement [Default Calling](default-calling) or [Direct Calling](direct-calling) calling and followed the steps to implement them. Just few additional listeners and methods will help you quickly implement call recording in your app.

You need to make changes in the CometChat.startCall method and add the required listeners for recording. Please make sure your callSettings is configured accordingly for [Default Calling](default-calling) or [Direct Calling](direct-calling).

A basic example of how to make changes to implement recording for a direct/default call:

<Tabs>
<TabItem value="Java" label="Java">

  ```java
  CallSettings callSettings = new CallSettings.CallSettingsBuilder(CallActivity.this, rlCallView)
    .setSessionId(sessionId)
    .showCallRecordButton(true)
    .build();

  CometChat.startCall(callSettings, new CometChat.OngoingCallListener() {
    @Override
    public void onRecordingStarted(User user) {

    }

    @Override
    public void onRecordingStopped(User user) {

    }
  });    
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
  val callSettings = CallSettingsBuilder(this@CallActivity, rlCallView)
    .setSessionId(sessionId)
    .showCallRecordButton(true)
    .build()

  CometChat.startCall(callSettings, object : OngoingCallListener {
    override fun onRecordingStarted(user: User) {}
    override fun onRecordingStopped(user: User) {}
  })
  ```
</TabItem>
</Tabs>




## Settings for call recording

The `CallSettings`class allows you to customise the overall calling experience. The properties for the call/conference can be set using the `CallSettingsBuilder` class. This will eventually give you and object of the `CallSettings` class which you can pass to the `startCall()` method to start the call.

The options available for recording of calls are:

| Setting | Description | 
| ---- | ---- | 
| `showCallRecordButton(boolean showCallRecordButton)` | If set to `true` it displays the Recording button in the button Layout.<br/>if set to `false` it hides the Recording button in the button Layout.<br/>**Default value = false** | 
| `startRecordingOnCallStart(boolean startRecordingOnCallStart)` | If set to `true` call recording will start as soon as the call is started.<br/>if set to `false` call recording will not start as soon as the call is started.<br/>**Default value = false** | 


### Start Recording

You can use the startRecording() method to start call recording.

<Tabs>
<TabItem value="Java" label="Java">

  ```java
CallManager.getInstance().startRecording();  
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
CallManager.getInstance().startRecording() 
  ```
</TabItem>
</Tabs>



### Stop Recording

You can use the stopRecording() method to stop call recording.

<Tabs>
<TabItem value="Java" label="Java">

  ```java
CallManager.getInstance().stopRecording();    
  ```
</TabItem>
<TabItem value="Kotlin" label="Kotlin">

  ```kotlin
CallManager.getInstance().stopRecording()  
  ```
</TabItem>
</Tabs>
