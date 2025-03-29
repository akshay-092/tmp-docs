---
sidebar_position: 8
title: Transfer Ownership
slug: /group-transfer-ownership
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip id="my-tooltip-html-prop" html="Not available in Group Members Configuration object"/>

## Overview

`CometChatTransferOwnership` is a [Widget](/ui-kit/flutter/components-overview#components) that allows the current owner or administrator of a group to transfer the ownership rights and administrative control of that group to another user. By transferring ownership, the original owner can designate a new user as the group owner, giving them full control and administrative privileges over the group.

`CometChatTransferOwnership` is a [Widget](/ui-kit/flutter/components-overview#components) that allows the current owner or administrator of a group to transfer the ownership rights and administrative control of that group to another user. By transferring ownership, the original owner can designate a new user as the group owner, giving them full control and administrative privileges over the group.

Here are some key points regarding the transfer ownership feature in CometChat:

1. **Administrative Control**: The current owner or administrator of the group has the authority to initiate the transfer of ownership. This feature is typically available to ensure flexibility and allow smooth transitions of group ownership.
2. **New Group Owner**: During the transfer process, the current owner can select a specific user from the group members to become the new owner. This new owner will then assume the responsibilities and privileges associated with being the group owner.
3. **Administrative Privileges**: As the new owner, the designated user will gain full administrative control over the group. They will have the ability to manage group settings, add or remove members, moderate conversations, and perform other administrative actions.
4. **Group Continuity**: Transferring ownership does not disrupt the existing group or its content. The transfer ensures the continuity of the group while transferring the administrative control to a new owner.

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/transfer_ownership_overview_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/transfer_ownership_overview_cometchat_screens.png)

</TabItem>

</Tabs>

The Transfer Ownership widget is composed of the following BaseWidgets:

| Widgets                                                | Description                                                                                                                                                                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CometchatGroupMembers](/ui-kit/flutter/group-members) | `CometChatGroupMembers` is an independent widget designed to create a user-friendly screen for browsing and managing group members. Users can effortlessly search for specific members and transfer ownership |
| [CometChatListItem](/ui-kit/flutter/list-item)         | This widget renders information extracted from a `User` object onto a tile, featuring a title, subtitle, leading view, and trailing view.                                                                     |

---

## Usage

### Integration

`CometChatTransferOwnership`, as a composed of the [CometChatGroupMembers](./group-members), offers flexible integration options, allowing it to be launched directly via button clicks or any user-triggered action. Additionally, it seamlessly integrates into activity and Fragment. With transfer ownership, users gain access to a wide range of parameters and methods for effortless customization of its user interface.

You can launch `CometChatTransferOwnership` directly using `Navigator.push` , or you can define it as a widget within the `build` method of your `State` class.

##### 1. Using Navigator to Launch `CometChatTransferOwnership`

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
Navigator.push(context, MaterialPageRoute(builder: (context) => CometChatTransferOwnership(group: Group(guid: "", name: "", type: "")))); // A group object is required to launch this widget.
```

</TabItem>

</Tabs>

##### 2. Embedding `CometChatTransferOwnership` as a Widget in the build Method

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class TransferOwnership extends StatefulWidget {
  const TransferOwnership({super.key});

  @override
  State<TransferOwnership> createState() => _TransferOwnershipState();
}

class _TransferOwnershipState extends State<TransferOwnership> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
            child: CometChatTransferOwnership(
              group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
            ) // A group object is required to launch this widget.
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

##### 1. onTransferOwnership

This is a callback function that is triggered when the ownership of a group is transferred. It takes two parameters: a GroupMember object representing the new owner of the group, and a Group object representing the group whose ownership is being transferred.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  onTransferOwnership: (groupMember, group) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

##### 2. onBack

Enhance your application's functionality by leveraging the `onBack` feature. This capability allows you to customize the behavior associated with navigating back within your app. Utilize the provided code snippet to override default behaviors and tailor the user experience according to your specific requirements.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
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
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  onError: (e) {
    // TODO("Not yet implemented")
  },
)
```

</TabItem>

</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Widget. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

##### 1. GroupMembersRequestBuilder

The [GroupMembersRequestBuilder](/sdk/flutter/retrieve-group-members) enables you to filter and customize the group members list based on available parameters in `GroupMembersRequestBuilder`. This feature allows you to create more specific and targeted queries when fetching groups. The following are the parameters available in [GroupMembersRequestBuilder](/sdk/flutter/retrieve-group-members)

