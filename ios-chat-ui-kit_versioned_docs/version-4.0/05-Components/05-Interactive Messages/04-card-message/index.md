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

| Name         | Type          | Description                                                  |
| ------------ | ------------- | ------------------------------------------------------------ |
| receiverId   | string        | The ID of the receiver                                       |
| receiverType | string        | The type of the receiver                                     |
| text         | string        | The text to be displayed on the card                         |
| cardActions  | ButtonElement | The actions to be performed when the card is interacted with |

### Class Usage

How to create an instance of the `CardMessage` class:
<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var elementEntities:[ElementEntity] = [ElementEntity]()
let urlNavigationAction = "https://www.cometchat.com/"

let buttonElement = ButtonElement()
buttonElement.elementId = "idbtn"
buttonElement.elementType = .button
buttonElement.action = Action().type;
buttonElement.setDisableAfterInteracted(true); // button will be disable after interacted
buttonElement.setText("Learn more");

elementEntities.append(buttonElement);
// Create a new instance of CardMessage
let cardMessage = CardMessage(receiverId, receivertype, "Decorative Text to show on Card", elementEntities);

cardMessage.setImageUrl("https://anyImageUrl.com");
```

</TabItem>
</Tabs>

### Send Card Message

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
cardMessage.receiverUid = "cometchat-uid-2"
CometChat.sendInteractiveMessage(message: interMessage, onSuccess: {
          succes in
 }, onError: {
  error in
);
```

</TabItem>
</Tabs>
