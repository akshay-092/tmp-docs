---
sidebar_position: 1
title: MessageTemplate
slug: /message-template
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatMessageTemplate` is a pre-defined structure for creating message views that can be used as a starting point or blueprint for creating message views, often known as message bubbles. These views appear in the message list view and render the messages of that particular chat or conversation. It allows developers to define standard message viewing formats that can be reused or customised for different use cases, or even add new ones for their own purposes.

## Structure of a MessageTemplate

| Name            | Purpose                                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Leading view    | This is where the avatar is displayed.                                                                                                                    |
| Header view     | This is where the name of the sender is displayed.                                                                                                        |
| Content view    | This is the main view where the contents of the message, such as text, image, etc. are displayed.                                                         |
| Bottom view     | This is the view which can be used to extend the message with some additional element such as the link preview or a "load more" button for long messages. |
| Thread view     | This is specifically meant for threaded messages where the "view replies" action appears.                                                                 |
| Footer view     | This is the designated area where any reactions added to the message are displayed.                                                                       |
| StatusInfo view | This is where the timestamp of the message and delivery & read status are displayed.                                                                      |

![](./assets/1kbpuwziiq15wd9pg0jz8w5qf25y4e7vzlpf6208su4e099c6t2ph3itkqnk52yo.png)

### Properties

| Name           | Type                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | string                                                                                                                                                                       | Type of the CometChat message                                                                                                                                                                                                                                                                                                                                       |
| category       | string                                                                                                                                                                       | Category of the CometChat message                                                                                                                                                                                                                                                                                                                                   |
| headerView     | view                                                                                                                                                                         | Custom component to customize the header section for each message bubble. By default, it displays the message sender's name.                                                                                                                                                                                                                                        |
| contentView    | view                                                                                                                                                                         | Custom component to customize the content section for each message bubble. By default, it displays the [Text bubble](/web-elements/text-bubble), [Image bubble](/web-elements/image-bubble), [File bubble](/web-elements/file-bubble), [Audio bubble](/web-elements/audio-bubble), and [Video bubble](/web-elements/video-bubble) based on the type of the message. |
| footerView     | view                                                                                                                                                                         | Custom component to customize the footer section for each message bubble. By default, it displays the reactions.                                                                                                                                                                                                                                                    |
| statusInfoView | view                                                                                                                                                                         | Custom component to customize the statusInfo section for each message bubble. By default, it displays the receipt and the timestamp.                                                                                                                                                                                                                                |
| bubbleView     | view                                                                                                                                                                         | Custom component to customize the complete message bubble. By default, headerView, contentView and footerView collectively forms a message bubble.                                                                                                                                                                                                                  |
| options        | (loggedInUser:CometChat.User &#124; null, group:CometChat.Group &#124; null, message: CometChat.BaseMessage) =&gt; array&lt;CometChatActionsIcon &#124; CometChatActionsView | List of available actions that any user can perform on a message, like reacting, editing or deleting a message.                                                                                                                                                                                                                                                     |

### Built-in support

CometChat UI Kit supports the following message categories and types.

Category: `message`

Type: `text`, `image`, `video`, `audio`, `file`

## Customisation

To work with templates, you'll need to import the following classes.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import {
  CometChatMessages,
  ChatConfigurator,
  CometChatContext,
} from "@cometchat/chat-uikit-react";
import {
  MessagesStyle,
  MessageListConfiguration,
  MessageStatus,
} from "@cometchat/uikit-shared";
import {
  CometChatUIKitConstants,
  CometChatMessageEvents,
  CometChatMessageOption,
  CometChatMessageTemplate,
  CometChatTheme,
  fontHelper,
  CometChatActionsIcon,
} from "@cometchat/uikit-resources";
import { CometChat } from "@cometchat/chat";
```

</TabItem>
</Tabs>

### List all available templates

To list all available templates, you can check the `getAllMessageTemplates()` from DataSource.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);

let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
```

</TabItem>
</Tabs>

### Customize an existing template

Once you get the list of existing templates, you need to find the one that you are looking to edit.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
let imageTemplate = definedTemplates.find(
  (template) =>
    template.category === CometChatUIKitConstants.MessageCategory.message &&
    template.type === CometChatUIKitConstants.MessageTypes.image
);
```

</TabItem>
</Tabs>

And then you can make changes to it.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
if (imageTemplate) {
  const imageTemplateObjectIndex = definedTemplates.indexOf(imageTemplate);

  imageTemplate.options = (
    loggedInUser: CometChat.User,
    message: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group | undefined
  ) => getOptions(loggedInUser, message, theme, group);
  console.log("imageTemplateObjectIndex", imageTemplateObjectIndex);

  if (imageTemplateObjectIndex > -1) {
    definedTemplates.splice(imageTemplateObjectIndex, 1, imageTemplate);
    console.log("definedTemplates", definedTemplates);
    setTemplates(definedTemplates);
  }
}
```

</TabItem>
</Tabs>

### Add a new template

To add a new template, you can simply create a new one and add it to the list of existing templates.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
const myTemplate = new CometChatMessageTemplate();
definedTemplates.unshift(myTemplate);
setTemplates(definedTemplates);
```

</TabItem>
</Tabs>

### Remove a template

Removing a template is also as simple as adding a new template. Find the template that you are looking to remove.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
let imageTemplate = definedTemplates.find(
  (template) =>
    template.category === CometChatUIKitConstants.MessageCategory.message &&
    template.type === CometChatUIKitConstants.MessageTypes.image
);
```

</TabItem>
</Tabs>

And remove it from the array.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
if (imageTemplate) {
  definedTemplates.shift(imageTemplate);
}
```

</TabItem>
</Tabs>
