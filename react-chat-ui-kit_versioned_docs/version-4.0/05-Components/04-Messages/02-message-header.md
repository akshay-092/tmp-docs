---
sidebar_position: 2
title: Message Header
slug: /message-header
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

`MessageHeader` is a [Component](./components-overview#components) that showcases the [User](/sdk/javascript/users-overview) or [Group](/sdk/javascript/groups-overview) details in the toolbar. Furthermore, it also presents a typing indicator and a back navigation button for ease of use.

![](../../assets/messages_header_overview_web_screens.png)

The `MessageHeader` is comprised of the following components:

| Components                        | Description                                                                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [ListItem Component](./list-item) | This component’s view consists of avatar, status indicator , title, and subtitle. The fields are then mapped with the SDK’s user, group class. |
| Back Button                       | BackButton that allows users to navigate back from the current activity or screen to the previous one                                          |

## Usage

### Integration

<Tabs>
<TabItem value="MessageHeaderDemo" label="MessageHeaderDemo.tsx">

```js
import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, [])

    return chatUser ? (
      <div>
        {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
        />
        }
      </div>
    ) : null;
  }
```

</TabItem>

<TabItem value="ts" label="App.tsx">

```jsx
import { MessageHeaderDemo } from "./MessageHeaderDemo";

export default function App() {
  return (
    <div className="App">
      <div>
        <MessageHeaderDemo />
      </div>
    </div>
  );
}
```

</TabItem>
</Tabs>

### Actions

[Actions](./components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. OnBack

`OnBack` is triggered when you click on the back button of the Message Header component. You can override this action using the following code snippet.

```
onBack={handleOnBack}
```

**Example**

In this example, we are employing the `onBack` action.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='MessageHeaderDemo.tsx'

import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);

    function handleOnBack() {
          console.log("your custom on back action");
    }
    return chatUser ? (
      <div>
        {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          onBack={handleOnBack}
        />
        }
      </div>
    ) : null;
  }
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'

import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  function handleOnBack() {
    console.log("your custom on back action");
  }

  return chatUser ? (
    <div>
      <CometChatMessageHeader user={chatUser} onBack={handleOnBack} />
    </div>
  ) : null;
}

export default MessageHeaderDemo;

```

</TabItem>
</Tabs>

---

##### 2. OnError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the Message Header component.

```
onError={handleError}
```

**Example**

In this example, we are employing the `onError` action.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='MessageHeaderDemo.tsx'

import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);

     function handleError(error: CometChat.CometChatException) {
          throw new Error("your custom error action");
      }
    return chatUser ? (
    <div>
      {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          onError={handleError}
        />
      }
    </div>
    ) : null;
  }

```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'

import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

export function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  function handleError(error) {
    throw new Error("your custom error action");
  };
    return chatUser ? (
    <div>
      {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          onError={handleError}
        />
      }
    </div>
    ) : null;
  }

```

</TabItem>
</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a `Component`. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using `RequestBuilders` of Chat SDK.

The `MessageHeader` component does not have any exposed filters.

### Events

[Events](./components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The `MessageHeader` component does not produce any events.

## Customization

To fit your app's design requirements, you can customize the appearance of the Message Header component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. MessageHeader Style

To customize the appearance, you can assign a `MessageHeaderStyle` object to the `MessageHeader` component.

**Example**

In this example, we are employing the `MessageHeaderStyle`.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='MessageHeaderDemo.tsx'

import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader, MessageHeaderStyle } from "@cometchat/chat-uikit-react";

  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, [])
    const messageHeaderStyle = new MessageHeaderStyle({
      border: "2px solid #b649d1",
      background: "#ede0ff"
      onlineStatusColor:"#ad09d6"
    });
    const getSubtitleView = (user: any) => {
        return (
          <span style={{ color: "#474347", font: "500 14px Inter, sans-serif" }}>
         {chatUser?.getStatus()}
          </span>
        );
      };
    return chatUser ? (
      <div>
      {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          subtitleView={getSubtitleView(chatUser)}
          messageHeaderStyle={messageHeaderStyle}
        />
      }
      </div>
    ) : null;
  }
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'

import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader, MessageHeaderStyle } from "@cometchat/chat-uikit-react";

export function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const messageHeaderStyle = new MessageHeaderStyle({
    border: "2px solid #b649d1",
    background: "#ede0ff",
    onlineStatusColor: "#ad09d6"
  });

  const getSubtitleView = (user) => {
    return (
      <span style={{ color: "#474347", font: "500 14px Inter, sans-serif" }}>
        {user.getStatus()}
      </span>
    );
  };

  return chatUser ? (
    <div>
      <CometChatMessageHeader
        user={chatUser}
        subtitleView={getSubtitleView(chatUser)}
        messageHeaderStyle={messageHeaderStyle}
      />
    </div>
  ) : null;
}

```

