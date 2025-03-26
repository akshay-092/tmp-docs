---
type: page
title: Button Element
listed: true
slug: /interactive-button-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `ButtonElement` class, inherited from the `BaseInteractiveElement` class, represents an interactive button element that can be added to a chat interface. It comprises of properties like button text and a flag indicating whether the button should be disabled after interaction.

### Parameters

## Button Properties

| Name                       | Type                                        | Description                                                               |
| -------------------------- | ------------------------------------------- | ------------------------------------------------------------------------- |
| **elementId**              | string                                      | A unique identifier for the button element                                |
| **buttonText**             | String                                      | The text to be displayed on the button.                                   |
| **action**                 | [ActionEntity](./interactive-action-entity) | The action to be performed when the button is clicked                     |
| **description**            | String                                      | String description of the button                                          |
| **disableAfterInteracted** | bool                                        | Used to set if the button should be enabled or disabled after interaction |

### Class Usage

How to create an instance of the `ButtonElement` class:
<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let action = URLNavigationAction()
action.url = "https://www.cometchat.com/"

let buttonElement = ButtonElement()
buttonElement.elementId = "id"
buttonElement.buttonText = "About Us"
buttonElement.action = action
```

</TabItem>
</Tabs>

In this example, a new instance of `ButtonElement` is created with an elementId "id", an `URLNavigationAction` as an action, and "About Us" as the button text.
