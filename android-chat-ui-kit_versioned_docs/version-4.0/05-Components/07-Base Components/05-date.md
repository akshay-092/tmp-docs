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
<TabItem value="xml" label="XML">

```xml
<com.cometchat.chatuikit.shared.views.CometChatDate.CometChatDate
            android:id="@+id/txt_message_date"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
           />
```

</TabItem>
</Tabs>



## Methods

| Methods | Type | Description | 
| ---- | ---- | ---- | 
| **setDate** | long,String | This method accept two parameters, time stamp in sec and date format in which you want to display time | 
| **setPattern** | Pattern | Used to set pattern with different logics _TIME_,_DAY_DATE_,_DAY_DATE_TIME_ | 
| **setCustomDateString** | String | text to show instead of date from DateTime object | 
| **setStyle** | DateStyle | used to customize the appearance of this widget | 


## DateStyle

| Methods | Type | Description | 
| ---- | ---- | ---- | 
| **setTextAppearance** | TextStyle | Used to set text style of date component | 
| **setBackground** | Color | Used to set the background color | 
| **setBorderWidth** | BoxBorder | used to set border | 
| **setCornerRadius** | double | used to set the corner radius | 
| **setBackground** | Drawable | used to set a Drawable background | 


### Usage

<Tabs>
<TabItem value="java" label="Java">

```java
CometChatDate date=view.findViewById(R.id.date);
date.setStyle(new DateStyle().setTextAppearance(R.style.TextAppearance_AppCompat));
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val date: CometChatDate = view.findViewById(R.id.date)
date.setStyle(DateStyle().setTextAppearance(R.style.TextAppearance_AppCompat))
```

</TabItem>
</Tabs>
