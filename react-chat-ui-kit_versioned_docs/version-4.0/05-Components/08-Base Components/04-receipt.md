---
sidebar_position: 3
title: Receipt
slug: /receipt
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The CometChatReceipt component renders the receipts such as sending, sent, delivered, read and error state indicator of a message.

![](./assets/a1w8ok8jbsn50ui54tdfv1qqk5yregcweimaoo5kdk2eymhorifbpx6ksagig4g7.png)

## Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| waitIcon | string | Asset URL for the wait icon | 
| sentIcon | string | Asset URL for the sent icon | 
| deliveredIcon | string | Asset URL for the delivered icon | 
| readIcon | string | Asset URL for the read icon | 
| errorIcon | string | Asset URL for the error icon | 
| receipt | [Receipts](/web-shared/receipts) | Group of constants representing the various receipt status | 


## ReceiptStyle

| Name | Description | 
| ---- | ---- | 
| waitIconTint | Sets the color applied to the wait icon | 
| sentIconTint | Sets the color applied to the sent icon | 
| deliveredIconTint | Sets the color applied to the delivered icon | 
| readIconTint | Sets the color applied to the read icon | 
| errorIconTint | Sets the color applied to the error icon | 


## Usage


<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import '@cometchat/uikit-elements'; //import the web elements package
import { receipts } from '@cometchat/uikit-elements'; //import the receipts enum constant

//display the wait status icon
//use the element
<cometchat-receipt 
waitIcon="https://cdn-icons-png.flaticon.com/24/661/661562.png" 
sentIcon="https://cdn-icons-png.flaticon.com/24/1443/1443000.png" deliveredIcon="https://cdn-icons-png.flaticon.com/24/10728/10728652.png" readIcon="https://cdn-icons-png.flaticon.com/24/10728/10728588.png"
receipt={receipts.wait} 
errorIcon="https://cdn-icons-png.flaticon.com/24/10207/10207468.png"></cometchat-receipt>
```

</TabItem>
</Tabs>