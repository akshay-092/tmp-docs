---
type: page
title: Card Message
listed: true
slug: /interactive-card-message
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `CardMessage` class is used to create a card message for CometChat. It extends the `InteractiveMessage` class from CometChat.

### Constructor

| Name | Type | Description | 
| ---- | ---- | ---- | 
| receiverId | string | The ID of the receiver | 
| receiverType | string | The type of the receiver | 
| text | string | The text to be displayed on the card | 
| cardActions | [ButtonElement](/ui-kit/flutter/button) | The actions to be performed when the card is interacted with | 

---

### Class Usage

How to create an instance of the `CardMessage` class:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CardMessage cardMessage = CardMessage(
    allowSenderInteraction: true,
    imageUrl: "https://www.wati.io/wp-content/uploads/2021/01/32-WhatsApp-Interactive-Messages-WhatsApp-List-Messages-and-Reply-Buttons-%E2%80%93-1.png",
    muid: DateTime.now().millisecondsSinceEpoch.toString(),
    text:"Hello jey how are you what's up",
    cardActions: [
        ButtonElement(
            elementId: "OpenLink",
            buttonText: "Open link",
            action: URLNavigationAction(
                type: ActionTypeConstants.urlNavigation ,
                url: "https://www.cometchat.com/"
            ),
        ),
        ButtonElement(
            elementId: "OpenLink2",
            buttonText: "Open link 2",
            action:URLNavigationAction(
                type: ActionTypeConstants.urlNavigation ,
                url: "https://www.cometchat.com/docs/home/welcome"
            ),
            disableAfterInteracted: true
        ),
    ],
    receiverUid: "cometchat-uid-2",//Replace this with the receiver's id 
    receiverType: "user",//Replace this with the receiver's type
    sender: loggedInUser //Replace this with logged in user instance
);
```

</TabItem>

</Tabs>

---

### Send Card Message

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUIKit.sendCardMessage(cardMessage, onSuccess: (CardMessage message){
    // TODO("Not yet implemented")
}, onError: (e){
    // TODO("Not yet implemented")
});
```

</TabItem>

</Tabs>


