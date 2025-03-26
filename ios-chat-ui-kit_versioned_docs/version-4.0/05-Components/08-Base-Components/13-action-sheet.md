---
sidebar_position: 12
title: Action Sheet
slug: /action-sheet
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

`CometChatActionSheet` is a component which present list of options in a list mode as well as grid mode as per the user's choice. By default, CometChatActionSheet is an integral part of CometChatMessageComposer to deliver multiple types of media as well as custom messages.

<!-- ![](./assets/gizhjiixs6nk0rzmdjr69mj1jns8hhjewiym8kvrscz70ph8mt7j5vg1vy8nvcxl.png) -->

---

## Components

CometChatActionSheet mainly consist of below components:

1 . CometChatActionItem

---

## Methods

### Set Action Items

This method is used to render the list of action items to be displayed in action sheet.

| Method                           | Description                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| `set(actionItems: [ActionItem])` | This method is used to render the list of action items to be displayed in action sheet. |

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
var actionItem1 = ActionItem(id: "payment", text: "Make Payment", startIcon: UIImage(named: "dollar"), endIcon: nil, startIconTint: UIColor.tintColor, endIconTint: nil, textColor: .black, textFont: UIFont.systemFont(ofSize: 18))

  var actionItem2 = ActionItem(id: "document", text: "Upload Documents", startIcon: UIImage(named: "file"), endIcon: nil, startIconTint: UIColor.tintColor, endIconTint: nil, textColor: .black, textFont: UIFont.systemFont(ofSize: 18))

// syntax for set(actionItems: [ActionItem])
actionSheet.set(actionItems: [actionItem1, actionItem2])
```

</TabItem>
</Tabs>

---

### Set Layout Mode

This method is used to set the default layout for the action sheet. It takes the enum LayoutMode which has two cases.

1. List Mode
2. Grid Mode

| Method                            | Description                                                                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **`set(layoutMode: LayoutMode)`** | This method is used to set the default layout for the action sheet. It takes the enum LayoutMode which has two cases. `.listMode`, ``.gridMode` |

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// syntax for set(layoutMode: LayoutMode)
actionSheet.set(layoutMode: .gridMode)
```

</TabItem>
</Tabs>

---

### Set ActionSheetStyle

User can style the action sheet with the help of properties provided by the `ActionSheetStyle`.

| Method                                    | Description                                           |
| ----------------------------------------- | ----------------------------------------------------- |
| `set(background: UIColor)`                | Sets the background color for ActionSheet             |
| `set(cornerRadius: CometChatCornerStyle)` | Sets the corner radius for ActionSheet                |
| `set(borderWidth: CGFloat)`               | Sets the border width for ActionSheet                 |
| `set(borderColor: UIColor)`               | Sets the border color for ActionSheet                 |
| `set(titleColor: UIColor)`                | Sets the title color for ActionSheet                  |
| `set(titleFont: UIFont)`                  | Sets the title font for ActionSheet                   |
| set(layoutModeIconTint: UIColor)          | Sets the layout mode icon tint for ActionSheet        |
| set(cancelButtonIconTint: UIColor)        | Sets the cancel button icon tint for ActionSheet      |
| set(listItemIconTint: UIColor)            | Sets the list item icon tint for ActionSheet          |
| set(listItemTitleFont: UIFont)            | Sets the list item title font for ActionSheet         |
| set(listItemTitleColor: UIColor)          | Sets the list item title color for ActionSheet        |
| set(listItemIconBackground: UIColor)      | Sets the list item icon background for ActionSheet    |
| set(listItemIconBorderRadius: CGFloat)    | Sets the list item icon corner radius for ActionSheet |

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
// Creating  ListItemStyle object
let listItemStyle = ListItemStyle()

// Creating  Modifying the propeties of list item
 listItemStyle.set(background: .black)
              .set(titleFont: .systemFont(ofSize: 18))
              .set(titleColor: .white)
              .set(cornerRadius: CometChatCornerStyle(cornerRadius: 2.0))
              .set(borderColor: .white)
              .set(borderWidth: 5)

// Setting the list item style
cometChatConversations.set(listItemStyle: listItemStyle)
```

</TabItem>
</Tabs>

---
