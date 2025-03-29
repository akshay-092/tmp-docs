---
sidebar_position: 4
title: SMS Notification Extension
slug: /sms-notification-extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## About the extension

The SMS Notification extension helps you to notify offline users via SMS, when they have unread text messages.

After you've configured the extension, your users will receive SMS for unread messages in one-on-one conversations.

:::danger Required: Read Receipts
 Make sure to implement read receipts so that your users receive SMS notifications for only unread messages.
:::

## Create a new App on Twilio

We have partnered with Twilio for sending SMS Notifications so need to set up an account on [Twilio](https://www.twilio.com) before you start using the extension.

1. Once you log in to Twilio, create a new app.
2. Note down the Account SID, Auth Token.
3. Click on "Get a Trial number" to get the Sender number. (Use the paid number if you already have one)
4. Note down the above details as these will be required in the next steps.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the SMS Notification extension.
3. Open the Settings for this extension and save the below details.

![](./assets/1623199859.png)

## Configure your backend to store phone number

You can use our [Update user](https://api-explorer.cometchat.com/reference/update-user) API to set private metadata for a user. We recommend adding this code when you call our [Create user](https://api-explorer.cometchat.com/reference/creates-user) API.

Alternatively, just for the sake of testing purposes, you can add this from the CometChat Dashboard as well.

1. Login to the [CometChat](https://app.cometchat.com/login).
2. Select your app and go to the "Users" section.
3. Click on the Edit option available under the three dots for the user under consideration.
4. Click on the Edit button on the Details section.
5. Paste the below JSON in the Metadata input box and hit Save.

The Metadata is a JSON that should have the `@private` key present and should have the value `contactNumber` specified for the user. The format for the private metadata must be as follows:

<Tabs>
<TabItem value="JSON" label="JSON">

```json
{
  "@private":
  {
    "contactNumber":"+12345678910"
  }
}
```
</TabItem>
</Tabs>



:::info Country code is required
 It is important to store the contact number with the correct country code to receive SMS notifications.
:::

## Receive SMS Notification

Send a message to an offline user and watch them receive an SMS!
