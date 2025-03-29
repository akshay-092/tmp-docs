---
sidebar_position: 9
title: Message Template
slug: /message-template
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

MessageTemplate provides you with the capability to define and customize both the structure and the behavior of the Message Bubble. It acts as a schema or design blueprint for the creation of a variety of Message Bubble components, allowing you to manage the appearance and interactions of Message Bubble within your application effectively and consistently.

### Structure

![](../assets/message_template_overview_web_screens.png)

The Message Bubble structure can typically be broken down into the following views:

1. **Leading view**: This is where the sender's avatar is displayed. It's typically on the left of the Message Bubble for messages from others and on the right for messages from the current user.

2. **Header view**: This displays the sender's name and is especially useful in group chats where multiple users are sending messages.

3. **Reply view**: This view can be used to extend the Message Bubble with additional elements. It's typically placed above the Content view.

4. **Content view**: This is the core of the Message Bubble where the message content (text, images, videos, etc.) is displayed.

5. **Bottom view**: This view can be used to extend the Message Bubble with additional elements, such as link previews or a 'load more' button for long messages. It's typically placed beneath the Content view.

6. **Thread view**: This is where the thread reply icon and reply counts are displayed. It's located below the footer view.

7. **Footer view**: This is where the reactions are displayed. It's located at the bottom of the Message Bubble.

8. **Status Info view**: This is where the timestamp of the message and its delivery or read status are displayed. It's located inside the Message Bubble just below the content view.

---

### Properties

MessageTemplate provides you with methods that allow you to alter various properties of the Message Bubble. These properties include aspects such as the `type` and `category` of a message, the appearance and behavior of the header, content, and footer sections of the message bubble,

1. **type**

   Using `type` you can set the type of CometChatMessage, This will map your MessageTemplate to the corresponding CometChatMessage. You can set the MessageTemplates Type using the following code snippet.

2. **category**

   Using `category` you can set the category of a MessageTemplate. This will create a MessageTemplate with the specified category and link it with a CometChatMessage of the same category.

   Please refer to our guide on [Message Categories](/sdk/javascript/message-structure-and-hierarchy) for a deeper understanding of message categories.

3. **headerView**

   The `headerView` method allows you to assign a custom header view to the Message Bubble. By default, it is configured to display the sender's name.

4. **contentView**

   The `contentView` method allows you to assign a custom content view to the Message Bubble. By default, it displays the Text Bubble, Image Bubble, File Bubble, Audio Bubble, or Video Bubble depending on the message type.

5. **footerView**

   The `footerView` method allows you to assign a custom Footer view to the Message Bubble. By default it shows thr reactions for the message bubble.

6. **bottomView**

   The `bottomView` method allows you to assign a custom Bottom view to the Message Bubble. By defuault is has buttons such as link previews or a 'load more' button for long messages.

7. **bubbleView**

   The `bubbleView` method allows you to assign a custom Bubble view to the Message Bubble. By default, headerView, contentView, statusInfoView and footerView together form a message bubble.

8. **statusInfoView**

   The `statusInfoView` method allows you to assign a custom status info view to the Message Bubble. By default, it displays the receipt and timestamp.

9. **options**

   The `options` lets you set the list of actions that a user can perform on a message. This includes actions like reacting to, editing, or deleting a message.

---

## Customization

Let's dive into how you can use the [properties](#properties) of MessageTemplate to customize an existing template or add a new one to the [MessageList](message-list) component.

The first step is to fetch the list of existing templates when you want to modify or add to them. This can be done using the getAllMessageTemplates() method from the DataSource of the CometChatUIKit class.

```javascript
let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
```

### Existing Templates

You will need to first get the MessageTemplate object for the type of message you want to customize. You will be customizing the text message bubble here. The code snippet to get the Text MessageTemplate is as follows.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```typescript
import {
  CometChatUIKit,
  CometChatUIKitConstants,
} from "@cometchat/chat-uikit-react";

let allTemplates: CometChatMessageTemplate[] =
  CometChatUIKit.getDataSource().getAllMessageTemplates();
for (let i = 0; i < allTemplates.length; i++) {
  if (allTemplates[i].type === CometChatUIKitConstants.MessageTypes.text) {
    //customize allTemplates[i]
  }
}
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```javascript
import {
  CometChatUIKit,
  CometChatUIKitConstants,
} from "@cometchat/chat-uikit-react";

let allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
for (let i = 0; i < allTemplates.length; i++) {
  if (allTemplates[i].type === CometChatUIKitConstants.MessageTypes.text) {
    //customize allTemplates[i]
  }
}
```

</TabItem>
</Tabs>

You will be using [Message List](message-list) component using the `templates` prop of `CometChatMessageList` component.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx
import { CometChatMessageList } from "@cometchat/uikit-react";

<CometChatMessageList user={chatUser} templates={templates} />;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx
import { CometChatMessageList } from "@cometchat/uikit-react";

<CometChatMessageList user={chatUser} templates={templates} />;
```

</TabItem>
</Tabs>

#### HeaderView

The `headerView` method of MessageTemplate allows you to add custom views to the header of your message bubbles. In the example below, we will add a custom header view of every text message in the MessageList.

![](../assets/message_template_header_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>(
    []
  );
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates: CometChatMessageTemplate[] =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (
        templates.type === CometChatUIKitConstants.MessageTypes.text &&
        templates.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        templates.headerView = (message: CometChat.BaseMessage) =>
          getHeaderView(message);
        return templates;
      }
      return templates;
    });
    setTemplates(template);
  }, []);

  const getHeaderView = (message: CometChat.BaseMessage) => {
    return <> {message.getSender().getName()} • 🗓️ In meeting</>;
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList group={chatGroup} templates={templates} />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = useState([]);
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (
        templates.type === CometChatUIKitConstants.MessageTypes.text &&
        templates.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        templates.headerView = (message: CometChat.BaseMessage) =>
          getHeaderView(message);
        return templates;
      }
      return templates;
    });
    setTemplates(template);
  }, []);

  const getHeaderView = (message: CometChat.BaseMessage) => {
    return <> {message.getSender().getName()} • 🗓️ In meeting</>;
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList group={chatGroup} templates={templates} />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>
</Tabs>

#### Contentview

The `contentview` method of MessageTemplate allows you to add a custom view to the content of your message bubbles. In the example below, we will add a custom layout to the content view of every text message in the MessageList.

![](../assets/message_template_content_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx
import React from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
  CometChatMessageTemplate,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import bannerImage from "../../assets/banner.svg";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>(
    []
  );
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  React.useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates: CometChatMessageTemplate[] =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const CUSTOM_MESSAGE_TYPE = "customType";
    let customMessageTemplate = new CometChatMessageTemplate({
      type: CUSTOM_MESSAGE_TYPE,
      category: CometChatUIKitConstants.MessageCategory.custom,
      contentView: (message: CometChat.BaseMessage) => getContentView(message),
    });
    definedTemplates.push(customMessageTemplate);
    setTemplates(definedTemplates);
  }, []);

  const getContentView = (message: CometChat.BaseMessage) => {
    return (
      <div className="content-view">
        <div className="content-view__header">
          <img
            className="content-view__header-banner"
            src={bannerImage}
            alt=""
          />
        </div>
        <div className="content-view__body">
          <div>
            <div className="content-view__body-title">Blazer Casual</div>
            <div className="content-view__body-description">
              Men's Tailored Regular Fit Blazer
            </div>
          </div>
          <div>
            <div className="content-view__body-price">
              $37.99{" "}
              <span className="content-view__body-price-old">$74.00</span>
            </div>
            <div className="content-view__body-delivery-type">
              Free Delivery
            </div>
          </div>
        </div>
        <div className="content-footer">Buy now</div>
      </div>
    );
  };

  const getMessageRequestBuilder = () => {
    const CUSTOM_MESSAGE_TYPE = "customType";
    let categories = CometChatUIKit.getDataSource().getAllMessageCategories();
    categories.push(CometChatUIKitConstants.MessageCategory.custom);
    let types = CometChatUIKit.getDataSource().getAllMessageTypes();
    types.push(CUSTOM_MESSAGE_TYPE);
    return new CometChat.MessagesRequestBuilder()
      .setCategories(categories)
      .setTypes(types)
      .hideReplies(true)
      .setLimit(30);
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList
          group={chatGroup}
          templates={templates}
          messagesRequestBuilder={getMessageRequestBuilder()}
        />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```jsx
import React from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
  CometChatMessageTemplate,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import bannerImage from "../../assets/banner.svg";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState([]);
  const [chatGroup, setChatGroup] = React.useState();

  React.useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const CUSTOM_MESSAGE_TYPE = "customType";
    let customMessageTemplate = new CometChatMessageTemplate({
      type: CUSTOM_MESSAGE_TYPE,
      category: CometChatUIKitConstants.MessageCategory.custom,
      contentView: (message: CometChat.BaseMessage) => getContentView(message),
    });
    definedTemplates.push(customMessageTemplate);
    setTemplates(definedTemplates);
  }, []);

  const getContentView = (message: CometChat.BaseMessage) => {
    return (
      <div className="content-view">
        <div className="content-view__header">
          <img
            className="content-view__header-banner"
            src={bannerImage}
            alt=""
          />
        </div>
        <div className="content-view__body">
          <div>
            <div className="content-view__body-title">Blazer Casual</div>
            <div className="content-view__body-description">
              Men's Tailored Regular Fit Blazer
            </div>
          </div>
          <div>
            <div className="content-view__body-price">
              $37.99{" "}
              <span className="content-view__body-price-old">$74.00</span>
            </div>
            <div className="content-view__body-delivery-type">
              Free Delivery
            </div>
          </div>
        </div>
        <div className="content-footer">Buy now</div>
      </div>
    );
  };

  const getMessageRequestBuilder = () => {
    const CUSTOM_MESSAGE_TYPE = "customType";
    let categories = CometChatUIKit.getDataSource().getAllMessageCategories();
    categories.push(CometChatUIKitConstants.MessageCategory.custom);
    let types = CometChatUIKit.getDataSource().getAllMessageTypes();
    types.push(CUSTOM_MESSAGE_TYPE);
    return new CometChat.MessagesRequestBuilder()
      .setCategories(categories)
      .setTypes(types)
      .hideReplies(true)
      .setLimit(30);
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList
          group={chatGroup}
          templates={templates}
          messagesRequestBuilder={getMessageRequestBuilder()}
        />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="CSS" label="CSS">

```css
.content-view__header-banner {
  border-radius: 12px;
}

.content-view__body {
  height: 105px;
  display: flex;
  padding: 12px 4px;
  flex-direction: column;
  text-align: left;
  gap: 16px;
  align-self: stretch;
}

.content-view__body-title {
  color: #141414;
  font: 700 16px/1.2 Roboto;
}

.content-view__body-description {
  color: #727272;
  font: 400 14px/1.2 Roboto;
}

.content-view__body-price {
  color: #6852d6;
  font: 700 16px/1.2 Roboto;
}

.content-view__body-price-old {
  color: #727272;
  font: 400 14px/1.2 Roboto;
  text-decoration: line-through;
}

.content-view__body-delivery-type {
  color: #727272;
  font: 400 14px/1.2 Roboto;
}

.content-footer {
  display: flex;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-top: 1px solid #dcdcdc;
  color: #6852d6;
  font: 500 14px/1.2 Roboto;
}
```

</TabItem>
</Tabs>

#### BottomView

The `bottomView` method of MessageTemplate allows you to add a custom button view to your message bubbles. In the example below, we will add a custom bottom view to every text message in the MessageList.

![](../assets/message_template_bottom_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>(
    []
  );
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates: CometChatMessageTemplate[] =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (
        templates.type === CometChatUIKitConstants.MessageTypes.text &&
        templates.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        templates.bottomView = (message: CometChat.BaseMessage) =>
          getBottomView(message);
        return templates;
      }
      return templates;
    });
    setTemplates(template);
  }, []);

  const getBottomView = (message: CometChat.BaseMessage) => {
    return (
      <div className="bottom-view">
        <span className="error-icon"> </span> According to guidelines you cannot
        share contact
      </div>
    );
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList group={chatGroup} templates={templates} />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```jsx
import React, { useEffect, useState } from "react";
import { CometChatMessageList, CometChatUIKit, CometChatUIKitConstants } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);
    const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

    useEffect(() => {
        CometChat.getGroup("guid").then((group) => {
            setChatGroup(group);
        })

        let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
        const template = definedTemplates.map((templates) => {
            if (templates.type === CometChatUIKitConstants.MessageTypes.text &&
                templates.category === CometChatUIKitConstants.MessageCategory.message) {
                templates.bottomView = (message: CometChat.BaseMessage) => getBottomView(message)
                return templates;
            }
            return templates
        })
        setTemplates(template);
    }, []);

    const getBottomView = (message: CometChat.BaseMessage) => {
        return (
            <div className="bottom-view">
                <span className="error-icon"> </span> According to guidelines you cannot share contact
            </div>)
    }

    return (
        <div>
            {chatGroup && <CometChatMessageList
                group={chatGroup}
                templates={templates}
            />}
        </div>
    );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="CSS" label="CSS">

