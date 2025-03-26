---
sidebar_position: 9
title: Call Log Recordings
slug: /call-log-recording
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `CometChatCallLogRecordings` is a [Component](./components-overview#components) that shows a paginated list of recordings of a particular call. This allows the user to see all the recordings along with the duration as well as a download link using which one can download the recording.

![](../../assets/call_log_recordings_overview_web_screens.png)

The `Call Log Recordings` is comprised of the following components:

| Components                       | Description                                                                                                                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CometChatList                    | a reusable container component having title, search box, customisable background and a List View                            |
| [CometChatListItem](./list-item) | a component that renders data obtained from a Group object on a Tile having a title, subtitle, leading and trailing view    |
| [cometchat-date](./date)         | This Component used to show the date and time. You can also customize the appearance of this widget by modifying its logic. |
| cometchat-button                 | This component represents a button with optional icon and text.                                                             |

## Usage

### Integration

<Tabs>
<TabItem value="CallLogRecordingsDemo" label="CallLogRecordingsDemo.tsx">

```tsx
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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
  return <CometChatCallLogRecordings call={callLog} />;
};

export default CallLogRecordingsDemo;
```

</TabItem>

<TabItem value="ts" label="App.tsx">

```jsx
import { CallLogRecordingsDemo } from "./CallLogRecordingsDemo";

export default function App() {
  return (
    <div className="App">
      <div>
        <CallLogRecordingsDemo />
      </div>
    </div>
  );
}
```

</TabItem>
</Tabs>

### Actions

[Actions](./components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onBackClick

`onBackClick` is triggered when you click the Back button Icon of the `Call Log Participants` component. It does not have a default behavior. However, you can override its behavior using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='CallLogRecordingsDemo.tsx'
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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

  const handleOnBackClick = () => {
    //your custom on back click action
  };

  return (
    <CometChatCallLogRecordings
      call={callLog}
      onBackClick={handleOnBackClick}
    />
  );
};

export default CallLogRecordingsDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='CallLogRecordingsDemo.jsx'

import { CallLogRequestBuilder } from '@cometchat/calls-sdk-javascript';
import { CometChatCallLogRecordings, CometChatUIKit } from '@cometchat/chat-uikit-react';
import React from 'react'

const CallLogRecordingsDemo = () => {

    const [callLog, setCallLog] = React.useState();

    React.useEffect(() => {
        //code
        CometChatUIKit.login('uid')
            .then(async (user) => {

                const callLogRequest = new CallLogRequestBuilder().setLimit(10).setAuthToken(user!.getAuthToken()).build();

                callLogRequest.fetchNext()
                    .then((callLogs) => {
                        setCallLog(callLogs[0])
                    })
                    .catch(() => {
                        //handle error
                    });

            })
            .catch((error) => {
                //handle error
            });
    }, []);

  const handleOnBackClick = () =>{
    //your custom on back click action
  }

    return (
        <CometChatCallLogRecordings
            call={callLog}
            onBackClick={handleOnBackClick}
        />
    )
}

export default CallLogRecordingsDemo;

```

</TabItem>
</Tabs>

##### 2. onItemClick

`onItemClick` is triggered when you click on a ListItem of the of the `Call Log Participants` component. It does not have a default behavior. However, you can override its behavior using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='CallLogRecordingsDemo.tsx'
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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

  const handleOnItemClick = () => {
    //your custom on item click action
  };

  return (
    <CometChatCallLogRecordings
      call={callLog}
      onItemClick={handleOnItemClick}
    />
  );
};

export default CallLogRecordingsDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='CallLogRecordingsDemo.jsx'

import { CallLogRequestBuilder } from '@cometchat/calls-sdk-javascript';
import { CometChatCallLogRecordings, CometChatUIKit } from '@cometchat/chat-uikit-react';
import React from 'react'

const CallLogRecordingsDemo = () => {

    const [callLog, setCallLog] = React.useState();

    React.useEffect(() => {
        //code
        CometChatUIKit.login('uid')
            .then(async (user) => {

                const callLogRequest = new CallLogRequestBuilder().setLimit(10).setAuthToken(user!.getAuthToken()).build();

                callLogRequest.fetchNext()
                    .then((callLogs) => {
                        setCallLog(callLogs[0])
                    })
                    .catch(() => {
                        //handle error
                    });

            })
            .catch((error) => {
                //handle error
            });
    }, []);

  const handleOnItemClick = () =>{
    //your custom on item click action
  }

    return (
        <CometChatCallLogRecordings
            call={callLog}
            onItemClick={handleOnItemClick}
        />
    )
}

export default CallLogRecordingsDemo;

```

</TabItem>
</Tabs>

##### 2. onDownloadClick

`onDownloadClick` is triggered when you click on the download of the of the `Call Log Recordings` component. you can override its behavior using the following code snippet.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='CallLogRecordingsDemo.tsx'
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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

  const handleOnDownloadClick = () => {
    //your custom on back click action
  };

  return (
    <CometChatCallLogRecordings
      call={callLog}
      onDownloadClick={handleOnDownloadClick}
    />
  );
};

