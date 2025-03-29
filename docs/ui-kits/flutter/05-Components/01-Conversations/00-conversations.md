---
sidebar_position: 1
title: Conversations
slug: /conversations
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `CometChatConversations` is a [Widget](/ui-kit/flutter/components-overview#components), That shows all conversations related to the currently logged-in user,

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_overview_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_overview_cometchat_screens.png)

</TabItem>

</Tabs>

## Usage

### Integration

As `CometChatConversations` is a widget, it can be initiated either by tapping a button or through the trigger of any event. It offers multiple parameters and methods for tailoring its user interface.

You can launch `CometChatConversations` directly using `Navigator.push`, or you can define it as a widget within the `build` method of your `State` class.

##### 1. Using Navigator to Launch `CometChatConversations`

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
Navigator.push(context, MaterialPageRoute(builder: (context) => const CometChatConversations()));
```

</TabItem>

</Tabs>

##### 2. Embedding `CometChatConversations` as a Widget in the build Method

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class Conversations extends StatefulWidget {
  const Conversations({super.key});

  @override
  State<Conversations> createState() => _ConversationsState();
}

class _ConversationsState extends State<Conversations> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: CometChatConversations(),
      ),
    );
  }
}
```

</TabItem>

</Tabs>

### Actions

[Actions](/ui-kit/flutter/components-overview#actions) dictate how a widget functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the widget to fit your specific needs.

1. ##### onItemTap

`onItemTap` is triggered when you click on a ListItem of the `CometChatConversations` widget.
This `onItemTap` method proves beneficial when a user intends to customize the click behavior in CometChatConversations.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    onItemTap: (conversation) => {
        // TODO("Not yet implemented")
    }
),
```

</TabItem>

</Tabs>

---

##### 2. onBack

This `onBack` method becomes valuable when a user needs to override the action triggered upon pressing the back button in CometChatConversations.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    onBack: () => {
        // TODO("Not yet implemented")
    },
),
```

</TabItem>

</Tabs>

---

##### 3. setOnSelection

The `onSelection` feature enables selection with modes: `SelectionMode.single` and `SelectionMode.multiple`.

The `onSelection` event is triggered upon the completion of a selection in `onSelection`. This returns the selected conversations list when the callback is triggered. It can be executed with any button or action.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    selectionMode: SelectionMode.multiple,
    onSelection: (list) => {
        // TODO("Not yet implemented")
    },
),
```

</TabItem>

</Tabs>

---

##### 4. onError

This method proves helpful when a user needs to customize the action taken upon encountering an error in CometChatConversations.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    onError: (e) {
        // TODO("Not yet implemented")
    },
)
```

</TabItem>

</Tabs>

---

### Filters

You can set `ConversationsRequestBuilder` in the `CometChatConversations` widget to filter the conversation list. You can modify the builder as per your specific requirements with multiple options available to know more refer to [ConversationsRequestBuilder](/sdk/flutter/retrieve-conversations).

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    conversationsRequestBuilder: ConversationsRequestBuilder()
        ..conversationType = "user"
        ..limit = 10
        ..withTags = false,
)
```

</TabItem>

</Tabs>

You can set filters using the following parameters:

| Property                     | Description                                          | Code                             |
| ---------------------------- | ---------------------------------------------------- | -------------------------------- |
| **Build**                    | Builds and returns an `ConversationsRequest` object. | `build(): ConversationsRequest ` |
| **Conversation Type**        | Type of the conversation.                            | `conversationType: String?`      |
| **Limit**                    | Number of results to limit the query.                | `limit: int?`                    |
| **Tags**                     | Tags for filtering.                                  | `tags: List<String>?`            |
| **With Tags**                | Flag to include tags.                                | `withTags: bool?`                |
| **With User And Group Tags** | Flag to include user and group tags.                 | `withUserAndGroupTags: bool?`    |

---

### Events

[Events](/ui-kit/flutter/components-overview#events) are emitted by a `Widget`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

##### 1. Conversation Deleted

This `ccConversationDeleted` will be emitted when the user deletes a conversation

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';

class _YourScreenState extends State<YourScreen> with CometChatConversationEventListener {

  @override
  void initState() {
    super.initState();
    CometChatConversationEvents.addConversationListListener("listenerId", this); // Add the listener
  }

  @override
  void dispose(){
    super.dispose();
    CometChatConversationEvents.removeConversationListListener("listenerId"); // Remove the listener
  }

  @override
  void ccConversationDeleted(Conversation conversation) {
    // TODO("Not yet implemented")
  }
}
```

