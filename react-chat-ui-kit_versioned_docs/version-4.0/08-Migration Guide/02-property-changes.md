---
sidebar_position: 2
title: Property Changes
slug: /property-changes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Conversations

### New Properties {#conversations-new-properties}

| Name          | Type                                                  | Description                                                                    |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| hideGroupType | boolean                                               | Hides the group type icon which is visible on the group icon.                  |
| headerView    | JSX.Element                                           | Custom header view which will replace the title as well.                       |
| leadingView   | (conversation: CometChat.Conversation) => JSX.Element | Custom leading view to be rendered for each conversation in the fetched list.  |
| titleView     | (conversation: CometChat.Conversation) => JSX.Element | Custom title view to be rendered for each conversation in the fetched list.    |
| trailingView  | (conversation: CometChat.Conversation) => JSX.Element | Custom trailing view to be rendered for each conversation in the fetched list. |

### Renamed Properties {#conversations-renamed-properties}

| Name           | Type                                                  | Description                                                             | Old Name             |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------- | -------------------- |
| hideReceipts   | boolean                                               | Hides the receipt status in the last message.                           | hideReceipt          |
| hideUserStatus | boolean                                               | Hides the status indicator of user which is visible on user avatar.     | disableUsersPresence |
| itemView       | (conversation: CometChat.Conversation) => JSX.Element | Custom list item view to be rendered for each conversation in the list. | listItemView         |

### Removed Properties {#conversations-removed-properties}

| Name                          | Type               | Description                                                                                                                   |
| ----------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| title                         | string             | Title of the component                                                                                                        |
| confirmDialogTitle            | string             | Title of the confirm dialog                                                                                                   |
| confirmDialogMessage          | string             | Message of the confirm dialog                                                                                                 |
| cancelButtonText              | string             | Text for the cancel button                                                                                                    |
| confirmButtonText             | string             | Text for the confirm button                                                                                                   |
| disableTyping                 | boolean            | Disable typing indicator display                                                                                              |
| disableMentions               | boolean            | Disable mentions                                                                                                              |
| disableUsersPresence          | boolean            | Hide user presence                                                                                                            |
| hideSeparator                 | boolean            | Hide the separator at the bottom of the default list item view                                                                |
| emptyStateText                | string             | Text to display in the default empty view                                                                                     |
| errorStateText                | string             | Text to display in the default error view                                                                                     |
| conversationsStyle            | ConversationsStyle | Styles to apply to this component                                                                                             |
| deleteConversationDialogStyle | ConfirmDialogStyle | Styles to apply to the delete conversation dialog component                                                                   |
| avatarStyle                   | AvatarStyle        | Styles to apply to the avatar component of the default list item view                                                         |
| statusIndicatorStyle          | CSSProperties      | Styles to apply to the status indicator component of the default list item view                                               |
| listItemStyle                 | ListItemStyle      | Styles to apply to the default list item view                                                                                 |
| badgeStyle                    | BadgeStyle         | Styles to apply to the badge component                                                                                        |
| receiptStyle                  | ReceiptStyle       | Styles to apply to the receipt component                                                                                      |
| dateStyle                     | DateStyle          | Styles to apply to the date component                                                                                         |
| backdropStyle                 | BaseStyle          | Styles to apply to the backdrop component                                                                                     |
| titleAlignment                | TitleAlignment     | Alignment of the title text                                                                                                   |
| protectedGroupIcon            | string             | Image URL for the status indicator icon in the default list item view of a conversation related to a password-protected group |
| passwordGroupIcon             | string             | Image URL for the status indicator icon in the default list item view of a conversation related to a password-protected group |
| privateGroupIcon              | string             | Image URL for the status indicator icon in the default list item view of a conversation related to a private group            |
| readIcon                      | string             | Image URL for the read status of the sent message                                                                             |
| deliveredIcon                 | string             | Image URL for the delivered status of the sent message                                                                        |
| waitIcon                      | string             | Image URL for the wait status of the sent message                                                                             |
| errorIcon                     | string             | Image URL for the error status of the sent message                                                                            |
| sentIcon                      | string             | Image URL for the sent status of the sent message                                                                             |
| loadingIconURL                | string             | Image URL for the default loading view                                                                                        |
| menu                          | JSX.Element        |                                                                                                                               |

