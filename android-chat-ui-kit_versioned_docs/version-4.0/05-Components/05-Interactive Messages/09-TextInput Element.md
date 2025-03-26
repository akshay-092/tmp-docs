---
sidebar_position: 9
title: TextInput Element
slug: /interactive-textinput-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `TextInputElement` class is used to create a text input element in a user interface.

### Constructor

| Name      | Type   | Description                                                 |
| --------- | ------ | ----------------------------------------------------------- |
| elementId | string | This property in constructor accepts the Id for the element |
| label     | string | This property in constructor accepts the label for input    |

### Class Usage

How to create an instance of the `TextInputElement` class:

<Tabs>
<TabItem value="java" label="Java">

```java
TextInputElement inputElement = new TextInputElement("1", "Name");
```

</TabItem>
</Tabs>

In the above example, a new instance of `TextInputElement` is created with the elementId "1" and the label "Name".

### Key properties and methods

#### Maximum Lines for Text Input

The `setMaxLines()` method is used to set the maximum number of lines for a multi-line text input element, while `getMaxLines()` is used to retrieve the set value.

For example:

<Tabs>
<TabItem value="java" label="Java">

```java
TextInputElement inputElement = new TextInputElement("1", "Name");
inputElement.setMaxLines(1);//set max lines
```

</TabItem>
</Tabs>

#### Placeholder Text for the Input Element

The `setPlaceholder()` method is used to set placeholder text in the input field and `getPlaceholder()` is used to retrieve the placeholder text.

For instance:

<Tabs>
<TabItem value="java" label="Java">

```java
inputElement.setPlaceHolder(new PlaceHolder("write your name here");
```

</TabItem>
</Tabs>

#### Default Value of the Input Element

The `setDefaultValue()` method sets the default value in the text input, while `getDefaultValue()` retrieves the default value.

For example:

<Tabs>
<TabItem value="java" label="Java">

```java
inputElement.setDefaultValue("John Doe");
```

</TabItem>
</Tabs>

### Example

Below is an example that showcases the creation and manipulation of an instance of `TextInputElement`:

<Tabs>
<TabItem value="java" label="Java">

```java
// Create a new instance of the class
TextInputElement inputElement = new TextInputElement("1", "Name");

// Set the max lines
inputElement.setMaxLines(1);

// Set the placeholder text
inputElement.setPlaceHolder(new PlaceHolder("write your name here");

// Set the default value
inputElement.setDefaultValue("John Doe");
```

</TabItem>
</Tabs>
