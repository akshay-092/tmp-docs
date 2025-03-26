---
sidebar_position: 7
title: Call Log Details
slug: /call-log-details
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `CometChatCallLogDetails` is a [Component](/ui-kit/android/components-overview#components) that displays all the information related to a call. This component displays information like user/group information, participants of the call, recordings of the call (if available) & history of all the previous calls. Also, it has buttons to start a new call.

![](../../assets/call_logs_details_overview_cometchat_screens.png)

## Usage

### Integration

`CometChatCallLogDetails` is a Composite component, that can be seamlessly presented within your application. To display the details of a CallLog, you simply need to pass the corresponding CallLog object to the `CometChatCallLogDetails` instance using its `setCall()` property. This enables you to efficiently showcase specific call log details within your application's interface.

Since `CometChatCallLogDetails` can be launched by adding the following code snippet into the XML layout file.

<Tabs>

<TabItem value="XML" label="XML">
```XML
<com.cometchat.chatuikit.calls.calldetails.CometChatCallLogDetails
    android:id="@+id/details"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```
</TabItem>

</Tabs>

If you're defining the `CometChatCallLogDetails` within the XML code or in your activity or fragment then you'll need to extract them and set the Call object using the appropriate method.

<Tabs>

<TabItem value="Java" label="Java">
```Java
CometChatCallLogDetails cometchatCallLogDetails = binding.details; // 'binding' is a view binding instance. Initialize it with `binding = YourXmlFileNameBinding.inflate(getLayoutInflater());` to use views like `binding.details` after enabling view binding.

cometchatCallLogDetails.setCall(callLog); //Required - call log object

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val cometchatCallLogDetails: CometChatCallLogDetails = binding.details // 'binding' is a view binding instance. Initialize it with `binding = YourXmlFileNameBinding.inflate(layoutInflater)` to use views like `binding.details` after enabling view binding.

cometchatCallLogDetails.setCall(callLog) //Required - call log object
````

</TabItem>

</Tabs>

##### Activity and Fragment

You can integrate `CometChatCallLogDetails` into your Activity and Fragment by adding the following code snippets into the respective classes.

<Tabs>

<TabItem value="Java (Activity)" label="Java (Activity)">

```Java title="YourActivity.java"
CometChatCallLogDetails cometchatCallLogDetails;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    cometchatCallLogDetails = new CometChatCallLogDetails(this);
    cometchatCallLogDetails.setCall(callLog); //Required - call log object

    setContentView(cometchatCallLogDetails);
}
```

</TabItem>

<TabItem value="Kotlin (Activity)" label="Kotlin (Activity)">

```Java title="YourActivity.kt"
private lateinit var cometchatCallLogDetails: CometChatCallLogDetails

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    cometchatCallLogDetails = CometChatCallLogDetails(this)
    cometchatCallLogDetails.setCall(callLog) //Required - call log object

    setContentView(cometchatCallLogDetails)
}
```

</TabItem>

<TabItem value="Java (Fragment)" label="Java (Fragment)">

```Java title="YourFragment.java"
CometChatCallLogDetails cometchatCallLogDetails;

@Override
public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
    cometchatCallLogDetails = new CometChatCallLogDetails(requireActivity());
    cometchatCallLogDetails.setCall(callLog); //Required - call log object

    return cometchatCallLogDetails;
}
```

</TabItem>

<TabItem value="Kotlin (Fragment)" label="Kotlin (Fragment)">

```Kotlin title="YourFragment.kt"
private lateinit var cometchatCallLogDetails: CometChatCallLogDetails

override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
): View {
    cometchatCallLogDetails = CometChatCallLogDetails(requireActivity())
    cometchatCallLogDetails.setCall(callLog) //Required - call log object

    return cometchatCallLogDetails
}
```

</TabItem>

</Tabs>

---

### Actions

[Actions](/ui-kit/android/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

The `CometChatCallLogDetails` component does not have any exposed actions.

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

The `CometChatCallLogDetails` component does not have any exposed filters.

---

### Events

[Events](/ui-kit/android/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The `CometChatCallLogDetails` component does not have any exposed events.

---

## Customization

To fit your app's design requirements, you can customize the appearance of the conversation component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. CallLogDetails Style

You can customize the appearance of the `CometChatCallLogDetails` Component by applying the `CallLogDetailsStyle` to it using the following code snippet.

<!-- ![](../../assets/call_log_details_style_screens.png) -->

<Tabs>

<TabItem value="Java" label="Java">
```Java
CallLogDetailsStyle callLogDetailsStyle = new CallLogDetailsStyle();
callLogDetailsStyle.setBackground(Color.parseColor("#C0C0C0"));
callLogDetailsStyle.setTitleColor(Color.RED);
callLogDetailsStyle.setBorderColor(Color.RED);
callLogDetailsStyle.setBorderWidth(5);

