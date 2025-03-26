---
sidebar_position: 4
title: Message Template
slug: /message-template
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

A MessageTemplate provides you with the capability to define and customize both the structure and the behavior of the [MessageBubble](./message-bubble). It acts as a schema or design blueprint for the creation of a variety of [MessageBubble](./message-bubble) components, allowing you to manage the appearance and interactions of [MessageBubble](./message-bubble) within your application effectively and consistently.

### Structure

![](../../assets/message_template_overview_web_screens.png)

The MessageBubble structure can typically be broken down into the following views:

1. **Leading view**: This is where the sender's avatar is displayed. It's typically on the left of the MessageBubble for messages from others and on the right for messages from the current user.

2. **Header view**: This displays the sender's name and is especially useful in group chats where multiple users are sending messages.

3. **Reply view**: This view can be used to extend the MessageBubble with additional elements. It's typically placed above the Content view.

4. **Content view**: This is the core of the MessageBubble where the message content (text, images, videos, etc.) is displayed.

5. **Bottom view**: This view can be used to extend the MessageBubble with additional elements, such as link previews or a 'load more' button for long messages. It's typically placed beneath the Content view.

6. **Thread view**: This is where the thread reply icon and reply counts are displayed. It's located below the footer view.

7. **Footer view**: This is where the reactions are displayed. It's located at the bottom of the MessageBubble.

8. **status Info view**: This is where the timestamp of the message and its delivery or read status are displayed. It's located inside the MessageBubble just below the content view.

### Properties

MessageTemplate provides you with methods that allow you to alter various properties of the MessageBubble. These properties include aspects such as the `type` and `category` of a message, the appearance and behavior of the header, content, and footer sections of the message bubble,

1. **type**

   Using `type` you can set the type of CometChatMessage, This will map your MessageTemplate to the corresponding CometChatMessage. You can set the MessageTemplates Type using the following code snippet.

2. **category**

   Using `category` you can set the category of a MessageTemplate. This will create a MessageTemplate with the specified category and link it with a CometChatMessage of the same category.

   Please refer to our guide on [Message Categories](/sdk/javascript/message-structure-and-hierarchy) for a deeper understanding of message categories.

3. **headerView**

   The `headerView` method allows you to assign a custom header view to the MessageBubble. By default, it is configured to display the sender's name.

4. **contentView**

   The `contentView` method allows you to assign a custom content view to the MessageBubble. By default, it displays the [Text Bubble](./text-bubble), [Image Bubble](./image-bubble), [File Bubble](./file-bubble), [Audio Bubble](./audio-bubble), or [Video Bubble](./video-bubble), depending on the message type.

5. **footerView**

   The `footerView` method allows you to assign a custom Footer view to the MessageBubble. By default it shows thr reactions for the message bubble.

6. **bottomView**

   The `bottomView` method allows you to assign a custom Bottom view to the MessageBubble. By defuault is has buttons such as link previews or a 'load more' button for long messages.

7. **bubbleView**

   The `bubbleView` method allows you to assign a custom Bubble view to the MessageBubble. By default, headerView, contentView, statusInfoView and footerView together form a message bubble.

8. **statusInfoView**

   The `statusInfoView` method allows you to assign a custom status info view to the MessageBubble. By default, it displays the receipt and timestamp.

9. **options**

   The `options` lets you set the list of actions that a user can perform on a message. This includes actions like reacting to, editing, or deleting a message.

---

```javascript
   let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
   const CUSTOM_MESSAGE_TYPE = "your custom messagetype"
   let customMessageTemplate = new CometChatMessageTemplate({
       type: CUSTOM_MESSAGE_TYPE,
       category: CometChatUIKitConstants.MessageCategory.custom,
       headerView: //your custom header view
       contentView: //your custom content view
       footerView: //your custom footer view
       bottomView: // your custom bottom view
       bubbleView: // your custom bubble view
       options: //your custom options
   });
   definedTemplates.push(customMessageTemplate);
```

---

## Customization

Let's dive into how you can use the [properties](#properties) of MessageTemplate to customize an existing template or add a new one to the [MessageList](./message-list) component.

The First step is to fetch the list of existing templates when you want to modify or add to them. This can be done using the getAllMessageTemplates() method from the DataSource of the CometChatUIKit class.

```javascript
let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
```

### Existing Templates

You will need to first get the MessageTemplate object for the type of message you want to customize. You will be customizing the TextMessage Bubble here. The code snippet to get the Text MessageTemplate is as follows.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

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

