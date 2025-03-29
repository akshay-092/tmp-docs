---
sidebar_position: 22
title: Single Select
slug: /single-select
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `CometChatSingleSelect` component is a customizable Single Select component that allows you to choose one option from a list of box-structured options.

While this design allows an intuitive interaction similar to radio buttons, its unique box-style presentation provides a distinctive user experience. If only two options are provided, they are displayed side-by-side. For more than two options, they are displayed vertically.

## Attributes

| Properties | Type | Description | 
| ---- | ---- | ---- | 
| **theme** | CometChatTheme | used to configure a customs theme for this widget. | 
| **decoration** | Decoration | used to set decoration for the container. | 
| **optionBackground** | Color | used to set the background of non selected options. | 
| **selectedOptionBackground** | Color | used to set the background of selected options. | 
| **optionTextStyle** | TextStyle | used to set text style for non selected options. | 
| **selectedOptionsTextStyle** | TextStyle | used to set text style for selected options. | 
| **onChanged** | List&lt;OptionElement&gt; | callback called when any option is selected. | 
| **options** | Color | used to set options. | 
| **selectedValue** | String | used to set predefined set value. | 

---

## Usage

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatSingleSelect(
    options: [
        OptionElement(value: "m", label: "Male"),
        OptionElement(value: "f", label: "Female")
    ],
    selectedOptionBackground: Colors.black,
    onChanged: (String value) {
        // TODO("Not yet implemented")
    },
)
```

</TabItem>

</Tabs>