cometchatCallLogDetails.setStyle(callLogDetailsStyle);

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val callLogDetailsStyle = CallLogDetailsStyle()
callLogDetailsStyle.setBackground(Color.parseColor("#C0C0C0"))
callLogDetailsStyle.setTitleColor(Color.RED)
callLogDetailsStyle.setBorderColor(Color.RED)
callLogDetailsStyle.setBorderWidth(5)

cometchatCallLogDetails.setStyle(callLogDetailsStyle)
````

</TabItem>

</Tabs>

List of properties exposed by CallLogDetailsStyle

| Property                 | Description                                           | Code                                    |
| ------------------------ | ----------------------------------------------------- | --------------------------------------- |
| **Background**           | used to set background color                          | `.setBackground(@ColorInt int)`         |
| **Background**           | used to set a gradient background                     | `.setBackground(Drawable)`              |
| **Border Color**         | used to set border color                              | `.setBorderColor(@ColorInt int)`        |
| **Border Width**         | used to set border                                    | `.setBorderWidth(int)`                  |
| **Close Icon Tint**      | used to set the color of the back icon in the app bar | `.setCloseIconTint(@ColorInt int)`      |
| **CornerRadius**         | used to set corner radius                             | `.setCornerRadius(double)`              |
| **Name Text Appearance** | Used to set Name Text Appearance.                     | `.setNameTextAppearance(@StyleRes int)` |
| **Name Text Color**      | Used to set Name Text Color.                          | `.setNameTextColor(@ColorInt int)`      |
| **Title Appearance**     | used to set style of the title in the app bar         | `.setTitleAppearance(@StyleRes int)`    |
| **Title Color**          | Used to set title Color                               | `.setTitleColor(@ColorInt int)`         |

##### 2. Avatar Styles

