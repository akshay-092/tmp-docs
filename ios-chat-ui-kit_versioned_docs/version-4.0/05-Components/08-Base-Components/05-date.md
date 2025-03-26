---
sidebar_position: 4
title: Date
slug: /date
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatDate` is a UILabel which is used to show the date and time. It provides various methods to customize the appearance and behavior of the CometChatDate.

## How to integrate CometChatDate ?

Since `CometChatDate` is a UILabel, It can be added directly in the build method. `CometChatDate` includes various parameters to customize its UI.

#### Usage

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
//create object of CometChatDate
let date = CometChatDate()
```

</TabItem>
</Tabs>

## Methods

| Methods                              | Type                 | Description                                                                 |
| ------------------------------------ | -------------------- | --------------------------------------------------------------------------- |
| `set(timestamp: Int)`                | Int                  | Used to set time stamp                                                      |
| `set(pattern: CometChatDatePattern)` | CometChatDatePattern | Used to set pattern with different logics _TIME_,_DAY_DATE_,_DAY_DATE_TIME_ |
