---
sidebar_position: 7
title: Custom Interactive Message
slug: /custom-interactive-message
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The `CustomInteractiveMessage` class extends CometChat's `InteractiveMessage` class and represents a custom interactive message that can be sent via CometChat.

| Name | Type | Description | 
| ---- | ---- | ---- | 
| receiverId | `string` | This parameter takes uid/guid of the receiver | 
| receiverType | `string` | This parameter takes type of the receiver | 
| json | `Object` | This parameter takes json object for interactiveData | 


### Key Properties and Methods

The `CustomInteractiveMessage` class does not have any custom properties or methods. However, it utilizes all methods from its parent `InteractiveMessage` class, including setting and getting the interactive data.

### Example

Below is an example that showcases the creation of an instance of `CustomInteractiveMessage`:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
// Create a new instance of CustomInteractiveMessage
let customInteractiveMessage = new CustomInteractiveMessage("receiverId", CometChat.RECEIVER_TYPE.USER, {text: "Hello, World!"});
```

</TabItem>
</Tabs>