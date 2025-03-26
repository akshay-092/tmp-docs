---
sidebar_position: 8
title: Audio Bubble
slug: /audio-bubble
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatAudioBubble` is the content view for a MediaMessage if the media sent is an audio.

## Methods

| Methods | Type | Description | 
| ---- | ---- | ---- | 
| **setAudioUrl** | String | used to set the Audio url for the bubble | 
| **setTitleText** | String | a text to display as name of the audio file | 
| **setSubtitleText** | String | a text to display below the name of the audio file | 
| **setStyle** | AudioBubbleStyle | used to customize appearance of this widget | 
| **setPlayIcon** | @DrawableRes int | customize the icon to display to play the audio | 
| **setPauseIcon** | @DrawableRes int | customize the icon to display to pause the audio | 
| **setOnClick** | OnClick | Override the click event when tapped on play icon | 


## AudioBubbleStyle

AudioBubbleStyle is the class containing methods to customize appearance of this widget.

| Methods | Type | Description | 
| ---- | ---- | ---- | 
| **setTitleTextAppearance** | @StyleRes<br /><br />int | used to set style of the name of the audio file | 
| **setSubtitleTextAppearance** | @StyleRes<br /><br />int | used to set style of the text below the name of the audio file | 
| **setPlayIconTint** | @ColorInt<br /><br />int | used to provide color to the audio play icon | 
| **setPauseIconTint** | @ColorInt<br /><br />int | used to provide color to the audio pause icon | 
| **setBackground** | @ColorInt<br /><br />int | used to set background color | 
| **setBackground** | Drawable | used to set a gradient background | 
| **setBorderWidth** | int | used to set border | 
| **setCornerRadius** | float | used to set border radius | 


## Usage

<Tabs>
<TabItem value="java" label="Java">

```java
CometChatAudioBubble videoBubble = new CometChatAudioBubble(getContext());
videoBubble.setAudioUrl("https://data-us.cometchat.io/208434241880dc4d/media/1676385385_2121040948_0a18fc37cb5afbe4cf833020017274e0.mp3", "Sample Audio", "music");
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val videoBubble = CometChatAudioBubble(getContext())
videoBubble.setAudioUrl(
            "https://data-us.cometchat.io/208434241880dc4d/media/1676385385_2121040948_0a18fc37cb5afbe4cf833020017274e0.mp3",
            "Sample Audio",
            "music")
```

</TabItem>
</Tabs>


