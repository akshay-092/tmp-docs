---
sidebar_position: 1
title: Integration
slug: /calls-integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Integration

You can integrate voice and video calling SDK to add calling functionality to your CometChat-enabled application.

To integrate, follow the below steps:

1. ### Obtain the API Keys

   Navigate to the credentials section on the [CometChat dashboard](https://app.cometchat.com/) and take note of the app id, and region.

2. ### Integrate the SDK Files
   Add the SDK files to your project's dependencies or libraries.

<Tabs>
<TabItem value="js" label="CLI">

```CLI

npm install @cometchat/calls-sdk-javascript

```

</TabItem>
</Tabs>

3. ### Launch the component
   Once the calls SDK is installed, follow with the [initialise](./integration#2-initialise-cometchatuikit) of the UI Kit, [login](./integration#3-login-user) the user and [launch](/ui-kit/vue/ui-components-overview) the UI components. The calls SDK integration will enable the [CallButtons](./call-buttons) components in the menu of [MessageHeader](./message-header). This will allow users to initiate voice or video calls to other chat participants.

Additionally, all the components listed in the calls module are available for integration in your project.
