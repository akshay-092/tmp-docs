---
sidebar_position: 1
sidebar_label: Avatar
title: Avatar
slug: /avatar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `CometChatAvatar` component displays user and group avatars. For users and groups , it displays either an image or the user's avatar and falls back to the first two letters of the username.

## <!-- ![](./assets/o9rluanspk1ko6xa0a1xhtfgey9fgot7px7ueonfhp88iciqbqp2jn050quqx022.jpg) -->

## Methods

| Methods                                           | Description                                  |
| ------------------------------------------------- | -------------------------------------------- |
| `set(cornerRadius : CGFloat)`                     | Sets the `cornerRadius`                      |
| `set(borderColor : UIColor)`                      | Sets the `borderColor`                       |
| `set(backgroundColor : UIColor)`                  | Sets the `backgroundColor`                   |
| `set(borderWidth : CGFloat)`                      | Sets the `borderWidth`                       |
| `setAvatar(avatarUrl: String)`                    | Sets the `avatarUrl`                         |
| `setAvatar(avatarUrl: String, with name: String)` | Sets the `avatarUrl` with user name initials |
| `set(outerView: Bool)`                            | Enables the outerView                        |
| set(font : UIFont)                                | Sets the font for Initials                   |
| set(fontColor: UIColor)                           | Sets the text color for Initials             |

## Usage of Methods

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
avatar.set(cornerRadius : 50)
			.set(borderWidth : 2)
			.set(borderColor: [UIColor: red galaxy color])
		  .setAvatar(user: user.avatar)
      .setOuterViewSpacing( ... )
      .setOuterView ( Color: black )
```

</TabItem>
</Tabs>

<!-- ![_A border width of 2 pixel has been added_](./assets/c1kiu8lfwx57a78y273v01ubfnb6ih9v89ojr08geaax0zc3qw96oj9mwmfkxe6p.jpg) -->

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
avatar.set(outerView : NO)
			.set(cornerRadius : 50)
			.set(text: ....)
      .set(textColor: ...)
      .set(textFont: ...)
		  .setAvatar(user: user.avatar)
      .setAvatarWith (100)
      .setAvatarHeight(100)
      .setAvatarBackgroundColor (UIColor.blackColor)
```

</TabItem>
</Tabs>

<!-- ![_OuterView is hidden_](./assets/i6iymzrn7e06icqpm5w2aexebtx9khdieddb2pg4l5wspww5lq55ke34nqnz7jwj.jpg) -->
