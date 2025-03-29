---
sidebar_position: 1
title: Groups
slug: /groups
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip id="my-tooltip-html-prop" html="Not available in Group Members Configuration object"/>

## Overview

`CometChatGroups` functions as a standalone [Widget](/ui-kit/flutter/components-overview#components) designed to create a screen displaying a list of groups, with the added functionality of enabling users to search for specific groups. Acting as a container widget, `CometChatGroups` encapsulates and formats the `CometChatListBase` and `CometChatGroupList` widgets without introducing any additional behavior of its own.

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/groups_overview_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_overview_cometchat_screens.png)

</TabItem>

</Tabs>

The `CometChatGroups` widget is composed of the following BaseWidget:

| Widgets                                        | Description                                                                                                                                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [CometChatListBase](/ui-kit/flutter/list-base) | `CometChatListBase` serves as a container widget equipped with a title (navigationBar), search functionality (search-bar), background settings, and a container for embedding a list view. |
| [CometChatListItem](/ui-kit/flutter/list-item) | This widget renders information extracted from a `Group` object onto a tile, featuring a title, subtitle, leading view, and trailing view.                                                 |

## Usage

### Integration

As `CometChatGroups` is a custom **widget**, it can be launched directly by user actions such as button clicks or other interactions.

You can launch `CometChatGroups` directly using `Navigator.push`, or you can define it as a widget within the `build` method of your `State` class.

##### 1. Using Navigator to Launch `CometChatGroups`

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
Navigator.push(context, MaterialPageRoute(builder: (context) => const CometChatGroups()));
```

</TabItem>

</Tabs>

##### 2. Embedding `CometChatGroups` as a Widget in the build Method

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class Groups extends StatefulWidget {
  const Groups({super.key});

  @override
  State<Groups> createState() => _GroupsState();
}

class _GroupsState extends State<Groups> {

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
        body: SafeArea(
            child: CometChatGroups()
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

##### 1. onItemTap

This method proves valuable when users seek to override onItemTap functionality within CometChatGroups, empowering them with greater control and customization options.

The `onItemTap` action doesn't have a predefined behavior. You can override this action using the following code snippet.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
  onItemTap: (context, group) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

##### 2. onBack

Enhance your application's functionality by leveraging the `onBack` feature. This capability allows you to customize the behavior associated with navigating back within your app. Utilize the provided code snippet to override default behaviors and tailor the user experience according to your specific requirements.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
  onBack: () {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

##### 3. onError

You can customize this behavior by using the provided code snippet to override the `onError` and improve error handling.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
  onError: (e) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

##### 4. onItemLongPress

This method becomes invaluable when users seek to override long-click functionality within CometChatGroups, offering them enhanced control and flexibility in their interactions.

The `onItemLongPress` action doesn't have a predefined behavior. You can override this action using the following code snippet.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
  onItemLongPress: (context, group) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

##### 5. onSelection

When the `onSelection` event is triggered, it furnishes the list of selected groups. This event can be invoked by any button or action within the interface. You have the flexibility to implement custom actions or behaviors based on the selected groups.

This action does not come with any predefined behavior. However, you have the flexibility to override this event and tailor it to suit your needs using the following code snippet.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
  selectionMode: SelectionMode.multiple,
  activateSelection: ActivateSelection.onClick,
  onSelection: (groupList) {
    // TODO("Not yet implemented")
  }
)
```

</TabItem>

</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

##### 1. GroupsRequestBuilder

The [GroupsRequestBuilder](/sdk/flutter/retrieve-groups) enables you to filter and customize the group list based on available parameters in GroupsRequestBuilder. This feature allows you to create more specific and targeted queries when fetching groups. The following are the parameters available in [GroupsRequestBuilder](/sdk/flutter/retrieve-groups)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
    groupsRequestBuilder: GroupsRequestBuilder()
        ..limit = 10
)
```

</TabItem>

</Tabs>

| Property           | Description                                               | Code                    |
| ------------------ | --------------------------------------------------------- | ----------------------- |
| **Joined Only**    | Flag to include only joined groups. Defaults to `false`.  | `joinedOnly: bool`      |
| **Limit**          | Number of results to limit the query.                     | `limit: int`            |
| **Search Keyword** | Keyword for searching groups.                             | `searchKeyword: String` |
| **Tags**           | Tags for filtering groups.                                | `tags: List<String>`    |
| **With Tags**      | Flag to include tags in the results. Defaults to `false`. | `withTags: bool`        |

---

### Events

[Events](/ui-kit/flutter/components-overview#events) are emitted by a `CometChatGroups` Widget. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The list of events emitted by the `CometChatGroups` widget is as follows.

| Events                      | Description                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ccGroupCreated`            | This gets triggered when the logged in user creates a group.                                             |
| `ccGroupDeleted`            | This gets triggered when the logged in user deletes a group.                                             |
| `ccGroupLeft`               | This gets triggered when the logged in user leaves a group.                                              |
| `ccGroupMemberScopeChanged` | This gets triggered when the logged in user changes the scope of another group member.                   |
| `ccGroupMemberBanned`       | This gets triggered when the logged in user bans a group member from the group.                          |
| `ccGroupMemberKicked`       | This gets triggered when the logged in user kicks another group member from the group.                   |
| `ccGroupMemberUnbanned`     | This gets triggered when the logged in user unbans a user banned from the group.                         |
| `ccGroupMemberJoined`       | This gets triggered when the logged in user joins a group.                                               |
| `ccGroupMemberAdded`        | This gets triggered when the logged in user adds new members to the group.                               |
| `ccOwnershipChanged`        | This gets triggered when the logged in user transfers the ownership of their group to some other member. |

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="your_screen.dart"
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:cometchat_sdk/models/action.dart' as cc;
import 'package:flutter/material.dart';

