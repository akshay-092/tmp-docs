---
sidebar_position: 5
title: Call Buttons
slug: /call-buttons
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `CometChatCallButtons` is a [Component](/ui-kit/android/components-overview#components) provides users with the ability to make calls, access call-related functionalities, and control call settings. Clicking this button typically triggers the call to be placed to the desired recipient.

<!-- ![](../../assets/Call_button_overview_screens.png) -->

---

## Usage

### Integration

`CometChatCallButtons` can be used inside another widget or can be launched to a new screen by adding the following code snippet into the XML layout file.

<Tabs>

<TabItem value="XML" label="XML">
```XML
<com.cometchat.chatuikit.calls.callbutton.CometChatCallButtons
    android:id="@+id/call_button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```
</TabItem>

</Tabs>

If you're defining the `CometChatCallButtons` within the XML code or in your activity or fragment then you'll need to extract them and set them on the User object using the appropriate method.

<Tabs>

<TabItem value="Java" label="Java">
```Java
CometChatCallButtons cometchatCallButtons = binding.callButton; // 'binding' is a view binding instance. Initialize it with `binding = YourXmlFileNameBinding.inflate(getLayoutInflater());` to use views like `binding.callButton` after enabling view binding.

if (userObject != null) {
cometchatCallButtons.setUser(userObject); //Required - CometChat User object
} else if (groupObject != null) {
cometchatCallButtons.setGroup(groupObject); //Required - CometChat Group object
}

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val cometchatCallButtons: CometChatCallButtons = binding.callButton // 'binding' is a view binding instance. Initialize it with `binding = YourXmlFileNameBinding.inflate(layoutInflater)` to use views like `binding.callButton` after enabling view binding.

if (userObject != null) {
    cometchatCallButtons.setUser(userObject) //Required - CometChat User object
} else if (groupObject != null) {
    cometchatCallButtons.setGroup(groupObject) //Required - CometChat Group object
}
````

</TabItem>

</Tabs>

---

### Actions

[Actions](/ui-kit/android/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. SetOnVoiceCallClick

The `setOnVoiceCallClick` action is usually invoked when a voice call is initiated, executing predefined actions. However, by utilizing the provided code snippet, you can effortlessly tailor or override this default behavior to suit your unique requirements.

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatCallButtons.setOnVoiceCallClick(new CometChatCallButtons.OnClick() {
    @Override
    public void onClick(User user, Group group) {
        //TODO
    }
});
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatCallButtons.setOnVoiceCallClick(CometChatCallButtons.OnClick { user, group -> 
    //TODO
})
```
</TabItem>

</Tabs>

##### 2. SetOnVideoCallClick

The `setOnVideoCallClick` action is typically triggered when a video call is initiated, executing default actions. However, with the provided code snippet, you have the flexibility to easily customize or override this default behavior according to your specific preferences or requirements.

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatCallButtons.setOnVideoCallClick(new CometChatCallButtons.OnClick() {
    @Override
    public void onClick(User user, Group group) {
        //TODO
    }
});
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatCallButtons.setOnVideoCallClick(CometChatCallButtons.OnClick { user, group -> 
    //TODO
})
```
</TabItem>

</Tabs>

##### 3. SetOnError

You can customize this behavior by using the provided code snippet to override the `setOnError` and improve error handling.

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatCallButtons.setOnError(new OnError() {
    @Override
    public void onError(Context context, CometChatException e) {
        //TODO   
    }
});
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatCallButtons.setOnError(OnError { context, e ->
    //TODO
})
```
</TabItem>

</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

The CallButton component does not have any exposed filters.

---

### Events

[Events](/ui-kit/android/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

Events emitted by the Call buttons component are as follows.

| Event              | Description                                  |
| ------------------ | -------------------------------------------- |
| **ccCallAccepted** | Triggers when the outgoing call is accepted. |
| **ccCallRejected** | Triggers when the outgoing call is rejected. |

Add `CometChatCallEvents`

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

````

</TabItem>

</Tabs>

Remove `CometChatCallEvents`

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

##### 1. CallButtons Style

You can customize the appearance of the `CometChatCallButtons` Component by applying the `CallButtonsStyle` to it using the following code snippet.

<Tabs>

<TabItem value="Java" label="Java">
```Java
CallButtonsStyle callButtonsStyle = new CallButtonsStyle();
callButtonsStyle.setBorderColor(Color.RED);
callButtonsStyle.setBorderWidth(10);
callButtonsStyle.setBackground(Color.CYAN);
callButtonsStyle.setCornerRadius(40);

cometchatCallButtons.setStyle(callButtonsStyle);

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val callButtonsStyle = CallButtonsStyle()
callButtonsStyle.setBorderColor(Color.RED)
callButtonsStyle.setBorderWidth(10)
callButtonsStyle.setBackground(Color.CYAN)
callButtonsStyle.setCornerRadius(40f)

cometchatCallButtons.setStyle(callButtonsStyle)
````

</TabItem>

</Tabs>

List of properties exposed by `CallButtonsStyle`

| Property          | Description                      | Code                             |
| ----------------- | -------------------------------- | -------------------------------- |
| **Background**    | Used to set the background color | `.setBackground(@ColorInt int)`  |
| **Background**    | Used to set background Drawable  | `.setBackground(Drawable)`       |
| **Border Color**  | Used to set border color         | `.setBorderColor(@ColorInt int)` |
| **Border Width**  | Used to set border               | `.setBorderWidth(int)`           |
| **Corner Radius** | Used to set border radius        | `.setCornerRadius(float)`        |

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatCallButtons.hideVideoCall(true);
cometchatCallButtons.hideVoiceCall(true);
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatCallButtons.hideVideoCall(true)
cometchatCallButtons.hideVoiceCall(true)
```
</TabItem>

</Tabs>

Below is a list of customizations along with corresponding code snippets

| Property            | Description                                 | Code                                    |
| ------------------- | ------------------------------------------- | --------------------------------------- |
| **Group**           | Used to set Group object to the call button | `.set(Group: Group)`                    |
| **Hide Video Call** | Used to hide video call button              | `.set(HideVideoCall: boolean)`          |
| **Hide Voice Call** | Used to hide voice call button              | `.set(HideVoiceCall: boolean)`          |
| **User**            | Used to set User object to the call button  | `.set(User: User)`                      |
| **Video Call Icon** | Used to set video call icon                 | `.set(VideoCallIcon: @DrawableRes int)` |
| **Video Call Text** | Used to set video call text                 | `.set(VideoButtonText: String)`         |
| **Voice Call Icon** | Used to set voice call icon                 | `.set(VoiceCallIcon: @DrawableRes int)` |
| **Voice Call Text** | Used to set voice call text                 | `.set(VoiceButtonText: String)`         |

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

The `CometChatCallButtons` component does not provide additional functionalities beyond this level of customization.

---

## Configurations

[Configurations](/ui-kit/android/components-overview#configurations) offer the ability to customize the properties of each individual component within a Composite Component.

- `Configurations` expose properties that are available in its individual components.

---

#### Outgoing Call

You can customize the properties of the Outgoing Call component by making use of the `OutgoingCallConfiguration`. You can accomplish this by employing the `OutgoingCallConfiguration` as demonstrated below:

<Tabs>

<TabItem value="Java" label="Java">
```Java
OutgoingCallConfiguration outgoingCallConfiguration = new OutgoingCallConfiguration();

cometchatCallButtons.setOutgoingCallConfiguration(outgoingCallConfiguration);

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val outgoingCallConfiguration = OutgoingCallConfiguration()

cometchatCallButtons.setOutgoingCallConfiguration(outgoingCallConfiguration)
````

</TabItem>

</Tabs>

All exposed properties of `OutgoingCallConfiguration` can be found under [Outgoing Call](/ui-kit/android/outgoing-call). Properties marked with the <a data-tooltip-id="my-tooltip-html-prop"><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object.

**Example**

Let's say you want to change the style of the Outgoing Call subcomponent and, in addition, you only want to disable soundForCalls.

You can modify the style using the `OutgoingCallStyle` property, and disable sound for calls using `.disable(soundForCalls: bool)` property.

<Tabs>

<TabItem value="Java" label="Java">
```Java
OutgoingCallStyle outgoingCallStyle = new OutgoingCallStyle();
outgoingCallStyle.setTitleColor(Color.RED);
outgoingCallStyle.setSubTitleColor(Color.RED);
outgoingCallStyle.setCornerRadius(20);

OutgoingCallConfiguration outgoingCallConfiguration = new OutgoingCallConfiguration();
outgoingCallConfiguration.setDisableSoundForCalls(true);
outgoingCallConfiguration.setOutgoingCallStyle(outgoingCallStyle);

cometchatCallButtons.setOutgoingCallConfiguration(outgoingCallConfiguration);

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val outgoingCallStyle = OutgoingCallStyle()
outgoingCallStyle.setTitleColor(Color.RED)
outgoingCallStyle.setSubTitleColor(Color.RED)
outgoingCallStyle.setCornerRadius(20f)

val outgoingCallConfiguration = OutgoingCallConfiguration()
outgoingCallConfiguration.setDisableSoundForCalls(true)
outgoingCallConfiguration.setOutgoingCallStyle(outgoingCallStyle)

cometchatCallButtons.setOutgoingCallConfiguration(outgoingCallConfiguration)
````

</TabItem>

</Tabs>

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available Configuration Object"
/>
