---
sidebar_position: 8
title: File Bubble
slug: /file-bubble
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatFileBubble` is the content view for a [MediaMessage](/sdk/react-native/send-message#media-message) if the media sent is a file.

## Properties

| Properties   | Type                                             | Description                                        |
| ------------ | ------------------------------------------------ | -------------------------------------------------- |
| **fileUrl**  | String                                           | the path of the image to display                   |
| **title**    | String                                           | a text to display as name of the file              |
| **subtitle** | String                                           | a text to display below the name of the file       |
| **icon**     | Icon                                             | customize the icon to display to download the file |
| **style**    | [FileBubbleStyle](./file-bubble#filebubblestyle) | used to customize appearance of this widget        |


## FileBubbleStyle

FileBubbleStyle is the class containing attributes to customize appearance of this widget.

| Properties      | Type                 | Description                                              |
| --------------- | -------------------- | -------------------------------------------------------- |
| titleFont       | TextStyle            | used to set style of the name of the file                |
| titleColor      | string               |                                                          |
| subtitleFont    | TextStyle            | used to set style of the text below the name of the file |
| iconTint        | string               | used to provide colour to the download icon              |
| height          | string &#124; number | used to set height                                       |
| width           | string &#124; number | used to set width                                        |
| backgroundColor | string               | used to set background colour                            |
| border          | BroderStyle          | used to set border                                       |
| borderRadius    | number               | used to set border radius                                |


## Usage

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
<CometChatFileBubble 
  fileUrl='https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg',
  style= {{borderRadius: 6}}
/>
```


</TabItem>
</Tabs>

