---
sidebar_position: 8
title: Delete a Conversation
slug: /messaging-delete-conversation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In case you want to delete a conversation, you can use the `deleteConversation()` method.

This method takes two parameters. The unique id (UID/GUID) of the conversation to be deleted & the type (user/group) of conversation to be deleted.

<Tabs>
<TabItem value="1" label="Javascript (Delete User Conversation)">

```Javascript
let UID = "UID";
let type = "user";
CometChat.deleteConversation(UID, type).then(
    deletedConversation => {
        console.log(deletedConversation);
    }, error => {
        console.log('error while deleting a conversation', error);
    }
);
```

</TabItem>
<TabItem value="2" label="Javascript (Delete Group Conversation)">

```Javascript
let GUID = "GUID";
let type = "group";
CometChat.deleteConversation(GUID, type).then(
    deletedConversation => {
        console.log(deletedConversation);
    }, error => {
        console.log('error while deleting a conversation', error);
    }
);
```

</TabItem>

<TabItem value="3" label="Typescript (Delete User Conversation)">

```Typescript
let UID: string = "UID";
let type: string = "user";
CometChat.deleteConversation(UID, type).then(
    (deletedConversation: string) => {
        console.log(deletedConversation);
    }, (error: CometChat.CometChatException) => {
        console.log('error while deleting a conversation', error);
    }
);
```

</TabItem>
<TabItem value="4" label="Typescript (Delete Group Conversation)">

```Typescript
let GUID: string = "GUID";
let type: string = "group";
CometChat.deleteConversation(GUID, type).then(
    (deletedConversation: string) => {
        console.log(deletedConversation);
    }, (error: CometChat.CometChatException) => {
        console.log('error while deleting a conversation', error);
    }
);
```

</TabItem>
</Tabs>



This method deletes the conversation only for the logged-in user. To delete a conversation for all the users of the conversation, please refer to our REST API documentation [here](https://api-explorer.cometchat.com/reference/deletes-conversation).

The `deleteConversation()` method takes the following parameters:

| Parameter | Description | Required | 
| ---- | ---- | ---- | 
| conversationWith | `UID` of the user or `GUID` of the group whose conversation you want to delete. | YES | 
| conversationType | The type of conversation you want to delete . It can be either `user` or `group`. | YES | 
