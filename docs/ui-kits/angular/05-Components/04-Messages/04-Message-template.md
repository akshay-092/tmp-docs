---
sidebar_position: 4
title: Message Template
slug: /message-template
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

A MessageTemplate provides you with the capability to define and customize both the structure and the behavior of the [MessageBubble](/ui-kit/angular/message-bubble). It acts as a schema or design blueprint for the creation of a variety of [MessageBubble](/ui-kit/angular/message-bubble) components, allowing you to manage the appearance and interactions of [MessageBubble](/ui-kit/angular/message-bubble) within your application effectively and consistently.


### Structure

![](../../assets/message_template_overview_web_screens.png)

The MessageBubble structure can typically be broken down into the following views:

1. **Leading view**: This is where the sender's avatar is displayed. It's typically on the left of the MessageBubble for messages from others and on the right for messages from the current user.

2. **Header view**: This displays the sender's name and is especially useful in group chats where multiple users are sending messages.

3. **Reply view**: This view can be used to extend the MessageBubble with additional elements. It's typically placed above the Content view.

4. **Content view**: This is the core of the MessageBubble where the message content (text, images, videos, etc.) is displayed.

5. **Bottom view**: This view can be used to extend the MessageBubble with additional elements, such as link previews or a 'load more' button for long messages. It's typically placed beneath the Content view.

6. **Thread view**: This is where the thread reply icon and reply counts are displayed. It's located below the footer view.

7. **Footer view**: This is where the reactions are displayed. It's located at the bottom of the MessageBubble.

8. **status Info view**: This is where the timestamp of the message and its delivery or read status are displayed. It's located inside the MessageBubble just below the content view.

### Properties

MessageTemplate provides you with methods that allow you to alter various properties of the MessageBubble. These properties include aspects such as the `type` and `category` of a message, the appearance and behavior of the header, content, and footer sections of the message bubble,

1. **type**

   Using `type` you can set the type of CometChatMessage, This will map your MessageTemplate to the corresponding CometChatMessage. You can set the MessageTemplete Type using the following code snippet.

2. **category**

   Using `category` you can set the category of a MessageTemplate. This will create a MessageTemplate with the specified category and link it with a CometChatMessage of the same category.

   Please refer to our guide on [Message Categories](/sdk/javascript/message-structure-and-hierarchy) for a deeper understanding of message categories.

3. **headerView**

   The `headerView` method allows you to assign a custom header view to the MessageBubble. By default, it is configured to display the sender's name.

4. **contentView**

   The `contentView` method allows you to assign a custom content view to the MessageBubble. By default, it displays the [Text Bubble](/ui-kit/angular/text-bubble), [Image Bubble](/ui-kit/angular/image-bubble), [File Bubble](/ui-kit/angular/file-bubble), [Audio Bubble](/ui-kit/angular/audio-bubble), or [Video Bubble](/ui-kit/angular/video-bubble), depending on the message type.

5. **footerView**

   The `footerView` method allows you to assign a custom Footer view to the MessageBubble. By default it shows thr reactions for the message bubble.

6. **bottomView**

   The `bottomView` method allows you to assign a custom Bottom view to the MessageBubble. By defuault is has buttons such as link previews or a 'load more' button for long messages.

7. **bubbleView**

   The `bubbleView` method allows you to assign a custom Bubble view to the MessageBubble. By default, headerView, contentView, statusInfoView and footerView together form a message bubble.

8. **statusInfoView**

   The `statusInfoView` method allows you to assign a custom status info view to the MessageBubble. By default, it displays the receipt and timestamp.

9. **options**

   The `options` lets you set the list of actions that a user can perform on a message. This includes actions like reacting to, editing, or deleting a message.


---

```javascript
definedTemplates!: CometChatMessageTemplate[];
  ngOnInit(): void {
   this.definedTemplates = [
     new CometChatMessageTemplate({
      type: CUSTOM_MESSAGE_TYPE,
       category: CometChatUIKitConstants.MessageCategory.custom,
       headerView: ()=> { /*return custom template ref*/},
       contentView: ()=> { /*return custom template ref*/},
       footerView: ()=> { /*return custom template ref*/},
       bottomView: ()=> { /*return custom template ref*/},
       bubbleView: ()=> { /*return custom template ref*/},
       options: //your custom options
    })
   ];
  }
```

