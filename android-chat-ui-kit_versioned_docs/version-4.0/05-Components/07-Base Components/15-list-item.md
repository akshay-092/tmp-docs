---
sidebar_position: 14
title: List Item
slug: /list-item
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatListItem` contains one to three lines of text optionally flanked by icons or other widgets, such as `CometChatAvatar`, `CometChatDate` or `Text`. `CometChatAvatar` will always be shown in the leading view therefore either one among the `avatarURL` or  `avatarName` must be provided. The icons (or other widgets) for the list item are defined with the `tailView` parameter. The first line of text is optional and is specified with `title`. The value of subtitle is also optional, will occupy the space allocated for an additional line of text or some other widget.

## Methods

| Methods | Type | Description | 
| ---- | ---- | ---- | 
| **setAvatar** | String | sets image url to be shown in avatar in the leading view | 
| **setStatusIndicatorColor** | Color | sets color of the status indicator | 
| **setTitle** | String | sets the title to display | 
| **setSubtitleView** | Widget | sets custom subtitle below the title | 
| **setTailView** | Widget | sets the trailing widget, can be a `Text`, `CometChatDate` or `CometChatBadge` | 
| **hideSeparator** | bool | used to hide the divider separating the list items | 
| **setStyle** | ListItemStyle | used to customize the appearance of this widget | 
| **setAvatarStyle** | AvatarStyle | used to customise the Avatar shown in the leading view | 
| **setStatusIndicatorStyle** | StatusIndicatorStyle | used to customise the status indicator | 


## ListItemStyle

ListItemStyle is the class containing attributes to customize appearance of this widget.

| Methods | Type | Description | 
| ---- | ---- | ---- | 
| **setTitleAppearance** | @StyleRes<br /><br />int | used to customise the appearance of the title | 
| **setSeparatorColor** | @ColorInt<br /><br />int | used to set the color of the divider separating the list items | 
| **setBackground** | @ColorInt<br /><br />int | used to set the background color | 
| **setBackground** | Drawable | used to set background gradient | 
| **setBorderWidth** | int | used to set border | 
| **setCornerRadius** | float | used to set border radius | 
| **setBorderColor** | @ColorInt<br /><br />int | used to set border color | 
| **setSeparatorDrawable** | Drawable | used to set separator color | 


## Usage

<Tabs>
<TabItem value="xml" label="XML">

```xml
<com.cometchat.chatuikit.shared.views.CometChatListItem.CometChatListItem
        android:id="@+id/list_item"
        android:layout_width="match_parent"
        android:background="?attr/selectableItemBackground"
        android:clickable="true"
        android:focusable="true"
        android:layout_height="72dp" />
```

</TabItem>
</Tabs>



<Tabs>
<TabItem value="java" label="Java">

```java
cometChatListItem = itemView.findViewById(R.id.list_item);
cometChatListItem.setAvatar("url", "Name");
cometChatListItem.setTitle("Name");
```

</TabItem>
</Tabs>


