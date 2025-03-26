---
sidebar_position: 1
title: Overview
slug: /components-overview
---

CometChat's **UI Kit** is a set of pre-built UI components that allows you to easily craft an in-app chat with all the essential messaging features.

## Actions

Actions direct the operational behavior of a component. They are split into two categories: Predefined Actions and User-Defined Actions.

### Predefined Actions

These are actions that are inherently programmed into a UI component. They are ingrained in the component itself by default, and they execute automatically in response to user interaction, without needing any additional user input.

### User-Defined Actions

These are actions that must be explicitly specified by the user. They are not innately part of the component like predefined actions. Instead, they must be developed based on the unique needs of the user or the application. User-defined actions provide adaptability and allow for the creation of custom behaviors that align with the individual needs of the application.

To customize the behavior of a component, actions can be overridden by you. This provides you with control over how the component responds to specific events or interactions.

All components expose actions to the user, which means that users can interact with these types of components through predefined or user-defined actions.

---

## Events

Events allow for a decoupled, flexible architecture where different parts of the application can interact without having to directly reference each other. This makes it easier to create complex, interactive experiences, as well as to extend and customize the functionality provided by the CometChat UI Kit.

All Components have the ability to emit events. These events are dispatched in response to certain changes or user interactions within the component. By emitting events, these components allow other parts of the application to react to changes or interactions, thus enabling dynamic and interactive behavior within the application.
