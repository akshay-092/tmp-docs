---
sidebar_position: 12
title: Outgoing Call
slug: /outgoing-call
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `CometChatOutgoingCall` [Component](./01-components-overview.md#components) is a visual representation of a user-initiated call, whether it's a voice or video call. It serves as an interface for managing outgoing calls, providing users with essential options to control the call experience. This component typically includes information about the call recipient, call controls for canceling the call, and feedback on the call status, such as indicating when the call is in progress.

![](../assets/outgoing_call.png)

---

## Usage

### Integration

`CometChatOutgoingCall` being a custom component, offers versatility in its integration. It can be seamlessly launched via button clicks or any user-triggered action, enhancing the overall user experience and facilitating smoother interactions within the application.

Since `CometChatOutgoingCall` can be launched by adding the following code snippet into the XML layout file.

<Tabs>

<TabItem value="XML" label="XML">
```XML
<com.cometchat.chatuikit.calls.outgoingcall.CometChatOutgoingCall
    android:id="@+id/outgoing_call"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```
</TabItem>

</Tabs>

If you're defining the `CometChatOutgoingCall` within the XML code or in your activity or fragment then you'll need to extract them and set the User object or Call object using the appropriate method.

<Tabs>

<TabItem value="Java" label="Java">
```Java
CometChatOutgoingCall cometchatOutgoingCall = binding.outgoingCall; // 'binding' is a view binding instance. Initialize it with `binding = YourXmlFileNameBinding.inflate(getLayoutInflater());` to use views like `binding.outgoingCall` after enabling view binding.

User user = new User();
user.setUid(""); //Required
user.setName(""); //Required
user.setAvatar(""); //Required

cometchatOutgoingCall.setUser(user); //Required - set the user object
//OR
cometchatOutgoingCall.setCall(call); //Required - set the call object

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val cometchatOutgoingCall: CometChatOutgoingCall = binding.outgoingCall // 'binding' is a view binding instance. Initialize it with `binding = YourXmlFileNameBinding.inflate(layoutInflater)` to use views like `binding.outgoingCall` after enabling view binding.


val user = User()
user.uid = "" //Required
user.name = "" //Required
user.avatar = "" //Required

cometchatOutgoingCall.setUser(user) //Required - set the user object
//OR
cometchatOutgoingCall.setCall(call) //Required - set the call object
````

</TabItem>

</Tabs>

##### Activity and Fragment

You can integrate `CometChatOutgoingCall` into your Activity and Fragment by adding the following code snippets into the respective classes.

<Tabs>

<TabItem value="Java (Activity)" label="Java (Activity)">

```Java title="YourActivity.java"
CometChatOutgoingCall cometchatOutgoingCall;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    cometchatOutgoingCall = new CometChatOutgoingCall(this);

    User user = new User();
    user.setUid(""); //Required
    user.setName(""); //Required
    user.setAvatar(""); //Required

    cometchatOutgoingCall.setUser(user); //Required - set the user object
    //OR
    cometchatOutgoingCall.setCall(call); //Required - set the call object

    setContentView(cometchatOutgoingCall);
}
```

</TabItem>

<TabItem value="Kotlin (Activity)" label="Kotlin (Activity)">

```Java title="YourActivity.kt"
private lateinit var cometchatOutgoingCall: CometChatOutgoingCall

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    cometchatOutgoingCall = CometChatOutgoingCall(this)

    val user = User()
    user.uid = "" //Required
    user.name = "" //Required
    user.avatar = "" //Required

    cometchatOutgoingCall.setUser(user) //Required - set the user object
    //OR
    cometchatOutgoingCall.setCall(call) //Required - set the call object

    setContentView(cometchatOutgoingCall)
}
```

</TabItem>

<TabItem value="Java (Fragment)" label="Java (Fragment)">

```Java title="YourFragment.java"
CometChatOutgoingCall cometchatOutgoingCall;