<!-- | Name | Category | Type | Description | Status | Old Name |
| ---- | -------- | ---- | ----------- | ------ | -------- |
| hideReceipts | UI Hide/Show  | boolean | Hide receipt status | Renamed  | hideReceipt |
| hideError | UI Hide/Show  | boolean | Hide error view | - | - |
| hideDeleteConversation | UI Hide/Show | boolean | Hide delete conversation option | - | - |
| disableUsersPresence | UI Hide/Show  | boolean | Hide status indicator of user which is visible on user avatar | Renamed  | hideUserStatus |
| hideGroupType | UI Hide/Show  | boolean | Hide the group type icon which is visible on the group icon. | New | - |
| conversationsRequestBuilder| Data | CometChat.ConversationsRequestBuilder | Request builder to fetch conversations | - | - |
| activeConversation | Data | CometChat.Conversation | Conversation to highlight | - | - |
| textFormatters | Configuration  | CometChatTextFormatter[] | Text formatters | - | - |
| selectionMode | Configuration  | SelectionMode | Selection mode to use for the default tail view | - | - |
| options | Configuration  | ((conversation: CometChat.Conversation) => CometChatOption[]) \| null | List of actions available on mouse over on the default list item component| - | - |
| datePattern | Configuration  | DatePatterns | Date format for the date component | - | - |
| disableSoundForMessages | Configuration  | boolean | Disable sound for incoming messages | - | - |
| customSoundForMessages     | Configuration  | string | Custom audio sound for incoming messages | - | - |
| onError | Events | (error: CometChat.CometChatException) => void | Function to call whenever the component encounters an error | - | - |
| onItemClick | Events | (conversation: CometChat.Conversation) => void | Function to call on click of the default list item view of a conversation | - | - |
| onSelect | Events | (conversation: CometChat.Conversation, selected: boolean) => void | Function to call when a conversation from the fetched list is selected | - | - |
| headerView | Overrides | JSX.Element | Custom header view which will replace the title as well. | New | - |
| loadingView | Overrides | JSX.Element | Custom view for the loading state of the component | - | - |
| emptyView | Overrides | JSX.Element | Custom view for the empty state of the component | - | - |
| errorView | Overrides | JSX.Element | Custom view for the error state of the component | - | - |
| listItemView | Overrides | (conversation: CometChat.Conversation) => JSX.Element | Custom list item view to be rendered for each conversation in the list | Renamed  | itemView |
| leadingView | Overrides | (conversation: CometChat.Conversation) => JSX.Element | Custom view for the leading view of the component | New | - |
| titleView | Overrides | (conversation: CometChat.Conversation) => JSX.Element | Custom view for the title view of the component | New | - |
| subtitleView | Overrides | (conversation: CometChat.Conversation) => JSX.Element | Custom subtitle view to be rendered for each conversation in the list | - | - |
| trailingView | Overrides | (conversation: CometChat.Conversation) => JSX.Element | Custom view for the tail view of the component | New | - | -->

## Users

### New Properties {#users-new-properties}

| Name         | Type                                                  | Description                                                            |
| ------------ | ----------------------------------------------------- | ---------------------------------------------------------------------- |
| headerView   | JSX.Element                                           | Custom header view which will replace the title as well.               |
| leadingView  | (conversation: CometChat.Conversation) => JSX.Element | Custom leading view to be rendered for each user in the fetched list.  |
| titleView    | (conversation: CometChat.Conversation) => JSX.Element | Custom title view to be rendered for each user in the fetched list.    |
| trailingView | (conversation: CometChat.Conversation) => JSX.Element | Custom trailing view to be rendered for each user in the fetched list. |

### Renamed Properties {#users-renamed-properties}

| Name                 | Type                                                  | Description                                                         | Old Name       |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------------------- | -------------- |
| disableUsersPresence | boolean                                               | Hides the status indicator of user which is visible on user avatar. | hideUserStatus |
| itemView             | (conversation: CometChat.Conversation) => JSX.Element | Custom list item view to be rendered for each user in the list.     | listItemView   |

### Removed Properties {#users-removed-properties}

