---
sidebar_position: 3
title: AI Smart Replies
slug: /ai-smart-replies
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```AI Smart Replies``` is a class which fetches a list of replies generated using AI for replying to a message in a conversation.

### Integration
```AI Smart Replies``` will be enabled by default if it is enabled in the Dashboard. The UI & functionality of ```AI Smart Replies``` can be customized via Configuration.

<Tabs>
<TabItem value="js" label="Javascript">

```js
const smartRepliesConfiguration = new AISmartRepliesConfiguration({});
```

</TabItem>
</Tabs>


This configuration needs to be passed to AI Smart Replies Class when it is passed to ```setAiFeatures()``` method of ```UIKitSettingsBuilder```.

<Tabs>
<TabItem value="js" label="Javascript">

```js
const aiFeatures = [new AISmartRepliesExtension(smartRepliesConfiguration)];

// Pass this list of features to setAiFeatures method.
new UIKitSettingsBuilder().setAiFeatures(aiFeatures);
```

</TabItem>
</Tabs>


| Properties                    | Type                                                           | Description                                                                                                                             |
| ----------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| configuration           | [AISmartRepliesConfiguration](/web-shared/ai-smart-replies-configuration)         | This is a configuration to customise behaviour & UI of ```AI Smart Replies```.                                                  |