export default CallLogRecordingsDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='CallLogRecordingsDemo.jsx'

import { CallLogRequestBuilder } from '@cometchat/calls-sdk-javascript';
import { CometChatCallLogRecordings, CometChatUIKit } from '@cometchat/chat-uikit-react';
import React from 'react'

const CallLogRecordingsDemo = () => {

    const [callLog, setCallLog] = React.useState();

    React.useEffect(() => {
        //code
        CometChatUIKit.login('uid')
            .then(async (user) => {

                const callLogRequest = new CallLogRequestBuilder().setLimit(10).setAuthToken(user!.getAuthToken()).build();

                callLogRequest.fetchNext()
                    .then((callLogs) => {
                        setCallLog(callLogs[0])
                    })
                    .catch(() => {
                        //handle error
                    });

            })
            .catch((error) => {
                //handle error
            });
    }, []);

    const handleOnDownloadClick = () => {
        //your custom on back click action
    }

    return (
        <CometChatCallLogRecordings
            call={callLog}
            onDownloadClick={handleOnDownloadClick}
        />
    )
}

export default CallLogRecordingsDemo;

```

</TabItem>
</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a `Component`. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using `RequestBuilders` of Chat SDK.

The `Call Log Recordings` component does not have any exposed filters.

---

### Events

[Events](./components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The `Call Log Recordings` does not produce any events.

---

## Customization

To fit your app's design requirements, you have the ability to customize the appearance of the
`CallLogRecordings` component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using **Style** you can **customize** the look and feel of the component in your app, These parameters typically control elements such as the **color**, **size**, **shape**, and **fonts** used within the component.

##### 1. CallLogRecordings Style

To customize the appearance, you can assign a `CallLogRecordingsStyle` object to the `Call Log Recordings` component.

**Example**

In this example, we are employing the `CallLogRecordingsStyle`.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='CallLogRecordingsDemo.tsx'
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
  CallLogRecordingsStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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

  const callLogRecordingsStyle = new CallLogRecordingsStyle({
    background: "#f8f5ff",
    titleColor: "#6f3ae0",
    dateTextColor: "#6f34ed",
    recordingDurationColor: "#6f34ed",
  });

  return (
    <CometChatCallLogRecordings
      call={callLog}
      callLogRecordingsStyle={callLogRecordingsStyle}
    />
  );
};

export default CallLogRecordingsDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='CallLogRecordingsDemo.jsx'

import { CallLogRequestBuilder } from '@cometchat/calls-sdk-javascript';
import { CometChatCallLogRecordings, CometChatUIKit, CallLogRecordingsStyle } from '@cometchat/chat-uikit-react';
import React from 'react'

const CallLogRecordingsDemo = () => {

    const [callLog, setCallLog] = React.useState();

    React.useEffect(() => {
        //code
        CometChatUIKit.login('uid')
            .then(async (user) => {

                const callLogRequest = new CallLogRequestBuilder().setLimit(10).setAuthToken(user!.getAuthToken()).build();

                callLogRequest.fetchNext()
                    .then((callLogs) => {
                        setCallLog(callLogs[0])
                    })
                    .catch(() => {
                        //handle error
                    });

            })
            .catch((error) => {
                //handle error
            });
    }, []);

    const callLogRecordingsStyle = new CallLogRecordingsStyle({
        background: '#f8f5ff',
        titleColor: '#6f3ae0',
        dateTextColor: '#6f34ed',
        recordingDurationColor:'#6f34ed',
    });

    return (
        <CometChatCallLogRecordings
            call={callLog}
            callLogRecordingsStyle={callLogRecordingsStyle}
        />
    )
}

export default CallLogRecordingsDemo;

```

