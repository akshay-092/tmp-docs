---
sidebar_position: 4
title: Receipt
slug: /receipt
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The CometChatMessageReceipt component renders the  receipts such as sending, sent, delivered, read and error state indicator of a message.

![](./assets/a1w8ok8jbsn50ui54tdfv1qqk5yregcweimaoo5kdk2eymhorifbpx6ksagig4g7.png)

## How to integrate CometChatMessageReceipt ?

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
<CometChatReceipt
    receipt={status}
    deliveredIcon={deliveredIcon}
    errorIcon={errorIcon}
    readIcon={readIcon}
    sentIcon={sentIcon}
    waitIcon={waitingIcon}
  />
```


</TabItem>
</Tabs>



## Properties

To style or customise the `CometChatReceipt`, you can use the available parameters or methods.

| Properties | Type | Description | 
| ---- | ---- | ---- | 
| receipt | 'SENT' &#124; 'DELIVERED' &#124; 'READ' &#124; 'ERROR' &#124; 'WAIT' | Based on this CometChatReceipt display an icon. | 
| waitIcon | ImageType | It is use to pass user defined image in to the MessageReceipt, to change the icon While sending the message. | 
| sentIcon | ImageType | It is use to pass user defined image in to the MessageReceipt, to change the icon When Message is sent. | 
| deliveredIcon | ImageType | It is use to pass user defined image in to the MessageReceipt, to change the icon When Message is delivered. | 
| readIcon | ImageType | It is use to pass user defined image in to the MessageReceipt, to change the icon When Message is read. | 
| errorIcon | ImageType | It is use to pass user defined image in to the MessageReceipt, to change the icon While error occurs. | 
