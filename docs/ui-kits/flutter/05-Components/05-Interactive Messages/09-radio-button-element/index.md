---
type: page
title: Radio Button Element
listed: true
slug: /interactive-radio-button-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `RadioButtonElement` class is utilised to create a single selection input element in a user interface.

| Name | Type | Description | 
| ---- | --- | ---- | 
| **elementId** | string | Used to set unique ID for the element | 
| **label** | string | Used to set a label for the element |
| **options** | List&lt;OptionElement&gt; | Used to set options for the element |
| **optional** | bool | Used to set optional flag for the element |
| **defaultValue** | String | Used to set default value for the element |

---

### Class Usage

Here's how to create an instance of the `RadioButtonElement` class:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
RadioButtonElement(
    elementId: "gender", 
    label: "Gender", 
    options: [
        OptionElement(label: "Male",value: "Male" ),
        OptionElement(label: "Female",value: "Female" ),
    ]
)
```

</TabItem>

</Tabs>
