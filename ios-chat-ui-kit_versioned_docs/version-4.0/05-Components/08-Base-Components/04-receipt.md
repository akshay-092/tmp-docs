---
sidebar_position: 3
title: Receipt
slug: /receipt
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This component is of class `UIImageView` and is customizable to display `CometChatReceipt`.

<!-- ![](./assets/7eh5iw5mo0ontw0teim1cx2vsghp7evl480izsx42zxyrm64kfcklhl85s8sxkrv.png) -->

---

## Methods

### Progress Icon

This method is used to set Progress Icon for Receipt.

| Methods                               | Description                               |
| ------------------------------------- | ----------------------------------------- |
| `set(messageInProgressIcon: UIImage)` | Used to set In Progress Icon for Receipt. |

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// Syntax for  set(messageInProgressIcon: UIImage)
receipt.set(messageInProgressIcon: "progress-icon.png")
```

</TabItem>
</Tabs>

---

### Sent Icon

This method is used to set sent Icon for Receipt.

|                                 |                                       |
| ------------------------------- | ------------------------------------- |
| `set(messageSentIcon: UIImage)` | Used to set In sent Icon for Receipt. |

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
//Syntax for  set(messageSentIcon: UIImage)
receipt.set(messageSentIcon: "sent-icon.png")
```

</TabItem>
</Tabs>

---

### Delivered Icon

This method is used to set delivered Icon for Receipt

|                                      |                                                    |
| ------------------------------------ | -------------------------------------------------- |
| `set(messageDeliveredIcon: UIImage)` | Used to set In delivered Icon for Message Receipt. |

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// Syntax for  set(messageDeliveredIcon: UIImage)
receipt.set(messageDeliveredIcon: "delivered-icon.png")
```

</TabItem>
</Tabs>

---

### Read Icon

This method is used to set read Icon for Receipt

|                                 |                                       |
| ------------------------------- | ------------------------------------- |
| `set(messageReadIcon: UIImage)` | Used to set In read Icon for Receipt. |

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// Syntax for  set(messageReadIcon: UIImage)
receipt.set(messageReadIcon: "read-icon.png")
```

</TabItem>
</Tabs>

---

### Error Icon

This method is used to set error Icon for Receipt

|                                  |                                                   |
| -------------------------------- | ------------------------------------------------- |
| `set(messageErrorIcon: UIImage)` | This method is used to set error Icon for Receipt |

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// Syntax for  set(messageErrorIcon: UIImage)
messageReceipt.set(messageErrorIcon: "error-icon.png")
```

</TabItem>
</Tabs>

---
