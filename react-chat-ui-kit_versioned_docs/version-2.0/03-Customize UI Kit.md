---
sidebar_position: 3
title: Customize UI Kit
slug: /customize-ui-kit
---

This guide helps you to enable/disable features present in the UI Kit.

In order to achieve this, you need to refer to the `UIKitSettings` class present in the UI Kit Library.

:::warning Important

- UIKitSettings class variables have to be changed in the class file located at _`CometChatWorkspace/src/util`_. By default, all settings will be enabled.
- For advanced level customization, you can modify the source code of the UI Kit as per your requirement.

:::

### Tab bar settings

| Class variables | Description | 
| ---- | ---- | 
| chats = true | Hide/Show Recent Chats <br/> Value could be _true_ or _false_ | 
| users = true | Hide/Show Users tab <br/> Value could be _true_ or _false_ | 
| groups = true | Hide/Show Groups tab <br/> Value could be _true_ or _false_ | 
| userSettings = true | Hide/Show User Information tab <br/> Value could be _true_ or _false_ | 
| tabs = ["chats", "users", "groups", "calls", "settings"] | Shuffle or re-arrange tabs | 


### Recent chat settings

| Class variables | Description |  | 
| ---- | ---- | ---- | 
| unreadCount = true | Show the unread count in the chats list <br/> Value could be _true_ or _false_ |  | 
| chatListMode = "USERS_AND_GROUPS" | Show user, group, or both chats <br/> Values could be "USERS", "GROUPS", "USERS_AND_ GROUPS" |  | 


### Call settings

| Class variables | Description | 
| ---- | ---- | 
| userAudioCall = true | Enable audio call for user <br/> Value could be _true_ or _false_ | 
| groupAudioCall = true | Enable audio call for group <br/> Value could be _true_ or _false_ | 
| userVideoCall = true | Enable video call for user <br/> Value could be _true_ or _false_ | 
| groupVideoCall = true | Enable video call for group <br/> Value could be _true_ or _false_ | 
| enableSoundForCalls = true | Enable sound for calls <br/> Value could be _true_ or _false_ | 
| callNotifications = true | Show action messages for calls. <br/> Value could be _true_ or _false_ | 


### User settings

| Class variables | Description | 
| ---- | ---- | 
| userListMode = "ALL" | Show all users/friends <br/> Values could be "ALL", "FRIENDS", "NONE" | 
| showUserPresence = true | Show user presence <br/> Value could be _true_ or _false_ | 
| blockUser = true | Allow block/unblock user <br/> Value could be _true_ or _false_ | 
| searchUsers = true | Allow search in the user list <br/> Value could be true or false | 


### Group settings

| Class variables | Description | 
| ---- | ---- | 
| groupCreation = true | Allow creating group <br/> Value could be _true_ or _false_ | 
| joinOrLeaveGroup = true | Allow joining or leaving a group <br/> Value could be _true_ or _false_ | 
| allowDeleteGroup = true | Allow deleting group <br/> Value could be _true_ or _false_ | 
| viewGroupMembers = true | Allow viewing group members <br/> Value could be _true_ or _false_ | 
| allowAddMembers = true | Allow adding group member <br/> Value could be _true_ or _false_ | 
| allowModeratorToDeleteMemberMessages = true | Allow moderator to delete messages of participants <br/> Value could be _true_ or _false_ | 
| kickMember=true | Allow user to kick group members <br/> Value could be _true_ or _false_ | 
| banMember = true | Allow user to ban group members <br/> Value could be _true_ or _false_ | 
| allowPromoteDemoteMembers = true | Allow user to promote or demote members <br/> Value could be _true_ or _false_ | 
| joinLeaveNotifications = true | Show action messages for groups<br /><br />Value could be _true_ or _false_ | 
| searchGroups = true | Allow search in the group list<br /><br />Value could be _true_ or _false_ | 
| messageInPrivate = true | Enable option to send message to group members in private<br /><br />Value could be _true_ or _false_ | 


### Message settings

| Class variables | Description | 
| ---- | ---- | 
| sendMessageInOneOnOne = true | Allow sending 1-1 message<br />Value could be _true_ or _false_ | 
| sendMessageInGroup = true | Allow sending message in groups <br/> Value could be _true_ or _false_ | 
| sendPhotoVideos = true | Allow sending photos & videos <br/> Value could be _true_ or _false_ | 
| sendFiles = true | Allow sending files & documents <br/> Value could be _true_ or _false_ | 
| sendEmojis = true | Allow sending emojis <br/> Value could be _true_ or _false_ | 
| sendEmojisInLargerSize = true | Allow sending emojis in larger size <br/> Value could be _true_ or _false_ | 
| sendTypingIndicator = true | Allow sending/receiving typing indicator <br/> Value could be _true_ or _false_ | 
| editMessage = true | Allow editing a message <br/> Value could be _true_ or _false_ | 
| deleteMessage = true | Allow deleting a message <br/> Value could be _true_ or _false_ | 
| threadedChats = true | Allow threaded replies on a message <br/> Value could be _true_ or _false_ | 
| sendLiveReaction = true | Allow sharing live reaction <br/> Value could be _true_ or _false_ | 
| viewShareMedia = true | Allow shared media <br/> Value could be _true_ or _false_ | 
| showReadDeliveryReceipts = true | Allow read/delivery receipts for messages <br/> Value could be _true_ or _false_ | 
| polls = true | Allow creating a poll (Poll Extension must be enabled from Dashboard)<br /><br />Value could be _true_ or _false_ | 
| enableSoundForMessages = true | Enable sound for incoming/outgoing messages <br/> Value could be _true_ or _false_ | 
| sendMessageReaction = true | Enable reactions for messages <br/> Value could be _true_ or _false_ | 
| collaborativeDocument = true | Enable collaborative document (Collaborative document Extension must be enabled from Dashboard) <br/> Value could be _true_ or _false_ | 
| collaborativeWhiteboard = true | Enable collaborative whiteboard (Collaborative whiteboard Extension must be enabled from Dashboard) <br/> Value could be _true_ or _false_ | 
| messageTranslation = true | Enable message translation (Message translation Extension must be enabled from Dashboard) <br/> Value could be _true_ or _false_ | 
| sendStickers = true | Allow sending stickers(Stickers Extension must be enabled from Dashboard) <br/> Value could be _true_ or _false_ | 
| smartReplies = true | Enable smart replies(Smart Reply Extension must be enabled from Dashboard) <br/> Value could be _true_ or _false_ | 
| hideDeletedMessages = false | Enable hiding messages <br/> Value could be _true_ or _false_ | 
