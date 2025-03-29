---
sidebar_position: 7
title: React Native
slug: /react-native-push-notifications
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Learn how to set up Push notifications for React Native using Firebase Cloud Messaging or FCM.

<div style={{ display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px' }}>
  <div style={{ padding: '24px' }}>
    <h3>I want to checkout the sample app</h3>
    <p>React Native Push notifications sample app</p>
    <a style={{ display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%' }}
      href="https://github.com/cometchat/cometchat-push-notification-app-react-native/tree/v4-push-notifications-extension" target="/blank">View on Github</a>
  </div>
</div>

## Firebase Project Setup

Visit [Firebase](https://console.firebase.google.com/) and login/signup using your Gmail ID.

### Step 1: Create a new Firebase Project

Head over to the [Firebase Console](https://console.firebase.google.com/) to create a new project.

![](./assets/1640937388.png)

This is a simple 3 step process where:

1. You give a name to your project
2. Add Google Analytics to your project (Optional)
3. Configure Google Analytics account (Optional)

Click on Create and you are ready to go.

### Step 2: Add Firebase to your App

React native setup will require 2 files for Android and iOS:

1. For Android, you need to download the google-services.json file. You can refer to the [ Android Firebase Project Setup - Step 2](https://prodocs.cometchat.com/docs/android-extensions-enhanced-push-notification#step-2-add-firebase-to-your-android-app) and resume here once done.
2. For iOS, you need to download the GoogleService-Info.plist file. You can refer to the [iOS Firebase Project Setup - Step 2](https://prodocs.cometchat.com/docs/ios-extensions-enhanced-push-notification#step-2-add-firebase-to-your-ios-app) and resume here once done.

### Step 3: Download the service account file

![](./assets/cometchat-firebase-get-service-account.png)

## Extension settings

### Step 1: Enable the extension

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and Enable the Push Notifications extension.
3. Open up the settings and save the following settings.

![](./assets/cometchat-extensions-push-notifications.png)

### Step 2: Save your settings

On the Settings page you need to enter the following:

1. **Set extension version**

- If you are setting it for the first time, Select `V2` to start using the enhanced version of the Push Notification extension. The enhanced version uses Token-based approach for sending Push Notifications and is simple to implement.
- If you already have an app using `V1` and want to migrate your app to use `V2`, then Select `V1 & V2` option. This ensures that the users viewing the older version of your app also receive Push Notifications.
- Eventually, when all your users are on the latest version of your app, you can change this option to `V2`, thus turning off `V1` (Topic-based) Push Notifications completely.

2. **Select the platforms that you want to support**

- Select from Web, Android, Ionic, React Native, Flutter & iOS.

3. **Notification payload settings**

- You can control if the notification key should be in the Payload or not. Learn more about the FCM Messages [here](https://firebase.google.com/docs/cloud-messaging/concept-options).

4. **Push payload message options**

![](./assets/cometchat-push-notifications-extension-settings-payload-message-options.png)

The maximum payload size supported by FCM and APNs for push notifications is approximately 4 KB. Due to the inclusion of CometChat's message object, the payload size may exceed this limit, potentially leading to non-delivery of push notifications for certain messages. The options provided allow you to remove the sender's metadata, receiver's metadata, message metadata and trim the content of the text field.

- The message metadata includes the outputs of the Thumbnail Generation, Image Moderation, and Smart Replies extensions. You may want to retain this metadata if you need to customize the notification displayed to the end user based on these outputs.

5. **Notification Triggers**

![](./assets/cometchat-extensions-push-notification-triggers.png)

- Select the triggers for sending Push Notifications. These triggers can be classified into 3 main categories:
  1. Message Notifications
  2. Call Notifications
  3. Group Notifications
- These are pretty self-explanatory and you can toggle them as per your requirement.

## App Setup

### Step 1: Initial plugin setup

1. For React Native, there are numerous plugins available via NPM which can be used to set up push notifications for your apps. [react-native-firebase](https://www.npmjs.com/package/react-native-firebase) and [react-native-notifications](https://www.npmjs.com/package/react-native-notifications) are just the two out of many available.
2. To setup Push Notification, you need to follow the steps mentioned in the Plugin's Documentation.

At this point, you will have:

1. Two separate apps created on the Firebase console. (For Android and iOS).
2. Plugin setup completed as per the respective documentation and our reference.

### Step 2: Register FCM Token

1. This step assumes that you already have a React Native app setup with CometChat installed. Make sure that the CometChat object is initialized and user has been logged in.
2. On the success callback of user login, you can fetch the FCM Token and register it with the extension as shown below:

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
// Pseudo-code with async-await syntax

const APP_ID = 'APP_ID';
const REGION = 'REGION';
const AUTH_KEY = 'AUTH_KEY';

const UID = 'UID';
const APP_SETTINGS = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(REGION)
  .build();

try {
  // First initialize the app
  await CometChat.init(APP_ID, APP_SETTINGS);

  // Login the user
  await CometChat.login(UID, AUTH_KEY);

  // Get the FCM device token
  // You should have imported the following in the file:
  // import messaging from '@react-native-firebase/messaging';
  const FCM_TOKEN = await messaging().getToken();

  // Register the token with Enhanced Push Notifications extension
  await CometChat.registerTokenForPushNotification(FCM_TOKEN);
} catch (error) {
  // Handle errors gracefully
}
```

</TabItem>
</Tabs>

3. Registration also needs to happen in case of token refresh as shown below:

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
// Pseudo-code

// You should have imported the following in the file:
// import messaging from '@react-native-firebase/messaging';
try {
  // Listen to whether the token changes
	return messaging().onTokenRefresh(FCM_TOKEN => {
  	await CometChat.registerTokenForPushNotification(FCM_TOKEN);
  });
  // ...
} catch(error) {
  // Handle errors gracefully
}
```

</TabItem>
</Tabs>

For React Native Firebase reference, visit the link below:

### Step 3: Receive Notifications

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
// Pseudo-code
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

// Implementation can be done in a life-cycle method or hook
const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
});
```

</TabItem>
</Tabs>

:::info
We send Data Notifications and you need to handle displaying notifications at your end. For eg: Using Notifee
:::

### Step 4: Stop receiving Notifications

1. Simply logout the CometChat user and you will stop receiving notifications.
2. As a good practice, you can also delete the FCM Token by calling `deleteToken` on the messaging object.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
// Pseudo-code using async-await syntax

logout = async () => {
  // User logs out of the app
  await CometChat.logout();

  // You should have imported the following in the file:
  // import messaging from '@react-native-firebase/messaging';
  // This is a good practice.
  await messaging().deleteToken();
};
```

</TabItem>
</Tabs>

## Advanced

### Handle Custom Messages

To receive notification of `CustomMessage`, you need to set metadata while sending the `CustomMessage`.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
var receiverID = 'UID';
var customData = {
  latitude: '50.6192171633316',
  longitude: '-72.68182268750002',
};

var customType = 'location';
var receiverType = CometChat.RECEIVER_TYPE.USER;
var metadata = {
  pushNotification: 'Your Notification Message',
};

var customMessage = new CometChat.CustomMessage(
  receiverID,
  receiverType,
  customType,
  customData
);

customMessage.setMetadata(metadata);

CometChat.sendCustomMessage(customMessage).then(
  (message) => {
    // Message sent successfully.
    console.log('custom message sent successfully', message);
  },
  (error) => {
    console.log('custom message sending failed with error', error);
    // Handle exception.
  }
);
```

</TabItem>
</Tabs>

### Converting push notification payload to message object

CometChat SDK provides a method `CometChat.CometChatHelper.processMessage()` to convert the message JSON to the corresponding object of TextMessage, MediaMessage,CustomMessage, Action or Call.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
var processedMessage = CometChat.CometChatHelper.processMessage(JSON_MESSAGE);
```

</TabItem>
</Tabs>

:::info
Type of Attachment can be of the following the type <br/> 1.`CometChatConstants.MESSAGE_TYPE_IMAGE`<br/> 2.`CometChatConstants.MESSAGE_TYPE_VIDEO`<br/> 3.`CometChatConstants.MESSAGE_TYPE_AUDIO`<br/> 4.`CometChatConstants.MESSAGE_TYPE_FILE`
:::

Push Notification: Payload Sample for Text Message and Attachment/Media Message

<Tabs>
<TabItem value="JSON" label="Text message">

```json
{
  "alert": "Nancy Grace: Text Message",
  "sound": "default",
  "title": "CometChat",
  "message": {
    "receiver": "cometchat-uid-4",
    "data": {
      "entities": {
        "receiver": {
          "entityType": "user",
          "entity": {
            "uid": "cometchat-uid-4",
            "role": "default",
            "name": "Susan Marie",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
            "status": "offline"
          }
        },
        "sender": {
          "entityType": "user",
          "entity": {
            "uid": "cometchat-uid-3",
            "role": "default",
            "name": "Nancy Grace",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-3.webp",
            "status": "offline"
          }
        }
      },
      "text": "Text Message"
    },
    "sender": "cometchat-uid-3",
    "receiverType": "user",
    "id": "142",
    "sentAt": 1555668711,
    "category": "message",
    "type": "text"
  }
}
```

</TabItem>
<TabItem value="JSON1" label="Media message">

```json
{
  "alert": "Nancy Grace: has sent an image",
  "sound": "default",
  "title": "CometChat",
  "message": {
    "receiver": "cometchat-uid-4",
    "data": {
      "attachments": [
        {
          "extension": "png",
          "size": 14327,
          "name": "extension_leftpanel.png",
          "mimeType": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/data.cometchat.com/1255466c41bd7f/media/1555671238_956450103_extension_leftpanel.png"
        }
      ],
      "entities": {
        "receiver": {
          "entityType": "user",
          "entity": {
            "uid": "cometchat-uid-4",
            "role": "default",
            "name": "Susan Marie",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-4.webp",
            "status": "offline"
          }
        },
        "sender": {
          "entityType": "user",
          "entity": {
            "uid": "cometchat-uid-3",
            "role": "default",
            "name": "Nancy Grace",
            "avatar": "https://assets.cometchat.io/sampleapp/v2/users/cometchat-uid-3.webp",
            "status": "offline"
          }
        }
      },
      "url": "https://s3-eu-west-1.amazonaws.com/data.cometchat.com/1255466c41bd7f/media/1555671238_956450103_extension_leftpanel.png"
    },
    "sender": "cometchat-uid-3",
    "receiverType": "user",
    "id": "145",
    "sentAt": 1555671238,
    "category": "message",
    "type": "image"
  }
}
```

</TabItem>
</Tabs>

### Integrating ConnectionService and CallKit Using CometChat Push Notification

![IOS](./assets/1640937429.png)

![Android](./assets/1640937502.png)

:::caution Note

- Currently we can only handle default calling notification
- Whenever the user answers the call we use RNCallKeep.backToForeground(); method to bring the app in to foreground but in some devices you might need to add few more permissions for this to work For example, In MIUI 11 you need to permission for Display pop-up windows while running in the background
- When the IOS app is in lock state we are not able to open the app so the call start on callkeep it self and you can hear the audio but if you want a video call then the user has to unlock the phone click on the app icon on call screen.
- If you want to use the callkit and connection service in foreground then you might consider turning the callNotifications settings in UI kit settings. For more information in UI kit settings check the [documentation](/ui-kit/react-native/getting-started#initialise-cometchatuikit).
  :::

#### Setup push notification

- Android

Kindly follow the instruction for setting Firebase Cloud Messaging explained [here](./react-native-push-notifications)

- IOS

For IOS we use Apple Push Notification service or APNs to send push notification and VOIP notification. To configure this we need to follow some additional steps

#### Step 1: Create a Certificate Signing Request

To obtain a signing certificate required to sign apps for installation on iOS devices, you should first create a certificate signing request (CSR) file through Keychain Access on your Mac.

1. Open the Keychain Access from the utility folder, go to Keychain Access &gt; Certificate Assistant &gt; Request a Certificate From a Certificate Authority, and then click.

![](./assets/1640937699.png)

2. The Certificate Information dialog box appears. Enter the email address that you use in your Apple Developer account, and enter a common name for your private key. Don't enter CA email address, choose Saved to disk, and then click the Continue button.
   &lt;img align="center" src="./images/step1.2.png"&gt; &lt;br&gt;&lt;/br&gt;
3. Specify the name of your CSR to save and choose the location to save the file on your local disk. Then your CSR file is created, which contains a public/private key pair.

#### Step 2: Create an SSL certificate

1. Sign in to your account at the [Apple Developer Member Center](https://developer.apple.com/membercenter).
2. Go to Certificates, Identifiers & Profiles.

![](./assets/1640937720.png)

3. Create new Certificate by clicking on the + icon.

![](./assets/1640937733.png)

4. Under Services, select - Apple Push Notification services SSL (Sandbox & Production)

![](./assets/1640937745.png)

5. Select your App ID from the dropdown.

![](./assets/1640937759.png)

6. Upload CSR file., upload the CSR file you created through the **Choose File** button. To complete the process, choose Continue. When the certificate is ready, choose Download to save it to your Mac.

![](./assets/1640937784.png)

![](./assets/1640937807.png)

#### Step 3: Export and update .p8 certificate

1. To generate a .p8 key file, go to [Apple developer account page](https://developer.apple.com/account/), then select Certificates, IDs & Profiles.
2. Select Keys and click on the "+" button to add a new key.
3. In the new key page, type in your key name and check the Apple Push Notification service (APNs) box, then click "Continue" and click "Register".
4. Then proceed to download the key file by clicking Download.
5. Make note of the `Key ID`, `Team ID` and your `Bundle ID` for saving in the Extension's settings.

**If you wish to use the .p12 certificate instead, do the following:**

1. Type a name for the .p12 file and save it to your Mac.
2. Browse to the location where you saved your key, select it, and click Open. Add the key ID for the key (available in Certificates, Identifiers & Profiles in the Apple Developer Member Center) and export it.
3. DO NOT provide an export password when prompted.
4. The .p12 file will be required in the next step for uploading in the CometChat Dashboard.

#### Extension settings

#### Step 1: Enable the extension

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and Enable the Push Notifications extension.
3. Open the settings for this extension and save the following.

![](./assets/cometchat-extensions-push-notifications.png)

#### Step 2: Save your settings

On the Settings page you need to enter the following:

![](./assets/1626087095.png)

1. **Set extension version**

   The extension version has to be set to 'V2' or 'V1 & V2' in order to use APNs as the provider.

2. **Select Platforms**

   You can select the platforms on which you wish to receive Push Notifications.

3. **Firebase Cloud Messaging Settings**

   This includes the FCM Server key that you can fetch from the Firebase Dashboard.

4. **APNs Settings**

   You can turn off the Production mode when you create a development build of your application.
   Upload the .p12 certificate exported in the previous step.

5. **Push Notifications Title**

   This is usually the name of your app.

6. **Notification Triggers**

   Select the triggers for sending Push Notifications. These triggers can be classified into 3 main categories:

   1. Message Notifications
   2. Call Notifications
   3. Group Notifications

   These are pretty self-explanatory and you can toggle them as per your requirement.

#### Installation

We need to add two packages for this

- React-native-CallKeep

This package also require some additional installation steps. Follow [this](https://github.com/react-native-webrtc/react-native-callkeep) link to install react-native-callkeep

<Tabs>
<TabItem value="Bash" label="Bash">

```bash
npm install react-native-callkeep
//or
yarn add react-native-callkeep
```

</TabItem>
</Tabs>

- React Native VoIP Push Notification

This package also require some additional installation steps. Follow [this](https://github.com/react-native-webrtc/react-native-voip-push-notification#readme) link to install react-native-voip-push-notification.

<Tabs>
<TabItem value="Bash" label="Bash">

```bash
npm install react-native-voip-push-notification
# --- if using pod
cd ios/ && pod install
```

</TabItem>
</Tabs>

#### App Setup

First you need to Setup CallKeep at the start of the app in Index.js

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
const options = {
  ios: {
    appName: 'My app name',
  },
  android: {
    alertTitle: 'Permissions required',
    alertDescription: 'This application needs to access your phone accounts',
    cancelButton: 'Cancel',
    okButton: 'ok',
    imageName: 'phone_account_icon',

    foregroundService: {
      channelId: 'com.company.my',
      channelName: 'Foreground service for my app',
      notificationTitle: 'My app is running on background',
      notificationIcon: 'Path to the resource icon of the notification',
    },
  },
};
RNCallKeep.setup(options);
RNCallKeep.setAvailable(true);
let callKeep = new CallKeepHelper();
```

</TabItem>
</Tabs>

In order to handle connectionService and CallKit we have made a helper call.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { Platform } from 'react-native';
import uuid from 'react-native-uuid';
import RNCallKeep, { AnswerCallPayload } from 'react-native-callkeep';
import { navigate } from '../StackNavigator';
import messaging from '@react-native-firebase/messaging';
import VoipPushNotification from 'react-native-voip-push-notification';
import invokeApp from 'react-native-invoke-app';
import KeepAwake from 'react-native-keep-awake';
import { AppState } from 'react-native';
import _BackgroundTimer from 'react-native-background-timer';
export default class CallKeepHelper {
  constructor(msg) {
    if (msg) {
      CallKeepHelper.msg = msg;
    }
    this.setupEventListeners();
    this.registerToken();
    this.checkLoggedInUser();
    this.addLoginListener();
    CallKeepHelper.callEndedBySelf = false;
  }
  static FCMToken = null;
  static voipToken = null;
  static msg = null;
  static callEndedBySelf = null;
  static callerId = '';
  static callerId1 = '';
  static isLoggedIn = false;
  checkLoggedInUser = async () => {
    try {
      let user = await CometChat.getLoggedinUser();
      if (user) {
        if (user) {
          CallKeepHelper.isLoggedIn = true;
        }
      }
    } catch (error) {
      console.log('error checkLoggedInUser', error);
    }
  };

  addLoginListener = () => {
    var listenerID = 'UNIQUE_LISTENER_ID';
    CometChat.addLoginListener(
      listenerID,
      new CometChat.LoginListener({
        loginSuccess: (e) => {
          CallKeepHelper.isLoggedIn = true;
          this.registerTokenToCometChat();
        },
      })
    );
  };

  registerTokenToCometChat = async () => {
    if (!CallKeepHelper.isLoggedIn) {
      return false;
    }

    try {
      if (Platform.OS == 'android') {
        if (CallKeepHelper.FCMToken) {
          let response = await CometChat.registerTokenForPushNotification(
            CallKeepHelper.FCMToken
          );
        }
      } else {
        if (CallKeepHelper.FCMToken) {
          let response = await CometChat.registerTokenForPushNotification(
            CallKeepHelper.FCMToken,
            { voip: false }
          );
        }
        if (CallKeepHelper.voipToken) {
          let response = await CometChat.registerTokenForPushNotification(
            CallKeepHelper.voipToken,
            { voip: true }
          );
        }
      }
    } catch (error) {}
  };

  registerToken = async () => {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        if (Platform.OS == 'android') {
          let FCM = await messaging().getToken();

          CallKeepHelper.FCMToken = FCM;
          this.registerTokenToCometChat();
        } else {
          VoipPushNotification.registerVoipToken();
          let FCM = await messaging().getAPNSToken();
          CallKeepHelper.FCMToken = FCM;
          this.registerTokenToCometChat();
        }
      }
    } catch (error) {}
  };

  endCall = ({ callUUID }) => {
    if (CallKeepHelper.callerId) RNCallKeep.endCall(CallKeepHelper.callerId);
    _BackgroundTimer.start();
    setTimeout(() => {
      this.rejectCall();
    }, 3000);
  };

  rejectCall = async () => {
    if (
      !CallKeepHelper.callEndedBySelf &&
      CallKeepHelper.msg &&
      CallKeepHelper.msg.call?.category !== 'custom'
    ) {
      var sessionID = CallKeepHelper.msg.sessionId;
      var status = CometChat.CALL_STATUS.REJECTED;
      let call = await CometChat.rejectCall(sessionID, status);
      _BackgroundTimer.stop();
    } else {
      _BackgroundTimer.stop();
    }
  };

  static displayCallAndroid = () => {
    this.IsRinging = true;
    CallKeepHelper.callerId = CallKeepHelper.msg.conversationId;
    RNCallKeep.displayIncomingCall(
      CallKeepHelper.msg.conversationId,
      CallKeepHelper.msg.sender.name,
      CallKeepHelper.msg.sender.name,
      'generic'
    );
    setTimeout(() => {
      if (this.IsRinging) {
        this.IsRinging = false;
        RNCallKeep.reportEndCallWithUUID(CallKeepHelper.callerId, 6);
      }
    }, 15000);
  };

  // NOTE: YOU MIGHT HAVE TO MAKE SOME CHANGES OVER HERE AS YOU AS YOUR IMPLEMENTATION OF REACT-NATIVE-UI-KIT MIGHT BE DIFFERENT. YOU JUST NEED TO CALL THE ACCEPT CALL METHOD AND NAVIGATE TO CALL SCREEN.
  answerCall = ({ callUUID }) => {
    this.IsRinging = false;
    CallKeepHelper.callEndedBySelf = true;
    setTimeout(
      () =>
        navigate({
          index: 0,
          routes: [
            { name: 'Conversation', params: { call: CallKeepHelper.msg } },
          ],
        }),
      2000
    );
    // RNCallKeep.endAllCalls();
    RNCallKeep.backToForeground();
    if (Platform.OS == 'ios') {
      if (AppState.currentState == 'active') {
        RNCallKeep.endAllCalls();
        _BackgroundTimer.stop();
      } else {
        this.addAppStateListener();
      }
    } else {
      RNCallKeep.endAllCalls();
      _BackgroundTimer.stop();
    }
  };

  addAppStateListener = () => {
    AppState.addEventListener('change', (newState) => {
      if (newState == 'active') {
        RNCallKeep.endAllCalls();
        _BackgroundTimer.stop();
      }
    });
  };

  didDisplayIncomingCall = (DidDisplayIncomingCallArgs) => {
    if (DidDisplayIncomingCallArgs.callUUID) {
      if (Platform.OS == 'ios') {
        CallKeepHelper.callerId = DidDisplayIncomingCallArgs.callUUID;
      }
    }
    if (DidDisplayIncomingCallArgs.error) {
      console.log({
        message: `Callkeep didDisplayIncomingCall error: ${DidDisplayIncomingCallArgs.error}`,
      });
    }

    this.IsRinging = true;

    setTimeout(() => {
      if (this.IsRinging) {
        this.IsRinging = false;
        // 6 = MissedCall
        // https://github.com/react-native-webrtc/react-native-callkeep#constants
        RNCallKeep.reportEndCallWithUUID(
          DidDisplayIncomingCallArgs.callUUID,
          6
        );
      }
    }, 15000);
  };

  setupEventListeners() {
    if (Platform.OS == 'ios') {
      CometChat.addCallListener(
        'this.callListenerId',
        new CometChat.CallListener({
          onIncomingCallCancelled: (call) => {
            RNCallKeep.endAllCalls();
          },
        })
      );

      RNCallKeep.addEventListener('didLoadWithEvents', (event) => {
        for (let i = 0; i < event.length; i++) {
          if (event[i]?.name == 'RNCallKeepDidDisplayIncomingCall') {
            CallKeepHelper.callerId = event[i]?.data?.callUUID;
          }
        }
      });

      VoipPushNotification.addEventListener('register', async (token) => {
        CallKeepHelper.voipToken = token;
        this.registerTokenToCometChat();
      });
      VoipPushNotification.addEventListener('notification', (notification) => {
        let msg = CometChat.CometChatHelper.processMessage(
          notification.message
        );

        CallKeepHelper.msg = msg;
      });

      VoipPushNotification.addEventListener(
        'didLoadWithEvents',
        async (events) => {
          if (!events || !Array.isArray(events) || events.length < 1) {
            return;
          }
          for (let voipPushEvent of events) {
            let { name, data } = voipPushEvent;
            if (
              name ===
              VoipPushNotification.RNVoipPushRemoteNotificationsRegisteredEvent
            ) {
              CallKeepHelper.voipToken = data;
            } else if (
              name ===
              VoipPushNotification.RNVoipPushRemoteNotificationReceivedEvent
            ) {
              let msg = CometChat.CometChatHelper.processMessage(data.message);

              CallKeepHelper.msg = msg;
            }
          }
        }
      );
    }

    RNCallKeep.addEventListener('endCall', this.endCall);

    RNCallKeep.addEventListener('answerCall', this.answerCall);
  }

  removeEventListeners() {
    RNCallKeep.removeEventListener('endCall');
    RNCallKeep.removeEventListener('didDisplayIncomingCall');
    RNCallKeep.removeEventListener('didLoadWithEvents');
    VoipPushNotification.removeEventListener('didLoadWithEvents');
    VoipPushNotification.removeEventListener('register');
    VoipPushNotification.removeEventListener('notification');
  }
}
```

</TabItem>
</Tabs>

#### Android

In android we are going to use Firebase push notification to display Call notification So basically when ever we receive a push notification for call we display call notification.

we need to add a listener to listen to notification when the app is background or foreground state.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  RNCallKeep.setup(options);
  RNCallKeep.setAvailable(true);

  try {
    //Converting the message payload into CometChat Message.
    let msg = CometChat.CometChatHelper.processMessage(
      JSON.parse(remoteMessage.data.message)
    );
    if (msg.category == 'call') {
      //need to check if the notification we received for Call initiated or ended
      if (msg.action == 'initiated') {
        CallKeepHelper.msg = msg; //setting the msg object in call keep helper class
        CallKeepHelper.displayCallAndroid(); //this method is used to display incoming calls in android t
      } else {
        //if sender cancels the call before receiver accept or reject call then we also need to stop our notification
        RNCallKeep.endCall(msg.conversationId);
      }
    }
  } catch (e) {
    console.log(e);
  }
});
```

</TabItem>
</Tabs>

#### IOS

In IOS we use APNs push and voip push notification to display push notification and display call CallKit for calls.
The notification are handled in Native IOS
You need to add the code in AppDelegate.m file to display CallKit

<Tabs>
<TabItem value="Objective C" label="Objective C">

```objectivec
//add this import at the top or the file
#import "RNCallKeep.h"
#import "RNFBMessagingModule.h"
#import <PushKit/PushKit.h>
#import "RNVoipPushNotificationManager.h"




_* <------ add this function *_
- (void)pushRegistry:(PKPushRegistry *)registry didUpdatePushCredentials:(PKPushCredentials *)credentials forType:(PKPushType)type {
  // Register VoIP push token (a property of PKPushCredentials) with server

  [RNVoipPushNotificationManager didUpdatePushCredentials:credentials forType:(NSString *)type];
}

- (void)pushRegistry:(PKPushRegistry *)registry didInvalidatePushTokenForType:(PKPushType)type
{
  // --- The system calls this method when a previously provided push token is no longer valid for use. No action is necessary on your part to re-register the push type. Instead, use this method to notify your server not to send push notifications using the matching push token.
}

// --- Handle incoming pushes
- (void)pushRegistry:(PKPushRegistry *)registry didReceiveIncomingPushWithPayload:(PKPushPayload *)payload forType:(PKPushType)type withCompletionHandler:(void (^)(void))completion {

  // --- NOTE: apple forced us to invoke callkit ASAP when we receive voip push
  // --- see: react-native-callkeep

  // --- Retrieve information from your voip push payload
  NSDictionary *content = [payload.dictionaryPayload valueForKey:@"aps"];
  NSDictionary *sender = [content valueForKey:@"alert"];
  NSString *uuid =[[[NSUUID UUID] UUIDString] lowercaseString];
  NSString *callerName=[sender valueForKey:@"title"];
  NSString *handle = [sender valueForKey:@"title"];

  // --- Process the received push
   [RNVoipPushNotificationManager didReceiveIncomingPushWithPayload:payload forType:(NSString *)type];

  [RNCallKeep reportNewIncomingCall: uuid
                               handle: handle
                           handleType: @"generic"
                             hasVideo: NO
                  localizedCallerName: callerName
                      supportsHolding: YES
                         supportsDTMF: YES
                     supportsGrouping: YES
                   supportsUngrouping: YES
                          fromPushKit: YES
                              payload: nil
                withCompletionHandler: completion];

}
```

</TabItem>
</Tabs>
