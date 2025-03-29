---
sidebar_position: 10
title: Label Element
slug: /interactive-label-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The LabelElement class enables the creation of a label element in a user interface.

## Constructor

| Name      | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| elementId | string | Accepts the ID for the element in the constructor |
| label     | string | Accepts the text for label in the constructor     |

## Class Usage

Here's an example of how you can create an instance of the LabelElement class:

In this example, a new instance of LabelElement is created with the elementId "1" and the label text "Username".

## Example

Here is an example that showcases the creation and manipulation of an instance of LabelElement:
For example:

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
// Create a new instance of the class

const elementId = "1";
const label = "Username";
let labelElement = new LabelElement(elementId, label);
```

</TabItem>

</Tabs>

In this example, a new instance of LabelElement is created, the display text is retrieved and logged, and finally, a new LabelElement instance is made from a JSON object and its display text is retrieved and logged.