You will be using [Messages](./messages#overview) Component for example here so to apply Template to Messages you will need to use `MessageListConfiguration`. This is because the [templates](./message-list#templates) function, which is used to apply the custom templates, belongs to the [MessageList](./message-list) component.

You can apply MessageTemplatess to Messages Component using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">
```javascript
const messageListConfiguration = new MessageListConfiguration({
    templates: templates,
});

<CometChatMessages
  user={chatUser} 
  messageListConfiguration={messageListConfiguration} 
/>

````
</TabItem>
<TabItem value="JavaScript" label="JavaScript">
```javascript
const messageListConfiguration = new MessageListConfiguration({
    templates: templates,
});

<CometChatMessages
  user={chatUser}
  messageListConfiguration={messageListConfiguration}
/>
````

</TabItem>
</Tabs>
#### HeaderView

The `headerView` method of MessageTemplate allows you to add custom views to the header of your message bubbles. In the example below, we will add a custom header view of every text message in the MessageList.

**Default**

![](../../assets/message_template_header_view_default_web_screens.png)

**Custom**

![](../../assets/message_template_header_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='CustomMessageTemplate.tsx'
import React from "react";
import { CometChatMessages, CometChatUIKit , CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);
    const [chatUser, setChatUser] = React.useState<CometChat.User>();
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })

       let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
       const template =  definedTemplates.map((templates)=>{
            if (templates.type === "text" && templates.category === CometChatUIKitConstants.MessageCategory.message) {
                templates.headerView = (message:CometChat.BaseMessage) => getHeaderView(message)
                return templates;
            }
            return templates
        })
        setTemplates(template);
    }, []);

      const getHeaderView = (message: CometChat.BaseMessage) => {
        return(
            <cometchat-avatar image="custom avatar"/>
        )
      }
      const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
      });

    return (
        <div style={{height:"100%", width:"100%"}}>
        <CometChatMessages
            user={chatUser}
            messageListConfiguration={messageListConfiguration}
        />
        </div>
    )
}

export { CustomMessageTemplate };
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='CustomMessageTemplate.jsx'
import React, { useEffect, useState } from "react";
import { CometChatMessages, CometChatUIKit, CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = useState([]);
    const [chatUser, setChatUser] = useState(null);

    useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        });

        const fetchTemplates = async () => {
            const definedTemplates = await CometChatUIKit.getDataSource().getAllMessageTemplates();
            const updatedTemplates = definedTemplates.map((template) => {
                if (template.type === "text" && template.category === CometChatUIKitConstants.MessageCategory.message) {
                    template.headerView = (message) => getHeaderView(message);
                }
                return template;
            });
            setTemplates(updatedTemplates);
        };

        fetchTemplates();
    }, []);

    const getHeaderView = (message) => {
        return (
            <cometchat-avatar image="custom avatar" />
        );
    };

    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
    });

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <CometChatMessages
                user={chatUser}
                messageListConfiguration={messageListConfiguration}
            />
        </div>
    );
};

export { CustomMessageTemplate };