</TabItem>
</Tabs>

The properties exposed by `MessageHeaderStyle` are as follows:

| Property                        | Description                                 | Code                                    |
| ------------------------------- | ------------------------------------------- | --------------------------------------- |
| **border**                      | Used to set border                          | `border?: string,`                      |
| **borderRadius**                | Used to set border radius                   | `borderRadius?: string;`                |
| **background**                  | Used to set background colour               | `background?: string;`                  |
| **height**                      | Used to set height                          | `height?: string;`                      |
| **width**                       | Used to set width                           | `width?: string;`                       |
| **backButtonIconTint**          | Used to set back button icon tint           | `backButtonIconTint?: string;`          |
| **typingIndicatorTextFont**     | Used to set typing indicator textStyle      | `    typingIndicatorTextFont?: string;` |
| **typingIndicatorTextColor**    | Used to set typing indicator text color     | `typingIndicatorTextColor?: string;`    |
| **subtitleTextFont**            | Used to set subtitle text font style        | `subtitleTextFont?: string;`            |
| **subtitleTextColor**           | Used to set subtitle text color             | `subtitleTextColor?: string;`           |
| **onlineStatusColor**           | Used to set online status colour            | `onlineStatusColor?: string;`           |
| **privateGroupIconBackground**  | Used to set private groups icon backgound   | `privateGroupIconBackground?: string`   |
| **passwordGroupIconBackground** | Used to set protected groups icon backgound | `passwordGroupIconBackground?: string`  |

##### 2. Avatar Style

If you want to apply customized styles to the `Avatar` component within the `MessageHeader` Component, you can use the following code snippet. For more information you can refer [Avatar Styles](./avatar#avatar-style).

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='MessageHeaderDemo.tsx'

import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader, AvatarStyle } from "@cometchat/chat-uikit-react";

  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, [])
    const avatarStyle = new AvatarStyle({
        backgroundColor:"#cdc2ff",
        border:"2px solid #6745ff",
        borderRadius:"10px",
        outerViewBorderColor:"#ca45ff",
        outerViewBorderRadius:"5px",
        nameTextColor:"#4554ff"
    });
    return chatUser ? (
      <div>
      {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          avatarStyle={avatarStyle}
        />
      }
      </div>
    ) : null;
  }
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'

import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader, AvatarStyle } from "@cometchat/chat-uikit-react";

export function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const avatarStyle = new AvatarStyle({
    backgroundColor: "#cdc2ff",
    border: "2px solid #6745ff",
    borderRadius: "10px",
    outerViewBorderColor: "#ca45ff",
    outerViewBorderRadius: "5px",
    nameTextColor: "#4554ff"
  });

  return chatUser ? (
    <div>
      <CometChatMessageHeader
        user={chatUser}
        avatarStyle={avatarStyle}
      />
    </div>
  ) : null;
}

```

</TabItem>
</Tabs>

##### 3. ListItem Style

If you want to apply customized styles to the `ListItemStyle` component within the `MessageHeader` Component, you can use the following code snippet. For more information, you can refer [ListItem Styles](./list-item#listitemstyle).

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='MessageHeaderDemo.tsx'

import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader, ListItemStyle } from "@cometchat/chat-uikit-react";

  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);
    const listItemStyle = new ListItemStyle({
      background: "transparent",
      padding:"20px",
      border:"1px solid #e9b8f5",
      titleColor:"#8830f2",
      borderRadius:"20px"
    });
    return chatUser ? (
      <div>
      {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          listItemStyle={listItemStyle}
        />
      }
      </div>
    ) : null;
  }
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'
import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader, ListItemStyle } from "@cometchat/chat-uikit-react";

export function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const listItemStyle = new ListItemStyle({
    background: "transparent",
    padding: "20px",
    border: "1px solid #e9b8f5",
    titleColor: "#8830f2",
    borderRadius: "20px"
  });

  return chatUser ? (
    <div>
      <CometChatMessageHeader
        user={chatUser}
        listItemStyle={listItemStyle}
      />
    </div>
  ) : null;
}

```

