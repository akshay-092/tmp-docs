---
sidebar_position: 2
title: Push Notification Extension
slug: /push-notification-extension-overview
---

Learn how to send push notifications to mobile apps and desktop browsers.

Push notifications will work in iOS and Android apps as well as desktop browsers that support [Push API](https://caniuse.com/#feat=push-api). These browsers include:

1. Chrome 50+
2. Firefox 44+
3. Edge 17+
4. Opera 42+

## Migration Guide

1. If you are already using the Legacy (Topic-based) Push Notifications, you can check out our [Two-step migration guide](./migration-guide-push-notifications).

## Implementation

1. If you are new and want to implement Token-based Push Notifications in your app, follow our platform-specific guides:

   1. [Javascript](./web-push-notifications) (Web)
   2. [Android](./android-push-notifications)
   3. [iOS](./ios-fcm-push-notifications)
   4. [Flutter](./flutter-push-notifications)
   5. [React Native](./react-native-push-notifications)
   6. [Capacitor, Cordova & Ionic](./capacitor-cordova-ionic-push-notifications)

2. For Android and iOS we also have setup that allows the usage of Native calling screens:

   1. [Android - Connection Service](/extensions/android-connection-service)
   2. [iOS - APNs](./ios-apns-push-notifications)

3. [Token management](./token-management) to manage FCM and APNs tokens for the logged-in user.
4. [Mute functionality](./mute-functionality) to mute certain conversations or implement DND.