```

</TabItem>
</Tabs>

#### Contentview

The `contentview` method of MessageTemplate allows you to add a custom view to the content of your message bubbles. In the example below, we will add a custom layout to the content view of every text message in the MessageList.

![](../../assets/message_template_content_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='CustomMessageTemplate.tsx'
import React from "react";
import { CometChatMessages, CometChatUIKit , CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";
import rocketIcon from "./rocket.gif";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);
    const [chatUser, setChatUser] = React.useState<CometChat.User>();
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })

        let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
        const CUSTOM_MESSAGE_TYPE = "nudge";
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
            <div style={{width: "100px", height: "100px", display: "flex"}}>
                <img src={rocketIcon} alt="gif" />
            </div>
        )
    }
    const getMessageRequestBuilder = () => {
        let categories = CometChatUIKit.getDataSource().getAllMessageCategories();
        categories.push(CometChatUIKitConstants.MessageCategory.custom);
        let types = CometChatUIKit.getDataSource().getAllMessageTypes();
        types.push(CUSTOM_MESSAGE_TYPE);
        return new CometChat.MessagesRequestBuilder().setCategories(categories).setTypes(types).hideReplies(true).setLimit(30);
    }
    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
        messagesRequestBuilder: getMessageRequestBuilder()
    });

    return (
        <div style={{height:"100%", width:"100%"}}>
        <CometChatMessages
            user={chatUser}
            messageListConfiguration={messageListConfiguration}
        />
        </div>
    )
}

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='CustomMessageTemplate.jsx'
import React, { useEffect, useState } from "react";
import { CometChatMessages, CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";
import rocketIcon from "./rocket.gif";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = useState([]);
    const [chatUser, setChatUser] = useState(null);

    useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        });

        let definedTemplates = CometChat.getDataSource().getAllMessageTemplates();
        const CUSTOM_MESSAGE_TYPE = "nudge";
        let customMessageTemplate = new CometChatMessageTemplate({
            type: CUSTOM_MESSAGE_TYPE,
            category: CometChatUIKitConstants.MessageCategory.custom,
            contentView: (message) => getContentView(message),
        });
        definedTemplates.push(customMessageTemplate);
        setTemplates(definedTemplates);
    }, []);

    const getContentView = (message) => {
        return (
            <div style={{ width: "100px", height: "100px", display: "flex" }}>
                <img src={rocketIcon} alt="gif" />
            </div>
        );
    };

    const getMessageRequestBuilder = () => {
        let categories = CometChat.getDataSource().getAllMessageCategories();
        categories.push(CometChatUIKitConstants.MessageCategory.custom);
        let types = CometChat.getDataSource().getAllMessageTypes();
        types.push("nudge");
        return new CometChat.MessagesRequestBuilder().setCategories(categories).setTypes(types).hideReplies(true).setLimit(30);
    };

    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
        messagesRequestBuilder: getMessageRequestBuilder()
    });

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <CometChatMessages
                user={chatUser}
                messageListConfiguration={messageListConfiguration}
            />
        </div>
    );
};

export { CustomMessageTemplate };

```

</TabItem>
</Tabs>

#### BottomView

The `bottomView` method of MessageTemplate allows you to add a custom button view to your message bubbles. In the example below, we will add a custom bottom view to every text message in the MessageList.

![](../../assets/message_template_bottom_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='CustomMessageTemplate.tsx'
import React from "react";
import { CometChatMessages, CometChatUIKit , CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration, TextBubbleStyle } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);
    const [chatUser, setChatUser] = React.useState<CometChat.User>();

    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })

       let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
       const template =  definedTemplates.map((templates)=>{
            if (templates.type === "text" && templates.category === CometChatUIKitConstants.MessageCategory.message) {
                templates.bottomView = (message:CometChat.BaseMessage) => getBottomView(message)
                return templates;
            }
            return templates
        })
        setTemplates(template);
    }, []);

    const getBottomView = (message: CometChat.BaseMessage) => {
        if (message instanceof CometChat.TextMessage) {
            const textStyle = new TextBubbleStyle({
                width: "100",
                height: "10px",
                borderRadius: "8px",
                background: "#e3d7fa",
            });
            return (
                <cometchat-text-bubble text={message.getText()} textStyle={JSON.stringify(textStyle)} />
            );
        } else {
            // Handle other message types
            return null;
        }
    };
    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
    });

    return (
        <div style={{height:"100%", width:"100%"}}>
        <CometChatMessages
            user={chatUser}
            messageListConfiguration={messageListConfiguration}
        />
        </div>
    )
}

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='CustomMessageTemplate.jsx'
import React, { useEffect, useState } from "react";
import { CometChatMessages, CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration, TextBubbleStyle } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = useState([]);
    const [chatUser, setChatUser] = useState(null);

    useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        });

        let definedTemplates = CometChat.getDataSource().getAllMessageTemplates();
        const template = definedTemplates.map((template) => {
            if (template.type === "text" && template.category === CometChatUIKitConstants.MessageCategory.message) {
                template.bottomView = (message) => getBottomView(message);
                return template;
            }
            return template;
        });
        setTemplates(template);
    }, []);

    const getBottomView = (message) => {
        if (message instanceof CometChat.TextMessage) {
            const textStyle = new TextBubbleStyle({
                width: "100",
                height: "10px",
                borderRadius: "8px",
                background: "#e3d7fa",
            });
            return (
                <cometchat-text-bubble text={message.getText()} textStyle={JSON.stringify(textStyle)} />
            );
        } else {
            // Handle other message types
            return null;
        }
    };

    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
    });

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <CometChatMessages
                user={chatUser}
                messageListConfiguration={messageListConfiguration}
            />
        </div>
    );
};

