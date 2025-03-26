---
sidebar_position: 7
title: Custom Interactive Message
slug: /interactive-custom-message
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `CustomInteractiveMessage` class is used to create an interactive message that can be sent via CometChat. It extends the `InteractiveMessage` class from CometChat.

### Constructor

| Name         | Type       | Description                                          |
| ------------ | ---------- | ---------------------------------------------------- |
| receiverId   | string     | The ID of the receiver                               |
| receiverType | string     | The type of the receiver                             |
| jsonObject   | JSONObject | This parameter takes json object for interactiveData |

### Class Usage

How to create an instance of the `CustomInteractiveMessage` class:

<Tabs>
<TabItem value="java" label="Java">

```java
JSONObject jsonObject = new JSONObject();
 try {
   jsonObject.put("text", "custom Interactive message");
 } catch (JSONException e) {
   throw new RuntimeException(e);
 }

CustomInteractiveMessage customInteractiveMessage = new CustomInteractiveMessage(receiverId,receiverType, jsonObject); //receiverType could be user/group
```

</TabItem>
</Tabs>

### Send Custom Interactive Message

<Tabs>
<TabItem value="java" label="Java">

```java
customInteractiveMessage.setSender(CometChatUIKit.getLoggedInUser());
customInteractiveMessage.setReceiver(user); // set Receiver user/group object

CometChatUIKit.sendCustomInteractiveMessage(customInteractiveMessage, false, new CometChat.CallbackListener<CustomInteractiveMessage>() {
          @Override
          public void onSuccess(CustomInteractiveMessage customInteractiveMessage) {

           }
          @Override
          public void onError(CometChatException e) {
                e.printStackTrace();
          }
    });
```

</TabItem>
</Tabs>
