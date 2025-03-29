---
sidebar_position: 3
title: User Details
slug: /user-details
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

## Overview

`CometChatDetails` is a component that provides additional information and settings related to a specific user.

The details screen includes the following elements and functionalities:

1. User Information: It displays details about the user. This includes his/her profile picture, name, status, and other relevant information.
2. User Actions: The details screen provides actions to block/unblock the user.

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/user_details_overview_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/user_details_overview_cometchat_screens.png)

</TabItem>

</Tabs>

## Usage

### Integration

<Tabs>
<TabItem value="tsx" label="App.tsx">

```typescript
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatUsersWithMessages } from "@cometchat/chat-uikit-react-native";

function App(): React.JSX.Element {
  const [chatUser, setChatUser] = React.useState<CometChat.User>();

  React.useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  return (
    <>{chatUser && <CometChatDetails user={chatUser}></CometChatDetails>}</>
  );
}
```

</TabItem>
</Tabs>

### Actions

[Actions](/ui-kit/react-native/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onBack

The `onBack` event is typically triggered when the back button is clicked and it does not carry a default action.

With the following code snippet, you can effortlessly override this default operation.

<Tabs>
<TabItem value="tsx" label="App.tsx">

```typescript
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatDetails } from "@cometchat/chat-uikit-react-native";

function App(): React.JSX.Element {
  const onBackHandler = () => {
    //code
  };

  return (
    <>
      {chatUser && (
        <CometChatDetails
          user={chatUser}
          onBack={onBackHandler}
        ></CometChatDetails>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

##### 2. onError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the Details component.

<Tabs>
<TabItem value="tsx" label="App.tsx">

```typescript
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatDetails } from "@cometchat/chat-uikit-react-native";

