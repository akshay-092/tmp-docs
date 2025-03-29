---
sidebar_position: 23
title: Icon Button
slug: /icon-button
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview


This element uses [Icon element](./icon) and [Label element](./label) to show text and icon(with background) and along with an alignment property to align the icon around the text. The purpose of this element is to initiate an action.

## Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| text | string | Text to appear on the element | 
| hoverText | string | Text to appear on the element on mouseover | 
| iconURL | string | Asset URL of the icon to be displayed on the element | 
| alignment | [IconButtonAlignment](/web-shared/iconbuttonalignment) | Group of constants representing the alignment options | 
| disabled | boolean | When set to true, prevents the user from interacting with the button: it cannot be pressed or focused. | 
| buttonStyle | object | Styling properties and values of the element | 


## Events

Events triggered by the element

| Name | Description | 
| ---- | ---- | 
| cc-button-clicked | Event triggered when user clicks on the element | 


## Usage

<Tabs>
<TabItem value="html" label="HTML">

```HTML
<cometchat-icon-button
[text]="'text'"
[alignment]="alignment"
[hoverText]="'hoverText'"
[iconURL]="myCustomIcon"
(cc-button-clicked)="clickHandler($event)"
></cometchat-icon-button>
```

</TabItem>
<TabItem value="js" label="Javascript">

```javascript
import '@cometchat/uikit-elements';//import the web component package.
import { IconButtonAlignment } from '@cometchat/uikit-resources';

alignment = IconButtonAlignment.right
iconURL = "https://img.icons8.com/?size=24&id=uooD0BINPxNE&format=svg";
clickHandler = (event: any) => {
  //Perform appropriate action
}
```

</TabItem>
</Tabs>