---



## Customization

Let's dive into how you can use the [properties](#properties) of MessageTemplate to customize an existing template or add a new one to the [MessageList](/ui-kit/angular/message-list) component.

The First step is to fetch the list of existing templates when you want to modify or add to them. This can be done using the getAllMessageTemplates() method from the DataSource of the CometChatUIKit class.

```javascript
definedTemplates!: CometChatMessageTemplate[];
```

### Existing Templates

You will need to first get the MessageTemplate object for the type of message you want to customize. You will be customizing the TextMessage Bubble here. The code snippet to get the Text MessageTemplate is as follows.



<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```javascript
definedTemplates!: CometChatMessageTemplate[];

  ngOnInit(): void {
   this.definedTemplates = [
     new CometChatMessageTemplate({
      type: CUSTOM_MESSAGE_TYPE,
       category: CometChatUIKitConstants.MessageCategory.custom,
       headerView: ()=> { /*return custom template ref*/},
       contentView: ()=> { /*return custom template ref*/},
       footerView: ()=> { /*return custom template ref*/},
       bottomView: ()=> { /*return custom template ref*/},
       bubbleView: ()=> { /*return custom template ref*/},
       options: //your custom options
    })
   ];
  }
```

</TabItem>
</Tabs>


You will be using [Messages](/ui-kit/angular/messages#overview) Component for example here so to apply Template to Messages you will need to use `MessageListConfiguration`. This is because the [templates](/ui-kit/angular/message-list#templates) function, which is used to apply the custom templates, belongs to the [MessageList](./message-list) component.

You can apply MessageTempletes to Messages Component using the following code snippet.


<Tabs>
<TabItem value="TypeScript" label="TypeScript">
```javascript

this.messageListConfiguration = new MessageListConfiguration({
   templates:this.definedTemplates,
});

 <cometchat-messages
  *ngIf="userObject"
  [user]="userObject"
  [messageListConfiguration]="messageListConfiguration"
  ></cometchat-messages>

````
</TabItem>
</Tabs>

---

#### HeaderView

The `headerView` method of MessageTemplate allows you to add custom views to the header of your message bubbles. In the example below, we will add a custom header view of every text message in the MessageList.

**Default**

![](../../assets/message_template_header_view_default_web_screens.png)

**Custom**

![](../../assets/message_template_header_view_custom_web_screens.png)




<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { MessageListConfiguration } from '@cometchat/uikit-shared';
import { CometChatMessageTemplate, CometChatUIKitConstants } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });

   this.messageListConfiguration = new MessageListConfiguration({
      templates:this.definedTemplates,
    });

   this.definedTemplates = [
     new CometChatMessageTemplate({
      type: "text",
      category: CometChatUIKitConstants.MessageCategory.message,
      headerView: () => this.headerView,
    })
   ];
  }
  @ViewChild('headerView', { static: true }) headerView!: TemplateRef<any>;

  public userObject!: CometChat.User;
  definedTemplates!: CometChatMessageTemplate[];
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  public messageListConfiguration!: MessageListConfiguration;

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

 <cometchat-messages
  *ngIf="userObject"
  [user]="userObject"
  [messageListConfiguration]="messageListConfiguration"
  ></cometchat-messages>

</div>

<ng-template #headerView>
    <cometchat-avatar image="custom avatar"></cometchat-avatar>
</ng-template>
```
</TabItem>
</Tabs>

---


#### Contentview

The `contentview` method of MessageTemplate allows you to add a custom view to the content of your message bubbles. In the example below, we will add a custom layout to the content view of every text message in the MessageList.

![](../../assets/message_template_content_view_custom_web_screens.png)



<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { MessageListConfiguration } from '@cometchat/uikit-shared';
import { CometChatMessageTemplate, CometChatUIKitConstants } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });

   this.messageListConfiguration = new MessageListConfiguration({
      templates:this.definedTemplates,
    });

   this.definedTemplates = [
     new CometChatMessageTemplate({
      type: "nudge",
      category: CometChatUIKitConstants.MessageCategory.custom,
      contentView: ()=>this.customBubbleRef,
    })
   ];
  }
  @ViewChild('customBubbleRef', { static: true }) customBubbleRef!: TemplateRef<any>;


  public userObject!: CometChat.User;
  definedTemplates!: CometChatMessageTemplate[];
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  public messageListConfiguration!: MessageListConfiguration;
  public myCustomIcon = 'custom icon';

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

 <cometchat-messages
  *ngIf="userObject"
  [user]="userObject"
  [messageListConfiguration]="messageListConfiguration"
  ></cometchat-messages>