@Override
public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
    cometchatOutgoingCall = new CometChatOutgoingCall(requireContext());

    User user = new User();
    user.setUid(""); //Required
    user.setName(""); //Required
    user.setAvatar(""); //Required

    cometchatOutgoingCall.setUser(user); //Required - set the user object
    //OR
    cometchatOutgoingCall.setCall(call); //Required - set the call object

    return cometchatOutgoingCall;
}
```

</TabItem>

<TabItem value="Kotlin (Fragment)" label="Kotlin (Fragment)">

```Kotlin title="YourFragment.kt"
private lateinit var cometchatOutgoingCall: CometChatOutgoingCall

override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
): View {
    cometchatOutgoingCall = CometChatOutgoingCall(requireContext())

    val user = User()
    user.uid = "" //Required
    user.name = "" //Required
    user.avatar = "" //Required

    cometchatOutgoingCall.setUser(user) //Required - set the user object
    //OR
    cometchatOutgoingCall.setCall(call) //Required - set the call object

    return cometchatOutgoingCall
}
```

</TabItem>

</Tabs>

---

### Actions

[Actions](./01-components-overview.md#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### setOnError

This action doesn't change the behavior of the component but rather listens for any errors that occur in the MessageList component.

<Tabs>

<TabItem value="java" label="Java">
```java title="YourActivity.java"
 cometchatOutgoingCall.setOnError(new OnError() {
                    @Override
                    public void onError(CometChatException cometchatException) {
                        
                    }
                });
```
</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin title="YourActivity.kt"
 cometchatOutgoingCall.setOnError(object : OnError {
    override fun onError(context: Context, e: CometChatException) {
        // Your Exception Handling code.
    }
})
```

</TabItem>

</Tabs>

##### setOnEndCallClick

The `setOnEndCallClick` action is typically triggered when the end call button is clicked, carrying out default actions. However, with the following code snippet, you can effortlessly customize or override this default behavior to meet your specific needs.

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatOutgoingCall.setOnEndCallClick(new OnClick() {
    @Override
    public void onClick() {
        //TODO
    }
});
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatOutgoingCall.setOnEndCallClick(OnClick { 
    //TODO
})
```
</TabItem>

</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

The OutgoingCall component does not have any exposed filters.

---

### Events

[Events](./01-components-overview.md#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

Events emitted by the Outgoing call component are as follows.

| Event                      | Description                                  |
| -------------------------- | -------------------------------------------- |
| **onOutgoingCallAccepted** | Triggers when the outgoing call is accepted. |
| **onOutgoingCallRejected** | Triggers when the outgoing call is rejected. |

##### Add CometChatCallEvents

<Tabs>

<TabItem value="Java" label="Java">
```Java
CometChatCallEvents.addListener("UNIQUE_ID", new CometChatCallEvents() {
    @Override
    public void ccCallAccepted(Call call) {
        super.ccCallAccepted(call);
    }

    @Override
    public void ccCallRejected(Call call) {
        super.ccCallRejected(call);
    }

});

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
CometChatCallEvents.addListener("UNIQUE_ID", object : CometChatCallEvents() {
    override fun ccCallAccepted(call: Call) {
        super.ccCallAccepted(call)
    }

    override fun ccCallRejected(call: Call) {
        super.ccCallRejected(call)
    }
})
````

</TabItem>

</Tabs>

---

##### Remove CometChatCallEvents

<Tabs>

<TabItem value="Java" label="Java">
```Java
CometChatCallEvents.removeListener("LISTENER_ID_USED_FOR_ADDING_THIS_LISTENER");
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
CometChatCallEvents.removeListener("LISTENER_ID_USED_FOR_ADDING_THIS_LISTENER")
```
</TabItem>

</Tabs>

---

## Customization

To fit your app's design requirements, you can customize the appearance of the conversation component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

![](../assets/outgoing_call_styling.png)

```xml title="themes.xml"  
    <style name="CustomAvatarStyle" parent="CometChatAvatarStyle">
        <item name="cometchatAvatarStrokeRadius">8dp</item>
        <item name="cometchatAvatarBackgroundColor">#FBAA75</item>
    </style>
    <style name="CustomOutgoingCall" parent="CometChatOutgoingCallStyle">
        <item name="cometchatOutgoingCallAvatarStyle">@style/CustomAvatarStyle</item>
    </style>
```
<Tabs>

