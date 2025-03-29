---
sidebar_position: 5
title: Text Bubble
slug: /text-bubble
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatTextBubble` is the content view shown for [TextMessage](/sdk/flutter/send-message#text-message).

| Properties | Type | Description | 
| ---- | ---- | ---- | 
| **text** | String | the text to display | 
| **style** | [TextBubbleStyle](/ui-kit/flutter/text-bubble#textbubblestyle) | used to customize appearance of this widget | 
| **theme** | [Theme](/ui-kit/flutter/theme) | used to set custom theme | 
| **alignment** | BubbleAlignment | alignment can be left, right or center | 

---

## TextBubbleStyle

`TextBubbleStyle` is the class containing attributes to customize appearance of this widget.

| Properties | Type | Description | 
| ---- | ---- | ---- | 
| **textStyle** | TextStyle | used to set style of the text of the message | 
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
CometChatTextBubble(
    text:'Hi! how are you?',
    alignment: BubbleAlignment.right,
    theme: cometChatTheme,
    style: TextBubbleStyle(background: Colors.teal),
);
```

</TabItem>

</Tabs>

