---
sidebar_position: 6
title: Image Bubble
slug: /image-bubble
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatImageBubble` is the content view for a [MediaMessage](/sdk/flutter/send-message#media-message) if the media sent is an image.

## Properties

| Properties | Type | Description | 
| ---- | ---- | ---- | 
| **imageUrl** | String | the path of the image to display | 
| **placeholderImage** | String | the path of the image from assets to display when the actual image is being fetched | 
| **placeHolderImagePackageName** | String | the package of the asset image to display when the actual image is being fetched | 
| **caption** | String | a text to display below the image | 
| **style** | [ImageBubbleStyle](/ui-kit/flutter/image-bubble#imagebubblestyle) | used to customize appearance of this widget | 
| **theme** | [CometChatTheme](/ui-kit/flutter/theme) | used to set custom theme | 
| **onClick** | Function() | custom action on tapping the image | 

---

## ImageBubbleStyle

 ImageBubbleStyle is the class containing attributes to customize appearance of this widget.

| Properties | Type | Description | 
| ---- | ---- | ---- | 
| **captionStyle** | TextStyle | used to set style of the caption text | 
| **height** | double | used to set height | 
| **width** | double | used to set width | 
| **background** | Color | used to set background color | 
| **gradient** | Gradient | used to set a gradient background | 
| **border** | BoxBorder | used to set border | 
| **borderRadius** | double | used to set border radius | 

---

## Usage

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatImageBubble(
    theme: cometChatTheme,
    imageUrl:'https://data-us.cometchat.io/208434241880dc4d/media/1676951632_1179067617_0bb4ab5734e38db8b6fce07a5a912b84.jpg',,
    style: const ImageBubbleStyle(
        borderRadius: 8,
    )
)
```

</TabItem>

</Tabs>


