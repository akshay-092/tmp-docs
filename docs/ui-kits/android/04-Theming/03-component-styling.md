---
sidebar_position: 3
sidebar_label: Component Styling
title: Component Styling
slug: /component-styling
---

<!-- Streenshot defaunt and customization

Code

Link to all style attributes in github -->

## Overview

CometChat UIKit enables developers to seamlessly integrate customizable components into their applications. Each component is designed to ensure a consistent user experience while offering flexibility to adapt to your app’s design system. You can modify attributes such as colors, fonts, sizes, icons, and more using XML or programmatically.
Below is a detailed guide for styling individual components within the UIKit.

## Components

### Conversations

The `CometChatConversations` Component provides a list of recent chats, showing participants, message previews, and timestamps. It supports default themes while offering deep customization for text appearance, icons, and overall layout. With this component, you can create an intuitive and visually appealing chat list that matches your app’s branding.

![](../assets/Conversation_Styling.png)

```xml
<!-- themes.xml -->
    <style name="CustomAvatarStyle" parent="CometChatAvatarStyle">
        <item name="cometchatAvatarStrokeRadius">8dp</item>
        <item name="cometchatAvatarBackgroundColor">#FBAA75</item>
    </style>

    <style name="CustomBadgeCountStyle" parent="CometChatBadgeStyle">
        <item name="cometchatBadgeBackgroundColor">#F76808</item>
        <item name="cometchatBadgeTextColor">#FFFFFF</item>
    </style>

    <style name="CustomConversationsStyle" parent="CometChatConversationsStyle">
        <item name="cometchatConversationsAvatarStyle">@style/CustomAvatarStyle</item>
        <item name="cometchatConversationsBadgeStyle">@style/CustomBadgeCountStyle</item>
    </style>
```

```xml
<!-- themes.xml -->
    <style name="AppTheme" parent="CometChatTheme.DayNight">
        <item name="cometchatConversationsStyle">@style/CustomConversationsStyle</item>

        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_conversations.xml).

### Users

The `CometChatUsers` Component displays a scrollable list of users. It is ideal for showcasing available contacts for messaging, calls, or group creation. Developers can style elements like user avatars, status indicators, and list backgrounds to align with their design guidelines.

![](../assets/users_styling.png)

```xml
    <style name="CustomAvatarStyle" parent="CometChatAvatarStyle">
        <item name="cometchatAvatarStrokeRadius">8dp</item>
        <item name="cometchatAvatarBackgroundColor">#FBAA75</item>
    </style>

    <style name="CustomUsersStyle" parent="CometChatUsersStyle">
        <item name="cometchatUsersAvatarStyle">@style/CustomAvatarStyle</item>
        <item name="cometchatUsersSeparatorColor">#F76808</item>
        <item name="cometchatUsersTitleTextColor">#F76808</item>
    </style>
```

```xml
<!-- themes.xml -->
    <style name="AppTheme" parent="CometChatTheme.DayNight">
        <item name="cometchatUsersStyle">@style/CustomUsersStyle</item>

        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_users.xml).

### Groups

The `CometChatGroups` Component allows you to display and interact with chat groups. Each group item highlights key details like the group name, participant count, and last active time. Customization options include avatar styles, fonts, borders, and background colors, ensuring the component blends seamlessly with your app.

![](../assets/groups_styling.png)

```xml
    <style name="CustomAvatarStyle" parent="CometChatAvatarStyle">
        <item name="cometchatAvatarStrokeRadius">8dp</item>
        <item name="cometchatAvatarBackgroundColor">#FBAA75</item>
    </style>

    <style name="CustomGroupsStyle" parent="CometChatGroupsStyle">
        <item name="cometchatGroupsAvatar">@style/CustomAvatarStyle</item>
        <item name="cometchatGroupsSeparatorColor">#F76808</item>
        <item name="cometchatGroupsTitleTextColor">#F76808</item>
    </style>
```