</TabItem>
</Tabs>

![](../../assets/call_log_recordings_style_web_screens.png)

---

The following properties are exposed by `CallLogRecordingsStyle`:

| Property                   | Description                          | Code                               |
| -------------------------- | ------------------------------------ | ---------------------------------- |
| **border**                 | Used to set border                   | `border?: string,`                 |
| **borderRadius**           | Used to set border radius            | `borderRadius?: string;`           |
| **background**             | Used to set background colour        | `background?: string;`             |
| **height**                 | Used to set height                   | `height?: string;`                 |
| **width**                  | Used to set width                    | `width?: string;`                  |
| **titleFont**              | Used to set title font               | `titleFont?: string,`              |
| **titleColor**             | Used to set title color              | `titleColor?: string;`             |
| **backIconTint**           | Used to set back icon tint           | `backIconTint?: string;`           |
| **downloadIconTint**       | Used to set download icon tint       | `downloadIconTint?: string;`       |
| **recordingDurationFont**  | Used to set recording duration font  | `recordingDurationFont?: string;`  |
| **recordingDurationColor** | Used to set recording duration color | `recordingDurationColor?: string;` |
| **dateTextFont**           | Used to set date text font           | `dateTextFont?: string;`           |
| **dateTextColor**          | Used to set date text color          | `dateTextColor?: string;`          |

##### 2. ListItem Style

If you want to apply customized styles to the `ListItemStyle` component within the `Call Log Recordings` Component, you can use the following code snippet. For more information, you can refer [ListItem Styles](./list-item#listitemstyle).

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='CallLogRecordingsDemo.tsx'
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
  ListItemStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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

  const listItemStyle = new ListItemStyle({
    background: "#f8f5ff",
    activeBackground: "#6f34ed",
    titleColor: "#6f34ed",
  });

  return (
    <CometChatCallLogRecordings call={callLog} listItemStyle={listItemStyle} />
  );
};

export default CallLogRecordingsDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='CallLogRecordingsDemo.jsx'

import { CallLogRequestBuilder } from '@cometchat/calls-sdk-javascript';
import { CometChatCallLogRecordings, CometChatUIKit, ListItemStyle } from '@cometchat/chat-uikit-react';
import React from 'react'

const CallLogRecordingsDemo = () => {

    const [callLog, setCallLog] = React.useState();

    React.useEffect(() => {
        //code
        CometChatUIKit.login('uid')
            .then(async (user) => {

                const callLogRequest = new CallLogRequestBuilder().setLimit(10).setAuthToken(user!.getAuthToken()).build();

                callLogRequest.fetchNext()
                    .then((callLogs) => {
                        setCallLog(callLogs[0])
                    })
                    .catch(() => {
                        //handle error
                    });

            })
            .catch((error) => {
                //handle error
            });
    }, []);

    const listItemStyle = new ListItemStyle({
        background: '#f8f5ff',
        activeBackground: '#6f34ed',
        titleColor: '#6f34ed'
    });

    return (
        <CometChatCallLogRecordings
            call={callLog}
            listItemStyle={listItemStyle}
        />
    )
}

export default CallLogRecordingsDemo;

```

</TabItem>
</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

Here is a code snippet demonstrating how you can customize the functionality of the `Call Log Recordings` component.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='CallLogRecordingsDemo.tsx'
import {
  CallLog,
  CallLogRequestBuilder,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
  DatePatterns,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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
    <CometChatCallLogRecordings
      call={callLog}
      title="Your Custom Title"
      datePattern={DatePatterns.DateTime}
      downloadIconUrl="Your Custom Download Icon"
    />
  );
};

export default CallLogRecordingsDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='CallLogRecordingsDemo.jsx'

import { CallLogRequestBuilder } from '@cometchat/calls-sdk-javascript';
import { CometChatCallLogRecordings, CometChatUIKit, DatePatterns } from '@cometchat/chat-uikit-react';
import React from 'react'

const CallLogRecordingsDemo = () => {

    const [callLog, setCallLog] = React.useState();

    React.useEffect(() => {
        //code
        CometChatUIKit.login('uid')
            .then(async (user) => {

                const callLogRequest = new CallLogRequestBuilder().setLimit(10).setAuthToken(user!.getAuthToken()).build();

                callLogRequest.fetchNext()
                    .then((callLogs) => {
                        setCallLog(callLogs[0])
                    })
                    .catch(() => {
                        //handle error
                    });

            })
            .catch((error) => {
                //handle error
            });
    }, []);

    return (
        <CometChatCallLogRecordings
            call={callLog}
            title='Your Custom Title'
			datePattern={DatePatterns.DateTime}
			downloadIconUrl='Your Custom Download Icon'
        />
    )
}

export default CallLogRecordingsDemo;

```

