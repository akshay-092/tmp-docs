---
sidebar_position: 8
title: Call Log History
slug: /call-log-history
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip id="my-tooltip-html-prop" html="Not available in Group Members Configuration object"/>

## Overview

`CometChatCallLogHistory` is a [Widget](/ui-kit/flutter/components-overview#components) that shows a paginated list of all the calls between the logged-in user & another user or group. This allows the user to see all the calls with a specific user/group they have initiated/received/missed.

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/call_logs_history_overview_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/call_logs_history_overview_cometchat_screens.png)

</TabItem>

</Tabs>

The `CometChatCallLogHistory` widget is composed of the following BaseWidgets:

| Widgets                                        | Description                                                                                                                                                                             |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CometChatListBase](/ui-kit/flutter/list-base) | `CometChatListBase` is a container widget featuring a title, customizable background options, and a dedicated list widget for seamless integration within your application's interface. |
| [CometChatListItem](/ui-kit/flutter/list-item) | This widget displays data retrieved from a CallLog object on a card, presenting a title and subtitle.                                                                                   |

## Usage

### Integration

`CometChatCallLogHistory` is a Widget, it can be seamlessly presented within your application. To display the details of a CallLog, you simply need to pass the corresponding CallLog object to the `CometChatCallLogHistory` instance using its setCallLog property. This enables you to efficiently showcase specific call log details within your application's interface.

You can launch `CometChatCallLogHistory` directly using `Navigator.push`, or you can define it as a widget within the `build` method of your `State` class.

##### 1. Using Navigator to Launch `CometChatCallLogHistory`

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
Navigator.push(context, MaterialPageRoute(builder: (context) => CometChatCallLogHistory(callUser: callUser))); // CallUser object is required to launch the CometChatCallLogHistory widget.
```

</TabItem>

</Tabs>

##### 2. Embedding `CometChatCallLogHistory` as a Widget in the build Method

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_calls_uikit/cometchat_calls_uikit.dart';
import 'package:flutter/material.dart';

class CallLogHistoryExample extends StatefulWidget {
  const CallLogHistoryExample({super.key});

  @override
  State<CallLogHistoryExample> createState() => _CallLogHistoryExampleState();
}

class _CallLogHistoryExampleState extends State<CallLogHistoryExample> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: CometChatCallLogHistory(
            callUser: callUser
          ) // CallUser object is required to launch the CometChatCallLogHistory widget.
        )
      ),
    );
  }
}
```

</TabItem>

</Tabs>

---

### Actions