</TabItem>
</Tabs>

##### 4. StatusIndicator Style

If you want to apply customized styles to the `Status Indicator` component within the `MessageHeader` Component, you can use the following code snippet. For more information you can refer [StatusIndicator Styles](./status-indicator).

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='MessageHeaderDemo.tsx'

import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader, ListItemStyle } from "@cometchat/chat-uikit-react";
  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);
    const statusIndicatorStyle = {
        background: "#db35de",
        height:"10px",
        width:"10px"
      };
    return chatUser ? (
      <div>
      {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          statusIndicatorStyle={statusIndicatorStyle}
        />
      }
      </div>
    ) : null;
  }
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'

import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

export function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const statusIndicatorStyle = {
    background: "#db35de",
    height: "10px",
    width: "10px"
  };

  return chatUser ? (
    <div>
      <CometChatMessageHeader
        user={chatUser}
        statusIndicatorStyle={statusIndicatorStyle}
      />
    </div>
  ) : null;
}

```

</TabItem>
</Tabs>

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

Here is a code snippet demonstrating how you can customize the functionality of the Message Header component.

<Tabs>

<TabItem value="TypeScript" label="TypeScript">

```TypeScript
<CometChatMessageHeader
  user={chatUser}
  hideBackButton={true}
/>
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```JavaScript
<CometChatMessageHeader
  user={chatUser}
  hideBackButton={true}
/>
```

</TabItem>
</Tabs>

Following is a list of customizations along with their corresponding code snippets:

| Property                                                                                                 | Description                                                              | Code                                                      |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------- |
| **user** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>  | Used to pass user object of which header specific details will be shown  | `user={chatUser}`                                         |
| **group** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to pass group object of which header specific details will be shown | `group={chatGroup}`                                       |
| **passwordGroupIcon**                                                                                    | Used to set custom protected group icon                                  | `passwordGroupIcon="your custom private group icon url"`  |
| **privateGroupIcon**                                                                                     | Used to set custom private group icon                                    | `privateGroupIcon="your custom protected group icon url"` |
| **hideBackButton**                                                                                       | Used to toggle back button visibility                                    | `hideBackButton={true}`                                   |
| **disableTyping**                                                                                        | Used to enable disable typing indicators                                 | `disableTyping={true}`                                    |
| **disableUsersPresence**                                                                                 | Used to toggle functionality to show user's presence                     | `disableUsersPresence={true}`                             |

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

#### ListItemView

The `MessageHeader` component consists of a `listItemView`. You can customize the ListItem according to your requirements by using the `listItemView` property.

```jsx
listItemView = { CustomListItemView };
```

**Example**

![](../../assets/messages_header_list_item_view_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='MessageHeaderDemo.tsx'

import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader, ListItemStyle, AvatarStyle, CometChatListItem } from "@cometchat/chat-uikit-react";
import { createComponent } from "@lit-labs/react";

  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);
    const CometChatListItems = createComponent({
      tagName: "cometchat-list-item",
      elementClass: CometChatListItem,
      react: React,
    });
    const avatarStyle = new AvatarStyle({
        backgroundColor:"#cdc2ff",
        border:"2px solid #6745ff",
        borderRadius:"10px",
        outerViewBorderColor:"#ca45ff",
        outerViewBorderRadius:"5px",
        nameTextColor:"#4554ff"
    });
    const listItemStyle = new ListItemStyle({
      background: "transparent",
      padding:"5px",
      border:"1px solid #e9b8f5",
      titleColor:"#8830f2",
      borderRadius:"20px",
      width:"100% !important"
    });
    const CustomListItemView = React.useMemo(() => {
            return (
              <>
                <CometChatListItems
                  style={{width:"100%"}}
                  avatarURL="your custom avatar url"
                  title={chatUser?.getName()}
                  hideSeparator={true}
                  avatarStyle={avatarStyle}
                  listItemStyle={listItemStyle}
                />
              </>
            )
    }, []);
  return chatUser ? (
    <div>
      {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          listItemView={CustomListItemView}
        />
      }
    </div>
    ) : null;
  }
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'

import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader, ListItemStyle, AvatarStyle, CometChatListItem } from "@cometchat/chat-uikit-react";
import { createComponent } from "@lit-labs/react";