</div>

<ng-template #customBubbleRef>
  <div [ngStyle]="{'width': '100px', 'height': '100px', 'display': 'flex'}">
    <img [src]="myCustomIcon" alt="gif" />
  </div>
</ng-template>
```
</TabItem>
</Tabs>

---


#### BottomView

The `bottomView` method of MessageTemplate allows you to add a custom button view to your message bubbles. In the example below, we will add a custom bottom view to every text message in the MessageList.

![](../../assets/message_template_bottom_view_custom_web_screens.png)



<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit, TextBubbleStyle } from '@cometchat/chat-uikit-angular';
import { MessageListConfiguration } from '@cometchat/uikit-shared';
import { CometChatMessageTemplate, CometChatUIKitConstants } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });

   this.messageListConfiguration = new MessageListConfiguration({
      templates:this.definedTemplates,
    });

   this.definedTemplates = [
     new CometChatMessageTemplate({
      type: "text",
      category: CometChatUIKitConstants.MessageCategory.message,
      bottomView: (message: CometChat.BaseMessage) => {
          this.message = message;
          return this.customBottomView;
      },
    })
   ];
  }
  @ViewChild('customBubbleRef', { static: true }) customBubbleRef!: TemplateRef<any>;


  public userObject!: CometChat.User;
  definedTemplates!: CometChatMessageTemplate[];
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  public messageListConfiguration!: MessageListConfiguration;
  public message!: any;
  bottomViewStyle = new TextBubbleStyle({
    width: "100%",
    height: "20px",
    borderRadius: "8px",
    background: "#e3d7fa",
    border:"2px solid red"
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

 <cometchat-messages
  *ngIf="userObject"
  [user]="userObject"
  [messageListConfiguration]="messageListConfiguration"
  ></cometchat-messages>

</div>

<ng-template #customBottomView>
  <cometchat-text-bubble
  *ngIf="message"
  [text]="message.getText()"
  [textStyle]="bottomViewStyle"
  ></cometchat-text-bubble>
</ng-template>
```
</TabItem>
</Tabs>

---



#### FooterView

The `footerView` method of MessageTemplate allows you to add a footer view to your message bubbles. In the example below, we will add a custom footer view to every text message in the MessageList.

![](../../assets/message_template_footer_view_custom_web_screens.png)





<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { MessageListConfiguration } from '@cometchat/uikit-shared';
import { CometChatMessageTemplate, CometChatUIKitConstants } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });

   this.messageListConfiguration = new MessageListConfiguration({
      templates:this.definedTemplates,
    });

   this.definedTemplates = [
     new CometChatMessageTemplate({
      type: "text",
      category: CometChatUIKitConstants.MessageCategory.message,
      footerView: () => this.footerView,
    })
   ];
  }
  @ViewChild('footerView', { static: true }) footerView!: TemplateRef<any>;

  public userObject!: CometChat.User;
  definedTemplates!: CometChatMessageTemplate[];
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }

  public messageListConfiguration!: MessageListConfiguration;
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

 <cometchat-messages
  *ngIf="userObject"
  [user]="userObject"
  [messageListConfiguration]="messageListConfiguration"
  ></cometchat-messages>

</div>

<ng-template #footerView>
    <cometchat-avatar image="custom avatar"></cometchat-avatar>
