---
sidebar_position: 1
title: Users
slug: /users
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The Users is a [Component](./components-overview#components), showcasing an accessible list of all available users. It provides an integral search functionality, allowing you to locate any specific user swiftly and easily. For each user listed, the widget displays the user's name by default, in conjunction with their avatar when available. Furthermore, it includes a status indicator, visually informing you whether a user is currently online or offline.

![](../../assets/users_overview_web_screens.png)

The Users component is composed of the following BaseComponents:

| Components                       | Description                                                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [CometChatList](./list)          | a reusable container component having title, search box, customisable background and a List View                        |
| [CometChatListItem](./list-item) | a component that renders data obtained from a User object on a Tile having a title, subtitle, leading and trailing view |

---

## Usage

### Integration

The following code snippet illustrates how you can directly incorporate the Users component into your Application.

<Tabs>
<TabItem value="UsersDemo" label="UsersDemo.tsx">

```javascript
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  return <CometChatUsers />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="ts" label="App.tsx">

```javascript
import { UsersDemo } from "./UsersDemo";

export default function App() {
  return (
    <div className="App">
      <UsersDemo />
    </div>
  );
}
```

</TabItem>
</Tabs>

### Actions

[Actions](./components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onSelect

The `onSelect` action is activated when you select the done icon while in selection mode. This returns a list of all the users that you have selected.

This action does not come with any predefined behavior. However, you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers, SelectionMode } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  function handleOnSelect(users: CometChat.User, selected: boolean): void {
    console.log(users);
    //your custom onSelect actions
  }

  return (
    <CometChatUsers
      selectionMode={SelectionMode.multiple}
      onSelect={handleOnSelect}
    />
  );
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers, SelectionMode } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  function handleOnSelect(users, selected) {
    console.log(users);
    //your custom onSelect actions
  }

  return (
    <CometChatUsers
      selectionMode={SelectionMode.multiple}
      onSelect={handleOnSelect}
    />
  );
}

export default UsersDemo;
```

</TabItem>
</Tabs>

##### 2. onItemClick

The `OnItemClick` event is activated when you click on the UserList item. This action does not come with any predefined behavior. However, you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  function handleOnItemClick(user: CometChat.User): void {
    console.log(user, "your custom on item click action");
  }
  return <CometChatUsers onItemClick={handleOnItemClick} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  function handleOnItemClick(user) {
    console.log(user, "your custom on item click action");
  }

  return <CometChatUsers onItemClick={handleOnItemClick} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

##### 3. onEmpty

This action allows you to specify a callback function to be executed when a certain condition, typically the absence of data or content, is met within the component or element.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  function handleOnEmpty(): void {
    console.log("your custom on Empty action");
  }
  return <CometChatUsers onEmpty={handleOnEmpty} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  function handleOnEmpty() {
    console.log("your custom on Empty action");
  }

  return <CometChatUsers onEmpty={handleOnEmpty} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

##### 4. onError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the User component.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const handleOnError = (error: CometChat.CometChatException) => {
    console.log("Your custom on error actions");
  };
  return <CometChatUsers onError={handleOnError} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const handleOnError = (error) => {
    console.log("Your custom on error actions");
  };

  return <CometChatUsers onError={handleOnError} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

##### 1. UserRequestBuilder

The [UserRequestBuilder](/sdk/javascript/retrieve-users) enables you to filter and customize the user list based on available parameters in UserRequestBuilder. This feature allows you to create more specific and targeted queries when fetching users. The following are the parameters available in [UserRequestBuilder](/sdk/javascript/retrieve-users)

| Methods              | Type               | Description                                                                            |
| -------------------- | ------------------ | -------------------------------------------------------------------------------------- |
| **setLimit**         | number             | sets the number users that can be fetched in a single request, suitable for pagination |
| **setSearchKeyword** | String             | used for fetching users matching the passed string                                     |
| **hideBlockedUsers** | boolean            | used for fetching all those users who are not blocked by the logged in user            |
| **friendsOnly**      | boolean            | used for fetching only those users in which logged in user is a member                 |
| **setRoles**         | List&lt;String&gt; | used for fetching users containing the passed tags                                     |
| **setTags**          | List&lt;String&gt; | used for fetching users containing the passed tags                                     |
| **withTags**         | boolean            | used for fetching users containing tags                                                |
| **setStatus**        | String             | used for fetching users by their status online or offline                              |
| **setUIDs**          | List&lt;String&gt; | used for fetching users containing the passed users                                    |