export { CustomMessageTemplate };
```

</TabItem>
</Tabs>

#### FooterView

The `footerView` method of MessageTemplate allows you to add a footer view to your message bubbles. In the example below, we will add a custom footer view to every text message in the MessageList.

![](../../assets/message_template_footer_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='CustomMessageTemplate.tsx'
import React from "react";
import { CometChatMessages, CometChatUIKit , CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);
    const [chatUser, setChatUser] = React.useState<CometChat.User>();

    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })

       let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
       const template =  definedTemplates.map((templates)=>{
            if (templates.type === "text" && templates.category === CometChatUIKitConstants.MessageCategory.message) {
                templates.footerView = (message:CometChat.BaseMessage) => getFooterView(message)
                return templates;
            }
            return templates
        })
        setTemplates(template);
    }, [])

    React.useEffect(() => {

    }, []);

      const getFooterView = (message: CometChat.BaseMessage) => {
        return(
            <cometchat-avatar image="custom avatar"/>
        )
      }
      const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
      });

    return (
        <div style={{height:"100%", width:"100%"}}>
        <CometChatMessages
            user={chatUser}
            messageListConfiguration={messageListConfiguration}
        />
        </div>
    )
}

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='CustomMessageTemplate.jsx'
import React, { useState, useEffect } from "react";
import { CometChatMessages, CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = useState([]);
    const [chatUser, setChatUser] = useState(null);

    useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        });

        let definedTemplates = CometChat.getDataSource().getAllMessageTemplates();
        const template = definedTemplates.map((template) => {
            if (template.type === "text" && template.category === CometChatUIKitConstants.MessageCategory.message) {
                template.footerView = (message) => getFooterView(message);
                return template;
            }
            return template;
        });
        setTemplates(template);
    }, []);

    const getFooterView = (message) => {
        return (
            <cometchat-avatar image="custom avatar" />
        );
    };

    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
    });

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <CometChatMessages
                user={chatUser}
                messageListConfiguration={messageListConfiguration}
            />
        </div>
    );
};

export { CustomMessageTemplate };
```

</TabItem>
</Tabs>

#### BubbleView

The `bubbleView` method of MessageTemplate allows you to add a bubble view to your message bubbles. In the example below, we will add a custom bubble view to the text message in the MessageList.

![](../../assets/message_template_bubble_view_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='CustomMessageTemplate.tsx'
import React from "react";
import { CometChatMessages, CometChatUIKit , CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration, TextBubbleStyle } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);
    const [chatUser, setChatUser] = React.useState<CometChat.User>();

    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })

       let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
       const template =  definedTemplates.map((templates)=>{
            if (templates.type === "text" && templates.category === CometChatUIKitConstants.MessageCategory.message) {
                templates.bubbleView = (message:CometChat.BaseMessage) => getBubbleView(message)
                return templates;
            }
            return templates
        })
        setTemplates(template);
    }, [])

    const getBubbleView = (message: CometChat.BaseMessage) => {
        if (message instanceof CometChat.TextMessage) {
            const textStyle = new TextBubbleStyle({
                width: "100",
                height: "20px",
                borderRadius: "8px",
                background: "#e3d7fa",
            });

            return (
                <cometchat-text-bubble text={message.getText()} textStyle={JSON.stringify(textStyle)} />
            );
        }
    }
    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
      });

    return (
        <div style={{height:"100%", width:"100%"}}>
        <CometChatMessages
            user={chatUser}
            messageListConfiguration={messageListConfiguration}
        />
        </div>
    )
}

export { CustomMessageTemplate };
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='CustomMessageTemplate.jsx'
import React, { useState, useEffect } from "react";
import { CometChatMessages, CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration, TextBubbleStyle } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = useState([]);
    const [chatUser, setChatUser] = useState(null);

    useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        });

        let definedTemplates = CometChat.getDataSource().getAllMessageTemplates();
        const template = definedTemplates.map((template) => {
            if (template.type === "text" && template.category === CometChatUIKitConstants.MessageCategory.message) {
                template.bubbleView = (message) => getBubbleView(message);
                return template;
            }
            return template;
        });
        setTemplates(template);
    }, []);

    const getBubbleView = (message) => {
        if (message instanceof CometChat.TextMessage) {
            const textStyle = new TextBubbleStyle({
                width: "100",
                height: "20px",
                borderRadius: "8px",
                background: "#e3d7fa",
            });

            return (
                <cometchat-text-bubble text={message.getText()} textStyle={JSON.stringify(textStyle)} />
            );
        }
    };

    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
    });

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <CometChatMessages
                user={chatUser}
                messageListConfiguration={messageListConfiguration}
            />
        </div>
    );
};

