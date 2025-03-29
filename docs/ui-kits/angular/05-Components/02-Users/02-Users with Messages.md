---
sidebar_position: 2
title: Users with Messages
slug: /users-with-messages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The UsersWithMessages is a [Composite Component](/ui-kit/angular/components-overview#components) encompassing components such as [Users](./users) and [Messages](./messages). Both of these component contributes to the functionality and structure of the overall UsersWithMessages component.

![](../../assets/users_with_messages_overview_web_screens.png)

| Components             | Description                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Users](./users)       | The `Users` component is designed to display a list of `User`. This essentially represents your recent conversation history. |
| [Messages](./messages) | The `Messages` component is designed to manage the messaging interaction for individual `User's` conversations.              |

## Usage

### Integration

<Tabs>
<TabItem value="js" label="app.module.ts">

```javascript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CometChatUsersWithMessages } from "@cometchat/chat-uikit-angular";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, CometChatUsersWithMessages],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

</TabItem>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

  }

  title = 'angular-app';
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-message></cometchat-users-with-message>
</div>
```

</TabItem>
</Tabs>

---

### Actions

[Actions](/ui-kit/angular/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the UserWithMessages component.

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-app';
  public handleOnError = (error: CometChat.CometChatException) => {
    console.log("your custom on error action", error);
  };
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [onError]="handleOnError"
  ></cometchat-users-with-messages>
</div>
```

</TabItem>
</Tabs>

---

The UsersWithMessages component does not have much actions, its components - [Users](/ui-kit/angular/users) and [Messages](/ui-kit/angular/messages) - both have their own set of actions.

The Action of the components can be overridden through the use of the [Configurations](#configurations) object of its components. Here is an example code snippet.

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { UsersConfiguration, MessagesConfiguration, MessageHeaderConfiguration } from '@cometchat/uikit-shared';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public handleOnItemClickUser = (user: CometChat.User) => {
    console.log("your custom on item click action", user);
  };
  public handleOnBack = () => {
    console.log("Your custom on back action");
  }
  public usersConfiguration = new UsersConfiguration({
    onItemClick: this.handleOnItemClickUser
  });
  public messagesConfiguration = new MessagesConfiguration({
    messageHeaderConfiguration: new MessageHeaderConfiguration({
      onBack:this.handleOnBack
    })
  });
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [usersConfiguration]="usersConfiguration"
    [messagesConfiguration]="messagesConfiguration"
  ></cometchat-users-with-messages>
</div>
```

</TabItem>
</Tabs>

---

The UsersWithMessages component overrides several actions from its components to reach its default behavior. The list of actions overridden by UsersWithMessages includes:

- [OnItemClick](/ui-kit/angular/users#2-onitemclick) : By overriding the `OnItemClick` of the Users Component, UsersWithMessages achieves navigation from [Users](/ui-kit/angular/users) to [Messages](/ui-kit/angular/messages) component.
  ![](../../assets/users_with_messages_onitemclick_web_screens.png)

  ### Fliters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

While the UsersWithMessages component does not have filters, its components do, For more detail on individual filters of its component refer to [Users Filters](/ui-kit/angular/users#filters) and [Messages Filters](/ui-kit/angular/messages).

By utilizing the [Configurations](#configurations) object of its components, you can apply filters.

In the following **example**, we're sorting `Users` by name and setting the limit to 10 using the `usersRequestBuilder`.

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { UsersConfiguration } from '@cometchat/uikit-shared';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public usersConfiguration = new UsersConfiguration({
    usersRequestBuilder: new CometChat.UsersRequestBuilder().sortBy("name").setLimit(10)
  });
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [usersConfiguration]="usersConfiguration"
  ></cometchat-users-with-messages>
</div>
```

</TabItem>
</Tabs>

---

### Events

[Events](/ui-kit/angular/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The UsersWithMessages does not produce any events but its component does.

---

## Customization

To fit your app's design requirements, you have the ability to customize the appearance of the
UsersWithMessages component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using **Style** you can **customize** the look and feel of the component in your app, These parameters typically control elements such as the **color**, **size**, **shape**, and **fonts** used within the component.

##### 1. UsersWithMessages Style

You can set the `UsersWithMessagesStyle` to the UsersWithMessages Component to customize the styling.

![](../../assets/users_with_messages_style_web_screens.png)

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { WithMessagesStyle } from '@cometchat/uikit-shared';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usersWithMessagesStyle = new WithMessagesStyle({
    background: "#e2d6ff",
    messageTextColor: "#000000",
    borderRadius: "12px",
  });
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [usersWithMessagesStyle]="usersWithMessagesStyle"
  ></cometchat-users-with-messages>
</div>
```

</TabItem>
</Tabs>

---

You can also customize its component styles. For more details on individual component styles, you can refer [Users Styles](/ui-kit/angular/users#style) and [Messages Styles](/ui-kit/angular/messages#1-messages-style).

Styles can be applied to SubComponents using their respective [configurations](#configurations).

**Example**

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { UsersConfiguration, MessagesConfiguration, UsersStyle, MessagesStyle } from '@cometchat/uikit-shared';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usersStyle = new UsersStyle({
    width: "100%",
    height: "100%",
    border: "1px solid #ee7752",
    background: "linear-gradient(#ee7752, #e73c7e, #23a6d5, #23d5ab)",
  });
  public usersConfiguration = new UsersConfiguration({
    usersStyle:this.usersStyle
  });
  public messagesConfiguration = new MessagesConfiguration({
    messagesStyle: new MessagesStyle({
    width: "100%",
    height: "100%",
    border: "3px solid #cb1fff",
    background: "linear-gradient(#885df5, #d396ff, #e497f0, #dd20fa)",
    }),
  });
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [usersConfiguration]="usersConfiguration"
    [messagesConfiguration]="messagesConfiguration"
  ></cometchat-users-with-messages>
</div>
```

</TabItem>
</Tabs>

---

### Functionality

These are a set of **small functional customizations** that allow you to **fine-tune** the overall experience of the component. With these, you can **change text**, set **custom icons**, and toggle the **visibility** of UI elements.

you can utilize the `user` method with a [User](/sdk/javascript/user-management) object as input to the UsersWithMessages component. This will automatically direct you to the [Messages](./messages) component for the specified `User`.

##### user

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userObject!: CometChat.User;

  ngOnInit(): void {
    CometChat.getUser("uid").then((user: CometChat.User) => {
      this.userObject = user;
    });
  }
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [user]="userObject"
  ></cometchat-users-with-messages>
</div>
```

</TabItem>
</Tabs>

Below is a list of customizations along with corresponding code snippets:

| Property         | Description                                                                                                                                                | Code                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **isMobileView** | A boolean indicating if the component should render in mobile view for optimized display on mobile devices.                                                | `[isMobileView]= false` |
| **user**         | Use the user method with a User object as input for the UsersWithMessages component to navigate directly to the Messages component for the specified User. | `[user]="userObject"`   |
| **messageText**  | It represents the textual content which will be replaced with the messages component when user clicks on a particular user chat.                           | `[messageText]="text"`  |

---

##### Components

Nearly all functionality customizations available for a Component are also available for the composite component. Using [Configuration](#configurations), you can modify the properties of its components to suit your needs.

You can find the list of all Functionality customization of individual components in [Users](/ui-kit/angular/users#functionality) and [Messages](/ui-kit/angular/messages#functionality).

**Example**

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { UsersConfiguration, MessagesConfiguration } from '@cometchat/uikit-shared';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public usersConfiguration = new UsersConfiguration({
    hideSearch:true
  });
  public messagesConfiguration = new MessagesConfiguration({
    disableTyping: true,
    hideMessageHeader: true,
  });
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [usersConfiguration]="usersConfiguration"
    [messagesConfiguration]="messagesConfiguration"
  ></cometchat-users-with-messages>
</div>
```

</TabItem>
</Tabs>

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your own views, layouts, and UI elements and then incorporate those into the component.

By utilizing the [Configuration](#configurations) object of each component, you can apply advanced-level customizations to the UsersWithMessages.

**Example**

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { UsersConfiguration } from '@cometchat/uikit-shared';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public usersConfiguration!: UsersConfiguration;
  ngOnInit(): void {
    this.usersConfiguration= new UsersConfiguration({
      errorStateView:this.errorStateView,
    });
  }
  @ViewChild('errorStateView', { static: true }) errorStateView!: TemplateRef<any>;
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [usersConfiguration]="usersConfiguration"
  ></cometchat-users-with-messages>
</div>
<ng-template #errorStateView>
  <div style="height: 100vh; width: 100vw">
    <img
      src="icon"
      alt="error icon"
      style="height:100px; width: 100px; justify-content: center; margin-top: 250px; margin-right: 700px;"
    />
  </div>
</ng-template>
```

</TabItem>
</Tabs>

---

To find all the details on individual Component advance customization you can refer, [Users Advance](/ui-kit/angular/users#advance)and [Messages Advance](/ui-kit/angular/messages#advanced).

UsersWithMessages uses advanced-level customization of both Users & Messages components to achieve its default behavior.

1. UsersWithMessages utilizes the [onItemClick](/ui-kit/angular/users#2-onitemclick) property of the `Users` subcomponent to navigate the user from [Users](/ui-kit/angular/users) to [Messages](/ui-kit/angular/messages)

![](../../assets/users_with_messages_onitemclick_web_screens.png)

2. UsersWithMessages utilizes the [menus](/ui-kit/angular/messages#auxiliarymenu) of the `Messages` subcomponent to navigate from [Messages](/ui-kit/angular/messages) to [Details](/ui-kit/angular/group-details)

![](../../assets/users_with_messages_advance_web_screens.png)

:::warning

When you override `onItemClick` and `menus`, the default behavior of UsersWithMessages will also be overridden.

:::

## Configurations

[Configurations](/ui-kit/angular/components-overview#configurations) offer the ability to customize the properties of each component within a Composite Component.

UsersWithMessages has `Users` and `Messages` component. Hence, each of these components will have its individual `Configuration``.

- `Configurations` expose properties that are available in its individual components.

#### Users

You can customize the properties of the Users component by making use of the `usersConfiguration`.

All exposed properties of `UsersConfiguration` can be found under [Users](./users#functionality). Properties marked with the <a data-tooltip-id="my-tooltip-html-prop"><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object.

**Example**

Let's say you want to change the style of the Users subcomponent and, in addition, you only want to display five users sort by name.

You can modify the style using the `usersStyle` property and filter the list with the `usersRequestBuilder` property.

![](../../assets/users_with_messages_users_configuration_web_screens.png)

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { UsersConfiguration } from '@cometchat/uikit-shared';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public usersConfiguration!: UsersConfiguration;
  ngOnInit(): void {
    this.usersConfiguration= new UsersConfiguration({
      usersRequestBuilder: new CometChat.UsersRequestBuilder().sortBy("name").setLimit(5),
      usersStyle:this.usersStyle,
    });
  }
  usersStyle = new UsersStyle({
    width: "100%",
    height: "100%",
    border: "1px solid #ee7752",
    background: "linear-gradient(#ee7752, #e73c7e, #23a6d5, #23d5ab)",
  });
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [usersConfiguration]="usersConfiguration"
  ></cometchat-users-with-messages>
</div>
```

</TabItem>
</Tabs>

---

#### Messages

You can customize the properties of the Messages component by making use of the messagesConfiguration.

All exposed properties of `MessagesConfiguration` can be found under [Messages](./messages#configuration). Properties marked with the <a data-tooltip-id="my-tooltip-html-prop"><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object.

**Example**

Let's say you want to change the style of the Messages subcomponent and, in addition, you only want to hide message header.

You can modify the style using the `messagesStyle` property and hide the message header with the `hideMessageHeader` property.

![](../../assets/users_with_messages_messages_configuration_web_screens.png)

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { MessagesConfiguration, MessagesStyle } from '@cometchat/uikit-shared';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public messagesConfiguration = new MessagesConfiguration({
    hideMessageHeader: true,
    messagesStyle: new MessagesStyle({
    width: "100%",
    height: "100%",
    border: "3px solid #cb1fff",
    background: "linear-gradient(#885df5, #d396ff, #e497f0, #dd20fa)",
    }),
  });

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  onLogin(UID?: any) {
    CometChatUIKit.login({ uid: UID }).then(
      (user) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-users-with-messages
    [messagesConfiguration]="messagesConfiguration"
  ></cometchat-users-with-messages>
</div>
```

</TabItem>
</Tabs>

---
