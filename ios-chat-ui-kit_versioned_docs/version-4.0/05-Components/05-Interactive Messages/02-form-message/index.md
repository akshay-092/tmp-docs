---
type: page
title: Form Message
listed: true
slug: /interactive-form-message
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `FormMessage` class is used to create an interactive form message that can be sent via CometChat. It extends the `InteractiveMessage` class from CometChat.

### Constructor

| Name          | Type                       | Description                   |
| ------------- | -------------------------- | ----------------------------- |
| receiverId    | string                     | The ID of the receiver        |
| receiverType  | string                     | The type of the receiver      |
| title         | string                     | The title of the form         |
| formFields    | Array&lt;ElementEntity&gt; | The fields of the form        |
| submitElement | ButtonElement              | The submit button of the form |

### Class Usage

How to create an instance of the `FormMessage` class:
<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let formMessage = InteractiveMessage()
    formMessage.messageCategory = .interactive

    let jsonString:[String:Any] = [
      "goalCompletionText": "Goal completed YAY",
      "title":"By ",
        "formFields":[
        [
          "defaultValue" : "",
          "elementId" : "element1",
          "elementType" : "textInput",
              "label" : "Name",
              "maxLines" : 1,
              "optional" : false
            ],
            [
              "action" : [
                "actionType" : "urlNavigation",
                "url" : "https://www.cometchat.com/"
              ],
              "buttonText" : "About us",
              "disableAfterInteracted" : false,
              "elementId" : "element9",
              "elementType" : "button"
            ]
          ],
          "submitElement" : [
            "action" : [
              "actionType" : "apiAction",
              "dataKey" : "CometChatData",
              "headers" : [
                "Content-Type" : "application/json",
                "apiKey" : "",
                "appId" : "",
                "onBehalfOf" : ""
              ],
              "method" : "POST",
              "payload" : [
                "category" : "message",
                "data" :                 [
                  "text" : "Thanks For filling the Form!"
            ],
            "receiver" : "",
            "receiverType" : "group",
            "type" : "text"
          ] as [String : Any],
          "url" : ""
        ] as [String : Any],
        "buttonText" : "Submit",
        "disableAfterInteracted" : true,
        "elementId" : "element8",
        "elementType" : "button"
      ] as [String : Any]
   ]
    formMessage.interactiveData = jsonString
    let goal = InteractionGoal()
    goal.elementIds = ["element9","element8"]
    goal.interactionType = .allOf

    formMessage.interactionGoal = goal
    formMessage.allowSenderInteraction = true
    formMessage.type = "form"
    formMessage.receiverType = .user
    formMessage.receiverUid = "cometchat-uid-1"
    formMessage.muid = "1697025959995609"
    formMessage.senderUid = CometChat.getLoggedInUser()?.uid ?? ""
    formMessage.sender = CometChat.getLoggedInUser()
```

</TabItem>
</Tabs>

### Send Form Message

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
CometChat.sendInteractiveMessage(message: formMessage, onSuccess: {
    succes in
    print("successs",succes)
}, onError: {
    error in
    print("errorr",error?.description)
})
```

</TabItem>
</Tabs>
