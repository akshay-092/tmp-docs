---
sidebar_position: 1
title: Users
slug: /users
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `CometChatUsers` is a [Widget](/ui-kit/flutter/components-overview#components), showcasing an accessible list of all available users. It provides an integral search functionality, allowing you to locate any specific user swiftly and easily. For each user listed, the widget displays the user's name by default, in conjunction with their avatar when available. Furthermore, it includes a status indicator, visually informing you whether a user is currently online or offline.

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/users_overview_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_overview_cometchat_screens.png)

</TabItem>

</Tabs>

The `CometChatUsers` widget is composed of the following Base Widgets:

| Widgets                               | Description                                                                                                          |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [ListBase](/ui-kit/flutter/list-base) | a reusable container widget having title, search box, customisable background and a List View                        |
| [ListItem](/ui-kit/flutter/list-item) | a widget that renders data obtained from a User object on a Tile having a title, subtitle, leading and trailing view |

## Usage

### Integration

As `CometChatUsers` is a custom **widget**, it can be launched directly by user actions such as button clicks or other interactions. It's also possible to integrate it into a **tab widget**. `CometChatUsers` offers several parameters and methods for UI customization.

You can launch `CometChatUsers` directly using `Navigator.push`, or you can define it as a widget within the `build` method of your `State` class.

##### 1. Using Navigator to Launch `CometChatUsers`

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
Navigator.push(context, MaterialPageRoute(builder: (context) => const CometChatUsers()));
```

</TabItem>

</Tabs>

##### 2. Embedding `CometChatUsers` as a Widget in the build Method

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class Users extends StatefulWidget {
  const Users({super.key});

  @override
  State<Users> createState() => _UsersState();
}

class _UsersState extends State<Users> {

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
        body: SafeArea(
            child: CometChatUsers()
        )
    );
  }
}
```

</TabItem>

</Tabs>

---

### Actions

[Actions](/ui-kit/flutter/components-overview#actions) dictate how a widget functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the widget to fit your specific needs.

##### 1. onSelection

When the `onSelection` event is triggered, it furnishes the list of selected users. This event can be invoked by any button or action within the interface. You have the flexibility to implement custom actions or behaviors based on the selected users.

This action does not come with any predefined behavior. However, you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  selectionMode: SelectionMode.multiple,
  activateSelection: ActivateSelection.onClick,
  onSelection: (list, context) {
    //TODO: This action will trigger the end of selection.
  },
)
```

</TabItem>

</Tabs>

---

##### 2. onItemTap

The `onItemTap` method is used to override the onClick behavior in `CometChatUsers`.
This action does not come with any predefined behavior. However, you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  onItemTap: (context, user) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

##### 3. onBack

This method allows users to override the onBack Pressed behavior in `CometChatUsers` by utilizing the `onBack` , providing customization options for handling the back action.

By default, this action has a predefined behavior: it simply dismisses the current widget.
However, the flexibility of CometChat UI Kit allows you to override this standard behavior according to your application's specific requirements. You can define a custom action that will be performed instead when the back button is pressed.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  onBack: () {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

##### 4. onError

This method `onError`, allows users to override error handling within `CometChatUsers`, providing greater control over error responses and actions.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  onError: (e) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

##### 5. onItemLongPress

This method `onItemLongPress`, empowers users to customize long-click actions within `CometChatUsers`, offering enhanced functionality and interaction possibilities.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  onItemLongPress: (context, user) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Widget. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

##### 1. UsersRequestBuilder

The [UsersRequestBuilder](/sdk/flutter/retrieve-users) enables you to filter and customize the user list based on available parameters in UsersRequestBuilder. This feature allows you to create more specific and targeted queries when fetching users. The following are the parameters available in [UsersRequestBuilder](/sdk/flutter/retrieve-users)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
    usersRequestBuilder: UsersRequestBuilder()
        ..limit = 10
)
```

</TabItem>

</Tabs>

---

### Events

