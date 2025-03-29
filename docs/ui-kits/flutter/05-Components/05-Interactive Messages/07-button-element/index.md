---
type: page
title: Button Element
listed: true
slug: /interactive-button-element
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `ButtonElement` class, inherited from the `BaseInteractiveElement` class, represents an interactive button element that can be added to a chat interface. It comprises of properties like button text and a flag indicating whether the button should be disabled after interaction.

### Constructor

| Action | Description                           | Key                                                                      | 
| ---- |---------------------------------------|--------------------------------------------------------------------------| 
| elementId | String                                | 	A unique identifier for the button element                              | 
| buttonText | String                                | The text to be displayed on the button                                   | 
| action | ActionEntity | The action to be performed when the button is clicked                    | 
| description | String                                | string description of the buttton                                        | 
| disableAfterInteracted | bool                                  | Used to set if the button should be nabled or disabled after interaction | 

---

### Class Usage

How to create an instance of the `ButtonElement` class:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
ButtonElement(
    elementId : "aboutUs",
    buttonText: "About Us" ,
    action: URLNavigationAction(
        url: "https://www.cometchat.com/"
    )
)
```

</TabItem>

</Tabs>

In this example, a new instance of `ButtonElement` is created with an elementId "aboutUs", an `URLNavigationAction` as an action, and "About Us" as the button text.