```css
.cometchat .cometchat-message-bubble__body {
  border-radius: 12px 12px 0px 0px;
}

.bottom-view {
  display: flex;
  height: 19px;
  align-items: center;
  gap: 4px;
  color: #f44649;
  font: 400 12px/120% Roboto;
  border-radius: 0px 0px 12px 12px;
  background: linear-gradient(
      0deg,
      rgba(244, 70, 73, 0.2) 0%,
      rgba(244, 70, 73, 0.2) 100%
    ), #fff;
  padding: 0px 8px 0px 5px;
}

.error-icon {
  display: flex;
  width: 12px;
  height: 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-shrink: 0;
  -webkit-mask: url("../assets/infoIcon.svg") center center no-repeat;
  mask: url("../assets/infoIcon.svg") center center no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  background-color: #f44649;
}
```

</TabItem>
</Tabs>

#### FooterView

The `footerView` method of MessageTemplate allows you to add a footer view to your message bubbles. In the example below, we will add a custom footer view to every text message in the MessageList.

![](../assets/message_template_footer_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>(
    []
  );
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates: CometChatMessageTemplate[] =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (
        templates.type === CometChatUIKitConstants.MessageTypes.text &&
        templates.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        templates.footerView = (message: CometChat.BaseMessage) =>
          getFooterView(message);
        return templates;
      }
      return templates;
    });
    setTemplates(template);
  }, []);

  const getFooterView = (message: CometChat.BaseMessage) => {
    if (message.getReactions().length > 0) {
      return (
        <>
          <CometChatReactions messageObject={message} />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList group={chatGroup} templates={templates} />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```jsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState([]);
  const [chatGroup, setChatGroup] = React.useState();

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (
        templates.type === CometChatUIKitConstants.MessageTypes.text &&
        templates.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        templates.footerView = (message: CometChat.BaseMessage) =>
          getFooterView(message);
        return templates;
      }
      return templates;
    });
    setTemplates(template);
  }, []);

  const getFooterView = (message: CometChat.BaseMessage) => {
    if (message.getReactions().length > 0) {
      return (
        <>
          <CometChatReactions messageObject={message} />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList group={chatGroup} templates={templates} />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="CSS" label="CSS">

```css
.cometchat .cometchat-message-bubble__body-footer-view {
  display: flex;
  align-items: center;
  border-top: 1px solid #dcdcdc;
  border-radius: 0px 0px 12px 12px;
  background: #e8e8e8;
  padding: 8px;
}

.cometchat-message-bubble__body-wrapper:has(
    .cometchat-message-bubble__body-footer-view
  )
  .cometchat-message-bubble__body {
  border-radius: 12px 12px 0px 0px;
}
```

</TabItem>
</Tabs>

#### BubbleView

The `bubbleView` method of MessageTemplate allows you to add a bubble view to your message bubbles. In the example below, we will add a custom bubble view to the text message in the MessageList.

![](../assets/message_template_bubble_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
  CometChatMessageTemplate,
  receipts,
  MessageBubbleAlignment,
  CometChatUIKitLoginListener,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import readIcon from "../../assets/message-read.svg";
import sentIcon from "../../assets/message-sent.svg";
import deliveredIcon from "../../assets/message-delivered.svg";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>(
    []
  );
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (
        templates.type === CometChatUIKitConstants.MessageTypes.text &&
        templates.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        templates.bubbleView = (
          message: CometChat.BaseMessage,
          alignment: MessageBubbleAlignment
        ) => getBubbleView(message, alignment);
        return templates;
      }
      return templates;
    });
    setTemplates(template);
  }, []);

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const getBubbleView = (
    message: CometChat.BaseMessage,
    alignment: MessageBubbleAlignment
  ) => {
    const isSentByMe = isMessageSentByMe(
      message,
      CometChatUIKitLoginListener.getLoggedInUser()!
    );

    let textMessage = "";
    if (message instanceof CometChat.TextMessage) {
      textMessage = message.getText();
    }

    const receipt = MessageReceiptUtils.getReceiptStatus(message);
    let status = sentIcon;

    if (receipt === receipts.delivered) {
      status = deliveredIcon;
    } else if (receipt === receipts.read) {
      status = readIcon;
    } else {
      status = sentIcon;
    }

    return (
      <div
        className={`bubble-view ${
          isSentByMe ? "bubble-view__outgoing" : "bubble-view__incoming"
        } `}
      >
        <div className="bubble-view__content">
          <div className="bubble-view__content__text">{textMessage}</div>
          <div className="triangle"></div>
        </div>
        <div className="bubble-view__content__time">
          {formatTime(message.getSentAt())}
          {isSentByMe && <img src={status} alt="" width="16px" height="16px" />}
        </div>
      </div>
    );
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList group={chatGroup} templates={templates} />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx
import React, { useEffect, useState } from "react";
import { CometChatMessageList, CometChatUIKit, CometChatUIKitConstants,CometChatMessageTemplate,receipts,MessageBubbleAlignment,CometChatUIKitLoginListener } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";
import readIcon from "../../assets/message-read.svg";
import sentIcon from "../../assets/message-sent.svg";
import deliveredIcon from "../../assets/message-delivered.svg";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState([]);
    const [chatGroup, setChatGroup] = React.useState();

    useEffect(() => {
        CometChat.getGroup("guid").then((group) => {
            setChatGroup(group);
        })

        let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
        const template = definedTemplates.map((templates) => {
            if (templates.type === CometChatUIKitConstants.MessageTypes.text &&
                templates.category === CometChatUIKitConstants.MessageCategory.message) {
                templates.bubbleView = (message, alignment) => getBubbleView(message, alignment)
                return templates;
            }
            return templates
        })
        setTemplates(template);
    }, []);

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert to milliseconds
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${period}`;
    };

     const getBubbleView = (message,alignment) => {
      const isSentByMe = isMessageSentByMe(
        message,
        CometChatUIKitLoginListener.getLoggedInUser()!
      );

      let textMessage = "";
      if (message instanceof CometChat.TextMessage) {
        textMessage = message.getText();
      }

      const receipt = MessageReceiptUtils.getReceiptStatus(message);
      let status = sentIcon;

      if (receipt === receipts.delivered) {
        status = deliveredIcon;
      } else if (receipt === receipts.read) {
        status = readIcon;
      } else {
        status = sentIcon;
      }

      return (
        <div
          className={`bubble-view ${
            isSentByMe ? "bubble-view__outgoing" : "bubble-view__incoming"
          } `}
        >
          <div className='bubble-view__content'>
            <div className='bubble-view__content__text'>{textMessage}</div>
            <div className='triangle'></div>
          </div>
          <div className='bubble-view__content__time'>
            {formatTime(message.getSentAt())}
            {isSentByMe && (
              <img
                src={status}
                alt=''
                width="16px"
                height="16px"
              />
            )}
          </div>
        </div>
      );
    };

    return (
        <div>
            {chatGroup && <CometChatMessageList
                group={chatGroup}
                templates={templates}
            />}
        </div>
    );
};

export { CustomMessageTemplate };
```

</TabItem>
<TabItem value="CSS" label="CSS">

```css
.bubble-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  gap: 12px;
}

