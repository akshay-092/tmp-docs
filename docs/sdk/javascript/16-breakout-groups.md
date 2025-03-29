---
sidebar_position: 15
title: Breakout Groups
slug: /breakout-groups
draft: true
---

> Requires including an additional script breakout.js which you can from your account manager




Breakout groups are temporary groups where users are members only for the duration that they are online. These are also well suited for grouping larger online number of users into smaller more manageable breakout groups.

Breakout groups do not require the existence of a group or a user, since you need to pass in this information to the joinBreakout



### When to use breakout

eg1: You have 100,000 concurrent users all interested in a topic, but want to internally divide them into smaller sub-groups of 1000 so that the engagement isn't overwhelming.

eg2: You run a news website, and want a discussion around every article. The breakout group `name` here could be the article link itself

eg3: You want to create a `lobby` before directing users to groups



## Joining a Breakout

Specify the user and the name of the breakout group

```javascript
let breakoutRequest = {
    "user": {
        name: "NAME_OF_USER",         __ default will be Anonymous
        avatar: "URL_OF_AVATAR_IMAGE" __ optional
    },
  
    "group": {
    		name: "NAME_OF_GROUP"     __ default being the current url _ bundle
    		icon: "URL_OF_GROUP_ICON" __ optional
    }
};

let breakoutSetting = {
  	"appId" : "...", 
    "region" : "...",     
    "breakoutKey" : "..." __ you will find from the dashboard
};

CometChat
    .joinBreakout(breakoutRequest, breakoutSetting)
    .then(breakout => {    
        console.log('joined ', breakout.group, " as ", breakout.user);
        myGuids[groupName] = breakout.group.guid;
    })
    .catch(err => {
        console.log('error', err);
    });
```





### Response of Joining a breakout

```json
{
  "group": {
    "guid": "...",     __ system generated. use this in sendBreakoutMessage
    "createdAt": 1593767267,
    "updatedAt": 1593767267,
    "type": "public",
    "max" : 1000 __ default

    "name": "...",
    "icon": "..."
  },
  "user": {
    "uid": "UID",        __ system generated and sent to you
    "status": "online",
    "createdAt": 1593767267,
    "role": "default",
    "authToken": "...",
    
    "name": "...",   __same
    "avatar": "...", __same
  }
}
```





## Sending and listening for breakout group messages

Once you join a breakout group, you will have the system generated group guid, which can then be used to listen for messages as well as send messages.

> To listen to this breakout group - you need to listen the guid that breakout responds with at `breakout.group.guid` . Do not use the group name.



```javascript
_** 
 * STEP 1: Join breakout, and note the system generated breakout.group.guid
 *_

_** 
 * STEP 2: Messages will be passed in as usual in the MessageListener
 *_
CometChat.addMessageListener(
 "MessageListener",
  new CometChat.MessageListener({
	   onTextMessageReceived: textMessage => {
				  console.log("Text message received successfully", textMessage);
     }
  })
)

_** 
 * STEP 3: Send Breakout message, to the system generated breakout.group.guid
           Do not send to the groupName. Do not send to breakout.group.name
 *_
var receiverID = breakout.group.guid;
var messageText = "Hello world!";
var receiverType = CometChat.RECEIVER_TYPE.GROUP;
var textMessage = new CometChat.TextMessage(
  receiverID,
  messageText,
  receiverType
);


CometChat.sendBreakoutMessage(textMessage).then(
	message => {
	  __ Sent
	  console.log('Sent message : ', message)
  }
)



```



the `sendMessage` needs to be called in case you use extensions

## Parameters for BreakoutRequest

What needs to be passed into `joinBreakout`

| Parameter | Description | 
| ---- | ---- | 
| `group` | object | 
| `name` | The name of the breakout group you want to join | 
| `icon` | address of the group's avatar image | 
| `user` | object | 
| `name` | name of the user joining the breakout group | 
| `avatar` | address of the user's avatar image | 
| `setting` | object | 
| `appId` | string | 
| `region` | string | 
| `breakoutKey` | string | 




## Parameters for BreakoutResponse

What the response of `joinBreakout` will contain

|  |  | 
| ---- | ---- | 
| `user` | object | 
| `uid` | string | 
| `group` | object | 
| `uid` | string | 

