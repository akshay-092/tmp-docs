---
sidebar_position: 6
title: Sound Manager
slug: /sound-manager
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The SoundManager is a helper class responsible for managing and playing various types of audio in the CometChat UI Kit. This includes sound events for incoming and outgoing messages and calls.

<!-- Before you can use the SoundManager, it must be initialized:

<Tabs>

<TabItem value="swift" label="Swift">

```swift
CometChatSoundManager soundManager = new CometChatSoundManager(context);
```

</TabItem>

</Tabs> -->

## Methods

### Play Sound

The SoundManager plays pre-defined or custom sounds based on user interactions with the chat interface. If no custom sound file is provided, the default sound is played.

Here are the available methods for triggering sound playback:

- `play(sound: Sound, customSound: URL?)`: This method plays different types of sounds for incoming and outgoing calls and messages.Moreover, it can play a customized sound for a specific URL when triggered.

### Pause Sound

The SoundManager can pause different types of sounds for incoming and outgoing calls and messages using the following method:

- `pause()`: This method pauses any sound currently being played.

## Usage

Here is how to use CometChatSoundManager:

```swift
// Play sound:
CometChatSoundManager().play(sound: .incomingMessage)

// Play sound with custom sound:
if let customSoundURL = Bundle.main.url(forResource: "customSound", withExtension: "wav") {
   CometChatSoundManager().play(sound: .incomingMessage, customSound: customSoundURL)
}

// Pause Sound:
CometChatSoundManager().pause()
```

By using the CometChatSoundManager, you can enhance the user experience in your chat application by integrating audible cues for chat interactions.