[Actions](/ui-kit/flutter/components-overview#actions) dictate how a widget functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the widget to fit your specific needs.

##### 1. onItemClick

This method proves valuable when users seek to override the `onItemClick` functionality within `CometChatCallLogHistory`, empowering them with greater control and customization options.

The `onItemClick` action doesn't have a predefined behavior. You can override this action using the following code snippet.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
  callUser: callUser,
  onItemClick: (CallLog callLog) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

##### 2. OnError

You can customize this behavior by using the provided code snippet to override the `OnError` and improve error handling.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
  callUser: callUser,
  onError: (e) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

##### 3. onBack

You can customize this behavior by using the provided code snippet to override the `onBack` and improve error handling.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
  callUser: callUser,
  onBack: () {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Widget. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

##### 1. CallLogRequestBuilder

The [CallLogRequestBuilder](/sdk/flutter/call-logs) enables you to filter and customize the call list based on available parameters in CallLogRequestBuilder. This feature allows you to create more specific and targeted queries during the call. The following are the parameters available in [CallLogRequestBuilder](/sdk/flutter/call-logs)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
  callUser: callUser,
  callLogsRequestBuilder: CallLogRequestBuilder()
    ..limit = 10
    ..hasRecording = true,
)
```

</TabItem>

</Tabs>

---

### Events

[Events](/ui-kit/flutter/components-overview#events) are emitted by a `Widget`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The `CometChatCallLogHistory` widget does not have any exposed events.

---

## Customization

To fit your app's design requirements, you can customize the appearance of the conversation widget. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the widget in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the widget.

##### 1. CallLogHistory Style

You can customize the appearance of the `CallLogHistoryStyle` Widget by applying the `CallLogHistoryStyle` to it using the following code snippet.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
  callUser: callUser,
  callLogHistoryStyle: CallLogHistoryStyle(
    background: Color(0xFFE4EBF5),
    titleStyle: const TextStyle(color: Colors.red),
    borderRadius: 10,
    border: Border.all(color: Colors.black),
  ),
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/call_logs_history_style_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/call_logs_history_style_cometchat_screens.png)

</TabItem>

</Tabs>

List of properties exposed by `CallLogHistoryStyle`

| **Property**          | **Description**                           | **Code**                       |
| --------------------- | ----------------------------------------- | ------------------------------ |
| **width**             | The width of the call log history style.  | `double? width`                |
| **height**            | The height of the call log history style. | `double? height`               |
| **background**        | The background color.                     | `Color? background`            |
| **border**            | The border of the call log history style. | `BoxBorder? border`            |
| **borderRadius**      | The border radius.                        | `double? borderRadius`         |
| **gradient**          | The gradient background.                  | `Gradient? gradient`           |
| **titleStyle**        | The style for the title text.             | `TextStyle? titleStyle`        |
| **dividerTint**       | The tint color for the divider.           | `Color? dividerTint`           |
| **emptyTextStyle**    | The style for the empty text.             | `TextStyle? emptyTextStyle`    |
| **errorTextStyle**    | The style for the error text.             | `TextStyle? errorTextStyle`    |
| **loadingIconTint**   | The tint color for the loading icon.      | `Color? loadingIconTint`       |
| **backIconTint**      | The tint color for the back icon.         | `Color? backIconTint`          |
| **durationTextStyle** | The style for the duration text.          | `TextStyle? durationTextStyle` |
| **statusTextStyle**   | The style for the status text.            | `TextStyle? statusTextStyle`   |
| **dateTextStyle**     | The style for the date text.              | `TextStyle? dateTextStyle`     |

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the widget. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

**Example**

Here is the example for reference:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
    callUser: callUser,
    title: "Your Title",
    backButton: InkWell(
      onTap: () {
        // TODO("Not yet implemented")
      },
      child: const Icon(Icons.backspace_outlined, color: Color(0xFF6851D6))
    ),
    hideSeparator: false
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/call_logs_history_functionality_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/call_logs_history_functionality_cometchat_screens.png)

</TabItem>

</Tabs>

List of methods exposed by `CometChatCallLogHistory`

| **Property**             | **Description**                             | **Code**                       |
| ------------------------ | ------------------------------------------- | ------------------------------ |
| **callUser**             | The user associated with the call logs.     | `dynamic callUser`             |
| **callGroup**            | The group associated with the call logs.    | `dynamic callGroup`            |
| **title**                | The title of the call log history.          | `String? title`                |
| **backButton**           | The custom back button widget.              | `Widget? backButton`           |
| **showBackButton**       | Flag to show or hide the back button.       | `bool? showBackButton`         |
| **emptyStateText**       | The text to display when the list is empty. | `String? emptyStateText`       |
| **errorStateText**       | The text to display when there is an error. | `String? errorStateText`       |
| **loadingIconUrl**       | The URL for the loading icon.               | `String? loadingIconUrl`       |
| **theme**                | The theme of the call log history.          | `ThemeData? theme`             |
| **timePattern**          | The pattern for displaying time.            | `String? timePattern`          |
| **dateSeparatorPattern** | The pattern for displaying date separators. | `String? dateSeparatorPattern` |
| **hideSeparator**        | Flag to show or hide the separator.         | `bool hideSeparator = true`    |

---

### Advanced

For advanced-level customization, you can set custom widgets to the widget. This lets you tailor each aspect of the widget to fit your exact needs and application aesthetics. You can create and define your widgets, layouts, and UI elements and then incorporate those into the widget.

#### ListItemView

With this function, you can assign a custom ListItem widget to the `CometChatCallLogHistory` Widget.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
  callUser: callUser,
  listItemView: (callLog, context) {
    return ListTile(
      title: Text(DateFormat('mm:hh yyyy/MM/dd').format(DateTime.fromMillisecondsSinceEpoch(callLog.startedAt! * 1000))),
      subtitle: Text("${callLog.type!} call"),
      trailing: Text(callLog.status!),
    );
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/call_logs_history_list_item_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/call_logs_history_list_item_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### TailView

Used to generate a custom trailing widget for the `CometChatGroupMembers` widget. You can add a Tail widget using the following method.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
  callUser: callUser,
  tailView: (CallLog callLog, BuildContext context) {
    return const Row(
      children: [
        Icon(Icons.call, color: Color(0xFF6851D6), size: 25,),
        SizedBox(width: 10),
        Icon(Icons.video_call, color: Color(0xFF6851D6), size: 25,),
      ],
    ); // Replaced the placeholder with a custom widget.
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/call_logs_history_tail_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/call_logs_history_tail_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### LoadingStateView

You can set a custom loader widget using `loadingStateView` to match the loading UI of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
  callUser: callUser,
  loadingStateView: (context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      child: const Center(
          child: CircularProgressIndicator()
      ),
    ); // Replaced the placeholder with a custom widget.
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/call_logs_history_loading_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/call_logs_history_loading_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### EmptyStateView <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>

You can set a custom EmptyView using `emptyStateView` to match the empty widget of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
    callUser: callUser,
    emptyStateView: (context) {
      return SizedBox(
        width: MediaQuery.of(context).size.width,
        child: const Center(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Spacer(),
                Icon(Icons.sms_failed_outlined, color: Colors.red, size: 100,),
                SizedBox(height: 20,),
                Text("Your Custom Message"),
                Spacer(),
              ],
            )
        ),
      );
    },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/call_logs_history_empty_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/call_logs_history_empty_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### ErrorStateView <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>

You can set a custom ErrorView using `errorStateView` to match the error widget of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
  callUser: callUser,
  errorStateView: (context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      child: const Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Spacer(),
            Icon(Icons.error_outline, color: Colors.red, size: 100,),
            SizedBox(height: 20,),
            Text("Your Custom Error Message"),
            Spacer(),
          ],
        ),
      ),
    );
  },
)
```

</TabItem>

</Tabs>

<!-- <Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios)

