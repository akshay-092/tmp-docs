---
sidebar_position: 5
title: AI Assist Bot
slug: /ai-assist-bot
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```AI Assist Bot``` is a class which can be used to ask a question to a bot in a given conversation.

### Integration

```AI Assist Bot``` will be enabled by default if you have already created & enabled AI Bot in the Dashboard. The UI & functionality of ```AI Assist Bot``` can be customized via Configuration.

<Tabs>
<TabItem value="js" label="Javascript">

```js
const aiAssistBotConfiguration = new AIAssistBotConfiguration({});
```

</TabItem>
</Tabs>


This configuration needs to be passed to AI Smart Replies Class when it is passed to ```setAiFeatures()``` method of ```UIKitSettingsBuilder```.

<Tabs>
<TabItem value="js" label="Javascript">

```js
const aiFeatures = [new AIAssistBotExtension(aiAssistBotConfiguration)];

// Pass this list of features to setAiFeatures method.
new UIKitSettingsBuilder().setAiFeatures(aiFeatures);
```

</TabItem>
</Tabs>


| Properties                    | Type                                                           | Description                                                                                                                             |
| ----------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| configuration           | [AIAssistBotConfiguration](/web-shared/ai-assist-bot-configuration)         | This is a configuration to customise behaviour & UI of ```AI Assist Bot Configuration```.                                                  |
