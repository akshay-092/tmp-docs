---
sidebar_position: 9
title: Text Input Element
slug: /interactive-textinput-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The TextInputElement class is used to create a text input element in a user interface.

## Constructor

| Name      | Type   | Description                                                 |
| --------- | ------ | ----------------------------------------------------------- |
| elementId | string | This property in constructor accepts the ID for the element |
| label     | string | This property in constructor accepts the label for input    |

## Class Usage

How to create an instance of the TextInputElement class:

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
let inputElement = new TextInputElement("1", "Name");
```

</TabItem>

</Tabs>

In the above example, a new instance of TextInputElement is created with the elementId "1" and the label "Name".

## Key Properties and Methods

### Maximum Lines for Text Input

The setMaxLines() method is used to set the maximum number of lines for a multi-line text input element, while getMaxLines() is used to retrieve the set value.

For example:

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
let inputElement = new TextInputElement("1", "Name");
inputElement.setMaxLines(1); //set max lines
```

</TabItem>

</Tabs>

### Placeholder Text for the Input Element

The setPlaceholder() method is used to set placeholder text in the input field and getPlaceholder() is used to retrieve the placeholder text.

For instance:

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
let inputElement = new TextInputElement("1", "Name");
inputElement.setPlaceholder("Enter your name");
```

</TabItem>

</Tabs>

### Default Value of the Input Element

The setDefaultValue() method sets the default value in the text input, while getDefaultValue() retrieves the default value.

For example:

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
let inputElement = new TextInputElement("1", "Name");
inputElement.setDefaultValue("John Doe");
```

</TabItem>

</Tabs>

## Example

Below is an example that showcases the creation and manipulation of an instance of TextInputElement:

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
// Import the class
import { TextInputElement } from "./TextInputElement";

// Create a new instance of the class
let inputElement = new TextInputElement("1", "Name");

// Set the max lines
inputElement.setMaxLines(1);

// Set the placeholder text
inputElement.setPlaceholder("Enter your name");

// Set the default value
inputElement.setDefaultValue("John Doe");
```

</TabItem>

</Tabs>