</ng-template>
```
</TabItem>
</Tabs>


---


#### BubbleView

The `bubbleView` method of MessageTemplate allows you to add a bubble view to your message bubbles. In the example below, we will add a custom bubble view to the text message in the MessageList.

![](../../assets/message_template_bubble_view_custom_web_screens.png)





<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit, TextBubbleStyle } from '@cometchat/chat-uikit-angular';
import { MessageListConfiguration } from '@cometchat/uikit-shared';
import { CometChatMessageTemplate, CometChatUIKitConstants } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });

   this.messageListConfiguration = new MessageListConfiguration({
      templates:this.definedTemplates,
    });

   this.definedTemplates = [
     new CometChatMessageTemplate({
      type: "text",
      category: CometChatUIKitConstants.MessageCategory.message,
      bubbleView: () => this.customBubbleView,
    })
   ];
  }
  @ViewChild('customBubbleView', { static: true }) customBubbleView!: TemplateRef<any>;

  public userObject!: CometChat.User;
  definedTemplates!: CometChatMessageTemplate[];
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }
  textStyle = new TextBubbleStyle({
    width: "100",
    height: "20px",
    borderRadius: "8px",
    background: "#e3d7fa",
  });
  public messageListConfiguration!: MessageListConfiguration;
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

 <cometchat-messages
  *ngIf="userObject"
  [user]="userObject"
  [messageListConfiguration]="messageListConfiguration"
  ></cometchat-messages>

</div>

<ng-template #customBubbleView let-message>
  <cometchat-text-bubble
  [text]="message.getText()"
  [textStyle]="textStyle"
></cometchat-text-bubble>
</ng-template>
```
</TabItem>
</Tabs>


---



#### StatusInfoView

The `statusInfoView` method of MessageTemplate allows you to add a status info view to your message bubbles. In the example below, we will add a custom status info view to every text message in the MessageList.

![](../../assets/message_template_status_info_view_web_screens.png)





<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit, TextBubbleStyle } from '@cometchat/chat-uikit-angular';
import { MessageListConfiguration } from '@cometchat/uikit-shared';
import { CometChatMessageTemplate, CometChatUIKitConstants } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });

   this.messageListConfiguration = new MessageListConfiguration({
      templates:this.definedTemplates,
    });

   this.definedTemplates = [
     new CometChatMessageTemplate({
      type: "text",
      category: CometChatUIKitConstants.MessageCategory.message,
      statusInfoView: (message: CometChat.BaseMessage)=>{
        this.message = message;
        return this.statusInfoView
      },
    })
   ];
  }
  @ViewChild('statusInfoView', { static: true }) statusInfoView!: TemplateRef<any>;

  public userObject!: CometChat.User;
  public message!: any;
  definedTemplates!: CometChatMessageTemplate[];
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }
  textStyle = new TextBubbleStyle({
    width: "100",
    height: "20px",
    borderRadius: "8px",
    background: "#e3d7fa",
  });
  public messageListConfiguration!: MessageListConfiguration;
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

 <cometchat-messages
  *ngIf="userObject"
  [user]="userObject"
  [messageListConfiguration]="messageListConfiguration"
  ></cometchat-messages>

</div>

<ng-template #statusInfoView>
  <div [ngStyle]="{font:'10px Arial sans-serif',color: '#cccccc',textAlign: 'left',padding: '10px'}"
  *ngIf="message"
  >
  {{message.getDeliveredAt()}}
</div>
</ng-template>
```
</TabItem>
</Tabs>


---


#### Options

The `options` method in the MessageTemplate allows you to customize the options that appear in the action sheet when a message is long-pressed. By default, CometChat UI Kit provides a set of options like "Thread Reply", "Copy" ,"Edit", and "Delete".

However, if you wish to override or modify these options, you can use the `options` method and pass a list of `CometChatMessageOption`. This list of options will replace the default set.

![](../../assets/message_template_options_web_screens.png)




<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit, TextBubbleStyle, ChatConfigurator } from '@cometchat/chat-uikit-angular';
import { MessageListConfiguration } from '@cometchat/uikit-shared';
import { CometChatMessageTemplate, CometChatUIKitConstants, CometChatMessageOption } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });

    this.messageListConfiguration = new MessageListConfiguration({
      templates:this.definedTemplates,
    });

    this.definedTemplates = [
     new CometChatMessageTemplate({
      type: "text",
      category: CometChatUIKitConstants.MessageCategory.message,
      options: (loggedInUser: CometChat.User, message: CometChat.BaseMessage, theme: CometChatTheme, group?: CometChat.Group) => {
        return this.getCustomOptions(loggedInUser, message, theme, group);
      }
    })
   ];
  }
  public userObject!: CometChat.User;
  definedTemplates!: CometChatMessageTemplate[];
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }
  getCustomOptions(
    loggedInUser: CometChat.User,
    message: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group
  ): any {
    const defaultOptions: any = ChatConfigurator.getDataSource().getMessageOptions(
      loggedInUser,
      message,
      theme,
      group
    );
    const myView: any = new CometChatMessageOption({
      id: 'custom id',
      title: 'your custom title for options',
      iconURL: myCustomIcon,
      iconTint: '#7316f5',
      onClick: () => console.log('custom action'),
    });
    defaultOptions.push(myView);
    return defaultOptions;
  }
  public messageListConfiguration!: MessageListConfiguration;
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

 <cometchat-messages
  *ngIf="userObject"
  [user]="userObject"
  [messageListConfiguration]="messageListConfiguration"
  ></cometchat-messages>

</div>
```
</TabItem>
</Tabs>