```xml
<!-- themes.xml -->
    <style name="AppTheme" parent="CometChatTheme.DayNight">
        <item name="cometchatGroupsStyle">@style/CustomGroupsStyle</item>

        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_groups.xml).

### Message Header

The `CometChatMessageHeader` Component provides essential information about the active chat, such as the recipient's name, avatar, and status (online/offline). It often includes options like back navigation, search, or menu buttons. Customization options allow you to style the header background, text appearance, and icons to match your app's overall design.

![](../assets/message_header_styling.png)

```xml
    <style name="CustomCallButtonStyle" parent="CometChatCallButtonsStyle">
        <item name="cometchatCallButtonsVideoCallIconTint">#F76808</item>
        <item name="cometchatCallButtonsVoiceCallIconTint">#F76808</item>
    </style>

    <style name="CustomMessageHeaderStyle" parent="CometChatMessageHeaderStyle">
        <item name="cometchatMessageHeaderTitleTextColor">#F76808</item>
        <item name="cometchatMessageHeaderAvatarStyle">@style/CustomAvatarStyle</item>
        <item name="cometchatMessageHeaderCallButtonsStyle">@style/CustomCallButtonStyle</item>
    </style>
```

```xml
<!-- themes.xml -->
    <style name="AppTheme" parent="CometChatTheme.DayNight">
         <item name="cometchatMessageHeaderStyle">@style/CustomMessageHeaderStyle</item>

        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_message_header.xml).

### Message List

The `CometChatMessageList` Component displays the sequence of messages in a conversation, supporting text, media, reactions, and more. It includes smooth scrolling, timestamps, and grouping for better readability. Developers can customize bubble colors, text appearance, timestamps, and alignment to provide a tailored chat experience.

![](../assets/message_list_styling.png)

```xml title="themes.xml"
    <style name="CustomOutgoingMessageBubbleStyle" parent="CometChatOutgoingMessageBubbleStyle">
        <item name="cometchatMessageBubbleBackgroundColor">#F76808</item>
    </style>

    <style name="CustomCometChatMessageListStyle" parent="CometChatMessageListStyle">
        <item name="cometchatMessageListBackgroundColor">#FEEDE1</item>
        <item name="cometchatMessageListOutgoingMessageBubbleStyle">@style/CustomOutgoingMessageBubbleStyle</item>
    </style>
```

```xml title="themes.xml
    <style name="AppTheme" parent="CometChatTheme.DayNight">
        <item name="cometchatMessageListStyle">@style/CustomCometChatMessageListStyle</item>
        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_message_list.xml).

### Message Composer

The `CometChatMessageComposer` Component enables users to compose and send messages, including text, attachments, and stickers. This highly interactive component supports customization of input box styles, button appearances, and interaction feedback, ensuring it blends seamlessly with your app’s chat UI.

![](../assets/message_composer_styling.png)

```xml title="drawable/active_send_button"
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="32dp"
    android:height="32dp"
    android:viewportWidth="32"
    android:viewportHeight="32">
    <path
        android:fillColor="#F76808"
        android:pathData="M16,0L16,0A16,16 0,0 1,32 16L32,16A16,16 0,0 1,16 32L16,32A16,16 0,0 1,0 16L0,16A16,16 0,0 1,16 0z" />
    <group>
        <clip-path android:pathData="M4,4h24v24h-24z" />
        <path
            android:fillColor="?attr/cometchatColorWhite"
            android:pathData="M10.767,22.723C10.465,22.843 10.178,22.818 9.907,22.646C9.636,22.474 9.5,22.223 9.5,21.894V17.673L16.423,16L9.5,14.327V10.106C9.5,9.777 9.636,9.526 9.907,9.354C10.178,9.182 10.465,9.157 10.767,9.277L24.723,15.161C25.095,15.328 25.281,15.608 25.281,16.002C25.281,16.395 25.095,16.674 24.723,16.838L10.767,22.723Z" />
    </group>
</vector>

```

```xml title="themes.xml"

    <style name="CustomMessageComposerStyle" parent="CometChatMessageComposerStyle">
        <item name="cometchatMessageComposerAttachmentIconTint">#F76808</item>
        <item name="cometchatMessageComposerVoiceRecordingIconTint">#F76808</item>
        <item name="cometchatMessageComposerActiveStickerIconTint">#F76808</item>
        <item name="cometchatMessageComposerInactiveStickerIconTint">#F76808</item>
        <item name="cometchatMessageComposerAIIconTint">#F76808</item>
        <item name="cometchatMessageComposerActiveSendButtonDrawable">
            @drawable/active_send_button
        </item>
    </style>
