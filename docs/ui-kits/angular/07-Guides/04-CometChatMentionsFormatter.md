---
sidebar_position: 4
title: Mentions Formatter
slug: /mentions-formatter-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `CometChatMentionsFormatter` class is a part of the CometChat UI Kit, a ready-to-use chat UI component library for integrating CometChat into your angular applications. This class provides functionality to format mentions within text messages displayed in the chat interface. Mentions allow users to reference other users within a conversation, providing a convenient way to direct messages or involve specific participants.

## Features

- **Mention Formatting**: Automatically formats mentions within text messages based on provided styles and settings.
- **Customizable Styles**: Allows customization of text styles for mentions, including colors, fonts, and background colors.
- **User and Group Member Mentions**: Supports mentions for both individual users and group members, providing flexibility in communication scenarios.
- **Mention List Generation**: Generates a list of suggested mentions based on user input, facilitating easy selection of recipients during message composition.
- **Mention Click Handling**: Provides a listener interface for handling click events on mentions, enabling custom actions to be performed when a mention is tapped by the user.

## Usage

To integrate the `CometChatMentionsFormatter` class into your application:

1. **Initialization**: Create an instance of the `CometChatMentionsFormatter` class and configure it with desired settings, such as mention text styles and limit settings.

```javascript
import { CometChatMentionsFormatter } from "path-to-your-file";

// Initialize the formatter
const mentionsFormatter = new CometChatMentions();
Formatter();
mentionsFormatter.setCometChatUserGroupMembers(userList);
```

2.  **Initialize the Formatter**: Initialize an instance of the formatter and configure it with any required settings, such as the list of users or groups to mention.

3.  **Process Chat Messages**: Once the formatter is initialized, you can process chat messages to format mentions appropriately:

    - Provide the Unformatted Message: Provide the unformatted message string, including any mention placeholders.

      ```jsx
      const unformattedMessage = "<@uid:aliceuid> just shared a photo!";
      ```

    - Apply the Formatter: Apply the formatter to the unformatted message using the `getFormattedText` method.

          ```jsx
          const formattedMessage = mentionsFormatter.getFormattedText(unformattedMessage);
          // Render the `formattedMessage` in your message component
          ```

      The `formattedMessage` now contains HTML with styled mentions, ready to be inserted into your message component for display.

Below is an example demonstrating how to use the `CometChatMentionsFormatter` class in components such as [CometChatConversations](/ui-kit/angular/conversations), [CometChatMessageList](/ui-kit/angular/message-list), [CometChatMessageComposer](/ui-kit/angular/message-composer).
