---
sidebar_position: 2
title: Theme
slug: /theme
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Theme class provides endless number of customisations to improve or transform the look and feel of the UI Kit as per your application need. [Learn more](/web-shared/theme).

## Usage

Step1: Provide theme to App
<Tabs>
<TabItem value="vue" label="Vue">

```javascript
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

//App level provider makes the provided value available across the application via inject
app.provide("theme", new CometChatTheme({}));
app.mount("#app");
```

</TabItem>
</Tabs>

Step2: Injecting and using the Theme within the component

:::info

- App level providers to make it available in the entire application

- Component level providers to make it available in child components

:::

<Tabs>
<TabItem value="vue" label="App Level Providers">

```javascript
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
//App level provider makes the provided value available across the application via inject
app.provide("theme", new CometChatTheme({}));
app.mount("#app");
```

</TabItem>
</Tabs>

Theme can also be provided within a component but this will only be available to be injected in the child components

<Tabs>
<TabItem value="vue" label="Component Level Providers">

```javascript
<script lang="ts">
import { CometChatTheme } from "uikit-resources-lerna";
import { defineComponent, provide } from "vue";

export default defineComponent({
  setup() {
    //Make the theme available to child components by providing it in a parent component
    provide("theme", new CometChatTheme({}));

    return {};
  },
});
</script>
```

</TabItem>
</Tabs>

Injecting and using the Theme in components
<Tabs>
<TabItem value="vue" label="Child Component">

```javascript
<script lang="ts">
import { defineComponent, inject, provide } from "vue";

export default defineComponent({
  setup() {
    //Inject the Theme in the component to be used
    //A default value can be provided as a fallback while injecting
    let injectedTheme = inject("theme", DefaultThemeObject);

    //using the theme
    let defaultStyle: CallButtonsStyle = new CallButtonsStyle({
      voiceCallIconTint: injectedTheme.palette.getPrimary(),
      videoCallIconTint: injectedTheme.palette.getPrimary(),
      voiceCallIconTextColor: injectedTheme.palette.getPrimary(),
      videoCallIconTextColor: injectedTheme.palette.getPrimary(),
    });

    return {};
  },
});
</script>
```

</TabItem>
</Tabs>