```

```xml title="themes.xml"
    <style name="AppTheme" parent="CometChatTheme.DayNight">
        <item name="cometchatMessageComposerStyle">@style/CustomMessageComposerStyle</item>
        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_message_composer.xml).

### Group Members

The `CometChatGroupMembers` Component lists participants in a chat group with details like names, avatars, and roles (e.g., admin or member). It supports customizable styles for list items, fonts, and background colors, ensuring it integrates with your app's group management interface.

![](../assets/group_members_styling.png)

```xml
    <!-- themes.xml -->
     <style name="CustomAvatarStyle" parent="CometChatAvatarStyle">
        <item name="cometchatAvatarStrokeRadius">8dp</item>
        <item name="cometchatAvatarBackgroundColor">#FBAA75</item>
    </style>

    <style name="CustomGroupMembersStyle" parent="CometChatGroupMembersStyle">
        <item name="cometchatGroupMembersAvatarStyle">@style/CustomAvatarStyle</item>
        <item name="cometchatGroupMembersSeparatorColor">#F76808</item>
        <item name="cometchatGroupMembersTitleTextColor">#F76808</item>
        <item name="cometchatGroupMembersBackIconTint">#F76808</item>
    </style>
```

```xml title="themes.xml"
    <!-- themes.xml -->
    <style name="AppTheme" parent="CometChatTheme.DayNight">
          <item name="cometchatGroupMembersStyle">@style/CustomGroupMembersStyle</item>
        <item name="cometchatPrimaryColor">#F76808</item>
        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_group_members.xml).

### Thread Header

The `CometChatThreadHeader` is used in threaded message views, displaying information about the parent message and its context. It provides a seamless way to navigate between the thread and the main conversation while maintaining context.

![](../assets/thread_header_styling.png)

```xml title="theme.xml"
    <style name="CustomOutgoingMessageBubbleStyle" parent="CometChatOutgoingMessageBubbleStyle">
        <item name="cometchatMessageBubbleBackgroundColor">#F76808</item>
    </style>
    <style name="CustomIncomingMessageBubbleStyle" parent="CometChatIncomingMessageBubbleStyle">
        <item name="cometchatMessageBubbleBackgroundColor">#F76808</item>
    </style>

    <style name="CustomThreadHeaderStyle" parent="CometChatThreadHeaderStyle">
        <item name="cometchatThreadHeaderOutgoingMessageBubbleStyle">@style/CustomOutgoingMessageBubbleStyle</item>
        <item name="cometchatThreadHeaderIncomingMessageBubbleStyle">@style/CustomIncomingMessageBubbleStyle</item>
        <item name="cometchatThreadHeaderBackgroundColor">#FEEDE1</item>
        <item name="cometchatThreadHeaderReplyCountTextColor">#F76808</item>
        <item name="cometchatThreadHeaderReplyCountBackgroundColor">#FEEDE1</item>
    </style>
```

```xml title="themes.xml"
    <style name="AppTheme" parent="CometChatTheme.DayNight">
        <item name="cometchatThreadHeaderStyle">@style/CustomThreadHeaderStyle</item>
        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_thread_header.xml).

### Call Logs

The `CometChatCallLogs` Component provides a list of recent calls (voice or video), showing details like call type, duration, participants, and timestamps. Developers can style text, icons, and background elements, making it easy to match the app’s design system.

![](../assets/calls_styling.png)

```xml title="themes.xml"
    <style name="CustomCallLogStyle" parent="CometChatCallLogsStyle">
        <item name="cometchatCallLogsSeparatorColor">#F76808</item>
        <item name="cometchatCallLogsTitleTextColor">#F76808</item>
        <item name="cometchatCallLogsAvatarStyle">@style/CustomAvatarStyle</item>
    </style>
```

```xml title="themes.xml"
    <style name="AppTheme" parent="CometChatTheme.DayNight">
        <item name="cometchatCallLogsStyle">@style/CustomCallLogStyle</item>

        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_call_logs.xml).

### Incoming Call

The `CometChatIncomingCall` component displays a notification for an incoming call. It typically includes caller details like name, avatar, and call type (audio/video), along with buttons to accept or decline the call.

![](../assets/incoming_call_styled.png)

```xml title="themes.xml"
<style name="CustomAvatarStyle" parent="CometChatAvatarStyle">
    <item name="cometchatAvatarStrokeRadius">8dp</item>
    <item name="cometchatAvatarBackgroundColor">#FBAA75</item>
