---
sidebar_position: 4
title: Nuxt.js Integration
slug: /nuxtjs-integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using Vue UI Kit, you can integrate your Nuxt.js application with CometChat.

### Pre-requisites

Please make sure you have a running Next.js app. Please follow the Nuxt.js [Documentation](https://nuxt.com/docs/getting-started/installation) in case you do not have a Nuxt.js app setup on your system.

### Install CometChat UI Kit

Please make sure you have installed the CometChat UI Kit by following the [Integration](./integration) documentation.

### Build Chat component

1. In the `**app.vue**` file, we will render a component which will be responsible for rendering CometChat UI Kit.

<Tabs>
<TabItem value="ts" label="app.vue">

```typescript
<template>
  <ClientOnly>
      <CometChatNoSSR></CometChatNoSSR>
  </ClientOnly>
</template>

<script>
  export default {
    name: "CometChat"
  }
</script>
```

</TabItem>
</Tabs>

:::info Note

Replace APP_ID, REGION, and AUTH_KEY with your CometChat App ID, Region and Auth Key in the below code. You can get these details from the [CometChat Dashboard](https://app.cometchat.com/)

:::

2. Next, we will create a file named `**consts.js**` where will keep the CometChat App Credentials. Place this file in the pages folder as well. And add the below code in the file.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
export const COMETCHAT_CONSTANTS = {
  APP_ID: "APP_ID",
  REGION: "REGION",
  AUTH_KEY: "AUTH_KEY",
};
```

</TabItem>
</Tabs>

3. Now let us move to the most important part, rendering the CometChat UI Kit. Create a file named `**CometChatNoSSR.js**` inside the components folder of the app.

:::info Note

Replace UID in the below code.

:::

<Tabs>
<TabItem value="js" label="CometChatNoSSR.vue">

```javascript
<template>
  <div v-if="Object.keys(userObject).length" :style="{ width: `100%`, height: '100vh' }">
    <CometChatConversationsWithMessages />
  </div>
</template>

<script setup>

import { CometChatConversationsWithMessages } from '@cometchat/chat-uikit-vue';
import "@cometchat/chat-uikit-vue/dist/style.css";
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { COMETCHAT_CONSTANTS } from '~/consts';

const userObject = ref('');
onMounted(async () => {
  const UIKitSettings = new UIKitSettingsBuilder()
    .setAppId(COMETCHAT_CONSTANTS.APP_ID)
    .setRegion(COMETCHAT_CONSTANTS.REGION)
    .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
    .subscribePresenceForAllUsers()
    .build();

  await CometChatUIKit.init(UIKitSettings);
  const user = await CometChatUIKit.getLoggedinUser();
  if (user) {
    userObject.value = user;
  } else {
    const UID = "UID";
    const loggedInUser = await CometChatUIKit.login(UID, COMETCHAT_CONSTANTS.AUTH_KEY);
    userObject.value = loggedInUser;
  }
});
</script>
```

</TabItem>
</Tabs>
​

4. Now run the app using npm run dev & navigate to `localhost:3000/chat`. Change the port to the port on which the app is running.
