---
sidebar_position: 3
sidebar_label: Extensions
title: Extensions
slug: /extensions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

CometChat’s UI Kit comes with built-in support for a wide variety of extensions that provide additional functionality. These extensions enhance the chatting experience, making it more interactive, secure, and efficient.

Activating any of the extensions in CometChat is a simple process done through your application's dashboard. Refer to our guide For detailed information on [Extensions](/extensions/overview)

Once you have successfully enabled the desired extension in your dashboard, it will be reflected in your CometChat application upon initialization and successful login. Please note, that the extension features will only be available if they are supported by CometChat UI Kit.

CometChat’s UI Kit offers built-in support for 12 powerful extensions. This seamless integration makes it easy for you to enhance your chat application with engaging features without any extra coding effort. Just enable the desired extensions from the CometChat Dashboard, and they will be automatically reflected in the relevant components of your application, providing a richer and more engaging experience for your users.

## Built-in Extensions

Here's a guide on how you can enable and integrate these extensions:

### Stickers

The Stickers extension allows users to express their emotions more creatively. It adds a much-needed fun element to the chat by allowing users to send various pre-designed stickers. For a comprehensive understanding and guide on implementing and using the Sticker Extension, refer to our specific guide on the [Sticker Extension](/extensions/stickers).

Once you have successfully activated the [Sticker Extension](/extensions/stickers) from your CometChat Dashboard, the feature will automatically be incorporated into the [Message Composer](/ui-kit/ios/message-composer) component of UI Kits.

![](../../assets/extension_stickers_screens.png)

### Polls

The Polls extension enhances group discussions by allowing users to create polls. Users can ask questions with a predefined list of answers, enabling a quick, organized way to gather group opinions. For a comprehensive understanding and guide on implementing and using the Polls Extension, refer to our specific guide on the [Polls Extension](/extensions/polls).

Once you have successfully activated the [Polls Extension](/extensions/polls) from your CometChat Dashboard, the feature will automatically be incorporated into the Action Sheet of the [Message Composer](/ui-kit/ios/message-composer) component of UI Kits.

![](../../assets/extension_polls_screens.png)

<!-- ![](./assets/274e29b97006e719e7d71952faba5496.png) -->

### Collaborative Whiteboard

The Collaborative Whiteboard extension facilitates real-time collaboration. Users can draw, brainstorm, and share ideas on a shared digital whiteboard. For a comprehensive understanding and guide on implementing and using the Collaborative Whiteboard Extension, refer to our specific guide on the [Collaborative Whiteboard Extension](/extensions/collaborative-whiteboard).

Once you have successfully activated the [Collaborative Whiteboard Extension](/extensions/collaborative-whiteboard) from your CometChat Dashboard, the feature will automatically be incorporated into the Action Sheet of the [Message Composer](/ui-kit/ios/message-composer) component of UI Kits.

![](../../assets/extension_collaborative_whiteboard_screens.png)

<!-- ![](./assets/da88cc806ecbf8e129b92d8878b46a3f.png) -->

### Collaborative Document

With the Collaborative Document extension, users can work together on a shared document. This feature is essential for remote teams where document collaboration is a recurring requirement. For a comprehensive understanding and guide on implementing and using the Collaborative Document Extension, refer to our specific guide on the [Collaborative Document Extension](/extensions/collaborative-document).

Once you have successfully activated the [Collaborative Document Extension](/extensions/collaborative-document) from your CometChat Dashboard, the feature will automatically be incorporated into the Action Sheet of the [Message Composer](/ui-kit/ios/message-composer) component of UI Kits.

![](../../assets/extension_collaborative_document_screens.png)

<!-- ![](./assets/5baea89af0cb5d312b7caf74faf69cf9.png) -->

### Message Reactions

Message Reactions extension lets users express their emotions towards a message by choosing from a range of emojis. It provides a quick way to respond to any shared message. For a comprehensive understanding and guide on implementing and using the Message Reactions Extension, refer to our specific guide on the [Message Reactions Extension](/extensions/reactions).

Once you have successfully activated the [Message Reactions Extension](/extensions/reactions) from your CometChat Dashboard, the feature will automatically be incorporated into the Action Sheet of [MessageList Component](/ui-kit/ios/message-list) component of UI Kits.

![](../../assets/extension_message_reactions_screens.png)

<!-- ![](./assets/7385b7a088d4af885a7d00ff16026806.png) -->