</style>

<style name="CustomIncomingCallStyle" parent="CometChatIncomingCallStyle">
    <item name="cometchatIncomingCallAvatarStyle">@style/CustomAvatarStyle</item>
    <item name="cometchatIncomingCallAcceptCallButtonCornerRadius">8dp</item>
    <item name="cometchatIncomingCallRejectCallButtonCornerRadius">8dp</item>
</style>
```

```xml title="themes.xml"
    <style name="AppTheme" parent="CometChatTheme.DayNight">
        <item name="cometchatIncomingCallStyle">@style/CustomIncomingCallStyle</item>

        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_incoming_call.xml).

### Outgoing Call

The `CometChatOutgoingCall` component displays a status view for calls initiated by the user, showing the recipient's details, call type, and call status (e.g., ringing or connecting).

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

```xml title="themes.xml"

    <style name="AppTheme" parent="CometChatTheme.DayNight">
        <item name="cometchatOutgoingCallStyle">@style/CustomOutgoingCall</item>

        <item name="cometchatFontBold">@font/times_new_roman_bold</item>
        <item name="cometchatFontMedium">@font/times_new_roman</item>
        <item name="cometchatFontRegular">@font/times_new_roman</item>
    </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_outgoing_call.xml).

### Call Button

The `CometChatCallButton` Component initiates voice or video calls with a single click. It supports various customization options for button color and icon styles, making it adaptable to different screen layouts and themes.
These components further enhance the versatility of CometChat UIKit, ensuring that all aspects of messaging and calling functionality are cohesive, user-friendly, and fully customizable.

![](../assets/call_button_styling.png)

```xml title="themes.xml"
    <style name="CustomCallButtonStyle" parent="CometChatCallButtonsStyle">
        <item name="cometchatCallButtonsVideoCallIconTint">#F76808</item>
        <item name="cometchatCallButtonsVoiceCallIconTint">#F76808</item>
    </style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatCallButtonsStyle">@style/CustomCallButtonStyle</item>
</style>
```

To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_call_buttons.xml).

## Base Component

### Avatar

The `CometChatAvatar` Component is used across the UIKit to represent users, groups, or placeholders visually. This highly reusable component supports various shapes (circle or square), sizes, borders, and fallback icons, allowing complete design consistency for profile or group images.

![](../assets/base_component_avatar_styling.png)

```xml title="themes.xml"
<style name="CustomAvatarStyle" parent="CometChatAvatarStyle">
    <item name="cometchatAvatarStrokeRadius">8dp</item>
    <item name="cometchatAvatarBackgroundColor">#FBAA75</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatAvatarStyle">@style/CustomAvatarStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_avatar.xml).

### Status indicator

The `CometChatStatusIndicator` visually represents user presence (online, offline, or custom states). It can be styled for different shapes, sizes, and colors to reflect your app’s visual preferences while maintaining clarity in conveying status information.

![](../assets/base_component_status_indicator_styling.png)

```xml title="drawable/online_indicator_drawable"
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="18dp"
    android:height="18dp"
    android:viewportWidth="18"
    android:viewportHeight="18">
  <path
      android:pathData="M5,1.75L13,1.75A3.25,3.25 0,0 1,16.25 5L16.25,13A3.25,3.25 0,0 1,13 16.25L5,16.25A3.25,3.25 0,0 1,1.75 13L1.75,5A3.25,3.25 0,0 1,5 1.75z"
      android:strokeWidth="2.5"
      android:fillColor="#FFAB00"
      android:strokeColor="#ffffff"/>
</vector>
```

```xml title="themes.xml"
<style name="CustomStatusIndicatorStyle" parent="CometChatStatusIndicatorStyle">
    <item name="cometchatStatusIndicatorCornerRadius">8dp</item>
    <item name="cometchatStatusIndicatorOnlineIcon">@drawable/online_indicator_drawable</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatStatusIndicatorStyle">@style/CustomStatusIndicatorStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_status_indicator.xml).

### Badge

The `CometChatBadge` Component displays notifications or counts, such as unread messages. It can be styled for background colors, border radius, text size, and colors, allowing you to create visually distinct indicators for different notifications.

![](../assets/base_component_badge_styling.png)

```xml title="themes.xml"
<style name="CustomBadgeStyle" parent="CometChatBadgeStyle">
    <item name="cometchatBadgeBackgroundColor">#f44649</item>
    <item name="cometchatBadgeTextColor">#FFFFFF</item>
    <item name="cometchatBadgeCornerRadius">4dp</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatBadgeStyle">@style/CustomBadgeCountStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_badge.xml).

