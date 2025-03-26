---
sidebar_position: 2
title: Badge
slug: /badge
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `CometChatBadge` component displays the unread count of messages for one-to-one private and group chats.

<!-- ![](./assets/1644930377.png) -->

---

## Methods

| Methods                          | Description                                                |
| -------------------------------- | ---------------------------------------------------------- |
| `set(borderColor : UIColor)`     | Sets the `borderColor` for `CometChatBadgeCount` class     |
| `set(borderWidth : CGFloat)`     | Sets the `borderWidth` for `CometChatBadgeCount` class     |
| `set(backgroundColor : UIColor)` | Sets the `backgroundColor` for `CometChatBadgeCount` class |
| `set(textColor : UIColor)`       | Sets the `textColor` for `CometChatBadgeCount` class       |
| `set(textFont : UIFont)`         | Sets the `textFont` for `CometChatBadgeCount` class        |
| `set(cornerRadius : CGFloat)`    | Sets the `cornerRadius` for `CometChatBadgeCount` class    |
| `set(count : Int)`               | Sets the `count` for `CometChatBadgeCount` class           |
| `incrementCount()`               | Used to increment `count`                                  |
| `removeCount()`                  | Used to clear `count`                                      |

---

## Uses

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
unreadCount.set(backgroundColor: .red)
           .set(count: 20)
```

</TabItem>
</Tabs>
