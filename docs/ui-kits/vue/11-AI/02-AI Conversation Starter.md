---
sidebar_position: 2
title: AI Conversation Starter
slug: /ai-conversation-starter
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Configure Conversation Starter with this class.

```AI Conversation Starter``` is a class which fetches a list of opening messages generated using AI for starting a new conversation.

### Integration
AI Conversation Starter will be enabled by default if it is enabled in the Dashboard. The UI & functionality of AI Conversation Starter can be customized via Configuration.

<Tabs>
<TabItem value="js" label="Javascript">

```js
const conversationStarterConfiguration = new AIConversationStarterConfiguration({});
```

</TabItem>
</Tabs>


This configuration needs to be passed to AI Conversation Starter Class when it is passed to ```setAiFeatures()``` method of ```UIKitSettingsBuilder```.

<Tabs>
<TabItem value="js" label="Javascript">

```js
const aiFeatures = [new AIConversationStarterExtension(conversationStarterConfiguration)];

// Pass this list of features to setAiFeatures method.
new UIKitSettingsBuilder().setAiFeatures(aiFeatures);
```

</TabItem>
</Tabs>


| Properties                    | Type                                                           | Description                                                                                                                             |
| ----------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| configuration           | [AIConversationStarterConfiguration](/web-shared/ai-conversation-starter-configuration)         | This is a configuration to customise behaviour & UI of AI Conversation Starter.                                                  |
