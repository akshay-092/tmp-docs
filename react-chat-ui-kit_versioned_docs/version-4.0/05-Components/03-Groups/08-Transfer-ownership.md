---
sidebar_position: 8
title: Transfer Ownership
slug: /group-transfer-ownership
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

`CometChatTransferOwnership` is a [Component](./components-overview#components) that allows the current owner or administrator of a group to transfer the ownership rights and administrative control of that group to another user. By transferring ownership, the original owner can designate a new user as the group owner, giving them full control and administrative privileges over the group.

Here are some key points regarding the transfer ownership feature in CometChat:

1. Administrative Control: The current owner or administrator of the group has the authority to initiate the transfer of ownership. This feature is typically available to ensure flexibility and allow smooth transitions of group ownership.
2. New Group Owner: During the transfer process, the current owner can select a specific user from the group members to become the new owner. This new owner will then assume the responsibilities and privileges associated with being the group owner.
3. Administrative Privileges: As the new owner, the designated user will gain full administrative control over the group. They will have the ability to manage group settings, add or remove members, moderate conversations, and perform other administrative actions.
4. Group Continuity: Transferring ownership does not disrupt the existing group or its content. The transfer ensures the continuity of the group while transferring the administrative control to a new owner.

![](../../assets/transfer_ownership_overview_web_screens.png)

The Transfer Ownership component is composed of the following BaseComponents:

| Components                               | Description                                                                      |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| cometchat-button                         | This component represents a button with optional icon and text.                  |
| [cometchat-label](./label)               | This component provides descriptive information about the associated UI element. |
| [cometchat-radio-button](./radio-button) | This component allows the user to exactly select one item from a set             |

---

## Usage

### Integration

The following code snippet illustrates how you can directly incorporate the Transfer Ownership component into your Application.

<Tabs>
<TabItem value="TransferOwnerShipDemo" label="TransferOwnerShipDemo.tsx">

```javascript

import { CometChat } from '@cometchat/chat-sdk-javascript';
import { CometChatTransferOwnership } from '@cometchat/chat-uikit-react'
import React from 'react'

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group | undefined>();

  React.useEffect(() => {
    CometChat.getGroup("guid").then((group) => {
      setChatGroup(group);
    })
  }, []);



  return (
    <>
      {
        chatGroup &&
        <CometChatTransferOwnership
          group={chatGroup}

        />
      }
    </>
  )
}

export default TransferOwnerShipDemo;

```

</TabItem>
<TabItem value="ts" label="App.tsx">

```javascript
import { TransferOwnerShipDemo } from "./TransferOwnerShipDemo";

export default function App() {
  return (
    <div className="App">
      <TransferOwnerShipDemo />
    </div>
  );
}
```

</TabItem>
</Tabs>

---

### Actions

[Actions](./components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onTransferOwnership

The `onTransferOwnership` action is activated when you select a group member and click on the transfer ownership submit button. you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("GUID").then((group) => {
      setChatGroup(group);
    });
  }, []);

  function handleOnTransferOwnerShip(groupMember: CometChat.GroupMember): void {
    console.log(groupMember);
    //your custom handle on transfer-ownership actions
  }

  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          onTransferOwnership={handleOnTransferOwnerShip}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("GUID").then((group) => {
      setChatGroup(group);
    });
  }, []);

  function handleOnTransferOwnerShip(groupMember) {
    console.log(groupMember);
    //your custom handle on transfer-ownership actions
  }

  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          onTransferOwnership={handleOnTransferOwnerShip}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

##### 2. onClose

`onClose` is triggered when you click on the close button of the Transfer Ownership component. You can override this action using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("GUID").then((group) => {
      setChatGroup(group);
    });
  }, []);

  function handleOnClose(): void {
    //Your Custom On Close Actions
  }

  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership group={chatGroup} onClose={handleOnClose} />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("GUID").then((group) => {
      setChatGroup(group);
    });
  }, []);

  function handleOnClose() {
    //Your Custom On Close Actions
  }

  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership group={chatGroup} onClose={handleOnClose} />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