.bubble-view__outgoing {
  align-items: flex-end;
}

.bubble-view__incoming {
  align-items: flex-start;
}

.bubble-view__content {
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
}

.bubble-view__content__text {
  width: fit-content;
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 2px 2px 0px 2px;
  background: #6852d6;
  color: white;
}

.bubble-view__incoming .bubble-view__content__text {
  background-color: #e8e8e8;
  color: #141414;
}

.bubble-view__content__time {
  width: fit-content;
  display: flex;
  border-radius: 2px 2px 0px 2px;
  color: #727272;
  gap: 4px;
  color: #727272;
  text-align: right;
  font: 400 10/14 Roboto;
  font-style: normal;
}

.bubble-view__outgoing .triangle {
  position: absolute;
  bottom: -10px;
  right: 0px;
  width: 0;
  height: 9px;
  border-left: 18px solid transparent;
  border-top: 10px solid #5a4fcf;
}

.bubble-view__incoming .triangle {
  position: absolute;
  bottom: -10px;
  left: 0px;
  width: 0;
  height: 9px;
  border-right: 18px solid transparent;
  border-top: 10px solid #e8e8e8;
}
```

</TabItem>
</Tabs>

#### StatusInfoView

The `statusInfoView` method of MessageTemplate allows you to add a status info view to your message bubbles. In the example below, we will add a custom status info view to every text message in the MessageList.

![](../assets/message_template_status_info_view_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>(
    []
  );
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates: CometChatMessageTemplate[] =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (
        templates.type === CometChatUIKitConstants.MessageTypes.text &&
        templates.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        templates.statusInfoView = (message: CometChat.BaseMessage) =>
          getStatusInfo(message);
        return templates;
      }
      return templates;
    });
    setTemplates(template);
  }, []);

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const getStatusInfo = (message: CometChat.BaseMessage) => {
    if (message instanceof CometChat.TextMessage) {
      const timestamp = message.getSentAt();
      const formattedTime = formatTime(timestamp);
      return <div className="status-info">{formattedTime}</div>;
    } else {
      return null;
    }
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList group={chatGroup} templates={templates} />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx
import React, { useEffect, useState } from "react";
import { CometChatMessageList, CometChatUIKit, CometChatUIKitConstants } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState([]);
    const [chatGroup, setChatGroup] = React.useState();

    useEffect(() => {
        CometChat.getGroup("guid").then((group) => {
            setChatGroup(group);
        })

        let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
        const template = definedTemplates.map((templates) => {
            if (templates.type === CometChatUIKitConstants.MessageTypes.text &&
                templates.category === CometChatUIKitConstants.MessageCategory.message) {
                templates.statusInfoView = (message) => getStatusInfo(message)
                return templates;
            }
            return templates
        })
        setTemplates(template);
    }, []);

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert to milliseconds
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${period}`;
    };

    const getStatusInfo = (message) => {
        if (message instanceof ) {
            const timestamp = message.getSentAt();
            const formattedTime = formatTime(timestamp);
            return (
                <div className="status-info">
                    {formattedTime}
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div>
            {chatGroup && <CometChatMessageList
                group={chatGroup}
                templates={templates}
            />}
        </div>
    );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="CSS" label="CSS">

```css
.status-info {
  display: flex;
  width: 57px;
  height: 24px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 1000px;
  color: #727272;
  text-align: right;
  font: 400 10px/120% Roboto;
  font-style: normal;
}

.cometchat .cometchat-message-bubble__body {
  background: none;
}

.cometchat .cometchat-message-bubble .cometchat-text-bubble {
  padding: 8px;
}
```

</TabItem>
</Tabs>

#### Options

The `options` method in the MessageTemplate allows you to customize the options that appear in the action sheet when a message is long-pressed. By default, CometChat UI Kit provides a set of options like "Thread Reply", "Copy" ,"Edit", and "Delete".

However, if you wish to override or modify these options, you can use the `options` method and pass a list of `CometChatActionsIcon`. This list of options will replace the default set.

![](../assets/message_template_options_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
  CometChatMessageTemplate,
  CometChatActionsIcon,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = useState<CometChatMessageTemplate[]>(
    []
  );
  const [chatGroup, setChatGroup] = useState<CometChat.Group>();

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates: CometChatMessageTemplate[] =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (
        templates.type === CometChatUIKitConstants.MessageTypes.text &&
        templates.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        templates.options = (
          loggedInUser: CometChat.User,
          message: CometChat.BaseMessage,
          group?: CometChat.Group
        ) => getCustomOptions(loggedInUser, message, chatGroup);
        return templates;
      }
      return templates;
    });
    setTemplates(template);
  }, []);

  const getCustomOptions = (
    loggedInUser: CometChat.User,
    message: CometChat.BaseMessage,
    group?: CometChat.Group
  ) => {
    const defaultOptions: any =
      CometChatUIKit.getDataSource().getMessageOptions(
        loggedInUser,
        message,
        chatGroup
      );
    const myView: any = new CometChatActionsIcon({
      id: "refresh",
      title: "Refresh",
      iconURL: "", // Add your custom icon URL
      onClick: () => {
        /** Add your custom on click logic */
      },
    });
    defaultOptions.splice(1, 0, myView);
    return defaultOptions;
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList group={chatGroup} templates={templates} />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```jsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
  CometChatActionsIcon,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = useState([]);
  const [chatGroup, setChatGroup] = useState();

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (
        templates.type === CometChatUIKitConstants.MessageTypes.text &&
        templates.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        templates.options = (loggedInUser, message, group) =>
          getCustomOptions(loggedInUser, message, chatGroup);
        return templates;
      }
      return templates;
    });
    setTemplates(template);
  }, []);

  const getCustomOptions = (loggedInUser, message, group) => {
    const defaultOptions = CometChatUIKit.getDataSource().getMessageOptions(
      loggedInUser,
      message,
      chatGroup
    );
    const myView = new CometChatActionsIcon({
      id: "refresh",
      title: "Refresh",
      iconURL: "", // Add your custom icon URL
      onClick: () => {
        /** Add your custom on click logic */
      },
    });
    defaultOptions.splice(1, 0, myView);
    return defaultOptions;
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList group={chatGroup} templates={templates} />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="CSS" label="CSS">

```css
#refresh.cometchat-menu-list__menu .cometchat-menu-list__sub-menu-item-title {
  overflow: hidden;
  color: #6852d6;
  font: 400 14px/16.8px Roboto;
  font-style: italic;
}

