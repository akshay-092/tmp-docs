---
sidebar_position: 1
title: Status Indicator
slug: /status-indicator
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatStatusIndicator` is a component which indicates whether user is online or offline. You can customize the `border` and `background color` of this component.

![](assets/1644912063.gif)

## How to integrate CometChatStatusIndicator?

Since `CometChatStatusIndicator` is a stateless widget, it can be added directly in the build method. `CometChatStatusIndicator` includes various parameters to customize its UI.

---

#### Usage

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatStatusIndicator(
    backgroundColor: Colors.green,
);
```

</TabItem>

</Tabs>

---

## Properties

| Parameters | Type | Description | 
| ---- | ---- | ---- | 
| **backgroundImage** | Widget | used to set the icon in status indicator | 
| **backgroundColor** | Color | used to set the background color of the status indicator | 
| **style** | [StatusIndicatorStyle](/ui-kit/flutter/status-indicator) | used to set border of custom style | 

---

## StatusIndicatorStyle

| Parameters | Type | Description | 
| ---- | ---- | ---- | 
| **borderRadius** | double | used to set the border radius | 
| **height** | double | used to set the height | 
| **width** | double | used to set width | 
| **border** | BoxBorder | used to set border of status indicator | 
| **gradient** | Gradient | used to set a gradient background | 

---

## Usage

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatStatusIndicator(
    backgroundColor: Colors.pink,
    style: StatusIndicatorStyle(
        borderRadius: 24,
        width: 20,
        height: 20,
    )
);
```

</TabItem>

</Tabs>

