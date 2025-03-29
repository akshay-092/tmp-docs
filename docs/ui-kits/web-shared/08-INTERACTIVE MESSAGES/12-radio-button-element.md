---
sidebar_position: 12
title: Radio Button Element
slug: /radio-button-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `RadioButtonElement` class is designed to create a radio button input element in a user interface.

### Constructor

| Name | Type | Description | 
| ---- | ---- | ---- | 
| elementId | `string` | This property in constructor accepts the Id for the element | 
| label | `string` | This property in constructor accepts the label for radio | 
| options | `Array<OptionElement>` | This property in constructor accepts options for radio | 


### Class Usage

Here's how to create an instance of the `RadioButtonElement` class:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
let option1 = new OptionElement("Option 1", "1");

let option2 = new OptionElement("Option 2", "2");

let optionsList = [option1, option2];

let radioButtonElement = new RadioButtonElement("1", "Choose an option", optionsList);
```

</TabItem>
</Tabs>

In this example, a new instance of `RadioButtonElement` is created with an elementId "1", a label "Choose an option", and a list of two options.

### Key Properties and Methods

#### Default Value of the Input Element

The `setDefaultValue()` method sets the default value in the radio button input, while the `getDefaultValue()` retrieves it.

For example:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
radioButtonElement.setDefaultValue("1");
```

</TabItem>
</Tabs>

### Example

Here is an example that showcases the creation and manipulation of an instance of `RadioButtonElement`:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
// Create some options

let option1 = new OptionElement("Option 1", "1");

let option2 = new OptionElement("Option 2", "2");

let optionsList = [option1, option2];

// Create a new instance of RadioButtonElement

let radioButtonElement = new RadioButtonElement("1", "Choose an option", optionsList);

// Set and get the default value

radioButtonElement.setDefaultValue("1");
```

</TabItem>
</Tabs>