#refresh.cometchat-menu-list__menu
  .cometchat-menu-list__sub-menu-list-item-icon {
  background-color: #6852d6;
}
```

</TabItem>
</Tabs>

### New Templates

You can create an entirely new template for custom messages is one of the powerful features of CometChat's MessageTemplate.

![](../assets/message_template_new_template_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx
import React, { useEffect, useState } from "react";
import {
  CometChatMessageList,
  CometChatUIKit,
  CometChatUIKitConstants,
  CometChatMessageTemplate,
  MessageReceiptUtils,
  isMessageSentByMe,
  receipts,
  CometChatUIKitLoginListener,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import readIcon from "../../assets/message-read.svg";
import sentIcon from "../../assets/message-sent.svg";
import deliveredIcon from "../../assets/message-delivered.svg";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>(
    []
  );
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    });

    let definedTemplates =
      CometChatUIKit.getDataSource().getAllMessageTemplates();
    const CUSTOM_MESSAGE_TYPE = "customType";
    let customMessageTemplate = new CometChatMessageTemplate({
      type: CUSTOM_MESSAGE_TYPE,
      category: CometChatUIKitConstants.MessageCategory.custom,
      contentView: (message: CometChat.BaseMessage) => getContentView(message),
    });
    definedTemplates.push(customMessageTemplate);
    setTemplates(definedTemplates);
  }, []);

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const getContentView = (message: CometChat.BaseMessage) => {
    const isSentByMe = isMessageSentByMe(
      message,
      CometChatUIKitLoginListener.getLoggedInUser()!
    );

    const receipt = MessageReceiptUtils.getReceiptStatus(message);
    let status = sentIcon;

    if (receipt === receipts.delivered) {
      status = deliveredIcon;
    } else if (receipt === receipts.read) {
      status = readIcon;
    } else {
      status = sentIcon;
    }

    return (
      <div
        className={`content-view ${
          isSentByMe
            ? "cometchat-message-bubble-outgoing "
            : "cometchat-message-bubble-incoming"
        } `}
      >
        <div className="content-view__header">
          <CometChatListItem
            title={message.getSender().getName()}
            avatarURL={message.getSender().getAvatar()}
          />
          <div className="content-view__header-time">
            {formatTime(message.getSentAt())}
            {isSentByMe && (
              <img src={status} alt="" height="16px" width="16px" />
            )}
          </div>
        </div>
        <div className="content-view__footer">
          <div className="content-view__footer-add-contact">Add Contact</div>
          <div className="content-view__footer-message">Message</div>
        </div>
      </div>
    );
  };

  const getMessageRequestBuilder = () => {
    const CUSTOM_MESSAGE_TYPE = "customType";
    let categories = CometChatUIKit.getDataSource().getAllMessageCategories();
    categories.push(CometChatUIKitConstants.MessageCategory.custom);
    let types = CometChatUIKit.getDataSource().getAllMessageTypes();
    types.push(CUSTOM_MESSAGE_TYPE);
    return new CometChat.MessagesRequestBuilder()
      .setCategories(categories)
      .setTypes(types)
      .hideReplies(true)
      .setLimit(30);
  };

  return (
    <div>
      {chatGroup && (
        <CometChatMessageList
          group={chatGroup}
          templates={templates}
          messagesRequestBuilder={getMessageRequestBuilder()}
        />
      )}
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```jsx
import React, { useEffect, useState } from "react";
import { CometChatMessageList, CometChatUIKit, CometChatUIKitConstants,
CometChatMessageTemplate,MessageReceiptUtils,isMessageSentByMe,receipts,CometChatUIKitLoginListener } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";
import readIcon from "../../assets/message-read.svg";
import sentIcon from "../../assets/message-sent.svg";
import deliveredIcon from "../../assets/message-delivered.svg";