### Message Translation

The Message Translation extension in CometChat is designed to translate any message into your local. It eliminates language barriers, making the chat more inclusive. For a comprehensive understanding and guide on implementing and using the Message Translation Extension, refer to our specific guide on the [Message Translation Extension](/extensions/message-translation).

Once you have successfully activated the [Message Translation Extension](/extensions/message-translation) from your CometChat Dashboard, the feature will automatically be incorporated into the Action Sheet of [MessageList Component](/ui-kit/ios/message-list) component of UI Kits.

![](../../assets/extension_message_translation_screens.png)

<!-- ![](./assets/f91d1e7fbf105078c5ccd34876e3264e.png) -->

### Link Preview

The Link Preview extension provides a summary of the URL shared in the chat. It includes the title, a description, and a thumbnail image from the web page. For a comprehensive understanding and guide on implementing and using the Link Preview Extension, refer to our specific guide on the [Link Preview Extension](/extensions/link-preview).

Once you have successfully activated the [Link Preview Extension](/extensions/link-preview) from your CometChat Dashboard, the feature will automatically be incorporated into the Message Bubble of [MessageList Component](/ui-kit/ios/message-list) component of UI Kits.

<!-- ![](./assets/204ea90b28ed6e989f84aa76e2166873.png) -->

### Profanity Filter

The Profanity Filter extension helps in maintaining the chat decorum by censoring obscene and inappropriate words in the messages. For a comprehensive understanding and guide on implementing and using the Profanity Filter Extension, refer to our specific guide on the [Profanity Filter Extension](/extensions/profanity-filter).

Once you have successfully activated the [Profanity Filter Extension](/extensions/profanity-filter) from your CometChat Dashboard, the feature will automatically be incorporated into the Message Bubble of [MessageList Component](/ui-kit/ios/message-list) component of UI Kits.

![](../../assets/extension_profanity_filter_screens.png)

<!-- ![](./assets/9f6673a52d77b9c6d47eee348d00e576.png) -->

### Data Masking

The Data Masking extension helps secure sensitive data by masking information like credit card numbers and phone numbers in a chat message. For a comprehensive understanding and guide on implementing and using the Data Masking Extension, refer to our specific guide on the [Data Masking Extension](/extensions/data-masking-filter).

Once you have successfully activated the [Data Masking Extension](/extensions/data-masking-filter) from your CometChat Dashboard, the feature will automatically be incorporated into the Message Bubble of [MessageList Component](/ui-kit/ios/message-list) component of UI Kits.

![](../../assets/extension_data_masking_screens.png)

<!-- ![](./assets/d2b1bda779ee8e4a9dd8711334fe86a4.png) -->

### Image Moderation

The Image Moderation extension uses machine learning to detect and filter out inappropriate or explicit images shared in the chat. For a comprehensive understanding and guide on implementing and using the Image Moderation Extension, refer to our specific guide on the [Image Moderation Extension](/extensions/image-moderation).

Once you have successfully activated the [Data Masking Extension](/extensions/data-masking-filter) from your CometChat Dashboard, the feature will automatically be incorporated into the Message Bubble of [MessageList Component](/ui-kit/ios/message-list) component of UI Kits.

![](../../assets/extension_image_moderation_screens.png)

<!-- ![](./assets/258e5243ca44f67e0fe4bf22cefdf797.png) -->

### Thumbnail Generation

The Thumbnail Generation extension automatically creates a smaller preview image whenever a larger image is shared, helping to reduce the upload/download time and bandwidth usage. For a comprehensive understanding and guide on implementing and using the Thumbnail Generation Extension, refer to our specific guide on the [Thumbnail Generation Extension](/extensions/thumbnail-generation).

Once you have successfully activated the [Thumbnail Generation Extension](/extensions/thumbnail-generation) from your CometChat Dashboard, the feature will automatically be incorporated into the Message Bubble of [MessageList Component](/ui-kit/ios/message-list) component of UI Kits.

![](../../assets/extension_thumbnail_generation_screens.png)

<!-- ![](./assets/6eb4d647d7d779559f65bf51e8e658ef.png) -->

### Smart Replies

Smart Replies extension provides automated, predictive text responses, making the conversation more efficient by reducing the response time. For a comprehensive understanding and guide on implementing and using the Smart Replies Extension, refer to our specific guide on the [Smart Replies Extension](/extensions/smart-replies).
