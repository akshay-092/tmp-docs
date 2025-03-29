---
sidebar_position: 2
title: Localize
slug: /localize
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With language localization, CometChat UI Kit adapts to the language of a specific country or region. `CometChatLocalize` allows you to detect the language of your users based on their browser settings and set the language accordingly.

## Supported languages

Currently, we support the following 12 languages for localization:

- **English (en, en-US, en-GB)**
- **Chinese (zh, zh-TW)**
- **Spanish (es)**
- **Hindi (hi)**
- **Russian (ru)**
- **Portuguese (pt)**
- **Malay (ms)**
- **French (fr)**
- **German (de)**
- **Swedish (sv)**
- **Lithuanian (lt)**
- **Hungarian (hu)**

## Methods

| Name        | Description                                                                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| init        | This method is used for setting the language in for UI Kit. This will take the constant value from the Language and will set the value accordingly. |
| localize    | This method is used translate the provided text to the active language.                                                                             |
| getLocale() | This method is used to get the current language. By default, it will return current language from device/browser.                                   |
| setLocale() | Used for setting the current language in for UI Kit. It takes the enum value from Language enum and sets the value accordingly.                     |

### Init

The default language of the CometChat UI Kit is set to the language in your browser settings. If browser language does not belong to the list of supported languages, it fallbacks to English language. You could also override the default language.

This method allows you to override default or pre-defined text strings with custom translations or alternative values. This also supports adding new languages to the list of supported languages.

<Tabs>
<TabItem value="javascript" label="Javascript">

```javascript
//initialise localisation
CometChatLocalize.init();

//override default language
CometChatLocalize.init("de");

//override default strings
CometChatLocalize.init("de", {
  de: {
    USERS: "Nutzer",
  },
});

//adding new languages
CometChatLocalize.init("ro", {
  ro: {
    CHATS: "Chat-uri",
  },
});
```

</TabItem>
</Tabs>

### localize

This method accepts the string to localize and return the localized string.

<Tabs>
<TabItem value="javascript" label="Javascript">

```javascript
CometChatUIKit.localize("CHATS");
```

</TabItem>
</Tabs>

| Name            | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| ccUserBlocked   | This event is triggered when the user successfully blocks another user.   |
| ccUserUnblocked | This event is triggered when the user successfully unblocks another user. |

## String resources

### Conversations

| Key                                           | Value                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| CHATS                                         | Chats                                                                                                   |
| WOULD\_\_YOU_LIKE_TO_DELETE_THIS_CONVERSATION | Would you like to delete this conversation? This conversation will be deleted from all of your devices. |
| NO_CHATS_SELECTED                             | No Chats Selected                                                                                       |
| DELETE_CONVERSATION                           | Delete Conversation?                                                                                    |
| ADD_TO_CHAT                                   | Add to Chat                                                                                             |
| NO_CHATS_FOUND                                | No chats found                                                                                          |
| CLICK_TO_START_CONVERSATION                   | Click to start conversation                                                                             |
| IN_A_THREAD                                   | In a thread                                                                                             |
| MESSAGE_IMAGE                                 | 📷 Image                                                                                                |
| MESSAGE_FILE                                  | 📁 File                                                                                                 |
| MESSAGE_AUDIO                                 | 🎵 Audio                                                                                                |
| MESSAGE_VIDEO                                 | 📹 Video                                                                                                |
| CUSTOM_MESSAGE                                | You have a message                                                                                      |
| CUSTOM_MESSAGE_POLL                           | 📊 Poll                                                                                                 |
| CUSTOM_MESSAGE_STICKER                        | 💟 Sticker                                                                                              |
| CUSTOM_MESSAGE_DOCUMENT                       | 📃 Document                                                                                             |
| CUSTOM_MESSAGE_WHITEBOARD                     | 📝 Whiteboard                                                                                           |

### Users

| Key            | Value          |
| -------------- | -------------- |
| USERS          | Users          |
| NO_USERS_FOUND | No users found |
| BLOCK_USER     | Block User     |
| UNBLOCK_USER   | Unblock User   |

