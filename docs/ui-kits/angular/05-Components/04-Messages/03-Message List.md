---
sidebar_position: 3
title: Message List
slug: /message-list
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

`MessageList` is a [Composite Component](/ui-kit/angular/components-overview#composite-components) that displays a list of messages and effectively manages real-time operations. It includes various types of messages such as Text Messages, Media Messages, Stickers, and more.

`MessageList` is primarily a list of the base component [MessageBubble](/ui-kit/angular/message-bubble). The MessageBubble Component is utilized to create different types of chat bubbles depending on the message type.

![](../../assets/message_list_overview_web_screens.png)

---

## Usage

### Integration

The following code snippet illustrates how you can directly incorporate the MessageList component into your Application.

<Tabs>
<TabItem value="js" label="app.module.ts">

```javascript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CometChatMessageList } from "@cometchat/chat-uikit-angular";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, CometChatMessageList],
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
import { CometChat } from '@cometchat/chat-sdk-javascript';
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
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

:::warning

To fetch messages for a specific entity, you need to supplement it with `User` or `Group` Object.

:::

---

### Actions

[Actions](/ui-kit/angular/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onThreadRepliesClick

`onThreadRepliesClick` is triggered when you click on the threaded message bubble.
The `onThreadRepliesClick` action doesn't have a predefined behavior. You can override this action using the following code snippet.

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
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  public handleOnThreadRepliesClick = ()=>{
    console.log("your custom on thread replies click");
  };

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [onThreadRepliesClick]="handleOnThreadRepliesClick"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

---

##### 2. onError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the MessageList component.

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
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  public handleOnError = (error: CometChat.CometChatException) => {
    console.log("your custom on error action", error);
  };

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [onError]="handleOnError"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

---

### Filters

You can adjust the `MessagesRequestBuilder` in the MessageList Component to customize your message list. Numerous options are available to alter the builder to meet your specific needs. For additional details on `MessagesRequestBuilder`, please visit [MessagesRequestBuilder](/sdk/javascript/additional-message-filtering).

In the example below, we are applying a filter to the messages based on a search substring and for a specific user. This means that only messages that contain the search term and are associated with the specified user will be displayed

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
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  messagesRequestBuilder = new CometChat.MessagesRequestBuilder().setLimit(5);

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [messagesRequestBuilder]="messagesRequestBuilder"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

:::info

The following parameters in messageRequestBuilder will always be altered inside the message list

1. UID
2. GUID
   :::

### Events

[Events](/ui-kit/angular/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The list of events emitted by the Message List component is as follows.

| Event                   | Description                                                                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **ccOpenChat**          | this event alerts the listeners if the logged-in user has opened a user or a group chat                                                         |
| **ccMessageEdited**     | Triggers whenever a loggedIn user edits any message from the list of messages .it will have three states such as: inProgress, success and error |
| **ccMessageDeleted**    | Triggers whenever a loggedIn user deletes any message from the list of messages                                                                 |
| **ccActiveChatChanged** | This event is triggered when the user navigates to a particular chat window.                                                                    |
| **ccMessageRead**       | Triggers whenever a loggedIn user reads any message.                                                                                            |
| **ccLiveReaction**      | Triggers whenever a loggedIn clicks on live reaction                                                                                            |

Adding `CometChatMessageEvents` Listener's

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript
import {CometChatMessageEvents} from "@cometchat/chat-uikit-angular";

this.ccOpenChat = CometChatMessageEvents.ccOpenChat.subscribe(
 () => {
        // Your Code
  }
);

this.ccMessageEdited = CometChatMessageEvents.ccMessageEdited.subscribe(
  () => {
        // Your Code
  }
);

this.ccMessageDeleted = CometChatMessageEvents.ccMessageDeleted.subscribe(
  () => {
        // Your Code
  }
);

this.ccActiveChatChanged = CometChatMessageEvents.ccActiveChatChanged.subscribe(
  () => {
        // Your Code
  }
);

this.ccMessageRead = CometChatMessageEvents.ccMessageRead.subscribe(
  () => {
        // Your Code
  }
);

this.ccLiveReaction = CometChatMessageEvents.ccLiveReaction.subscribe(
  () => {
        // Your Code
  }
);
```

</TabItem>
</Tabs>

---

Removing `CometChatMessageEvents` Listener's

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript
this.ccMessageEdited.unsubscribe();
this.ccActiveChatChanged.unsubscribe();
```

</TabItem>
</Tabs>

---

## Customization

To fit your app's design requirements, you can customize the appearance of the Message List component. We provide exposed properties that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. MessageList Style

You can set the MessageListStyle to the MessageList Component Component to customize the styling.

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { MessageListStyle } from '@cometchat/uikit-shared';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  messageListStyle = new MessageListStyle({
    background: "#fdf2ff",
    border: "1px solid #d608ff",
    borderRadius: "20px",
    loadingIconTint: "red",
    nameTextColor: "pink",
    threadReplyTextColor: "green"
  });

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [messageListStyle]="messageListStyle"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

List of properties exposed by MessageListStyle

| Property                        | Description                                                      | Code                                    |
| ------------------------------- | ---------------------------------------------------------------- | --------------------------------------- |
| **border**                      | Used to set border                                               | `border?: string,`                      |
| **borderRadius**                | Used to set border radius                                        | `borderRadius?: string;`                |
| **background**                  | Used to set background colour                                    | `background?: string;`                  |
| **height**                      | Used to set height                                               | `height?: string;`                      |
| **width**                       | Used to set width                                                | `width?: string;`                       |
| **loadingIconTint**             | used to set loading icon tint                                    | `loadingIconTint?: string;`             |
| **emptyStateTextFont**          | used to set empty state text font                                | `emptyStateTextFont?: string;`          |
| **errorStateTextFont**          | used to set error state text font                                | `errorStateTextFont?: string;`          |
| **emptyStateTextColor**         | used to set empty state text color                               | `emptyStateTextColor?: string;`         |
| **errorStateTextColor**         | used to set error state text color                               | `errorStateTextColor?: string;`         |
| **nameTextColor**               | used to set sender/receiver name text color on a message bubble. | `nameTextColor?: string;`               |
| **nameTextFont**                | used to set sender/receiver name text font on a message bubble   | `nameTextFont?: string;`                |
| **TimestampTextColor**          | used to set time stamp text color                                | `TimestampTextColor?: string;`          |
| **TimestampTextFont**           | used to set time stamp text font                                 | `TimestampTextFont?: string;`           |
| **threadReplyTextColor**        | used to set thread reply text color                              | `threadReplyTextColor?: string;`        |
| **threadReplyTextFont**         | used to set thread reply text font                               | `threadReplyTextFont?: string;`         |
| **threadReplyIconTint**         | used to set thread reply icon tint                               | `threadReplyIconTint?: string;`         |
| **threadReplyUnreadTextColor**  | used to set thread reply unread text color                       | `threadReplyUnreadTextColor?: string;`  |
| **threadReplyUnreadTextFont**   | used to set thread reply unread text font                        | `threadReplyUnreadTextFont?: string;`   |
| **threadReplyUnreadBackground** | used to set thread reply unread background                       | `threadReplyUnreadBackground?: string;` |

---

##### 2. Avatar Style

To apply customized styles to the `Avatar` component in the `Message List` Component, you can use the following code snippet. For further insights on `Avatar` Styles [refer](/ui-kit/angular/avatar#avatar-style)

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit, AvatarStyle } from '@cometchat/chat-uikit-angular';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  avatarStyle = new AvatarStyle({
    backgroundColor:"#cdc2ff",
    border:"2px solid #6745ff",
    borderRadius:"10px",
    outerViewBorderColor:"#ca45ff",
    outerViewBorderRadius:"5px",
    nameTextColor:"#4554ff"
  });

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [avatarStyle]="avatarStyle"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

##### 3. DateSeparator Style

To apply customized styles to the `DateSeparator` in the `Message list` Component, you can use the following code snippet.

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit, DateStyle } from '@cometchat/chat-uikit-angular';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  dateSeparatorStyle = new DateStyle({
    background:'red',
    border:'2px solid green',
    borderRadius:'15px'
  });

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [dateSeparatorStyle]="dateSeparatorStyle"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

##### 4. EmojiKeyboard Style

To apply customized styles to the `EmojiKeyBoard` in the `Message list` Component, you can use the following code snippet.

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit, EmojiKeyboardStyle } from '@cometchat/chat-uikit-angular';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  emojiKeyboardStyle = new EmojiKeyboardStyle({
    background:'red',
    border:'2px solid green',
    borderRadius:'15px',
    activeIconTint:'yellow',
    textColor:'#8830f2'
  });

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [emojiKeyboardStyle]="emojiKeyboardStyle"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

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
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [hideError]="true"
    [hideReceipt]="true"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

---

Below is a list of customizations along with corresponding code snippets

| Property                                                                                                                   | Description                                                                                                                                                                                                                                     | Code                                                      |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **user** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>                    | Used to pass user object of which header specific details will be shown                                                                                                                                                                         | `[user]="userObject"`                                     |
| **group** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>                   | Used to pass group object of which header specific details will be shown                                                                                                                                                                        | `[group]="groupObject"`                                   |
| **alignment**                                                                                                              | used to set the alignmet of messages in CometChatMessageList. It can be either **left** or **standard**                                                                                                                                         | `MessageListAlignment.left`                               |
| **emptyStateText**                                                                                                         | used to set text which will be visible when no messages are available                                                                                                                                                                           | `emptyStateText="Your Custom Empty State text"`           |
| **errorStateText**                                                                                                         | used to set text which will be visible when error in messages retrieval                                                                                                                                                                         | `errorStateText="Your Custom Error State text"`           |
| **hideError**                                                                                                              | used to toggle visibility of error in MessageList                                                                                                                                                                                               | `[hideError]="true"`                                      |
| **disableSoundForMessages** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | used to enable/disable sound for incoming/outgoing messages , default false                                                                                                                                                                     | `[disableSoundForMessages]="true"`                        |
| **customSoundForMessages** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>  | used to set custom sound for outgoing message                                                                                                                                                                                                   | `customSoundForMessages="your custom sound for messages"` |
| **readIcon**                                                                                                               | used to set custom read icon visible at read receipt                                                                                                                                                                                            | `readIcon="your custom read icon"`                        |
| **deliveredIcon**                                                                                                          | used to set custom delivered icon visible at read receipt                                                                                                                                                                                       | `deliveredIcon="your custom delivered icon"`              |
| **sentIcon**                                                                                                               | used to set custom sent icon visible at read receipt                                                                                                                                                                                            | `sentIcon="your custom sent icon "`                       |
| **waitIcon**                                                                                                               | used to set custom wait icon visible at read receipt                                                                                                                                                                                            | `waitIcon="your custom wait icon"`                        |
| **showAvatar**                                                                                                             | used to toggle visibility for avatar                                                                                                                                                                                                            | `[showAvatar]="true"`                                     |
| **hideDateSeparator**                                                                                                      | used to toggle visibility of date separator                                                                                                                                                                                                     | `[hideDateSeparator]="true"`                              |
| **timestampAlignment**                                                                                                     | used to set receipt's time stamp alignment .It can be either **top** or **bottom**                                                                                                                                                              | `timestampAlignment=TimestampAlignment.top`               |
| **newMessageIndicatorText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | used to set new message indicator text                                                                                                                                                                                                          | `newMessageIndicatorText="Custom Indicator text"`         |
| **scrollToBottomOnNewMessage**                                                                                             | should scroll to bottom on new message? , by default false                                                                                                                                                                                      | `[scrollToBottomOnNewMessages]="true"`                    |
| **hideReceipt**                                                                                                            | Used to control the visibility of read receipts without affecting the functionality of marking messages as read and delivered.                                                                                                                  | `[hideReceipt]="true"`                                    |
| **Disable Mentions**                                                                                                       | Sets whether mentions in text should be disabled. Processes the text formatters If there are text formatters available and the disableMentions flag is set to true, it removes any formatters that are instances of CometChatMentionsFormatter. | `[disableMentions]="true"`                                |
| **Disable Reactions**                                                                                                      | Sets A boolean value indicating whether to disable reactions.Pass `true` to disable reactions, `false` to enable them.                                                                                                                          | `[disableReactions]="true"`                               |

---

### Advance

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

#### Templates

[CometChatMessageTemplate](/ui-kit/angular/message-template) is a pre-defined structure for creating message views that can be used as a starting point or blueprint for creating message views often known as message bubbles. For more information, you can refer to [CometChatMessageTemplate](/ui-kit/angular/message-template).

You can set message Templates to MessageList by using the following code snippet

#### DateSeparatorPattern

You can customize the date pattern of the message list separator using the `DateSeparatorPattern` prop. Choose from predefined options like time, DayDate, DayDateTime, or DateTime.

**Example**

**Default**

![](../../assets/message_list_dateseparator_default_web_screens.png)

**Custom**

![](../../assets/message_list_dateseparator_custom_web_screens.png)

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { DatePattern } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  DateSeparatorPattern = DatePatterns.DateTime;

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [DateSeparatorPattern]="DateSeparatorPattern"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

---

#### DatePattern

You can modify the date pattern to your requirement using **DatePattern**. Choose from predefined options like time, DayDate, DayDateTime, or DateTime.


DatePatterns describes a specific format or arrangement used to represent dates in a human-readable form.


| Name | Description |
| --- | --- |
| time | Date format displayed in the format hh:mm a |
| DayDate | Date format displayed in the following format. <ol><li>If timestamp < 24hrs display “Today”</li><li>If timestamp < 48hrs display “Yesterday”</li><li>If timestamp &lt; 7days display “EEE” i.e , SUNDAY </li><li>else display “d MMM, yyyy”</li></ol> |
| DayDateTime | Date format displayed in the following format. <ol><li>If timestamp < 24hrs display “hh:mm a”</li><li>If timestamp < 48hrs display “Yesterday”</li><li>If timestamp < 7days display “EEE” i.e SUNDAY</li><li>else display “dd MM yyyy”</li></ol> 

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { DatePattern } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  DatePattern = DatePatterns.DateTime;

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [DatePattern]="DatePattern"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

---

#### Headerview

You can set custom headerView to the Message List component using the following method.

**Example**

![](../../assets/message_list_headerview_web_screens.png)

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
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [headerView]="headerView"
  ></cometchat-message-list>
</div>

<ng-template #headerView>
  <div
    [ngStyle]="{ height: '40px', width: '100px', background: '#a46efa', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }"
  >
    <button
      [ngStyle]="{ height: '40px', width: '40px', background: '#a46efa', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }"
    >
      <img
        src="img"
        [ngStyle]="{ height: 'auto', width: '100%', maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }"
        alt="bot"
      />
      <span>Chat Bot</span>
    </button>
  </div>
</ng-template>
```

</TabItem>
</Tabs>

---

#### FooterView

You can set custom footerview to the Message List component using the following method.

**Example**

![](../../assets/message_list_footerview_web_screens.png)

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
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [footerView]="footerView"
  ></cometchat-message-list>
</div>

<ng-template #footerView>
  <div
    [ngStyle]="{ height: '40px', width: '100px', background: '#a46efa', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }"
  >
    <button
      [ngStyle]="{ height: '40px', width: '40px', background: '#a46efa', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }"
    >
      <img
        src="img"
        [ngStyle]="{ height: 'auto', width: '100%', maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }"
        alt="bot"
      />
      <span>Chat Bot</span>
    </button>
  </div>
</ng-template>
```

</TabItem>
</Tabs>

---

#### ErrorStateView

You can set a custom `errorStateView` to match the error view of your app.

**Example**

**Default**

![](../../assets/message_list_error_state_view_default_web_screens.png)

**Custom**

![](../../assets/message_list_error_state_view_custom_web_screens.png)

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
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [errorStateView]="errorStateView"
  ></cometchat-message-list>
</div>

<ng-template #errorStateView>
  <div style="height: 100vh; width: 100vw">
    <img
      src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png"
      alt="error icon"
      style="height:100px; width: 100px; justify-content: center"
    />
  </div>
</ng-template>
```

</TabItem>
</Tabs>

---

#### EmptyStateView

The `emptyStateView` method provides the ability to set a custom empty state view in your app. An empty state view is displayed when there are no messages for a particular user.

**Example**

![](../../assets/message_list_empty_state_view_custom_web_screens.png)

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
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [emptyStateView]="emptyStateView"
  ></cometchat-message-list>
</div>

<ng-template #emptyStateView>
  <div>Your Custom Empty State</div>
</ng-template>
```

</TabItem>
</Tabs>

---

#### LoadingStateView

The `loadingStateView` property allows you to set a custom loading view in your app. This feature enables you to maintain a consistent look and feel throughout your application,

**Example**

**Default**

![](../../assets/message_list_loading_state_view_default_web_screens.png)

**Custom**

![](../../assets/message_list_loading_state_view_custom_web_screens.png)

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit, LoaderStyle } from '@cometchat/chat-uikit-angular';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  getLoaderStyle: LoaderStyle = new LoaderStyle({
    iconTint: "red",
    background: "transparent",
    height: "20px",
    width: "20px",
    border: "none",
    borderRadius: "0",
  });

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [loadingStateView]="loadingStateView"
  ></cometchat-message-list>
</div>

<ng-template #loadingStateView>
  <cometchat-loader
    iconURL="icon"
    loaderStyle="getLoaderStyle()"
  ></cometchat-loader>
</ng-template>
```

</TabItem>
</Tabs>

---

#### TextFormatters

Assigns the list of text formatters. If the provided list is not null, it sets the list. Otherwise, it assigns the default text formatters retrieved from the data source. To configure the existing Mentions look and feel check out [CometChatMentionsFormatter](/ui-kit/angular/mentions-formatter-guide)

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import "@cometchat/uikit-elements";
import HashTagTextFormatter from '../HashTagTextFormatter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;
  public textFormatters = [new HashTagTextFormatter];

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
<TabItem value="HashTagTextFormatter.ts" label="HashTagTextFormatter.ts">

```javascript
import { CometChatTextFormatter } from "@cometchat/uikit-shared";

class HashTagTextFormatter extends CometChatTextFormatter {
  constructor() {
    super();
    // Set the tracking character to #
    this.setTrackingCharacter("#");

    // Define regex patterns to find specific text patterns
    this.setRegexPatterns([
      /\B#(\w+)\b/g, // Matches hashtags starting with #
    ]);

    // Define regex patterns to replace formatter text with original text
    this.setRegexToReplaceFormatting([
      /#(\w+)/g, // Replace hashtags without formatting
    ]);

    // Set callback functions for key up and key down events
    this.setKeyUpCallBack(this.onKeyUp.bind(this));
    this.setKeyDownCallBack(this.onKeyDown.bind(this));

    // Set the re-render callback function
    this.setReRender(() => {
      // Trigger re-rendering of the message composer component
      // This could involve updating the UI with the formatted text
      console.log("Re-rendering message composer to update text content.");
    });

    // Initialize composer tracking
    this.initializeComposerTracking();
  }

  initializeComposerTracking() {
    // Get the reference to the input field (composer)
    const composerInput = document.getElementById("yourComposerInputId");

    // Set the reference to the input field
    this.setInputElementReference(composerInput);
  }

  getCaretPosition(): number {
    if (!this.inputElementReference) return 0;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return 0;

    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
    clonedRange.selectNodeContents(this.inputElementReference);
    clonedRange.setEnd(range.endContainer, range.endOffset);

    return clonedRange.toString().length;
  }

  setCaretPosition(position: number) {
    if (!this.inputElementReference) return;

    const range = document.createRange();
    const selection = window.getSelection();
    if (!selection) return;

    range.setStart(
      this.inputElementReference.childNodes[0] || this.inputElementReference,
      position
    );
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
  }

  override onKeyUp(event: KeyboardEvent) {
    if (event.key === this.trackCharacter) {
      this.startTracking = true;
    }
    // Custom logic to format hashtags as users type in the composer
    if (this.startTracking && (event.key === " " || event.key === "Enter")) {
      const caretPosition = this.getCaretPosition();
      this.formatText();
      this.setCaretPosition(caretPosition);
    }
    // Check if the last character typed was not a space or enter
    // and if the caret position is at the end, then we need to set start tracking to false
    if (
      this.startTracking &&
      event.key !== " " &&
      event.key !== "Enter" &&
      this.getCaretPosition() === this.inputElementReference?.innerText?.length
    ) {
      this.startTracking = false;
    }
  }

  formatText() {
    const inputValue =
      this.inputElementReference?.innerText ||
      this.inputElementReference?.textContent ||
      "";
    const formattedText = this.getFormattedText(inputValue);
    // Update the composer with formatted text
    if (this.inputElementReference) {
      this.inputElementReference.innerHTML = formattedText || "";
      // Trigger re-render of the composer
      this.reRender();
    }
  }

  override onKeyDown(event: KeyboardEvent) {
    // Custom onKeyDown logic can be added here
  }

  override getFormattedText(inputText: string) {
    if (!inputText) {
      // Edit at cursor position and return void
      return;
    }
    // Perform custom logic to format text (e.g., formatting hashtags)
    return this.customLogicToFormatText(inputText);
  }

  customLogicToFormatText(inputText: string) {
    // Replace hashtags with HTML span elements to change color to green
    return inputText.replace(
      /\B#(\w+)\b/g,
      '<span style="color: #5dff05;">#$1</span>'
    );
  }

  override getOriginalText(inputText: string) {
    // Sample implementation
    if (!inputText) {
      return "";
    }
    // Remove formatting and return original text
    for (let i = 0; i < this.regexToReplaceFormatting.length; i++) {
      let regexPattern = this.regexToReplaceFormatting[i];

      if (inputText) {
        inputText = inputText.replace(regexPattern, "#$1");
      }
    }

    return inputText;
  }
}

export default HashTagTextFormatter;
```

</TabItem>
<TabItem value="ts" label="app.component.html">

```html
<div class="fullwidth">
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [textFormatters]="textFormatters"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

---

## Configuration

[Configurations](/ui-kit/angular/components-overview#configurations) offer the ability to customize the properties of each component within a Composite Component.

### MessageInformation

From the MessageList, you can navigate to the [MesssageInformation](/ui-kit/angular/message-information) component as shown in the image.
![](../../assets/message_list_message_information_option_web_screens.png)

If you wish to modify the properties of the [MesssageInformation](/ui-kit/angular/message-information) Component, you can use the `MessageInformationConfiguration` object.

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { MessageInformationConfiguration, MessageInformationStyle } from '@cometchat/uikit-shared';

import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  public messageInformationConfiguration = new MessageInformationConfiguration({
    messageInformationStyle: new MessageInformationStyle({
      background: "#f7f2fa",
      border: "2px solid #d895fc",
      borderRadius: "20px",
      captionTextColor: "#8629e3",
      titleTextColor: "#908deb",
    })
  });

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [messageInformationConfiguration]="messageInformationConfiguration"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

The `MessageInformationConfiguration` indeed provides access to all the [Action](/ui-kit/angular/message-information#actions), [Filters](/ui-kit/angular/message-information#filters), [Styles](/ui-kit/angular/message-information#style), [Functionality](/ui-kit/angular/message-information#functionality), and [Advanced](/ui-kit/angular/message-information#functionality) properties of the [MesssageInformation](/ui-kit/angular/message-information) component.

Please note that the properties marked with the <a><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object.

**Example**

**Default**

![](../../assets/message_list_message_information_default_web_screens.png)

**Custom**

![](../../assets/message_list_message_information_custom_web_screens.png)

In the above example, we are styling a few properties of the [MesssageInformation](/ui-kit/angular/message-information) component using `MessageInformationConfiguration`.

### Reaction

If you wish to modify the properties of the [Reaction](/ui-kit/angular/reaction) Component, you can use the `reactionsConfiguration` object.

![](../../assets/message_list_message_information_option_web_screens.png)

<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { ReactionsConfiguration, ReactionsStyle } from '@cometchat/uikit-shared';

import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
  }

  public userObject!: CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  public reactionsConfiguration = new ReactionsConfiguration({
    reactionsStyle: new ReactionsStyle({
      border:'2px solid #8742f5',
      activeReactionBackground:'#b88cff',
      background:'#7b34ed',
      baseReactionBackground:'#ebe3ff',
      borderRadius:'20px'
    })
    //properties of reactions
  });

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
  <cometchat-message-list
    *ngIf="userObject"
    [user]="userObject"
    [reactionsConfiguration]="reactionsConfiguration"
  ></cometchat-message-list>
</div>
```

</TabItem>
</Tabs>

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in MessageListConfiguration"
/>