To apply customized styles to the `Avatar` component in the `CometChatCallLogDetails` Component, you can use the following code snippet. For further insights on `Avatar` Styles [refer](/ui-kit/android/avatar#avatarstyle)

<Tabs>

<TabItem value="Java" label="Java">
```Java
AvatarStyle avatarStyle = new AvatarStyle()
        .setBorderColor(Color.RED)
        .setBorderWidth(10);
cometchatCallLogDetails.setAvatarStyle(avatarStyle);
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val avatarStyle = AvatarStyle()
    .setBorderColor(Color.RED)
    .setBorderWidth(10)
cometchatCallLogDetails.setAvatarStyle(avatarStyle)
```
</TabItem>

</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

![](../../assets/call_logs_details_functionality_cometchat_screens.png)

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatCallLogDetails.setCloseButtonIcon(R.drawable.ic_reply);
cometchatCallLogDetails.setTitle("Your Title");
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatCallLogDetails.setCloseButtonIcon(R.drawable.ic_reply)
cometchatCallLogDetails.setTitle("Your Title")
```
</TabItem>

</Tabs>

Below is a list of customizations along with corresponding code snippets

| Property                  | Description                                                       | Code                                    |
| ------------------------- | ----------------------------------------------------------------- | --------------------------------------- |
| **Call**                  | Used to validate and fetch a list of available options for groups | `.setCall(CallLog)`                     |
| **Hide Profile**          | Hides view profile option for users                               | `.hideProfile(boolean)`                 |
| **Set Close Button Icon** | Used to set back button located in the app bar                    | `.setCloseButtonIcon(@DrawableRes int)` |
| **Set Title**             | Used to set the title in the app bar                              | `.setTitle(String)`                     |
| **Show Close Button**     | Used to toggle visibility for back button                         | `.showCloseButton(boolean)`             |

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

#### Menu

You can set the Custom Menu to add more options to the CometChatCallLogDetails component.

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatCallLogDetails.setMenu();
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatCallLogDetails.setMenu()
```
</TabItem>

</Tabs>

Example

![](../../assets/call_logs_details_set_menu_cometchat_screens.png)

You need to create a `view_menu.xml` as a custom view file. Which we will inflate and pass to `.setMenu()`.

```xml title="view_menu.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="horizontal">

    <ImageView
        android:id="@+id/img_refresh"
        android:layout_width="30dp"
        android:layout_height="30dp"
        android:src="@drawable/ic_refresh_black" />

</LinearLayout>
```

You inflate the view and pass it to `setMenu`. You can get the child view reference and can handle click actions.

<Tabs>

<TabItem value="Java" label="Java">

```Java title="YourActivity.java"
View view = getLayoutInflater().inflate(R.layout.view_menu, null);
ImageView imgRefresh = view.findViewById(R.id.img_refresh);
imgRefresh.setOnClickListener(v -> {
    Toast.makeText(this, "Clicked on Refresh", Toast.LENGTH_SHORT).show();
});
cometchatCallLogDetails.setMenu(view);
```

</TabItem>

<TabItem value="Kotlin" label="Kotlin">

```Kotlin title="YourActivity.kt"
val view: View = layoutInflater.inflate(R.layout.view_menu, null)
val imgRefresh = view.findViewById<ImageView>(R.id.img_refresh)
imgRefresh.setOnClickListener { v: View? ->
    Toast.makeText(this, "Clicked on Refresh", Toast.LENGTH_SHORT).show()
}
cometchatCallLogDetails.setMenu(view)
```

</TabItem>

</Tabs>

---

#### Template and Options

Enhance your `CometChatCallLogDetails` component by setting Custom Options and Template to incorporate additional functionalities when swiping.

1. `CometChatCallLogDetailsOption` is the class providing structure for options to be shown for users and group members

<Tabs>

<TabItem value="Java" label="Java">
```Java
CometChatCallLogDetailsOption callLogDetailsOption = new CometChatCallLogDetailsOption();
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val callLogDetailsOption: CometChatCallLogDetailsOption = CometChatCallLogDetailsOption()
```
</TabItem>

</Tabs>

List of Functionality used to customize the appearance of the `CometChatCallLogDetailsOption` component.

| properties      | Type                                   | Description                                |
| --------------- | -------------------------------------- | ------------------------------------------ |
| id              | String                                 | unique ID for the option                   |
| title           | String                                 | used to set title for the option           |
| startIcon       | @DrawableRes int                       | used to set start icon for the option      |
| endIcon         | @DrawableRes int                       | used to set end icon for the option        |
| titleColor      | @ColorInt int                          | used to set title color                    |
| titleFont       | String                                 | used to set title text font                |
| titleAppearance | @StyleRes int                          | used to set style of the title text        |
| startIconTint   | @ColorInt int                          | set color of start icon                    |
| endIconTint     | @ColorInt int                          | set color of end icon                      |
| onClick         | OnDetailOptionClick                    | the action to perform on click of option   |
| view            | Function3&lt;Context,CallLog, View&gt; | to set a custom view for particular option |

2. `CometChatCallLogDetailsTemplate` defines the structure for sections of options available in the `CometChatCallLogDetails`

<Tabs>

<TabItem value="Java" label="Java">
```Java
CometChatCallLogDetailsTemplate CometChatCallLogDetailsTemplate = new CometChatCallLogDetailsTemplate()
        .setId(UIKitConstants.DetailsTemplate.PRIMARY)
        .hideSectionSeparator(true);

CometChatCallLogDetailsTemplate.setOptions((context1, log) -> {
return new ArrayList<>();
});

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val cometchatCallLogDetailsTemplate = CometChatCallLogDetailsTemplate()
    .setId(UIKitConstants.DetailsTemplate.PRIMARY)
    .hideSectionSeparator(true)

cometchatCallLogDetailsTemplate.setOptions { context1: Context?, log: CallLog? -> ArrayList() }
````

</TabItem>

</Tabs>

List of Functionality exposed by `CometChatCallLogDetailsTemplate`

| Methods                  | Type                                                                         | Description                                                         |
| ------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| setId                    | String                                                                       | unique ID for the option                                            |
| setTitle                 | String                                                                       | a text to display below the icon                                    |
| setTitleAppearance       | @StyleRes int                                                                | used to set style of the text below the icon                        |
| setOptions               | Function2&lt;Context, CallLog, List&lt;CometChatCallLogDetailsOption&gt;&gt; | options available under each section                                |
| setSectionSeparatorColor | @ColorInt int                                                                | the color of the divider separating the sections of options         |
| hideSectionSeparator     | boolean                                                                      | if true doesn't show the divider separating the sections of options |
| setItemSeparatorColor    | @ColorInt int                                                                | the color of the divider separating the each option                 |
| setHideItemSeparator     | @ColorInt int                                                                | if true doesn't show the divider separating the each option         |

Example

![](../../assets/call_logs_details_set_template_cometchat_screens.png)

<Tabs>

<TabItem value="Java" label="Java">
```Java
List<CometChatCallLogDetailsOption> cometchatCallLogDetailsOptionArrayList = new ArrayList<>();
if (callLog != null) {
    if (callLog.getParticipants() != null && !callLog.getParticipants().isEmpty())
        cometchatCallLogDetailsOptionArrayList.add(
                new CometChatCallLogDetailsOption(
                        UIKitConstants.CallOption.CALL_HISTORY,
                        "List Title 1",
                        0,
                        R.drawable.ic_send,
                        Color.RED,
                        null,
                        Typography.getInstance().getName(),
                        0,
                        Color.RED,
                        null
                )
        );
    if (callLog.getRecordings() != null && !callLog.getRecordings().isEmpty()) {
        cometchatCallLogDetailsOptionArrayList.add(
                new CometChatCallLogDetailsOption(
                        UIKitConstants.CallOption.CALL_HISTORY,
                        "List Title 2",
                        0,
                        R.drawable.broadcast_camera,
                        Color.RED,
                        null,
                        Typography.getInstance().getName(),
                        0,
                        Color.RED,
                        null
                )
        );
    }
    cometchatCallLogDetailsOptionArrayList.add(
            new CometChatCallLogDetailsOption(
                    UIKitConstants.CallOption.CALL_HISTORY,
                    "List Title 3",
                    0,
                    R.drawable.ic_call,
                    Color.RED,
                    null,
                    Typography.getInstance().getName(),
                    0,
                    Color.RED,
                    null
            )
    );
}

CometChatCallLogDetailsTemplate cometchatCallLogDetailsTemplate = new CometChatCallLogDetailsTemplate()
.setId(UIKitConstants.DetailsTemplate.PRIMARY)
.hideSectionSeparator(true);

cometchatCallLogDetailsTemplate.setOptions((context1, log) -> cometchatCallLogDetailsOptionArrayList);

cometchatCallLogDetails.setData((context1, callUser, callGroup) -> Collections.singletonList(cometchatCallLogDetailsTemplate));

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val cometchatCallLogDetailsOptionArrayList: MutableList<CometChatCallLogDetailsOption> =
    ArrayList()
if (callLog != null) {
    if (callLog.getParticipants() != null && !callLog.getParticipants()
            .isEmpty()
    ) cometchatCallLogDetailsOptionArrayList.add(
        CometChatCallLogDetailsOption(
            UIKitConstants.CallOption.CALL_HISTORY,
            "List Title 1",
            0,
            R.drawable.ic_send,
            Color.RED,
            null,
            Typography.getInstance().name,
            0,
            Color.RED,
            null
        )
    )
    if (callLog.getRecordings() != null && !callLog.getRecordings().isEmpty()) {
        cometchatCallLogDetailsOptionArrayList.add(
            CometChatCallLogDetailsOption(
                UIKitConstants.CallOption.CALL_HISTORY,
                "List Title 2",
                0,
                R.drawable.broadcast_camera,
                Color.RED,
                null,
                Typography.getInstance().name,
                0,
                Color.RED,
                null
            )
        )
    }
    cometchatCallLogDetailsOptionArrayList.add(
        CometChatCallLogDetailsOption(
            UIKitConstants.CallOption.CALL_HISTORY,
            "List Title 3",
            0,
            R.drawable.ic_call,
            Color.RED,
            null,
            Typography.getInstance().name,
            0,
            Color.RED,
            null
        )
    )
}


val cometchatCallLogDetailsTemplate = CometChatCallLogDetailsTemplate()
    .setId(UIKitConstants.DetailsTemplate.PRIMARY)
    .hideSectionSeparator(true)

cometchatCallLogDetailsTemplate.setOptions { context1: Context?, log: CallLog? -> cometchatCallLogDetailsOptionArrayList }

cometchatCallLogDetails.setData(Function3<Context, CallUser, CallGroup, List<CometChatCallLogDetailsTemplate>> { context1: Context?, callUser: CallUser?, callGroup: CallGroup? ->
    listOf<CometChatCallLogDetailsTemplate>(
        cometchatCallLogDetailsTemplate
    )
})
````

</TabItem>

</Tabs>

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available Configuration Object"
/>