class YourScreen extends StatefulWidget {
  const YourScreen({super.key});

  @override
  State<YourScreen> createState() => _YourScreenState();
}

class _YourScreenState extends State<YourScreen> with CometChatGroupEventListener {

  @override
  void initState() {
    super.initState();
    CometChatGroupEvents.addGroupsListener("listenerId", this); // Add the listener
  }

  @override
  void dispose(){
    super.dispose();
    CometChatGroupEvents.removeGroupsListener("listenerId"); // Remove the listener
  }


  @override
  void ccGroupCreated(Group group) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupDeleted(Group group) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupLeft(cc.Action message, User leftUser, Group leftGroup) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberScopeChanged(cc.Action message, User updatedUser, String scopeChangedTo, String scopeChangedFrom, Group group) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberBanned(cc.Action message, User bannedUser, User bannedBy, Group bannedFrom) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberKicked(cc.Action message, User kickedUser, User kickedBy, Group kickedFrom) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberUnbanned(cc.Action message, User unbannedUser, User unbannedBy, Group unbannedFrom) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberJoined(User joinedUser, Group joinedGroup) {
    // TODO("Not yet implemented")
  }

  @override
  void ccGroupMemberAdded(List<cc.Action> messages, List<User> usersAdded, Group groupAddedIn, User addedBy) {
    // TODO("Not yet implemented")
  }

