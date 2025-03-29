---
sidebar_position: 3
title: Sound Manager
slug: /sound-manager
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

CometChatSoundManager is responsible for playing different types of audio which is required for incoming and outgoing events in UI Kit. It plays audio for incoming and outgoing messages as well as calls.

Before you can use the SoundManager, it must be initialized:

<Tabs>
<TabItem value="ts" label="Typescript">

```typescript
CometChatSoundManager.play("incomingMessage");
```

</TabItem>
</Tabs>

## Methods

### Play Sound

The SoundManager plays pre-defined or custom sounds based on user interactions with the chat interface. If no custom sound file is provided, the default sound is played.

Here are the available methods for triggering sound playback:

- `play(sound, customSound, isRequire = false)`: This method is used for playing the sound for a particular state as mentioned in the Sound enum cases. This method plays different types of sounds for incoming call, outgoing call and messages. This method is also capable of playing in-built sounds or custom sounds by passing a mp3 file asset path as parameter mentioned in the method. If this parameter is null, it will play the default sound. Otherwise it will play the custom sound from the provided file path.

### Pause Sound

The SoundManager can pause different types of sounds for incoming and outgoing calls and messages using the following method:

- `pause()`: This method pauses any sound currently being played.

## Usage

Here is how to use CometChatSoundManager:

```typescript
// Play sound with default sound:
CometChatSoundManager.play("incomingMessage"); //To play default incoming message sound
CometChatSoundManager.play("outgoingMessage"); //To play default outgoing message sound

//Play sound with custom sound
CometChatSoundManager.play("outgoingMessage", "assetPath"); //To custom message sound

// Pause Sound:
CometChatSoundManager.pause();
```

By using the CometChatSoundManager, you can enhance the user experience in your chat application by integrating audible cues for chat interactions.
