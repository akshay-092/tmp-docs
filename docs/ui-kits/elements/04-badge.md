---
sidebar_position: 4
title: Badge
slug: /badge
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This element is a numeric value descriptor i.e it displays the unread count of messages for 1-1/group chats.

## Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| count | number | The numeric value to be displayed | 
| badgeStyle | [BadgeStyle](./badge#badge-style) | Styling properties of the element | 


## Badge Style

| Name | Description | 
| ---- | ---- | 
| textFont | Sets all the different properties of font for the badge text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font) | 
| textColor | Sets the foreground color of the text displayed on the badge. | 


## Usage

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import '@cometchat/uikit-elements'; //import the web elements package.
import  { BadgeStyle } from '@cometchat/uikit-elements'; //import the style class.


//create style object
const badgeStyle:BadgeStyle = new BadgeStyle({
	width:"36px",
	height:"36px",
	textFont:"400 13px Inter",
	textColor:"black"
})

//use the element
<cometchat-badge badgeStyle={badgeStyle} count={10}></cometchat-badge>
```

</TabItem>
</Tabs>