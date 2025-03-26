---
sidebar_position: 1
title: Users with Messages
slug: /users-with-messages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

<!-- Component description -->

`CometChatUsersWithMessages` is a [Composite Component](/ui-kit/ios/components-overview#composite-components) that seamlessly merges the functionalities of both the [Users](/ui-kit/ios/users)
and [Messages](/ui-kit/ios/messages) modules. It empowers users to effortlessly navigate to any individual's chat window by simply clicking on their respective **list item** in the user list.

Additionally, `CometChatUsersWithMessages` inherits and encompasses all attributes available within the `CometChatUsers` module, ensuring a comprehensive user experience.

![](../../assets/uwm_overview_screens.png)

<!-- ![](../../assets/conversationswithmessages_overview_screens.png) -->

<!-- ![](../assets/ue7i3xnfyfd3a5nyxntynzk0pfylhntrurzazqlkoocvhx6scs46ncs7pa4rkk8d.png) -->

| Components                       | Description                                                                                                                                                                                                                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Users](/ui-kit/ios/users)       | `Users` serves as a standalone component designed to establish a screen displaying a list of `users`, providing them with the capability to search for specific individuals. This component operates as a container, inheriting from `CometChatListBase`, and serves as a wrapper for the `CometChatUserList` component. |
| [Messages](/ui-kit/ios/messages) | `Messages` presents the chat interface for both individual `users` and `group` entities. It exhibits a message list containing all interactions where the loggedInUser has sent or received messages from any of these entities.                                                                                         |

## Usage

### Integration

Since `CometChatUsersWithMessages` is a view controller, it can be launched either by a button click or through any event's trigger. It inherits all the customizable properties and methods of `CometChatUsers.`

**View Controller**: To use **CometChatUsersWithMessages** in your `view controller`, use the following code snippet.

```swift title="view controller"
let cometChatUsersWithMessages = CometChatUsersWithMessages()
let naviVC = UINavigationController(rootViewController: cometChatUsersWithMessages)
self.present(naviVC, animated: true)
```

---

### Actions

