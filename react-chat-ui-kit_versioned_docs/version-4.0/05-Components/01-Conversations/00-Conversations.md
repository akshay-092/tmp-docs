---
sidebar_position: 1
title: Conversations
slug: /conversations
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The Conversations is a [Component](./components-overview#components), That shows all conversations related to the currently logged-in user,

This component lists the most recent or latest conversations or contacts with whom you have exchanged messages. It provides a convenient way to quickly access and resume conversations with the people you have been in contact with recently.

![](../../assets/conversations_overview_web_screens.png)

## Usage

### Integration

<Tabs>
<TabItem value="js" label="ConversationsDemo.tsx">

```javascript
import {
  CometChatConversations,
  TitleAlignment,
  ConversationsStyle,
} from "@cometchat/chat-uikit-react";

function ConversationsDemo() {
  const conversationsStyle = new ConversationsStyle({
    width: "100%",
    height: "100%",
    border: "1px solid #ee7752",
    background: "linear-gradient(#ee7752, #e73c7e, #23a6d5, #23d5ab)",
  });

  return (
    <div className="conversations" style={{ width: "100%", height: "100%" }}>
      <div>
        <CometChatConversations
          title="Your Custom Title"
          titleAlignment={TitleAlignment.center}
          conversationsStyle={conversationsStyle}
        />
      </div>
    </div>
  );
}

export default ConversationsDemo;
```

</TabItem>
<TabItem value="ts" label="App.tsx">

```javascript
import { ConversationsDemo } from "./ConversationsDemo";

export default function App() {
  return (
    <div className="App">
      <ConversationsDemo />
    </div>
  );
}
```

</TabItem>
</Tabs>

### Actions

[Actions](./components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. OnItemClick

`OnItemClick` is triggered when you click on a ListItem of the Conversations component.
The `OnItemClick` action doesn't have a predefined behavior. You can override this action using the following code snippet.

<Tabs>

<TabItem value="ConversationsDemo" label="ConversationsDemo.tsx">
```js
import { CometChatConversations } from "@cometchat/chat-uikit-react";

const getOnItemClick = (conversation: CometChat.Conversation) => {
console.log("ItemClick:", conversation);
//your custom action
};

function ConversationsDemo() {
return (

<div className="conversations" style={{ width: "100%", height: "100%" }}>
  <div>
      <CometChatConversations
        onItemClick={getOnItemClick}
      />
  </div>
</div>
);
}

export default ConversationsDemo;

````
</TabItem>

</Tabs>

---

##### 2. OnSelect


The `OnSelect` event is triggered upon the completion of a selection in `SelectionMode`. It does not have a default behavior. However, you can override its behavior using the following code snippet.

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```js
import { CometChatConversations, SelectionMode } from "@cometchat/chat-uikit-react";

const getOnSelect = (conversation: CometChat.Conversation, selected: boolean) => {
  console.log("Selected, ", conversation.getConversationId(), selected);
  //your custom action on select
};

function ConversationsDemo() {
return (
<div className="conversations" style={{ width: "100%", height: "100%" }}>
  <div>
      <CometChatConversations
        selectionMode={SelectionMode.multiple}
        onSelect={getOnSelect}
      />
  </div>
</div>
);
}

export default ConversationsDemo;

````

</TabItem>
</Tabs>

---

##### 3. OnError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the Conversations component.

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```js
import { CometChatConversations } from "@cometchat/chat-uikit-react";

const handleOnError = (error: CometChat.CometChatException) => {
//your exception handling code
};

function ConversationsDemo() {
return (

<div className="conversations" style={{ width: "100%", height: "100%" }}>
  <div>
      <CometChatConversations
        onError={handleOnError}
      />
  </div>
</div>
);
}

export default ConversationsDemo;

````
</TabItem>

</Tabs>

---




### Filters

You can set `ConversationsRequestBuilder` in the Conversations Component to filter the conversation list. You can modify the builder as per your specific requirements with multiple options available to know more refer to [ConversationRequestBuilder](/sdk/javascript/retrieve-conversations).

You can set filters using the following parameters.

1. **Conversation Type:** Filters on type of Conversation, `User` or `Groups`
1. **Limit:** Number of conversations fetched in a single request.
1. **WithTags:** Filter on fetching conversations containing tags
1. **Tags:** Filters on specific `Tag`
1. **UserTags:** Filters on specific User `Tag`
1. **GroupTags:** Filters on specific Group `Tag`



<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```js
import { CometChatConversations } from "@cometchat/chat-uikit-react";
import {CometChat} from "@cometchat/chat-sdk-javascript";

function ConversationsDemo() {
return (

<div className="conversations" style={{ width: "100%", height: "100%" }}>
  <div>
      <CometChatConversations
        conversationsRequestBuilder={new CometChat.ConversationsRequestBuilder().setLimit(10)}
      />
  </div>
</div>
);
}

export default ConversationsDemo;

````

</TabItem>

</Tabs>

---

### Events

[Events](./components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

<Tabs>

<TabItem value="js" label="Add Listener">
```javascript
const ccConversationDeleted =
        CometChatConversationEvents.ccConversationDeleted.subscribe(
          (conversation: CometChat.Conversation) => {
            //Your Code
          }
        );
````

</TabItem>

</Tabs>

---

<Tabs>

<TabItem value="js" label="Remove Listener">
```js
ccConversationDeleted?.unsubscribe();
````

</TabItem>

</Tabs>

## Customization

To fit your app's design requirements, you can customize the appearance of the conversation component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. Conversation Style

You can set the `ConversationsStyle` to the `Conversations` Component to customize the styling.

---

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```js
import { CometChatConversations, ConversationsStyle } from "@cometchat/chat-uikit-react";

function ConversationsDemo() {

const conversationsStyle = new ConversationsStyle({
width: "100%",
height: "100%",
border: "1px solid #ee7752",
background: "linear-gradient(#ee7752, #e73c7e, #23a6d5, #23d5ab)",
});

return (

<div className="conversations" style={{ width: "100%", height: "100%" }}>
  <div>
      <CometChatConversations
        conversationsStyle = {conversationsStyle}
      />
  </div>
</div>
);
}

export default ConversationsDemo;

````

</TabItem>

</Tabs>

List of properties exposed by ConversationStyle

| Name                        | Description                                                                                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| width                       | Sets the width of the component                                                                                                                                                      |
| height                      | Sets the height of the component                                                                                                                                                     |
| border                      | Sets the border of the component                                                                                                                                                     |
| borderRadius                | Sets the border radius of the component                                                                                                                                              |
| background                  | Sets all background style properties at once, such as color, image, origin and size, or repeat method. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/background) |
| boxShadow                   | Adds shadow effects around the component.                                                                                                                                            |
| titleTextFont               | Sets all the different properties of font for the heading text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font)                                              |
| titleTextColor              | Sets the foreground color of heading text.                                                                                                                                           |
| loadingIconTint             | Sets the tint or color applied to the loading indicator icon of the component                                                                                                        |
| emptyStateTextFont          | Sets all the different properties of font for the placeholder text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font)                                          |
| emptyStateTextColor         | Sets the foreground color of placeholder text displayed in the component.                                                                                                            |
| errorStateTextFont          | Sets all the different properties of font for the error message. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font)                                             |
| errorStateTextColor         | Sets the foreground color of error message displayed in the component.                                                                                                               |
| lastMessageTextFont         | Sets all the different properties of font for the last message. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font)                                              |
| lastMessageTextColor        | Sets the foreground color of the last message.                                                                                                                                       |
| typingIndictorTextFont      | Sets all the different properties of font for the typing indicator text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font)                                     |
| typingIndictorTextColor     | Sets the foreground color of typing indicator text                                                                                                                                   |
| threadIndicatorTextFont     | Sets all the different properties of font for the thread indicator text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font)                                     |
| threadIndicatorTextColor    | Sets the foreground color of thread indicator text.                                                                                                                                  |
| onlineStatusColor           | Sets the color of the status indicator representing the user's online status                                                                                                         |
| privateGroupIconBackground  | Sets the background of the status indicator representing private groups.                                                                                                             |
| passwordGroupIconBackground | Sets the background of the status indicator representing password protected groups.                                                                                                  |

##### 2. Avatar Style

To apply customized styles to the `Avatar` component in the `Conversations` Component, you can use the following code snippet. For more information, visit [Avatar Styles](./avatar).

---

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```js
import { CometChatConversations, AvatarStyle } from "@cometchat/chat-uikit-react";

function ConversationsDemo() {

const avatarStyle = new AvatarStyle({
width: "100%",
height: "100%",
border: "1px solid blue",
});

return (

<div className="conversations" style={{ width: "100%", height: "100%" }}>
  <div>
      <CometChatConversations
        avatarStyle={avatarStyle}
      />

  </div>
</div>
);
}

export default ConversationsDemo;

````

</TabItem>

</Tabs>

##### 3. StatusIndicator Style

To apply customized styles to the Status Indicator component in the `Conversations` Component, you can use the following code snippet. For more information, visit [Status Indicator Styles](./status-indicator).

---

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```js
import { CometChatConversations } from "@cometchat/chat-uikit-react";

function ConversationsDemo() {

const statusIndicatorStyle = {
color: 'red',
height: '10px',
width: '10px'
};

return (

<div className="conversations" style={{ width: "100%", height: "100%" }}>
  <div>
      <CometChatConversations
        statusIndicatorStyle={statusIndicatorStyle}
      />

  </div>
</div>
);
}

export default ConversationsDemo;

````

</TabItem>

</Tabs>

##### 4. Date Style

To apply customized styles to the `Date` component in the `Conversations` Component, you can use the following code snippet. For more information, visit [Date Styles](./date).

---

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```js
import { CometChatConversations, BadgeStyle } from "@cometchat/chat-uikit-react";

function ConversationsDemo() {

const dateStyle = new DateStyle({
width: "100%",
height: "100%",
border: "1px solid pink",
});

return (

<div className="conversations" style={{ width: "100%", height: "100%" }}>
  <div>
      <CometChatConversations
        dateStyle={dateStyle}
      />

  </div>
</div>
);
}

export default ConversationsDemo;

````

</TabItem>

</Tabs>

##### 5. Badge Style

To apply customized styles to the `Badge` component in the `Conversations` Component, you can use the following code snippet. For more information, visit [Badge Styles](./badge).

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```js

const badgeStyle = new BadgeStyle({
width: "100%",
height: "100%",
border: "1px solid pink",
});

````

</TabItem>

</Tabs>

##### 6. Receipt Style

To apply customized styles to the `receipt` component in the `Conversations` Component, you can use the following code snippet. For more information, visit [Receipts](./receipt).

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">

```javascript
const receiptStyle = new ReceiptStyle({
width: "100%",
height: "100%",
border: "1px solid blue",
readIconTint:"green",
sentIconTint:"red",
deliveredIconTint:"yellow"
});

````

</TabItem>

</Tabs>

##### 7. Backdrop Style

To apply customized styles to the `Backdrop` component in the `Conversations` Component, you can use the following code snippet, you can use the following code snippet. For more information, visit [Backdrop Styles](./backdrop).

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">

```javascript
const backdropStyle = new BackdropStyle({
  width: "100%",
  height: "100%",
  border: "2px solid red",
  background: "blue",
  borderRadius: "20px",
});
```

</TabItem>

</Tabs>

##### 8. Delete Conversation Dialog Style

To apply customized styles to the `delete dialog` component in the `Conversations` Component, you can use the following code snippet. For more information, visit [Delete dialog Styles](./confirm-dialog).

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```javascript

const deleteConversationDialogStyle = new ConfirmDialogStyle({
width: "100%",
height: "100%",
background:"blue",
borderRadius:"20px",
});

````

</TabItem>

</Tabs>

##### 9. LisItem Style

To apply customized styles to the `ListItemStyle` component in the `Conversations` Component, you can use the following code snippet. For more information, visit [List Item](./list-item).

<Tabs>
<TabItem value="js" label="ConversationsDemo.tsx">
```js

 const listItemStyle = new ListItemStyle({
    width: "100%",
    height: "100%",
    border: "2px solid red",
  })

````

</TabItem>

</Tabs>

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

<Tabs>

<TabItem value="js" label="ConversationsDemo.tsx">
```js

 <div className="conversations" style={{ width: "100%", height: "100%" }}>
  <div>
      <CometChatConversations
        title="Your Custom Title"
        readIcon="custom read icon"
      />
  </div>
</div>

````

</TabItem>

</Tabs>

Below is a list of customizations along with corresponding code snippets

| Property                | Description                                                                                                                                                                            | Code                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Title                   | Used to set custom title in the app bar.                                                                                                                                               | `title="Your Custom Title"`                         |
| EmptyState Text         | Used to set a custom text response when fetching the conversations has returned an empty list                                                                                          | `emptyStateText="Your Custom Empty State text"`     |
| Selection Mode          | Used to set a custom text response when fetching the conversations has returned an empty list                                                                                          | `selectionMode={SelectionMode.multiple}`            |
| PasswordGroup Icon     | Used to set icon shown in place of status indicator for password protected group                                                                                                       | ` passwordGroupIcon="https://icon.svg"`            |
| privateGroupIcon        | Used to set icon shown in place of status indicator for private group                                                                                                                  | ` privateGroupIcon="https://icon.svg"`              |
| SentIcon                | Used to customize the receipt icon shown in the subtitle of the conversation item if hideReceipt is false and if the status of the last message in the conversation is sent      | `sentIcon="your custom sent icon" `|
| Delivered Icon          | Used to customize the receipt icon shown in the subtitle of the conversation item if hideReceipt is false and if the status of the last message in the conversation is delivered | `deliveredIcon="your custom delivered icon"`|
| Read Icon               | Used to customize the receipt icon shown in the subtitle of the conversation item if hideReceipt is false and if the status of the last message in the conversation is read      | ` readIcon="your custom read icon"`|
| errorIcon               | Asset URL for the error state indicating that an error has occurred when the message was in transit.| ` errorIcon="your custom error icon"`|
| Hide Error              | Used to hide error on fetching conversations| `hideError={true}`|
| Hide Separator          | Used to control visibility of Separators in the list view| `hideSeparator={true}`|
| Disable UsersPresence   | Used to control visibility of status indicator shown if user is online                                                                                                                 | `disableUsersPresence={true}`                       |
| Hide Receipt         | Used to control the visibility of read receipts without affecting the functionality of marking messages as read and delivered| `hideReceipt={false}`|
| Disable Typing          | Used to toggle visibility of typing indicator                                                                                                                                          | `disableTyping={true}`                              |
| Disable Mentions                                                                                       | Sets whether mentions in text should be disabled. Processes the text formatters If there are text formatters available and the disableMentions flag is set to true, it removes any formatters that are instances of CometChatMentionsFormatter.| `disableMentions={true}`|
| disableSoundForMessages | When set to true, the component will not produce sound for all incoming messages.indicator                                                                                             | `disableSoundForMessages={true}`                    |
| customSoundForMessages  | mp3 file asset of your choice.                                                                                                                                                         | `customSoundForMessages="your custom sound for messages"` |
| **activeConversation** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set the active conversation | `activeConversation={activeConversation}` |

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

---

#### ListItemView

With this function, you can assign a custom ListItem to the Conversations Component.

<Tabs>

<TabItem value="JavaScript" label="JavaScript">

```typescript
const getListItemView = (conversation) => {
  // Your custom list item view
};

<CometChatConversations
  listItemView={getListItemView} // Custom list item view
/>;
```

</TabItem>

<TabItem value="TypeScript" label="TypeScript">

```typescript
const getListItemView = (conversation: Conversation) => {
  //your custom list item view
};

<CometChatConversations
  listItemView={getListItemView} //custom listitem view
/>;
```

</TabItem>

</Tabs>

**Example**

**Default**

![](../../assets/list_item_view_default_web_screens.png)

**Custom**

![](../../assets/list_item_view_custom_web_screens.png)


You can customize the appearance of each list item by modifying the `getListItemView` function as follows:

<Tabs>

<TabItem value="JavaScript" label="JavaScript">

```typescript
const getListItemView = (conversation) => {
  const conversationWith = conversation.getConversationWith();
  console.log(conversationWith);

  if (conversationWith instanceof CometChat.User) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          border: "1px solid black",
          background: "#E8EAE9",
        }}
      >
        <cometchat-avatar
          image={conversationWith.getAvatar()}
          name={conversationWith.getName()}
        />

        <div>
          <div style={{ fontWeight: "bold" }}>{conversationWith.getName()}</div>
          <div style={{ color: "#666" }}>{conversationWith.getStatus()}</div>
        </div>
      </div>
    );
  } else if (conversationWith instanceof CometChat.Group) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          border: "1px solid black",
          background: "#E8EAE9",
        }}
      >
        <cometchat-avatar
          image={conversationWith.getIcon()}
          name={conversationWith.getName()}
        />
        <div>
          <div style={{ fontWeight: "bold" }}>{conversationWith.getName()}</div>
          <div style={{ color: "#888" }}>
            Members: {conversationWith.getMembersCount()}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Unknown conversation type</div>;
  }
};
```

</TabItem>

<TabItem value="TypeScript" label="TypeScript">

```typescript
const getListItemView = (conversation: CometChat.Conversation) => {
  const conversationWith = conversation.getConversationWith();
  console.log(conversationWith);

  if (conversationWith instanceof CometChat.User) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          border: "1px solid black",
          background: "#E8EAE9",
        }}
      >
        <cometchat-avatar
          image={conversationWith.getAvatar()}
          name={conversationWith.getName()}
        />

        <div>
          <div style={{ fontWeight: "bold" }}>{conversationWith.getName()}</div>
          <div style={{ color: "#666" }}>{conversationWith.getStatus()}</div>
        </div>
      </div>
    );
  } else if (conversationWith instanceof CometChat.Group) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          border: "1px solid black",
          background: "#E8EAE9",
        }}
      >
        <cometchat-avatar
          image={conversationWith.getIcon()}
          name={conversationWith.getName()}
        />
        <div>
          <div style={{ fontWeight: "bold" }}>{conversationWith.getName()}</div>
          <div style={{ color: "#888" }}>
            Members: {conversationWith.getMembersCount()}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Unknown conversation type</div>;
  }
};
```

</TabItem>

</Tabs>

---


#### TextFormatters
Assigns the list of text formatters. If the provided list is not null, it sets the list. Otherwise, it assigns the default text formatters retrieved from the data source. To configure the existing Mentions look and feel check out [CometChatMentionsFormatter](./mentions-formatter-guide)



<Tabs>
<TabItem value="ShortCutFormatter" label="ShortCutFormatter.ts">

```typescript
import { CometChatTextFormatter } from "@cometchat/chat-uikit-react";
import DialogHelper from './Dialog';
import {CometChat} from "@cometchat/chat-sdk-javascript";