</TabItem>

</Tabs>

---

## Customization

To align with your app's design specifications, you have the flexibility to customize the appearance of the conversation widget. We offer accessible methods that empower you to tailor the experience and functionality to meet your unique requirements.

### Style

Using Style you can customize the look and feel of the widget in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the widget.

##### 1. Conversation Style

You can set the `ConversationsStyle` to the `CometChatConversations` Widget to customize the styling.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    conversationsStyle: ConversationsStyle(
        background: Colors.white300,
        backIconTint: Colors.red,
    )
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_style_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_style_cometchat_screens.png)

</TabItem>

</Tabs>

List of properties exposed by ConversationsStyle

| Property                           | Description                                                                                           | Code                                 |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **Back Icon Tint**                 | Used to set the color of the back icon in the app bar.                                                | `backIconTint: Color`                |
| **Background**                     | Used to set background color.                                                                         | `background: Color`                  |
| **Border**                         | Used to set border.                                                                                   | `border: BoxBorder`                  |
| **Border Radius**                  | Used to set border radius.                                                                            | `borderRadius: double`               |
| **Empty Text Style**               | Used to set the style of the response text shown when fetching the list of conversations is empty.    | `emptyTextStyle: TextStyle`          |
| **Error Text Style**               | Used to set the style of the response text shown when an error occurs while fetching conversations.   | `errorTextStyle: TextStyle`          |
| **Gradient**                       | Used to set a gradient background.                                                                    | `gradient: Gradient`                 |
| **Height**                         | Used to set height.                                                                                   | `height: double`                     |
| **Last Message Style**             | Used to customize the appearance of the last message in the conversation item's subtitle.             | `lastMessageStyle: TextStyle`        |
| **Loading Icon Tint**              | Used to set the color of the loading icon shown during conversations fetching.                        | `loadingIconTint: Color`             |
| **Online Status Color**            | Used to set the color of the status indicator if a user is online.                                    | `onlineStatusColor: Color`           |
| **Password Group Icon Background** | Used to set the color of the icon shown as a status indicator if the group is password protected.     | `passwordGroupIconBackground: Color` |
| **Private Group Icon Background**  | Used to set the color of the icon shown as a status indicator if the group is private.                | `privateGroupIconBackground: Color`  |
| **Separator Color**                | Used to set the color of the divider separating conversation items.                                   | `separatorColor: Color`              |
| **Thread Indicator Style**         | Used to customize the appearance of the subtitle if the last message was made inside a thread.        | `threadIndicatorStyle: TextStyle`    |
| **Title Style**                    | Used to set the style of the title in the app bar.                                                    | `titleStyle: TextStyle`              |
| **Typing Indicator Style**         | Used to customize the appearance of the response text when participants are typing in a conversation. | `typingIndicatorStyle: TextStyle`    |
| **Width**                          | Used to set width.                                                                                    | `width: double`                      |

##### 2. Avatar Style

To apply customized styles to the `Avatar` widget in the `CometChatConversations` Widget, you can use the following code snippet. For more information, visit [Avatar Styles](./avatar).

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    avatarStyle: AvatarStyle(
        border: Border.all(width: 2),
        borderRadius: 20,
        background: Colors.red
    ),
)
```

</TabItem>

</Tabs>

---

##### 3. StatusIndicator Style

To apply customized styles to the `StatusIndicator` widget in the `CometChatConversations` Widget, you can use the following code snippet. For more information, visit [Indicator Styles](./status-indicator).

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    statusIndicatorStyle: const StatusIndicatorStyle(
        borderRadius: 10,
        gradient: LinearGradient(colors: [Colors.red, Colors.orange], begin: Alignment.topLeft, end: Alignment.bottomRight)
    ),
)
```

</TabItem>

</Tabs>

---

##### 4. Date Style