### Date

The `CometChatDate` Component formats and displays timestamps in conversation lists and message threads. It ensures time-related information is clear and consistent. Developers can customize its text appearance, alignment, and colors to fit various contexts.

![](../assets/base_component_date_styling.png)

```xml title="themes.xml"
<style name="CustomDateStyle" parent="CometChatDateStyle">
    <item name="cometchatDateTextColor">#000000</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatDateStyle">@style/CustomDateStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_date.xml).

### Receipts

The `CometChatReceipts` Component indicates message delivery and read statuses using intuitive icons. These can be styled for icon size, tint, and alignment, ensuring they remain clear and consistent with your app’s UI.

![](../assets/base_component_receipt_styling.png)

```xml title="drawable/read_receipts"
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:width="14dp"
    android:height="8dp"
    android:autoMirrored="true"
    android:viewportWidth="14"
    android:viewportHeight="8">

    <path
        android:fillColor="#ffab00"
        android:pathData="M0.4,4.622C0.289,4.511 0.236,4.38 0.242,4.228C0.247,4.076 0.305,3.944 0.417,3.833C0.528,3.726 0.659,3.671 0.811,3.669C0.963,3.668 1.094,3.722 1.205,3.833L3.761,6.4C3.824,6.463 3.891,6.53 3.961,6.6L4.161,6.8C4.272,6.911 4.327,7.041 4.325,7.189C4.323,7.337 4.267,7.467 4.155,7.578L4.144,7.589C4.033,7.696 3.904,7.751 3.755,7.753C3.607,7.755 3.478,7.7 3.367,7.589L0.4,4.622ZM6.9,6.394L12.822,0.472C12.933,0.361 13.065,0.306 13.217,0.308C13.368,0.31 13.5,0.367 13.611,0.478C13.718,0.589 13.773,0.72 13.775,0.872C13.777,1.024 13.722,1.155 13.611,1.267L7.289,7.589C7.178,7.7 7.048,7.755 6.9,7.755C6.752,7.755 6.622,7.7 6.511,7.589L3.544,4.622C3.437,4.515 3.385,4.384 3.389,4.23C3.393,4.077 3.448,3.944 3.555,3.833C3.667,3.722 3.799,3.667 3.953,3.667C4.106,3.667 4.239,3.722 4.35,3.833L6.9,6.394ZM10.461,1.272L7.289,4.444C7.181,4.552 7.053,4.604 6.903,4.6C6.753,4.596 6.622,4.541 6.511,4.433C6.4,4.322 6.344,4.19 6.344,4.036C6.344,3.882 6.4,3.75 6.511,3.639L9.672,0.478C9.78,0.37 9.91,0.317 10.064,0.317C10.218,0.317 10.35,0.37 10.461,0.478C10.572,0.589 10.628,0.721 10.628,0.875C10.628,1.029 10.572,1.161 10.461,1.272Z"
        tools:ignore="VectorPath" />
</vector>
```

```xml title="themes.xml"
<style name="CustomMessageReceiptStyle" parent="CometChatMessageReceiptStyle">
    <item name="cometchatMessageReceiptReadIcon">@drawable/read_receipts</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatMessageReceiptStyle">@style/CustomMessageReceiptStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_message_receipt.xml).

### Media Recorder

The `CometChatMediaRecorder` Component facilitates the recording of audio and video messages. It supports full customization of its recording controls, including button sizes, shapes, and colors, making it an integral part of your media-rich chat experience.

![](../assets/base_component_media_recorder_styling.png)