function App(): React.JSX.Element {
  const onErrorHandler = (error: CometChat.CometChatException) => {
    //code
  };

  return (
    <>
      {chatUser && (
        <CometChatDetails
          user={chatUser}
          onError={onErrorHandler}
        ></CometChatDetails>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

`CometChatDetails` component does not have available filters.

### Events

[Events](/ui-kit/react-native/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The list of `User Related Events` emitted by the Details component is as follows:

| Event               | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| **ccUserBlocked**   | This event is triggered when the user successfully blocks another user.   |
| **ccUserUnblocked** | This event is triggered when the user successfully unblocks another user. |

<!-- | **ccGroupLeft** | This event is triggered when the group member leaves the group successfully |
| **ccGroupDeleted**    | This event is triggered when the group member deletes the group successfully| -->

<Tabs>
<TabItem value="js" label="Adding Listeners">

```js
import { CometChatUIEventHandler } from "@cometchat/chat-uikit-react-native";

CometChatUIEventHandler.addUserListener("USER_LISTENER_ID", {
  ccUserBlocked: ({ item }) => {
    //code
  },
});

CometChatUIEventHandler.addUserListener("USER_LISTENER_ID", {
  ccUserUnblocked: ({ item }) => {
    //code
  },
});
```

</TabItem>

</Tabs>

<!-- CometChatUIEventHandler.addGroupListener("GROUP_LISTENER_ID", {
        ccGroupLeft: ({ leftGroup }) => {
          //code
        }
    });

    CometChatUIEventHandler.addGroupListener("GROUP_LISTENER_ID", {
        ccGroupDeleted: ({ group }) => {
          //code
        },
    }); -->

---

<Tabs>
<TabItem value="js" label="Removing Listeners">

```js
import { CometChatUIEventHandler } from "@cometchat/chat-uikit-react-native";

CometChatUIEventHandler.removeUserListener("USER_LISTENER_ID");
```

</TabItem>
</Tabs>

   <!-- CometChatUIEventHandler.removeGroupListener("GROUP_LISTENER_ID"); -->

---

## Customization

To fit your app's design requirements, you can customize the appearance of the details component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. Details Style

You can set the `DetailsStyle` to the User Details Component to customize the styling.

<Tabs>
<TabItem value="App" label="App.tsx">

```jsx

import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatMessageList, DetailsStyleInterface } from '@cometchat/chat-uikit-react-native';

function App(): React.JSX.Element {
    const [chatUser, setChatUser] = React.useState<CometChat.User| undefined>();

    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);

    const detailsStyle : DetailsStyleInterface = {
       width: '100',
       height: '1000',
       backgroundColor: '#ddd7f7',
       titleColor: "red",
       closeIconTint: "red",
    }


    return (
     <>
         { chatUser && <CometChatDetails
              user={chatUser}
              detailsStyle={detailsStyle}
           />
          }
     </>
   );
}

```

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/user_details_style_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/user_details_style_cometchat_screens.png)

</TabItem>

</Tabs>

List of properties exposed by DetailsStyle
| Property | Description | Code |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **height** | Used to set height | `height?: string;` |
| **width** | Used to set width | `width?: string;` |
| **backgroundColor** | Used to set background colour | `backgroundColor?: string;` |
| **border** | Used to set border | `border?: BorderStyleInterface,` |
| **borderRadius** | Used to set border radius | `borderRadius?: string;` |
| **titleFont**| Used to customise the font of the title in the app bar| `titleFont?: FontStyleInterface;`|
| **titleColor**| Used to customise the color of the title in the app bar| `titleColor?: string;`|
| **backIconTint** | Sets the color of the back icon of the component | `backIconTint?: string;` |
| **closeIconTint** | Sets the color of the close icon of the component | `closeIconTint?: string;` |
| **onlineStatusColor** | Sets the color of the status indicator representing the user's online status | `onlineStatusColor?: string;` |

##### 2. StatusIndicator Style

To apply customized styles to the `StatusIndicator` component in the `Details` Component, you can use the following code snippet. For further insights on `StatusIndicator` Styles [refer](./status-indicator)

<Tabs>
<TabItem value="App" label="App.tsx">

```jsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatMessageList, StatusIndicatorStyleInterface } from '@cometchat/chat-uikit-react-native';

function App(): React.JSX.Element {
    const [chatUser, setChatUser] = React.useState<CometChat.User| undefined>();

    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);

    const statusIndicatorStyle: StatusIndicatorStyleInterface = {
       backgroundColor: 'grey',
    };


    return (
     <>
         { chatUser && <CometChatDetails
              user={chatUser}
              statusIndicatorStyle={statusIndicatorStyle}
           />
          }
     </>
   );
}
```

</TabItem>
</Tabs>

##### 3. ListItem Style

To apply customized styles to the List Item component in the Details Component, you can use the following code snippet. For further insights on List Item Styles [refer](./list-item)

<Tabs>
<TabItem value="App" label="App.tsx">

```jsx

import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatMessageList, ListItemStyleInterface } from '@cometchat/chat-uikit-react-native';

function App(): React.JSX.Element {
    const [chatUser, setChatUser] = React.useState<CometChat.User| undefined>();

    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);

    const listItemStyle: ListItemStyleInterface = {
       backgroundColor: '#ddd7f7',
    };

    return (
     <>
         { chatUser && <CometChatDetails
              user={chatUser}
              listItemStyle={listItemStyle}
           />
          }
     </>
   );
}

```

</TabItem>
</Tabs>

##### 4. Avatar Style

To apply customized styles to the `Avatar` component in the `Conversations` Component, you can use the following code snippet. For further insights on `Avatar` Styles [refer](./avatar)

<Tabs>
<TabItem value="App" label="App.tsx">

```jsx

import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatMessageList, BorderStyleInterface, AvatarStyleInterface } from '@cometchat/chat-uikit-react-native';

function App(): React.JSX.Element {
    const [chatUser, setChatUser] = React.useState<CometChat.User| undefined>();

    React.useEffect(() => {
        CometChat.getUser("uid").then((user) => {
            setChatUser(user);
        })
    }, []);

    const borderStyle : BorderStyleInterface =  {
       borderWidth: 1,
       borderStyle: 'solid',
       borderColor: 'red',
    }

    const avatarStyle : AvatarStyleInterface = {
      border: borderStyle
    }


    return (
     <>
         { chatUser && <CometChatDetails
              user={chatUser}
              avatarStyle={avatarStyle}
           />
          }
     </>
   );
}

```

</TabItem>
</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

<Tabs>

<TabItem value="tsx" label="App.tsx">

```tsx
import { CometChat } from "@cometchat/chat-sdk-react-native";
import {
  CometChatUsers,
  CometChatListStylesInterface,
} from "@cometchat/chat-uikit-react-native";

function App(): React.JSX.Element {
  const [chatUser, setChatUser] = React.useState<CometChat.User | undefined>();

  React.useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  return (
    <>
      {chatUser && (
        <CometChatDetails
          user={chatUser}
          title="User Details"
          showCloseButton={false}
        />
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/details_function_1_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/details_function_1_cometchat_screens.png)

</TabItem>

</Tabs>

Below is a list of customizations along with corresponding code snippets
| Property | Description | Code |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **user** | Used to set the user <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | `user: CometChat.User;` |
| **title** | Used to set title in the app bar | `title?: string;` |
| **showCloseButton** | Used to toggle visibility for back button | `showCloseButton?: boolean` |
| **closeButtonIcon** | Used to override the default close/back icon | `closeButtonIcon?: ImageURISource` |
| **hideProfile** | Used to hide user profile view | `hideProfile?: boolean;` |
| **disableUsersPresence** | Used to control visibility of user indicator shown if user is online | `disableUsersPresence?: boolean` |
| **searchBoxIcon** | Used to set search Icon in the search field | `searchBoxIcon?: ImageURISource` |
| **hideSearch** | Used to toggle visibility for search box | `hideSearch?: boolean` |
| **hideError** | Used to hide error on fetching users | `hideError?: boolean` |
| **hideSeparator** | Used to hide the divider separating the user items | `hideSeparator?: boolean` |
| **emptyStateText** | Used to set a custom text response when fetching the users has returned an empty list | `emptyStateText?: string` |
| **errorStateText** | Used to set a custom text response when some error occurs on fetching the list of users | `errorStateText?: string` |
| **data** | Used to pass custom details template | `data?: ({user, group,}: {user?: CometChat.User;group?: CometChat.Group;}) => CometChatDetailsTemplate[];` |

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

---

#### SubtitleView

Using this prop, you can assign a custom `SubtitleView` to the Details Component.

<Tabs>

<TabItem value="tsx" label="App.tsx">

```tsx
import { CometChat } from "@cometchat/chat-sdk-react-native";
import {
  CometChatUsers,
  CometChatListStylesInterface,
} from "@cometchat/chat-uikit-react-native";

function App(): React.JSX.Element {
  const [chatUser, setChatUser] = React.useState<CometChat.User | undefined>();

  React.useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const getSubtitleView = ({
    user,
    group,
  }: {
    user?: CometChat.User | undefined;
    group?: CometChat.Group | undefined;
  }) => {
    return (
      <Text
        style={{
          fontSize: 12,
          color: theme.palette.getAccent800(),
        }}
      >
        Last Active At:{" "}
        {user?.getLastActiveAt() ? formatTime(user?.getLastActiveAt()) : "--"}
      </Text>
    );
  };

  return (
    <>
      {chatUser && (
        <CometChatDetails user={chatUser} SubtitleView={getSubtitleView} />
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/user_details_subtitle_view_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/user_details_subtitle_view_cometchat_screens.png)

</TabItem>

</Tabs>

#### CustomProfileView

Using this prop, you can assign a `Custom ProfileView` to the Details Component.

<Tabs>

<TabItem value="tsx" label="App.tsx">

```tsx
import { CometChat } from "@cometchat/chat-sdk-react-native";
import {
  CometChatUsers,
  CometChatListStylesInterface,
} from "@cometchat/chat-uikit-react-native";

function App(): React.JSX.Element {
  const [chatUser, setChatUser] = React.useState<CometChat.User | undefined>();

  React.useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const customProfileViewStyle: StyleProp<ViewStyle> = {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    marginRight: 15,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#E8EAE9",
    borderRadius: 10,
    margin: 2,
  };

  const getCustomProfileView = ({
    user,
    group,
  }: {
    user?: CometChat.User;
    group?: CometChat.Group;
  }) => {
    return (
      <View style={customProfileViewStyle}>
        <CometChatAvatar
          image={user?.getAvatar() ? { uri: user.getAvatar() } : undefined}
          name={user?.getName()}
        />

        <View>
          <Text style={{ color: "black", fontWeight: "bold" }}>
            {user?.getName()}
          </Text>
          <Text style={{ color: "#667" }}>{user?.getStatus()}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {chatUser && (
        <CometChatDetails
          user={chatUser}
          CustomProfileView={getCustomProfileView}
        />
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/user_details_custom_profile_view_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/user_details_custom_profile_view_cometchat_screens.png)

</TabItem>

</Tabs>

#### DetailsTemplate

The `CometChatDetailsTemplate` offers a structure for organizing information in the CometChat details component. It serves as a blueprint, defining how user-related details are presented. This structure allows for customization and organization within the CometChat interface.

This defines the structure of template data for the details component.

| Name                      | Type                       | Description                                                                             |
| ------------------------- | -------------------------- | --------------------------------------------------------------------------------------- |
| **id**                    | `string` &#124; `number`   | Identifier for the template option                                                      |
| **title**                 | `string`                   | Heading text for the template option                                                    |
| **titleColor**            | `string`                   | User-defined UI component to customise the trailing view for each option in a template. |
| **titleFont**             | `FontStyleInterface`       | User-defined UI component to override the default view for the option.                  |
| **titleStyle**            | `TextStyle`                | Function invoked when user clicks on the option.                                        |
| **sectionSeparatorColor** | `string`                   | Sets all the different properties of font for the title text                            |
| **itemSeparatorColor**    | `string`                   | Sets the foreground colour of title text                                                |
| **hideSectionSeparator**  | `boolean`                  | Image url for the icon to symbolise an option                                           |
| **hideItemSeparator**     | `boolean`                  | Color applied to the icon of the option                                                 |
| **options**               | `CometChatDetailsOption[]` | Sets the [`CometChatDetailsOption`](./03-User%20Details.md#detailsoption)s              |

#### DetailsOption

The `DetailsOption` defines the structure for individual options within the CometChat details component, facilitating customization and functionality for user interactions.

This defines the structure of each option for a template in the details component.

| Property            | Type                                                      | Description                                                  |
| ------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| **id**              | `string` &#124; `number`                                  | Identifier for the template                                  |
| **title**           | `string`                                                  | Heading text for the template                                |
| **titleStyle**      | `TextStyle`                                               | Sets the title style                                         |
| **icon**            | `ImageType`                                               | Sets all the different properties of font for the title text |
| **iconTint**        | `string`                                                  | Sets the icon tint`                                          |
| **backgroundColor** | `string`                                                  | Sets the background color                                    |
| **CustomView**      | `() => JSX.Element`                                       | Sets custom view for the option                              |
| **Tail**            | `() => JSX.Element`                                       | Sets the tail view for the option                            |
| **height**          | `number`                                                  | Sets the height                                              |
| **onClick**         | `({ user, group }: { user?: any; group?: any }) => void;` | Sets the onClick Handler for the option                      |

Below is an example of using Custom Details templates:

<Tabs>

<TabItem value="tsx" label="App.tsx">

```tsx
import { CometChat } from "@cometchat/chat-sdk-react-native";
import {
  CometChatUsers,
  CometChatListStylesInterface,
} from "@cometchat/chat-uikit-react-native";

function App(): React.JSX.Element {
  const [chatUser, setChatUser] = React.useState<CometChat.User | undefined>();

  React.useEffect(() => {
    CometChat.getUser("uid").then((user) => {
      setChatUser(user);
    });
  }, []);

  const getTemplate = ({
    user,
    group,
  }: {
    user?: CometChat.User;
    group?: CometChat.Group;
  }): CometChatDetailsTemplate[] => {
    const blockOption: CometChatDetailsOption = {
      id: "block",
      title: "Block User",
      onClick: ({
        user,
        group,
      }: {
        user?: CometChat.User;
        group?: CometChat.group;
      }) => {
        //code
      },
    };

    const reportOption: CometChatDetailsOption = {
      id: "report",
      title: "Report User",
      onClick: ({
        user,
        group,
      }: {
        user?: CometChat.User;
        group?: CometChat.group;
      }) => {
        //code
      },
    };

    const detailsTemplate: CometChatDetailsTemplate = {
      id: "Block",
      title: "Block/Report",
      titleColor: "red",
      sectionSeparatorColor: "grey",
      itemSeparatorColor: "#6851D6",
      hideItemSeparator: false,
      options: [blockOption, reportOption],
    };

    return [detailsTemplate];
  };

  return (
    <>{chatUser && <CometChatDetails user={chatUser} data={getTemplate} />}</>
  );
}
```

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/details_template_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/details_template_cometchat_screens.png)

</TabItem>

</Tabs>

---

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in DetailsConfiguration"
/>
