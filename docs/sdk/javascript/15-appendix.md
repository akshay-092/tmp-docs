---
sidebar_position: 14
title: Appendix
slug: /appendix
draft: true
---

## User

The User class holds all the information related to any particular user.

`[optional]` marked are optional fields, may or may not be present in JSON object depending on the provided information while creating/ updating user.

| Attributes | Description | getterMethod | 
| ---- | ---- | ---- | 
| uid | Unique identifier for the user provided while creating the user. | 
| status | Status of the user. This will either be "online" or "offline" based on the status of the user. | 
| lastActiveAt | Timestamp of the last active time the user was available for chat. | 
| name | Name of the user. | 
| email | `[optional]` Email Address of the user. | 
| avatar | `[optional]` URL for the user profile picture. | 
| link | `[optional]` Link to the profile page URL for the user. | 
| role | `[optional]` Role of the user. | 
| metadata | `[optional]` Any additional data related to the user provided at the time of user creation. | 
| credits | `[optional]` Credits available for the user. | 
| statusMessage | `[optional]` The custom status message set by the user as provided while user creation or updating. | 




```json
{
  "uid": "cometchat-uid-1",
  "name": "NAME_PROVIDED_AT_THE_TIME_OF_CREATION",
  "authToken": "SERVER_GENERATED_AUTH_TOKEN_FOR_SECURE_SESSION",
  "avatar": "AVATAR_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
  "link": "PROFILE_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
  "status": "offline | online",
  "credits":1000,
  "email":"EMAIL_ADDRESS_PROVIDED_AT_THE_TIME_OF_CREATING",
  "role":"USER_CAN_BE_SET_TO_CUSTOM_ROLE",
  "statusMessage":"CUSTOME_STATUS_MESSAGE_SET_BY_USER",
  "lastActiveAt":1547011919,
  "metadata":{
    "custom_key":"CUSTOM_INFORMATION"
  }
}

```





## Group

The group class holds all the information related to any particular group. A group object will hold the below-mentioned information:

```javascript
import { Group, GROUP_TYPE } from "@cometchat-pulse_cometchat-pulse.js";

var guid="cometchat-guid-1";
var groupName="NATURAL_LANGUAGE_GROUP_NAME";
var groupType=GROUP_TYPE.PUBLIC;
var passsword="cometchat-guid-1";
var groupIcon="URL_FOR_GROUP_ICON_IMAGE";
var groupDescription="STRING_DESCRIPTION_OF_THE_GROUP";

var group=new Group(groupName, groupName, groupType, passsword, groupIcon, groupDescription);
```



new `Group()` can be used to create Group Object
if creating a group with `GROUP_TYPE.Public` you should specify password as blank `("")`

`[optional]` marked are optional fields, may or may not be present in JSON object depending on the provided information while creating/ updating group

| Variable | Information | Medthods(getters/setters) | 
| ---- | ---- | ---- | 
| guid | Unique identifier for every group provided while creating the group. | 
| name | Name of the group | 
| type | Type of the group. CometChat provides 3 types of groups viz. <br/>  * `GROUP_TYPE.PUBLIC`(public)<br/>  * `GROUP_TYPE.PRIVATE`(private)<br/>  * `GROUP_TYPE.PASSWORD`(password) | 
| createdAt | Timestamp of the group creation time. | 
| owner | uid of the owner of the group | 
| updatedAt | `[optional]` Timestamp of the time when the group was last updated. | 
| password | `[optional]` password for the group in case the group is of Password-Protected type. | 
| icon | `[optional]` URL for the group icon | 
| description | `[optional]` description of the group | 
| metadata | `[optional]` Any additional data related to the group provided at the time of group creation. | 
| hasJoined | `[optional]` a boolean value indicating if the logged in user has joined the group. | 




```json
{
  "guid": "cometchat-guid-1",
  "name": "NATURAL_LANGUAGE_GROUP_NAME",
  "type": "public| private| password",
  "description": "STRING_DESCRIPTION_OF_THE_GROUP",
  "createdAt": 1543931213,
  "updatedAt": 1543931333,
  "owner": "cometchat-uid-1",
  "hasJoined": true| false,
  "icon": "URL_FOR_GROUP_ICON_IMAGE",
  "metadata": {
    "custom_key": "CUSTOM_INFORMATION"
  }
}
```





## Group Member