class ShortcutFormatter extends CometChatTextFormatter {
    private shortcuts: { [key: string]: string } = {};
    private dialogIsOpen: boolean = false;
    private dialogHelper = new DialogHelper();
    private currentShortcut: string | null = null; // Track the currently open shortcut

    constructor() {
    super();
    this.setTrackingCharacter('!');
    CometChat.callExtension('message-shortcuts', 'GET', 'v1/fetch', undefined)
    .then((data: any) => {
      if (data && data.shortcuts) {
          this.shortcuts = data.shortcuts;
      }
    })
    .catch(error => console.log("error fetching shortcuts", error));
}



    onKeyDown(event: KeyboardEvent) {
        const caretPosition = this.currentCaretPosition instanceof Selection
            ? this.currentCaretPosition.anchorOffset
            : 0;
        const textBeforeCaret = this.getTextBeforeCaret(caretPosition);

        const match = textBeforeCaret.match(/!([a-zA-Z]+)$/);
        if (match) {
            const shortcut = match[0];
            const replacement = this.shortcuts[shortcut];
            if (replacement) {
                // Close the currently open dialog, if any
                if (this.dialogIsOpen && this.currentShortcut !== shortcut) {
                    this.closeDialog();
                }
                this.openDialog(replacement, shortcut);
            }
        }
    }