</TabItem>
</Tabs>

Default:

![](../../assets/call_log_recordings_functionality_default_web_screens.png)

Custom:

![](../../assets/call_log_recordings_functionality_custom_web_screens.png)

---

Below is a list of customizations along with corresponding code snippets

| Property               | Description                                                                  | Code                                         |
| ---------------------- | ---------------------------------------------------------------------------- | -------------------------------------------- |
| **title**              | Used to set custom title                                                     | `title='Your Custom Title'`                  |
| **backIconUrl**        | Used to set custom back icon URL                                             | `backIconUrl='custom back icon url'`         |
| **downloadIconUrl**    | Used to set custom download icon URL                                         | `downloadIconUrl='custom download icon url'` |
| **datePattern**        | Used to set custom date pattern                                              | `datePattern={DatePatterns.DayDateTime}`     |
| **call**               | Call data object                                                             | `call: CallLog;`                             |
| **hideDownloadButton** | used to control the visibility of the download button in the user interface. | `hideDownloadButton={true}`                  |

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

---

#### ListItemView

With this property, you can assign a custom ListItem to the `Call Log Recordings` Component.

```jsx
listItemView = { getListItemView };
```

**Example**

Default:
![](../../assets/call_log_recordings_listitemview_defailt_web_screens.png)

