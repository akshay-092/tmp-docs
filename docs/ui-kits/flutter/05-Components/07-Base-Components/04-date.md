---
sidebar_position: 4
title: Date
slug: /date
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatDate` is a widget which is used to show the date and time. You can also customize the appearance of this widget by modifying its logic.

## How to integrate CometChatDate ?

Since `CometChatDate` is a widget, it can be added directly in the build method. `CometChatDate` includes various parameters to customize its UI.

#### Usage

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatDate(
    date: DateTime.now(),
);
```

</TabItem>

</Tabs>

---

## Properties

| Parameters | Type | Description | 
| ---- | ---- | ---- | 
| **date** | DateTime | Used to set the date | 
| **pattern** | DateTimePattern | Used to set pattern with different logics <br /><br />timeFormat, dayDateFormat, dayDateTimeFormat | 
| **customDateString** | String | text to show instead of date from DateTime object | 
| **style** | [DateStyle](/ui-kit/flutter/date#datestyle) | used to customize the appearance of this widget | 

---

## DateStyle

| Parameters | Type | Description | 
| ---- | ---- | ---- | 
| **textStyle** | TextStyle | Used to set text style of date component | 
| **background** | Color | Used to set the background color | 
| **border** | BoxBorder | used to set border | 
| **borderRadius** | double | used to set the border radius | 
| **height** | double | used to set the height | 
| **width** | double | used to set width | 
| **gradient** | Gradient | used to set a gradient background | 
| **isTransparentBackground** | bool | Used to set background transparent | 
| **contentPadding** | EdgeInsetsGeometry | Used to set content padding | 

---

### Usage

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatDate(
    date: DateTime.now(),
    style: DateStyle(
        backgroundColor: Colors.yellow,
    )
);
```

</TabItem>

</Tabs>

