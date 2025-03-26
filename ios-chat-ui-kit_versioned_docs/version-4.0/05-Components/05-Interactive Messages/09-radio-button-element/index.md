---
type: page
title: Radio Button Element
listed: true
slug: /interactive-radio-button-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `RadioButtonElement` class is utilised to create a single selection input element in a user interface.

### Parameters

| Name             | Type              | Description                                  |
| ---------------- | ----------------- | -------------------------------------------- |
| **elementId**    | `string`          | Used to set a unique ID for the element      |
| **label**        | `string`          | Used to set a label for the element          |
| **options**      | `[OptionElement]` | Used to set options for the element          |
| **optional**     | `bool`            | Used to set an optional flag for the element |
| **defaultValue** | `String`          | Used to set a default value for the element  |

### Class Usage

Here's how to create an instance of the `RadioButtonElement` class:
<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let optionElement = OptionElement()
optionElement.id = "Male"
otionElement.value = "Male"
let radioButtonElement = RadioButtonElement()
radioButtonElement.elementId = "gender"
radioButtonElement.label = "Gender"
radioButtonElement.options.append(optionElement)
```

</TabItem>
</Tabs>
