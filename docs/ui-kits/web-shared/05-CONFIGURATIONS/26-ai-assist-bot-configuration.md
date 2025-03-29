---
sidebar_position: 26
title: AIAssistBotConfiguration
slug: /ai-assist-bot-configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This refers to the properties of the `AIAssistBot` component that are available for customisation.

The `AIAssistBotConfiguration` has the below properties,

### Properties

| Property                 | Type                                                                                     | Description                                                                                                                                                                                                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                    | (bot: CometChat.User) =&gt; string                                                       | Used to set a custom title.                                                                                                                                                                                                                                                                     |
| botFirstMessageText      | (bot: CometChat.User) =&gt; string                                                       | Used to set the first bot message.                                                                                                                                                                                                                                                              |
| assistBotStyle           | [AIAssistBotStyle](/web-shared/ai-assist-bot-style)                                      | Used to provide custom styling to conversation summary view.                                                                                                                                                                                                                                    |
| botMessageBubbleStyle    | [AIBotMessageBubbleStyle](/web-shared/ai-assist-bot-style#aibotmessagebubblestyle)       | Used to customise the bot message bubble style.                                                                                                                                                                                                                                                 |
| senderMessageBubbleStyle | [AISenderMessageBubbleStyle](/web-shared/ai-assist-bot-style#aisendermessagebubblestyle) | Used to customise the sender message bubble style                                                                                                                                                                                                                                               |
| messageInputStyle        | [MessageInputStyle](/web-elements/message-input#messageinputstyle)                       | Used to customise the message input style.                                                                                                                                                                                                                                                      |
| avatarStyle              | [AvatarStyle](/web-elements/avatar#avatar-style)                                         | Used to customise the avatar style.                                                                                                                                                                                                                                                             |
| closeIconUrl             | string                                                                                   | Custom close button icon url.                                                                                                                                                                                                                                                                   |
| sendIconURL              | string                                                                                   | Custom send button icon url.                                                                                                                                                                                                                                                                    |
| backIconURL              | string                                                                                   | Custom back button icon url.                                                                                                                                                                                                                                                                    |
| loadingIconUrl           | string                                                                                   | Custom loading icon url.                                                                                                                                                                                                                                                                        |
| errorIconURL             | string                                                                                   | Custom error icon url.                                                                                                                                                                                                                                                                          |
| apiConfiguration         | (user?: CometChat.User, group?: CometChat.Group) =&gt; Promise&lt;Object&gt;             | The `apiConfiguration` callback allows you to override the default logic of fetching conversation starters. The `apiConfiguration` callback passes the user/group object of the conversation. You can use the [SDK Method](/ai/bots) & pass additional configuration to customise the response. |

### Usage

#### Custom icon URLs

<Tabs>
<TabItem value="react" label="React">

```react
import { AIAssistBotConfiguration } from "@cometchat/uikit-shared";

const configuration = new AIAssistBotConfiguration({
  loadingIconURL: "URL",
  errorIconURL: "URL",
  closeIconUrl: "URL",
  sendIconURL: "URL",
  backIconURL: "URL"
});
```

</TabItem>
<TabItem value="vue" label="Vue">

```vue
import { AIAssistBotConfiguration } from "@cometchat/uikit-shared"; const
configuration = new AIAssistBotConfiguration({ loadingIconURL: "URL",
errorIconURL: "URL", closeIconUrl: "URL", sendIconURL: "URL", backIconURL: "URL"
});
```

</TabItem>
</Tabs>

#### Custom style

<Tabs>
<TabItem value="react" label="React">

```react
import { AIAssistBotConfiguration, AIAssistBotStyle, AIBotMessageBubbleStyle, AISenderMessageBubbleStyle } from "@cometchat/uikit-shared";
import { AvatarStyle, MessageInputStyle } from "@cometchat/uikit-elements";

const customAssistBotStyle: AIAssistBotStyle = new AIAssistBotStyle({
	titleFont: "20px Arial, sans-serif"
});

const customBotMessageBubbleStyle: AIBotMessageBubbleStyle = new AIBotMessageBubbleStyle({
  textFont: "20px Arial, sans-serif"
});

const customSenderMessageBubbleStyle: AISenderMessageBubbleStyle = new AISenderMessageBubbleStyle({
	textFont: "20px Arial, sans-serif"
});

const customMessageInputStyle: MessageInputStyle = new MessageInputStyle({
	textFont: "20px Arial, sans-serif"
});

const customAvatarStyle: AvatarStyle = new AvatarStyle({
	borderRadius: "24px"
});

configuration = new AIAssistBotConfiguration({
  assistBotStyle: customAssistBotStyle,
	botMessageBubbleStyle: customBotMessageBubbleStyle,
  senderMessageBubbleStyle: customSenderMessageBubbleStyle,
  messageInputStyle: customMessageInputStyle,
  avatarStyle: customAvatarStyle
});
```

</TabItem>
<TabItem value="vue" label="Vue">

```vue
import { AIAssistBotConfiguration, AIAssistBotStyle, AIBotMessageBubbleStyle,
AISenderMessageBubbleStyle } from "@cometchat/uikit-shared"; import {
AvatarStyle, MessageInputStyle } from "@cometchat/uikit-elements"; const
customAssistBotStyle: AIAssistBotStyle = new AIAssistBotStyle({ titleFont: "20px
Arial, sans-serif" }); const customBotMessageBubbleStyle:
AIBotMessageBubbleStyle = new AIBotMessageBubbleStyle({ textFont: "20px Arial,
sans-serif" }); const customSenderMessageBubbleStyle: AISenderMessageBubbleStyle
= new AISenderMessageBubbleStyle({ textFont: "20px Arial, sans-serif" }); const
customMessageInputStyle: MessageInputStyle = new MessageInputStyle({ textFont:
"20px Arial, sans-serif" }); const customAvatarStyle: AvatarStyle = new
AvatarStyle({ borderRadius: "24px" }); configuration = new
AIAssistBotConfiguration({ assistBotStyle: customAssistBotStyle,
botMessageBubbleStyle: customBotMessageBubbleStyle, senderMessageBubbleStyle:
customSenderMessageBubbleStyle, messageInputStyle: customMessageInputStyle,
avatarStyle: customAvatarStyle });
```

</TabItem>
</Tabs>

#### API Configuration Callback

<Tabs>
<TabItem value="react" label="React">

```react
import { AIAssistBotConfiguration, AIAssistBotStyle, AIBotMessageBubbleStyle, AISenderMessageBubbleStyle } from "@cometchat/uikit-shared";
import { AvatarStyle, MessageInputStyle } from "@cometchat/uikit-elements";

const customAssistBotStyle: AIAssistBotStyle = new AIAssistBotStyle({
	titleFont: "20px Arial, sans-serif"
});

const customBotMessageBubbleStyle: AIBotMessageBubbleStyle = new AIBotMessageBubbleStyle({
  textFont: "20px Arial, sans-serif"
});

const customSenderMessageBubbleStyle: AISenderMessageBubbleStyle = new AISenderMessageBubbleStyle({
	textFont: "20px Arial, sans-serif"
});

const customMessageInputStyle: MessageInputStyle = new MessageInputStyle({
	textFont: "20px Arial, sans-serif"
});

const customAvatarStyle: AvatarStyle = new AvatarStyle({
	borderRadius: "24px"
});

configuration = new AIAssistBotConfiguration({
  assistBotStyle: customAssistBotStyle,
	botMessageBubbleStyle: customBotMessageBubbleStyle,
  senderMessageBubbleStyle: customSenderMessageBubbleStyle,
  messageInputStyle: customMessageInputStyle,
  avatarStyle: customAvatarStyle
});
```

</TabItem>
<TabItem value="vue" label="Vue">

```vue
import { CometChat } from "@cometchat/chat-sdk-javascript"; import {
AIAssistBotConfiguration } from "@cometchat/uikit-shared"; const
apiConfiguration = (user?: CometChat.User, group?: CometChat.Group)=> { return
new Promise((resolve, reject) => { const receiverId = user ? user.getUid() :
group.getGuid(); const receiverType = user ? 'user' : 'group'; const botUid =
bot.getUid(); const question = ""; CometChat.askBot(receiverId, receiverType,
botUid, question).then( (response: any)=>{ return resolve(response) })
.catch((err: CometChat.CometChatException)=>{ return reject(err) }) }) } const
configuration = new AIAssistBotConfiguration({apiConfiguration:
apiConfiguration});
```

</TabItem>
</Tabs>