##### 3. onError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the Transfer Ownership component.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("GUID").then((group) => {
      setChatGroup(group);
    });
  }, []);

  function handleOnError(error: CometChat.CometChatException): void {
    //your custom on error actions
  }

  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership group={chatGroup} onError={handleOnError} />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("GUID").then((group) => {
      setChatGroup(group);
    });
  }, []);

  function handleOnError(error) {
    //Your Custom on error actions
  }

  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership group={chatGroup} onError={handleOnError} />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

##### 1. GroupMembersRequestBuilder

The [GroupMembersRequestBuilder](/sdk/javascript/retrieve-group-members) enables you to filter and customize the group members list based on available parameters in GroupMembersRequestBuilder. This feature allows you to create more specific and targeted queries when fetching groups. The following are the parameters available in [GroupMembersRequestBuilder](/sdk/javascript/retrieve-group-members)

| Methods              | Type                | Description                                                                                       |
| -------------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| **setLimit**         | number              | sets the number of group members that can be fetched in a single request, suitable for pagination |
| **setSearchKeyword** | String              | used for fetching group members matching the passed string                                        |
| **setScopes**        | Array&lt;String&gt; | used for fetching group members based on multiple scopes                                          |

**Example**

In the example below, we are applying a filter to the Group Members by setting the limit to 3 and setting the scope to show only admin.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          groupMemberRequestBuilder={new CometChat.GroupMembersRequestBuilder(
            "guid"
          )
            .setLimit(3)
            .setScopes(["admin"])}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          groupMemberRequestBuilder={new CometChat.GroupMembersRequestBuilder(
            "guid"
          )
            .setLimit(3)
            .setScopes(["admin"])}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

##### 2. SearchRequestBuilder

The SearchRequestBuilder uses [GroupMembersRequestBuilder](/sdk/javascript/retrieve-group-members) enables you to filter and customize the search list based on available parameters in GroupMembersRequestBuilder.
This feature allows you to keep uniformity between the displayed Group Members List and searched Group Members List.

**Example**

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          searchRequestBuilder={new CometChat.GroupMembersRequestBuilder("uid")
            .setLimit(2)
            .setSearchKeyword("**")}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          searchRequestBuilder={new CometChat.GroupMembersRequestBuilder(
            "uid"
          ).setLimit(2)}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

---

### Events