[Events](/ui-kit/flutter/components-overview#events) are emitted by a `CometChatUsers` Widget. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

To handle events supported by Users you have to add corresponding listeners by using `CometChatUserEvents`

| Events          | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| ccUserBlocked   | This will get triggered when the logged in user blocks another user   |
| ccUserUnblocked | This will get triggered when the logged in user unblocks another user |

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class YourScreen extends StatefulWidget {
  const YourScreen({super.key});

  @override
  State<YourScreen> createState() => _YourScreenState();
}

class _YourScreenState extends State<YourScreen> with CometChatUserEventListener {

  @override
  void initState() {
    super.initState();
    CometChatUserEvents.addUsersListener("listenerId", this);
  }

  @override
  void dispose(){
    super.dispose();
    CometChatUserEvents.removeUsersListener("listenerId");
  }

  @override
  void ccUserBlocked(User user) {
    // TODO
  }

  @override
  void ccUserUnblocked(User user) {
    // TODO
  }

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }

}
```

</TabItem>

</Tabs>

---

## Customization

To fit your app's design requirements, you can customize the appearance of the `CometChatUsers` widget. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the widget in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the widget.

##### 1. Users Style

You can set the `UsersStyle` to the `CometChatUsers` widget to customize the styling.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  usersStyle: UsersStyle(
    background: Color(0xFFE4EBF5),
    titleStyle: TextStyle(color: Colors.red),
    backIconTint: Colors.red
  ),
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/users_style_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_style_cometchat_screens.png)

</TabItem>

</Tabs>

List of properties exposed by UsersStyle

| Property                 | Data Type               | Description                                                  |
| ------------------------ | ----------------------- | ------------------------------------------------------------ |
| `titleStyle`             | `TextStyle?`            | Text style for the title within the `CometChatUsers` widget. |
| `backIconTint`           | `Color?`                | Tint color for the back icon.                                |
| `searchBorderColor`      | `Color?`                | Border color for the search input box.                       |
| `searchBackground`       | `Color?`                | Background color for the search input box.                   |
| `searchBorderRadius`     | `BorderRadius?`         | Border radius for the search input box.                      |
| `searchIconTint`         | `Color?`                | Tint color for the search icon.                              |
| `searchBorderWidth`      | `double?`               | Border width for the search input box.                       |
| `searchPlaceholderStyle` | `TextStyle?`            | Text style for the placeholder text in the search input box. |
| `searchTextStyle`        | `TextStyle?`            | Text style for the search input text.                        |
| `loadingIconTint`        | `Color?`                | Tint color for the loading icon.                             |
| `emptyTextStyle`         | `TextStyle?`            | Text style for the empty state text.                         |
| `errorTextStyle`         | `TextStyle?`            | Text style for the error state text.                         |
| `sectionHeaderTextStyle` | `TextStyle?`            | Text style for the section headers.                          |
| `onlineStatusColor`      | `Color?`                | Color indicating the online status of users.                 |
| `separatorColor`         | `Color?`                | Color of the separators between list items.                  |
| `selectionIconTint`      | `Color?`                | Tint color for the selection icon.                           |
| `submitIconTint`         | `Color?`                | Tint color for the submit icon.                              |
| `width`                  | `double?`               | Width of the `CometChatUsers` widget.                        |
| `height`                 | `double?`               | Height of the `CometChatUsers` widget.                       |
| `background`             | `Color?` or `Gradient?` | Background color or gradient of the `CometChatUsers` widget. |
| `border`                 | `Border?`               | Border of the `CometChatUsers` widget.                       |
| `borderRadius`           | `BorderRadius?`         | Border radius of the `CometChatUsers` widget.                |
| `gradient`               | `Gradient?`             | Gradient background of the `CometChatUsers` widget.          |

##### 2. Avatar Style

To apply customized styles to the `Avatar` widget in the `CometChatUsers` widget, you can use the following code snippet. For further insights on `Avatar` Styles [refer](/ui-kit/flutter/avatar)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  avatarStyle: AvatarStyle(
      border: Border.all(width: 5),
      borderRadius: 20,
      background: Colors.red
  ),
)
```

</TabItem>

</Tabs>

---

##### 3. StatusIndicator Style

