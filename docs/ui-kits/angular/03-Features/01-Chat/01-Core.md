---
sidebar_position: 1
sidebar_label: Core
title: Core
slug: /core-features
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The UI Kit comprises a variety of components, each designed to work seamlessly with one another to deliver a comprehensive and intuitive chat experience.

Here's how different UI Kit components work together to achieve CometChat's Core features:

## Instant Messaging

At the heart of CometChat's functionality is the ability to support real-time text messaging. Users can send and receive instant messages, fostering quick and efficient communication.

![](../../assets/feature_chat_web_screens.png)

| Components                                        | Functionality                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [MessageComposer](/ui-kit/angular/message-composer) | [MessageComposer](/ui-kit/angular/message-composer) is a Component that enables users to write and send a variety of messages.                                                                                                                                                                                                                                                                           |
| [MessageList](/ui-kit/angular/message-list)         | [MessageList](/ui-kit/angular/message-list) is a Component that renders a list of messages sent and messages received using [TextBubble](/ui-kit/angular/text-bubble).                                                                                                                                                                                                                                     |
| [Messages](/ui-kit/angular/messages)                | [Messages](/ui-kit/angular/messages) component in CometChat's UI Kit is a comprehensive component that includes both the [MessageComposer](/ui-kit/angular/message-composer) and the [MessageList](/ui-kit/angular/message-list) components. So, if you're looking to implement a messaging feature in your application, using the Messages component would be a straightforward and efficient way to do it. |

## Media Sharing

Beyond text, CometChat allows users to share various media types within their conversations. This includes images, videos, audio files, and documents, enriching the chat experience and enabling more comprehensive communication.

![](../../assets/feature_media_sharing_web_screens.png)

| Components                                        | Functionality                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MessageComposer](/ui-kit/angular/message-composer) | the [MessageComposer](/ui-kit/angular/message-composer) component includes an ActionSheet. This ActionSheet serves as a menu appearing over the app's context, offering various options for sharing media files.                                                                                          |
| [MessageList](/ui-kit/angular/message-list)         | the [MessageList](/ui-kit/angular/message-list) component is responsible for rendering various Media Message bubbles, such as [Image Bubble](/ui-kit/angular/image-bubble), [File Bubble](/ui-kit/angular/file-bubble), [Audio Bubble](/ui-kit/angular/audio-bubble) [Video Bubble](/ui-kit/angular/video-bubble) |

> In CometChat's UI Kit, the [Messages](/ui-kit/angular/messages) component combines both the [MessageComposer](/ui-kit/angular/message-composer) and the [MessageList](/ui-kit/angular/message-list) components. If you want to add messaging features to your app, using the Messages component is a simple and effective approach.

## Read Receipts

CometChat's Read Receipts feature provides visibility into the message status, letting users know when a message has been delivered and read. This brings clarity to the communication and ensures users are informed about the status of their messages.

![](../../assets/feature_read_receipt_web_screens.png)

| Components                                              | Functionality                                                                                                                                                                                                                                                |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Conversations](/ui-kit/angular/conversations)            | [Conversations](/ui-kit/angular/conversations) is a Component that renders Conversations item List, Conversation item also displays the delivery status of the last message providing users with real-time updates on the status of their messages.            |
| [MessageList](/ui-kit/angular/message-list)               | [MessageList](/ui-kit/angular/message-list) is a Component that renders different types of Message bubbles, Read Recept status is an integral part of all message bubbles, no matter the type, and provides real-time updates about the status of the message. |
| [MessageInformation](/ui-kit/angular/message-information) | [MessageInformation](/ui-kit/angular/message-information) component provides transparency into the status of each sent message, giving the sender insights into whether their message has been delivered and read.                                             |

## Typing Indicator

The Typing Indicator feature in CometChat shows when a user is typing a response in real-time, fostering a more interactive and engaging chat environment. This feature enhances the real-time communication experience, making conversations feel more natural and fluid.

![](../../assets/feature_typing_indicator_web_screens.png)

| Components                                     | Functionality                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Conversations](/ui-kit/angular/conversations)   | [Conversations](/ui-kit/angular/conversations) is a Component that renders Conversations item List, Conversations item also shows real-time typing status indicators. This means that if a user in a one-on-one chat or a participant in a group chat is currently typing a message                      |
| [Message Header](/ui-kit/angular/message-header) | [Message Header](/ui-kit/angular/message-header) that renders details of User or Groups in ToolBar. The MessageHeader also handles the Typing Indicator functionality. When a user or a member in a group is typing, the MessageHeader dynamically updates to display a 'typing...' status in real-time. |

