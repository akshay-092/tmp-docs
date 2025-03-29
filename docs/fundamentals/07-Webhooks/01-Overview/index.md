---
sidebar_position: 1
title: Overview
slug: /webhooks-overview
---

Webhooks faciliate real-time event-driven communication with your system, enabling you to receive HTTP POST requests from CometChat that carry details about different events. Utilizing webhooks is beneficial for creating customized services, such as SMS or email notifications, etc.

## Webhook endpoint requirements

1. Your webhook endpoint must be accessible over `HTTPS`. This is essential to ensure the security and integrity of data transmission.
2. This URL should be publicly accessible from the internet.
3. Ensure that your endpoint supports the `HTTP POST` method. Event payloads will be delivered via `HTTP POST` requests in `JSON` format.
4. Configure your endpoint to respond immediately to the CometChat server with a `200 OK` response.

## Security

1. ### Authentication

   It is recommended to set up a Basic Authentication that is usually used for server-to-server calls.
   This requires you to configure a username and password. Whenever your webhook URL is triggered, the HTTP Header will contain:

   ```
   Authorization: Basic <Base64-encoded-credentials>
   ```

2. ### Token Based Media Access

   For token-based media access, the URL for a media file follows this format: `https://files-%<REGION>%.cometchat.io/<APP_ID>/media/name.png`. Directly making an `HTTP GET` request to this URL will result in a `401 Unauthorized` response. When using our webhooks, you will receive this URL. To obtain a pre-signed URL, make a GET request to the same URL, including `appId` and `apiKey` in the request headers.

   **Sample request**:

   ```
   curl --location 'https://files-<REGION>.cometchat.io/<APP_ID>/media/audio3.mp3?redirect=0' \
   --header 'appId: <APP_ID>' \
   --header 'apiKey: <API_KEY>'
   ```

   **Sample response**:

   ```java
   {
    "data": {
       "url": "https://files-<REGION>.cometchat.io/<APP_ID>/media/audio3.mp3?fat=<FILE_ACCESS_TOKEN>"
     }
   }
   ```

   The `data.url` will redirect to a pre-signed URL. The pre-signed URL will be accessible for 5 min.

## Webhook triggers

