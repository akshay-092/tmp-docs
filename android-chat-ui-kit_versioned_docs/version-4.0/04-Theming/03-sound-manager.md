---
sidebar_position: 3
title: Sound Manager
slug: /sound-manager
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The SoundManager is a helper class responsible for managing and playing various types of audio in the CometChat UI Kit. This includes sound events for incoming and outgoing messages and calls.

Before you can use the SoundManager, it must be initialized:

<Tabs>

<TabItem value="java" label="Java">

```java
CometChatSoundManager soundManager = new CometChatSoundManager(context);
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin
val soundManager = CometChatSoundManager(context)
```

</TabItem>

</Tabs>

## Methods

### Play Sound

The SoundManager plays pre-defined or custom sounds based on user interactions with the chat interface. If no custom sound file is provided, the default sound is played.

Here are the available methods for triggering sound playback:

- `play(Sound sound)`: This method plays different types of sounds for incoming and outgoing calls and messages.

- `play(Sound sound, int res)`: This method is capable of playing a custom sound for a particular raw file passed in this method.

### Pause Sound

The SoundManager can pause different types of sounds for incoming and outgoing calls and messages using the following method:

- `pause()`: This method pauses any sound currently being played.

## Usage

Here is how to use CometChatSoundManager:

```kotlin
// Initialize SoundManager
val soundManager = CometChatSoundManager(context)

// Play sound with default sound:
soundManager.play(Sound.incomingCall) //To play incoming call sound
soundManager.play(Sound.outgoingCall) //To play outgoing call sound
soundManager.play(Sound.incomingMessage) //To play incoming message sound
soundManager.play(Sound.outgoingMessage) //To play outgoing message sound

// Play sound with custom sound
soundManager.play(Sound.incomingCall, R.raw.incoming_call) //To play incoming call sound
soundManager.play(Sound.outgoingCall, R.raw.outgoing_call) //To play outgoing call sound
soundManager.play(Sound.incomingMessage, R.raw.incoming_message) //To play incoming message sound
soundManager.play(Sound.outgoingMessage, R.raw.outgoing_message) //To play outgoing message sound

// Pause Sound:
soundManager.pause()
```

By using the CometChatSoundManager, you can enhance the user experience in your chat application by integrating audible cues for chat interactions.