| Variable | Description | 
| ---- | ---- | 
| uid | UID of the group member | 
| name | Name of the group member | 
| email | Email of the group member | 
| avatar | URL for the group member avatar. | 
| link | Link for the profile page of the group member | 
| role | Role of the group member | 
| metadata | Any additional data related to the group member provided at the time of user creation. | 
| credits | Credits available for the group member | 
| status | Status of the user. This will either be "online" or "offline" based on the status of the group member. | 
| statusMessage | The custom status message set by the user as provided while user creation or updation. | 
| lastActiveAt | Timestamp when the groupMember was last available to chat. | 
| scope | The is the scope of the member. This can contain one of the three values<br/>  *  `GROUP_MEMBER_SCOPE.ADMIN` (admin)<br/>  <br/>  * `GROUP_MEMBER_SCOPE.MODERATOR` (moderator)<br/>  <br/>  * `GROUP_MEMBER_SCOPE.PARTICIPANT` (participant) | 
| joinedAt | Timestamp for the time when the user joined the group. | 




```json
{
  "guid": "cometchat-guid-1",
  "name": "NAME_PROVIDED_AT_THE_TIME_OF_CREATION",
  "isBanned": "0| 1",
  "uid": "cometchat-uid-1",
  "scope": "participant| admin| moderator",
  "authToken": "SERVER_GENERATED_AUTH_TOKEN_FOR_SECURE_SESSION",
  "avatar": "AVATAR_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
  "link": "PROFILE_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
  "status": "offline | online",
  "credits": 1000,
  "email": "EMAIL_ADDRESS_PROVIDED_AT_THE_TIME_OF_CREATING",
  "role": "USER_CAN_BE_SET_TO_CUSTOM_ROLE",
  "statusMessage": "CUSTOME_STATUS_MESSAGE_SET_BY_USER",
  "lastActiveAt": 1543921793,
  "metadata": {
    "custom_key": "CUSTOM_INFORMATION"
  },
  "joinedAt": 1543921899
}
```





## Messages



### TextMessage

`[optional]` marked are optional fields, may or may not be present in JSON object depending on the provided information while creating TextMessage.