    getCaretPosition() {
        if (!this.currentCaretPosition?.rangeCount) return { x: 0, y: 0 };
        const range = this.currentCaretPosition?.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        return {
            x: rect.left,
            y: rect.top
        };
    }

    openDialog(buttonText: string, shortcut: string) {
        this.dialogHelper.createDialog(() => this.handleButtonClick(buttonText), buttonText);
        this.dialogIsOpen = true;
        this.currentShortcut = shortcut;
    }


    closeDialog() {
        this.dialogHelper.closeDialog(); // Use DialogHelper to close the dialog
        this.dialogIsOpen = false;
        this.currentShortcut = null;
    }

    handleButtonClick = (buttonText: string) => {
        if (this.currentCaretPosition && this.currentRange) {
            // Inserting the replacement text corresponding to the shortcut
            const shortcut = Object.keys(this.shortcuts).find(key => this.shortcuts[key] === buttonText);
            if (shortcut) {
                const replacement = this.shortcuts[shortcut];
                this.addAtCaretPosition(replacement, this.currentCaretPosition, this.currentRange);
            }
        }
        if (this.dialogIsOpen) {
            this.closeDialog();
        }
    };

    getFormattedText(text: string): string {
        return text;
    }

    private getTextBeforeCaret(caretPosition: number): string {
        if (this.currentRange && this.currentRange.startContainer && typeof this.currentRange.startContainer.textContent === "string") {
            const textContent = this.currentRange.startContainer.textContent;
            if (textContent.length >= caretPosition) {
                return textContent.substring(0, caretPosition);
            }
        }
        return "";
    }
}