**Example**

In the example below, we are applying a filter to the UserList based on Friends.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  return (
    <CometChatUsers
      usersRequestBuilder={new CometChat.UsersRequestBuilder()
        .friendsOnly(true)
        .setLimit(2)}
    />
  );
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  return (
    <CometChatUsers
      usersRequestBuilder={new CometChat.UsersRequestBuilder()
        .friendsOnly(true)
        .setLimit(2)}
    />
  );
}

export default UsersDemo;
```

</TabItem>
</Tabs>

##### 2. SearchRequestBuilder

The SearchRequestBuilder uses [UserRequestBuilder](/sdk/javascript/retrieve-users) enables you to filter and customize the search list based on available parameters in UserRequestBuilder.
This feature allows you to keep uniformity between the displayed UserList and searched UserList.

**Example**

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  return (
    <CometChatUsers
      searchRequestBuilder={new CometChat.UsersRequestBuilder().setSearchKeyword(
        "**"
      )}
    />
  );
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  return (
    <CometChatUsers
      searchRequestBuilder={new CometChat.UsersRequestBuilder().setSearchKeyword(
        "**"
      )}
    />
  );
}

export default UsersDemo;
```

</TabItem>
</Tabs>

---

### Events

[Events](./components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

To handle events supported by Users you have to add corresponding listeners by using `CometChatUserEvents`

The `Users` component does not produce any events directly.

---

## Customization

To fit your app's design requirements, you can customize the appearance of the Users component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using **Style** you can **customize** the look and feel of the component in your app, These parameters typically control elements such as the **color**, **size**, **shape**, and **fonts** used within the component.

##### 1. Users Style

You can set the `UsersStyle` to the Users Component to customize the styling.

![](../../assets/users_style.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers, UsersStyle } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const usersStyle = new UsersStyle({
    background: "#f7f2ff",
    titleTextColor: "#6414fa",
    searchTextColor: "#940be3",
    separatorColor: "#ffffff",
  });
  return <CometChatUsers usersStyle={usersStyle} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers, UsersStyle } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const usersStyle = new UsersStyle({
    background: "#f7f2ff",
    titleTextColor: "#6414fa",
    searchTextColor: "#940be3",
    separatorColor: "#ffffff",
  });

  return <CometChatUsers usersStyle={usersStyle} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

List of properties exposed by UsersStyle

