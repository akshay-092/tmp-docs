---
sidebar_position: 1
title: Status Indicator
slug: /status-indicator
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This component is of the class `UImageView`. It's customisable to display the status of the user's presence as online, offline using colour codes or can be used to display type of a group as password protected, public or private using a custom image.

<!-- ![](./assets/fvia2gj8nck7zwrvh5ty32xsuwns5urfh62pqbafxwros6ay2e1p5nwxmyzj9knr.jpg) -->

---

## Methods

| Methods                                       | Description                                                  |
| --------------------------------------------- | ------------------------------------------------------------ |
| `set(cornerRadius: CGFloat)`                  | Sets the `cornerRadius` for `CometChatStatusIndicator` class |
| `set(borderColor: UIColor)`                   | Sets the `borderColor` for `CometChatStatusIndicator` class  |
| `set(borderWidth: CGFloat)`                   | Sets the `borderWidth` for `CometChatStatusIndicator` class  |
| `set(backgroundColor: UIColor)`               | Sets the `color` for `CometChatStatusIndicator` class        |
| `set(icon: UIImage, with tintColor: UIColor)` | Sets the `image for`CometChatStatusIndicator`` class         |

---

## Usage

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
statusIndicator.set(borderWidth:8)
							 .set(borderColor: [UIColor lightGreen])
               .set(backgroundColor: [UIColor:green])
```

</TabItem>
</Tabs>

<!-- ![](./assets/y4r4w3dxd7dnfxfg42lv92z4h9yvi015ja33c72pvxd7b5lrmd2wftw95mtl2tqg.jpg) -->

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
statusIndicator.set(icon: UIImage(named: "lock.png"))
```

</TabItem>
</Tabs>

<!-- ![](./assets/vr0dydji9fvtut8318cy7mqedd6i8irl7kiyvp37dkpbdvvgmosck29fd9dwqhv7.jpg) -->

---