### Groups

| Key                     | Value                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------- |
| GROUPS                  | Groups                                                                                  |
| NO_GROUPS_FOUND         | No groups found                                                                         |
| NEW\_\_GROUP            | New Group                                                                               |
| CREATE_GROUP            | Create Group                                                                            |
| ENTER_GROUP_NAME        | Enter group name                                                                        |
| PASSWORD                | Password                                                                                |
| ENTER_GROUP_PASSWORD    | Enter group password                                                                    |
| SELECT_GROUP_TYPE       | Select group type                                                                       |
| CONTINUE                | Continue                                                                                |
| GROUP_PASSWORD_BLANK    | Group password cannot be blank                                                          |
| INVALID_PASSWORD        | Please enter a valid password for the group and try again                               |
| WRONG_PASSWORD          | Please enter the correct password and try again                                         |
| GROUP_NAME_BLANK        | Group name cannot be blank                                                              |
| INVALID_GROUP_NAME      | Please enter a valid name for the group and try again                                   |
| GROUP_TYPE_BLANK        | Group type cannot be blank                                                              |
| INVALID_GROUP_TYPE      | Please enter a valid type for the group and try again                                   |
| ADMINISTRATOR           | Administrator                                                                           |
| ADMIN                   | Admin                                                                                   |
| MODERATOR               | Moderator                                                                               |
| PARTICIPANT             | Participant                                                                             |
| PUBLIC                  | Public                                                                                  |
| PRIVATE                 | Private                                                                                 |
| PASSWORD_PROTECTED      | Password Protected                                                                      |
| PRIVATE_GROUP           | Private Group                                                                           |
| PROTECTED_GROUP         | Protected Group                                                                         |
| ADD_MEMBERS             | Add Members                                                                             |
| ADDING                  | Adding...                                                                               |
| DELETE_AND_EXIT         | Delete and Exit                                                                         |
| LEAVE_CONFIRM           | Are you sure you want to leave the group?                                               |
| LEAVE_GROUP             | Leave Group                                                                             |
| LEAVE                   | Leave                                                                                   |
| BANNED_MEMBERS          | Banned Members                                                                          |
| UNBAN                   | Unban                                                                                   |
| NO_BANNED_MEMBERS_FOUND | No banned members found                                                                 |
| VIEW_MEMBERS            | View Members                                                                            |
| GROUP_MEMBERS           | Group Members                                                                           |
| KICK                    | Kick                                                                                    |
| BAN                     | Ban                                                                                     |
| OWNER                   | Owner                                                                                   |
| CHANGE_SCOPE            | Change Scope                                                                            |
| TRANSFER_OWNERSHIP      | Transfer Ownership                                                                      |
| TRANSFER                | Transfer                                                                                |
| TRANSFER_CONFIRM        | You are the group owner, please transfer ownership to a member before leaving the group |
| JOIN                    | Join                                                                                    |
| REMOVE                  | Remove                                                                                  |
| BLOCK                   | Block                                                                                   |
| CHANGE_ROLE             | Change Role                                                                             |
| MEMBERS                 | Members                                                                                 |
| MEMBER                  | Member                                                                                  |

### Messages