  @override
  void ccOwnershipChanged(Group group, GroupMember newOwner) {
    // TODO("Not yet implemented")
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

To fit your app's design requirements, you can customize the appearance of the groups widget. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the widget in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the widget.

##### 1. Groups Style

Enhance your `CometChatGroups` Widget by setting the `GroupsStyle` to customize its appearance.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
  groupsStyle: GroupsStyle(
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

![](../../assets/android/groups_style_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_style_cometchat_screens.png)

</TabItem>

</Tabs>

List of properties exposed by `GroupsStyle`

| Property                           | Description                                                   | Code                                  |
| ---------------------------------- | ------------------------------------------------------------- | ------------------------------------- |
| **Back Icon Tint**                 | Provides color for the back icon                              | `backIconTint: Color?`                |
| **Empty Text Style**               | Provides styling for text to indicate group list is empty     | `emptyTextStyle: TextStyle?`          |
| **Error Text Style**               | Provides styling for text to indicate some error has occurred | `errorTextStyle: TextStyle?`          |
| **Loading Icon Tint**              | Provides color to loading icon                                | `loadingIconTint: Color?`             |
| **Password Group Icon Background** | Provides color to the icon for password protected group       | `passwordGroupIconBackground: Color?` |
| **Private Group Icon Background**  | Provides color to the icon for private group                  | `privateGroupIconBackground: Color?`  |
| **Search Background**              | Provides color for the search box                             | `searchBackground: Color?`            |
| **Search Border Color**            | Provides color for the border around the search box           | `searchBorderColor: Color?`           |
| **Search Border Radius**           | Provides radius for the border around the search box          | `searchBorderRadius: double?`         |
| **Search Border Width**            | Provides width to the border around the search box            | `searchBorderWidth: double?`          |
| **Search Icon Tint**               | Provides color for the search icon                            | `searchIconTint: Color?`              |
| **Search Placeholder Style**       | Provides styling for the hint text inside the search box      | `searchPlaceholderStyle: TextStyle?`  |
| **Search Text Style**              | Provides styling for text inside the search box               | `searchTextStyle: TextStyle?`         |
| **Selection Icon Tint**            | Set selection icon color                                      | `selectionIconTint: Color?`           |
| **Submit Icon Tint**               | Set submit icon tint                                          | `submitIconTint: Color?`              |
| **Subtitle Text Style**            | Provides styling to the text in the subtitle                  | `subtitleTextStyle: TextStyle?`       |
| **Title Style**                    | Provides styling for title text                               | `titleStyle: TextStyle?`              |

##### 2. Avatar Style

To apply customized styles to the `Avatar` widget in the `CometChatGroups` widget, you can use the following code snippet. For further insights on `Avatar` Styles [refer](/ui-kit/flutter/avatar)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
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

To apply customized styles to the Status Indicator widget in the `CometChatGroups` widget, You can use the following code snippet. For further insights on Status Indicator Styles [refer](/ui-kit/flutter/status-indicator)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
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

![](../../assets/android/groups_functionality_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_functionality_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
  title: "Your Title",
  backButton: Icon(Icons.add_alert, color: Color(0xFF6851D6)),
  searchPlaceholder: "Search Group",
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/groups_functionality_after_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_functionality_after_cometchat_screens.png)

</TabItem>

</Tabs>

List of properties exposed by `CometChatGroups`

| Property                | Description                                                                          | Code                                    |
| ----------------------- | ------------------------------------------------------------------------------------ | --------------------------------------- |
| **Activate Selection**  | Lets the widget know if groups are allowed to be selected                            | `activateSelection: ActivateSelection?` |
| **Back Button**         | Back button                                                                          | `backButton: Widget?`                   |
| **Controller**          | Sets controller for the list                                                         | `controller: ScrollController?`         |
| **Controller Tag**      | Group tag to create from, if this is passed it's parent responsibility to close this | `controllerTag: String?`                |
| **Empty State Text**    | Text to be displayed when the list is empty                                          | `emptyStateText: String?`               |
| **Error State Text**    | Text to be displayed when error occurs                                               | `errorStateText: String?`               |
| **Hide Appbar**         | Toggle visibility for app bar                                                        | `hideAppbar: bool?`                     |
| **Hide Error**          | Toggle visibility of error dialog                                                    | `hideError: bool?`                      |
| **Hide Search**         | Switch on/off search input                                                           | `hideSearch: bool`                      |
| **Hide Separator**      |                                                                                      | `hideSeparator: bool`                   |
| **Password Group Icon** | Sets icon in status indicator for password group                                     | `passwordGroupIcon: Widget?`            |
| **Private Group Icon**  | Sets icon in status indicator for private group                                      | `privateGroupIcon: Widget?`             |
| **Search Box Icon**     | Search icon                                                                          | `searchBoxIcon: Widget?`                |
| **Search Placeholder**  | Placeholder text of search input                                                     | `searchPlaceholder: String?`            |
| **Selection Icon**      | Change selection icon                                                                | `selectionIcon: Widget?`                |
| **Selection Mode**      | Specifies mode groups module is opening in                                           | `selectionMode: SelectionMode?`         |
| **Submit Icon**         | Override the default submit icon                                                     | `submitIcon: Widget?`                   |
| **Theme**               | Can pass custom theme                                                                | `theme: CometChatTheme?`                |
| **Title**               | Sets title for the list                                                              | `title: String?`                        |

---

### Advance

For advanced-level customization, you can set custom views to the widget. This lets you tailor each aspect of the widget to fit your exact needs and application aesthetics. You can create and define your own widget and then incorporate those into the widget.

---

#### ListItemView

With this function, you can assign a custom ListItem to the `CometChatGroups` Widget.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
  listItemView: (group) {
    return Placeholder(); // Replace this placeholder with your custom widget.
  },
)
```

</TabItem>

</Tabs>

**Example**

Here is the complete example for reference:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="custom_list_item.dart"
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../helper/utils/custom_colors.dart';

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
@override
Widget build(BuildContext context) {
  return Scaffold(
      body: SafeArea(
          child:
          CometChatGroups(
            listItemView: (group) {
              return CustomListItems(
                name: group.name,
                avatarUrl: group.icon,
              );
            },
          )
      )
  );
}
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/groups_set_list_item_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_set_list_item_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### SubtitleView

You can customize the subtitle view for each item to meet your specific preferences and needs.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
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

![](../../assets/android/groups_set_subtitle_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_set_subtitle_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### AppBarOptions

You can set the Custom `appBarOptions` to the `CometChatGroups` widget.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
  appBarOptions: (context) {
    return [
      InkWell(
        onTap: () {
          // TODO("Not yet implemented")
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

![](../../assets/android/groups_set_menu_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_set_menu_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### EmptyStateView

You can set a custom `EmptyStateView` using `emptyStateView` to match the empty UI of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
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

![](../../assets/android/groups_set_empty_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_set_empty_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### ErrorStateView

You can set a custom `ErrorStateView` using `errorStateView` to match the error UI of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
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

![](../../assets/android/groups_set_error_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_set_error_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### LoadingStateView

You can set a custom `LoadingStateView` using `loadingStateView` to match the loading UI of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatGroups(
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

![](../../assets/android/groups_set_loading_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/groups_set_loading_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---
