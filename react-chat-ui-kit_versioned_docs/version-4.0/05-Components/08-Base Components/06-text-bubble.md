---
sidebar_position: 5
title: Text Bubble
slug: /text-bubble
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatTextBubble` is the content view shown for TextMessage.


## Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| text | string | Text to be displayed | 
| textStyle | [TextBubbleStyle](./text-bubble#textbubblestyle) | Styling properties and values of the [Text bubble](./text-bubble) element | 


## TextBubbleStyle

| Name | Description | 
| ---- | ---- | 
| textFont | Sets all the different properties of font for the text. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font) | 
| textColor | Sets the foreground color of the text. | 


## Usage

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import '@cometchat/uikit-elements'; //import the web elements package

//use the element
<cometchat-text-bubble text="Hey, there!!"></cometchat-text-bubble>
```

</TabItem>
</Tabs>


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

