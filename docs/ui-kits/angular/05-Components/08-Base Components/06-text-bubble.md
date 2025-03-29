---
sidebar_position: 5
title: Text Bubble
slug: /text-bubble
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatTextBubble` is the content view shown for TextMessage.


## Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| text | string | Text to be displayed | 
| textStyle | [TextBubbleStyle](./text-bubble#textbubblestyle) | Styling properties and values of the [Text bubble](./text-bubble) element | 


## TextBubbleStyle

| Name | Description | 
| ---- | ---- | 
| textFont | Sets all the different properties of font for the text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font) | 
| textColor | Sets the foreground color of the text. | 


## Usage

<Tabs>
<TabItem value="js" label="HTML">

```HTML
<!--use the element-->
<cometchat-text-bubble
[text]="'Hey, there!!'"
></cometchat-text-bubble>
```

</TabItem>
</Tabs>

