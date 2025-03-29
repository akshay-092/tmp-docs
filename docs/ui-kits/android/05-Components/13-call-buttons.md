---
sidebar_position: 13
title: Call Buttons
slug: /call-buttons
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `CometChatCallButtons` is a [Component](./01-components-overview.md#components) provides users with the ability to make calls, access call-related functionalities, and control call settings. Clicking this button typically triggers the call to be placed to the desired recipient.

![](../assets/call_button.png)

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

[Actions](./01-components-overview.md#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### setOnVoiceCallClick

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

##### setOnVideoCallClick

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

##### setOnError

You can customize this behavior by using the provided code snippet to override the `setOnError` and improve error handling.

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatCallButtons.setOnError(new OnError() {
    @Override
    public void onError(CometChatException e) {
        //TODO   
    }
});
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatCallButtons.setOnError(OnError {  e ->
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

[Events](./01-components-overview.md#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

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

![](../assets/call_button_styling.png)

```xml title="themes.xml"
    <style name="CustomCallButtonStyle" parent="CometChatCallButtonsStyle">
        <item name="cometchatCallButtonsVideoCallIconTint">#F76808</item>
        <item name="cometchatCallButtonsVoiceCallIconTint">#F76808</item>
    </style>
```

<Tabs>

<TabItem value="java" label="Java">

```java
cometChatCallButtons.setStyle(R.style.CustomCallButtonStyle);
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin
cometChatCallButtons.setStyle(R.style.CustomCallButtonStyle)
```

</TabItem>

</Tabs>

---
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_call_buttons.xml).

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

Below is a list of customizations along with corresponding code snippets

| Property            | Description                                 | Code                                    |
| ------------------- | ------------------------------------------- | --------------------------------------- |
| **setUser**            | Used to set User object to the call button  | `.setUser(User user)`                      |
| **setGroup**           | Used to set Group object to the call button | `.setGroup(group)`                    |
| **setVideoCallButtonVisibility** | Used to hide video call button              | `.setVideoCallButtonVisibility(View.GONE)`          |
| **setVoiceCallButtonVisibility** | Used to hide voice call button              | `.setVoiceCallButtonVisibility(View.GONE)`          |
| **setCallSettingsBuilder** | Sets the call settings builder callback function. This callback is responsible for configuring the call settings based on the user, group, and call type (audio/video).         | `.setCallSettingsBuilder(Function3<User, Group, Boolean, CometChatCalls.CallSettingsBuilder> callSettingsBuilder)` |
| **setOutgoingCallConfiguration** | Sets the configurations for outgoing call component.         | `.setOutgoingCallConfiguration(new OutgoingCallConfiguration)` |

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

All exposed properties of `OutgoingCallConfiguration` can be found under [Outgoing Call](./12-outgoing-call.md). Properties marked with the <a data-tooltip-id="my-tooltip-html-prop"><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object.