To apply customized styles to the `Date` widget in the `Conversations` Widget, you can use the following code snippet. For more information, visit [Date Styles](./date).

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    dateStyle: DateStyle(
        background: Colors.white300,
        borderRadius: 20,
        border: Border.all(color: Colors.red, width: 1),
    ),
)
```

</TabItem>

</Tabs>

---

##### 5. Badge Style

To apply customized styles to the `Badge` widget in the `Conversations` Widget, you can use the following code snippet. For more information, visit [Badge Styles](./badge)

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    badgeStyle: BadgeStyle(
        border: Border.all(width: 2, color: Colors.red),
        background: Colors.orange
    ),
)
```

</TabItem>

</Tabs>

##### 6. LisItem Style

To apply customized styles to the `List Item` widget in the `Conversations` Widget, you can use the following code snippet. For more information, visit [List Item Styles](./list-item).

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    conversationsStyle: const ConversationsStyle(
        background: Color(0xFFB39DDB)
    ),
    listItemStyle: const ListItemStyle(
        background: Color(0xFFB39DDB),
    ),
)
```

</TabItem>

</Tabs>

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the widget. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_functionality_before_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_functionality_before_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
 CometChatConversations(
    showBackButton: false,
    title: "Your Title",
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_functionality_after_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_functionality_after_cometchat_screens.png)

</TabItem>

</Tabs>

List of Poperties exposed by `CometChatConversations`

| Property                   | Description                                                                                                                                                                 | Code                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Activate Selection**     | Used to specify if the listed conversations can be selected, selection can be activated on tap or on long press                                                             | `activateSelection: ActivateSelection`                    |
| **AppBar Options**         | Used to set the options available in the app bar                                                                                                                            | `appBarOptions: List<Widget>`                             |
| **Back Button**            | Used to set back button located in the app bar                                                                                                                              | `backButton: Widget`                                      |
| **Controller**             | Used to programmatically update the scroll physics of list containing the conversations                                                                                     | `controller: ScrollController`                            |
| **Date Pattern**           | Used to display a custom string instead of the timestamp show at the tail of the conversation item                                                                          | `datePattern: String Function(Conversation conversation)` |
| **Disable Mentions**       | Disables mentions formatter if true                                                                                                                                         | `disableMentions: bool`                                   |
| **Disable Typing**         | If true stops indicating if a participant in a conversation is typing                                                                                                       | `disableTyping: bool`                                     |
| **Empty State Text**       | Used to set a custom text response when fetching the conversations has returned an empty list                                                                               | `emptyStateText: String`                                  |
| **Error State Text**       | Used to set a custom text response when some error occurs on fetching the list of conversations                                                                             | `errorStateText: String`                                  |
| **Hide Appbar**            | Toggle visibility for app bar                                                                                                                                               | `hideAppbar: bool`                                        |
| **Hide Error**             | Used to hide error on fetching conversations                                                                                                                                | `hideError: bool`                                         |
| **Hide Receipt**           | Used to toggle visibility of message receipts shown in the subtitle of the conversation                                                                                     | `hideReceipt: bool`                                       |
| **Hide Search**            | Used to toggle visibility for search box                                                                                                                                    | `hideSearch: bool`                                        |
| **Hide Separator**         | Used to hide the divider separating the conversation items                                                                                                                  | `hideSeparator: bool`                                     |
| **Hide Section Separator** | Used to hide the text separating grouped conversation items                                                                                                                 | `hideSectionSeparator: bool`                              |
| **Private Group Icon**     | Used to set icon shown in place of status indicator if the conversation is taking place in a private group                                                                  | `privateGroupIcon: Widget`                                |
| **Protected Group Icon**   | Used to set icon shown in place of status indicator if the conversation is taking place in a password protected group                                                       | `protectedGroupIcon: Widget`                              |
| **Search Box Icon**        | Used to set search Icon in the search field                                                                                                                                 | `searchBoxIcon: Widget`                                   |
| **Search Placeholder**     | Used to set placeholder text for the search field                                                                                                                           | `searchPlaceholder: String`                               |
| **Selection Icon**         | Change selection icon                                                                                                                                                       | `selectionIcon: Widget`                                   |
| **Sent Icon**              | Used to customize the receipt icon shown in the subtitle of the conversation item if hideReceipt is false and if the status of the last message in the conversation is sent | `sentIcon: Widget`                                        |
| **Show Back Button**       | Used to toggle visibility for back button                                                                                                                                   | `showBackButton: bool`                                    |
| **Theme**                  | Used to set custom theme                                                                                                                                                    | `theme: CometChatTheme`                                   |
| **Title**                  | Used to set the title in the app bar                                                                                                                                        | `title: String`                                           |
| **Typing Indicator Text**  | Used to customize the text response shown in the subtitle of the conversation item if a participant of a conversation is typing                                             | `typingIndicatorText: String`                             |

### Advanced

For advanced-level customization, you can set custom views to the widget. This lets you tailor each aspect of the widget to fit your exact needs and application aesthetics. You can create and define your own widget and then incorporate those into the widget.

#### ListItemView

With this function, you can assign a custom ListItem view to the `CometChatConversations` Widget.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
    listItemView: (conversation) {
      return Placeholder();
    },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_list_item_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_list_item_view_cometchat_screens.png)

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
CometChatConversations(
  listItemView: (conversation) {
    return CustomListItems(
      name: (conversation.conversationWith) is User ? ((conversation.conversationWith) as User).name : ((conversation.conversationWith) as Group).name,
      lastMessageTime: conversation.updatedAt!,
      avatarUrl: (conversation.conversationWith) is User ? ((conversation.conversationWith) as User).avatar : ((conversation.conversationWith) as Group).icon,
    );
  },
)
```

