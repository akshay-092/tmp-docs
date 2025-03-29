---
sidebar_position: 10
title: Call Participants
slug: /call-log-participants
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

## Overview

`CometChatCallParticipants` is a [Component](/ui-kit/react-native/components-overview#components) that shows a separate view that displays comprehensive information about Call. This will enable users to easily access details such as the call participants, call details for a more informed communication experience.

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/participants_overview_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/participants_overview_cometchat_screens.png)

</TabItem>

</Tabs>

The `CallParticipants` is comprised of the following components:

| Components                       | Description                                                                                                                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CometChatList                    | a reusable container component having title, search box, customisable background and a List View                            |
| [CometChatListItem](./list-item) | a component that renders data obtained from a Group object on a Tile having a title, subtitle, leading and trailing view    |
| [cometchat-date](./date)         | This Component used to show the date and time. You can also customize the appearance of this widget by modifying its logic. |
| cometchat-button                 | This component represents a button with optional icon and text.                                                             |

## Usage

### Integration

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import { CometChatParticipants } from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

### Actions

[Actions](/ui-kit/react-native/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onItemPress

`onItemPress` is triggered when you click on a ListItem of the of the `CallParticipants` component. It does not have a default behavior. However, you can override its behavior using the following code snippet.

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import { CometChatParticipants } from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const onItemPressHandler = (item: any) => {
    //code
  };

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          onItemPress={onItemPressHandler}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

##### 2. onBack

The `onBack` function is built to respond when you press the back button in the AppBar. The back button is only displayed when the prop `showBackButton` is set to true.

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import { CometChatParticipants } from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const onBackHandler = () => {
    //code
  };

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          onBack={onBackHandler}
          showBackButton={true}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a `Component`. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using `RequestBuilders` of Chat SDK.

The `CallParticipants` component does not have any exposed filters.

---

### Events

[Events](/ui-kit/react-native/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The `CallParticipants` does not produce any events.

---

## Customization

To fit your app's design requirements, you have the ability to customize the appearance of the
`CallParticipants` component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using **Style** you can **customize** the look and feel of the component in your app, These parameters typically control elements such as the **color**, **size**, **shape**, and **fonts** used within the component.

##### 1. CallLogParticipants Style

To customize the appearance, you can assign a `CallLogParticipantsStyle` object to the `CallParticipants` component.

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/participants_style_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/participants_style_cometchat_screens.png)

</TabItem>

</Tabs>

In this example, we are employing the `CallLogParticipantsStyle`.

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import {
  CometChatParticipants,
  CallParticipantsStyleInterface,
} from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const callLogParticipantsStyle: CallParticipantsStyleInterface = {
    titleColor: "#6851D6",
    backgroundColor: "#d2cafa",
  };

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          callLogParticipantsStyle={callLogParticipantsStyle}
          listItemStyle={{ backgroundColor: "#d2cafa" }}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

---

The following properties are exposed by `CallLogParticipantsStyle`:

| Property              | Description                          | Code                                     |
| --------------------- | ------------------------------------ | ---------------------------------------- |
| **border**            | Used to set border                   | `border?: BorderStyleInterface,`         |
| **borderRadius**      | Used to set border radius            | `borderRadius?: number;`                 |
| **backgroundColor**   | Used to set background colour        | `background?: string;`                   |
| **height**            | Used to set height                   | `height?: number` &#124; `string;`       |
| **width**             | Used to set width                    | `width?: number` &#124; `string;`        |
| **titleFont**         | Used to set title font               | `titleFont?: FontStyleInterface,`        |
| **titleColor**        | Used to set title color              | `titleColor?: string;`                   |
| **dateTextFont**      | Used to set date text font           | `dateTextFont?: FontStyleInterface;`     |
| **dateTextColor**     | Used to set date text color          | `dateTextColor?: string;`                |
| **emptyTextColor**    | Used to set empty state text color   | `emptyTextColor?: string;`               |
| **emptyTextFont**     | Used to set empty state text font    | `emptyTextFont?: FontStyleInterface;`    |
| **backIconTint**      | Used to set back icon tint           | `backIconTint?: string;`                 |
| **durationTextFont**  | Used to set call duration text font  | `durationTextFont?: FontStyleInterface;` |
| **durationTextColor** | Used to set call duration text color | `durationTextColor?: string;`            |

##### 2. ListItem Style

If you want to apply customized styles to the `ListItemStyle` component within the `CallParticipants` Component, you can use the following code snippet. For more information, you can refer [ListItem Styles](/ui-kit/react-native/list-item#listitemstyle).

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import {
  CometChatParticipants,
  ListItemStyleInterface,
} from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const listItemStyle: ListItemStyleInterface = {
    titleColor: "red",
    backgroundColor: "#d2cafa",
  };

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          listItemStyle={listItemStyle}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

##### 3. Avatar Style

If you want to apply customized styles to the `Avatar` component within the `CallParticipants` Component, you can use the following code snippet. For more information you can refer [Avatar Styles](/ui-kit/react-native/avatar#avatarstyleinterface).

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import {
  CometChatParticipants,
  ListItemStyleInterface,
} from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const borderStyle: BorderStyleInterface = {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#cc5e95",
  };

  const avatarStyle: AvatarStyleInterface = {
    outerViewSpacing: 5,
    outerView: {
      borderWidth: 2,
      borderStyle: "dotted",
      borderColor: "blue",
    },
    border: borderStyle,
  };

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          avatarStyle={avatarStyle}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

Here is a code snippet demonstrating how you can customize the functionality of the `CallParticipants` component.

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import {
  CometChatParticipants,
  DatePattern,
} from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const datePattern: DatePattern = "dayDateFormat";

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          title="** Custom Title **"
          datePattern={datePattern}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/participants_func_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/participants_func_cometchat_screens.png)

</TabItem>

</Tabs>

---

Below is a list of customizations along with corresponding code snippets

| Property                                                                                                          | Description                                       | Code                                            |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| **title** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>          | Used to set custom title                          | `title?: string`                                |
| **emptyStateText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set custom empty state text               | `emptyStateText='Your Custom Empty State Text'` |
| **datePattern**                                                                                                   | Used to set custom date pattern                   | `datePattern?: DatePattern`                     |
| **call**                                                                                                          | Call data object                                  | `call: CallLog;`                                |
| **showBackButton**                                                                                                | Used to control the visibility of the back button | `showBackButton?: boolean`                      |
| **BackButton**                                                                                                    | Used to set custom back icon                      | `BackButton?: JSX.Element;`                     |
| **data**                                                                                                          | Used to set list of participants                  | `data?: Participant[;`                          |

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

---

#### ListItemView

With this property, you can assign a custom ListItem to the `CallParticipants` Component.

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/participants_list_item_view_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/participants_list_item_view_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import {
  CometChatParticipants,
  CometChatAvatar,
} from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const getCustomListItemView = (props: { participant?: CometChat.User }) => {
    let user = props.participant;
    if (!user) {
      return <></>;
    }

    return (
      <View style={viewStyle}>
        <CometChatAvatar
          image={user.getAvatar() ? { uri: user.getAvatar() } : undefined}
          name={user.getName()}
        />

        <View>
          <Text style={{ color: "black", fontWeight: "bold" }}>
            {user.getName()}
          </Text>
          {/* <Text style={{color: '#667'}}>{user.getStatus()}</Text> */}
        </View>
      </View>
    );
  };

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          ListItemView={getCustomListItemView}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

---

#### SubtitleView

You can customize the subtitle view for each call Participant item to meet your requirements

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/participants_subtitle_view_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/participants_subtitle_view_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import {
  CometChatParticipants,
  CometChatAvatar,
} from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const getCustomSubtitleView = (props: { participant?: CometChat.User }) => {
    return <Text>** Custom Subtitle View **</Text>;
  };

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          SubtitleView={getCustomSubtitleView}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

---

#### TailView

You can customize the tail view for each call participant item to meet your requirements

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/participants_tail_view_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/participants_tail_view_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import {
  CometChatParticipants,
  CometChatAvatar,
} from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const getCustomTailView = (param: any) => {
    return <Image style={{ tintColor: "#6851D6" }} source={Call}></Image>;
  };

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          TailView={getCustomTailView}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

---

#### EmptyStateView

You can set a custom `EmptyStateView` using `EmptyStateView` to match the empty view of your app.

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/participants_empty_view_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/participants_empty_view_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import {
  CometChatParticipants,
  CometChatAvatar,
} from "@cometchat/chat-uikit-react-native";
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-react-native";

function App(): React.JSX.Element {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
  const [callLog, setCallLog] = useState<CallLog>();
  useEffect(() => {
    //code
    CometChatUIKit.login({ uid: "uid" })
      .then(async (user: CometChat.User) => {
        setLoggedInUser(user);
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(1)
          .setCallStatus("cancelled")
          .setAuthToken(user!.getAuthToken())
          .build();

        callLogRequest
          .fetchNext()
          .then((callLogs: CallLog[]) => {
            setCallLog(callLogs[0]);
          })
          .catch(() => {
            //handle error
          });
      })
      .catch((error: any) => {
        //handle error
      });
  }, []);

  const emptyViewStyle: StyleProp<ViewStyle> = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#E8EAE9",
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 30,
  };

  const getEmptyStateView = () => {
    return (
      <View style={emptyViewStyle}>
        <Text style={{ fontSize: 80, color: "black" }}>Empty</Text>
      </View>
    );
  };

  return (
    <>
      {callLog && (
        <CometChatParticipants
          call={callLog}
          data={callLog!.getParticipants()}
          EmptyStateView={getEmptyStateView}
        ></CometChatParticipants>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

---

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in CallLogParticipantsConfiguration"
/>