To apply customized styles to the Status Indicator widget in the `CometChatUsers` widget, You can use the following code snippet. For further insights on Status Indicator Styles [refer](/ui-kit/flutter/status-indicator)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  statusIndicatorStyle: StatusIndicatorStyle(
      borderRadius: 10,
      gradient: LinearGradient(colors: [Colors.red, Colors.orange], begin: Alignment.topLeft, end: Alignment.bottomRight)
  ),
)
```

</TabItem>

</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the widget. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/users_functionality_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_functionality_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  title: "Your Title",
  backButton: Icon(Icons.add_alert, color: Color(0xFF6851D6)),
  searchPlaceholder: "Search Users",
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/users_functionality_after_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_functionality_after_cometchat_screens.png)

</TabItem>

</Tabs>

List of properties exposed by `CometChatUsers`

| Property               | Data Type | Description                                                              |
| ---------------------- | --------- | ------------------------------------------------------------------------ |
| `hideSeparator`        | `bool`    | Flag indicating whether to hide separators between list items.           |
| `theme`                | `Theme?`  | Theme object for customizing the appearance of the widget.               |
| `searchPlaceholder`    | `String?` | Placeholder text for the search input box.                               |
| `backButton`           | `Widget?` | Widget for the back button in the app bar.                               |
| `showBackButton`       | `bool`    | Flag indicating whether to show the back button in the app bar.          |
| `searchBoxIcon`        | `Widget?` | Widget for the search box icon.                                          |
| `hideSearch`           | `bool`    | Flag indicating whether to hide the search input box.                    |
| `title`                | `String?` | Title of the widget or widget.                                           |
| `errorStateText`       | `String?` | Text to display in the error state view.                                 |
| `emptyStateText`       | `String?` | Text to display in the empty state view.                                 |
| `hideError`            | `bool`    | Flag indicating whether to hide the error state view.                    |
| `hideSectionSeparator` | `bool`    | Flag indicating whether to hide separators between sections in the list. |
| `disableUsersPresence` | `bool`    | Flag indicating whether to disable users' presence status indicators.    |
| `selectionIcon`        | `Widget?` | Widget for displaying the selection icon in the app bar.                 |
| `submitIcon`           | `Widget?` | Widget for displaying the submit icon in the app bar.                    |
| `hideAppbar`           | `bool`    | Flag indicating whether to hide the app bar.                             |

---

### Advance

For advanced-level customization, you can set custom views to the widget. This lets you tailor each aspect of the widget to fit your exact needs and application aesthetics. You can create and define your own widget and then incorporate those into the widget.

---

#### ListItemView

With this function, you can assign a custom ListItem to the `CometChatUsers` Widget.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  listItemView: (user) {
    return Placeholder();
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/users_list_item_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_list_item_view_cometchat_screens.png)

</TabItem>

</Tabs>

**Example**

Here is the complete example for reference:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="custom_list_item.dart"
import 'package:flutter/material.dart';
import 'package:flutter_uikit_docs_sample_app/utils/custom_colors.dart';
import 'package:intl/intl.dart';

class CustomListItems extends StatelessWidget {
  final String name;
  final DateTime? lastMessageTime;
  final String? avatarUrl;

  const CustomListItems({
    super.key,
    required this.name,
    this.lastMessageTime,
    this.avatarUrl,
  });

  String formatDateTime(DateTime dateTime) {
    final now = DateTime.now();
    final difference = now.difference(dateTime);

    if (difference.inDays == 0) {
      return DateFormat('HH:mm').format(dateTime);
    } else if (difference.inDays == 1) {
      return 'Yesterday';
    } else {
      return DateFormat('yyyy-MM-dd').format(dateTime);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 5, bottom: 5),
      padding: const EdgeInsets.all(8.0),
      decoration: BoxDecoration(
        border: Border.all(color: Color(0xFF6851D6), width: 1), // Example border color
        borderRadius: BorderRadius.circular(8.0),
        color: Color(0xFFEEEEEE)
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  name,
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                lastMessageTime == null ? Container() : Text(formatDateTime(lastMessageTime!)),
              ],
            ),
          ),
          const SizedBox(width: 8.0),
          if (avatarUrl != null)
            ClipOval(
              child: Image.network(
                avatarUrl!,
                width: 40.0,
                height: 40.0,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) {
                  return const Icon(
                    Icons.person,
                    size: 40.0,
                  );
                },
              ),
            )
          else
            const Icon(
              Icons.person,
              size: 40.0,
            ),
        ],
      ),
    );
  }
}
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="main.dart"
CometChatUsers(
  listItemView: (user) {
    return CustomListItems(
      name: user.name,
      avatarUrl: user.avatar,
    );
  },
)
```

</TabItem>

</Tabs>

---

#### SubtitleView

You can customize the subtitle view for each item to meet your specific preferences and needs.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  subtitleView: (context, conversation) {
    return const Row(
      children: [
        Icon(Icons.call, color: Color(0xFF6851D6), size: 25,),
        SizedBox(width: 10),
        Icon(Icons.video_call, color: Color(0xFF6851D6), size: 25,),
      ],
    );
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/users_subtitle_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_subtitle_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### AppBarOptions

You can set the Custom AppBarOptions to the Conversations widget.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  appBarOptions: (context) {
    return [
      InkWell(
        onTap: () {
          // TODO
        },
        child: const Icon(Icons.ac_unit, color: Color(0xFF6851D6)),
      ),
      const SizedBox(width: 10)
    ];
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/users_set_menu_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_set_menu_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### EmptyStateView

You can set a custom `EmptyStateView` using `setEmptyStateView` to match the empty view of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  emptyStateView: (context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Spacer(),
        Icon(Icons.error_outline, color: Colors.red, size: 100,),
        SizedBox(height: 20,),
        Text("Your Custom Error Message"),
        Spacer(),
      ],
    );
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/users_set_empty_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_set_empty_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### ErrorStateView

You can set a custom `ErrorStateView` using `setErrorStateView` to match the error view of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatUsers(
  errorStateView: (context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      child: const Column(
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
    );
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/users_set_error_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_set_error_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### LoadingStateView

You can set a custom loader widget using `loadingStateView` to match the loading UI of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="widget"
CometChatUsers(
  loadingStateView: (context) {
    return Placeholder(); // Replace this placeholder with your custom widget.
  },
)
```

</TabItem>

</Tabs>

Here is the complete example for reference:

**Example**

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="main.dart"
CometChatUsers(
  loadingStateView: (context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      child: Center(
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

![](../../assets/android/users_set_loading_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/users_set_loading_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---