| Name                  | Type                  | Description                                                                     |
| --------------------- | --------------------- | ------------------------------------------------------------------------------- |
| title                 | string                | Title of the component                                                          |
| searchPlaceholderText | string                | Text to be displayed when the search input has no value                         |
| disableUsersPresence  | boolean               | Hide user presence                                                              |
| searchIconURL         | string                | Image URL for the search icon to use in the search bar                          |
| emptyStateText        | string                | Text to display in the default empty view                                       |
| errorStateText        | string                | Text to display in the default error view                                       |
| loadingIconURL        | string                | Image URL for the default loading view                                          |
| hideSeparator         | boolean               | Hide the separator at the bottom of the default list item view                  |
| statusIndicatorStyle  | CSSProperties         | Styles to apply to the status indicator component of the default list item view |
| avatarStyle           | AvatarStyle           | Styles to apply to the avatar component of the default list item view           |
| usersStyle            | UsersStyle            | Styles to apply to this component                                               |
| listItemStyle         | ListItemStyle         | Styles to apply to the default list item view                                   |
| fetchTimeOut          | any                   | Timeout reference for fetching users                                            |
| userPresencePlacement | UserPresencePlacement | Placement of user presence information within the user interface                |
| tileAlignment         | TitleAlignment        | Alignment of the title text                                                     |
| closeButtonIconURL    | string                | URL of the icon to be used for the close button                                 |
| fetchingUsers         | boolean               | Flag to indicate whether users are currently being fetched                      |
| menu                  | JSX.Element           |                                                                                 |

## Groups

### New Properties {#groups-new-properties}

| Name          | Type                                                  | Description                                                             |
| ------------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| hideGroupType | boolean                                               | Hides the group type icon which is visible on the group icon.           |
| headerView    | JSX.Element                                           | Custom header view which will replace the title as well.                |
| leadingView   | (conversation: CometChat.Conversation) => JSX.Element | Custom leading view to be rendered for each group in the fetched list.  |
| titleView     | (conversation: CometChat.Conversation) => JSX.Element | Custom title view to be rendered for each group in the fetched list.    |
| trailingView  | (conversation: CometChat.Conversation) => JSX.Element | Custom trailing view to be rendered for each group in the fetched list. |

### Renamed Properties {#groups-renamed-properties}

| Name         | Type                                                  | Description                                                      | Old Name |
| ------------ | ----------------------------------------------------- | ---------------------------------------------------------------- | -------- |
| listItemView | (conversation: CometChat.Conversation) => JSX.Element | Custom list item view to be rendered for each group in the list. | itemView |

### Removed Properties {#groups-removed-properties}

| Name                  | Type           | Description                                                                                         |
| --------------------- | -------------- | --------------------------------------------------------------------------------------------------- |
| title                 | string         | Title of the component                                                                              |
| searchPlaceholderText | string         | Text to be displayed when the search input has no value                                             |
| searchIconURL         | string         | Image URL for the search icon to use in the search bar                                              |
| hideSeparator         | boolean        | Hide the separator at the bottom of the default list item view                                      |
| loadingIconURL        | string         | Image URL for the default loading view                                                              |
| emptyStateText        | string         | Text to display in the default empty view                                                           |
| errorStateText        | string         | Text to display in the default error view                                                           |
| titleAlignment        | TitleAlignment | Alignment of the title text                                                                         |
| passwordGroupIcon     | string         | Image URL for the status indicator icon in the default list item view of a password-protected group |
| privateGroupIcon      | string         | Image URL for the status indicator icon in the default list item view of a private group            |
| statusIndicatorStyle  | CSSProperties  | Styles to apply to the status indicator component of the default list item view                     |
| avatarStyle           | AvatarStyle    | Styles to apply to the avatar component of the default list item view                               |
| listItemStyle         | ListItemStyle  | Styles to apply to the default list item view                                                       |
| groupsStyle           | GroupsStyle    | Styles to apply to this component                                                                   |

## Group Members

### New Properties {#group-members-new-properties}