### Triggers for Messages

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[message_sent](./webhooks-events#message_sent)</td>
      <td>The hook triggers after the message is sent.</td>
    </tr>
    <tr>
      <td>[message_edited](./webhooks-events#message_edited)</td>
      <td>The hook triggers after the message is edited.</td>
    </tr>
    <tr>
      <td>[message_deleted](./webhooks-events#message_deleted)</td>
      <td>The hook triggers after the message is deleted.</td>
    </tr>
    <tr>
      <td>[message_delivery_receipt](./webhooks-events#message_delivery_receipt)</td>
      <td>The hook triggers when the client chat application confirms with Cometchat servers that a message was delivered.</td>
    </tr>
    <tr>
      <td>[message_read_receipt](./webhooks-events#message_read_receipt)</td>
      <td>The hook triggers when the client chat application confirms with Cometchat servers that a message was read.</td>
    </tr>
    <tr>
      <td>[message_reaction_added](./webhooks-events#message_reaction_added)</td>
      <td>The hook triggers after a user reacts to a message.</td>
    </tr>
    <tr>
      <td>[message_reaction_removed](./webhooks-events#message_reaction_removed)</td>
      <td>The hook triggers after a user un-reacts to a message.</td>
    </tr>
    <tr>
      <td>[user_mentioned](./webhooks-events#user_mentioned)</td>
      <td>The hook triggers after a user is mentioned in the message.</td>
    </tr>
  </tbody>
</table>

### Triggers for User-related events

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[user_blocked](./webhooks-events#user_blocked)</td>
      <td>The hook triggers when a user blocks another user.</td>
    </tr>
    <tr>
      <td>[user_unblocked](./webhooks-events#user_unblocked)</td>
      <td>The hook triggers when a user unblocks another user.</td>
    </tr>
    <tr>
      <td>[user_connection_status_changed](./webhooks-events#user_connection_status_changed)</td>
      <td>The hook triggers after a user connects/disconnects from the websocket server.</td>
    </tr>
  </tbody>
</table>

### Triggers for Group events

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[group_member_banned](./webhooks-events#group_member_banned)</td>
      <td>The hook triggers after members are banned from a group.</td>
    </tr>
    <tr>
      <td>[group_member_unbanned](./webhooks-events#group_member_unbanned)</td>
      <td>The hook triggers after members are unbanned from a group.</td>
    </tr>
    <tr>
      <td>[group_member_scope_changed](./webhooks-events#group_member_scope_changed)</td>
      <td>The hook triggers if the scope of a member changes in a group.</td>
    </tr>
    <tr>
      <td>[group_created](./webhooks-events#group_created)</td>
      <td>The hook triggers after the group is created.</td>
    </tr>
    <tr>
      <td>[group_updated](./webhooks-events#group_updated)</td>
      <td>The hook triggers after the group is updated.</td>
    </tr>
    <tr>
      <td>[group_deleted](./webhooks-events#group_deleted)</td>
      <td>The hook triggers after the group is deleted.</td>
    </tr>
    <tr>
      <td>[group_member_joined](./webhooks-events#group_member_joined)</td>
      <td>The hook triggers after a user joins a group.</td>
    </tr>
    <tr>
      <td>[group_member_left](./webhooks-events#group_member_left)</td>
      <td>The hook triggers after a user leaves the group.</td>
    </tr>
    <tr>
      <td>[group_member_added](./webhooks-events#group_member_added)</td>
      <td>The hook triggers after members are added to a group.</td>
    </tr>
    <tr>
      <td>[group_member_kicked](./webhooks-events#group_member_kicked)</td>
      <td>The hook triggers after members are kicked from a group.</td>
    </tr>
    <tr>
      <td>[group_owner_transferred](./webhooks-events#group_owner_transferred)</td>
      <td>The hook triggers if the owner of the group is changed.</td>
    </tr>
  </tbody>
</table>

### Triggers for Call & Meeting

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[call_initiated](./webhooks-events#call_initiated)</td>
      <td>The hook triggers when the call is initiated.</td>
    </tr>
    <tr>
      <td>[call_started](./webhooks-events#call_started)</td>
      <td>The hook triggers when the call is started.</td>
    </tr>
    <tr>
      <td>[call_participant_joined](./webhooks-events#call_participant_joined)</td>
      <td>The hook triggers when a participant joins the call.</td>
    </tr>
    <tr>
      <td>[call_participant_left](./webhooks-events#call_participant_left)</td>
      <td>The hook triggers when a participant leaves the call.</td>
    </tr>
    <tr>
      <td>[call_ended](./webhooks-events#call_ended)</td>
      <td>The hook triggers when the call is ended.</td>
    </tr>
    <tr>
      <td>[meeting_started](./webhooks-events#meeting_started)</td>
      <td>The hook triggers when a meeting is started.</td>
    </tr>
    <tr>
      <td>[recording_generated](./webhooks-events#recording_generated)</td>
      <td>The hook triggers when the recording is generated.</td>
    </tr>
    <tr>
      <td>[meeting_participant_joined](./webhooks-events#meeting_participant_joined)</td>
      <td>The hook triggers when a participant joins the meeting.</td>
    </tr>
    <tr>
      <td>[meeting_participant_left](./webhooks-events#meeting_participant_left)</td>
      <td>The hook triggers when a participant leaves the meeting.</td>
    </tr>
    <tr>
      <td>[meeting_ended](./webhooks-events#meeting_ended)</td>
      <td>The hook triggers when the meeting is ended.</td>
    </tr>
  </tbody>
</table>

### Triggers for Moderation-related events

<table border='1' style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[moderation_engine_approved](./webhooks-events#moderation_engine_approved)</td>
      <td>The hook triggers when a message is marked as approved by moderation engine</td>
    </tr>
    <tr>
      <td>[moderation_engine_blocked](./webhooks-events#moderation_engine_blocked)</td>
      <td>The hook triggers when a message is marked as disapproved by moderation engine</td>
    </tr>
    <tr>
      <td>[moderation_manual_approved](./webhooks-events#moderation_manual_approved)</td>
      <td>The hook triggers when a blocked message is marked as approved manually</td>
    </tr>
  </tbody>
</table>
