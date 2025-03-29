---
sidebar_position: 0
title: Import historical data
slug: /import-historical-data
---

The CometChat message import API allows application owners and admins to import existing chat messages data from any source into CometChat.

## General Instructions:

1. The authentication mechanism for these APIs follows the same authentication as all public CometChat REST APIs.  Please use your app REST API Key in the header.
2. The Base URL for the APIs is `https://<appId>.api-<region>.cometchat.io/v3/data_import/`
3. The HTTP request data will be in JSON format.
4. The HTTP response from CometChat will also be in JSON format.

## Import Messages API Usage

To import messages send post requests to the import api with bulk arrays of message records in chronological.  To process large set of records multiple requests can be made.  Each record in the array must contain a single message `data` record that conform with the restrictions as specified by the [Send Message APIs](https://api-explorer.cometchat.com/reference/send-message).

The total message count of all imported messages must be within the limit shared in the import support ticket.  Each record contains a unique message id referred to as `muid`. The array key and the `muid` value must be the same.  

The return status for each `muid` will be documented in the response messages under `data.<muid>.success`. The value of this parameter can be:

1. `true`: indicating import execution success for that `muid`.
2. `false`: indicating import execution failure for that `muid`.

In case of a failure, the error details will be noted in `data.<muid>.error`.

Please note that the request can have many messages to be imported, each with a separate `muid`. It is possible that a message may not be imported due to incorrect data supplied or a runtime error. In this case, its error code will be documented under its `muid` structure in the response.

In case of such an error, correct the data being supplied in the API as per the error code indicated and resend the failed message data in a new API call. It is not expected to include the messages which were successfully imported in the preceding API call which resulted in the error for certain messages.

Visit [Message Import API](https://api-explorer.cometchat.com/reference/import-messages) to start with your imports.

### Request Format

```json
{
    "messages": {
        "1": {
            "id": "200",
            "muid": "123e4567-e89b-12d3-a456-426652340000",
            "sender": "<SENDER UID>",
            "receiverType": "user",
            "receiver": "<RECEIVER UID>",
            "type": "text",
            "category": "message",
            "data": {
                "text": "Hi there,",
                "attachments": [
                    {
                        "name": "hi.png",
                        "extension": "png",
                        "size": "350.2",
                        "mimeType": "image_png",
                        "url": "https:__data-eu.cometchat.io_assets_images_avatars_cometchat-uid-1.webp"
                    }
                ],
                "metad2ata": {
                    "key": "value"
                },
                "custodata": {
                    "key": "value"
                }
            },
            "sentAt": "1674104348",
            "deliveredAt": "1674224684",
            "readAt": "1674224684",
            "tags": [
                "tag1"
            ]
        }
    }
}
```

### Response Format

```json
{
    "data": {
        "201": {
            "success": true,
            "data": {
                "data": {
                    "muid": "123e4567-e89b-12d3-a456-426652340000",
                    "id": "201",
                    "conversationId": "<CONVERSATION ID>",
                    "sender": "<SENDER UID>",
                    "receiverType": "user",
                    "receiver": "<RECEIVER UID>",
                    "category": "message",
                    "type": "text",
                    "data": {
                        "text": "Hi there!!",
                        "entities": {
                            "sender": {
                                "entity": {
                                    "uid": "<SENDER UID>",
                                    "name": "<SENDER NAME>",
                                    "avatar": "<SENDER AVATAR>",
                                    "status": "offline",
                                    "role": "default",
                                    "createdAt": 1674211544
                                },
                                "entityType": "user"
                            },
                            "receiver": {
                                "entity": {
                                    "uid": "<RECEIVER UID>",
                                    "name": "<RECIVER NAME>",
                                    "avatar": "<RECEIVER AVATAR>",
                                    "status": "offline",
                                    "role": "default",
                                    "createdAt": 1674211544
                                },
                                "entityType": "user"
                            }
                        }
                    },
                    "sentAt": 1674104348,
                    "deliveredAt": 1674224684,
                    "readAt": 1674224684,
                    "updatedAt": 1674104348,
                    "tags": [
                        "tag1"
                    ]
                }
            }
        }
    }
}
```

## Import Users API Usage

To import users send post requests to the import api with bulk arrays of user records.  To process large set of records multiple requests can be made.  Each record in the array must contain a single user record.  The array key and the `uid` value must be the same.

The return status for each `uid` will be documented in the response messages under `data.<uid>.success`. The value of this parameter can be:

1. `true` -&gt; indicating import execution success for that `uid`.
2. `false` -&gt; indicating import execution failure for that `uid`.

In case of a failure, the error details will be noted in `data.<uid>.error`.

Please note that the request can have many users to be imported, each with a separate `uid`. It is possible that a user may not be imported due to incorrect data supplied or a runtime error. In this case, its error code will be documented under its `uid` structure in the response.

In case of such an error, correct the data being supplied in the API as per the error code indicated and resend the failed user data in a new API call. It is not expected to include the users which were successfully imported in the preceding API call which resulted in the error for certain users.

Visit [User Import API](https://api-explorer.cometchat.com/reference/import-users) to start with your imports.

### Request Format

```json
{
      "users": {
            "<uid>": {
                "uid": "<uid>",
                "name": "<DISPLAY_NAME_OF_USER>",
                "role": "<ROLE>",
                "link": "<PROFILE_PAGE_URL>",
                "avatar": "<AVATAR_URL>",
                "createdAt": "<UNIX_TIMESTAMP>",
                "lasActiveAt": "<UNIX_TIMESTAMP>",
                "metadata": {
                },
                "tags": [],
                "deactivatedAt": "<UNIX_TIMESTAMP>"
           }
       }
  }
```



### Response Format

```json
{
    "data": {
        "user33": {
            "success": true,
            "data": {
                "data": {
                    "uid": "user33",
                    "name": "user 31",
                    "avatar": "https:__data-eu.cometchat.io_assets_images_avatars_cometchat-uid-1.webp",
                    "metadata": {
                        "key": "value"
                    },
                    "status": "offline",
                    "role": "default",
                    "lastActiveAt": 1673421419,
                    "deactivatedAt": 1673421419,
                    "createdAt": 1673421419,
                    "updatedAt": 1674155164
                },
               
            }
        }
    }
}
```

## Next steps

To learn more about importing data in to CometChat, visit our [Data import API docs](https://api-explorer.cometchat.com/reference/data-import)