---
type: page
title: DropDown Element
listed: true
slug: /interactive-dropdown-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `DropDownElement` class is utilised to create a single selection input element in a user interface.

### Properties

| Name | Type | Description | 
| ---- | --- | ---- | 
| **elementId** | string | Used to set unique ID for the element | 
| **label** | string | Used to set a label for the element |
| **options** | List&lt;OptionElement&gt; | Used to set options for the element |
| **optional** | bool | Used to set optional flag for the element |
| **defaultValue** | String | Used to set default value for the element |

---

### Usage

Here's how to create an instance of the `DropDownElement` class:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
DropdownElement(
    elementId: "Block",
    label: "Select block" ,
    options: [
        OptionElement(label: "A",value: "A" ),
        OptionElement(label: "B",value: "B" ),
    ],
)
```

</TabItem>

</Tabs>