| Key                             | Value                                         |
| ------------------------------- | --------------------------------------------- |
| TODAY                           | Today                                         |
| YESTERDAY                       | Yesterday                                     |
| SUNDAY                          | Sunday                                        |
| MONDAY                          | Monday                                        |
| TUESDAY                         | Tuesday                                       |
| WEDNESDAY                       | Wednesday                                     |
| THURSDAY                        | Thursday                                      |
| FRIDAY                          | Friday                                        |
| SATURDAY                        | Saturday                                      |
| TYPING                          | typing...                                     |
| IS_TYPING                       | is typing...                                  |
| SEND_MESSAGE                    | Send Message                                  |
| COPY_MESSAGE                    | Copy                                          |
| DELETE_MESSAGE                  | Delete message                                |
| EDIT_MESSAGE                    | Edit message                                  |
| REPLY                           | reply                                         |
| REPLIES                         | replies                                       |
| LAUNCH                          | Launch                                        |
| SHARED_COLLABORATIVE_DOCUMENT   | has shared a collaborative document           |
| SHARED_COLLABORATIVE_WHITEBOARD | has shared a collaborative whiteboard         |
| CREATED_WHITEBOARD              | You’ve created a new collaborative whiteboard |
| CREATED_DOCUMENT                | You’ve created a new collaborative document   |
| MESSAGE_IS_DELETED              | Message is Deleted                            |
| CREATE_POLL                     | Create Poll                                   |
| QUESTION                        | Question                                      |
| VOTES                           | votes                                         |
| VOTE                            | vote                                          |
| NO_VOTE                         | No vote                                       |
| ENTER_YOUR_QUESTION             | Enter your question                           |
| COLLABORATIVE_DOCUMENT          | Collaborative Document                        |
| COLLABORATE_USING_DOCUMENT      | Collaborate using a document                  |
| OPEN_WHITEBOARD                 | Open Whiteboard                               |
| COLLABORATE_USING_WHITEBOARD    | Collaborate using a whiteboard                |
| ADD_REACTION                    | Add reaction                                  |
| REACTED                         | reacted                                       |
| TRANSLATE_MESSAGE               | Translate message                             |
| TRANSLATED_MESSAGE              | Translated message                            |
| ATTACH                          | Attach                                        |
| ATTACH_FILE                     | Attach file                                   |
| ATTACH_AUDIO                    | Attach audio                                  |
| ATTACH_VIDEO                    | Attach video                                  |
| ATTACH_IMAGE                    | Attach image                                  |
| EMOJI                           | Emoji                                         |
| ENTER_YOUR_MESSAGE_HERE         | Enter your message here                       |
| NO_MESSAGES_FOUND               | No messages found                             |
| THREAD                          | Thread                                        |
| REPLY_TO_THREAD                 | Reply to thread                               |
| REPLY_IN_THREAD                 | Reply in thread                               |
| VIEW                            | View                                          |
| VIEW_DETAIL                     | View Detail                                   |
| LIVE_REACTION                   | Live Reaction                                 |
| JUMP                            | Jump                                          |
| NEW_MESSAGES                    | new messages                                  |
| NEW_MESSAGE                     | new message                                   |

### Calls

| Key                        | Value                         |
| -------------------------- | ----------------------------- |
| CALLS                      | Calls                         |
| CALL_DETAILS               | Call Details                  |
| MISSED_VOICE_CALL          | Missed voice call             |
| MISSED_VIDEO_CALL          | Missed video call             |
| INCOMING_AUDIO_CALL        | Incoming audio call           |
| DECLINE                    | Decline                       |
| ACCEPT                     | Accept                        |
| CALL_INITIATED             | Call initiated                |
| OUTGOING_AUDIO_CALL        | Outgoing audio call           |
| OUTGOING_VIDEO_CALL        | Outgoing video call           |
| CALL_REJECTED              | Call rejected                 |
| REJECTED_CALL              | rejected call                 |
| CALL_ACCEPTED              | Call accepted                 |
| OUTGOING_CALL              | Outgoing call                 |
| INCOMING_CALL              | Incoming call                 |
| MISSED_CALL                | Missed call                   |
| MISSED_AUDIO_CALL          | Missed audio call             |
| JOINED                     | joined                        |
| CALL_ENDED                 | Call ended                    |
| CALL_CANCELLED             | Call cancelled                |
| CALLING                    | Calling...                    |
| SELECT_VIDEO_SOURCE        | Select video source           |
| SELECT_INPUT_AUDIO_SOURCE  | Select input audio source     |
| SELECT_OUTPUT_AUDIO_SOURCE | Select output audio source    |
| INITIATED_GROUP_CALL       | has initiated a group call    |
| YOU_INITIATED_GROUP_CALL   | You’ve initiated a group call |
| RESIZE                     | Resize                        |

### Misc

| Key     | Value      |
| ------- | ---------- |
| LOADING | Loading... |
| SEARCH  | Search     |
| ERROR   | Error      |
