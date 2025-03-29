---
sidebar_position: 1
title: Events
slug: /webhooks-events
---

## Messaging events

### message_sent

The hook triggers after the message is sent.

```
{
    "trigger": "message_sent",
    "data": {
        "message": {
            "id": "1",
            "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
            "sender": "cometchat-uid-1",
            "receiverType": "user",
            "receiver": "cometchat-uid-2",
            "category": "message",
            "type": "text",
            "data": {
                "text": "hi",
                "entities": {
                    "sender": {
                        "entity": {
                            "uid": "cometchat-uid-1",
                            "name": "Andrew Joseph",
                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
                            "status": "available",
                            "role": "default",
                            "lastActiveAt": 1696934440
                        },
                        "entityType": "user"
                    },
                    "receiver": {
                        "entity": {
                            "uid": "cometchat-uid-2",
                            "name": "George Alan",
                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                            "status": "available",
                            "role": "default",
                            "lastActiveAt": 1696934491,
                            "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
                        },
                        "entityType": "user"
                    }
                }
            },
            "sentAt": 1696934912,
            "updatedAt": 1696934912
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### message_edited

The hook triggers after the message is edited.

```
{
    "trigger": "message_edited",
    "data": {
        "message": {
            "id": "2",
            "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
            "sender": "cometchat-uid-1",
            "receiverType": "user",
            "receiver": "cometchat-uid-2",
            "category": "action",
            "type": "message",
            "data": {
                "action": "edited",
                "entities": {
                    "by": {
                        "entity": {
                            "uid": "cometchat-uid-1",
                            "name": "Andrew Joseph",
                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                            "status": "available",
                            "role": "default",
                            "lastActiveAt": 1696934440
                        },
                        "entityType": "user"
                    },
                    "for": {
                        "entity": {
                            "uid": "cometchat-uid-2",
                            "name": "George Alan",
                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                            "status": "available",
                            "role": "default",
                            "lastActiveAt": 1696934491,
                            "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
                        },
                        "entityType": "user"
                    },
                    "on": {
                        "entity": {
                            "id": "1",
                            "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
                            "sender": "cometchat-uid-1",
                            "receiverType": "user",
                            "receiver": "cometchat-uid-2",
                            "category": "message",
                            "type": "text",
                            "data": {
                                "text": "hello",
                                "entities": {
                                    "sender": {
                                        "entity": {
                                            "uid": "cometchat-uid-1",
                                            "name": "Andrew Joseph",
                                            "role": "default",
                                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
                                            "status": "available",
                                            "lastActiveAt": 1696934440
                                        },
                                        "entityType": "user"
                                    },
                                    "receiver": {
                                        "entity": {
                                            "uid": "cometchat-uid-2",
                                            "name": "George Alan",
                                            "role": "default",
                                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                                            "status": "available",
                                            "lastActiveAt": 1696934491,
                                            "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
                                        },
                                        "entityType": "user"
                                    }
                                }
                            },
                            "sentAt": 1696934912,
                            "editedAt": 1696934985,
                            "editedBy": "cometchat-uid-1",
                            "deliveredAt": 1696934912,
                            "readAt": 1696934950,
                            "updatedAt": 1696934985
                        },
                        "entityType": "message"
                    }
                },
            },
            "sentAt": 1696934985,
            "updatedAt": 1696934985
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### message_deleted

The hook triggers after the message is deleted.

```
{
    "trigger": "message_deleted",
    "data": {
        "message": {
            "id": "3",
            "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
            "sender": "cometchat-uid-1",
            "receiverType": "user",
            "receiver": "cometchat-uid-2",
            "category": "action",
            "type": "message",
            "data": {
                "action": "deleted",
                "entities": {
                    "by": {
                        "entity": {
                            "uid": "cometchat-uid-1",
                            "name": "Andrew Joseph",
                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
                            "status": "available",
                            "role": "default",
                            "lastActiveAt": 1696934440
                        },
                        "entityType": "user"
                    },
                    "for": {
                        "entity": {
                            "uid": "cometchat-uid-2",
                            "name": "George Alan",
                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                            "status": "available",
                            "role": "default",
                            "lastActiveAt": 1696934491,
                            "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
                        },
                        "entityType": "user"
                    },
                    "on": {
                        "entity": {
                            "id": "2",
                            "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
                            "sender": "cometchat-uid-1",
                            "receiverType": "user",
                            "receiver": "cometchat-uid-2",
                            "category": "message",
                            "type": "text",
                            "data": {
                                "entities": {
                                    "sender": {
                                        "entity": {
                                            "uid": "cometchat-uid-1",
                                            "name": "Andrew Joseph",
                                            "role": "default",
                                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
                                            "status": "available",
                                            "lastActiveAt": 1696934440
                                        },
                                        "entityType": "user"
                                    },
                                    "receiver": {
                                        "entity": {
                                            "uid": "cometchat-uid-2",
                                            "name": "George Alan",
                                            "role": "default",
                                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                                            "status": "available",
                                            "lastActiveAt": 1696934491,
                                            "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
                                        },
                                        "entityType": "user"
                                    }
                                }
                            },
                            "sentAt": 1696934912,
                            "deliveredAt": 1696934912,
                            "readAt": 1696934950,
                            "deletedAt": 1696935005,
                            "updatedAt": 1696935005,
                            "deletedBy": "cometchat-uid-1"
                        },
                        "entityType": "message"
                    }
                },
            },
            "sentAt": 1696935005,
            "updatedAt": 1696935005
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### message_delivery_receipt

The hook triggers when the client chat application confirms with Cometchat servers that a message was delivered.

```
{
    "trigger": "message_delivery_receipt",
    "data": {
        "receiver": "cometchat-uid-1",
        "receiverType": "user",
        "type": "receipts",
        "sender": "cometchat-uid-2",
        "messageSender": "cometchat-uid-1",
        "body": {
            "action": "delivered",
            "messageId": "57",
            "user": {
                "hasBlockedMe": false,
                "blockedByMe": false,
                "deactivatedAt": 0,
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "lastActiveAt": 1696934489,
                "role": "default",
                "status": "online"
            },
            "timestamp": 1696934912
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### message_read_receipt

The hook triggers when the client chat application confirms with Cometchat servers that a message was read.

```
{
    "trigger": "message_read_receipt",
    "data": {
        "receiver": "cometchat-uid-1",
        "receiverType": "user",
        "type": "receipts",
        "sender": "cometchat-uid-2",
        "messageSender": "cometchat-uid-1",
        "body": {
            "action": "read",
            "messageId": "57",
            "user": {
                "hasBlockedMe": false,
                "blockedByMe": false,
                "deactivatedAt": 0,
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "lastActiveAt": 1696934489,
                "role": "default",
                "status": "online"
            },
            "timestamp": 1696934950
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### message_reaction_added

The hook triggers after a user reacts to a message.

```
{
    "trigger": "message_reaction_added",
    "data": {
        "reaction": {
            "id": "<reactionId>",
            "messageId": "<messageId>",
            "reaction": "🏒",
            "uid": "cometchat-uid-1",
            "reactedAt": 1700655536,
            "reactedBy": {
                "uid": "cometchat-uid-1",
                "name": "Andrew Joseph",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
                "status": "offline",
                "role": "default",
                "lastActiveAt": 1700652818
            }
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### message_reaction_removed

The hook triggers after a user un-reacts to a message.

```
{
    "trigger": "message_reaction_removed",
    "data": {
        "reaction": {
            "id": "<reactionId>",
            "messageId": "<messageId>",
            "reaction": "🏒",
            "uid": "cometchat-uid-1",
            "reactedAt": 1700231289,
            "reactedBy": {
                "uid": "cometchat-uid-1",
                "name": "Andrew Joseph",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
                "status": "offline",
                "role": "default",
                "lastActiveAt": 1700652818
            }
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### user_mentioned

The hook triggers after a user is mentioned in the message.

```
{
    "trigger": "user_mentioned",
    "data": {
        "message": {
            "id": "4",
            "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
            "sender": "cometchat-uid-1",
            "receiverType": "user",
            "receiver": "cometchat-uid-2",
            "category": "message",
            "type": "text",
            "data": {
                "text": "Hi <@uid:cometchat-uid-2>",
                "entities": {
                    "sender": {
                        "entity": {
                            "uid": "cometchat-uid-1",
                            "name": "George Alan",
                            "status": "offline",
                            "role": "default",
                            "createdAt": 1702025699
                        },
                        "entityType": "user"
                    },
                    "receiver": {
                        "entity": {
                            "uid": "cometchat-uid-2",
                            "name": "cometchat-uid-1",
                            "status": "available",
                            "role": "default",
                            "lastActiveAt": 1702028122,
                            "createdAt": 1701931840,
                            "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
                        },
                        "entityType": "user"
                    }
                },
                "mentions": {
                    "cometchat-uid-2": {
                        "uid": "cometchat-uid-2",
                        "name": "cometchat-uid-1",
                        "status": "available",
                        "role": "default",
                        "lastActiveAt": 1702028122,
                        "createdAt": 1701931840,
                        "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
                    }
                }
            },
            "sentAt": 1702028666,
            "updatedAt": 1702028666
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### message_delivered_to_all

The hook triggers when the client chat application confirms with Cometchat servers that a message was delivered to all the participants of the group.

```
{
  "trigger": "message_delivered_to_all",
  "data": {
    "receiver": "group__1720436412627",
    "receiverType": "group",
    "type": "receipts",
    "sender": "app_system",
    "messageSender": "superhero2",
    "body": {
      "messageId": "385",
      "timestamp": 1722245922,
      "action": "deliveredToAll",
      "user": {
        "uid": "app_system",
        "name": "System",
        "avatar": "",
        "role": "default",
        "status": "offline"
      }
    }
  },
  "appId": "<appId>",
  "region": "<region>",
  "webhook": "<webhookID>"
}
```

### message_read_by_all

The hook triggers when the client chat application confirms with Cometchat servers that a message was read by all the participants of a group.

```
{
  "trigger": "message_read_by_all",
  "data": {
    "receiver": "group__1720436412627",
    "receiverType": "group",
    "type": "receipts",
    "sender": "app_system",
    "messageSender": "superhero2",
    "body": {
      "messageId": "385",
      "timestamp": 1722245922,
      "action": "readByAll",
      "user": {
        "uid": "app_system",
        "name": "System",
        "avatar": "",
        "role": "default",
        "status": "offline"
      }
    }
  },
  "appId": "<appId>",
  "region": "<region>",
  "webhook": "<webhookID>"
}
```

## User-related events

### user_blocked

The hook triggers when a user blocks another user.

```
{
    "trigger": "user_blocked",
    "data": {
        "users": {
            "cometchat-uid-2": {
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "status": "available",
                "role": "default",
                "lastActiveAt": 1696934491,
                "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            }
        },
        "by": {
            "uid": "cometchat-uid-1",
            "name": "Andrew Joseph",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
            "status": "available",
            "role": "default",
            "lastActiveAt": 1696935105
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### user_unblocked

The hook triggers when a user unblocks another user.

```
{
    "trigger": "user_unblocked",
    "data": {
        "users": {
            "cometchat-uid-2": {
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "status": "available",
                "role": "default",
                "lastActiveAt": 1696934491,
                "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            }
        },
        "by": {
            "uid": "cometchat-uid-1",
            "name": "Andrew Joseph",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
            "status": "available",
            "role": "default",
            "lastActiveAt": 1696935105
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### user_connection_status_changed

The hook triggers after a user connects/disconnects from the websocket server.

```
{
    "trigger": "user_connection_status_changed",
    "data": {
        "timestamp": 1696935103114,
        "user": {
            "uid": "cometchat-uid-1",
            "name": "Andrew Joseph",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
            "status": "offline",
            "role": "default",
            "lastActiveAt": 1693916686
        },
        "status": "offline",
        "currentConnection": {
            "action": "disconnected",
            "appInfo": {
                "version": "3.0.12",
                "apiVersion": "v3.0",
                "origin": "http://localhost:5173",
                "uts": 1696934440846,
                "clientIp": "3.128.113.92"
            },
            "platform": "javascript",
            "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            "connectedAt": 1696934440982
        },
        "userPresenceChanged": true
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

## Group events

### group_member_banned

This hooks triggers after members are banned from a group.

```
{
    "trigger": "group_member_banned",
    "data": {
        "group": {
            "guid": "cometchat-guid-1",
            "name": "Hiking Group",
            "type": "public",
            "membersCount": 1,
            "conversationId": "group_group__1696932914913",
            "createdAt": 1696932915,
            "owner": "cometchat-uid-1",
            "updatedAt": 1696933533,
            "onlineMembersCount": 1
        },
        "members": {
            "cometchat-uid-2": {
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "status": "offline",
                "role": "default",
                "lastActiveAt": 1695751453,
                "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            }
        },
        "by": {
            "uid": "cometchat-uid-1",
            "name": "Andrew Joseph",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
            "status": "available",
            "role": "default",
            "lastActiveAt": 1696932834
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### group_member_unbanned

The hook triggers after members are unbanned from a group.

```
{
    "trigger": "group_member_unbanned",
    "data": {
        "members": {
            "cometchat-uid-2": {
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "status": "offline",
                "role": "default",
                "lastActiveAt": 1695751453,
                "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            }
        },
        "group": {
            "guid": "cometchat-guid-1",
            "name": "Hiking Group",
            "type": "public",
            "membersCount": 1,
            "conversationId": "group_cometchat-guid-1",
            "createdAt": 1696932915,
            "owner": "cometchat-uid-1",
            "updatedAt": 1696933533,
            "onlineMembersCount": 1
        },
        "by": {
            "uid": "cometchat-uid-1",
            "name": "Andrew Joseph",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
            "status": "available",
            "role": "default",
            "lastActiveAt": 1696932834
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### group_member_scope_changed

The hook triggers if the scope of a member changes in a group.

```
{
    "trigger": "group_member_scope_changed",
    "data": {
        "members": {
            "cometchat-uid-2": {
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "status": "available",
                "role": "default",
                "lastActiveAt": 1696933928,
                "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
                "scope": "admin",
                "oldScope": "participant"
            }
        },
        "group": {
            "guid": "cometchat-guid-1",
            "name": "Hiking Group",
            "type": "public",
            "membersCount": 2,
            "conversationId": "group_cometchat-guid-1",
            "createdAt": 1695722891,
            "owner": "cometchat-uid-1",
            "updatedAt": 1696933925,
            "onlineMembersCount": 2
        },
        "by": {
            "uid": "cometchat-uid-1",
            "name": "Andrew Joseph",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
            "status": "available",
            "role": "default",
            "lastActiveAt": 1696933934
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### group_created

The hook triggers after the group is created.

```
{
   "trigger":"group_created",
   "data":{
      "group":{
         "guid":"cometchat-guid-1",
         "name":"Hiking Group",
         "type":"public",
         "scope":"admin",
         "membersCount":1,
         "joinedAt":1696932915,
         "conversationId":"group_cometchat-guid-1",
         "hasJoined":true,
         "createdAt":1696932915,
         "owner":"cometchat-uid-1"
      },
      "members":{
         "cometchat-uid-1":{
            "uid":"cometchat-uid-1",
            "name":"Andrew Joseph",
            "status":"available",
            "role":"default",
            "lastActiveAt":1696932834
         }
      }
   },
   "appId":"<appId>",
   "region":"<region>",
   "webhook":"<webhookID>"
}
```

### group_updated

The hook triggers after the group is updated.

```
{
    "trigger": "group_updated",
    "data": {
        "group": {
            "guid": "cometchat-guid-1",
            "name": "Hiking Group",
            "type": "public",
            "membersCount": 2,
            "conversationId": "group_cometchat-guid-1",
            "createdAt": 1695728507,
            "owner": "cometchat-uid-2",
            "updatedAt": 1696934048,
            "updatedBy": "cometchat-uid-1",
            "onlineMembersCount": 2
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### group_deleted

The hook triggers after the group is deleted.

```
{
    "trigger": "group_deleted",
    "data": {
        "group": {
            "guid": "cometchat-guid-1",
            "name": "1234",
            "type": "public",
            "membersCount": 1,
            "conversationId": "group_cometchat-guid-1",
            "createdAt": 1695722912,
            "owner": "cometchat-uid-1",
            "updatedAt": 1695817083,
            "updatedBy": "cometchat-uid-1",
            "onlineMembersCount": 1
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### group_member_joined

The hook triggers after a user joins a group.

```
{
    "trigger": "group_member_joined",
    "data": {
        "members": {
            "cometchat-uid-2": {
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "status": "available",
                "role": "default",
                "lastActiveAt": 1696933689
            }
        },
        "group": {
            "guid": "cometchat-guid-1",
            "name": "Hiking Group",
            "type": "public",
            "membersCount": 2,
            "conversationId": "group_cometchat-guid-1",
            "createdAt": 1695728507,
            "owner": "cometchat-uid-1",
            "updatedAt": 1696933691,
            "onlineMembersCount": 1
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### group_member_left

The hook triggers after a user leaves the group.

```
{
    "trigger": "group_member_left",
    "data": {
        "members": {
            "cometchat-uid-2": {
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "status": "available",
                "role": "default",
                "lastActiveAt": 1696933689
            }
        },
        "group": {
            "guid": "cometchat-guid-1",
            "name": "Hiking Group",
            "type": "public",
            "membersCount": 1,
            "conversationId": "group_cometchat-guid-1",
            "createdAt": 1695722891,
            "owner": "cometchat-uid-1",
            "updatedAt": 1696933827,
            "onlineMembersCount": 1
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### group_member_added

The hook triggers after members are added to a group.

```
{
    "trigger": "group_member_added",
    "data": {
        "group": {
            "guid": "cometchat-guid-1",
            "name": "Hiking Group",
            "type": "public",
            "membersCount": 2,
            "conversationId": "group_cometchat-guid-1",
            "createdAt": 1696932915,
            "owner": "cometchat-uid-1",
            "onlineMembersCount": 1
        },
        "members": {
            "cometchat-uid-2": {
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "status": "offline",
                "role": "default",
                "lastActiveAt": 1695751453,
                "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            }
        },
        "by": {
            "uid": "cometchat-uid-1",
            "name": "Andrew Joseph",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
            "status": "available",
            "role": "default",
            "lastActiveAt": 1696932834
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### group_member_kicked

This hook triggers after members are kicked from a group.

```
{
    "trigger": "group_member_kicked",
    "data": {
        "members": {
            "cometchat-uid-2": {
                "uid": "cometchat-uid-2",
                "name": "George Alan",
                "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
                "status": "available",
                "role": "default",
                "lastActiveAt": 1696933689,
                "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            }
        },
        "group": {
            "guid": "cometchat-guid-1",
            "name": "Hiking Group",
            "type": "public",
            "membersCount": 1,
            "conversationId": "group_cometchat-guid-1",
            "createdAt": 1695722891,
            "owner": "cometchat-uid-1",
            "updatedAt": 1696933889,
            "onlineMembersCount": 8
        },
        "by": {
            "uid": "cometchat-uid-1",
            "name": "Andrew Joseph",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
            "status": "available",
            "role": "default",
            "lastActiveAt": 1696933881
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### group_owner_transferred

The hook triggers if the owner of the group is changed.

```
{
    "trigger": "group_owner_transferred",
    "data": {
        "group": {
            "guid": "cometchat-guid-1",
            "name": "Hiking Group",
            "type": "public",
            "membersCount": 2,
            "conversationId": "group_cometchat-guid-1",
            "createdAt": 1695728507,
            "owner": "cometchat-uid-2",
            "updatedAt": 1696933737,
            "updatedBy": "cometchat-uid-1",
            "onlineMembersCount": 2,
            "oldOwner": "cometchat-uid-1"
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

## Call & Meeting events

### call_initiated

The hook triggers when the call is initiated.

```
{
    "trigger": "call_initiated",
    "data": {
        "call": {
            "id": "52",
            "conversationId": "cometchat-uid-1_user_cometchat-uid-5",
            "sender": "cometchat-uid-1",
            "receiverType": "user",
            "receiver": "cometchat-uid-5",
            "category": "call",
            "type": "audio",
            "data": {
                "action": "initiated",
                "entities": {
                    "by": {
                        "entity": {
                            "uid": "cometchat-uid-1",
                            "name": "Andrew Joseph",
                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
                            "status": "available",
                            "role": "default",
                            "lastActiveAt": 1696933934
                        },
                        "entityType": "user"
                    },
                    "for": {
                        "entity": {
                            "uid": "cometchat-uid-5",
                            "name": "John Paul",
                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-5.webp",
                            "status": "offline",
                            "role": "default",
                            "conversationId": "cometchat-uid-1_user_cometchat-uid-5"
                        },
                        "entityType": "user"
                    },
                    "on": {
                        "entity": {
                            "sessionid": "<sessionId>",
                            "conversationId": "cometchat-uid-1_user_cometchat-uid-5",
                            "sender": "cometchat-uid-1",
                            "receiverType": "user",
                            "receiver": "cometchat-uid-5",
                            "status": "initiated",
                            "type": "audio",
                            "data": {
                                "entities": {
                                    "sender": {
                                        "entity": {
                                            "uid": "cometchat-uid-1",
                                            "name": "Andrew Joseph",
                                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
                                            "status": "available",
                                            "role": "default",
                                            "lastActiveAt": 1696933934
                                        },
                                        "entityType": "user"
                                    },
                                    "receiver": {
                                        "entity": {
                                            "uid": "cometchat-uid-5",
                                            "name": "John Paul",
                                            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-5.webp",,
                                            "status": "offline",
                                            "role": "default",
                                            "conversationId": "cometchat-uid-1_user_cometchat-uid-5"
                                        },
                                        "entityType": "user"
                                    }
                                }
                            },
                            "initiatedAt": 1696934199,
                            "joinedAt": 1696934199
                        },
                        "entityType": "call"
                    }
                },
                "resource": "WEB-3_0_12-acfa8397-42f0-4f19-bc28-bc7db316ecaf-1696933879599"
            },
            "sentAt": 1696934199,
            "updatedAt": 1696934199
        }
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### call_started

The hook triggers when the call is started.

```
{
    "trigger": "call_started",
    "data": {
        "created_at": 1696934572,
        "sessionId": "<sessionId>"
    },
    "type": "call",
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### call_participant_joined

The hook triggers when a participant joins the call.

```
{
    "trigger": "call_participant_joined",
    "data": {
        "occupant": {
            "joined_at": 1696934573,
            "audio_call": "true",
            "name": "Andrew Joseph"
        },
        "initial_config": {
            "is_video_muted": "false",
            "start_recording_on_call_start": "false",
            "call_version": "2.3.0",
            "is_audio_muted": "false",
            "sdk": "react",
            "mode": "DEFAULT",
            "platform": "web",
            "is_audio_only": "true"
        },
        "sessionId": "<sessionId>"
    },
    "type": "call",
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### call_participant_left

The hook triggers when a participant leaves the call.

```
{
    "trigger": "call_participant_left",
    "data": {
        "occupant": {
            "joined_at": 1696934501,
            "audio_call": "true",
            "left_at": 1696934553,
            "name": "George Alan"
        },
        "sessionId": "<sessionId>"
    },
    "type": "call",
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### call_ended

The hook triggers when the call is ended.

```
{
    "trigger": "call_ended",
    "data": {
        "all_occupants": [
            {
                "joined_at": 1696934501,
                "audio_call": "true",
                "left_at": 1696934553,
                "name": "George Alan"
            },
            {
                "joined_at": 1696934501,
                "audio_call": "true",
                "left_at": 1696934551,
                "name": "Andrew Joseph"
            }
        ],
        "destroyed_at": 1696934553,
        "created_at": 1696934501,
        "sessionId": "<sessionId>"
    },
    "type": "call",
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### meeting_started

The hook triggers when a meeting is started.

```
{
    "trigger": "meeting_started",
    "data": {
        "created_at": 1696934692,
        "sessionId": "<sessionId>"
    },
    "type": "meet",
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### recording_generated

The hook triggers when the recording is generated.

```
{
    "trigger": "recording_generated",
    "data": {
        "recordingDate": "2023-10-10",
        "duration": "21.433000",
        "startTime": "1696937627",
        "sessionId": "<sessionId>",
        "recording_url": "<recording_url>"
    },
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### meeting_participant_joined

The hook triggers when a participant joins the meeting.

```
{
    "trigger": "meeting_participant_joined",
    "data": {
        "occupant": {
            "joined_at": 1696934692,
            "audio_call": "false",
            "name": "Andrew Joseph"
        },
        "initial_config": {
            "is_video_muted": "false",
            "start_recording_on_call_start": "false",
            "call_version": "2.3.0",
            "is_audio_muted": "false",
            "sdk": "react",
            "mode": "DEFAULT",
            "platform": "web",
            "is_audio_only": "false"
        },
        "sessionId": "<sessionId>"
    },
    "type": "meet",
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### meeting_participant_left

The hook triggers when a participant leaves the meeting.

```
{
    "trigger": "meeting_participant_left",
    "data": {
        "occupant": {
            "joined_at": 1696934692,
            "audio_call": "false",
            "left_at": 1696934730,
            "name": "Andrew Joseph"
        },
        "sessionId": "<sessionId>"
    },
    "type": "meet",
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

### meeting_ended

The hook triggers when the meeting is ended.

```
{
    "trigger": "meeting_ended",
    "data": {
        "all_occupants": [
            {
                "joined_at": 1696934692,
                "audio_call": "false",
                "left_at": 1696934730,
                "name": "Andrew Joseph"
            }
        ],
        "destroyed_at": 1696934730,
        "created_at": 1696934692,
        "sessionId": "<sessionId>"
    },
    "type": "meet",
    "appId": "<appId>",
    "region": "<region>",
    "webhook": "<webhookID>"
}
```

:::note
The following events will be available only if the **Enhanced Messaging Status** feature is enabled for your app.

- `message_delivered_to_all`,
- `message_read_by_all`
  :::

### moderation_engine_approved

The hook triggers when a message is marked as approved by the moderation engine.

```
{
  "trigger": "moderation_engine_approved",
  "data": {
    "message": {
      "id": "38437",
      "muid": "_4b6na3agb",
      "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
      "sender": "cometchat-uid-2",
      "receiverType": "user",
      "receiver": "cometchat-uid-1",
      "category": "message",
      "type": "text",
      "data": {
        "text": "hello",
        "resource": "WEB-4_0_10-a10f2a72-8d27-4fbc-aceb-05a2258e98f4-1738586366602",
        "entities": {
          "sender": {
            "entity": {
              "uid": "cometchat-uid-2",
              "name": "George Alan",
              "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
              "status": "available",
              "role": "default",
              "lastActiveAt": 1738589887
            },
            "entityType": "user"
          },
          "receiver": {
            "entity": {
              "uid": "cometchat-uid-1",
              "name": "Andrew Joseph",
              "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
              "status": "available",
              "role": "default",
              "lastActiveAt": 1738589887,
              "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            },
            "entityType": "user"
          }
        }
      },
      "sentAt": 1738591120,
      "updatedAt": 1738591120
    }
  },
  "appId": "<appId>",
  "region": "<region>",
  "webhook": "<webhookID>"
}
```

#### Filter Failure and Message Approval

When a moderation rule is configured to block messages based on conditions and filters, the conditions may be met, but the filters may not. In such cases, the message is approved, and the system will provide details on the filter that caused the rule to fail. This ensures transparency and helps administrators understand why a message was not blocked despite matching the primary rule condition.

For example, a rule might specify that the message containing `badWord` should only be blocked if it is sent by a specific user (e.g., `user-1`).

<h4>Scenario:</h4>
- **Rule Condition**: Block messages containing `badWord`.
- **Filter Condition**: The sender's UID must be `user-1`.

<h4>Example</h4>
1. **User Action**: `user-2` sends a message containing `badWord`.
2. **Rule Evaluation**:
   - The message contains `badWord`, satisfying the rule condition.
   - However, the sender's UID is `user-2`, which does not match the filter condition (`user-1`).
3. **Outcome**:
   - Since the filter condition is not met, the message is **approved** and not blocked.

```
{
  "trigger": "moderation_engine_approved",
  "data": {
    "message": {
      "id": "38446",
      "muid": "_4j800i3f9",
      "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
      "sender": "cometchat-uid-2",
      "receiverType": "user",
      "receiver": "cometchat-uid-1",
      "category": "message",
      "type": "text",
      "data": {
        "text": "duffer",
        "resource": "WEB-4_0_10-a10f2a72-8d27-4fbc-aceb-05a2258e98f4-1738586366602",
        "entities": {
          "sender": {
            "entity": {
              "uid": "cometchat-uid-2",
              "name": "George Alan",
              "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
              "status": "available",
              "role": "default",
              "lastActiveAt": 1738596587
            },
            "entityType": "user"
          },
          "receiver": {
            "entity": {
              "uid": "cometchat-uid-1",
              "name": "Andrew Joseph",
              "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
              "status": "available",
              "role": "default",
              "lastActiveAt": 1738589887,
              "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            },
            "entityType": "user"
          }
        }
      },
      "sentAt": 1738601210,
      "updatedAt": 1738601210
    },
    "moderation": [
      {
        "filter": {
          "entity": "user",
          "operand": "uid",
          "operator": "equals",
          "value": "cometchat-uid-1",
          "type": "sender",
          "_id": "67a0f23442ec6ee218670893"
        },
        "rule": {
          "id": "moderation",
          "name": "moderation",
          "revisionId": "253614a48756a6a0_moderation_2",
          "action": [
            "blockMessage"
          ],
          "blockedAt": 1738601211
        }
      }
    ]
  },
  "appId": "<appId>",
  "region": "<region>",
  "webhook": "<webhookID>"
}
```

### moderation_engine_blocked

The hook triggers when a message is marked as disapproved by the moderation engine.

```
{
  "trigger": "moderation_engine_blocked",
  "data": {
    "message": {
      "id": "38439",
      "muid": "_zhovsxqdo",
      "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
      "sender": "cometchat-uid-2",
      "receiverType": "user",
      "receiver": "cometchat-uid-1",
      "category": "message",
      "type": "text",
      "data": {
        "text": "andrew@gmail.com",
        "resource": "WEB-4_0_10-a10f2a72-8d27-4fbc-aceb-05a2258e98f4-1738586366602",
        "entities": {
          "sender": {
            "entity": {
              "uid": "cometchat-uid-2",
              "name": "George Alan",
              "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
              "status": "available",
              "role": "default",
              "lastActiveAt": 1738589887
            },
            "entityType": "user"
          },
          "receiver": {
            "entity": {
              "uid": "cometchat-uid-1",
              "name": "Andrew Joseph",
              "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
              "status": "available",
              "role": "default",
              "lastActiveAt": 1738589887,
              "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            },
            "entityType": "user"
          }
        }
      },
      "sentAt": 1738591286,
      "updatedAt": 1738591286
    },
    "moderation": [
      {
        "condition": {
          "entity": "message",
          "operand": "text",
          "category": "pattern",
          "operator": "contains",
          "value": [
            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
          ],
          "message": "Text message contains a pattern matching an email address"
        },
        "rule": {
          "id": "email_filter",
          "name": "Email filter",
          "revisionId": "2531882e5e289115_contact_email_filter_7",
          "action": [
            "blockMessage"
          ],
          "blockedAt": 1738591286
        }
      }
    ]
  },
  "appId": "<appId>",
  "region": "<region>",
  "webhook": "<webhookID>"
}
```

### moderation_manual_approved

The hook triggers when a blocked message is manually marked as approved.

```
{
  "trigger": "moderation_manual_approved",
  "data": {
    "message": {
      "id": "38439",
      "muid": "_zhovsxqdo",
      "conversationId": "cometchat-uid-1_user_cometchat-uid-2",
      "sender": "cometchat-uid-2",
      "receiverType": "user",
      "receiver": "cometchat-uid-1",
      "category": "message",
      "type": "text",
      "data": {
        "text": "andrew@gmail.com",
        "resource": "WEB-4_0_10-a10f2a72-8d27-4fbc-aceb-05a2258e98f4-1738586366602",
        "entities": {
          "sender": {
            "entity": {
              "uid": "cometchat-uid-2",
              "name": "George Alan",
              "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-2.webp",
              "status": "available",
              "role": "default",
              "lastActiveAt": 1738589887
            },
            "entityType": "user"
          },
          "receiver": {
            "entity": {
              "uid": "cometchat-uid-1",
              "name": "Andrew Joseph",
              "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-1.webp",
              "status": "available",
              "role": "default",
              "lastActiveAt": 1738589887,
              "conversationId": "cometchat-uid-1_user_cometchat-uid-2"
            },
            "entityType": "user"
          }
        }
      },
      "sentAt": 1738591286,
      "updatedAt": 1738591286
    },
    "moderation": [
      {
        "condition": {
          "entity": "message",
          "operand": "text",
          "category": "pattern",
          "operator": "contains",
          "value": [
            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
          ],
          "message": "Text message contains a pattern matching an email address"
        },
        "rule": {
          "id": "email_filter",
          "name": "Email filter",
          "revisionId": "2531882e5e289115_contact_email_filter_7",
          "action": [
            "blockMessage"
          ],
          "blockedAt": 1738591286
        }
      }
    ]
  },
  "appId": "<appId>",
  "region": "<region>",
  "webhook": "<webhookID>"
}
```
