---
sidebar_position: 7
title: Image Bubble
slug: /image-bubble
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatImageBubble` is the content view for a [MediaMessage](/sdk/react-native/send-message#media-message) if the media sent is an image.

## Properties

| Properties           | Type                                                | Description                                                                         |
| -------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **imageUrl**         | ImageType                                           | The image to be displayed                                                           |
| **placeholderImage** | ImageType                                           | the path of the image from assets to display when the actual image is being fetched |
| **style**            | [ImageBubbleStyle](./image-bubble#imagebubblestyle) | used to customize appearance of this widget                                         |
| **onPress**          | Function                                            | custom action on tapping the image                                                  |


## ImageBubbleStyle

ImageBubbleStyle is the class containing attributes to customize appearance of this widget.

| Properties          | Type                 | Description                   |
| ------------------- | -------------------- | ----------------------------- |
| **height**          | string &#124; number | used to set height            |
| **width**           | string &#124; number | used to set width             |
| **backgroundColor** | string               | used to set background colour |
| **border**          | BorderStyle          | used to set border            |
| **borderRadius**    | number               | used to set border radius     |


## Usage

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
<CometChatImageBubble
  imageUrl={{uri: "https://data-us.cometchat.io/208434241880dc4d/media/1676951632_1179067617_0bb4ab5734e38db8b6fce07a5a912b84.jpg"}}
  style={{borderRadius: 8}}
/>
```


</TabItem>
</Tabs>
