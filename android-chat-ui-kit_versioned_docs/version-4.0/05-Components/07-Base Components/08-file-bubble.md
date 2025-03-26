---
sidebar_position: 7
title: File Bubble
slug: /file-bubble
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatFileBubble` is the content view for a MediaMessage if the media sent is a file.

## Methods

| methods | Type | Description | 
| ---- | ---- | ---- | 
| **setFileUrl** | String | the path of the image to display | 
| **setTitleText** | String | a text to display as name of the file | 
| **setSubtitleText** | String | a text to display below the name of the file | 
| **setDownloadIcon** | Icon | customize the icon to display to download the file | 
| **setStyle** | FileBubbleStyle | used to customize appearance of this widget | 


## FileBubbleStyle

FileBubbleStyle is the class containing attributes to customize appearance of this widget.

| Methods | Type | Description | 
| ---- | ---- | ---- | 
| **setTitleTextAppearance** | TextStyle | used to set style of the name of the file | 
| **setSubtitleTextAppearance** | TextStyle | used to set style of the text below the name of the file | 
| **setDownloadIconTint** | @ColorInt<br /><br />int | used to provide color to the download icon | 
| **setBackground** | @ColorInt<br /><br />int | used to set background color | 
| **setBackground** | Drawable | used to set a drawable background | 
| **setBorderColor** | @ColorInt<br /><br />int | used to set border color | 
| **setBorderWidth** | int | used to set border width | 
| **setCornerRadius** | float | used to set border radius | 


## Usage

<Tabs>
<TabItem value="java" label="Java">

```java
CometChatFileBubble fileBubble = new CometChatFileBubble(getContext());
        fileBubble.setFileUrl("https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg", "Sample file", "image");
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val fileBubble = CometChatFileBubble(getContext())
fileBubble.setFileUrl(
            "https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg",
            "Sample file",
            "image")
```

</TabItem>
</Tabs>