| Property           | Description                                                                                 | Code                     |
| ------------------ | ------------------------------------------------------------------------------------------- | ------------------------ |
| **Guid**           | Group ID for the group whose members are to be fetched                                      | `guid: String`           |
| **Limit**          | Sets the number of members that can be fetched in a single request, suitable for pagination | `limit: int?`            |
| **Search Keyword** | Keyword for searching                                                                       | `searchKeyword: String?` |
| **Scopes**         | Used for fetching group members based on multiple scopes                                    | `scopes: List<String>?`  |

**Example**

In the example below, we are applying a filter to the members by setting the limit to 10.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatTransferOwnership(
    group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
    groupMembersRequestBuilder: GroupMembersRequestBuilder("guid")
      ..limit = 10
)
```

</TabItem>

</Tabs>

---

##### 2. CustomTransferOwnershipProtocol

The SearchRequestBuilder uses [GroupMembersRequestBuilder](/sdk/flutter/retrieve-group-members) enables you to filter and customize the search list based on available parameters in `GroupMembersRequestBuilder`.
This feature allows you to keep uniformity between the displayed Group Members List and searched Group Members List.

**Example**

This feature allows you to keep uniformity between the displayed Members list and searched Members.

**Example**

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="custom_protocol.dart"
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';

class CustomTransferOwnershipProtocol extends GroupMembersBuilderProtocol {
  const CustomTransferOwnershipProtocol(super.builder);

  @override
  GroupMembersRequest getRequest() {
      return requestBuilder.build();
  }

  @override
  GroupMembersRequest getSearchRequest(String val) {
      requestBuilder.searchKeyword = val;
      return requestBuilder.build();
  }
}
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="main.dart"
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  groupMembersProtocol: CustomTransferOwnershipProtocol(GroupMembersRequestBuilder("")..searchKeyword = "searchKeyword"),
)
```

</TabItem>

</Tabs>

---

### Events

[Events](/ui-kit/flutter/components-overview#events) are emitted by a `Widget`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

Events emitted by the Join Group widget is as follows.

| Event                  | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| **ccOwnershipChanged** | Triggers when the ownership of a group member is changed successfully |

**Example**

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

To fit your app's design requirements, you can customize the appearance of the Transfer Ownership widget. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using **Style** you can **customize** the look and feel of the widget in your app, These parameters typically control elements such as the **color**, **size**, **shape**, and **fonts** used within the widget.

##### 1. TransferOwnership Style <a data-tooltip-id="my-tooltip-html-prop"> <span class="material-icons red">report</span> </a>

You can set the transferOwnershipStyle to the Transfer Ownership Widget to customize the styling.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  transferOwnershipStyle: TransferOwnershipStyle(
      memberScopeStyle: TextStyle(color: Colors.red),
      submitIconTint: Colors.red,
      selectIconTint: Colors.red,
  ),
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/transfer_ownership_style_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/transfer_ownership_style_cometchat_screens.png)

</TabItem>

</Tabs>

List of properties exposed by `TransferOwnershipStyle`

| Property               | Description                                                     | Code                           |
| ---------------------- | --------------------------------------------------------------- | ------------------------------ |
| **Member Scope Style** | Used to customize the appearance of the text in trailing widget | `memberScopeStyle: TextStyle?` |
| **Submit Icon Tint**   | Will override the color of the default selection complete icon  | `submitIconTint: Color?`       |
| **Select Icon Tint**   | Will override the color of the default selection icon           | `selectIconTint: Color?`       |

##### 2. Avatar Style

To apply customized styles to the `Avatar` Widget in the Banned Members Widget, you can use the following code snippet. For further insights on `Avatar` Styles [refer](/ui-kit/flutter/avatar)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
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

To apply customized styles to the Status Indicator widget in the `CometChatTransferOwnership` Widget, You can use the following code snippet. For further insights on Status Indicator Styles [refer](/ui-kit/flutter/status-indicator)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  statusIndicatorStyle: StatusIndicatorStyle(
      borderRadius: 10,
      gradient: LinearGradient(colors: [Colors.red, Colors.orange], begin: Alignment.topLeft, end: Alignment.bottomRight)
  ),
)
```

</TabItem>

</Tabs>

---

##### 4. ListItem Style

To apply customized styles to the `ListItemStyle` in the `CometChatTransferOwnership` Widget, you can use the following code snippet. For further insights on `List Item` Styles [refer](/ui-kit/flutter/list-item)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  hideSeparator: true,
  listItemStyle: ListItemStyle(
      background: Color(0xFFE4EBF5),
      borderRadius: 20,
      border: Border.all(width: 2),
      margin: EdgeInsets.only(top: 10),
      padding: EdgeInsets.only(left: 10)
  ),
)
```

</TabItem>

</Tabs>

---

##### 5. GroupMembers Style

