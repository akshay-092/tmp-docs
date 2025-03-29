---
sidebar_position: 1
title: Events
slug: /webhooks-legacy-events
---

## Message events

### before_message
The endpoint will be triggered when a message is in-flight.

```
{
    "trigger": "before_message",
    "data": {
        "conversationId": "cometchat-uid-4_user_cometchat-uid-5",
        "sender": "cometchat-uid-5",
        "receiverType": "user", 
        "receiver": "cometchat-uid-4",
        "category": "message",
        "type": "text",
        "data": {
            "text": "Hi Webhook Test",
            "entities": {
                "sender": {
                    "entity": {
                        "uid": "cometchat-uid-5",
                        "name": "John Paul",
                        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-5.webp",
                        "status": "offline",
                        "role": "default"
                    },
                    "entityType": "user"
                },
                "receiver": {
                    "entity": {
                        "uid": "cometchat-uid-4",
                        "name": "Susan Marie",
                        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
                        "status": "offline",
                        "role": "default"
                    },
                    "entityType": "user"
                }
            }
        },
        "sentAt": 1586435925,
        "updatedAt": 1586435925,
    },
    "appId": "167*****1529",
    "webhook": "send-message"
}
```

### after_message
The endpoint will be triggered after a message is sent.

```
{
    "trigger": "after_message",
    "data": {
        "id": "1",
        "conversationId": "cometchat-uid-4_user_cometchat-uid-5",
        "sender": "cometchat-uid-5",
        "receiverType": "user", 
        "receiver": "cometchat-uid-4",
        "category": "message",
        "type": "text",
        "data": {
            "text": "Hi Webhook Test",
            "entities": {
                "sender": {
                    "entity": {
                        "uid": "cometchat-uid-5",
                        "name": "John Paul",
                        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-5.webp",
                        "status": "offline",
                        "role": "default"
                    },
                    "entityType": "user"
                },
                "receiver": {
                    "entity": {
                        "uid": "cometchat-uid-4",
                        "name": "Susan Marie",
                        "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
                        "status": "offline",
                        "role": "default"
                    },
                    "entityType": "user"
                }
            }
        },
        "sentAt": 1586435925,
        "updatedAt": 1586435925,
    },
    "appId": "167*****1529",
    "webhook": "send-message"
}
```

### message_delivery_receipt
The endpoint will be triggered when a message is marked delivered.

```
{
  "trigger": "message_delivery_receipt",
  "appId": "167*****1529",
  "origin": {
	  "platform": "WEBSOCKET"
  },
  "chatAPIVersion?": "3.0", 
  "region?": "us|eu|other",
  "webhook": "webhook_name",
	"data": {
    "messageId": "MESSAGE_ID",
    "receiptType": "delivered",
    "deliveredAt": 1673017183,
    "messageSender":"messageSenderUID",
    "receiptSender":"receiptSenderUID",
    "receiptReceiver":"uid|guid",
    "receiverType": "user|group"
  }
}
```

### message_read_receipt
The endpoint will be triggered when a message is marked read.

```
{
  "trigger": "message_read_receipt",
  "appId": "167*****1529",
  "origin": {
    "platform": "WEBSOCKET"
  },
  "chatAPIVersion?": "3.0",
  "region?": "us|eu|other",
  "webhook": "webhook_name",
	"data": {
    "messageId": "MESSAGE_ID",
    "receiptType": "read",
    "readAt": 1673017183,
    "messageSender":"messageSenderUID",
    "receiptSender":"receiptSenderUID",
    "receiptReceiver":"uid|guid",
    "receiverType": "user|group"
  }
}
```

## User-related events

### user_connection_status_change
The endpoint will be triggered when a users logs in or logs out of CometChat.

```
{
  "trigger": "after_connection_status_changed",
  "appId": "167*****1529",
  "origin": {
    "platform": "API|MGNT-API|WEBSOCKET|WEBRTC"
  },
  "chatAPIVersion?": "3.0",
  "region?": "us|eu|other",
  "webhook": "webhook_name",
  "data": {
    "user": {
      "uid": "uid of the user",
      "status": "online|offline",
      "status_updated": true,
      "status_updated_at": "unixtimestamp in millisec"
    },
    "event": {
      "type": "connected|disconnected",
      "at": "unixtimestamp in millisec",
      "event_for": {
        "connected_at": "unixtimestamp in millisec",
        "cometchat_device_id": "unique device id used by cometchat to identify the device(random string)",
        "session_id": "unique id to indetify the unique session of users",
        "platform": "android|ios|web"
      }
    },
    "connections": [
      {
        "connected_at": "unixtimestamp in millisec",
        "cometchat_device_id": "unique device id used by cometchat to identify the device(random string)",
        "session_id": "unique id to indetify the unique session of users",
        "platform": "android|ios|web"
      },
      {
        "connected_at": "unixtimestamp in millisec",
        "cometchat_device_id": "unique device id used by cometchat to identify the device(random string)",
        "session_id": "unique id to indetify the unique session of users",
        "platform": "android|ios|web"
      }
    ]
  }
}
```

