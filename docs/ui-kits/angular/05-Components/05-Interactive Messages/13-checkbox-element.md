---
sidebar_position: 13
title: Checkbox Element
slug: /interactive-checkbox-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `CheckboxElement` class aids in creating checkbox input elements in a user interface.

### Constructor

| Name      | Type                   | Description                                                 |
| --------- | ---------------------- | ----------------------------------------------------------- |
| elementId | `string`               | This property in constructor accepts the Id for the element |
| label     | `string`               | This property in constructor accepts the label for checkbox |
| options   | `Array<OptionElement>` | This property in constructor accepts options for checkbox   |

### Class Usage

Here's how to create an instance of the `CheckboxElement` class:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
let option1 = new OptionElement("Option 1", "1");

let option2 = new OptionElement("Option 2", "2");

let optionsList = [option1, option2];

let checkboxElement = new CheckboxElement("1", "Choose options", optionsList);
```

</TabItem>
</Tabs>

In this example, a new instance of `CheckboxElement` is created with an elementId "1", a label "Choose options", and a list of two options.

### Key Properties and Methods

#### Default Value of the Input Element

The `setDefaultValue()` method sets the default value(s) in the checkbox input, while the `getDefaultValue()` retrieves it.

For example:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
checkboxElement.setDefaultValue(["1", "2"]);
```

</TabItem>
</Tabs>

#### Example

Here is an example that showcases the creation and manipulation of an instance of `CheckboxElement`:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
// Create some options

let option1 = new OptionElement("Option 1", "1");

let option2 = new OptionElement("Option 2", "2");

let optionsList = [option1, option2];

// Create a new instance of CheckboxElement

let checkboxElement = new CheckboxElement("1", "Choose options", optionsList);

// Set and get the default value

checkboxElement.setDefaultValue(["1", "2"]);
```

</TabItem>
</Tabs>
