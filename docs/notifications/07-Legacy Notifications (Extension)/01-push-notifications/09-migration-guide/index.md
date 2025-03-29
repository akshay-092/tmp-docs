---
sidebar_position: 9
title: Migration Guide
slug: /migration-guide-push-notifications
---

## Why is Migration required?

### Changed Implementation

1. Push Notifications extension was initially implemented using `TOPICS`.
2. The Enhanced Push Notification uses the Token-based approach which simplifies the overall process of implementation for a developer and does most of the heavy lifting for you.
3. This transition involves changes in the front-end code of your app.
4. Most of the complex code of registering and unregistering to topics has been removed and replaced with one method to register the FCM Token with the extension.

### Your app's user base

1. You may release a new app having the Enhanced Push Notifications implementation. But your user base won't update the app at the same time.
2. In such a scenario, we give you the flexibility to use both versions of Push Notifications at the same time until all your users are on the latest version of your app.
3. Once you are confident that all the users of your app are on the latest version, you can use just the token-based push notifications

## How to migrate?

1. Login to CometChat dashboard and go to Push Notifications extension settings and under "Version and related settings", set the Extension version to `V1 & V2`.
2. Release your app with the new implementation by following the respective platform-specific guides to start using Enhanced Push Notifications in your app:
3. 1. [Javascript](./web-push-notifications) (Web)
   2. [Android](./android-push-notifications)
   3. [iOS](./ios-fcm-push-notifications)
   4. [Flutter](./flutter-push-notifications)
   5. [React Native](./react-native-push-notifications)
   6. [Ionic/Cordova](./capacitor-cordova-ionic-push-notifications)

4. For Android and iOS we also have setup that allows the usage of Native calling screens:
   1. [Android - Connection Service](/extensions/android-connection-service)
   2. [iOS - APNs](./ios-apns-push-notifications)
