---
sidebar_position: 10
title: Call Log Participants
slug: /call-log-participants
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

`CometChatCallLogParticipants` is a [Component](/ui-kit/android/components-overview#components) that shows a separate view that displays comprehensive information about Call. This will enable users to easily access details such as the call participants, and call details for a more informed communication experience.

![](../../assets/call_participants_overview_cometchat_screens.png)

The `CometChatCallLogParticipants` component is composed of the following BaseComponents:

| Components                                     | Description                                                                                                                                                                              |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CometChatListBase](/ui-kit/android/list-base) | `CometChatListBase` is a container component featuring a title, customizable background options, and a dedicated list view for seamless integration within your application's interface. |
| [CometChatListItem](/ui-kit/android/list-item) | This component displays data retrieved from a CallLog object on a card, presenting a title and subtitle.                                                                                 |

---

## Usage

### Integration

`CometChatCallLogParticipants` is a component that seamlessly integrates into your application. To present the participants of a call, you can instantiate the `CometChatCallLogParticipants` instance and provide the list of participants using its setter function. This allows for easy customization and efficient display of call participant details within your application's interface.

`CometChatCallLogParticipants` can be launched by adding the following code snippet to the XML layout file.

<Tabs>

<TabItem value="XML" label="XML">
```XML
<com.cometchat.chatuikit.calls.callparticipants.CometChatCallLogParticipants
    android:id="@+id/call_log_participants"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```
</TabItem>

</Tabs>

If you're defining the `CometChatCallLogParticipants` within the XML code or in your activity or fragment then you'll need to extract them and set the Participants List using the `setParticipantList()` method.

<Tabs>

<TabItem value="Java" label="Java">
```Java
CometChatCallLogParticipants cometchatCallLogParticipants = binding.callLogParticipants; // 'binding' is a view binding instance. Initialize it with `binding = YourXmlFileNameBinding.inflate(getLayoutInflater());` to use views like `binding.callLogParticipants` after enabling view binding.

cometchatCallLogParticipants.setParticipantList(participantsList); // Required - Get the Participants list from the CallLog object using getParticipants(), e.g., callLogObject.getParticipants()

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val cometchatCallLogParticipants: CometChatCallLogParticipants = binding.callLogParticipants // 'binding' is a view binding instance. Initialize it with `binding = YourXmlFileNameBinding.inflate(getLayoutInflater());` to use views like `binding.callLogParticipants` after enabling view binding.

cometchatCallLogParticipants.setParticipantList(participantsList) // Required - Get the Participants list from the CallLog object using getParticipants(), e.g., callLogObject.getParticipants()
````

</TabItem>

</Tabs>

##### Activity and Fragment

You can integrate `CometChatCallLogParticipants` into your Activity and Fragment by adding the following code snippets into the respective classes.

<Tabs>

<TabItem value="Java (Activity)" label="Java (Activity)">

```Java title="YourActivity.java"
CometChatCallLogParticipants cometchatCallLogParticipants;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    cometchatCallLogParticipants = new CometChatCallLogParticipants(this);
    cometchatCallLogParticipants.setParticipantList(participantsList); // Required - Get the Participants list from the CallLog object using getParticipants(), e.g., callLogObject.getParticipants()

    setContentView(cometchatCallLogParticipants);
}
```

</TabItem>

<TabItem value="Kotlin (Activity)" label="Kotlin (Activity)">

```Kotlin title="YourActivity.kt"
private lateinit var cometchatCallLogParticipants: CometChatCallLogParticipants

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    cometchatCallLogParticipants = CometChatCallLogParticipants(this)
    cometchatCallLogParticipants.setParticipantList(participantsList) // Required - Get the Participants list from the CallLog object using getParticipants(), e.g., callLogObject.getParticipants()

    setContentView(cometchatCallLogParticipants)
}
```

</TabItem>

<TabItem value="Java (Fragment)" label="Java (Fragment)">

```Java title="YourFragment.java"
CometChatCallLogParticipants cometchatCallLogParticipants;

@Override
public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

    cometchatCallLogParticipants = new CometChatCallLogParticipants(requireActivity());
    cometchatCallLogParticipants.setParticipantList(participantsList); // Required - Get the Participants list from the CallLog object using getParticipants(), e.g., callLogObject.getParticipants()

    return cometchatCallLogParticipants;
}
```

</TabItem>

<TabItem value="Kotlin (Fragment)" label="Kotlin (Fragment)">

```Kotlin title="YourFragment.kt"
private lateinit var cometchatCallLogParticipants: CometChatCallLogParticipants