| Property                       | Description                                                                                                      | Code                                   |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **border**                     | Used to set border                                                                                               | `border?: string,`                     |
| **borderRadius**               | Used to set border radius                                                                                        | `borderRadius?: string;`               |
| **background**                 | Used to set background colour                                                                                    | `background?: string;`                 |
| **height**                     | Used to set height                                                                                               | `height?: string;`                     |
| **width**                      | Used to set width                                                                                                | `width?: string;`                      |
| **titleTextFont**              | Used to customise the font of the title in the app bar                                                           | `titleTextFont?: string;`              |
| **titleTextColor**             | Used to customise the color of the title in the app bar                                                          | `titleTextColor?: string;`             |
| **emptyStateTextFont**         | Used to set the font style of the response text shown when fetchig the list of users has returned an empty list  | `emptyStateTextFont?: string;`         |
| **emptyStateTextColor**        | Used to set the color of the response text shown when fetchig the list of users has returned an empty list       | `emptyStateTextColor?: string;`        |
| **errorStateTextFont**         | Used to set the font style of the response text shown in case some error occurs while fetching the list of users | `errorStateTextFont?: string;`         |
| **errorStateTextColor**        | Used to set the font style of the response text shown in case some error occurs while fetching the list of users | `errorStateTextColor?: string;`        |
| **loadingIconTint**            | Used to set the color of the icon shown while the list of users is being fetched                                 | `loadingIconTint?: string;`            |
| **onlineStatusColor**          | Used to set the color of the status indicator shown if a user is online                                          | `onlineStatusColor?: string;`          |
| **separatorColor**             | Used to set the color of the divider separating the group member items                                           | `separatorColor?: string;`             |
| **boxShadow**                  | Sets shadow effects around the element                                                                           | `boxShadow?: string;`                  |
| **searchIconTint**             | Used to set the color of the search icon in the search box                                                       | `searchIconTint?: string;`             |
| **searchBorder**               | Used to set the border of the search box                                                                         | `searchBorder?: string;`               |
| **searchBorderRadius**         | Used to set the border radius of the search box                                                                  | `searchBorderRadius?: string;`         |
| **searchBackground**           | Used to set the background color of the search box                                                               | `searchBackground?: string;`           |
| **searchPlaceholderTextFont**  | Used to set the font of the placeholder text in the search box                                                   | `searchPlaceholderTextFont?: string;`  |
| **searchPlaceholderTextColor** | Used to set the color of the placeholder text in the search box                                                  | `searchPlaceholderTextColor?: string;` |
| **searchTextFont**             | Used to set the font of the text in the search box                                                               | `searchTextFont?: string;`             |
| **searchTextColor**            | Used to set the color of the text in the search box                                                              | `searchTextColor?: string;`            |
| **sectionHeaderTextFont**      | Used to customise the font of the section header text.                                                           | `sectionHeaderTextFont?: string;`      |
| **sectionHeaderTextColor**     | Used to customise the color of the section header text.                                                          | `sectionHeaderTextColor?: string;`     |

##### 2. Avatar Style

To apply customized styles to the `Avatar` component in the Users Component, you can use the following code snippet. For further insights on `Avatar` Styles [refer](./avatar#avatar-style)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers, AvatarStyle } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const avatarStyle = new AvatarStyle({
    backgroundColor: "#cdc2ff",
    border: "2px solid #6745ff",
    borderRadius: "10px",
    outerViewBorderColor: "#ca45ff",
    outerViewBorderRadius: "5px",
    nameTextColor: "#4554ff",
  });
  return <CometChatUsers avatarStyle={avatarStyle} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers, AvatarStyle } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const avatarStyle = new AvatarStyle({
    backgroundColor: "#cdc2ff",
    border: "2px solid #6745ff",
    borderRadius: "10px",
    outerViewBorderColor: "#ca45ff",
    outerViewBorderRadius: "5px",
    nameTextColor: "#4554ff",
  });

  return <CometChatUsers avatarStyle={avatarStyle} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

##### 3. StatusIndicator Style

To apply customized styles to the Status Indicator component in the Users Component, You can use the following code snippet. For further insights on Status Indicator Styles [refer](./status-indicator)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const statusIndicatorStyle = {
    background: "#db35de",
    height: "10px",
    width: "10px",
  };
  return <CometChatUsers statusIndicatorStyle={statusIndicatorStyle} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const statusIndicatorStyle = {
    background: "#db35de",
    height: "10px",
    width: "10px",
  };
  return <CometChatUsers statusIndicatorStyle={statusIndicatorStyle} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

##### 4. LisItem Style

To apply customized styles to the `ListItemStyle` component in the `Users` Component, you can use the following code snippet. For further insights on `ListItemStyle` Styles [refer](./list-item)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers, ListItemStyle } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const listItemStyle = new ListItemStyle({
    width: "100%",
    height: "100%",
    border: "2px solid red",
  });
  return <CometChatUsers listItemStyle={listItemStyle} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers, ListItemStyle } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const listItemStyle = new ListItemStyle({
    width: "100%",
    height: "100%",
    border: "2px solid red",
  });
  return <CometChatUsers listItemStyle={listItemStyle} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers, TitleAlignment } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  return (
    <CometChatUsers
      title="Your Custom Title"
      showSectionHeader={true}
      tileAlignment={TitleAlignment.center}
    />
  );
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers, TitleAlignment } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  return (
    <CometChatUsers
      title="Your Custom Title"
      showSectionHeader={true}
      tileAlignment={TitleAlignment.center}
    />
  );
}

