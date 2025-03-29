---
sidebar_position: 25
title: Label
slug: /label
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This element provides descriptive information about the associated UI element.

## Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| text | string | Descriptive text associated with the UI element | 
| labelStyle | [LabelStyle](./label#labelstyle) | Styling properties and values of the element | 


## LabelStyle

Styling properties and values of the element

| Name | Description | 
| ---- | ---- | 
| width | Sets the width of the element | 
| height | Sets the height of the element | 
| border | Sets the border of the element | 
| borderRadius | Sets the border radius of the element | 
| background | Sets all background style properties at once, such as color, image, origin and size, or repeat method. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/background) | 
| textFont | Sets all the different properties of font for the descriptive text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font) | 
| textColor | Sets the foreground color of the descriptive text. | 


## Usage

<Tabs>
<TabItem value="html" label="HTML">

```HTML
<!--make use of the element; pass a custom style-->
<cometchat-label
[text]="'Hello World!'"
[labelStyle]="labelStyle"
></cometchat-label>
```

</TabItem>
<TabItem value="js" label="Javascript">

```javascript
import '@cometchat/uikit-elements'; //import the web elements package.
import { labelStyle } from '@cometchat/uikit-elements';

labelStyle = new LabelStyle({
  textFont: "italic 1.2em 'Fira Sans'"
});
```

</TabItem>
</Tabs>