<TabItem value="java" label="Java">

```java
cometChatOutgoingCall.setStyle(R.style.CustomOutgoingCall);
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin
cometChatOutgoingCall.setStyle(R.style.CustomOutgoingCall)
```

</TabItem>

</Tabs>

---
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_outgoing_call.xml).

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

Below is a list of customizations along with corresponding code snippets

| Methods                | Description                                                                      | Code                                        |
| ----------------------- | -------------------------------------------------------------------------------- | ------------------------------------------- |
| **setCall**                | Used to set the Call object against which we need to display the outgoing screen | `.setCall(Call call)`                          |
|**setCallSettingsBuilder**| Sets the CallSettingsBuilder for the outgoing call configuration.|`setCallSettingsBuilder(CometChatCalls.CallSettingsBuilder callSettingsBuilder)`|
| **disableSoundForCalls**    | used to enable/disable sound for outgoing call , default false    | `.disableSoundForMessages(false);`                            |
| **setCustomSoundForCalls**  | used to set custom sound for outgoing calls | `.setCustomSoundForMessages(@RawRes resource);`               |

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

#### setTitleView
Allows setting a custom list item view to be rendered for each conversation in the fetched call list.

Use Cases:
- Display the contact’s name in a unique style.
- Show a call type indicator (Voice Call, Video Call).
- Add status text like "Calling..." or "Ringing...".

<Tabs>

<TabItem value="java" label="Java">
```java title="YourActivity.java"
cometchatOutgoingCall.setTitleView((context, call) -> {
            
    });
```
</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin title="YourActivity.kt"
cometchatOutgoingCall.setTitleView(object : Function3<Context?, Call?, View?> {
            override fun apply(context: Context?, call: Call?): View? {
             
            }
        })
```

</TabItem>
</Tabs>

#### setSubtitleView
Enables customizing the subtitle view, typically used for additional call details.

Use Cases:
- Display call duration if available.
- Show network strength indicators.
- Include a custom message like "Connecting...".

<Tabs>

<TabItem value="java" label="Java">
```java title="YourActivity.java"
cometchatOutgoingCall.setSubtitleView((context, call) -> {
            
    });
```
</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin title="YourActivity.kt"
cometchatOutgoingCall.setSubtitleView(object : Function3<Context?, Call?, View?> {
            override fun apply(context: Context?, call: Call?): View? {
             
            }
        })
```

</TabItem>
</Tabs>

#### setAvatarView
Allows setting a custom leading view, usually used for the contact’s profile picture or avatar.

Use Cases:
- Show a profile picture with an online indicator.
- Display a custom icon based on the call type (Voice/Video).
- Use an animated ring effect around the avatar when calling.

<Tabs>

<TabItem value="java" label="Java">
```java title="YourActivity.java"
cometchatOutgoingCall.setAvatarView((context, call) -> {
            
    });
```
</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin title="YourActivity.kt"
cometchatOutgoingCall.setAvatarView(object : Function3<Context?, Call?, View?> {
            override fun apply(context: Context?, call: Call?): View? {
             
            }
        })
```

</TabItem>
</Tabs>

#### setEndCallView
Defines a custom title view for the end call button, allowing modifications to the call termination UI.

Use Cases:
- Customize the "End Call" button style.
- Add a confirmation pop-up before ending the call.
- Display different icons based on call status (Active, On Hold).

<Tabs>

<TabItem value="java" label="Java">
```java title="YourActivity.java"
cometchatOutgoingCall.setEndCallView((context, call) -> {
            
    });
```
</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin title="YourActivity.kt"
cometchatOutgoingCall.setEndCallView(object : Function3<Context?, Call?, View?> {
            override fun apply(context: Context?, call: Call?): View? {
             
            }
        })
```

</TabItem>
</Tabs>





import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available Configuration Object"
/>
