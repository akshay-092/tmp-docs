---
sidebar_position: 3
title: Sound Manager
slug: /sound-manager
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The SoundManager is a helper class responsible for managing and playing various types of audio in the CometChat UI Kit. This includes sound events for incoming and outgoing messages and calls.

## Methods

### Play Sound

The SoundManager plays pre-defined or custom sounds based on user interactions with the chat interface. If no custom sound file is provided, the default sound is played.

- `play()`: This method plays different types of sounds for incoming and outgoing calls and messages.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
// Play sound with default sound:
SoundManager().play(sound: Sound.incomingMessage); //To play default incoming message sound
SoundManager().play(sound: Sound.outgoingMessage);//To play default outgoing message sound
```

</TabItem>

</Tabs>

CometChat sound will behave differently with different type of OS in case of background playing

### Stop Sound

The SoundManager can Stop different types of sounds for incoming and outgoing calls and messages using the following method:

- `stop()`: This method Stops any sound currently being played.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
SoundManager().stop();
```

</TabItem>

</Tabs>

## Usage

Here is how to use SoundManager:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
//Play sound with custom sound
SoundManager().play(sound: Sound.outgoingMessage, customSound: "assetPath"); //To custom message sound
```

</TabItem>

</Tabs>

By using the SoundManager, you can enhance the user experience in your chat application by integrating audible cues for chat interactions.

The table below lists down various Sound enum cases and the corresponding assets played for them:

| Sound | Asset | 
| ---- | ---- | 
| incomingMessage | assets/sound/incoming_message.wav | 
| outgoingMessage | assets/sound/outgoing_message.wav | 
| incomingMessageFromOther | assets/sound/incoming_message.wav | 
| outgoingCall | assets/sound/outgoing_call.wav | 
| incomingCall | assets/sound/incoming_call.wav | 