You can set the `GroupMembersStyle` to the Transfer Ownership Widget to customize the styling, you can use the following code snippet. For further insights on `GroupMembers` Styles [refer](/ui-kit/flutter/group-members)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  groupMemberStyle: GroupMembersStyle(
      background: Color(0xFFE4EBF5),
      border: Border.all(width: 2),
      borderRadius: 20,
  ),
)
```

</TabItem>

</Tabs>

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the widget. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatTransferOwnership(
    group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
    title: "Your Title",
    hideSeparator: true,
    hideSearch: true,
    showBackButton: false
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/transfer_ownership_functionality_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/transfer_ownership_functionality_cometchat_screens.png)

</TabItem>

</Tabs>

List of Functionality exposed by `CometChatTransferOwnership`

| Property                   | Description                                                                  | Code                          |
| -------------------------- | ---------------------------------------------------------------------------- | ----------------------------- |
| **Back Button**            | Back button widget                                                           | `backButton: Widget?`         |
| **Disable Users Presence** | Controls visibility of status indicator                                      | `disableUsersPresence: bool?` |
| **Empty State Text**       | Text to be displayed when the list is empty                                  | `emptyStateText: String?`     |
| **Error State Text**       | Text to be displayed when error occur                                        | `errorStateText: String?`     |
| **Group**                  | Stores a reference to the group for which the ownership is being transferred | `group: Group`                |
| **Hide Search**            | Switch on/off search input                                                   | `hideSearch: bool?`           |
| **Hide Separator**         | Toggle visibility of separator                                               | `hideSeparator: bool?`        |
| **Search Box Icon**        | Search icon widget                                                           | `searchBoxIcon: Widget?`      |
| **Search Placeholder**     | Placeholder text of search input                                             | `searchPlaceholder: String?`  |
| **Select Icon**            | Will override the default selection icon                                     | `selectIcon: Widget?`         |
| **Show Back Button**       | Switch on/off back button                                                    | `showBackButton: bool?`       |
| **Submit Icon**            | Will override the default selection complete icon                            | `submitIcon: Widget?`         |
| **Theme**                  | Can pass custom theme                                                        | `theme: CometChatTheme?`      |
| **Title**                  | Sets title for the list                                                      | `title: String?`              |

---

### Advance

For advanced-level customization, you can set custom views to the widget. This lets you tailor each aspect of the widget to fit your exact needs and application aesthetics. You can create and define your own widget and then incorporate those into the widget.

#### ListItemView

With this function, you can assign a custom ListItem to the `CometChatTransferOwnership` Widget.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="widget"
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  listItemView: (groupMember) {
    return Placeholder(); // Replace this placeholder with your custom widget.
  },
)
```

</TabItem>

</Tabs>

Here is the complete example for reference:

**Example**

You can indeed create a custom widget named `custom_list_item.dart` for more complex or unique list items.

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
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  listItemView: (groupMember) {
    return CustomListItems(
      name: groupMember.name,
      avatarUrl: groupMember.avatar,
    ); // Replaced Placeholder with CustomListItems widget.
  },
)
```

</TabItem>

</Tabs>

<!-- <Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/transfer_ownership_set_listitem_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/transfer_ownership_set_listitem_view_cometchat_screens.png)

</TabItem>

</Tabs> -->

---

#### SubtitleView

You can customize the subtitle view for each item to meet your specific preferences and needs.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="widget"
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  subtitleView: (context, groupMember) {
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
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  subtitleView: (context, groupMember) {
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

![](../../assets/android/transfer_ownership_set_subtitle_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/transfer_ownership_set_subtitle_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### EmptyStateView

You can set a custom `EmptyStateView` using `emptyStateView` to match the error widget of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="widget"
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  emptyStateView: (context) {
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
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  emptyStateView: (context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      child: Center(
          child: const Column(
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
    ); // Replaced the placeholder with a custom widget.
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/transfer_ownership_empty_state_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/transfer_ownership_empty_state_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### LoadingStateView

You can set a custom loader widget using `loadingStateView` to match the loading UI of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="widget"
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
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
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
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

![](../../assets/android/transfer_ownership_set_loading_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/transfer_ownership_set_loading_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### ErrorStateView

You can set a custom `ErrorStateView` using `errorStateView` to match the error UI of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="widget"
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  errorStateView: (context) {
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
CometChatTransferOwnership(
  group: Group(guid: "", name: "", type: ""), // A group object is required to launch this widget.
  errorStateView: (context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      child: Center(
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
      ),
    ); // Replaced the placeholder with a custom widget.
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/transfer_ownership_set_error_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/transfer_ownership_set_error_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---
