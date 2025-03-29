---
sidebar_position: 11
title: Call Log Details
slug: /call-log-details
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

## Overview

The `CallLogDetails` is a [Component](/ui-kit/react-native/components-overview#components) that displays all the information related to a call. This component displays information like user/group information, participants of the call, recordings of the call (if available) & history of all the previous calls. Also, it has buttons to start a new call.

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/call_details_overview_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/call_details_overview_cometchat_screens.png)

</TabItem>

</Tabs>

| Components                                       | Description                                                                                                                                                                                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Call Log History](./call-log-history)           | The `Call Log History` component shows a paginated list of all the calls between the logged-in user & another user or group. This allows the user to see all the calls with a specific user/group they have initiated/received/missed. |
| [Call Log Recordings](./call-log-recording)      | The `Call Log Recordings` component shows a paginated list of recordings of a particular call.                                                                                                                                         |
| [Call Log participants](./call-log-participants) | The `Call Log Participants` component shows a separate view that displays comprehensive information about Call.                                                                                                                        |

## Usage

### Integration

<Tabs>
<TabItem value="typescript" label="App.tsx">

```tsx
import { CometChat, CometChatCalls } from "@cometchat/chat-sdk-react-native";
import { CometChatCallLogDetails } from "@cometchat/chat-uikit-react-native";
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

  return <>{callLog && <CometChatCallLogDetails call={callLog} />}</>;
}
```

</TabItem>
</Tabs>

### Actions

[Actions](/ui-kit/react-native/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onBack

The `onBack` function is built to respond when you press the back button in the AppBar.

By default, this action does not have a predefined behavior. However, you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();

   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
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
   }

   return (
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            onBack={onBackHandler}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

##### 2. onError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the Groups component.

<Tabs>

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();

   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
          })
          .catch(() => {
             //handle error
          });

       })
       .catch((error: any) => {
         //handle error
       });
   }, []);


  const onErrorHandler = (error: CometChat.CometChatException) => {
    //code
  }

   return (
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            onError={onErrorHandler}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a `Component`. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using `RequestBuilders` of Chat SDK.

The `CallLogDetails` component does not have any exposed filters.

### Events

[Events](/ui-kit/react-native/components-overview#events) are emitted by a Component. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The `CallLogDetails` component does not produce any events but its component does.

---

## Customization

To fit your app's design requirements, you can customize the appearance of the Incoming Call component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. CallLogDetails Style

To customize the appearance, you can assign a `CallLogDetailsStyle` object to the `CallLogDetails` component.

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/call_details_style_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/call_details_style_cometchat_screens.png)

</TabItem>

</Tabs>

In this example, we are employing the `CallLogDetailsStyle`.

<Tabs>

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails, CallLogDetailsStyleInterface } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();

   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
          })
          .catch(() => {
             //handle error
          });

       })
       .catch((error: any) => {
         //handle error
       });
   }, []);

   const callLogDetailsStyle : CallLogDetailsStyleInterface = {
     closeIconTint: "red",
     backgroundColor: "#dbd4fa",
   }

   return (
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            callLogDetailsStyle={callLogDetailsStyle}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

The following properties are exposed by `CallLogDetails` Style:

| Property            | Description                                             | Code                               |
| ------------------- | ------------------------------------------------------- | ---------------------------------- |
| **border**          | Used to set border                                      | `border?: BorderStyleInterface,`   |
| **borderRadius**    | Used to set border radius                               | `borderRadius?: number;`           |
| **backgroundColor** | Used to set background colour                           | `background?: string;`             |
| **height**          | Used to set height                                      | `height?: number` &#124; `string;` |
| **width**           | Used to set width                                       | `width?: number` &#124; `string;`  |
| **titleFont**       | Used to customise the font of the title in the app bar  | `titleFont?: FontStyleInterface;`  |
| **titleColor**      | Used to customise the color of the title in the app bar | `titleColor?: string;`             |
| **closeIconTint**   | Used to set the close icon tint                         | `closeIconTint?: string`           |

##### 2. Avatar Style

If you want to apply customized styles to the `Avatar` component within the `CallLogDetails` Component, you can use the following code snippet. For more information you can refer [Avatar Styles](/ui-kit/react-native/avatar#avatarstyleinterface).

<Tabs>

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails, BorderStyleInterface, AvatarStyleInterface } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();


   const callLogDetailsStyle : CallLogDetailsStyleInterface = {
     closeIconTint: "red",
     backgroundColor: "#dbd4fa",
   }

   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
          })
          .catch(() => {
             //handle error
          });

       })
       .catch((error: any) => {
         //handle error
       });
   }, []);


   const borderStyle : BorderStyleInterface =  {
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: '#cc5e95',
   }

   const avatarStyle : AvatarStyleInterface = {
      outerViewSpacing: 5,
      outerView: {
        borderWidth: 2,
        borderStyle: 'dotted',
        borderColor: 'blue',
      },
      border:  borderStyle
   }


   return (
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            avatarStyle={avatarStyle}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

Here is a code snippet demonstrating how you can customize the functionality of the `CallLogDetails` component.

<Tabs>

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();


   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
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
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            title='Custom Title'
            showCloseButton={false}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/call_details_func_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/call_details_func_cometchat_screens.png)