```xml title="themes.xml"
]<style name="CustomMediaRecorderStyle" parent="CometChatMediaRecorderStyle">
    <item name="cometchatMediaRecorderDeleteIconRadius">@dimen/cometchat_12dp</item>
    <item name="cometchatMediaRecorderStartIconRadius">@dimen/cometchat_12dp</item>
    <item name="cometchatMediaRecorderPauseIconRadius">@dimen/cometchat_12dp</item>
    <item name="cometchatMediaRecorderRecordingIconBackgroundColor">#f44649</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatMediaRecorderStyle">@style/CustomMediaRecorderStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_media_recorder.xml).

### Sticker Keyboard

The `CometChatStickerKeyboard` simplifies the integration of sticker-based messaging. Customize the background, grid layout, and sticker display styles to align with your chat experience. This component provides a visually rich and interactive way to enhance conversations.

![](../assets/base_component_sticker_keyboard_styling.png)

```xml title="themes.xml"
<style name="CustomStickerKeyboardStyle" parent="CometChatStickerKeyboardStyle">
    <item name="cometchatStickerKeyboardBackgroundColor">#EDEAFA</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatStickerKeyboardStyle">@style/CustomStickerKeyboardStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_sticker_keyboard.xml).

### Reaction list

The `CometChatReactionList` Component provides a visual representation of emoji reactions on messages. It supports customization for reaction sizes, spacing, and colors, enabling you to build an engaging and personalized messaging environment.

![](../assets/base_component_reaction_list_styling.png)

```xml title="themes.xml"
<style name="CustomReactionListStyle" parent="CometChatReactionListStyle">
    <item name="cometchatReactionListTabTextActiveColor">#F76808</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatReactionListStyle">@style/CustomReactionListStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_reaction_list.xml).

### Conversation Starter

The `CometChatConversationStarter` Component offers AI-based suggestions or reply options to initiate a chat. Developers can customize the background, text styles, and button appearances to ensure seamless integration with the app’s visual language.

![](../assets/base_component_conversation_starter_styling.png)

```xml title="themes.xml"
<style name="CustomConversationStarterStyle" parent="CometChatAIConversationStarterStyle">
    <item name="cometchatAIConversationStarterItemBackgroundColor">#FBAA75</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatAIConversationStarterStyle">@style/CustomConversationStarterStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_ai_conversation_starter.xml).

### Conversation Summary

The `CometChatConversationSummary` Component highlights the essence of a conversation, including participant details, last message, and timestamp. Customize text sizes, colors, and spacing to create visually distinct summaries that improve readability and engagement.

![](../assets/base_component_conversation_summary_styling.png)

```xml title="themes.xml"
<style name="CustomConversationSummaryStyle" parent="CometChatAIConversationSummaryStyle">
    <item name="cometchatAIConversationSummaryBackgroundColor">#FBAA75</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatAIConversationSummaryStyle">@style/CustomConversationSummaryStyle</item>
 </style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_ai_conversation_summary.xml).

### Smart Replies

The `CometChatSmartReplies` Component provides AI-driven suggestions for quick message replies. Fully customizable for button styles, padding, and colors, this component enables a streamlined and modern chat experience for users.

![](../assets/base_component_smart_replies_styling.png)

```xml title="themes.xml"
<style name="CustomSmartRepliesStyle" parent="CometChatAISmartRepliesStyle">
    <item name="cometchatAISmartRepliesBackgroundColor">#FBBB90</item>
    <item name="cometchatAISmartRepliesTitleTextColor">#F76808</item>
    <item name="cometchatAISmartRepliesItemBackgroundColor">#FFF9F5</item>
    <item name="cometchatAISmartRepliesItemStrokeWidth">1dp</item>
    <item name="cometchatAISmartRepliesItemStrokeColor">#F76808</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatAISmartRepliesStyle">@style/CustomSmartRepliesStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_ai_smart_replies.xml).

### Message Information

The `CometChatMessageInformation` Component displays metadata for messages, such as delivery timestamps, sender details, and read receipts. Customization options include text styles, colors, and alignment, making it adaptable to various app layouts.

![](../assets/base_component_message_information_styling.png)

To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_message_information.xml).

### Message option sheet

The `CometChatMessageOptionSheet` Component is a context menu for performing actions on messages, such as replying, forwarding, or deleting. Developers can style its background, icons, and text to match the app’s menu system.

![](../assets/base_component_message_optionsheet_styling.png)