export default ShortcutFormatter;
```
</TabItem>
<TabItem value="Dialog" label="Dialog.tsx">

```typescript
import React from 'react';
import ReactDOM from 'react-dom';

interface DialogProps {
    onClick: () => void;
    buttonText: string;
}

const Dialog: React.FC<DialogProps> = ({ onClick, buttonText }) => {
    console.log("buttonText",buttonText);

    return (
        <div style={{
            position: 'fixed',
            left: '300px',
            top: '664px',
            width: '800px',
            height: '45px',
        }}>
            <button
                style={{
                    width: '800px',
                    height: '100%',
                    cursor: 'pointer',
                    backgroundColor: '#f2e6ff',
                    border: '2px solid #9b42f5',
                    borderRadius: '12px',
                    textAlign:'left',
                    paddingLeft:'20px',
                    font:'600 15px sans-serif, Inter'
                }}
                onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default class DialogHelper {
    private dialogContainer: HTMLDivElement | null = null;

    createDialog(onClick: () => void, buttonText: string) {
        this.dialogContainer = document.createElement('div');
        document.body.appendChild(this.dialogContainer);

        ReactDOM.render(<Dialog onClick={onClick} buttonText={buttonText} />, this.dialogContainer);
    }

    closeDialog() {
        if (this.dialogContainer) {
            ReactDOM.unmountComponentAtNode(this.dialogContainer);
            this.dialogContainer.remove();
            this.dialogContainer = null;
        }
    }
}

```
</TabItem>
<TabItem value="ConversationDemo" label="ConversationDemo.tsx">

```typescript
import ShortcutFormatter from "./ShortCutFormatter";

<CometChatConversations
  textFormatters={[new ShortcutFormatter()]}
/>

```
</TabItem>
</Tabs>



#### Menus

You can set the Custom Menu view to add more options to the Conversations component.

<Tabs>

<TabItem value="JavaScript" label="JavaScript">

    ```typescript

     const getMenus = () =>{
    //your custom menu
    }

    <CometChatConversations
    menus={getMenus()}
    />;
    ```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

    ```typescript

     const getMenus = () =>{
    //your custom menu
    }

    <CometChatConversations
    menus={getMenus()}
    />;
    ```

</TabItem>

</Tabs>

**Example**

![](../../assets/menu_custom_web_screens.png)

You can customize the menu by modifying the `getMenus` function as follows:
<Tabs>

<TabItem value="JavaScript" label="JavaScript">

    ```typescript

const getMenus = () => {
const handleReload = () => {
window.location.reload();
};
const getButtonStyle =()=>{
return{
height: "20px",
width: "20px",
border: "none",
borderRadius: "0",
background: "transparent",
buttonIconTint:"#7E57C2"
}
}
return (
<cometchat-button
        iconURL="https://cdn-icons-png.freepik.com/256/11019/11019959.png"
        buttonStyle={JSON.stringify(getButtonStyle())}
        onClick={handleReload}
      >
{" "}
</cometchat-button>
);
};

````

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

    ```typescript

const getMenus = () => {
const handleReload = () => {
window.location.reload();
};
const getButtonStyle = (): { [key: string]: string } => {
return {
height: "20px",
width: "20px",
border: "none",
borderRadius: "0",
background: "transparent",
buttonIconTint: "#7E57C2",
};
};
}
return (
<cometchat-button
        iconURL="https://cdn-icons-png.freepik.com/256/11019/11019959.png"
        buttonStyle={JSON.stringify(getButtonStyle())}
        onClick={handleReload}
      >
{" "}
</cometchat-button>
);
};

````

</TabItem>

</Tabs>

---

#### DatePattern

    You can modify the date pattern to your requirement using **DatePattern**. datePattern formats date and time values according to a predefined standard, enhancing consistency and clarity in their presentation.

DatePatterns describes a specific format or arrangement used to represent dates in a human-readable form.


| Name | Description |
| --- | --- |
| time | Date format displayed in the format hh:mm a |
| DayDate | Date format displayed in the following format. <ol><li>If timestamp < 24hrs display “Today”</li><li>If timestamp < 48hrs display “Yesterday”</li><li>If timestamp &lt; 7days display “EEE” i.e , SUNDAY </li><li>else display “d MMM, yyyy”</li></ol> |
| DayDateTime | Date format displayed in the following format. <ol><li>If timestamp < 24hrs display “hh:mm a”</li><li>If timestamp < 48hrs display “Yesterday”</li><li>If timestamp < 7days display “EEE” i.e SUNDAY</li><li>else display “dd MM yyyy”</li></ol> 

<Tabs>

<TabItem value="JavaScript" label="JavaScript">

    ```javascript
    <CometChatConversations
     datePattern={DatePatterns.DateTime}
    />
    ```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

    ```javascript
    <CometChatConversations
     datePattern={DatePatterns.DateTime}
    />
    ```

</TabItem>

</Tabs>

**Example**

**Default**

![](../../assets/date_pattern_default_web_screens.png)

**Custom**

![](../../assets/date_pattern_custom_web_screens.png)

#### SubtitleView

You can customize the subtitle view for each conversation item to meet your requirements

<Tabs>

<TabItem value="JavaScript" label="JavaScript">

    ```javascript
    const getSubtitleView = (conversation) =>{
    //your custom subtitle view
    }
    <CometChatConversations
     subtitleView={getSubtitleView}
    />
    ```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

    ```javascript
    const getSubtitleView = (conversation: Conversation) =>{
    //your custom subtitle view
    }
    <CometChatConversations
     subtitleView={getSubtitleView}
    />
    ```

</TabItem>

</Tabs>

**Example**

**Default**

![](../../assets/subtitle_View_default_web_screens.png)

**Custom**

![](../../assets/subtitle_View_custom_web_screens.png)

You can customize the subtitle view by modifying the `getSubtitleView` function as follows:
<Tabs>

<TabItem value="JavaScript" label="JavaScript">

```typescript
const getSubtitleView = (conversation) => {
  const conversationWith = conversation.getConversationWith();

  function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  if (conversationWith instanceof CometChat.User) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          fontSize: "10px",
        }}
      >
        <div style={{ color: "gray" }}>
          Last Active At: {formatTime(conversationWith.getLastActiveAt())}
        </div>
      </div>
    );
  } else if (conversationWith instanceof CometChat.Group) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          fontSize: "10px",
        }}
      >
        <div style={{ color: "gray" }}>
          Created At: {formatTime(conversationWith.getCreatedAt())}
        </div>
      </div>
    );
  } else {
    return <div>Unknown conversation type</div>;
  }
};
```

</TabItem>

<TabItem value="TypeScript" label="TypeScript">

```typescript
const getSubtitleView = (conversation: CometChat.Conversation) => {
  const conversationWith = conversation.getConversationWith();

  function formatTime(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  if (conversationWith instanceof CometChat.User) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          fontSize: "10px",
        }}
      >
        <div style={{ color: "gray" }}>
          Last Active At: {formatTime(conversationWith.getLastActiveAt())}
        </div>
      </div>
    );
  } else if (conversationWith instanceof CometChat.Group) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          fontSize: "10px",
        }}
      >
        <div style={{ color: "gray" }}>
          Created At: {formatTime(conversationWith.getCreatedAt())}
        </div>
      </div>
    );
  } else {
    return <div>Unknown conversation type</div>;
  }
};
```

</TabItem>

</Tabs>

#### Options

User-defined actions which appears for each conversation on mouseover.

##### Structure of CometChatOption

| Name            | Description                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| id              | Unique identifier for each option                                                                                                      |
| title           | Heading text for each option                                                                                                           |
| titleFont       | Sets all the different properties of font for the option text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font) |
| titleColor      | Sets the foreground color of option text                                                                                               |
| iconURL         | Sets the asset URL of the icon for each option                                                                                         |
| iconTint        | Sets the tint or color applied to each option                                                                                          |
| backgroundColor | Sets the background color of each option                                                                                               |
| onClick         | Method to be invoked when user clicks on each option                                                                                   |


**Example**


**Default**

![](../../assets/options_default_web_screens.png)


**Custom**

![](../../assets/options_custom_web_screens.png)


<Tabs>

<TabItem value="JavaScript" label="JavaScript">

    ```javascript

  <CometChatConversations
    options={(user) => {
    const customOptions = [
      new CometChatOption({
        id: "1",
        title: "Title",
        iconURL: "url",
        backgroundColor: "red",
        onClick: () => {
          console.log("Custom option clicked for user:", user);
        },
      }),
    ];
    return customOptions;
  }}