| Variable | Information | Medthods(getters/setters) | 
| ---- | ---- | ---- | 
| id | Unique id for every message generated by CometChat | 
| sender | An object of the [`User`](doc:js-cometchat-classes-appendix#section-user) class holding all the user information for the sender of the message | 
| receiver | An id of User/ Group as the receiver of the message. | 
| type | [`TextMessage`](doc:js-cometchat-classes-appendix#section-textmessage) can only have messageType `MESSAGE_TYPE.TEXT` (text) | 
| receiverType | Receiver type has the following two types.<br/>  *  `RECEIVER_TYPE.USER` (user)<br/>  *  `RECEIVER_TYPE.GROUP` (group) | 
| category | Indicates the category of the message. It can hold one of the below 3 values:<br/>  * `CATEGORY_MESSAGE` (message)<br/>  * `CATEGORY_ACTION` (action)<br/>  * `CATEGORY_CALL` (call)<br/>But in the case of [`TEXT_MESSAGE`](doc:js-cometchat-classes-appendix#section-textmessage) messageCategory will always be `CATEGORY_MESSAGE` (message) | 
| sentAt | Timestamp of the time the message was sent at. | 
| text | The text of the message. | 
| status | `[optional]` Status of the message. | 
| metadata | `[optional]` this field can be used to send extra information along with the message. It will be sent and received without any processing. | 
| muid | `[optional]` Additional id field for the developers in case they want to use. | 
| deliveredAt | Timestamp of the time when the message was delivered at. | 
| readAt | Timestamp of the time the message was read at. | 




```json
{
  "sender": {
    "uid": "cometchat-uid-1",
    "name": "NAME_PROVIDED_AT_THE_TIME_OF_CREATION",
    "authToken": "SERVER_GENERATED_AUTH_TOKEN_FOR_SECURE_SESSION",
    "avatar": "AVATAR_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
    "link": "PROFILE_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
    "status": "offline | online",
    "credits": 1000,
    "email": "EMAIL_ADDRESS_PROVIDED_AT_THE_TIME_OF_CREATING",
    "role": "USER_CAN_BE_SET_TO_CUSTOM_ROLE",
    "statusMessage": "CUSTOME_STATUS_MESSAGE_SET_BY_USER",
    "lastActiveAt": 1547011919,
    "metadata": {
      "custom_key": "CUSTOM_INFORMATION"
    }
  },
  "receiver": "cometchat-uid-2",
  "type": "text",
  "receiverType": "user| group",
  "category": "message",
  "text": "TEXT_MESSAGE_ADDED_BY_USER",
  "id": "MESSAGE_ID_ADDED_BY_COMETCHAT",
  "sentAt": 1547017662,
  "data": {
    "text": "TEXT_MESSAGE_ADDED_BY_USER",
    "entities": {
      "sender": {
        "entity": {
          "uid": "cometchat-uid-1",
          "name": "NAME_PROVIDED_AT_THE_TIME_OF_CREATION",
          "avatar": "AVATAR_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
          "link": "PROFILE_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
          "status": "offline | online",
          "credits": 1000,
          "email": "EMAIL_ADDRESS_PROVIDED_AT_THE_TIME_OF_CREATING",
          "role": "USER_CAN_BE_SET_TO_CUSTOM_ROLE",
          "statusMessage": "CUSTOME_STATUS_MESSAGE_SET_BY_USER",
          "metadata": {
            "custom_key": "CUSTOM_INFORMATION"
          }
        },
        "entityType": "user"
      },
      "receiver": {
        "entity": {
          "uid": "cometchat-uid-2",
          "name": "NAME_PROVIDED_AT_THE_TIME_OF_CREATION",
          "avatar": "AVATAR_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
          "link": "PROFILE_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
          "status": "offline | online",
          "credits": 1000,
          "email": "EMAIL_ADDRESS_PROVIDED_AT_THE_TIME_OF_CREATING",
          "role": "USER_CAN_BE_SET_TO_CUSTOM_ROLE",
          "statusMessage": "CUSTOME_STATUS_MESSAGE_SET_BY_USER",
          "metadata": {
            "custom_key": "CUSTOM_INFORMATION"
          }
        },
        "entityType": "user"
      }
    }
  },
  "metadata": {
    "custom_key": "CUSTOM_INFORMATION"
  }
}
```






### MediaMessage

| Variable | Information | 
| ---- | ---- | 
| id | Unique id for every message generated by CometChat | 
| muid | `[optional]` Additional id field for the developers in case they want to use. | 
| sender | An object of the user class holding all the user information for the sender of the message | 
| receiver | An id of User/ Group as the receiver of the message. | 
| type | Indicates the type of the message. It can be either of the below values.<br/>  * `MESSAGE_TYPE.IMAGE` (image)<br/>  * `MESSAGE_TYPE.VIDEO` (video)<br/>  * `MESSAGE_TYPE.AUDIO` (audio)<br/>  * `MESSAGE_TYPE.FILE` (file) | 
| receiverType | Receiver type has the following two types.<br/>  *  `RECEIVER_TYPE.USER` (user)<br/>  *  `RECEIVER_TYPE.GROUP` (group) | 
| category | Indicates the category of the message. It can hold one of the below 3 values:<br/>  * `CATEGORY_MESSAGE`(message)<br/>  * `CATEGORY_ACTION`(action)<br/>  * `CATEGORY_CALL` (call)<br/>But in the case of `MEDIA_MESSAGE` messageCategory will always be `CATEGORY_MESSAGE` (message) | 
| sentAt | Timestamp of the time the message was sent at. | 
| status | Status of the message | 
| file | File object to be uploaded and shared with the recipient. (Only used while sending the message. While receiving, this will be null and only the URL of the uploaded file will be available) | 
| url | URL of the uploaded file that is shared | 
| metadata | `[optional]` This field can be used to send extra information along with the message. It will be sent and received without any processing. | 
| deliveredAt | Timestamp of the time when the message was delivered at. | 
| readAt | Timestamp of the time the message was read at. | 


Example of media message creation

```html
<body>
    <input type="file" name="img_file" id="img_file" _>
    <script>
      var mediaMessage=new MediaMessage("cometchat-uid-2", document.getElementById('img_file').files[0], MESSAGE_TYPE.IMAGE, RECEIVER_TYPE.USER);
    <_script>
<_body>
  

```





```json
{
  "sender": {
    "uid": "cometchat-uid-1",
    "name": "NAME_PROVIDED_AT_THE_TIME_OF_CREATION",
    "status": "offline | online",
    "authToken": "SERVER_GENERATED_AUTH_TOKEN_FOR_SECURE_SESSION",
    "avatar": "AVATAR_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
    "link": "PROFILE_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
    "credits": 1000,
    "email": "EMAIL_ADDRESS_PROVIDED_AT_THE_TIME_OF_CREATING",
    "role": "USER_CAN_BE_SET_TO_CUSTOM_ROLE",
    "statusMessage": "CUSTOME_STATUS_MESSAGE_SET_BY_USER",
    "metadata": {
      "custom_key": "CUSTOM_INFORMATION"
    }
  },
  "receiver": "cometchat-uid-2",
  "type": "file",
  "receiverType": "user| GROUP",
  "category": "message",
  "file": "https:__data.cometchat.com_6e13b23d7a3_media_1547025354_590827986_Covj6gf.jpg",
  "url": "https:__data.cometchat.com_6e13b23d7a3_media_1547025354_590827986_Covj6gf.jpg",
  "id": "MESSAGE_ID_ADDED_BY_COMETCHAT",
  "sentAt": 1547025354,
  "data": {
    "entities": {
      "sender": {
        "entity": {
          "uid": "cometchat-uid-1",
          "name": "NAME_PROVIDED_AT_THE_TIME_OF_CREATION",
          "status": "offline | online",
          "avatar": "AVATAR_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
          "link": "PROFILE_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
          "credits": 1000,
          "email": "EMAIL_ADDRESS_PROVIDED_AT_THE_TIME_OF_CREATING",
          "role": "USER_CAN_BE_SET_TO_CUSTOM_ROLE",
          "statusMessage": "CUSTOME_STATUS_MESSAGE_SET_BY_USER",
          "metadata": {
            "custom_key": "CUSTOM_INFORMATION"
          }
        },
        "entityType": "user"
      },
      "receiver": {
        "entity": {
          "uid": "cometchat-uid-2",
          "name": "NAME_PROVIDED_AT_THE_TIME_OF_CREATION",
          "avatar": "AVATAR_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
          "status": "offline | online",
          "role": "USER_CAN_BE_SET_TO_CUSTOM_ROLE",
          "link": "PROFILE_URL_PROVIDED_AT_THE_TIME_OF_CREATION",
          "credits": 1000,
          "email": "EMAIL_ADDRESS_PROVIDED_AT_THE_TIME_OF_CREATING",
          "statusMessage": "CUSTOME_STATUS_MESSAGE_SET_BY_USER",
          "metadata": {
            "custom_key": "CUSTOM_INFORMATION"
          }
        },
        "entityType": "user"
      }
    },
    "url": "https:__data.cometchat.com_6e13b23d7a3_media_1547025354_590827986_Covj6gf.jpg"
  }
}
```






### Custom Message

| Variable | Description | 
| ---- | ---- | 
| id | Unique id of every message generated by CometChat | 
| muid | Additional id field for the developers in case they want to use. | 
| subType | An additional parameter if the developer would like to use it. | 
| customData | The data that needs to be shared as a custom message in the form of a JSONObject | 
| sender | an object of the user class holding all the user information for the sender of the message | 
| receiver | Unique id of the receiver | 
| type | messageType in `CustomMessage`<br/>will always be <br/>  * `MESSAGE_TYPE.CUSTOM` (custom) | 
| receiverType | Receiver type has the following two types.<br/>  *  `RECEIVER_TYPE.USER` (user)<br/>  *  `RECEIVER_TYPE.GROUP` (group) | 
| messageCategory | Indicates the category of the message. It can hold one of the below 3 values:<br/>  * `CATEGORY_MESSAGE`(message)<br/>  * `CATEGORY_ACTION`(action)<br/>  * `CATEGORY_CALL` (call)<br/>But in the case of `MEDIA_MESSAGE` messageCategory will always be `CATEGORY_MESSAGE` (message) | 
| sentAt | Timestamp of the time when the message was sent | 
| metadata | his field can be used to send extra information along with the message. It will be sent and received without any processing. | 
| deliveredAt | Timestamp of the time when the message was delivered | 
| readAt | Timestamp of the time when the message was read. | 




## Action



|  |  | 
| ---- | ---- | 
| id | unique id for every message generated by CometChat | 
| muid | Additional id field for the developers in case they want to use. | 
| sender | an object of the user class holding all the user information for the sender of the message | 
| receiver | an object of the user class holding all the user/group information for the receiver of the message | 
| messageType | Type of action messageType. <br/>  * `ACTION_TYPE.MEMBER_JOINED`<br/>  <br/>  * `ACTION_TYPE.MEMBER_LEFT`<br/>   <br/>  * `ACTION_TYPE.MEMBER_KICKED`<br/>  <br/>  * `ACTION_TYPE.MEMBER_BANNED`<br/>  <br/>  * `ACTION_TYPE.MEMBER_UNBANNED`<br/>  <br/>  * `ACTION_TYPE.MEMBER_INVITED`<br/>  <br/>  * `ACTION_TYPE.MEMBER_SCOPE_CHANGED`<br/>For the values it can hold please check [this](/docs/js-cometchat-classes-appendix#section-actions)ndix#section-actions) | 
| receiverType | Receiver type has the following two types.<br/>  *  `RECEIVER_TYPE.USER` (user)<br/>  *  `RECEIVER_TYPE.GROUP` (group) | 
| messageCategory | Indicates the category of the message. It can hold one of the below 3 values:<br/>  * `CATEGORY_MESSAGE`(message)<br/>  * `CATEGORY_ACTION`(action)<br/>  * `CATEGORY_CALL` (call)<br/>But in the case of `Action` messageCategory will always be `CATEGORY_ACTION` (action) | 
| sentAt | Timestamp of the time the message was sent at. | 
| status | Status of the message | 
| actionBy | User/Group object which contains details of the entity that performed the action. This is an object of the AppEntity class and can either be a User or a Group | 
| actionOn | User/Group object which contains details of the entity that the action was performed on. This is an object of the AppEntity class and can either be a User or a Group | 
| actionFor | User/Group object which contains details of the entity that the action was performed for. This is an object of the AppEntity class and can either be a User or a Group | 
| message | Default message provided for the action by the CometChat SDK. The developer can use this directly to display the action or can use the actionBy, actionOn and actionFor variables to act accordingly for the respective actions. | 




```json
{
  "receiver": "ktncalltest",
  "type": "groupMember",
  "receiverType": "group",
  "category": "action",
  "data": {
    "action": "joined",
    "by": {
      "entity": {
        "uid": "cometchat-uid-5",
        "name": "cometchat-uid-5",
        "link": "https:__abc.xyz.com",
        "avatar": "https:__encrypted-tbn0.gstatic.com_images?q=tbn:ANd9GcQ2765JsCubcrJtzB-58jdEA6I3nNUDQDheI9HMDWQos3c98z7l",
        "status": "offline"
      },
      "entityType": "user"
    },
    "for": {
      "entity": {
        "guid": "ktncalltest",
        "name": "Avengers",
        "type": "public",
        "createdAt": 1545481955
      },
      "entityType": "group"
    }
  },
  "action": "joined",
  "actionBy": {
    "uid": "cometchat-uid-5",
    "name": "cometchat-uid-5",
    "avatar": "https:__encrypted-tbn0.gstatic.com_images?q=tbn:ANd9GcQ2765JsCubcrJtzB-58jdEA6I3nNUDQDheI9HMDWQos3c98z7l",
    "link": "https:__abc.xyz.com",
    "status": "offline"
  },
  "sender": {
    "uid": "cometchat-uid-5",
    "name": "cometchat-uid-5",
    "avatar": "https:__encrypted-tbn0.gstatic.com_images?q=tbn:ANd9GcQ2765JsCubcrJtzB-58jdEA6I3nNUDQDheI9HMDWQos3c98z7l",
    "link": "https:__abc.xyz.com",
    "status": "offline"
  },
  "actionFor": {
    "hasJoined": false,
    "guid": "ktncalltest",
    "name": "Avengers",
    "type": "public",
    "createdAt": 1545481955
  },
  "message": "cometchat-uid-5 joined Avengers",
  "id": "10707",
  "sentAt": 1547223050
}
```





## Actions



| Action | Meaning | CometChat SDK default message | 
| ---- | ---- | ---- | 
| joined | a User joined the group | cometchat-uid-1 joined | 
| left | a User left the group | cometchat-uid-1 left | 
| kicked | a User was kicked from the group | cometchat-uid-1 kicked cometchat-uid-2 | 
| banned | a user was banned from the group | cometchat-uid-1 banned cometchat-uid-2 | 
| unbanned | a user was unbanned into the group | cometchat-uid-1 unbanned cometchat-uid-2 | 




## Call



| Variable | Information | 
| ---- | ---- | 
| id | unique id for every message generated by CometChat | 
| muid | Additional id field for the developers in case they want to use. | 
| sender | an object of the User class holding all the user information for the sender of the message | 
| receiver | an object of the User class holding all the user/group information for the receiver of the message | 
| messageType | Indicates the type of action | 
| receiverType | Receiver type has the following two types.<br/>  *  `RECEIVER_TYPE.USER` (user)<br/>  * `RECEIVER_TYPE.GROUP` (group) | 
| messageCategory | Indicates the category of the message. It can hold one of the below 3 values:<br/>  * `CATEGORY_MESSAGE` (message)<br/>  * `CATEGORY_ACTION` (action)<br/>  * `CATEGORY_CALL` (call)<br/>But in the case of `Call` messageCategory will always be `CATEGORY_CALL` (call) | 
| sentAt | Timestamp of the time the message was sent at. | 
| status | Status of the message | 
| sessionId | A unique ID generated for every call. | 
| callStatus | The current status of the call. This can be one of the below values:<br/>  * `CALL_STATUS.INITIATED` (initiated)<br/>  * `CALL_STATUS.ONGOING` (ongoing)<br/>  * `CALL_STATUS.UNANSWERED` (unanswered)<br/>  * `CALL_STATUS.REJECTED` (rejected)<br/>  * `CALL_STATUS.BUSY` (busy)<br/>  * `CALL_STATUS.CANCELLED` (cancelled)<br/>  * `CALL_STATUS.ENDED` (ended) | 
| metaData | A parameter that can be used to send additional data along with the call object. | 
| initiatedAt | The timestamp when the call was initiated. | 
| callInitiator | The user object for the user who initiated the call. Please makes sure you typecast the object to User class before processing it further. | 
| callReceiver | The User or Group object of who is the receiver of the call. you need to check if the object is an object of Group or User before processing it further. | 




```json
    "10-1": "`long`",{
  "receiver": "cometchat-uid-1",
  "type": "audio",
  "receiverType": "user",
  "category": "call",
  "action": "initiated",
  "sessionId": "1547222109e29120fc966fbe714253787ff1c06b0fb193b185",
  "status": "initiated",
  "initiatedAt": 1547222109,
  "id": "10664",
  "sender": {
    "uid": "cometchat-uid-10",
    "name": "cometchat-uid-10",
    "avatar": "https:__raw.githubusercontent.com_Ashwinvalento_cartoon-avatar_master_lib_images_female_68.png",
    "link": "https:__abc.xyz.com",
    "status": "offline"
  },
  "data": {
    "action": "initiated",
    "by": {
      "entity": {
        "uid": "cometchat-uid-10",
        "name": "cometchat-uid-10",
        "link": "https:__abc.xyz.com",
        "avatar": "https:__raw.githubusercontent.com_Ashwinvalento_cartoon-avatar_master_lib_images_female_68.png",
        "status": "offline"
      },
      "entityType": "user"
    },
    "for": {
      "entity": {
        "uid": "cometchat-uid-1",
        "name": "cometchat-uid-1",
        "status": "offline"
      },
      "entityType": "user"
    },
    "on": {
      "entity": {
        "sessionid": "1547222109e29120fc966fbe714253787ff1c06b0fb193b185",
        "sender": "cometchat-uid-10",
        "receiverType": "user",
        "receiver": "cometchat-uid-1",
        "status": "initiated",
        "type": "audio",
        "data": {
          "entities": {
            "sender": {
              "entity": {
                "uid": "cometchat-uid-10",
                "name": "cometchat-uid-10",
                "link": "https:__abc.xyz.com",
                "avatar": "https:__raw.githubusercontent.com_Ashwinvalento_cartoon-avatar_master_lib_images_female_68.png",
                "status": "offline"
              },
              "entityType": "user"
            },
            "receiver": {
              "entity": {
                "uid": "cometchat-uid-1",
                "name": "cometchat-uid-1",
                "status": "offline"
              },
              "entityType": "user"
            }
          }
        },
        "initiatedAt": 1547222109,
        "wsChannel": {
          "identity": "[6e13b23d7a3]1547222109e29120fc966fbe714253787ff1c06b0fb193b185",
          "secret": "6e10e3eca9d5eedf68a2c272c71624f64acbaf7e",
          "service": "6e13b23d7a3.call"
        }
      },
      "entityType": "call"
    }
  },
  "sentAt": 1547222109,
  "callInitiator": {
    "uid": "cometchat-uid-10",
    "name": "cometchat-uid-10",
    "avatar": "https:__raw.githubusercontent.com_Ashwinvalento_cartoon-avatar_master_lib_images_female_68.png",
    "link": "https:__abc.xyz.com",
    "status": "offline"
  },
  "callReceiver": {
    "uid": "cometchat-uid-1",
    "name": "cometchat-uid-1",
    "status": "offline"
  }
}
```