export { CustomMessageTemplate };
```

</TabItem>
</Tabs>

#### StatusInfoView

The `statusInfoView` method of MessageTemplate allows you to add a status info view to your message bubbles. In the example below, we will add a custom status info view to every text message in the MessageList.

![](../../assets/message_template_status_info_view_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='CustomMessageTemplate.tsx'
import React from "react";
import { CometChatMessages, CometChatUIKit, CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration, TextBubbleStyle } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);
    const [chatUser, setChatUser] = React.useState<CometChat.User>();

    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })

        let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
        const template = definedTemplates.map((templates) => {
            if (templates.type === "text" && templates.category === CometChatUIKitConstants.MessageCategory.message) {
                templates.statusInfoView = (message: CometChat.BaseMessage) => getStatusInfo(message)
                return templates;
            }
            return templates
        })
        setTemplates(template);
    }, []);

    const getStatusInfo = (message: CometChat.BaseMessage) => {
        if (message instanceof CometChat.TextMessage) {
            const timestamp = message.getDeliveredAt();
            const date = new Date(timestamp * 1000);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const period = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
            const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
            console.log(formattedTime);


            return (
                <div
                    style={{
                        font: '10px Arial, sans-serif',
                        color: '#cccccc',
                        textAlign: 'left',
                        padding: '10px'
                    }}>
                    {formattedTime}
                </div>
            );
        } else {
            // Handle other message types
            return null;
        }
    };
    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
    });

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <CometChatMessages
                user={chatUser}
                messageListConfiguration={messageListConfiguration}
            />
        </div>
    )
}

export { CustomMessageTemplate };
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='CustomMessageTemplate.jsx'
import React, { useState, useEffect } from "react";
import { CometChatMessages, CometChatUIKit, CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = useState([]);
    const [chatUser, setChatUser] = useState();

    useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })

        let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
        const template = definedTemplates.map((templates) => {
            if (templates.type === "text" && templates.category === CometChatUIKitConstants.MessageCategory.message) {
                templates.statusInfoView = (message) => getStatusInfo(message)
                return templates;
            }
            return templates
        })
        setTemplates(template);
    }, []);

    const getStatusInfo = (message) => {
        if (message instanceof CometChat.TextMessage) {
            const timestamp = message.getDeliveredAt();
            const date = new Date(timestamp * 1000);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const period = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
            const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

            return (
                <div
                    style={{
                        font: '10px Arial, sans-serif',
                        color: '#cccccc',
                        textAlign: 'left',
                        padding: '10px'
                    }}>
                    {formattedTime}
                </div>
            );
        } else {
            // Handle other message types
            return null;
        }
    };
    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
    });

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <CometChatMessages
                user={chatUser}
                messageListConfiguration={messageListConfiguration}
            />
        </div>
    )
}

export { CustomMessageTemplate };
```

</TabItem>
</Tabs>

#### Options

The `options` method in the MessageTemplate allows you to customize the options that appear in the action sheet when a message is long-pressed. By default, CometChat UI Kit provides a set of options like "Thread Reply", "Copy" ,"Edit", and "Delete".

However, if you wish to override or modify these options, you can use the `options` method and pass a list of `CometChatActionsIcon`. This list of options will replace the default set.

