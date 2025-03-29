---
sidebar_position: 4
title: Recording (Beta)
slug: /recording
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section will guide you to implement call recording feature for the voice and video calls.

## Implementation

Once you have decided to implement [Default Calling](default-call) or [Direct Calling](direct-call) calling and followed the steps to implement them. Just few additional listeners and methods will help you quickly implement call recording in your app.

You need to make changes in the CometChat.startCall method and add the required listeners for recording. Please make sure your callSettings is configured accordingly for [Default Calling](default-call) or [Direct Calling](direct-call).

A basic example of how to make changes to implement recording for a direct call/ a default call:

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
// Add listeners onRecordingStarted and onRecordingStopped to the startCall method
const defaultLayout = true;
const audioOnly = false;

const callListener = new CometChatCalls.OngoingCallListener({
  onRecordingStarted: (event) =>
    console.log("Listener => onRecordingStarted", event.user),
  onRecordingStopped: (event) =>
    console.log("Listener => onRecordingStopped", event.user),
});

const callSettings = new CometChatCalls.CallSettingsBuilder()
  .enableDefaultLayout(defaultLayout)
  .setIsAudioOnlyCall(audioOnly)
  .setCallListener(callListener)
  .build();

const htmlElement = document.getElementById("ELEMENT_ID");
CometChatCalls.startSession(callToken, callSettings, htmlElement);
```

</TabItem>
<TabItem value="ts" label="Typescript">

```typescript
// Add listeners onRecordingStarted and onRecordingStopped to the startCall method
const defaultLayout = true;
const audioOnly = false;

const callListener = new CometChatCalls.OngoingCallListener({
  onRecordingStarted: (event) =>
    console.log("Listener => onRecordingStarted", event.user),
  onRecordingStopped: (event) =>
    console.log("Listener => onRecordingStopped", event.user),
});

const callSettings = new CometChatCalls.CallSettingsBuilder()
  .enableDefaultLayout(defaultLayout)
  .setIsAudioOnlyCall(audioOnly)
  .setCallListener(callListener)
  .build();

const htmlElement = document.getElementById("ELEMENT_ID");
CometChatCalls.startSession(callToken, callSettings, htmlElement);
```

</TabItem>
</Tabs>

## Settings for call recording

The `CallSettings`class allows you to customise the overall calling experience. The properties for the call/conference can be set using the `CallSettingsBuilder` class. This will eventually give you and object of the `CallSettings` class which you can pass to the `startSession()` method to start the call.

The options available for recording of calls are:

| Setting                                                         | Description                                                                                                                                                                                  |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showRecordingButton(showRecordingButton: boolean)`             | If set to `true` it displays the Recording button in the button Layout.<br/>if set to `false` it hides the Recording button in the button Layout.<br/>**Default value = false**              |
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
<TabItem value="ts" label="Typescript">

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
<TabItem value="ts" label="Typescript">

```typescript
CometChatCalls.stopRecording();
```

</TabItem>
</Tabs>

## Downloading Recording

Currently, the call recordings are available on the [CometChat Dashboard](https://app.cometchat.com/signup) under the Calls Section. Recordings can be accessed after clicking on the three dots menu icon to expand the menu and then select "View Recordings". You can refer to the below screenshot. You can refer to the below screenshot.

![](./asset/t4erpygunz9w2oxjn0nyfmez9d38l2ny8qauc33cpkgc9mz1udly2om321yf67wm.png)
![](./asset/wmlk4h4nnpjz3nwabp3yhjil9u38cu9z27gsf0cdpy4x1ozfpuh6e2pv4apsafr4.png)
![](./asset/fi6v16el19pe29q37izzqopz9k9ur8hz94ju2jxsh4avnmh33fcktwceouu7om2h.png)