## User Presence

CometChat's User Presence feature allows users to see whether their contacts are online, offline. This helps users know the best time to initiate a conversation and sets expectations about response times.

![](../../assets/feature_status_indicator_web_screens.png)

| Components                                     | Functionality                                                                                                                                                  |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Conversations](/ui-kit/angular/conversations)   | [Conversations](/ui-kit/angular/conversations) is a Component that renders Conversations item List, Conversations item also shows user presence information.     |
| [Message Header](/ui-kit/angular/message-header) | [Message Header](/ui-kit/angular/message-header) that renders details of User or Groups in ToolBar. The MessageHeader also handles user Presence information.    |
| [Users](/ui-kit/angular/users)                   | [Users](/ui-kit/angular/users) renders list of users available in your app.It also responsible to render users Presence information.                             |
| [Group Members](/ui-kit/angular/group-members)   | [Group Members](/ui-kit/angular/group-members) renders list of users available in the group. The Group Members component also handles user Presence information. |

## Reactions

CometChat's Reactions feature adds a layer of expressiveness to your chat application by allowing users to angular to messages. With Reactions, users can convey a range of emotions or express their thoughts on a particular message without typing out a full response, enhancing their user experience and fostering greater engagement.
![](../../assets/reactions_web_screens.png)

| Components                                | Functionality                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MessageList](/ui-kit/angular/message-list) | [MessageList](/ui-kit/angular/message-list) is a Component that renders different types of Message bubbles, Irrespective of the type of message bubble, Reactions are an integral part and offer a more engaging, expressive way for users to respond to messages.                                                                                                                                      |
| [Messages](/ui-kit/angular/messages)        | [Messages](/ui-kit/angular/messages)component in CometChat's UI Kit is a comprehensive component that includes both the [MessageComposer](/ui-kit/angular/message-composer) and the [MessageList](/ui-kit/angular/message-list) components. So, if you're looking to implement a messaging feature in your application, using the Messages component would be a straightforward and efficient way to do it. |

## Mentions

Mentions is a robust feature provided by CometChat that enhances the interactivity and clarity of group or 1-1 chats by allowing users to directly address or refer to specific individuals in a conversation.
![](../../assets/mentions_web_screens.png)
| Components | Functionality |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Conversations](/ui-kit/angular/conversations) | [Conversations](/ui-kit/angular/conversations) component provides an enhanced user experience by integrating the Mentions feature. This means that from the conversation list itself, users can see where they or someone else have been specifically mentioned. |
| [MessageComposer](/ui-kit/angular/message-composer) | [MessageComposer](/ui-kit/angular/message-composer) is a component that allows users to craft and send various types of messages, including the usage of the Mentions feature for direct addressing within the conversation. |
| [MessageList](/ui-kit/angular/message-list) | [MessageList](/ui-kit/angular/message-list) is a component that displays a list of sent and received messages. It also supports the rendering of Mentions, enhancing the readability and interactivity of conversations.|
|[Messages](/ui-kit/angular/messages)|[Messages](/ui-kit/angular/messages) The component is a comprehensive element in CometChat's UI Kit, encapsulating both the [MessageComposer](/ui-kit/angular/message-composer) and [MessageList](/ui-kit/angular/message-list) components. It fully supports the Mentions feature, providing a streamlined way to implement an interactive and engaging messaging function in your application.|

## Threaded Conversations

The Threaded Conversations feature enables users to respond directly to a specific message in a chat. This keeps conversations organized and enhances the user experience by maintaining context, especially in group chats.

![](../../assets/threaded_conversations.png)

| Components                                           | Functionality                                                                                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [Threaded Messages](/ui-kit/angular/threaded-messages) | [Threaded Messages](/ui-kit/angular/threaded-messages) that displays all replies made to a particular message in a conversation. |

## Group Chat

CometChat facilitates Group Chats, allowing users to have conversations with multiple participants simultaneously. This feature is crucial for team collaborations, group discussions, social communities, and more.

![](../../assets/group_chat_web_screens.png)

For a comprehensive understanding and guide on implementing and using the Groups feature in CometChat, you should refer to our detailed guide on [Groups](/ui-kit/angular/groups).