export default UsersDemo;
```

</TabItem>
</Tabs>

Default:
![](../../assets/users_functionality_default_web_screens.png)

Custom:
![](../../assets/users_functionality_custom_web_screens.png)

Below is a list of customizations along with corresponding code snippets
| Property | Description | Code |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **title** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set title in the app bar | `title="Your Custom Title"` |
| **searchPlaceholderText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>| Used to set search placeholder text | `searchPlaceholderText="Your Custom search placeholder text"` |
| **searchIconURL** | Used to set search Icon in the search field | `searchIconURL="Your Custom search icon"` |
| **loadingIconURL** | Used to set loading Icon | `loadingIconURL="your custom loading icon url"` |
| **closeButtonIconURL** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set the close button Icon | `closeButtonIconURL="your custom close button icon"` |
| **hideSearch** | Used to toggle visibility for search box | `hideSearch={true}"` |
| **hideError** | Used to hide error on fetching users | `hideError={true}` |
| **hideSeparator** | Used to hide the divider separating the user items | `hideSeparator={true}` |
| **disableUsersPresence** | Used to control visibility of user indicator shown if user is online | `disableUsersPresence={true}` |
| **disableLoadingState** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to control visibility of loading state | `disableLoadingState={true}` |
| **emptyStateText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set a custom text response when fetching the users has returned an empty list | `emptyStateText="your custom empty state text"` |
| **errorStateText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>| Used to set a custom text response when some error occurs on fetching the list of users | `errorStateText="your custom error state text"` |
| **activeUser** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set the active user | `activeUser={chatUser}` |
| **userPresencePlacement** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | The `userPresencePlacement` property determines the placement of user presence indicators, allowing options for either "right" or "bottom" positioning. | `userPresencePlacement={UserPresencePlacement.right}` |
| **searchKeyword** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | The `searchKeyword` property facilitates searching/filtering based on the provided keyword, enhancing the functionality of the component. | `searchKeyword="Alice"` |

---

### Advance

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

---

#### ListItemView

With this property, you can assign a custom ListItem to the Users Component.

```jsx
listItemView = { getListItemView };
```

**Example**

Default:
![](../../assets/users_listItemView_default_web_screens.png)