</TabItem>

</Tabs> -->

---

## Configurations

[Configurations](/ui-kit/flutter/components-overview#configurations) offer the ability to customize the properties of each widget within a Composite Widget.

- `Configurations` expose properties that are available in its individual widgets.

#### Call Log Details

You can customize the properties of the Call Log Details widget by making use of the `CallLogDetailsConfiguration`. You can accomplish this by employing the `callLogDetailConfiguration` method as demonstrated below:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatCallLogHistory(
    callUser: callUser,
    callLogDetailConfiguration: CallLogDetailsConfiguration(
        detailStyle: const CallLogDetailsStyle(
          background: Color(0xFFE4EBF5),
          titleStyle: TextStyle(
              color: Colors.red,
              fontSize: 20,
              fontWeight: FontWeight.bold,
          ),
          separatorDateStyle: TextStyle(
              color: Colors.blue,
              fontSize: 14,
              fontWeight: FontWeight.bold,
          ),
          timeStyle: TextStyle(
              color: Colors.orange,
              fontSize: 12,
              fontWeight: FontWeight.bold,
          ),
          durationStyle: TextStyle(
              color: Colors.purple,
              fontSize: 10,
              fontWeight: FontWeight.bold,
          ),
          countStyle: TextStyle(
              color: Colors.yellow,
              fontSize: 8,
              fontWeight: FontWeight.bold,
          ),
          callStatusStyle: TextStyle(
              color: Colors.pink,
              fontSize: 10,
              fontWeight: FontWeight.bold,
          ),
          arrowIconTint: Colors.green,
      )
  )
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/call_logs_history_call_log_details_config_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/call_logs_history_call_log_details_config_cometchat_screens.png)

</TabItem>

</Tabs>

---