| Name                  | Type                                                  | Description                                                                   |
| --------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------- |
| hideKickMemberOption  | boolean                                               | Hides the kick member option.                                                 |
| hideBanMemberOption   | boolean                                               | Hides the ban member option.                                                  |
| hideScopeChangeOption | boolean                                               | Hides the scope change option.                                                |
| hideUserStatus        | boolean                                               | Hides the status indicator of user which is visible on user avatar.           |
| headerView            | JSX.Element                                           | Custom header view which will replace the title as well.                      |
| leadingView           | (conversation: CometChat.Conversation) => JSX.Element | Custom leading view to be rendered for each group member in the fetched list. |
| titleView             | (conversation: CometChat.Conversation) => JSX.Element | Custom title view to be rendered for each group member in the fetched list.   |

### Renamed Properties {#group-members-renamed-properties}

| Name         | Type                                                  | Description                                                             | Old Name     |
| ------------ | ----------------------------------------------------- | ----------------------------------------------------------------------- | ------------ |
| itemView     | (conversation: CometChat.Conversation) => JSX.Element | Custom list item view to be rendered for each group member in the list. | listItemView |
| trailingView | (conversation: CometChat.Conversation) => JSX.Element | Custom trailing view to be rendered for each group member in the list.  | tailView     |

### Removed Properties {#group-members-removed-properties}

| Name                  | Type                  | Description                                                                                             |
| --------------------- | --------------------- | ------------------------------------------------------------------------------------------------------- |
| title                 | string                | Title of the component                                                                                  |
| searchPlaceholder     | string                | Text to be displayed when the search input has no value                                                 |
| disableUsersPresence  | boolean               | Hide user presence. If set to true, the status indicator of the default list item view is not displayed |
| fetchTimeOut          | any                   | Timeout reference for fetching users.                                                                   |
| userPresencePlacement | UserPresencePlacement | Placement of user presence information within the user interface                                        |
| backButtonIconURL     | string                | Image URL for the back button                                                                           |
| showBackButton        | boolean               | Show back button                                                                                        |
| onBack                | () => void            | Function to call when the default back button is clicked                                                |
| closeButtonIconURL    | string                | Image URL for the close button                                                                          |
| onClose               | () => void            | Function to call when the close button is clicked                                                       |
| avatarStyle           | AvatarStyle           | Styles to apply to the avatar component of the default list item view                                   |
| statusIndicatorStyle  | CSSProperties         | Styles to apply to the status indicator component of the default list item view                         |
| listItemStyle         | ListItemStyle         | Styles to apply to the default list item view                                                           |
| groupScopeStyle       | ChangeScopeStyle      | Styles to apply to the change scope component                                                           |
| groupMembersStyle     | GroupMembersStyle     | Styles to apply to this component                                                                       |
| dropDownIconURL       | string                | Image URL for the change scope component's arrowIconURL prop                                            |
| emptyStateText        | string                | Text to display in the default empty view                                                               |
| errorStateText        | string                | Text to display in the default error view                                                               |
| loadingIconURL        | string                | Image URL for the default loading view                                                                  |
| hideSeparator         | boolean               | Hide the separator at the bottom of the default list item view                                          |
| titleAlignment        | TitleAlignment        | Alignment of the title text                                                                             |
| searchIconURL         | string                | Image URL for the search icon to use in the search bar                                                  |
| fetchingUsers         | boolean               | Flag to indicate whether users are currently being fetched                                              |
| menu                  | JSX.Element           |                                                                                                         |

## Message Header

### New Properties {#message-header-new-properties}

| Name                          | Type        | Description                                                         |
| ----------------------------- | ----------- | ------------------------------------------------------------------- |
| hideUserStatus                | boolean     | Hides the status indicator of user which is visible on user avatar. |
| hideVideoCallButton           | boolean     | This prop defines whether a user can initiate a video call or not.  |
| hideVoiceCallButton           | boolean     | This prop defines whether a user can initiate a voice call or not.  |
| showConversationSummaryButton | boolean     | This prop will show the conversation summary button.                |
| summaryGenerationMessageCount | number      | Number of messages for which the summary should be shown.           |
| enableAutoSummaryGeneration   | boolean     | Enables the auto generation of conversation summary.                |
| leadingView                   | JSX.Element | Custom leading view.                                                |
| titleView                     | JSX.Element | Custom title view.                                                  |

### Renamed Properties {#message-header-renamed-properties}

| Name         | Type                                                  | Description            | Old Name     |
| ------------ | ----------------------------------------------------- | ---------------------- | ------------ |
| itemView     | (conversation: CometChat.Conversation) => JSX.Element | Custom list item view. | listItemView |
| trailingView | (conversation: CometChat.Conversation) => JSX.Element | Custom trailing view.  | tailView     |

