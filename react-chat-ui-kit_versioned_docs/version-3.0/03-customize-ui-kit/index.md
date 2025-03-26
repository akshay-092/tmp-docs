---
sidebar_position: 3
title: Customize UI Kit
slug: /customize
---

This guide helps you to enable/disable features present in the UI Kit.

In order to achieve this, you need to refer to the UIKitSettings class present in the UI Kit Library.

:::warning Important

- UIKitSettings class variables have to be changed in the class file located at CometChatWorkspace/src/util. By default, all settings will be enabled.

- For advanced level customization, you can modify the source code of the UI Kit as per your requirement.

:::

### Tab bar settings

| Class variables | Description | 
| ---- | ---- | 
| chats = true | Hide/Show Recent Chats<br />Value could be _true_ or _false_ | 
| users = true | Hide/Show Users tab<br />Value could be _true_ or _false_ | 
| groups = true | Hide/Show Groups tab<br />Value could be _true_ or _false_ | 
| userSettings = true | Hide/Show User Information tab<br />Value could be _true_ or _false_ | 
| tabs = ["chats", "users", "groups", "calls", "settings"] | Shuffle or re-arrange tabs | 


### Recent chat settings

| Class variables | Description |  | 
| ---- | ---- | ---- | 
| unreadCount = true | Show the unread count in the chats list<br />Value could be _true_ or _false_ |  | 
| chatListMode = "USERS_AND_GROUPS" | Show user, group, or both chats<br />Value could be "USERS", "GROUPS", "USERS_AND_GROUPS" |  | 


### Call settings

| Class variables | Description | 
| ---- | ---- | 
| userAudioCall = true | Enable audio call for user<br />Value could be _true_ or _false_ | 
| groupAudioCall = true | Enable audio call for group<br />Value could be _true_ or _false_ | 
| userVideoCall = true | Enable video call for user<br />Value could be _true_ or _false_ | 
| groupVideoCall = true | Enable video call for group<br />Value could be _true_ or _false_ | 
| enableSoundForCalls = true | Enable sound for calls<br />Value could be _true_ or _false_ | 
| callNotifications = true | Show action messages for calls.<br />Value could be _true_ or _false_ | 


### User settings

| Class variables | Description | 
| ---- | ---- | 
| userListMode = "ALL" | Show all users/friends<br />Value could be "ALL", "FRIENDS", "NONE" | 
| showUserPresence = true | Show user presence<br />Value could be _true_ or _false_ | 
| blockUser = true | Allow block/unblock user<br />Value could be _true_ or _false_ | 
| searchUsers = true | Allow search in the user list<br />alue could be _true_ or _false_ | 


### Group settings

| Class variables | Description                                                        | 
| ---- |--------------------------------------------------------------------| 
| groupCreation = true | Allow creating group <br /> Value could be true or false                 | 
| joinOrLeaveGroup = true | Allow joining or leaving a group<br />Value could be true or false         | 
| allowDeleteGroup = true | Allow deleting group<br />Value could be true or false   | 
| viewGroupMembers = true | Allow viewing group members<br />Value could be true or false | 
| allowAddMembers = true | Allow adding group member<br />Value could be true or false | 
| allowModeratorToDeleteMemberMessages = true | Allow moderator to delete messages of participants<br />Value could be true or false         | 
| kickMember=true | Allow user to kick group members<br />Value could be true or false   | 
| banMember = true | Allow user to ban group members<br />Value could be true or false | 
| allowPromoteDemoteMembers = true | Allow user to promote or demote members<br />Value could be true or false | 
| joinLeaveNotifications = true | Show action messages for groups<br />Value could be true or false          | 
| searchGroups = true | Allow search in the group list Value could be true or false  | 
| messageInPrivate = true | Enable option to send message to group members in private<br />Value could be true or false | 

### Message settings

| Class Variable                 | Description |
|--------------------------------|-------------|
| `sendMessageInOneOnOne`        | Allow sending 1-1 message. Value could be `true` or `false`. |
| `sendMessageInGroup`           | Allow sending message in groups. Value could be `true` or `false`. |
| `sendPhotoVideos`              | Allow sending photos & videos. Value could be `true` or `false`. |
| `sendFiles`                    | Allow sending files & documents. Value could be `true` or `false`. |
| `sendEmojis`                   | Allow sending emojis. Value could be `true` or `false`. |
| `sendEmojisInLargerSize`       | Allow sending emojis in larger size. Value could be `true` or `false`. |
| `sendTypingIndicator`          | Allow sending/receiving typing indicator. Value could be `true` or `false`. |
| `editMessage`                  | Allow editing a message. Value could be `true` or `false`. |
| `deleteMessage`                | Allow deleting a message. Value could be `true` or `false`. |
| `threadedChats`                | Allow threaded replies on a message. Value could be `true` or `false`. |
| `sendLiveReaction`             | Allow sharing live reaction. Value could be `true` or `false`. |
| `viewShareMedia`               | Allow shared media. Value could be `true` or `false`. |
| `showReadDeliveryReceipts`     | Allow read/delivery receipts for messages. Value could be `true` or `false`. |
| `polls`                        | Allow creating a poll (Poll Extension must be enabled from Dashboard). Value could be `true` or `false`. |
| `enableSoundForMessages`       | Enable sound for incoming/outgoing messages. Value could be `true` or `false`. |
| `sendMessageReaction`          | Enable reactions for messages. Value could be `true` or `false`. |
| `collaborativeDocument`        | Enable collaborative document (Collaborative document Extension must be enabled from Dashboard). Value could be `true` or `false`. |
| `collaborativeWhiteboard`      | Enable collaborative whiteboard (Collaborative whiteboard Extension must be enabled from Dashboard). Value could be `true` or `false`. |
| `messageTranslation`           | Enable message translation (Message translation Extension must be enabled from Dashboard). Value could be `true` or `false`. |
| `sendStickers`                 | Allow sending stickers (Stickers Extension must be enabled from Dashboard). Value could be `true` or `false`. |
| `smartReplies`                 | Enable smart replies (Smart Reply Extension must be enabled from Dashboard). Value could be `true` or `false`. |
| `hideDeletedMessages`          | Enable hiding messages. Value could be `true` or `false`. |
