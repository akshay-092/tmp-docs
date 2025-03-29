---
sidebar_position: 5
title: Element Entity
slug: /interactive-element-entity
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is the base class for every element possible in the Interactive message component, defined by cometchat

Following are the different elements possible

1. [Label Element](./interactive-label-element) - shows fixed text in an Interactive message
2. [TextInput Element](./interactive-textinput-element) - shows a component with the ability to take text input
3. [DropDown Element](./interactive-dropdown-element) - shows a list of options to choose one from
4. [Checkbox Element](./interactive-checkbox-element) - shows a list of checkboxes, and can select multiple
5. [Single Select Element](./interactive-single-select-element) - show a list of options to choose one from, a different way to show radio buttons
6. [Radio Button Element](./interactive-radio-button-element) - shows a list of radio buttons, to choose one answer from
7. [Button Element](./interactive-button-element) - shows an interactive button component, that can perform different types of actions defined inside class ActionEntity

<br></br>
ElementType specifies the type of interactive element.

| Name         | Description                       |
| ------------ | --------------------------------- |
| label        | An unmodifiable text description. |
| text         | A text input field.               |
| dropdown     | A dropdown menu.                  |
| checkbox     | A checkbox input.                 |
| radio        | A radio button input.             |
| button       | An interactive button.            |
| singleSelect | A single-selection menu.          |
