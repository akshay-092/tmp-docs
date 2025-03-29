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

![](../../assets/Instant_Messaging.png)

| Components                                          | Functionality                                                                                                                                                          |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MessageComposer](../../05-Components/08-message-composer.md) | [MessageComposer](../../05-Components/08-message-composer.md) is a Component that enables users to write and send a variety of messages.                                         |
| [MessageList](../../05-Components/07-message-list.md)         | [MessageList](../../05-Components/07-message-list.md) is a Component that renders a list of messages sent and messages received using [TextBubble](../../04-Theming/04-message-bubble-styling.md#text-bubble). |

## Media Sharing

Beyond text, CometChat allows users to share various media types within their conversations. This includes images, videos, audio files, and documents, enriching the chat experience and enabling more comprehensive communication.

![](../../assets/Media_Sharing.png)

| Components                                          | Functionality                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [MessageComposer](../../05-Components/08-message-composer.md) | [MessageComposer](../../05-Components/08-message-composer.md) is a Component that has ActionSheet, ActionSheet is a menu that appears over the context of the app, providing multiple options for sharing media files.                                                                                     |
| [MessageList](../../05-Components/07-message-list.md)         | [MessageList](../../05-Components/07-message-list.md) is a Component that renders different Media Message bubbles like [Image Bubble](../../04-Theming/04-message-bubble-styling.md#image-bubble), [File Bubble](../../04-Theming/04-message-bubble-styling.md#file-bubble), [Audio Bubble](../../04-Theming/04-message-bubble-styling.md#audio-bubble) [Video Bubble](../../04-Theming/04-message-bubble-styling.md#video-bubble) |

> Messages component can be made by using comprehensive component that includes both the [MessageComposer](../../05-Components/08-message-composer.md) and the [MessageList](../../05-Components/07-message-list.md) components. So, if you're looking to implement a messaging feature in your application, using the Messages component would be a straightforward and efficient way to do it.

## Read Receipts

CometChat's Read Receipts feature provides visibility into the message status, letting users know when a message has been delivered and read. This brings clarity to the communication and ensures users are informed about the status of their messages.

![](../../assets/Read_receipts.png)

| Components                                                | Functionality                                                                                                                                                                                                                                                  |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Conversations](../../05-Components/02-conversations.md)            | [Conversations](../../05-Components/02-conversations.md) is a Component that renders Conversations item List, Conversation item also displays the delivery status of the last message providing users with real-time updates on the status of their messages.            |
| [MessageList](../../05-Components/07-message-list.md)               | [MessageList](../../05-Components/07-message-list.md) is a Component that renders different types of Message bubbles, Read Recept status is an integral part of all message bubbles, no matter the type, and provides real-time updates about the status of the message. |
| [MessageInformation](../../04-Theming/03-component-styling.md#message-information) | [MessageInformation](../../04-Theming/03-component-styling.md#message-information) component provides transparency into the status of each sent message, giving the sender insights into whether their message has been delivered and read.                                             |

## Typing Indicator

The Typing Indicator feature in CometChat shows when a user is typing a response in real-time, fostering a more interactive and engaging chat environment. This feature enhances the real-time communication experience, making conversations feel more natural and fluid.

![](../../assets/Typing_Indicator.png)

| Components                                       | Functionality                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Conversations](../../05-Components/02-conversations.md)   | [Conversations](../../05-Components/02-conversations.md) is a Component that renders Conversations item List, Conversations item also shows real-time typing status indicators. This means that if a user in a one-on-one chat or a participant in a group chat is currently typing a message                      |
| [Message Header](../../05-Components/06-message-header.md) | [Message Header](../../05-Components/06-message-header.md) that renders details of User or Groups in ToolBar. The MessageHeader also handles the Typing Indicator functionality. When a user or a member in a group is typing, the MessageHeader dynamically updates to display a 'typing...' status in real-time. |

## User Presence

CometChat's User Presence feature allows users to see whether their contacts are online, offline. This helps users know the best time to initiate a conversation and sets expectations about response times.

![](../../assets/User_Presence.png)

| Components                                       | Functionality                                                                                                                                                    |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Conversations](../../05-Components/02-conversations.md)   | [Conversations](../../05-Components/02-conversations.md) is a Component that renders Conversations item List, Conversations item also shows user presence information.     |
| [Message Header](../../05-Components/06-message-header.md) | [Message Header](../../05-Components/06-message-header.md) that renders details of User or Groups in ToolBar. The MessageHeader also handles user Presence information.    |
| [Users](../../05-Components/03-users.md)                   | [Users](../../05-Components/03-users.md) renders list of users available in your app.It also responsible to render users Presence information.                             |
| [Group Members](../../05-Components/05-group-members.md)   | [Group Members](../../05-Components/05-group-members.md) renders list of users available in the group. The Group Members component also handles user Presence information. |

