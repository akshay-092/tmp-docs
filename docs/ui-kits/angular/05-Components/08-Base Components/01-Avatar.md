---
sidebar_position: 1
sidebar_label: Avatar
title: Avatar
slug: /avatar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


`CometChatAvatar` component displays an image or user's avatar with fallback to the first two letters of the username or group's icon with fallback to the first two letter of the group name.

![](./assets/iaut9ris3qsp06esxrfgn13x9y6uzpulcrgiocg97f47keqml8k1zc3tbi2osmdq.png)

---

### Properties

| Name | Type | Description | 
| ---- | ---- | ---- | 
| image | string | Image URL of the avatar | 
| name | string | Fallback name of the avatar | 
| avatarStyle | [Avatar Style](/web-elements/avatar#avatar-style) | Styling properties of the element | 


### Avatar Style

Styling properties and values of the avatar element

| Name | Description | 
| ---- | ---- | 
| width | Sets the width of the element | 
| height | Sets the height of the element | 
| border | Sets the border of the element | 
| outerViewBorder | Sets the border of the outer edge of the element | 
| outerViewBorderSpacing | Sets the spacing between the profile picture and the outerViewBorder | 
| borderRadius | Sets the border radius of the element | 
| backgroundColor | Sets the background color of the element. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) | 
| backgroundSize | Sets the size of the element's background image. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) | 
| nameTextColor | Sets the foreground color of the initials. | 
| nameTextFont | Sets all the different properties of font for the initials. [Reference link](https://developer.mozilla.org/en-US/docs/Web/CSS/font) | 


### Usage

<Tabs>
<TabItem value="html" label="HTML">

```html
<!--use the element-->
<cometchat-avatar
[image]="profilePic"
[avatarStyle]="avatarStyle"
></cometchat-avatar>
```

</TabItem>
<TabItem value="js" label="Javascript">

```javascript
import  { AvatarStyle } from  '@cometchat/chat-uikit-angular'; //import the style class.

//profile pic
const profilePic = "image";

//styling properties
avatarStyle = new AvatarStyle({width: "28px",height: "28px"});
```

</TabItem>
</Tabs>