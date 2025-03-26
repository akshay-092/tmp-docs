---
sidebar_position: 1
title: Integration with Nuxt.js
slug: /integration-with-nuxtjs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using Vue UI Kit, you can integrate your Nuxt.js application with CometChat.

## Pre-requisites

#### First, if not already installed, add Vue from your terminal using the following command.

<Tabs>
<TabItem value="js" label="CLI">

```bash
npm install vue
```


</TabItem>
</Tabs>



## Install CometChat SDK

use the following command

<Tabs>
<TabItem value="js" label="CLI">

```bash
npm install @cometchat-pro_chat@3.0.5 --save
```


</TabItem>
</Tabs>



## Include Vue UI Kit

<Tabs>
<TabItem value="js" label="CLI">

```bash
git clone https://github.com/cometchat-pro/cometchat-pro-vue-ui-kit.git
```


</TabItem>
</Tabs>



- Copy the cloned repository to your **pages** folder
- Copy all the dependencies from package.json into your project's package.js and install them

## Build Chat component

### Create _`Chat.vue`_ file in your **pages** folder with the following code

<Tabs>
<TabItem value="js" label="Vue">

```javascript
<template>
    <client-only>
        <CometChatNoSSR></CometChatNoSSR>
    </client-only>
</template>
<script>
export default {
    name: "RTBChat",
    ssr: false,
    components: {
        'CometChatNoSSR': () => import('../CometChatNoSSR.vue')
    },
    mounted() {
        window.CometChat = require('@cometchat-pro/chat').CometChat
    }
}
</script>
```


</TabItem>
</Tabs>


:::warning Note
Replace APP_ID, REGION, and AUTH_KEY with your CometChat App ID, Region, and in the below code.
:::

### Create `consts.js` file with ComeChat details at `root` level

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
module.exports = {
  APP_ID: "APP_ID",
  REGION: "REGION",
  AUTH_KEY: "AUTH_KEY"
}
```

</TabItem>
</Tabs>



### Create `CometChatNoSSR.vue` component at **`root `**level

:::warning Note
Replace UID in the below code.
:::

<Tabs>
<TabItem value="js" label="Vue">

```javascript
<template>
  <div
    v-if="Object.keys(user).length"
    :style="{ width: `100%`, height: '100vh' }">
    <client-only>
      <comet-chat-uI />
    </client-only>
  </div>
</template>

<script>
import { CometChatUI } from "./cometchat-pro-vue-ui-kit/CometChatWorkspace/src";
import { COMETCHAT_CONSTANTS } from './CONSTS';

export default {
  name: "CommetChat",
  ssr: false,
  components: {
    CometChatUI,
  },
  data: () => ({
    user: {},
    chatId: COMETCHAT_CONSTANTS.APP_ID,
    region: COMETCHAT_CONSTANTS.REGION,
    authKey: COMETCHAT_CONSTANTS.AUTH_KEY,
  }),
  mounted() {
    const appSetting = new window.CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(this.region)
      .build();
    window.CometChat.init(this.chatId, appSetting)
      .then(() => {
        const UID = "cometchat-uid-1";
        const apiKey = this.authKey;
        window.CometChat.login(UID, apiKey)
          .then((user) => {
            this.user = user;
            console.log(user);
          })
          .catch((error) => console.log("Login failed with exception:", error));
        // You can now call login function.
      })
      .catch((error) =>
        console.log("Initialization failed with error:", error)
      );
  },
};
</script>
```

</TabItem>
</Tabs>




#### Add Webpack config to compile sound files in nuxt.config.js

<Tabs>
<TabItem value="js" label="nuxt.config.js">

```javascript
build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
}
```

</TabItem>
</Tabs>