export function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const CometChatListItems = createComponent({
    tagName: "cometchat-list-item",
    elementClass: CometChatListItem,
    react: React,
  });

  const avatarStyle = new AvatarStyle({
    backgroundColor: "#cdc2ff",
    border: "2px solid #6745ff",
    borderRadius: "10px",
    outerViewBorderColor: "#ca45ff",
    outerViewBorderRadius: "5px",
    nameTextColor: "#4554ff"
  });

  const listItemStyle = new ListItemStyle({
    background: "transparent",
    padding: "5px",
    border: "1px solid #e9b8f5",
    titleColor: "#8830f2",
    borderRadius: "20px",
    width: "100% !important"
  });

  const CustomListItemView = React.useMemo(() => {
    return (
      <>
        <CometChatListItems
          style={{ width: "100%" }}
          avatarURL="your custom avatar url"
          title={chatUser?.getName()}
          hideSeparator={true}
          avatarStyle={avatarStyle}
          listItemStyle={listItemStyle}
        />
      </>
    )
  }, [chatUser]);

  return chatUser ? (
    <div>
      <CometChatMessageHeader
        user={chatUser}
        listItemView={CustomListItemView}
      />
    </div>
  ) : null;
}

```

</TabItem>
</Tabs>

---

#### SubtitleView

By using the `subtitleView` property, you can modify the SubtitleView to meet your specific needs.

```javascript
subtitleView={CustomSubtitleView()}
```

**Example**
![](../../assets/messages_header_subtitle_view_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='MessageHeaderDemo.tsx'

import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);
   const CustomSubtitleView =() => {
        return(
            <div style={{color:"#db35de", fontSize:"15px"}}>{chatUser?.getStatus()}</div>
        )
    }
    return chatUser ? (
      <div>
        {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          subtitleView={CustomSubtitleView()}
        />
        }
      </div>
    ) : null;
  }
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'

import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

export function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const CustomSubtitleView = () => {
    return (
      <div style={{ color: "#db35de", fontSize: "15px" }}>
        {chatUser?.getStatus()}
      </div>
    );
  };

  return chatUser ? (
    <div>
      <CometChatMessageHeader
        user={chatUser}
        subtitleView={CustomSubtitleView}
      />
    </div>
  ) : null;
}

```

</TabItem>
</Tabs>

---

#### BackButtonIconURL

You can customize the Back Icon according to your specific requirements by using the `backButtonIconURL` property.

```javascript
backButtonIconURL = "your custom back button icon url";
```

**Example**
![](../../assets/messages_header_back_icon_url_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```TypeScript title='MessageHeaderDemo.tsx'

import React from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";


  export function MessageHeaderDemo() {
    const [chatUser, setChatUser] = React.useState<CometChat.User>()
    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);
    return chatUser ? (
      <div>
        {chatUser &&
        <CometChatMessageHeader
          user={chatUser}
          backButtonIconURL='your custom icon url'
        />
        }
      </div>
    ) : null;
  }

```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'

import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

export function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  return chatUser ? (
    <div>
      <CometChatMessageHeader
        user={chatUser}
        backButtonIconURL='your custom icon url'
      />
    </div>
  ) : null;
}

```

</TabItem>
</Tabs>

---

#### Menu

You can customize the Menu options to meet your specific needs by using the `menu` property.

```
menu={getMenu()}
```

**Example**
![](../../assets/messages_header_menu_web_screens.png)

<Tabs>
<TabItem value="JavaScript" label="JavaScript">

```JavaScript title='MessageHeaderDemo.jsx'

import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatMessageHeader } from "@cometchat/chat-uikit-react";

export function MessageHeaderDemo() {
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const getMenu = () => {
    const handleReload = () => {
      window.location.reload();
    };
    const getButtonStyle = () => {
      return {
        height: "20px",
        width: "20px",
        border: "none",
        borderRadius: "0",
        background: "transparent",
        buttonIconTint: "#7E57C2"
      };
    };
    return (
      <div style={{ marginRight: "20px" }}>
        <cometchat-button
          iconURL="custom icon url"
          buttonStyle={JSON.stringify(getButtonStyle())}
          onClick={handleReload}
        >
          {" "}
        </cometchat-button>
      </div>
    );
  };

  return chatUser ? (
    <div>
      <CometChatMessageHeader
        user={chatUser}
        menu={getMenu()}
      />
    </div>
  ) : null;
}

```

</TabItem>
</Tabs>

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in MessageHeaderConfiguration"
/>
