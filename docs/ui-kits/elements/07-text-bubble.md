---
sidebar_position: 7
title: Text bubble
slug: /text-bubble
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This element handles the display for an individual text message.

## Properties

| Name           | Type                                             | Description                                                               |
| -------------- | ------------------------------------------------ | ------------------------------------------------------------------------- |
| text           | string                                           | Text to be displayed                                                      |
| textStyle      | [TextBubbleStyle](./text-bubble#textbubblestyle) | Styling properties and values of the [Text bubble](./text-bubble) element |
| textFormatters | [TextFormatters[]](/web-shared/text-formatters)  | Accepts Array of textFormatters                                           |

## TextBubbleStyle

| Name      | Description                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| textFont  | Sets all the different properties of font for the text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font) |
| textColor | Sets the foreground color of the text.                                                                                          |

## Usage

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import "@cometchat/uikit-elements"; //import the web elements package

//use the element
<cometchat-text-bubble text="Hey, there!!"></cometchat-text-bubble>;
```

</TabItem>
</Tabs>
