---
sidebar_position: 20
title: Icon
slug: /icon
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This element displays an icon. It currently supports only svg icons

## Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| name | string | Name of the element | 
| URL | string | Asset URL of the element | 
| iconStyle | [IconStyle](./icon#iconstyle) | Styling properties and values of the element | 


## IconStyle

Styling properties and values of the element

| Name | Description | 
| ---- | ---- | 
| width | Sets the width of the element | 
| height | Sets the height of the element | 
| iconTint | Sets the tint or color applied to the icon | 


## Usage

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import '@cometchat/uikit-elements';//import the web component package.
import { iconStyle } from '@cometchat/uikit-elements';

const iStyle = new iconStyle({
width: "24px",
height: "24px",
iconTint: "lightgreen"  
});

const iconURL = "https://img.icons8.com/?size=24&id=717&format=svg";

<cometchat-icon 
:URL="iconURL"
:iconStyle="iStyle">
</cometchat-icon>
```

</TabItem>
</Tabs>