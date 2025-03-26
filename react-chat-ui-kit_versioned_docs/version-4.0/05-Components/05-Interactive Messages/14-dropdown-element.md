---
sidebar_position: 14
title: DropdownElement
slug: /interactive-dropdown-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `DropdownElement` class is used to create a dropdown selection element in a user interface.

### Constructor

| Name      | Type                   | Description                                                 |
| --------- | ---------------------- | ----------------------------------------------------------- |
| elementId | `string`               | This property in constructor accepts the Id for the element |
| label     | `string`               | This property in constructor accepts the label for dropDown |
| options   | `Array<OptionElement>` | This property in constructor accepts options for dropDown   |

### Class Usage

Here's an example of how you can create an instance of the `DropdownElement` class:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
let option1 = new OptionElement("Option 1", "1");

let option2 = new OptionElement("Option 2", "2");

let optionsList = [option1, option2];

let dropdownElement = new DropdownElement("1", "Choose an option", optionsList);
```

</TabItem>
</Tabs>

In this example, a new instance of `DropdownElement` is created with an elementId "1", a label "Choose an option", and a list of two options.

### Key Properties and Methods

#### Default Value of the Input Element

The `setDefaultValue()` method sets the default value in the dropdown input, while the `getDefaultValue()` retrieves it.

For example:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
dropdownElement.setDefaultValue("1");
```

</TabItem>
</Tabs>

### Example

Here is an example that showcases the creation and manipulation of an instance of `DropdownElement`:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
// Create some options

let option1 = new OptionElement("Option 1", "1");

let option2 = new OptionElement("Option 2", "2");

let optionsList = [option1, option2];

// Create a new instance of DropdownElement

let dropdownElement = new DropdownElement("1", "Choose an option", optionsList);

// Set and get the default value

dropdownElement.setDefaultValue("1");
```

</TabItem>
</Tabs>