![](../../assets/message_template_options_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='CustomMessageTemplate.tsx'
import React from "react";
import { CometChatMessages, CometChatUIKit, CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration, CometChatTheme, CometChatActionsIcon } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";
import nudgeIcon from "./nudge.svg";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);
  const [chatUser, setChatUser] = React.useState<CometChat.User>()
  React.useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    })

    let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((templates) => {
      if (templates.type === "text" && templates.category === CometChatUIKitConstants.MessageCategory.message) {
        templates.options = (loggedInUser: CometChat.User,
          message: CometChat.BaseMessage,
          theme: CometChatTheme,
          group?: CometChat.Group) => getCustomOptions(loggedInUser, message, theme, group)
        return templates;
      }
      return templates
    })
    setTemplates(template);
  }, []);

  const getCustomOptions = (
    loggedInUser: CometChat.User,
    message: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group
  ) => {
    const defaultOptions: any =
      CometChatUIKit.getDataSource().getMessageOptions(
        loggedInUser,
        message,
        theme,
        group
      );
    const myView: any = new CometChatActionsIcon({
      id: "1",
      title: "refresh",
      iconURL: nudgeIcon,
      iconTint: "#b18cfa",
      onClick: () => console.log("custom on click"),
    });
    defaultOptions.push(myView);
    return defaultOptions;
  };
  const messageListConfiguration = new MessageListConfiguration({
    templates: templates,
  });
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <CometChatMessages
        user={chatUser}
        messageListConfiguration={messageListConfiguration}
      />
    </div>
  )
}

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='CustomMessageTemplate.jsx'
import React, { useState, useEffect } from "react";
import {
  CometChatMessages,
  CometChatUIKitConstants,
  MessageListConfiguration,
  CometChatActionsIcon,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import nudgeIcon from "./nudge.svg";

const CustomMessageTemplate = () => {
  const [templates, setTemplates] = useState([]);
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });

    let definedTemplates = CometChat.getDataSource().getAllMessageTemplates();
    const template = definedTemplates.map((template) => {
      if (
        template.type === "text" &&
        template.category === CometChatUIKitConstants.MessageCategory.message
      ) {
        template.options = (loggedInUser, message, theme, group) =>
          getCustomOptions(loggedInUser, message, theme, group);
        return template;
      }
      return template;
    });
    setTemplates(template);
  }, []);

  const getCustomOptions = (loggedInUser, message, theme, group) => {
    const defaultOptions = CometChat.getDataSource().getMessageOptions(
      loggedInUser,
      message,
      theme,
      group
    );
    const myView = new CometChatActionsIcon({
      id: "1",
      title: "refresh",
      iconURL: nudgeIcon,
      iconTint: "#b18cfa",
      onClick: () => console.log("custom on click"),
    });
    defaultOptions.push(myView);
    return defaultOptions;
  };

  const messageListConfiguration = new MessageListConfiguration({
    templates: templates,
  });

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <CometChatMessages
        user={chatUser}
        messageListConfiguration={messageListConfiguration}
      />
    </div>
  );
};

