---
sidebar_position: 5
title: Date
slug: /date
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatDate` is a widget which is used to show the date and time. You can also customize the appearance of this widget by modifying its logic.

## How to integrate CometChatDate ?

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
<CometChatDate
    timeStamp={timestamp}
    style={messageBubbleDateStyle}
    pattern={"timeFormat"}
    customDateString={datePattern}
  />
```


</TabItem>
</Tabs>



## Properties

| Parameters | Type | Description | 
| ---- | ---- | ---- | 
| timeStamp | number | Used to set the date | 
| pattern | 'timeFormat' &#124; 'dayDateFormat' &#124; 'dayDateTimeFormat' | Used to set pattern with different logics <br /><br />timeFormat, dayDateFormat, dayDateTimeFormat | 
| customDateString | string | text to show instead of date from DateTime object | 
| style | DateStyleInterface | used to customize the appearance of this view | 


## DateStyleInterface

| Parameters | Type | Description | 
| ---- | ---- | ---- | 
| textColor | string | colour of date text | 
| textFont | FontStyleInterface | font style of text | 
| border | BorderStyleInterface | border for date | 
| borderRadius | number | border radius for date | 
| height | number &#124; string | height of the date | 
| width | number &#124; string | width of the date | 
| backgroundColor | string | background colour to date | 
