---
sidebar_position: 17
title: Backdrop
slug: /backdrop
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



This element represents the background against which other elements are presented.

## Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| isOpen | Boolean | When set to true, makes the element visible | 
| backdropStyle | [BackdropStyle](./backdrop#backdropstyle) | Styling properties and values of the element | 


## Events

Events dispatched from the element

| Name | Description | 
| ---- | ---- | 
| cc-backdrop-clicked | Event triggered when user clicks on the element | 


## BackdropStyle

Styling properties and values of the element

| Name | Description | 
| ---- | ---- | 
| width | Sets the width of the element | 
| height | Sets the height of the element | 
| border | Sets the border of the element | 
| borderRadius | Sets the border radius of the element | 
| background | Sets all background style properties at once, such as color, image, origin and size, or repeat method. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/background) | 


## Usage

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import "@cometchat/uikit-elements"; //import the web elements package.
import { BaseStyle } from "@cometchat/uikit-elements"; //import the BaseStyle class.


const bStyle = new BaseStyle({
  background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
});
<cometchat-backdrop :backdropStyle="bStyle"></cometchat-backdrop>
```

</TabItem>
</Tabs>