Custom:
![](../../assets/call_log_recordings_listitemview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='CallLogRecordingsDemo.tsx'
import {
  CallLog,
  CallLogRequestBuilder,
  Recording,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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

  const getListItemView = (recording: Recording) => {
    return (
      <div
        style={{
          border: "1px solid #E0E0E0",
          borderRadius: "10px",
          background: "#f8f7ff",
          color: "#000000",
          padding: "10px",
          textAlign: "left",
        }}
      >
        {recording.getEndTime()}
      </div>
    );
  };

  return (
    <CometChatCallLogRecordings call={callLog} listItemView={getListItemView} />
  );
};

export default CallLogRecordingsDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='CallLogRecordingsDemo.jsx'

import { CallLogRequestBuilder } from '@cometchat/calls-sdk-javascript';
import { CometChatCallLogRecordings, CometChatUIKit } from '@cometchat/chat-uikit-react';
import React from 'react'

const CallLogRecordingsDemo = () => {

    const [callLog, setCallLog] = React.useState();

    React.useEffect(() => {
        //code
        CometChatUIKit.login('uid')
            .then(async (user) => {

                const callLogRequest = new CallLogRequestBuilder().setLimit(10).setAuthToken(user!.getAuthToken()).build();

                callLogRequest.fetchNext()
                    .then((callLogs) => {
                        setCallLog(callLogs[0])
                    })
                    .catch(() => {
                        //handle error
                    });

            })
            .catch((error) => {
                //handle error
            });
    }, []);

	const getListItemView = (recording) => {
        return (
            <div style={{ border: '1px solid #E0E0E0', borderRadius: '10px', background: '#f8f7ff', color: '#000000', padding: '10px', textAlign: 'left' }}>{recording.getEndTime()}</div>
        );
    };

    return (
        <CometChatCallLogRecordings
            call={callLog}
            listItemView={getListItemView}
        />
    )
}

export default CallLogRecordingsDemo;

```

</TabItem>
</Tabs>

---

#### SubtitleView

You can customize the subtitle view for each call log Recordings item to meet your requirements

```jsx
subtitleView = { getSubtitleView };
```

Default:
![](../../assets/call_log_recordings_subtitleview_default_web_screens.png)

Custom:
![](../../assets/call_log_recordings_subtitleview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='CallLogRecordingsDemo.tsx'
import {
  CallLog,
  CallLogRequestBuilder,
  Recording,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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

  const getSubtitleView = (recording: Recording): JSX.Element => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "2px",
          fontSize: "10px",
        }}
      >
        <div style={{ color: "gray", fontSize: "15px" }}>
          {recording.getDuration()}
        </div>
      </div>
    );
  };

  return (
    <CometChatCallLogRecordings call={callLog} subtitleView={getSubtitleView} />
  );
};

export default CallLogRecordingsDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='CallLogRecordingsDemo.jsx'

import { CallLogRequestBuilder } from '@cometchat/calls-sdk-javascript';
import { CometChatCallLogRecordings, CometChatUIKit } from '@cometchat/chat-uikit-react';
import React from 'react'

const CallLogRecordingsDemo = () => {

    const [callLog, setCallLog] = React.useState();

    React.useEffect(() => {
        //code
        CometChatUIKit.login('uid')
            .then(async (user) => {

                const callLogRequest = new CallLogRequestBuilder().setLimit(10).setAuthToken(user!.getAuthToken()).build();

                callLogRequest.fetchNext()
                    .then((callLogs) => {
                        setCallLog(callLogs[0])
                    })
                    .catch(() => {
                        //handle error
                    });

            })
            .catch((error) => {
                //handle error
            });
    }, []);

	const getSubtitleView = (recording) => {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "left",
                    padding: "2px",
                    fontSize: "10px"
                }}
            >
                <div style={{ color: "gray", fontSize: '15px' }}>
                    {recording.getDuration()}
                </div>
            </div>
        );
    };

    return (
        <CometChatCallLogRecordings
            call={callLog}
            subtitleView={getSubtitleView}
        />
    )
}

export default CallLogRecordingsDemo;

```

</TabItem>
</Tabs>

---

#### TailView

You can customize the tail view for each call log Recordings item to meet your requirements

```jsx
tailView = { getTailView };
```

Default:
![](../../assets/call_log_recordings_tailview_default_web_screens.png)

Custom:
![](../../assets/call_log_recordings_tailview_custom_web_screens.png)

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='CallLogRecordingsDemo.tsx'
import {
  CallLog,
  CallLogRequestBuilder,
  Recording,
} from "@cometchat/calls-sdk-javascript";
import {
  CometChatCallLogRecordings,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import React from "react";

const CallLogRecordingsDemo = () => {
  const [callLog, setCallLog] = React.useState<CallLog>();

  React.useEffect(() => {
    //code
    CometChatUIKit.login("uid")
      .then(async (user: CometChat.User) => {
        const callLogRequest = new CallLogRequestBuilder()
          .setLimit(10)
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

  function getTailView(recording: Recording): JSX.Element {
    return (
      <div style={{ color: "#e8e4f7", padding: "5px" }}>
        {recording.getDuration()}
      </div>
    );
  }

  return <CometChatCallLogRecordings call={callLog} tailView={getTailView} />;
};

export default CallLogRecordingsDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='CallLogRecordingsDemo.jsx'

import { CallLogRequestBuilder } from '@cometchat/calls-sdk-javascript';
import { CometChatCallLogRecordings, CometChatUIKit } from '@cometchat/chat-uikit-react';
import React from 'react'

const CallLogRecordingsDemo = () => {

    const [callLog, setCallLog] = React.useState();

    React.useEffect(() => {
        //code
        CometChatUIKit.login('uid')
            .then(async (user) => {

                const callLogRequest = new CallLogRequestBuilder().setLimit(10).setAuthToken(user!.getAuthToken()).build();

                callLogRequest.fetchNext()
                    .then((callLogs) => {
                        setCallLog(callLogs[0])
                    })
                    .catch(() => {
                        //handle error
                    });

            })
            .catch((error) => {
                //handle error
            });
    }, []);

	function getTailView(recording) {

        return (
            <div style={{ color: '#e8e4f7', padding: '5px' }}>{recording.getDuration()}</div>
        )
    };

    return (
        <CometChatCallLogRecordings
            call={callLog}
            tailView={getTailView}
        />
    )
}

export default CallLogRecordingsDemo;

```

</TabItem>
</Tabs>

---
