---
sidebar_position: 3
title: Ongoing Call
slug: /ongoing-call
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `Ongoing Call` is a [Component](./components-overview#components) that provides users with a dedicated interface for managing real-time voice or video conversations. It includes features like a video display area for video calls, call controls for mic and camera management, participant information, call status indicators, and options for call recording and screen-sharing.

![](../../assets/ongoing_calls_overview_web_screens.png)

The `Ongoing Call` is comprised of the following components:

| Components                   | Description                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cometchat-callscreen-wrapper | this component manages the interface for CometChat's call functionality, facilitating structured display and management of ongoing voice or video calls. |

## Usage

### Integration

<Tabs>
<TabItem value="OngoingCallDemo" label="OngoingCallDemo.tsx">

```tsx
import { CometChatOngoingCall } from "@cometchat/chat-uikit-react";
import React from "react";

const OngoingCallDemo = () => {
  return <CometChatOngoingCall />;
};

export default OngoingCallDemo;
```

</TabItem>

<TabItem value="ts" label="App.tsx">

```jsx
import { OngoingCallDemo } from "./OngoingCallDemo";

export default function App() {
  return (
    <div className="App">
      <div>
        <OngoingCallDemo />
      </div>
    </div>
  );
}
```

</TabItem>
</Tabs>

### Actions

[Actions](./components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. onError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the Ongoing component.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='OngoingCallDemo.tsx'
import { CometChatOngoingCall } from "@cometchat/chat-uikit-react";
import React from "react";

const OngoingCallDemo = () => {
  const handleOnError = () => {
    console.log("your custom on error action");
  };

  return <CometChatOngoingCall onError={handleOnError} />;
};

export default OngoingCallDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='OngoingCallDemo.jsx'
import { CometChatOngoingCall } from "@cometchat/chat-uikit-react";
import React from "react";

const OngoingCallDemo = () => {
  const handleOnError = () => {
    console.log("your custom on error action");
  };

  return <CometChatOngoingCall onError={handleOnError} />;
};

export default OngoingCallDemo;
```

</TabItem>
</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a `Component`. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using `RequestBuilders` of Chat SDK.

You can adjust the `callSettingsBuilder` in the `OnGoing Call` Component to customize the OnGoing Call. Numerous options are available to alter the builder to meet your specific needs. For additional details on `CallSettingsBuilder`, please visit [CallSettingsBuilder](/sdk/javascript/direct-call).

**Example**
In the example below, we are applying a filter to the outgoing call to display only audio calls and include a recording button.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='OngoingCallDemo.tsx'
import { CometChatCalls } from "@cometchat/calls-sdk-javascript";
import { CometChatOngoingCall } from "@cometchat/chat-uikit-react";
import React from "react";

const OngoingCallDemo = () => {
  return (
    <CometChatOngoingCall
      callSettingsBuilder={new CometChatCalls.CallSettingsBuilder()
        .setIsAudioOnlyCall(true)
        .showRecordingButton(true)
        .build()}
    />
  );
};

export default OngoingCallDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='OngoingCallDemo.jsx'
import { CometChatCalls } from "@cometchat/calls-sdk-javascript";
import { CometChatOngoingCall } from "@cometchat/chat-uikit-react";
import React from "react";

const OngoingCallDemo = () => {
  return (
    <CometChatOngoingCall
      callSettingsBuilder={new CometChatCalls.CallSettingsBuilder()
        .setIsAudioOnlyCall(true)
        .showRecordingButton(true)
        .build()}
    />
  );
};

export default OngoingCallDemo;
```

</TabItem>
</Tabs>

---

### Events

[Events](./components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The list of events emitted by the OnGoing Call Component is as follows.

| Event           | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| **ccCallEnded** | This event is triggered when the initiated call successfully ends. |

<Tabs>

<TabItem value="js" label="Add Listener">

```javascript
const ccCallEnded = CometChatCallEvents.ccCallEnded.subscribe(
  (call: CometChat.Call) => {
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
ccCallEnded?.unsubscribe();
```

</TabItem>

</Tabs>

---

## Customization

To fit your app's design requirements, you can customize the appearance of the Ongoing Call component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. Ongoing Call Style

To customize the appearance, you can assign a `CallscreenStyle` object to the `Ongoing Call` component.

![](../../assets/ongoing_calls_style_web_screens.png)

**Example**

In this example, we are employing the `ongoingCallStyle`.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='OngoingCallDemo.tsx'
import { CometChatCalls } from "@cometchat/calls-sdk-javascript";
import {
  CometChatOngoingCall,
  CallscreenStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const OngoingCallDemo = () => {
  const ongoingCallStyle = new CallscreenStyle({
    background: "#9764f5",
    maximizeIconTint: "red",
    minimizeIconTint: "white",
  });
  return <CometChatOngoingCall ongoingCallStyle={ongoingCallStyle} />;
};

export default OngoingCallDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='OngoingCallDemo.jsx'
import { CometChatCalls } from "@cometchat/calls-sdk-javascript";
import {
  CometChatOngoingCall,
  CallscreenStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const OngoingCallDemo = () => {
  const ongoingCallStyle = new CallscreenStyle({
    background: "#9764f5",
    maximizeIconTint: "red",
    minimizeIconTint: "white",
  });
  return <CometChatOngoingCall ongoingCallStyle={ongoingCallStyle} />;
};

export default OngoingCallDemo;
```

</TabItem>
</Tabs>

The following properties are exposed by CallscreenStyle:

| Property             | Description                    | Code                         |
| -------------------- | ------------------------------ | ---------------------------- |
| **maxHeight**        | Used to set maximum height     | `maxHeight?: string,`        |
| **maxWidth**         | Used to set maximum width      | `maxWidth?: string;`         |
| **minHeight**        | Used to set minimum height     | `minHeight?: string;`        |
| **minWidth**         | Used to set minimum width      | `minWidth?: string;`         |
| **minimizeIconTint** | Used to set minimize icon tint | `minimizeIconTint?: string;` |
| **maximizeIconTint** | Used to set maximize icon tint | `maximizeIconTint?: string;` |
| **border**           | Used to set border             | `border?: string;`           |
| **borderRadius**     | Used to set border radius      | `borderRadius?: string;`     |
| **background**       | Used to set background color   | `background?: string;`       |

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

Here is a code snippet demonstrating how you can customize the functionality of the `Ongoing Call` component.

<Tabs>
<TabItem value="TypeScript" label="TypeScript">

```tsx title='OngoingCallDemo.tsx'
import { CometChatCalls } from "@cometchat/calls-sdk-javascript";
import {
  CometChatOngoingCall,
  CallscreenStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const OngoingCallDemo = () => {
  const ongoingCallStyle = new CallscreenStyle({
    background: "#9764f5",
    maximizeIconTint: "red",
    minimizeIconTint: "white",
  });
  return (
    <CometChatOngoingCall
      maximizeIconURL="Your Custom Maximize Icon URL"
      minimizeIconURL="Your Custom Minimize Icon URL"
      resizeIconHoverText="Your Custom Icon Hover Text"
    />
  );
};

export default OngoingCallDemo;
```

</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```jsx title='OngoingCallDemo.jsx'
import { CometChatCalls } from "@cometchat/calls-sdk-javascript";
import {
  CometChatOngoingCall,
  CallscreenStyle,
} from "@cometchat/chat-uikit-react";
import React from "react";

const OngoingCallDemo = () => {
  const ongoingCallStyle = new CallscreenStyle({
    background: "#9764f5",
    maximizeIconTint: "red",
    minimizeIconTint: "white",
  });
  return (
    <CometChatOngoingCall
      maximizeIconURL="Your Custom Maximize Icon URL"
      minimizeIconURL="Your Custom Minimize Icon URL"
      resizeIconHoverText="Your Custom Icon Hover Text"
    />
  );
};

export default OngoingCallDemo;
```

</TabItem>
</Tabs>

Default:

![](../../assets/ongoing_calls_functionality_default_web_screens.png)

Custom:

![](../../assets/ongoing_calls_functionality_custom_web_screens.png)

Below is a list of customizations along with corresponding code snippets

| Property                | Description                                                                                                         | Code                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **maximizeIconURL**     | Used to set custom maximize icon URL                                                                                | `maximizeIconURL='Your Custom Maximize Icon URL'`          |
| **minimizeIconURL**     | Used to set custom minimize icon URL                                                                                | `maximizeIconURL='Your Custom Minimize Icon URL'`          |
| **resizeIconHoverText** <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | Used to set custom resize icon hover text | `resizeIconHoverText='Your Custom Resize Icon Hover Text'` |
| **callWorkflow**   <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a> | An enum containing the values `defaultCalling` and `directCalling`. This is used to state the type of call.| `callWorkflow={CallWorkflow.directCalling}` |
| **sessionID**     <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>      | The unique random session ID. In case you are using default call then session ID is available in the `Call` object. | `sessionID='session ID'` |

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

the `OnGoing Call` component does not offer any advanced functionalities beyond this level of customization.

---


import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in OngoingCallConfiguration"
/>