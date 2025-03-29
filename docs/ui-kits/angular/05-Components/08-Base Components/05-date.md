---
sidebar_position: 4
title: Date
slug: /date
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatDate` is a widget which is used to show the date and time. You can also customize the appearance of this widget by modifying its logic.

## Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| timestamp | number | Timestamp to be displayed in unix format | 
| pattern | [DatePatterns](/web-shared/datepatterns) | Group of constants representing the in-built date patterns | 
| customDateString | string | Override the in-built pattern with your custom representation of the timestamp | 
| dateStyle | [dateStyle](./date#datestyle) | Styling properties and values of the [Date](./date) component | 


## dateStyle

Styling properties and values of the element

| Name | Description | 
| ---- | ---- | 
| width | Sets the width of the element | 
| height | Sets the height of the element | 
| border | Sets the border of the element | 
| borderRadius | Sets the border radius of the element | 
| background | Sets all background style properties at once, such as color, image, origin and size, or repeat method. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/background) | 
| textFont | Sets all the different properties of font for the date text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font) | 
| textColor | Sets the foreground color of the date text. | 


## Usage

<Tabs>
<TabItem value="html" label="HTML">

```HTML
<!-- make use of the element; format the timestamp to the in-built time pattern -->
<cometchat-date
[timestamp]="'1686234301'"
[pattern]="datePattern"
></cometchat-date>
```

</TabItem>
<TabItem value="js" label="Javascript">

```javascript
import { DatePatterns } from 'uikit-resources'; //import the date pattern constant.

public datePattern: DatePatterns = DatePatterns.DateTime;
```

</TabItem>
</Tabs>