Custom:
![](../../assets/users_listItemView_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const getListItemView = (user: CometChat.User) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          border: "2px solid #e9baff",
          borderRadius: "20px",
          background: "#ffffff",
        }}
      >
        <cometchat-avatar image={user.getAvatar()} name={user.getName()} />

        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <div
            style={{
              fontWeight: "bold",
              color: "#937aff",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            {user.getName()}
            <div
              style={{ color: "#cfc4ff", fontSize: "10px", textAlign: "left" }}
            >
              {user.getStatus()}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <CometChatUsers listItemView={getListItemView} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const getListItemView = (user) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "10px",
          border: "2px solid #e9baff",
          borderRadius: "20px",
          background: "#ffffff",
        }}
      >
        <cometchat-avatar image={user.getAvatar()} name={user.getName()} />

        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <div
            style={{
              fontWeight: "bold",
              color: "#937aff",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            {user.getName()}
            <div
              style={{ color: "#cfc4ff", fontSize: "10px", textAlign: "left" }}
            >
              {user.getStatus()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <CometChatUsers listItemView={getListItemView} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

---

#### SubtitleView

You can customize the subtitle view for each user item to meet your requirements

```jsx
subtitleView = { getSubtitleView };
```

![](../../assets/users_subtitleView_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
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
            padding: "10px",
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
  return <CometChatUsers subtitleView={getSubtitleView} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
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
            padding: "10px",
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

  return <CometChatUsers subtitleView={getSubtitleView} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

#### LoadingStateView

You can set a custom loader view using `loadingStateView` to match the loading view of your app.

```jsx
loadingStateView={getLoadingStateView()}
```

Default:
![](../../assets/users_loadingview_default_web_screens.png)

Custom:
![](../../assets/users_loadingview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers, LoaderStyle } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const getLoadingStateView = () => {
    const getLoaderStyle = new LoaderStyle({
      iconTint: "#890aff",
      height: "100vh",
      width: "100vw",
    });

    return (
      <cometchat-loader
        iconURL="https://cdn-icons-png.freepik.com/256/6356/6356625.png"
        loaderStyle={JSON.stringify(getLoaderStyle)}
      ></cometchat-loader>
    );
  };

  return <CometChatUsers loadingStateView={getLoadingStateView()} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers, LoaderStyle } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const getLoadingStateView = () => {
    const getLoaderStyle = new LoaderStyle({
      iconTint: "#890aff",
      height: "100vh",
      width: "100vw",
    });

    return (
      <cometchat-loader
        iconURL="https://cdn-icons-png.freepik.com/256/6356/6356625.png"
        loaderStyle={JSON.stringify(getLoaderStyle)}
      ></cometchat-loader>
    );
  };

  return <CometChatUsers loadingStateView={getLoadingStateView()} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

#### EmptyStateView

You can set a custom `EmptyStateView` using `emptyStateView` to match the empty view of your app.

```jsx
emptyStateView={getEmptyStateView()}
```

Default:
![](../../assets/users_emptyview_default_web_screens.png)

Custom:
![](../../assets/users_emptyview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const getEmptyStateView = () => {
    return <div>Your Custom Empty State</div>;
  };

  return <CometChatUsers emptyStateView={getEmptyStateView()} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const getEmptyStateView = () => {
    return <div>Your Custom Empty State</div>;
  };

  return <CometChatUsers emptyStateView={getEmptyStateView()} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

#### ErrorStateView

You can set a custom `ErrorStateView` using `errorStateView` to match the empty view of your app.

```jsx
errorStateView={getErrorStateView()}
```

Default:
![](../../assets/users_errorview_default_web_screens.png)

Custom:
![](../../assets/users_errorview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const getErrorStateView = () => {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <img
          src=" custom image "
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

  return <CometChatUsers errorStateView={getErrorStateView()} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="javaScript" label="javaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  const getErrorStateView = () => {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <img
          src=" custom image "
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

  return <CometChatUsers errorStateView={getErrorStateView()} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

---

#### Menus

You can set the Custom Menu view to add more options to the Users component.

```jsx
menus={getMenus()}
```

![](../../assets/users_menus_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
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

  return <CometChatUsers menus={getMenus()} />;
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers } from "@cometchat/chat-uikit-react";

function UsersDemo() {
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

  return <CometChatUsers menus={getMenus()} />;
}

export default UsersDemo;
```

</TabItem>
</Tabs>

---

#### Options

You can set the Custom options to the Users component.

![](../../assets/users_options_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='UsersDemo.tsx'
import { CometChatUsers, CometChatOption } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  return (
    <CometChatUsers
      options={(user: any) => {
        const customOptions = [
          new CometChatOption({
            id: "1",
            title: "Title",
            iconURL: "icon",
            backgroundColor: "transparent",
            onClick: () => {
              console.log("Custom option clicked for user:", user);
            },
            iconTint: "#890aff",
            titleColor: "blue",
          }),
        ];
        return customOptions;
      }}
    />
  );
}

export default UsersDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='UsersDemo.jsx'
import { CometChatUsers, CometChatOption } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  return (
    <CometChatUsers
      options={(user) => {
        const customOptions = [
          new CometChatOption({
            id: "1",
            title: "Title",
            iconURL: "icon",
            backgroundColor: "transparent",
            onClick: () => {
              console.log("Custom option clicked for user:", user);
            },
            iconTint: "#890aff",
            titleColor: "blue",
          }),
        ];
        return customOptions;
      }}
    />
  );
}

export default UsersDemo;
```

</TabItem>
</Tabs>

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in UsersConfiguration"
/>