## Reactions

CometChat's Reactions feature adds a layer of expressiveness to your chat application by allowing users to react to messages. With Reactions, users can convey a range of emotions or express their thoughts on a particular message without typing out a full response, enhancing their user experience and fostering greater engagement.

![](../../assets/Reactions.png)

| Components                                  | Functionality                                                                                                                                                                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [MessageList](../../05-Components/07-message-list.md) | [MessageList](../../05-Components/07-message-list.md) is a Component that renders different types of Message bubbles, Irrespective of the type of message bubble, Reactions are an integral part and offer a more engaging, expressive way for users to respond to messages. |

## Mentions

Mentions is a robust feature provided by CometChat that enhances the interactivity and clarity of group or 1-1 chats by allowing users to directly address or refer to specific individuals in a conversation.

![](../../assets/Mentions.png)

| Components                                          | Functionality                                                                                                                                                                                                                                                    |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Conversations](../../05-Components/02-conversations.md)      | [Conversations](../../05-Components/02-conversations.md) component provides an enhanced user experience by integrating the Mentions feature. This means that from the conversation list itself, users can see where they or someone else have been specifically mentioned. |
| [MessageComposer](../../05-Components/08-message-composer.md) | [MessageComposer](../../05-Components/08-message-composer.md)is a component that allows users to craft and send various types of messages, including the usage of the Mentions feature for direct addressing within the conversation.                                      |
| [MessageList](../../05-Components/07-message-list.md)         | [MessageList](../../05-Components/07-message-list.md) is a component that displays a list of sent and received messages. It also supports the rendering of Mentions, enhancing the readability and interactivity of conversations.                                         |

## Threaded Conversations

The Threaded Conversations feature enables users to respond directly to a specific message in a chat. This keeps conversations organized and enhances the user experience by maintaining context, especially in group chats.

![](../../assets/Threads.png)

| Components                                          | Functionality                                                                                                                                                                                                               |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Threaded Header](../../05-Components/09-threaded-message-header.md)  | [Threaded Header](../../05-Components/09-threaded-message-header.md) that displays all replies made to a particular message in a conversation.                                                                                                |
| [MessageComposer](../../05-Components/08-message-composer.md) | [MessageComposer](../../05-Components/08-message-composer.md)is a component that allows users to craft and send various types of messages, including the usage of the Mentions feature for direct addressing within the conversation. |
| [MessageList](../../05-Components/07-message-list.md)         | [MessageList](../../05-Components/07-message-list.md) is a component that displays a list of sent and received messages. It also supports the rendering of Mentions, enhancing the readability and interactivity of conversations.    |

## Group Chat

CometChat facilitates Group Chats, allowing users to have conversations with multiple participants simultaneously. This feature is crucial for team collaborations, group discussions, social communities, and more.

![](../../assets/Group_Conversation.png)

For a comprehensive understanding and guide on implementing and using the Groups feature in CometChat, you should refer to our detailed guide on [Groups](../../05-Components/04-groups.md).