```xml title="themes.xml"
<style name="CustomMessageOptionSheetStyle" parent="CometChatMessageOptionSheetStyle">
    <item name="cometchatMessageOptionSheetIconTint">#F76808</item>
    <item name="cometchatMessageOptionSheetBackgroundColor">#FFF9F5</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatMessageOptionSheetStyle">@style/CustomMessageOptionSheetStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_message_option_sheet.xml).

### Attachment option sheet

The `CometChatAttachmentOptionSheet` Component provides a sleek interface for users to attach media, documents, or other files. It supports icon and text customizations to create a cohesive attachment experience.

![](../assets/base_component_attachment_option_styling.png)

```xml title="themes.xml"
<style name="CustomAttachmentOptionSheetStyle" parent="CometChatAttachmentOptionSheetStyle">
    <item name="cometchatAttachmentOptionSheetBackgroundColor">#FFF9F5</item>
    <item name="cometchatAttachmentOptionSheetIconTint">#F76808</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatAttachmentOptionSheetStyle">@style/CustomAttachmentOptionSheetStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_attachment_option_sheet.xml).

### AIOption Sheet

The `CometChatAIOptionSheet` Component offers AI-powered action options, like generating replies or initiating voice-to-text commands. It allows developers to style icons, colors, and interaction elements for a polished and user-friendly interface.

![](../assets/base_component_ai_option_sheet_styling.png)

```xml title="themes.xml"
<style name="CustomAIOptionSheetStyle" parent="CometChatAIOptionSheetStyle">
    <item name="cometchatAIOptionSheetBackgroundColor">#FFF9F5</item>
    <item name="cometchatAIOptionSheetIconTint">#F76808</item>
</style>
```

```xml title="themes.xml"
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatAIOptionSheetStyle">@style/CustomAIOptionSheetStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_ai_option_sheet.xml).

### Mentions

The `CometChatMentions` Component highlights referenced users or groups within messages. With customizable styles for text color and background, you can ensure mentions stand out clearly in chats while maintaining a cohesive visual theme.

![](../assets/mentions_message_bubble.png)

```xml title="themes.xml"
<style name="CustomIncomingMessageBubbleMentionStyle" parent="CometChatIncomingBubbleMentionsStyle">
    <item name="cometchatMentionTextAppearance">?attr/cometchatTextAppearanceBodyRegular</item>
    <item name="cometchatMentionTextColor">#D6409F</item>
    <item name="cometchatMentionBackgroundColor">#D6409F</item>
    <item name="cometchatSelfMentionTextColor">#30A46C</item>
    <item name="cometchatSelfMentionTextAppearance">?attr/cometchatTextAppearanceBodyRegular</item>
    <item name="cometchatSelfMentionBackgroundColor">#30A46C</item>
</style>

<style name="CustomOutgoingMessageBubbleMentionStyle" parent="CometChatOutgoingBubbleMentionsStyle">
    <item name="cometchatMentionTextAppearance">?attr/cometchatTextAppearanceBodyRegular</item>
    <item name="cometchatMentionTextColor">#FFFFFF</item>
    <item name="cometchatMentionBackgroundColor">#F9F8FD</item>
    <item name="cometchatSelfMentionTextColor">#30A46C</item>
    <item name="cometchatSelfMentionTextAppearance">?attr/cometchatTextAppearanceBodyRegular</item>
    <item name="cometchatSelfMentionBackgroundColor">#30A46C</item>
</style>

<style name="CustomIncomingMessageBubbleStyle" parent="CometChatIncomingMessageBubbleStyle">
    <item name="cometchatMessageBubbleMentionsStyle">@style/CustomIncomingMessageBubbleMentionStyle</item>
</style>

<style name="CustomOutgoingMessageBubbleStyle" parent="CometChatOutgoingMessageBubbleStyle">
    <item name="cometchatMessageBubbleMentionsStyle">@style/CustomOutgoingMessageBubbleMentionStyle</item>
</style>

```

```xml title=""
<style name="AppTheme" parent="CometChatTheme.DayNight">
    <item name="cometchatIncomingMessageBubbleStyle">@style/CustomIncomingMessageBubbleStyle</item>
    <item name="cometchatOutgoingMessageBubbleStyle">@style/CustomOutgoingMessageBubbleStyle</item>
</style>
```
To know more such attributes, visit the [attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_mentions.xml).