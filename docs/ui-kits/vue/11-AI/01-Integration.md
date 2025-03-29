---
sidebar_position: 1
title: Integration
slug: /ai-integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

By default, SmartReplies and ConversationStarter will be enabled if they are enabled from the dashboard as well.

### To Enable Specific Feature
<Tabs>
<TabItem value="ts" label="Typescript">

```typescript
// entry file
import
{ 
AIEnabler,AISmartRepliesExtension,AISmartRepliesConfiguration 
} from '@cometchat/chat-uikit-vue';
import {UIKitSettingsBuilder} from '@cometchat/uikit-shared';

const smartRepliesConfiguration = new AISmartRepliesConfiguration({});
const aiFeatures = [new AISmartRepliesExtension(smartRepliesConfiguration)]; //Add the features 
const uiKitSettings = new UIKitSettingsBuilder()
.setAppId(appID)
.setRegion(region)
.setAuthKey(authKey)
.subscribePresenceForFriends()
.setAiFeatures(new AIEnabler(aiFeatures,new AIEnablerConfiguration({}))) //pass the features
.build();
```
</TabItem>
</Tabs>


### To disable all features
<Tabs>
<TabItem value="ts" label="Typescript">

```typescript
// entry file
import {UIKitSettingsBuilder,AIEnabler} from '@cometchat/uikit-shared';

const uiKitSettings = new UIKitSettingsBuilder()
.setAppId(APPID)
.setRegion(REGION)
.setAuthKey(AUTHKEY)
.subscribePresenceForFriends()
.setAiFeatures(new AIEnabler([])) //pass an empty array to disable all the features.
.build();
```
</TabItem>
</Tabs>

### Init CometChatUIKit
<Tabs>
<TabItem value="ts" label="Typescript">

```typescript
import {CometChatUIKit } from '@cometchat/chat-uikit-vue';

CometChatUIKit.init(uiKitSettings)?.then((response) => {
  console.log('CometChatUIKit initialization completed successfully');
   //load app
 });
```
</TabItem>
</Tabs>