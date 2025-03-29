---
sidebar_position: 1
title: Form Message
slug: /form-message
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `FormMessage` class is used to create an interactive form message that can be sent via CometChat. It extends the `InteractiveMessage` class from CometChat.

### Constructor

| Name | Type | Description | 
| ---- | ---- | ---- | 
| receiverId | string | The ID of the receiver | 
| receiverType | string | The type of the receiver | 
| title | string | The title of the form | 
| formFields | Array&lt;ElementEntity&gt; | The fields of the form | 
| submitElement | ButtonElement | The submit button of the form | 


### Class Usage

How to create an instance of the `FormMessage` class:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
// Create an instance of APIAction
let apiAction = new APIAction("https://example.com/api", "POST");

// Create an instance of ButtonElement
let submitButton = new ButtonElement("1", apiAction, "Submit");

// Create an instance of TextInput
let nameInput = new TextInput("1", "Please enter your name");
// Create a new instance of FormMessage

let formMessage = new FormMessage("receiverId", CometChat.RECEIVER_TYPE.USER, "Title", [nameInput], submitButton);
```

</TabItem>
</Tabs>

### Key Properties and Methods

#### Goal Completion Text

The `setGoalCompletionText()` method sets the goal completion text of the form.

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
let formMessage = new FormMessage("receiverId", CometChat.RECEIVER_TYPE.USER, "Title", [nameInput], submitButton);
formMessage.setGoalCompletionText("Goal completed");
```

</TabItem>
</Tabs>

### Creating a FormMessage from JSON

The static `fromJSON()` method creates an instance of `FormMessage` from a provided JSON object.

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
// Create a FormMessage from JSON
let json = { 
    receiver: "receiverId",
    receiverType: CometChat.RECEIVER_TYPE.USER,
    type: "form",
    data: {
        interactiveData: {
            title: "Title",
            formFields: [],
            submitElement: new ButtonElement("1", new APIAction("https://example.com/api", "POST"), "Submit")
        }
    }
};

let formMessageFromJSON = FormMessage.fromJSON(json);
```

</TabItem>
</Tabs>

### Example

Below is an example that showcases the creation and manipulation of an instance of `FormMessage`:

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
// Create an instance of APIAction

let apiAction = new APIAction("https://example.com/api", "POST");

// Create an instance of ButtonElement

let submitButton = new ButtonElement("1", apiAction, "Submit");

// Create a new instance of FormMessage

let formMessage = new FormMessage("receiverId", CometChat.RECEIVER_TYPE.USER, "customType", "Title", [], submitButton);

formMessage.setGoalCompletionText("Goal completed");

// Create a FormMessage from JSON

let json = { 
    receiver: "receiverId",
    receiverType: CometChat.RECEIVER_TYPE.USER,
    type: "form",
    data: {
        interactiveData: {
            title: "Title",
            formFields: [],
            submitElement: new ButtonElement("1", new APIAction("https://example.com/api", "POST"), "Submit")
        }
    }
};

let formMessageFromJSON = FormMessage.fromJSON(json);
```

</TabItem>
</Tabs>

In this example, a new instance of the `FormMessage` class is created. The title, form fields, submit element, and goal completion text are retrieved, updated, and retrieved again. Then a new `FormMessage` instance is made from a JSON object, and the title is retrieved and logged.