---
sidebar_position: 1
title: Overview
slug: /components-overview
---

CometChat's **UI Kit** is a set of pre-built UI components that allows you to easily craft an in-app chat with all the essential messaging features.

## Type of Components

UI components based on the behaviour and functionality can be categorized into three types: Base Components, Components, and Composite Components.

### Base Components

Base Components form the building blocks of your app's user interface (UI). They focus solely on presenting visual elements based on input data, without handling any business logic. These components provide the foundational appearance and behavior for your UI.

### Components

Components build upon Base Components by incorporating business logic. They not only render UI elements but also manage data loading, execute specific actions, and respond to events. This combination of visual presentation and functional capabilities makes Components essential for creating dynamic and interactive UIs.

### Composite Components

Composite Components are advanced UI elements that combine multiple Components or other Composite Components to achieve complex functionality. By layering components together, Composite Components offer a sophisticated and flexible approach to designing UIs. They enable diverse functionalities and interactions, making them versatile tools for creating rich user experiences.

## Actions

Actions direct the operational behavior of a component. They are split into two categories: Predefined Actions and User-Defined Actions.

### Predefined Actions

These are actions that are inherently programmed into a UI component. They are ingrained in the component itself by default, and they execute automatically in response to user interaction,without needing any additional user input.

### User-Defined Actions

These are actions that must be explicitly specified by the user. They are not innately part of the component like predefined actions. Instead, they must be developed based on the unique needs of the user or the application. User-defined actions provide adaptability and allow for the creation of custom behaviors that align with the individual needs of the application.

To customize the behavior of a component, actions must be overridden by the user. This provides the user with control over how the component responds to specific events or interactions.

Both Components and Composite Components expose actions to the user, which means that users can interact with these types of components through predefined or user-defined actions. On the other hand, Base Components do not expose actions to the user as they are the foundational building blocks mainly responsible for rendering the user interface and do not carry any business logic or actions.

## Events

Events allow for a decoupled, flexible architecture where different parts of the application can interact without having to directly reference each other. This makes it easier to create complex, interactive experiences, as well as to extend and customize the functionality provided by the CometChat UI Kit.

Both Components and Composite Components have the ability to emit events. These events are dispatched in response to certain changes or user interactions within the component. By emitting events, these components allow other parts of the application to react to changes or interactions, thus enabling dynamic and interactive behavior within the application.

## Configurations

Configurations offer the ability to customize the properties of each individual component within a Composite Component. If a Composite Component includes multiple components, each of these components will have its own set of properties that can be configured. This means multiple sets of configurations are available, one for each constituent component. This allows for fine-tuned customization of the Composite Component, enabling you to tailor its behavior and appearance to match specific requirements in a granular manner.
