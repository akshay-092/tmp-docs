---
sidebar_position: 1
title: Overview
slug: /webhooks-legacy-overview
---

Webhooks faciliate real-time event-driven communication with your system, enabling you to receive HTTP POST requests from CometChat that carry details about different events. Utilizing webhooks is beneficial for creating customized services, such as SMS or email notifications, etc.

## Webhook endpoint requirements

1. Your webhook endpoint must be accessible over `HTTPS`. This is essential to ensure the security and integrity of data transmission.
2. This URL should be publicly accessible from the internet.
3. Ensure that your endpoint supports the `HTTP POST` method. Event payloads will be delivered via `HTTP POST` requests in `JSON` format.
4. Configure your endpoint to respond immediately to the CometChat server with a `200 OK` response.

## Security

It is recommended to set up a Basic Authentication that is usually used for server-to-server calls.
This requires you to configure a username and password. Whenever your webhook URL is triggered, the HTTP Header will contain:

```
Authorization: Basic <Base64-encoded-credentials>
```

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
      <td>[before_message](./webhooks-legacy-events#before_message)</td>
      <td>The endpoint will be triggered when a message is in-flight.</td>
    </tr>
    <tr>
      <td>[after_message](./webhooks-legacy-events#after_message)</td>
      <td>The endpoint will be triggered after a message is sent.</td>
    </tr>
    <tr>
      <td>[message_delivery_receipt](./webhooks-legacy-events#message_delivery_receipt)</td>
      <td>The endpoint will be triggered when a message is marked delivered.</td>
    </tr>
    <tr>
      <td>[message_read_receipt](./webhooks-legacy-events#message_read_receipt)</td>
      <td>The endpoint will be triggered when a message is marked read.</td>
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
      <td>[user_connection_status_change](./webhooks-legacy-events#user_connection_status_change)</td>
      <td>The endpoint will be triggered when a users logs in or logs out of CometChat.</td>
    </tr>
  </tbody>
</table>
