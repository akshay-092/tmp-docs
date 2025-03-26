---
sidebar_position: 6
title: Add Members
slug: /group-add-members
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

`CometChatAddMembers` is a [Component](./components-overview#components) that allows administrators or group owners to add new members to a specific group. It enables administrators or group owners to extend the membership of a group by adding new users to participate in the group's discussions and activities. By utilising this feature, administrators can manage group membership, and control access to group content.
The administrator can select the desired users to be added to the group. This can be done by searching for specific users, selecting from a list of available users. The selected users will receive notifications to join the group.

![](../../assets/add_members_overview_web_screens.png)

The Add Members component is composed of the following Components:

| Components                | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| cometchat-button          | This component represents a button with optional icon and text. |
| [CometChatUsers](./users) | This component the list of users                                |

---

## Usage

### Integration

The following code snippet illustrates how you can directly incorporate the Add Members component into your Application.

<Tabs>
<TabItem value="AddMembersDemo" label="AddMembersDemo.tsx">

```javascript

import { CometChat } from '@cometchat/chat-sdk-javascript';
import { CometChatAddMembers } from '@cometchat/chat-uikit-react'
import React from 'react'

const AddMembersDemo = () => {

    const [chatGroup, setChatGroup] = React.useState<CometChat.Group | undefined>();

    React.useEffect(() => {
        CometChat.getGroup("uid").then((group) => {
            setChatGroup(group);
        })
    }, []);
    return (
        <>
            {
                chatGroup &&
                <CometChatAddMembers
                    group={chatGroup}
                />
            }
        </>
    )
}

export default AddMembersDemo;

```

</TabItem>
<TabItem value="ts" label="App.tsx">

```javascript
import { AddMembersDemo } from "./AddMembersDemo";

export default function App() {
  return (
    <div className="App">
      <AddMembersDemo />
    </div>
  );
}
```

</TabItem>
</Tabs>

---

### Actions

[Actions](./components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onSelect

The `onSelect` action is activated when you select the done icon while in selection mode. This returns a list of all the users that you have selected.

This action does not come with any predefined behavior. However, you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnSelect(user: CometChat.User, selected: boolean): void {
    console.log(user);
    //your custom onSelect actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} onSelect={handleOnSelect} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnSelect(user, selected) {
    console.log(user);
    //your custom onSelect actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} onSelect={handleOnSelect} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

##### 2. onAddMembersButtonClick

The `onAddMembersButtonClick` action is triggered when you click the add member button after choosing the users you wish to add in the group. By default, it returns the group GUID and an array of members to be added. However, you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnAddMembersButtonClick(
    guid: string,
    membersToAdd: CometChat.GroupMember[]
  ): void {
    //your custom add member button click actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          onAddMembersButtonClick={handleOnAddMembersButtonClick}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnAddMembersButtonClick(guid, membersToAdd) {
    //your custom add member button click actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          onAddMembersButtonClick={handleOnAddMembersButtonClick}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

##### 3. OnBack

`OnBack` is triggered when you click on the back button of the Add Members component. You can override this action using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnBack(): void {
    //Your Custom onBack actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} onBack={handleOnBack} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnBack() {
    //Your Custom onBack actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} onBack={handleOnBack} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

##### 4. onClose

`onClose` is triggered when you click on the close button of the Add Members component. You can override this action using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnClose(): void {
    //Your Custom onClose actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} onClose={handleOnClose} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnClose() {
    //Your Custom onClose actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} onClose={handleOnClose} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

##### 5. onError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the Add Members component.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnError(error: CometChat.CometChatException): void {
    //Your Custom onError actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} onError={handleOnError} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  function handleOnError(error) {
    //Your Custom onError actions
  }
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} onError={handleOnError} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

##### 1. UsersRequestBuilder

The [UsersRequestBuilder](/sdk/javascript/retrieve-users) enables you to filter and customize the users list based on available parameters in UsersRequestBuilder. This feature allows you to create more specific and targeted queries when fetching users. The following are the parameters available in [UsersRequestBuilder](/sdk/javascript/retrieve-users)

| Methods              | Type               | Description                                                                               |
| -------------------- | ------------------ | ----------------------------------------------------------------------------------------- |
| **setLimit**         | number             | sets the number of users that can be fetched in a single request, suitable for pagination |
| **setSearchKeyword** | String             | used for fetching users matching the passed string                                        |
| **hideBlockedUsers** | boolean            | used for fetching all those users who are not blocked by the logged in user               |
| **friendsOnly**      | boolean            | used for fetching only those users in which logged in user is a member                    |
| **setRoles**         | List&lt;String&gt; | used for fetching users containing the passed tags                                        |
| **setTags**          | List&lt;String&gt; | used for fetching users containing the passed tags                                        |
| **withTags**         | boolean            | used for fetching users containing tags                                                   |
| **setStatus**        | String             | used for fetching users by their status online or offline                                 |
| **setUIDs**          | List&lt;String&gt; | used for fetching users containing the passed users                                       |

**Example**

In the example below, we are applying a filter to the UserList by setting the limit to eight and sorting the lists by their name.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          usersRequestBuilder={new CometChat.UsersRequestBuilder()
            .setLimit(8)
            .sortBy("name")}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          usersRequestBuilder={new CometChat.UsersRequestBuilder()
            .setLimit(8)
            .sortBy("name")}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

##### 2. SearchRequestBuilder

The SearchRequestBuilder uses [UserRequestBuilder](/sdk/javascript/retrieve-users) enables you to filter and customize the search list based on available parameters in UserRequestBuilder.
This feature allows you to keep uniformity between the displayed UserList and searched UserList.

**Example**

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          searchRequestBuilder={new CometChat.UsersRequestBuilder()
            .setLimit(8)
            .setSearchKeyword("**")}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          searchRequestBuilder={new CometChat.UsersRequestBuilder()
            .setLimit(8)
            .setSearchKeyword("**")}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

---

### Events

[Events](./components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

Events emitted by the Add Members component is as follows.

| Event                  | Description                                        |
| ---------------------- | -------------------------------------------------- |
| **ccGroupMemberAdded** | Triggers when a user added to a group successfully |

<Tabs>

<TabItem value="js" label="Add Listener">

```javascript
const ccGroupMemberAdded = CometChatGroupEvents.ccGroupMemberAdded.subscribe(
  (item: IGroupMemberAdded) => {
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
ccGroupMemberAdded?.unsubscribe();
```

</TabItem>

</Tabs>

---

## Customization

To fit your app's design requirements, you can customize the appearance of the Add Members component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using **Style** you can **customize** the look and feel of the component in your app, These parameters typically control elements such as the **color**, **size**, **shape**, and **fonts** used within the component.

##### 1. AddMembers Style

You can set the `AddMembersStyle` to the Add Members Component to customize the styling.

![](../../assets/add_members_style_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatAddMembers,
  AddMembersStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const addMembersStyle = new AddMembersStyle({
    addMembersButtonBackground: "#6716c9",
    addMembersButtonTextColor: "#ffffff",
    background: "#d6b9fa",
    searchBackground: "#6716c9",
    searchPlaceholderTextColor: "#ffffff",
    titleTextColor: "#ffffff",
    searchIconTint: "#ffffff",
    separatorColor: "#6716c9",
    sectionHeaderTextColor: "#ffffff",
  });
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          addMembersStyle={addMembersStyle}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatAddMembers,
  AddMembersStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const addMembersStyle = new AddMembersStyle({
    addMembersButtonBackground: "#6716c9",
    addMembersButtonTextColor: "#ffffff",
    background: "#d6b9fa",
    searchBackground: "#6716c9",
    searchPlaceholderTextColor: "#ffffff",
    titleTextColor: "#ffffff",
    searchIconTint: "#ffffff",
    separatorColor: "#6716c9",
    sectionHeaderTextColor: "#ffffff",
  });
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          addMembersStyle={addMembersStyle}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

List of properties exposed by AddMembersStyle:

| Property                       | Description                                     | Code                                   |
| ------------------------------ | ----------------------------------------------- | -------------------------------------- |
| **border**                     | Used to set border                              | `border?: string,`                     |
| **borderRadius**               | Used to set border radius                       | `borderRadius?: string;`               |
| **background**                 | Used to set background colour                   | `background?: string;`                 |
| **height**                     | Used to set height                              | `height?: string;`                     |
| **width**                      | Used to set width                               | `width?: string;`                      |
| **titleTextFont**              | Used to set title text font                     | `titleTextFont?: string,`              |
| **titleTextColor**             | Used to set title text color                    | `titleTextColor?: string;`             |
| **searchPlaceholderTextFont**  | Used to set search placeholder font             | `searchPlaceholderTextFont?: string;`  |
| **searchPlaceholderTextColor** | Used to set search placeholder color            | `searchPlaceholderTextColor?: string;` |
| **searchTextFont**             | Used to set search text font                    | `searchTextFont?: string;`             |
| **searchTextColor**            | Used to set search text color                   | `searchTextColor?: string;`            |
| **emptyStateTextFont**         | Used to set empty state text font               | `emptyStateTextFont?: string;`         |
| **emptyStateTextColor**        | Used to set empty state text color              | `emptyStateTextColor?: string;`        |
| **errorStateTextFont**         | Used to set error state text font               | `errorStateTextFont?: string;`         |
| **errorStateTextColor**        | Used to set error state text color              | `errorStateTextColor?: string;`        |
| **loadingIconTint**            | Used to set loading icon tint                   | `loadingIconTint?: string;`            |
| **searchIconTint**             | Used to set search icon tint                    | `searchIconTint?: string;`             |
| **searchBorder**               | Used to set search border                       | `searchBorder?: string;`               |
| **searchBorderRadius**         | Used to set search border radius                | `searchBorderRadius?: string;`         |
| **searchBackground**           | Used to set search background color             | `searchBackground?: string;`           |
| **onlineStatusColor**          | Used to set online status color                 | `onlineStatusColor?: string;`          |
| **separatorColor**             | Used to set separator color                     | `separatorColor?: string;`             |
| **sectionHeaderTextFont**      | Used to set section header text font            | `sectionHeaderTextFont?: string;`      |
| **sectionHeaderTextColor**     | Used to set section header text color           | `sectionHeaderTextColor?: string;`     |
| **boxShadow**                  | Used to set box shadow                          | `boxShadow?: string;`                  |
| **backButtonIconTint**         | Used to set back button icon tint               | `backButtonIconTint?: string;`         |
| **closeButtonIconTint**        | Used to set close button icon tint              | `closeButtonIconTint?: string;`        |
| **addMembersButtonBackground** | Used to set add members button background color | `addMembersButtonBackground?: string;` |
| **addMembersButtonTextColor**  | Used to set add members button text color       | `addMembersButtonTextColor?: string;`  |
| **addMembersButtonTextFont**   | Used to set add members button text font        | `addMembersButtonTextFont?: string;`   |
| **padding**                    | Used to set padding                             | `padding?: string;`                    |

##### 2. Avatar Style

To apply customized styles to the `Avatar` component in the Add Members Component, you can use the following code snippet. For further insights on `Avatar` Styles [refer](./avatar#avatar-style)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers, AvatarStyle } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

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
        <CometChatAddMembers group={chatGroup} avatarStyle={avatarStyle} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers, AvatarStyle } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

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
        <CometChatAddMembers group={chatGroup} avatarStyle={avatarStyle} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

##### 3. LisItem Style

To apply customized styles to the `ListItemStyle` component in the `Add Members` Component, you can use the following code snippet. For further insights on `ListItemStyle` Styles [refer](./list-item)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatAddMembers,
  ListItemStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const listItemStyle = new ListItemStyle({
    width: "100%",
    height: "100%",
    border: "2px solid #cdc2ff",
  });
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} listItemStyle={listItemStyle} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatAddMembers,
  ListItemStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const listItemStyle = new ListItemStyle({
    width: "100%",
    height: "100%",
    border: "2px solid #cdc2ff",
  });
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} listItemStyle={listItemStyle} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

##### 4. StatusIndicator Style

To apply customized styles to the Status Indicator component in the Add Members Component, You can use the following code snippet. For further insights on Status Indicator Styles [refer](./status-indicator)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

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
        <CometChatAddMembers
          group={chatGroup}
          statusIndicatorStyle={statusIndicatorStyle}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

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
        <CometChatAddMembers
          group={chatGroup}
          statusIndicatorStyle={statusIndicatorStyle}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatAddMembers,
  TitleAlignment,
} from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          title="Your Custom Title"
          buttonText="Your Custom Button Text"
          titleAlignment={TitleAlignment.left}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatAddMembers,
  TitleAlignment,
} from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          title="Your Custom Title"
          buttonText="Your Custom Button Text"
          titleAlignment={TitleAlignment.left}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

Default:
![](../../assets/add_members_functionality_default_web_screens.png)

Custom:
![](../../assets/add_members_functionality_custom_web_screens.png)

Below is a list of customizations along with corresponding code snippets

| Property                                                                                                             | Description                                                                                      | Code                                              |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| **title** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>             | Used to set title in the app heading                                                             | `title="Your Custom Title"`                       |
| **buttonText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>        | Used to set a custom button text for the add members button                                      | `buttonText="your custom button text"`            |
| **errorStateText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>    | Used to set a custom text response when some error occurs on fetching the list of users          | `errorStateText="your custom error state text"`   |
| **emptyStateText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>    | Used to set a custom text response when fetching the users has returned an empty list            | `emptyStateText="your custom empty state text"`   |
| **searchPlaceholder** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set custom search placeholder text                                                       | `searchPlaceholder='Custom Search PlaceHolder'`   |
| **searchIconURL**                                                                                                    | Used to set search Icon in the search field                                                      | `searchIconURL="Your Custom search icon"`         |
| **loadingIconURL**                                                                                                   | Used to set loading Icon                                                                         | `loadingIconURL="your custom loading icon url"`   |
| **closeButtonIconURL**                                                                                               | Used to set close button Icon                                                                    | `closeButtonIconURL="your custom close icon url"` |
| **backButtonIconURL**                                                                                                | Used to set the back button Icon                                                                 | `backButtonIconURL='Your Custom back Icon'`       |
| **hideError**                                                                                                        | Used to hide error on fetching users                                                             | `hideError={true}`                                |
| **hideSearch**                                                                                                       | Used to toggle visibility for search box                                                         | `hideSearch={true}"`                              |
| **hideSeparator**                                                                                                    | Used to hide the divider separating the user items                                               | `hideSeparator={true}`                            |
| **disableUsersPresence**                                                                                             | Used to toggle functionality to show user's presence                                             | `disableUsersPresence={true}`                     |
| **showBackButton**                                                                                                   | Hides / shows the back button as per the boolean value                                           | `showBackButton={true}`                           |
| **sectionHeaderField**                                                                                               | used to extract the section header character from the user object and show on the section header | `sectionHeaderField={'getStatus'}`                |
| **showSectionHeader**                                                                                                | Hides / shows the section header as per the boolean value                                        | `showSectionHeader={true}`                        |
| **selectionMode**                                                                                                    | set the number of users that can be selected, SelectionMode can be single, multiple or none.     | `selectionMode={SelectionMode.multiple}`          |
| **titleAlignment**                                                                                                   | Alignment of the heading text for the component                                                  | `titleAlignment={TitleAlignment.center}`          |
| **group** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>             | Used to pass group object of which group members will be shown                                   | `group={chatGroup}`                               |

---

### Advance

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

---

#### ListItemView

With this property, you can assign a custom ListItem to the Add Members Component.

```jsx
listItemView = { getListItemView };
```

**Example**

Default:
![](../../assets/add_members_listitemview_default_web_screens.png)

Custom:
![](../../assets/add_members_listitemview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getListItemView = (user: CometChat.User) => {
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
        <cometchat-avatar image={user.getAvatar()} name={user.getName()} />

        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <div
            style={{ fontWeight: "bold", color: "#ffffff", fontSize: "14px" }}
          >
            {user.getName()}
            <div
              style={{ color: "#ffffff", fontSize: "10px", textAlign: "left" }}
            >
              {user.getStatus()}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} listItemView={getListItemView} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getListItemView = (user) => {
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
        <cometchat-avatar image={user.getAvatar()} name={user.getName()} />

        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <div
            style={{ fontWeight: "bold", color: "#ffffff", fontSize: "14px" }}
          >
            {user.getName()}
            <div
              style={{ color: "#ffffff", fontSize: "10px", textAlign: "left" }}
            >
              {user.getStatus()}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} listItemView={getListItemView} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

---

#### SubtitleView

You can customize the subtitle view for each users to meet your requirements

```jsx
subtitleView = { getSubtitleView };
```

Default:
![](../../assets/add_members_subtitleview_default_web_screens.png)

Custom:
![](../../assets/add_members_subtitleview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getSubtitleView = (user: CometChat.User): JSX.Element => {
    function formatTime(timestamp: number) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    }
    if (user instanceof CometChat.User) {
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
            Last Active At: {formatTime(user.getLastActiveAt())}
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
        <CometChatAddMembers group={chatGroup} subtitleView={getSubtitleView} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getSubtitleView = (user) => {
    function formatTime(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    }
    if (user instanceof CometChat.User) {
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
            Last Active At: {formatTime(user.getLastActiveAt())}
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
        <CometChatAddMembers group={chatGroup} subtitleView={getSubtitleView} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

#### LoadingStateView

You can set a custom loader view using `loadingStateView` to match the loading view of your app.

```jsx
loadingStateView={getLoadingStateView()}
```

Default:
![](../../assets/add_members_loadingview_default_web_screens.png)

Custom:
![](../../assets/add_members_loadingview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers, LoaderStyle } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
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
        <CometChatAddMembers
          group={chatGroup}
          loadingStateView={getLoadingStateView()}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers, LoaderStyle } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
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
        <CometChatAddMembers
          group={chatGroup}
          loadingStateView={getLoadingStateView()}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

#### EmptyStateView

You can set a custom `EmptyStateView` using `emptyStateView` to match the empty view of your app.

```jsx
emptyStateView={getEmptyStateView()}
```

Default:
![](../../assets/add_members_empty_stateview_default_web_screens.png)

Custom:
![](../../assets/add_members_empty_stateview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
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
        <CometChatAddMembers
          group={chatGroup}
          emptyStateView={getEmptyStateView()}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
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
        <CometChatAddMembers
          group={chatGroup}
          emptyStateView={getEmptyStateView()}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
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
![](../../assets/add_members_error_stateview_default_web_screens.png)

Custom:
![](../../assets/add_members_error_stateview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
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
        <CometChatAddMembers
          group={chatGroup}
          errorStateView={getErrorStateView()}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
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
        <CometChatAddMembers
          group={chatGroup}
          errorStateView={getErrorStateView()}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

---

#### Menus

You can set the Custom Menu view to add more options to the Add Members component.

```jsx
menus={getMenus()}
```

![](../../assets/add_members_menus_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getMenus = () => {
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
        buttonIconTint: "#7E57C2",
      };
    };
    return (
      <div style={{ marginRight: "20px" }}>
        <cometchat-button
          iconURL="icon"
          buttonStyle={JSON.stringify(getButtonStyle())}
          onClick={handleReload}
        >
          {" "}
        </cometchat-button>
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} menus={getMenus()} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatAddMembers } from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  const getMenus = () => {
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
        buttonIconTint: "#7E57C2",
      };
    };
    return (
      <div style={{ marginRight: "20px" }}>
        <cometchat-button
          iconURL="icon"
          buttonStyle={JSON.stringify(getButtonStyle())}
          onClick={handleReload}
        >
          {" "}
        </cometchat-button>
      </div>
    );
  };
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers group={chatGroup} menus={getMenus()} />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

---

#### Options

You can set the Custom options to the Add Members component.

![](../../assets/add_members_options_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='AddMembersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatAddMembers,
  CometChatOption,
} from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = React.useState<
    CometChat.Group | undefined
  >();

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          options={(user: CometChat.User) => {
            const customOptions = [
              new CometChatOption({
                id: "1",
                title: "Title",
                iconURL: "icon",
                backgroundColor: "transparent",
                onClick: () => {
                  console.log("Custom option clicked:", user);
                },
                iconTint: "#890aff",
                titleColor: "blue",
              }),
            ];
            return customOptions;
          }}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='AddMembersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatAddMembers,
  CometChatOption,
} from "@cometchat/chat-uikit-react";
import React from "react";

const AddMembersDemo = () => {
  const [chatGroup, setChatGroup] = useState(null);

  React.useEffect(() => {
    CometChat.getGroup("uid").then((group) => {
      setChatGroup(group);
    });
  }, []);
  return (
    <>
      {chatGroup && (
        <CometChatAddMembers
          group={chatGroup}
          options={(user) => {
            const customOptions = [
              new CometChatOption({
                id: "1",
                title: "Title",
                iconURL: "icon",
                backgroundColor: "transparent",
                onClick: () => {
                  console.log("Custom option clicked:", user);
                },
                iconTint: "#890aff",
                titleColor: "blue",
              }),
            ];
            return customOptions;
          }}
        />
      )}
    </>
  );
};

export default AddMembersDemo;
```

</TabItem>
</Tabs>

---

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in AddMembersConfiguration"
/>