export { CustomMessageTemplate };
```

</TabItem>
</Tabs>

### New Templates

You can create an entirely new template for custom messages is one of the powerful features of CometChat's MessageTemplate.

![](../../assets/message_template_new_template_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='CustomMessageTemplate.tsx'
import React from "react";
import { CometChatMessages, CometChatUIKit,IconStyle , CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration, MessageComposerConfiguration, CometChatUIKitUtility} from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";
import rocketIcon from "./rocket.gif";
import nudgeIcon from "./nudgeIcon.svg";


const CustomMessageTemplate = () => {
    const [templates, setTemplates] = React.useState<CometChatMessageTemplate[]>([]);
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, [])

    const CUSTOM_MESSAGE_TYPE = "nudge";

    React.useEffect(() => {
        let definedTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates();
        let customMessageTemplate = new CometChatMessageTemplate({
            type: CUSTOM_MESSAGE_TYPE,
            category: CometChatUIKitConstants.MessageCategory.custom,
            contentView: (message: CometChat.BaseMessage) => getContentView(message)
        });
        definedTemplates.push(customMessageTemplate);
        setTemplates(definedTemplates);

    }, []);



    const getContentView = (message: CometChat.BaseMessage) => {
        return (
            <div style={{width: "100px", height: "100px", display: "flex"}}>
                <img src={rocketIcon} alt="gif" />
            </div>
        )
    }

    const getAuxiliaryView = () => {

        const iconStyle = new IconStyle({ iconTint:"#9415e8", width: "35px", height: "35px" });
        return (
            <cometchat-icon URL={nudgeIcon} iconStyle={JSON.stringify(iconStyle)} onClick={sendMessage}></cometchat-icon>
        )
    }

    const sendMessage = () => {

        let { receiverID, receiverType } = getReceiverDetails();
        let customData = {nudge: CUSTOM_MESSAGE_TYPE};

        const customMessage = new CometChat.CustomMessage(receiverID, receiverType, CUSTOM_MESSAGE_TYPE, customData);
        customMessage.setSentAt(CometChatUIKitUtility.getUnixTimestamp());
        customMessage.setMuid(CometChatUIKitUtility.ID());
        CometChatUIKit.sendCustomMessage(customMessage);
    }

    const getReceiverDetails = () => {

        if (chatUser?.getUid()) {
            return { receiverID: chatUser?.getUid(), receiverType: CometChatUIKitConstants.MessageReceiverType.user };

        }
        return {receiverID: "", receiverType: ""};
    }

    const getMessageRequestBuilder = () => {

        let categories = CometChatUIKit.getDataSource().getAllMessageCategories();
        categories.push(CometChatUIKitConstants.MessageCategory.custom);

        let types = CometChatUIKit.getDataSource().getAllMessageTypes();
        types.push(CUSTOM_MESSAGE_TYPE);

        return new CometChat.MessagesRequestBuilder().setCategories(categories).setTypes(types).hideReplies(true).setLimit(30);
    }

    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
        messagesRequestBuilder: getMessageRequestBuilder()
    });

    const messageComposerConfiguration = new MessageComposerConfiguration({
        auxilaryButtonView: getAuxiliaryView
    });

    return (
        <div style={{height:"100%", width:"100%"}}>
        <CometChatMessages
            user={chatUser}
            messageListConfiguration={messageListConfiguration}
            messageComposerConfiguration={messageComposerConfiguration}
        />
        </div>
    )
}

export { CustomMessageTemplate };
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='CustomMessageTemplate.jsx'
import React, { useState, useEffect } from "react";
import { CometChatMessages, CometChatUIKitConstants, CometChatMessageTemplate, MessageListConfiguration, MessageComposerConfiguration, CometChatUIKitUtility } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";
import rocketIcon from "./rocket.gif";
import nudgeIcon from "./nudgeIcon.svg";

const CustomMessageTemplate = () => {
    const [templates, setTemplates] = useState([]);
    const [chatUser, setChatUser] = useState(null);

    useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        });
    }, []);

    const CUSTOM_MESSAGE_TYPE = "nudge";

    useEffect(() => {
        let definedTemplates = CometChat.getDataSource().getAllMessageTemplates();
        let customMessageTemplate = new CometChatMessageTemplate({
            type: CUSTOM_MESSAGE_TYPE,
            category: CometChatUIKitConstants.MessageCategory.custom,
            contentView: (message) => getContentView(message)
        });
        definedTemplates.push(customMessageTemplate);
        setTemplates(definedTemplates);
    }, []);

    const getContentView = (message) => {
        return (
            <div style={{ width: "100px", height: "100px", display: "flex" }}>
                <img src={rocketIcon} alt="gif" />
            </div>
        );
    };

    const getAuxiliaryView = () => {
        const sendMessage = () => {
            let { receiverID, receiverType } = getReceiverDetails();
            let customData = { nudge: CUSTOM_MESSAGE_TYPE };
            const customMessage = new CometChat.CustomMessage(receiverID, receiverType, CUSTOM_MESSAGE_TYPE, customData);
            customMessage.setSentAt(CometChatUIKitUtility.getUnixTimestamp());
            customMessage.setMuid(CometChatUIKitUtility.ID());
            CometChat.sendCustomMessage(customMessage);
        };

        return (
            <cometchat-icon URL={nudgeIcon} iconStyle={{ iconTint: "#9415e8", width: "35px", height: "35px" }} onClick={sendMessage} />
        );
    };

    const getReceiverDetails = () => {
        if (chatUser?.getUid()) {
            return { receiverID: chatUser?.getUid(), receiverType: CometChatUIKitConstants.MessageReceiverType.user };
        }
        return { receiverID: "", receiverType: "" };
    };

    const getMessageRequestBuilder = () => {
        let categories = CometChat.getDataSource().getAllMessageCategories();
        categories.push(CometChatUIKitConstants.MessageCategory.custom);

        let types = CometChat.getDataSource().getAllMessageTypes();
        types.push(CUSTOM_MESSAGE_TYPE);

        return new CometChat.MessagesRequestBuilder().setCategories(categories).setTypes(types).hideReplies(true).setLimit(30);
    };

    const messageListConfiguration = new MessageListConfiguration({
        templates: templates,
        messagesRequestBuilder: getMessageRequestBuilder()
    });

    const messageComposerConfiguration = new MessageComposerConfiguration({
        auxilaryButtonView: getAuxiliaryView
    });

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <CometChatMessages
                user={chatUser}
                messageListConfiguration={messageListConfiguration}
                messageComposerConfiguration={messageComposerConfiguration}
            />
        </div>
    );
};

export { CustomMessageTemplate };

```

</TabItem>
</Tabs>