override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
): View {
    cometchatCallLogParticipants = CometChatCallLogParticipants(requireActivity())
    cometchatCallLogParticipants.setParticipantList(participantsList) // Required - Get the Participants list from the CallLog object using getParticipants(), e.g., callLogObject.getParticipants()

    return cometchatCallLogParticipants
}
```

</TabItem>

</Tabs>

---

### Actions

[Actions](/ui-kit/android/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. SetOnItemClickListener

The `setOnItemClickListener` action is typically triggered when a participant in the call log is clicked, executing a predefined action. However, by implementing the provided code snippet, you can effortlessly customize or override this default behavior to meet your specific requirements.

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatCallLogParticipants.setOnItemClickListener(new OnItemClickListener<Participant>() {
    @Override
    public void OnItemClick(Participant participant, int i) {
        //TODO
    }
});
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatCallLogParticipants.setOnItemClickListener(object :
    OnItemClickListener<Participant?>() {
    override fun OnItemClick(participant: Participant?, i: Int) {
        //TODO
    }
})
```
</TabItem>

</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

The `CometChatCallLogParticipants` component does not have any exposed filters.

---

### Events

[Events](/ui-kit/android/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The `CometChatCallLogParticipants` component does not have any exposed events.

---

## Customization

To fit your app's design requirements, you can customize the appearance of the conversation component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. CallLogParticipants Style

You can customize the appearance of the `CallLogParticipantsStyle` Component by applying the `CallLogParticipantsStyle` to it using the following code snippet.

<!-- ![](../../assets/call_log_participants_style_screens.png) -->

<Tabs>

<TabItem value="Java" label="Java">
```Java
CallLogParticipantsStyle callLogParticipantsStyle = new CallLogParticipantsStyle();
callLogParticipantsStyle.setTitleColor(Color.RED);
callLogParticipantsStyle.setTitleAppearance(R.style.MyTitleStyle);
callLogParticipantsStyle.setBackIconTint(Color.RED);
cometchatCallLogParticipants.setStyle(callLogParticipantsStyle);
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val callLogParticipantsStyle = CallLogParticipantsStyle()
callLogParticipantsStyle.setTitleColor(Color.RED)
callLogParticipantsStyle.setTitleAppearance(R.style.MyTitleStyle)
callLogParticipantsStyle.setBackIconTint(Color.RED)
cometchatCallLogParticipants.setStyle(callLogParticipantsStyle)
```
</TabItem>

</Tabs>

List of properties exposed by `CallLogParticipantsStyle`

| Property                  | Description                                                                  | Code                                     |
| ------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| **Background**            | Used to set background color                                                 | `.setBackground(@ColorInt int)`          |
| **Background**            | Used to set background Drawable                                              | `.setBackground(Drawable)`               |
| **Border Color**          | Used to set border color                                                     | `.setBorderColor(@ColorInt int)`         |
| **Border Width**          | Used to set border                                                           | `.setBorderWidth(@Dimension int)`        |
| **Corner Radius**         | Used to set border radius                                                    | `.setCornerRadius(float)`                |
| **Empty Text Appearance** | Used to set the appearance of the text shown when list is empty.             | `.setEmptyTextAppearance(@StyleRes int)` |
| **Empty Text Font**       | Used to set the font of the Empty text which appears when the list is empty. | `.setEmptyTextFont(String)`              |
| **Empty Text Color**      | Used to set the color of the Empty text.                                     | `.setEmptyTextColor(@ColorInt int)`      |
| **Back Icon Tint**        | Used to set the backIcon Tint color                                          | `.setBackIconTint(@ColorInt int)`        |
| **Title Appearance**      | Used to set the appearance of the title text.                                | `.setTitleAppearance(@StyleRes int)`     |
| **Title Color**           | Used to set the color of the title text.                                     | `.setTitleColor(@ColorInt int)`          |
| **Title Font**            | Used to set the Title Color                                                  | `.setTitleFont(String)`                  |

##### 2. ListItem Styles

To apply customized styles to the `ListItemStyle` component in the `CometChatCallLogParticipants` Component, you can use the following code snippet. For further insights on `ListItemStyle` Styles [refer](/ui-kit/android/list-item)

<!-- ![](../../assets/call_log_participants_list_item_style_screens.png) -->

<Tabs>

<TabItem value="Java" label="Java">
```Java
ListItemStyle listItemStyle = new ListItemStyle();
listItemStyle.setBackground(Color.parseColor("#C0C0C0"));
cometchatCallLogParticipants.setListItemStyle(listItemStyle);
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
val listItemStyle = ListItemStyle()
listItemStyle.setBackground(Color.parseColor("#C0C0C0"))
cometchatCallLogParticipants.setListItemStyle(listItemStyle)
```
</TabItem>

</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

![](../../assets/call_participants_functionality_cometchat_screens.png)

<Tabs>

<TabItem value="Java" label="Java">
```Java
cometchatCallLogParticipants.setTitle("Your Title");

cometchatCallLogParticipants.backIcon(R.drawable.ic_reply);

cometchatCallLogParticipants.setTail(new Function2<Context, Participant, View>() {
@Override
public View apply(Context context, Participant participant) {
TextView textView = new TextView(context);
textView.setText("Your Tail View");
return textView;
}
});

````
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
cometchatCallLogParticipants.setTitle("Your Title")

cometchatCallLogParticipants.backIcon(R.drawable.ic_reply)

cometchatCallLogParticipants.setTail(Function2<Context?, Participant?, View> { context, participant ->
    val textView = TextView(context)
    textView.text = "Your Tail View"
    textView
})
````

</TabItem>

</Tabs>

Below is a list of customizations along with corresponding code snippets

| Property             | Description                                                    | Code                                      |
| -------------------- | -------------------------------------------------------------- | ----------------------------------------- |
| **Back Icon**        | Used to set back button icon                                   | `.backIcon(@DrawableRes int res)`         |
| **Empty State Text** | Used to set a custom text when the Participants array is empty | `.emptyStateText(String)`                 |
| **Selection Icon**   | Used to override the default selection complete icon           | `.setSelectionIcon(@DrawableRes int res)` |
| **Set Submit Icon**  | Used to override the default selection complete icon           | `.setSubmitIcon(@DrawableRes int res)`    |
| **Set Title**        | Used to set title in the app bar                               | `.setTitle(String)`                       |

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

#### SetEmptyStateView <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>

You can set a custom EmptyStateView using `setEmptyStateView()` to match the error view of your app.

<Tabs>

<TabItem value="Java" label="Java">
```Java
 cometchatCallLogParticipants.setEmptyStateView();
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
 cometchatCallLogParticipants.setEmptyStateView()
```
</TabItem>

</Tabs>

Example

![](../../assets/call_participants_set_empty_state_view_cometchat_screens.png)

You need to create a `empty_view_layout.xml` as a custom view file. Which we will inflate and pass to `.setEmptyStateView()`.

```xml title="empty_view_layout.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical">

    <ImageView
        android:layout_width="70dp"
        android:layout_height="70dp"
        android:layout_above="@+id/txt_title"
        android:layout_centerHorizontal="true"
        android:src="@drawable/ic_error" />

    <TextView
        android:id="@+id/txt_title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="Your message"
        android:textColor="@color/cometchat_grey"
        android:textSize="20sp"
        android:textStyle="bold" />

</LinearLayout>
```

You inflate the view and pass it to `setEmptyStateView`. You can get the child view reference and can handle click actions.

<Tabs>

<TabItem value="Java" label="Java">
```Java
 cometchatCallLogParticipants.setEmptyStateView(R.layout.empty_view_layout);
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
 cometchatCallLogParticipants.setEmptyStateView(R.layout.empty_view_layout)
```
</TabItem>

</Tabs>

---

#### Menu

You can set the Custom Menu to add more options to the ` CometChatCallLogParticipants` component.

<Tabs>

<TabItem value="Java" label="Java">
```Java
 cometchatCallLogParticipants.setMenu();
```
</TabItem>

<TabItem value="Kotlin" label="Kotlin">
```Kotlin
 cometchatCallLogParticipants.setMenu()
```
</TabItem>

</Tabs>

Example

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
cometchatCallLogParticipants.setMenu(view);
```

</TabItem>

<TabItem value="Kotlin" label="Kotlin">

```Kotlin title="YourActivity.kt"
val view: View = layoutInflater.inflate(R.layout.view_menu, null)
val imgRefresh = view.findViewById<ImageView>(R.id.img_refresh)
imgRefresh.setOnClickListener { v: View? ->
    Toast.makeText(this, "Clicked on Refresh", Toast.LENGTH_SHORT).show()
}
cometchatCallLogParticipants.setMenu(view)
```

</TabItem>

</Tabs>

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available Configuration Object"
/>