</TabItem>

</Tabs>

---

#### TextFormatters

Assigns the list of text formatters. If the provided list is not null, it sets the list. Otherwise, it assigns the default text formatters retrieved from the data source. To configure the existing Mentions look and feel check out [CometChatMentionsFormatter](/ui-kit/flutter/mentions-formatter-guide)

**Example**

Here is the complete example for reference:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
  textFormatters: [
    CometChatMentionsFormatter(
      messageBubbleTextStyle: (theme, alignment,{forConversation = false}) =>
          TextStyle(
              color: alignment==BubbleAlignment.left? Colors.orange : Colors.pink,
              fontSize: 14,
              fontWeight: FontWeight.bold
          ),
    )
  ],
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_text_formatters_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_text_formatters_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### AppBarOptions

You can set the Custom AppBarOptions to the `CometChatConversations` widget.

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_set_menu_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_set_menu_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
  appBarOptions: [
    InkWell(
      onTap: () {
        // TODO("Not yet implemented")
      },
      child: const Icon(Icons.ac_unit, color: Color(0xFF6851D6)),
    ),
    const SizedBox(width: 10)
  ],
)
```

</TabItem>

</Tabs>

---

#### DatePattern

You can modify the date pattern to your requirement using `datePattern`. This method accepts a function with a return type String. Inside the function, you can create your own pattern and return it as a String.

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_set_date_pattern_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_set_date_pattern_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
  datePattern: (conversation) {
    return DateFormat('HH:mm').format(conversation.updatedAt!);
  },
)
```

</TabItem>

</Tabs>

---

#### SubtitleView

You can customize the subtitle view for each conversation item to meet your requirements

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_set_subtitle_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_set_subtitle_view_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
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

---

#### EmptyStateView

You can set a custom `EmptyStateView` using `emptyStateView` to match the empty UI of your app.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
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

![](../../assets/android/conversation_empty_state_view_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_empty_state_view_cometchat_screens.png)

</TabItem>

</Tabs>

---

#### ErrorStateView

You can set a custom `ErrorStateView` using `errorStateView` to match the error view of your app.

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_set_error_state_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_set_error_state_cometchat_screens.png)

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatConversations(
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

---

#### Options

You can set a List of 'CometChatOption' for a conversation item to add your custom actions to the conversation. These options will be visible when swiping any conversation item.

Here is the complete example for reference:

**Example**

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title="main.dart"
CometChatConversations(
  options: (p0, controller, context) {
    return [
      CometChatOption(id: "id", title: "Option1", icon: "assets/img/envelope.png", backgroundColor: Colors.yellow, onClick: () {
        // TODO something when this option is clicked
      },)
    ];
  },
)
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Android" label="Android">

![](../../assets/android/conversation_set_options_cometchat_screens.png)

</TabItem>

<TabItem value="iOS" label="iOS">

![](../../assets/ios/conversation_set_options_cometchat_screens.png)

</TabItem>

</Tabs>