### Removed Properties {#message-header-removed-properties}

| Name                 | Type                | Description                                       |
| -------------------- | ------------------- | ------------------------------------------------- |
| avatarStyle          | AvatarStyle         | Styles to apply to the avatar component           |
| statusIndicatorStyle | BaseStyle           | Styles to apply to the status indicator component |
| messageHeaderStyle   | MessageHeaderStyle  | Styles to apply to the message header component   |
| listItemStyle        | ListItemStyle       | Styles to apply to the list item component        |
| backButtonIconURL    | string              | URL for the back button icon                      |
| passwordGroupIcon    | string \| undefined | Icon for password-protected groups                |
| privateGroupIcon     | string              | Icon for private groups                           |
| disableUsersPresence | boolean             | Disable user presence indicator                   |
| disableTyping        | boolean             | Disable typing indicator                          |

## Message List

### New Properties {#message-list-new-properties}

| Name                       | Type                                                                        | Description                                                                                                                       |
| -------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| hideStickyDate             | boolean                                                                     | Hide the sticky date separator                                                                                                    |
| hideReplyInThreadOption    | boolean                                                                     | This prop defines whether Reply In Thread option should be visible or not.                                                        |
| hideTranslateMessageOption | boolean                                                                     | This prop defines whether Translate Message option should be visible or not.                                                      |
| hideEditMessageOption      | boolean                                                                     | This prop defines whether Edit Message option should be visible or not.                                                           |
| hideDeleteMessageOption    | boolean                                                                     | This prop defines whether Delete Message option should be visible or not.                                                         |
| hideReactionOption         | boolean                                                                     | This prop defines whether React option should be visible or not.                                                                  |
| hideMessagePrivatelyOption | boolean                                                                     | This prop defines whether a user can privately message another member of the group or not.                                        |
| hideCopyMessageOption      | boolean                                                                     | This prop defines whether a user can copy a message or not.                                                                       |
| hideMessageInfoOption      | boolean                                                                     | This prop defines whether a user can fetch information about the message (e.g., whether it's received) or not.                    |
| hideGroupActionMessages    | boolean                                                                     | This prop defines whether action messages in group chats are visible or not.                                                      |
| hideConversationStarters   | boolean                                                                     | This will not generate conversation starter in new conversations.                                                                 |
| hideSmartReplies           | boolean                                                                     | This prop defines whether Smart Replies should be hidden or not.                                                                  |
| reactionsRequestBuilder    | CometChat.ReactionsRequestBuilder                                           | This is passed to `CometChatReactions` component.                                                                                 |
| timePattern                | DatePatterns                                                                | Pattern for displaying dates                                                                                                      |
| quickOptionsCount          | number                                                                      | This will show the number of options as quick options on the message bubble.                                                      |
| disableSoundForMessages    | boolean                                                                     | Disable sound for incoming messages                                                                                               |
| customSoundForMessages     | string                                                                      | Custom sound for incoming messages                                                                                                |
| smartRepliesKeywords       | [string]                                                                    | Keywords in the incoming message that will trigger Smart Replies. If set to `[]`, Smart Replies will be fetched for all messages. |
| smartRepliesDelayDuration  | number                                                                      | Number of milliseconds after which Smart Replies will be triggered. If set to `0`, Smart Replies will be fetched instantly.       |
| onReactionClick            | (reaction: CometChat.ReactionCount, message: CometChat.BaseMessage) => void | Override the click of a reaction pill.                                                                                            |
| onReactionListItemClick    | (reaction: CometChat.Reaction, message: CometChat.BaseMessage) => void      | Override the click of a list item in `CometChatReactionsList`.                                                                    |

### Renamed Properties {#message-list-renamed-properties}

| Name             | Type                 | Description                                                                                           | Old Name    |
| ---------------- | -------------------- | ----------------------------------------------------------------------------------------------------- | ----------- |
| hideReceipts     | boolean              | Disable message receipt indicators                                                                    | hideReceipt |
| hideAvatar       | boolean              | This prop defines whether an avatar in the message for incoming messages is visible or not in groups. | showAvatar  |
| messageAlignment | MessageListAlignment | Alignment of the message list                                                                         | alignment   |

### Removed Properties {#message-list-removed-properties}

| Name                            | Type                            | Description                                    |
| ------------------------------- | ------------------------------- | ---------------------------------------------- |
| disableReactions                | boolean                         | Disable reactions                              |
| disableMentions                 | boolean                         | Disable mentions                               |
| readIcon                        | string                          | Icon for read messages                         |
| deliveredIcon                   | string                          | Icon for delivered messages                    |
| sentIcon                        | string                          | Icon for sent messages                         |
| waitIcon                        | string                          | Icon for waiting messages                      |
| errorIcon                       | string                          | Icon for error messages                        |
| loadingIconURL                  | string                          | URL for the loading icon                       |
| emptyStateText                  | string                          | Text to display when the message list is empty |
| errorStateText                  | string                          | Text to display when there is an error         |
| timestampAlignment              | TimestampAlignment              | Alignment of the timestamp                     |
| showAvatar                      | boolean                         | Show avatar in the message list                |
| avatarStyle                     | AvatarStyle                     | Styles to apply to the avatar component        |
| dateSeparatorStyle              | DateStyle                       | Styles to apply to the date separator          |
| messageListStyle                | MessageListStyle                | Styles to apply to the message list            |
| messageInformationConfiguration | MessageInformationConfiguration | Configuration for message information          |
| reactionsConfiguration          | ReactionsConfiguration          | Configuration for reactions                    |
| emojiKeyboardStyle              | EmojiKeyboardStyle              | Styles to apply to the emoji keyboard          |
| threadIndicatorIcon             | string                          | Icon for the thread indicator                  |
| backdropStyle                   | BackdropStyle                   | Styles to apply to the backdrop                |
| thresholdValue                  | number                          | Threshold value for triggering events          |
| newMessageIndicatorText         | string                          | Custom text for the new message indicator      |

## Message Composer

### New Properties {#message-composer-new-properties}

| Name                              | Type                             | Description                                                      |
| --------------------------------- | -------------------------------- | ---------------------------------------------------------------- |
| hideImageAttachmentOption         | boolean                          | Defines whether photo can be shared or not.                      |
| hideVideoAttachmentOption         | boolean                          | Defines whether video file can be shared or not.                 |
| hideAudioAttachmentOption         | boolean                          | Defines whether audio file can be shared or not.                 |
| hideFileAttachmentOption          | boolean                          | Defines whether file can be shared or not.                       |
| hidePollsOption                   | boolean                          | Defines whether polls can be shared or not.                      |
| hideCollaborativeDocumentOption   | boolean                          | Defines whether Collaborative Document can be shared or not.     |
| hideCollaborativeWhiteboardOption | boolean                          | Defines whether Collaborative Whiteboard can be shared or not.   |
| hideAttachmentButton              | boolean                          | Hides the attachment button.                                     |
| hideEmojiKeyboardButton           | boolean                          | Hides the emoji keyboard button.                                 |
| hideStickersButton                | boolean                          | Hides the stickers button.                                       |
| hideSendButton                    | boolean                          | Hides the send button.                                           |
| enterKeyBehavior                  | ENUM: sendMessage, newLine, none | Decides behavior of Enter in composer (send, new line, or none). |

### Renamed Properties {#message-composer-renamed-properties}

| Name                     | Type    | Description                                                                 | Old Name           |
| ------------------------ | ------- | --------------------------------------------------------------------------- | ------------------ |
| initialComposerText      | string  | Text to fill the message input with (used only when this component mounts). | text               |
| hideVoiceRecordingButton | boolean | Hides the voice recording button.                                           | hideVoiceRecording |

### Removed Properties {#message-composer-removed-properties}

| Name                        | Type                     | Description                                                                         |
| --------------------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| hideLayoutMode              | boolean                  | Hide layout button                                                                  |
| hideLiveReaction            | boolean                  | Hide live reaction button                                                           |
| disableSoundForMessages     | boolean                  | Disable sound for outgoing messages                                                 |
| LiveReactionIconURL         | string                   | Image URL for the live reaction button                                              |
| customSoundForMessage       | string                   | Custom audio sound for outgoing messages                                            |
| placeHolderText             | string                   | Text shown in the message input when it is empty                                    |
| mentionsWarningText         | string                   | Warning text to display when mentions are disabled                                  |
| voiceRecordingStartIconURL  | string                   | Icon for voice recording start                                                      |
| voiceRecordingCloseIconURL  | string                   | Icon for voice recording close                                                      |
| voiceRecordingStopIconURL   | string                   | Icon for voice recording stop                                                       |
| voiceRecordingSubmitIconURL | string                   | Icon for voice recording submit                                                     |
| InfoSimpleIcon              | string                   | Icon for simple information                                                         |
| attachmentIconURL           | string                   | Image URL for the default secondary button (if secondaryButtonView is not provided) |
| emojiIconURL                | string                   | Image URL for the emoji button                                                      |
| AIIconURL                   | string                   | Image URL for the AI button                                                         |
| sendButtonIconURL           | string                   | Image URL for the send button (if sendButtonView is not provided)                   |
| auxiliaryButtonAlignment    | AuxiliaryButtonAlignment | Alignment of the auxiliary button                                                   |
| mentionsWarningStyle        | React.CSSProperties      | Styles to apply to mentions warning text                                            |
| messageComposerStyle        | MessageComposerStyle     | Styles to apply to this component                                                   |
| actionSheetStyle            | ActionSheetStyle         | Styles to apply to action sheet component                                           |
| mediaRecorderStyle          | MediaRecorderStyle       | Styles to apply voice recording view                                                |
| AIOptionsStyle              | AIOptionsStyle           | Styles to apply to AI action sheet component                                        |
| secondaryButtonView         | JSX.Element              | Custom secondary button view                                                        |

## Call Logs

### New Properties {#call-logs-new-properties}

| Name                | Type                       | Description                                                               |
| ------------------- | -------------------------- | ------------------------------------------------------------------------- |
| onCallButtonClicked | (call: any) => void        | Function to call when the call icon is clicked.                           |
| leadingView         | (call: any) => JSX.Element | Custom leading view to be rendered for each call log in the fetched list. |
| titleView           | (call: any) => JSX.Element | Custom title view to be rendered for each call log in the fetched list.   |

### Renamed Properties {#call-logs-renamed-properties}

| Name         | Type                                                  | Description                                                                 | Old Name     |
| ------------ | ----------------------------------------------------- | --------------------------------------------------------------------------- | ------------ |
| itemView     | (conversation: CometChat.Conversation) => JSX.Element | Custom list item view to be rendered for each call log in the fetched list. | listItemView |
| trailingView | (conversation: CometChat.Conversation) => JSX.Element | Custom trailing view to be rendered for each call log in the fetched list.  | tailView     |

### Removed Properties {#call-logs-removed-properties}

| Name                     | Type                | Description                                                |
| ------------------------ | ------------------- | ---------------------------------------------------------- |
| title                    | string              | Title of the component                                     |
| emptyStateText           | string              | Text to display in the default empty view                  |
| errorStateText           | string              | Text to display in the default error view                  |
| loadingIconURL           | string              | URL for the loading icon                                   |
| incomingAudioCallIconUrl | string              | URL for the incoming audio call icon                       |
| incomingVideoCallIconUrl | string              | URL for the incoming video call icon                       |
| outgoingAudioCallIconUrl | string              | URL for the outgoing audio call icon                       |
| outgoingVideoCallIconUrl | string              | URL for the outgoing video call icon                       |
| missedAudioCallIconUrl   | string              | URL for the missed audio call icon                         |
| missedVideoCallIconUrl   | string              | URL for the missed video call icon                         |
| infoIconUrl              | string              | URL for the info icon                                      |
| hideSeparator            | boolean             | Hide the separator between call log items                  |
| onInfoClick              | (call: any) => void | Function to call when the info icon is clicked             |
| titleAlignment           | TitleAlignment      | Alignment of the title text                                |
| dateSeparatorPattern     | DatePatterns        | Pattern for formatting date separators                     |
| callLogsStyle            | CallLogsStyle       | Styles to apply to the call logs component                 |
| avatarStyle              | AvatarStyle         | Styles to apply to the avatars in call logs                |
| listItemStyle            | ListItemStyle       | Styles to apply to each call log item                      |
| onInfoClick              | (call: any) => void | Function to call when the info icon is clicked (duplicate) |

## Call Buttons

### New Properties {#call-buttons-new-properties}

| Name                      | Type                                                                                                                         | Description                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| hideVideoCallButton       | boolean                                                                                                                      | This prop defines whether a user can initiate a video call or not.   |
| hideVoiceCallButton       | boolean                                                                                                                      | This prop defines whether a user can initiate a voice call or not.   |
| callSettingsBuilder       | (isAudioOnlyCall: boolean, user?: CometChat.User, group?: CometChat.Group) => typeof CometChatUIKitCalls.CallSettingsBuilder | Function to build call settings based on call type and participants. |
| outgoingCallConfiguration | OutgoingCallConfiguration                                                                                                    | Configuration for outgoing calls.                                    |

### Renamed Properties {#call-buttons-renamed-properties}

None

### Removed Properties {#call-buttons-removed-properties}

| Name                   | Type             | Description                                            |
| ---------------------- | ---------------- | ------------------------------------------------------ |
| voiceCallIconURL       | string           | Image URL for the voice call icon                      |
| voiceCallIconText      | string           | Text to display for the voice call icon                |
| voiceCallIconHoverText | string           | Hover text to display for the voice call icon          |
| videoCallIconURL       | string           | Image URL for the video call icon                      |
| videoCallIconText      | string           | Text to display for the video call icon                |
| videoCallIconHoverText | string           | Hover text to display for the video call icon          |
| callButtonsStyle       | CallButtonsStyle | Custom styles to apply to the call buttons component   |
| onVoiceCallClick       | () => void       | Function to call when the voice call button is clicked |
| onVideoCallClick       | () => void       | Function to call when the video call button is clicked |

## Incoming Call

### New Properties {#incoming-call-new-properties}

| Name                | Type                                                                     | Description                                                       |
| ------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| callSettingsBuilder | (call: CometChat.Call) => typeof CometChatUIKitCalls.CallSettingsBuilder | Function to build custom call settings based on the incoming call |
| itemView            | (call: CometChat.Call) => JSX.Element                                    | Custom list item view                                             |
| leadingView         | (call: CometChat.Call) => JSX.Element                                    | Custom leading view                                               |
| titleView           | (call: CometChat.Call) => JSX.Element                                    | Custom title view                                                 |
| trailingView        | (call: CometChat.Call) => JSX.Element                                    | Custom tail view                                                  |

### Renamed Properties {#incoming-call-renamed-properties}

None

### Removed Properties {#incoming-call-removed-properties}

| Name              | Type              | Description                                    |
| ----------------- | ----------------- | ---------------------------------------------- |
| acceptButtonText  | string            | Text to display on the accept button           |
| declineButtonText | string            | Text to display on the decline button          |
| listItemStyle     | ListItemStyle     | Styles to apply to the list item               |
| avatarStyle       | AvatarStyle       | Styles to apply to the avatar                  |
| incomingCallStyle | IncomingCallStyle | Styles to apply to the incoming call component |

## Outgoing Call

### New Properties {#outgoing-call-new-properties}

| Name             | Type        | Description                    |
| ---------------- | ----------- | ------------------------------ |
| titleView        | JSX.Element | Custom view for title.         |
| subtitleView     | JSX.Element | Custom view for subtitle.      |
| avatarView       | JSX.Element | Custom view for avatar.        |
| cancelButtonView | JSX.Element | Custom view for cancel button. |

### Renamed Properties {#outgoing-call-renamed-properties}

| Name           | Type       | Description                                                    | Old Name |
| -------------- | ---------- | -------------------------------------------------------------- | -------- |
| onCallCanceled | () => void | Function which is triggered when the cancel button is clicked. | onClose  |

### Removed Properties {#outgoing-call-removed-properties}

| Name                 | Type              | Description                                       |
| -------------------- | ----------------- | ------------------------------------------------- |
| avatarStyle          | AvatarStyle       | Styles to apply to the avatar                     |
| outgoingCallStyle    | OutgoingCallStyle | Styles to apply to the outgoing call component    |
| declineButtonText    | string            | Text to display on the decline button             |
| declineButtonIconURL | string            | URL for the icon to display on the decline button |
| customView           | any               | Custom view for the outgoing call component       |