[Events](./components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

Events emitted by the Transfer Ownership component is as follows.

| Event                  | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| **ccOwnershipChanged** | Triggers when the ownership of a group member is changed successfully |

<Tabs>

<TabItem value="js" label="Add Listener">

```javascript
const ccOwnershipChanged = CometChatGroupEvents.ccOwnershipChanged.subscribe(
  (item: IOwnershipChanged) => {
    //Your Code
  }
);
```

</TabItem>

</Tabs>

---

<Tabs>

<TabItem value="js" label="Remove Listener">

```javascript
ccOwnershipChanged?.unsubscribe();
```

</TabItem>

</Tabs>

---

## Customization

To fit your app's design requirements, you can customize the appearance of the Transfer Ownership component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using **Style** you can **customize** the look and feel of the component in your app, These parameters typically control elements such as the **color**, **size**, **shape**, and **fonts** used within the component.

##### 1. TransferOwnership Style

You can set the `TransferOwnershipStyle` to the Transfer Ownership Component to customize the styling.

![](../../assets/transfer_ownership_style_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  TransferOwnershipStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const transferOwnershipStyle = new TransferOwnershipStyle({
    background: "#e9c4ff",
    MemberScopeTextColor: "#ffffff",
    transferButtonTextColor: "#ffffff",
    MemberScopeTextFont: "#ffffff",
    cancelButtonTextColor: "#ffffff",
  });
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          transferOwnershipStyle={transferOwnershipStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  TransferOwnershipStyle,
} from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const transferOwnershipStyle = new TransferOwnershipStyle({
    background: "#e9c4ff",
    MemberScopeTextColor: "#ffffff",
    transferButtonTextColor: "#ffffff",
    MemberScopeTextFont: "#ffffff",
    cancelButtonTextColor: "#ffffff",
  });
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          transferOwnershipStyle={transferOwnershipStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

---

List of properties exposed by TransferOwnershipStyle:

| Property                    | Description                            | Code                                |
| --------------------------- | -------------------------------------- | ----------------------------------- |
| **border**                  | Used to set border                     | `border?: string,`                  |
| **borderRadius**            | Used to set border radius              | `borderRadius?: string;`            |
| **background**              | Used to set background colour          | `background?: string;`              |
| **height**                  | Used to set height                     | `height?: string;`                  |
| **width**                   | Used to set width                      | `width?: string;`                   |
| **MemberScopeTextColor**    | Used to set member scope text color    | `MemberScopeTextColor?: string,`    |
| **MemberScopeTextFont**     | Used to set member scope text font     | `MemberScopeTextFont?: string;`     |
| **transferButtonTextFont**  | Used to set transfer button text font  | `transferButtonTextFont?: string;`  |
| **transferButtonTextColor** | Used to set transfer button text color | `transferButtonTextColor?: string;` |
| **cancelButtonTextFont**    | Used to set cancel button text font    | `cancelButtonTextFont?: string;`    |
| **cancelButtonTextColor**   | Used to set cancel button text color   | `cancelButtonTextColor?: string;`   |

##### 2. Avatar Style

To apply customized styles to the `Avatar` component in the Transfer Ownership Component, you can use the following code snippet. For further insights on `Avatar` Styles [refer](./avatar#avatar-style)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  AvatarStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const avatarStyle = new AvatarStyle({
    backgroundColor: "#cdc2ff",
    border: "2px solid #6745ff",
    borderRadius: "10px",
    outerViewBorderColor: "#ca45ff",
    outerViewBorderRadius: "5px",
    nameTextColor: "#4554ff",
  });
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          avatarStyle={avatarStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  AvatarStyle,
} from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const avatarStyle = new AvatarStyle({
    backgroundColor: "#cdc2ff",
    border: "2px solid #6745ff",
    borderRadius: "10px",
    outerViewBorderColor: "#ca45ff",
    outerViewBorderRadius: "5px",
    nameTextColor: "#4554ff",
  });
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          avatarStyle={avatarStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

##### 3. GroupMembers Style

You can set the `GroupMembersStyle` to the Transfer Ownership Component to customize the styling, you can use the following code snippet. For further insights on `GroupMembers` Styles [refer](./group-members#1-groupmembers-style)

![](../../assets/transfer_ownership_group_member_style_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  GroupMembersStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const groupMembersStyle = new GroupMembersStyle({
    background: "#b17efc",
    searchPlaceholderTextColor: "#ffffff",
    titleTextColor: "#000000",
    searchBackground: "#5718b5",
  });
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          groupMembersStyle={groupMembersStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  GroupMembersStyle,
} from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const groupMembersStyle = new GroupMembersStyle({
    background: "#b17efc",
    searchPlaceholderTextColor: "#ffffff",
    titleTextColor: "#000000",
    searchBackground: "#5718b5",
  });
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          groupMembersStyle={groupMembersStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

##### 4. ListItem Style

To apply customized styles to the `ListItemStyle` component in the `Transfer Ownership` Component, you can use the following code snippet. For further insights on `ListItemStyle` Styles [refer](./list-item)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  ListItemStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const listItemStyle = new ListItemStyle({
    width: "100%",
    height: "100%",
    border: "2px solid red",
  });
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          listItemStyle={listItemStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  ListItemStyle,
} from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const listItemStyle = new ListItemStyle({
    width: "100%",
    height: "100%",
    border: "2px solid red",
  });
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          listItemStyle={listItemStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

##### 5. StatusIndicator Style

To apply customized styles to the Status Indicator component in the Transfer Ownership Component, You can use the following code snippet. For further insights on Status Indicator Styles [refer](./status-indicator)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const statusIndicatorStyle = {
    background: "#db35de",
    height: "10px",
    width: "10px",
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          statusIndicatorStyle={statusIndicatorStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const statusIndicatorStyle = {
    background: "#db35de",
    height: "10px",
    width: "10px",
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          statusIndicatorStyle={statusIndicatorStyle}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<CometChat.Group>();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          title="Your Custom Title"
          cancelButtonText="Your Custom Cancel Button Text"
          hideSeparator={true}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React, { useEffect, useState } from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          title="Your Custom Title"
          cancelButtonText="Your Custom Cancel Button Text"
          hideSeparator={true}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

Default:
![](../../assets/transfer_ownership_functionality_default_web_screens.png)

Custom:
![](../../assets/transfer_ownership_functionality_custom_web_screens.png)

Below is a list of customizations along with corresponding code snippets

| Property                                                                                                              | Description                                                                                     | Code                                                    |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **title** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>              | Used to set title in the app heading                                                            | `title="Your Custom Title"`                             |
| **cancelButtonText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>   | Used to set the cancel button text                                                              | `cancelButtonText="Your Custom cancel button text"`     |
| **transferButtonText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set the transfer button text                                                            | `transferButtonText="Your Custom transfer button text"` |
| **errorStateText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>     | Used to set a custom text response when some error occurs on fetching the list of group members | `errorStateText="your custom error state text"`         |
| **emptyStateText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>     | Used to set a custom text response when fetching the group members has returned an empty list   | `emptyStateText="your custom empty state text"`         |
| **searchPlaceholder** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>  | Used to set custom search placeholder text                                                      | `searchPlaceholder='Custom Search PlaceHolder'`         |
| **searchIconURL**                                                                                                     | Used to set search Icon in the search field                                                     | `searchIconURL="Your Custom search icon"`               |
| **loadingIconURL**                                                                                                    | Used to set loading Icon                                                                        | `loadingIconURL="your custom loading icon url"`         |
| **closeButtonIconURL**                                                                                                | Used to set close button Icon                                                                   | `closeButtonIconURL="your custom close icon url"`       |
| **hideSearch**                                                                                                        | Used to toggle visibility for search box                                                        | `hideSearch={true}"`                                    |
| **hideSeparator**                                                                                                     | Used to hide the divider separating the user items                                              | `hideSeparator={true}`                                  |
| **disableUsersPresence**                                                                                              | Used to toggle functionality to show user's presence                                            | `disableUsersPresence={true}`                           |
| **titleAlignment**                                                                                                    | Alignment of the heading text for the component                                                 | `titleAlignment={TitleAlignment.center}`                |
| **group** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>              | Used to pass group object of which group members will be shown                                  | `group={chatGroup}`                                     |

---

### Advance

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

---

#### ListItemView

With this property, you can assign a custom ListItem to the Transfer Ownership Component.

```jsx
listItemView = { getListItemView };
```

**Example**

Default:
![](../../assets/transfer_ownership_listitemview_default_web_screens.png)

Custom:
![](../../assets/transfer_ownership_listitemview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getListItemView = (groupMembers: CometChat.GroupMember) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          border: "2px solid #e9baff",
          borderRadius: "20px",
          background: "#6e2bd9",
        }}
      >
        <cometchat-avatar
          image={groupMembers.getAvatar()}
          name={groupMembers.getName()}
        />

        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <div
            style={{ fontWeight: "bold", color: "#ffffff", fontSize: "14px" }}
          >
            {groupMembers.getName()}
            <div
              style={{ color: "#ffffff", fontSize: "10px", textAlign: "left" }}
            >
              {groupMembers.getStatus()}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          listItemView={getListItemView}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getListItemView = (groupMembers) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          border: "2px solid #e9baff",
          borderRadius: "20px",
          background: "#6e2bd9",
        }}
      >
        <cometchat-avatar
          image={groupMembers.getAvatar()}
          name={groupMembers.getName()}
        />

        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <div
            style={{ fontWeight: "bold", color: "#ffffff", fontSize: "14px" }}
          >
            {groupMembers.getName()}
            <div
              style={{ color: "#ffffff", fontSize: "10px", textAlign: "left" }}
            >
              {groupMembers.getStatus()}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          listItemView={getListItemView}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

---

#### SubtitleView

You can customize the subtitle view for each Transfer Ownership to meet your requirements

```jsx
subtitleView = { getSubtitleView };
```

Default:
![](../../assets/transfer_ownership_subtitleview_default_web_screens.png)

Custom:
![](../../assets/transfer_ownership_subtitleview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getSubtitleView = (
    groupMembers: CometChat.GroupMember
  ): JSX.Element => {
    function formatTime(timestamp: number) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    }
    if (groupMembers instanceof CometChat.GroupMember) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "left",
            padding: "2px",
            fontSize: "10px",
          }}
        >
          <div style={{ color: "gray" }}>
            Last Active At: {formatTime(groupMembers.getLastActiveAt())}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          subtitleView={getSubtitleView}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getSubtitleView = (groupMembers) => {
    function formatTime(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    }
    if (groupMembers instanceof CometChat.GroupMember) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "left",
            padding: "2px",
            fontSize: "10px",
          }}
        >
          <div style={{ color: "gray" }}>
            Last Active At: {formatTime(groupMembers.getLastActiveAt())}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          subtitleView={getSubtitleView}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

#### LoadingStateView

You can set a custom loader view using `loadingStateView` to match the loading view of your app.

```jsx
loadingStateView={getLoadingStateView()}
```

Default:
![](../../assets/transfer_ownership_loadingview_default_web_screens.png)

Custom:
![](../../assets/transfer_ownership_loadingview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  LoaderStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getLoadingStateView = () => {
    const getLoaderStyle = new LoaderStyle({
      iconTint: "#890aff",
      background: "transparent",
      height: "100vh",
      width: "100vw",
    });

    return (
      <cometchat-loader
        iconURL="icon"
        loaderStyle={JSON.stringify(getLoaderStyle)}
      ></cometchat-loader>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          loadingStateView={getLoadingStateView()}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatTransferOwnership,
  LoaderStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getLoadingStateView = () => {
    const getLoaderStyle = new LoaderStyle({
      iconTint: "#890aff",
      background: "transparent",
      height: "100vh",
      width: "100vw",
    });

    return (
      <cometchat-loader
        iconURL="icon"
        loaderStyle={JSON.stringify(getLoaderStyle)}
      ></cometchat-loader>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          loadingStateView={getLoadingStateView()}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

#### EmptyStateView

You can set a custom `EmptyStateView` using `emptyStateView` to match the empty view of your app.

```jsx
emptyStateView={getEmptyStateView()}
```

Default:
![](../../assets/transfer_ownership_empty_stateview_default_web_screens.png)

Custom:
![](../../assets/transfer_ownership_empty_stateview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getEmptyStateView = () => {
    return (
      <div style={{ color: "#d6cfff", fontSize: "30px", font: "bold" }}>
        Your Custom Empty State
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          emptyStateView={getEmptyStateView()}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getEmptyStateView = () => {
    return (
      <div style={{ color: "#d6cfff", fontSize: "30px", font: "bold" }}>
        Your Custom Empty State
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          emptyStateView={getEmptyStateView()}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

---

#### ErrorStateView

You can set a custom `ErrorStateView` using `errorStateView` to match the error view of your app.

```jsx
errorSateView={getErrorStateView()}
```

Default:
![](../../assets/transfer_ownership_error_stateview_default_web_screens.png)

Custom:
![](../../assets/transfer_ownership_error_stateview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='TransferOwnerShipDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getErrorStateView = () => {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <img
          src="image"
          alt="error icon"
          style={{
            height: "100px",
            width: "100px",
            marginTop: "250px",
            justifyContent: "center",
          }}
        ></img>
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          errorStateView={getErrorStateView()}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='TransferOwnerShipDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatTransferOwnership } from "@cometchat/chat-uikit-react";
import React from "react";

const TransferOwnerShipDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getErrorStateView = () => {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <img
          src="image"
          alt="error icon"
          style={{
            height: "100px",
            width: "100px",
            marginTop: "250px",
            justifyContent: "center",
          }}
        ></img>
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatTransferOwnership
          group={chatGroup}
          errorStateView={getErrorStateView()}
        />
      )}
    </>
  );
};

export default TransferOwnerShipDemo;
```

</TabItem>
</Tabs>

---

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in TransferOwnershipConfiguration"
/>