const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState([]);
    const [chatGroup, setChatGroup] = React.useState();

    useEffect(() => {
        CometChat.getGroup("guid").then((group) => {
            setChatGroup(group);
        })

        let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
        const CUSTOM_MESSAGE_TYPE = "customType";
        let customMessageTemplate = new CometChatMessageTemplate({
            type: CUSTOM_MESSAGE_TYPE,
            category: CometChatUIKitConstants.MessageCategory.custom,
            contentView: (message) => getContentView(message),
        });
        definedTemplates.push(customMessageTemplate);
        setTemplates(definedTemplates);
    }, []);

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert to milliseconds
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${period}`;
    };

   const getContentView = (message) => {
      const isSentByMe = isMessageSentByMe(
        message,
        CometChatUIKitLoginListener.getLoggedInUser()!
      );

      const receipt = MessageReceiptUtils.getReceiptStatus(message);
      let status = sentIcon;

      if (receipt === receipts.delivered) {
        status = deliveredIcon;
      } else if (receipt === receipts.read) {
        status = readIcon;
      } else {
        status = sentIcon;
      }

      return (
        <div
          className={`content-view ${
            isSentByMe
              ? "cometchat-message-bubble-outgoing "
              : "cometchat-message-bubble-incoming"
          } `}
        >
          <div className='content-view__header'>
            <CometChatListItem
              title={message.getSender().getName()}
              avatarURL={message.getSender().getAvatar()}
            />
            <div className='content-view__header-time'>
              {formatTime(message.getSentAt())}
              {isSentByMe && (
                <img src={status} alt='' height='16px' width='16px' />
              )}
            </div>
          </div>
          <div className='content-view__footer'>
            <div className='content-view__footer-add-contact'>Add Contact</div>
            <div className='content-view__footer-message'>Message</div>
          </div>
        </div>
      );
    };

    const getMessageRequestBuilder = () => {
        const CUSTOM_MESSAGE_TYPE = "customType";
        let categories = CometChatUIKit.getDataSource().getAllMessageCategories();
        categories.push(CometChatUIKitConstants.MessageCategory.custom);
        let types = CometChatUIKit.getDataSource().getAllMessageTypes();
        types.push(CUSTOM_MESSAGE_TYPE);
        return new CometChat.MessagesRequestBuilder().setCategories(categories).setTypes(types).hideReplies(true).setLimit(30);
    }

    return (
        <div>
            {chatGroup && <CometChatMessageList
                group={chatGroup}
                templates={templates}
                messagesRequestBuilder={getMessageRequestBuilder()}
            />}
        </div>
    );
};

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="CSS" label="CSS">

```css
.content-view {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.content-view .cometchat-list-item {
  background: none;
}

.content-view .cometchat-list-item__body-title {
  overflow: hidden;
  color: #f9f8fd;
  text-overflow: ellipsis;
  font: 500 14px/16.8px roboto;
  font-style: normal;
}

.cometchat-message-bubble-incoming .cometchat-list-item__body-title,
.cometchat-message-bubble-incoming .content-view__header-time,
.cometchat-message-bubble-incoming .content-view__footer-message,
.cometchat-message-bubble-incoming .content-view__footer-add-contact {
  color: #141414;
}

.cometchat-message-bubble-incoming .content-view__footer {
  border-top: 1px solid #dcdcdc;
}

.cometchat-message-bubble-incoming .content-view__footer-add-contact {
  border-right: 1px solid #dcdcdc;
}

.content-view__header-time {
  display: flex;
  justify-content: end;
  gap: 4px;
  color: #f9f8fd;
  text-align: right;
  font: 400 10px/12px roboto;
  font-style: normal;
}

.content-view__footer {
  border-top: 1px solid #7965db;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
}

.content-view__footer-add-contact {
  width: 50%;
  height: 100%;
  border-right: 1px solid #7965db;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9f8fd;
  font: 500 14px/16.8px roboto;
  font-style: normal;
}

.content-view__footer-message {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9f8fd;
  font: 500 14px/16.8px roboto;
  font-style: normal;
}
```

</TabItem>
</Tabs>