/>

    ```

</TabItem>

<TabItem value="TypeScript" label="TypeScript">

    ```javascript

  <CometChatConversations
   options={(user: any) => {
    const customOptions: CometChatOption[] = [
      new CometChatOption({
        id: "1",
        title: "Title",
        iconURL: "url",
        backgroundColor: "red",
        onClick: () => {
          console.log("Custom option clicked for user:", user);
        },
      }),
    ];
    return customOptions;
  }}
/>

    ```

</TabItem>

</Tabs>

---

#### LoadingStateView

You can set a custom loader view using `loadingStateView` to match the loading view of your app.

<Tabs>

<TabItem value="JavaScript" label="JavaScript">

    ```javascript

    const getLoadingStateView = () =>{
      //your custom loading view
    }

    <CometChatConversations
     loadingStateView={getLoadingStateView()}
    />
    ```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

    ```javascript

    const getLoadingStateView = () =>{
      //your custom loading view
    }

    <CometChatConversations
     loadingStateView={getLoadingStateView()}
    />
    ```

</TabItem>

</Tabs>

**Example**

**Default**

![](../../assets/loading_state_view_default_web_screens.png)

**Custom**

![](../../assets/loading_state_view_custom_web_screens.png)

You can customize the loading state view by modifying the `getLoadingStateView` function as follows:
<Tabs>

<TabItem value="JavaScript" label="JavaScript">

```typescript
const getLoadingStateView = () => {
  const getLoaderStyle = new LoaderStyle({
    iconTint: "red",
    background: "transparent",
    height: "20px",
    width: "20px",
    border: "none",
    borderRadius: "0",
  });

  return (
    <cometchat-loader
      iconURL="https://cdn.svgator.com/assets/landing-pages/static/css-loader/57579212-0-Loaders-2.svg"
      loaderStyle={JSON.stringify(getLoaderStyle)}
    ></cometchat-loader>
  );
};
```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

```typescript
const getLoadingStateView = (): JSX.Element => {
  const getLoaderStyle: LoaderStyle = new LoaderStyle({
    iconTint: "red",
    background: "transparent",
    height: "20px",
    width: "20px",
    border: "none",
    borderRadius: "0",
  });

  return (
    <cometchat-loader
      iconURL="loading icon"
      loaderStyle={JSON.stringify(getLoaderStyle)}
    ></cometchat-loader>
  );
};
```

</TabItem>

</Tabs>

#### ErrorStateView

    You can set a custom `ErrorStateView` to match the error view of your app.

<Tabs>

<TabItem value="JavaScript" label="JavaScript">

    ```javascript

    const getErrorStateView = () =>{
      //your custom error state view

}

    <CometChatConversations
     errorStateView={getErrorStateView()}
    />
    ```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

    ```javascript

    const getErrorStateView = () =>{
      //your custom error state view

}

    <CometChatConversations
     errorStateView={getErrorStateView()}
    />
    ```

</TabItem>

</Tabs>

**Example**


**Default**

  ![](../../assets/error_state_view_default_web_screens.png)

**Custom**

  ![](../../assets/error_state_view_custom_web_screens.png)

    You can customize the empty state view by modifying the `getErrorStateView` function as follows:

<Tabs>

<TabItem value="JavaScript" label="JavaScript">

```typescript
const getErrorStateView = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <img
        src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png"
        alt="error icon"
        style={{ height: "100px", width: "100px", justifyContent: "center" }}
      ></img>
    </div>
  );
};
```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

```typescript
const getErrorStateView = (): JSX.Element => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <img
        src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png"
        alt="error icon"
        style={{ height: "100px", width: "100px", justifyContent: "center" }}
      ></img>
    </div>
  );
};
```

</TabItem>

</Tabs>

````