[Actions](/ui-kit/ios/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. SetOnItemClick

The `setOnItemClick` method is used to override the onClick behavior in **CometChatUsersWithMessages**.
By default, this action has a predefined behavior which navigates to the **messages**. However, you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>

<TabItem value="swift" label="Swift">

```swift
let cometChatUsersWithMessages = CometChatUsersWithMessages()
    .setOnItemClick { user, indexPath in
        //Perform Your Actions
}
```

</TabItem>

</Tabs>

##### 2. SetOnItemLongClick

This method `setOnItemLongClick`, empowers users to customize long-click actions within **CometChatUsersWithMessages**, offering enhanced functionality and interaction possibilities.

<Tabs>

<TabItem value="swift" label="Swift">
```swift
let cometChatUsersWithMessages = CometChatUsersWithMessages()
    .setOnItemLongClick { user, indexPath in
         //Perform Your Actions
}

```
</TabItem>

<TabItem value="" label="">

```

````

</TabItem>

</Tabs>

##### 3. SetOnBack

This method allows users to override the onBack Pressed behavior in **CometChatUsersWithMessages** by utilizing the `setOnBack` , providing customization options for handling the back action.

By default, this action has a predefined behavior: it simply dismisses the current view controller.
However, the flexibility of CometChat UI Kit allows you to override this standard behavior according to your application's specific requirements. You can define a custom action that will be performed instead when the back button is pressed.

<Tabs>

<TabItem value="swift" label="Swift">
```swift
let cometChatUsersWithMessages = CometChatUsersWithMessages()
    .setOnBack {
    //Perform Your Actions
}
````

</TabItem>

<TabItem value="" label="">

```

```

</TabItem>

</Tabs>

##### 4. onError

This method `setOnError`, allows users to override error handling within **CometChatUsersWithMessages**, providing greater control over error responses and actions.

<Tabs>

<TabItem value="swift" label="Swift">
```swift 
let cometChatUsersWithMessages = CometChatUsersWithMessages()
    .setOnError { error in
    //Perform Your Action
}
           
```
</TabItem>

<TabItem value="" label="">

```

```

</TabItem>

</Tabs>

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

While the UsersWithMessages component does not have filters, its components do, For more detail on individual filters of its component refer to [Users Filters](/ui-kit/ios/users)[ Messages Filters](/ui-kit/ios/messages)

By utilizing the [Configurations](#configurations) object of its components, you can apply filters.

In the following **example**, we're sorting `Users` by `UID's` and setting the `limit` to 10 using the `usersRequestBuilder`.

<Tabs>

<TabItem value="swift" label="Swift">
```swift title=""
let usersRequestBuilder = UsersRequest.UsersRequestBuilder(limit: 20).set(UIDs: ["emma-uid"])
                        
let cometChatUsersWithMessages = CometChatUsersWithMessages(usersRequestBuilder: usersRequestBuilder)
let naviVC = UINavigationController(rootViewController: cometChatUsersWithMessages)
self.present(naviVC, animated: true)
````

</TabItem>

</Tabs>

:::tip
make sure to `import CometChatSDK`
:::

---

### Events

[Events](/ui-kit/ios/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The `UsersWithMessages` does not produce any events but its component does.

---

## Customization

To fit your app's design requirements, you have the ability to customize the appearance of the
UsersWithMessages component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using **Style** you can **customize** the look and feel of the component in your app, These parameters typically control elements such as the **color**, **size**, **shape**, and **fonts** used within the component.

##### 1. UsersWithMessages Style <a data-tooltip-id="my-tooltip-002-html-prop"> <span class="material-icons red">report</span> </a>

<Tooltip
  id="my-tooltip-002-html-prop"
  html="Not available "
/>

You can set the `UsersWithMessagesStyle` to the `UsersWithMessages` Component to customize the styling.

**Example**

<Tabs>

<TabItem value="swift" label="Swift">

```swift
 let usersWithMessagesStyle = UsersWithMessagesStyle()
    .set(messageTextColor: .red)
    .set(messageTextFont: .italicSystemFont(ofSize: 6))
    .set(background: .yellow)
    .set(borderColor: .green)

let usersWithMessagesConfiguration = UsersWithMessagesConfiguration()
    .set(style: usersWithMessagesStyle)

let cometChatUsersWithMessages = CometChatUsersWithMessages()
```

</TabItem>

</Tabs>

You can also customize its component styles. For more details on individual component styles, you can refer [Users Styles](/ui-kit/ios/users) and [Messages Styles](/ui-kit/ios/messages).

Styles can be applied to SubComponents using their respective configurations.

### Functionality

These are a set of **small functional customizations** that allow you to **fine-tune** the overall experience of the component. With these, you can **change text**, set **custom icons**, and toggle the **visibility** of UI elements.

UsersWithMessages component does not have any available functionality.

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your own views, layouts, and UI elements and then incorporate those into the component.

By utilizing the [Configuration](#configurations) object of each component, you can apply advanced-level customizations to the `UsersWithMessages`.

**Example**

```swift
// Create an object of UsersConfiguration
let usersConfiguration = UsersConfiguration()

//pass your custom error view
usersConfiguration.set(errorView: UIView)

```

**Usage**

Utilize the provided code snippet to instantiate a `CometChatUsersWithMessages` component and configure it with a `UsersConfiguration` object. This ensures seamless integration and optimal functionality within your application.

```swift
 let cometChatUsersWithMessages = CometChatUsersWithMessages()
    .set(usersConfiguration: usersConfiguration)
```

To find all the details on individual Component advance customization you can refer, [Users Advance](/ui-kit/ios/users#advanced) and [Messages Advance](/ui-kit/ios/messages#advanced).

UsersWithMessages uses advanced-level customization of both Users & Messages components to achieve its default behavior.

1. UsersWithMessages utilizes the [SetMenu](/ui-kit/ios/users) function of the `Users` subcomponent to navigate the [User](/ui-kit/ios/users) to [Messages](/ui-kit/ios/messages)

![](../../assets/uwm_advanced_2_screens.png)

   <!-- ![](./assets/667f712fe26bdd2a33b04fb0a12d9111770ee913.png) -->

2. UsersWithMessages utilizes the [SetMenu](/ui-kit/ios/users) function of the `Messages` subcomponent to navigatefrom [Messages](/ui-kit/ios/messages) to Details.

![](../../assets/uwm_advanced_1_screens.png)

   <!-- ![](./assets/977adb9c2c5d3ee2c739c48161717b77af491031.png) -->

:::warning

When you override `.setMenu()`, the default behavior of **UsersWithMessages** will also be overridden.

:::

## Configurations

[Configurations](/ui-kit/ios/components-overview#configurations) offer the ability to customize the properties of each component within a Composite Component.

**UsersWithMessages** has `Users` and `Messages` component. Hence, each of these components will have its individual `Configuration``.

- `Configurations` expose properties that are available in its individual components.

#### Users

You can customize the properties of the Users component by making use of the UsersConfiguration. You can accomplish this by employing the `.set(usersConfiguration: usersConfiguration)` method as demonstrated below:

<Tabs>

<TabItem value="swift" label="Swift">

```swift
let usersConfiguration = UsersConfiguration()
```

</TabItem>

</Tabs>

**Usage**

The **UsersConfiguration** is utilized within a widget housing `CometChatUsersWithMessages` as a child component. To configure CometChatUsersWithMessages, simply provide the usersConfiguration object using the `.set(usersConfiguration:)` method. This facilitates seamless customization and integration of user-specific settings within the `CometChatUsersWithMessages` component.

```swift
let cometChatUsersWithMessages = CometChatUsersWithMessages()
    .set(usersConfiguration: usersConfiguration)
```

All exposed properties of `UsersConfiguration` can be found under [Users](/ui-kit/ios/users). Properties marked with the <a data-tooltip-id="my-tooltip-html-prop"><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object.

**Example**

Let's say you want to change the style of the Users subcomponent and, in addition, you only want to display users with offline status.

You can modify the style using the `UsersStyle` method and filter the list with the `UsersRequestBuilder` method.

![](../../assets/uwm_config_users_screens.png)

<!-- ![](./assets/dfdd434216d95ebff282d038beb5b93520aba5c6.png) -->

<Tabs>

<TabItem value="swift" label="Swift">
```swift title=""
let usersStyle = UsersStyle()
    .set(background: .lightGray.withAlphaComponent(0.8))
        
let listItemStyle = ListItemStyle()
    .set(background: .lightGray.withAlphaComponent(0.4))
        
let usersRequestBuilder = UsersRequest.UsersRequestBuilder(limit: 5).set(status: .offline)

let cometChatUsersWithMessages = CometChatUsersWithMessages(usersRequestBuilder: usersRequestBuilder)
.set(listItemStyle: listItemStyle)
cometChatUsersWithMessages.set(usersStyle: usersStyle)

let naviVC = UINavigationController(rootViewController: cometChatUsersWithMessages)
self.present(naviVC, animated: true)

````

</TabItem>

</Tabs>

:::tip
make sure to `import CometChatSDK`
:::

---

#### Messages

You can customize the properties of the Messages component by making use of the `messagesConfiguration`. You can accomplish this by employing the `messagesConfiguration` as demonstrated below:

<Tabs>

<TabItem value="swift" label="Swift">

```swift
let messagesConfiguration = MessagesConfiguration()

```

</TabItem>

</Tabs>
All exposed properties of `MessagesConfiguration` can be found under [Messages](/ui-kit/ios/messages). Properties marked with the <a data-tooltip-id="my-tooltip-html-prop"><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object.

**Example**

Let's say you want to change the style of the Messages subcomponent and, in addition, you want to hide message composer.

You can modify the style using the `messagesStyle` method and hide using `hide(messageComposer: bool)` method.
![](../../assets/uwm_config_messages_screens.png)

<Tabs>

<TabItem value="swift" label="Swift">
```swift title=""
let cometChatCornerStyle = CometChatCornerStyle.init(cornerRadius: 15)

let messagesStyle = MessagesStyle()
    .set(cornerRadius: cometChatCornerStyle)
    .set(borderColor: .systemPurple)
    .set(borderWidth: 2)

let messagesConfiguration = MessagesConfiguration()
    .set(messagesStyle: messagesStyle)
    .hide(messageComposer: true)

let cometChatUsersWithMessages = CometChatUsersWithMessages()
    .hide(search: true)
    .set(messagesConfiguration: messagesConfiguration)
````

</TabItem>

</Tabs>

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available"
/>
