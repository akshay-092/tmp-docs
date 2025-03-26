---
sidebar_position: 11
title: Single Select Element
slug: /interactive-single-select-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `SingleSelectElement` class is utilised to create a single selection input element in a user interface.

### Constructor

| Name      | Type                   | Description                                                     |
| --------- | ---------------------- | --------------------------------------------------------------- |
| elementId | `string`               | This property in constructor accepts the Id for the element     |
| label     | `string`               | This property in constructor accepts the label for singleSelect |
| options   | `Array<OptionElement>` | This property in constructor accepts options for singleSelect   |

### Class Usage

Here's how to create an instance of the `SingleSelectElement` class:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
let option1 = new OptionElement("Option 1", "1");

let option2 = new OptionElement("Option 2", "2");

let optionsList = [option1, option2];

let singleSelectElement = new SingleSelectElement(
  "1",
  "Choose an option",
  optionsList
);
```

</TabItem>
</Tabs>

In this example, a new instance of `SingleSelectElement` is created with an elementId "1", a label "Choose an option", and a list of two options.

### Key Properties and Methods

#### Default Value of the Input Element

The `setDefaultValue()` method sets the default value in the single select input, while the `getDefaultValue()` retrieves it.

For example:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
singleSelectElement.setDefaultValue("1");
```

</TabItem>
</Tabs>

### Example

Here is an example that showcases the creation and manipulation of an instance of `SingleSelectElement`:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
// Create some options

let option1 = new OptionElement("Option 1", "1");

let option2 = new OptionElement("Option 2", "2");

let optionsList = [option1, option2];

// Create a new instance of SingleSelectElement

let singleSelectElement = new SingleSelectElement(
  "1",
  "Choose an option",
  optionsList
);

// Set and get the default value

singleSelectElement.setDefaultValue("1");
```

</TabItem>
</Tabs>
