---
sidebar_position: 5
title: Text Bubble
slug: /text-bubble
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatTextBubble` is the content view shown for TextMessage.

| Methods | Type | Description | 
| ---- | ---- | ---- | 
| **setText** | String | the text to display | 
| **setStyle** | TextBubbleStyle | used to customize appearance of this widget | 
| **setCompoundDrawable** | @DrawableRes int | used  to set image at the start,end,top or bottom of the text. | 
| **setCompoundDrawableIconTint** | @ColorInt int | used to set the image tint color | 


## TextBubbleStyle

`TextBubbleStyle` is the class containing attributes to customize appearance of this widget.

| Methods | Type | Description | 
| ---- | ---- | ---- | 
| **setTextAppearance** | @StyleRes<br /><br />int | used to set style of the text of the message | 
| **setBackground** | @ColorInt<br /><br />int | used to set background color | 
| **setBackground** | Drawable | used to set a Drawable background | 
| **setBorderWidth** | int | used to set border | 
| **setCornerRadius** | float | used to set corner radius | 


## Usage

<Tabs>
<TabItem value="xml" label="XML">

```xml
<com.cometchat.chatuikit.shared.views.CometChatTextBubble.CometChatTextBubble
        android:id="@+id/text_bubble"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />
```

</TabItem>
</Tabs>



<Tabs>
<TabItem value="java" label="Java">

```java
CometChatTextBubble cometChatTextBubble=view.findViewById(R.id.text_bubble);
cometChatTextBubble.setText("Keep calm and chat on!");
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val cometChatTextBubble: CometChatTextBubble = findViewById(R.id.text_bubble)
cometChatTextBubble.setText("Keep calm and chat on!")
```

</TabItem>
</Tabs>