</TabItem>

</Tabs>

Below is a list of customizations along with corresponding code snippets

| Property                                                                                                 | Description                         | Code                                |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------------- |
| **title** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set title                   | `title?: string`                    |
| **closeButtonIconImage**                                                                                 | Used to set close Button Icon Image | `closeButtonIconImage?: ImageType`  |
| **call**                                                                                                 | Used to set the call log            | `declcallineButtonText?: CallLog`   |
| **data**                                                                                                 | Used to set custom details template | `data?: CometChatDetailsTemplate[]` |
| **showCloseButton**                                                                                      | Used to show/hide the close button  | `showCloseButton?: boolean`         |

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

<!-- #### CustomProfileView has to be updated once bug is fixed -->

#### DetailsTemplate

The `CometChatDetailsTemplate` offers a structure for organizing information in the CometChat details component. It serves as a blueprint, defining how user-related details are presented. This structure allows for customization and organization within the CometChat interface.

This defines the structure of template data for the details component.

| Name                      | Type                       | Description                                                            |
| ------------------------- | -------------------------- | ---------------------------------------------------------------------- |
| **id**                    | `string` &#124; `number`   | Identifier for the template option                                     |
| **title**                 | `string`                   | Heading text for the template option                                   |
| **titleColor**            | `string`                   | Sets the foreground color of title text                                |
| **titleFont**             | `FontStyleInterface`       | Sets all the different properties of font for the title text           |
| **titleStyle**            | `TextStyle`                | Sets the title style                                                   |
| **sectionSeparatorColor** | `string`                   | Sets the color of the template separator                               |
| **itemSeparatorColor**    | `string`                   | Sets the color of the template's option separator text                 |
| **hideSectionSeparator**  | `boolean`                  | When set to true, hides the separator for the template                 |
| **hideItemSeparator**     | `boolean`                  | When set to true, hides the separator under each option in a template  |
| **options**               | `CometChatDetailsOption[]` | Sets the [`CometChatDetailsOption`](./call-log-details#detailsoption)s |

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

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails, CometChatDetailsTemplate, CometChatDetailsOption, CometChatListItem } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();


   const callLogDetailsStyle : CallLogDetailsStyleInterface = {
     closeIconTint: "red",
     backgroundColor: "#dbd4fa",
   }

   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
          })
          .catch(() => {
             //handle error
          });

       })
       .catch((error: any) => {
         //handle error
       });
   }, []);


const getTemplate = ({message, user, group}: {
  message: CometChat.BaseMessage;
  user?: CometChat.User | undefined;
  group?: CometChat.Group | undefined;
}) : CometChatDetailsTemplate[] => {
  const blockOption : CometChatDetailsOption = {
    CustomView: () => {
      return (
         <CometChatListItem
            id="report"
            title='Report'
            listItemStyle={{backgroundColor: "#d2cafa", titleColor: "grey"}}
            hideSeparator={false}
         />
      )}
  }

  const reportOption : CometChatDetailsOption = {
     CustomView: () => {
        return (
          <CometChatListItem
              id="block"
              title='Block'
              listItemStyle={{backgroundColor: "#d2cafa", titleColor: "grey"}}
              hideSeparator={false}
          />
        )}
  }

  let detailsTemplate : CometChatDetailsTemplate = {
    id: "Block",
    title: "Block/Report",
    titleColor: "red",
    sectionSeparatorColor: "grey",
    itemSeparatorColor: "#6851D6",
    hideSectionSeparator: false,
    hideItemSeparator: false,
    titleStyle: {
      fontSize: 20,
      paddingLeft: 140,
      paddingRight: 120
    },
    options: [blockOption, reportOption]

  }
  return [detailsTemplate];
}

   return (
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            data={getTemplate}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/call_details_template_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/call_details_template_cometchat_screens.png)