### New Templates

You can create an entirely new template for custom messages is one of the powerful features of CometChat's MessageTemplate.

![](../../assets/message_template_new_template_web_screens.png)




<Tabs>
<TabItem value="app.component.ts" label="app.component.ts">

```javascript
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { Component, OnInit } from '@angular/core';
import {  CometChatThemeService, CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { MessageListConfiguration, MessageComposerConfiguration } from '@cometchat/uikit-shared';
import { CometChatMessageTemplate, CometChatUIKitConstants } from '@cometchat/uikit-resources';
import "@cometchat/uikit-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    CometChat.getUser("uid").then((user:CometChat.User)=>{
      this.userObject=user;
    });
    CometChat.getGroup("guid").then((group: CometChat.Group) => {
      this.groupObject = group;
    });

    this.messageListConfiguration = new MessageListConfiguration({
      templates:this.definedTemplates,
    });
    this.messageComposerConfiguration = new MessageComposerConfiguration({
      auxilaryButtonView:this.auxilaryButtonViewTemplate,
    });

    this.definedTemplates = [
     new CometChatMessageTemplate({
      type: "nudge",
      category: CometChatUIKitConstants.MessageCategory.custom,
      contentView: ()=>this.customBubbleRef,
    })
   ];
  }
  public userObject!: CometChat.User;
  public groupObject!: CometChat.Group;
  definedTemplates!: CometChatMessageTemplate[];
  @ViewChild('customBubbleRef', { static: true }) customBubbleRef!: TemplateRef<any>;
  @ViewChild('auxilaryButtonViewTemplate', { static: true }) auxilaryButtonViewTemplate!: TemplateRef<any>;
  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" })
  }
  public messageListConfiguration!: MessageListConfiguration;
  public messageComposerConfiguration !: MessageComposerConfiguration;
  getIconStyle = new IconStyle({
     iconTint:"#9415e8", width: "35px", height: "35px"
  });
  sendNudge(item: CometChat.User | CometChat.Group) {
    if (item instanceof CometChat.User) {
      this.userObject = item
    }
    else {
      this.groupObject = item
    }
    let { receiverId, receiverType } = this.getReceiverDetails();
    let icon = "assets/nudge.gif"
    const customData = {
      nudge_url: icon,
    };
    const customType = "nudge";
    const customMessage: CometChat.CustomMessage = new CometChat.CustomMessage(
      receiverId,
      receiverType,
      customType,
      customData
    );
    CometChatUIKit.sendCustomMessage(customMessage)
  }

  getReceiverDetails() {
    let receiverId!: string;
    let receiverType!: string;
    if (this.userObject && this.userObject.getUid()) {
      receiverId = this.userObject.getUid();
      receiverType = CometChatUIKitConstants.MessageReceiverType.user;
    } else if (this.groupObject && this.groupObject.getGuid()) {
      receiverId = this.groupObject.getGuid();
      receiverType = CometChatUIKitConstants.MessageReceiverType.group;
    }
    return { receiverId: receiverId, receiverType: receiverType };
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

<cometchat-messages
  *ngIf="userObject"
  [user]="userObject"
  [messageListConfiguration]="messageListConfiguration"
  [messageComposerConfiguration]="messageComposerConfiguration"
></cometchat-messages>

</div>
<ng-template #auxilaryButtonViewTemplate let-item let-composerId="composerId">
  <cometchat-icon [name]="title" [URL]="myCustomIcon" [iconStyle]="getIconStyle" (click)="sendNudge(item)"></cometchat-icon>
</ng-template>
<ng-template #customBubbleRef>
  <div [ngStyle]="{'width': '100px', 'height': '100px', 'display': 'flex'}">
    <img [src]="myCustomIcon" alt="gif" />
  </div>
</ng-template>
```
</TabItem>
</Tabs>