</TabItem>

</Tabs>

---

## Configurations

[Configurations](/ui-kit/react-native/components-overview#configurations) offer the ability to customize the properties of each component within a Composite Component.

CallLogDetails has `CallLogHistory`, `CallLogParticipants` and `CallLogRecordings` component. Hence, each of these components will have its individual `Configuration``.

- `Configurations` expose properties that are available in its individual components.

#### CallLogHistory

You can customize the properties of the Groups component by making use of the `callLogHistoryConfiguration`. You can accomplish this by employing the `callLogHistoryConfiguration` props as demonstrated below:

<Tabs>

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails, CallLogHistoryConfigurationInterface } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();


   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
          })
          .catch(() => {
             //handle error
          });

       })
       .catch((error: any) => {
         //handle error
       });
   }, []);

   const callLogsHistoryConfiguration : CallLogHistoryConfigurationInterface = {
      //override properties
   }



   return (
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            callLogHistoryConfiguration={callLogsHistoryConfiguration}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

All exposed properties of `GroupsConfiguration` can be found under [Groups](./groups#functionality). Properties marked with the <a data-tooltip-id="my-tooltip-html-prop"><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object.

**Example**

Let's say you want to change the style of the Groups subcomponent and, in addition, you only want to display the Group List based on only joined groups and setting the limit to 3.

You can modify the `CallLogHistory` list item style using the `ListItemStyle` property.

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/call_details_history_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/call_details_history_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails, CallLogHistoryConfigurationInterface } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();


   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
          })
          .catch(() => {
             //handle error
          });

       })
       .catch((error: any) => {
         //handle error
       });
   }, []);

   const callLogsHistoryConfiguration : CallLogHistoryConfigurationInterface = {
     listItemStyle: {
       backgroundColor: "#d2cafa"
     }
   }



   return (
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            callLogHistoryConfiguration={callLogsHistoryConfiguration}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

---

#### CallLogParticipants

You can customize the properties of the Messages component by making use of the messagesConfiguration. You can accomplish this by employing the `CallLogParticipantsConfiguration` props as demonstrated below:

<Tabs>

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails, CallLogParticipantsConfigurationInterface } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();


   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
          })
          .catch(() => {
             //handle error
          });

       })
       .catch((error: any) => {
         //handle error
       });
   }, []);

   const callLogParticipantsConfiguration : CallLogParticipantsConfigurationInterface = {
      //override properties
   }



   return (
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            callLogParticipantsConfiguration={callLogParticipantsConfiguration}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

All exposed properties of `CallLogParticipantsConfiguration` can be found under [Messages](./messages#functionality). Properties marked with the <a data-tooltip-id="my-tooltip-html-prop"><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object.

**Example**

Let's say you want to change the style of the Messages subcomponent and, in addition, you only want to hide message header.

You can modify the `CallLogParticipants` list item style using the `ListItemStyle` property.

<Tabs>

<TabItem value="iOS" label="iOS">

![](../../assets/iOS/call_details_participants_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../../assets/android/call_details_participants_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>

<TabItem value="App.tsx" label="App.tsx">

```tsx
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatCallLogDetails, CallLogParticipantsConfigurationInterface } from '@cometchat/chat-uikit-react-native';
import {CallLog, CallLogRequestBuilder} from '@cometchat/calls-sdk-react-native';

function App(): React.JSX.Element {

   const [loggedInUser, setLoggedInUser] = useState<CometChat.User>();
   const [callLog, setCallLog] = useState<CallLog>();


   useEffect(() => {
	   //code
     CometChatUIKit.login({uid: 'uid'})
       .then(async (user: CometChat.User) => {

          setLoggedInUser(user);
          const callLogRequest = new CallLogRequestBuilder().setLimit(1).setCallStatus('cancelled').setAuthToken(user!.  getAuthToken()).build();

          callLogRequest.fetchNext()
          .then((callLogs: CallLog[]) => {
             setCallLog(callLogs[0])
          })
          .catch(() => {
             //handle error
          });

       })
       .catch((error: any) => {
         //handle error
       });
   }, []);

   const callLogParticipantsConfiguration : CallLogParticipantsConfigurationInterface = {
     listItemStyle: {
       backgroundColor: "#d2cafa"
     },
   }


   return (
      { callLog &&
        <CometChatCallLogDetails
            call={callLog}
            callLogParticipantsConfiguration={callLogParticipantsConfiguration}
        />
      }
   );
 }

```

</TabItem>
</Tabs>

---

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in CallLogDetailsConfiguration"
/>
