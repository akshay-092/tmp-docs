---
sidebar_position: 2
sidebar_label: Color Resources
title: Color Resources
slug: /color-resources
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
Color resources in CometChatTheme for iOS enable you to maintain a consistent visual identity across your application. These predefined colors are used for various UI elements, including text, buttons, backgrounds, alerts, and more.

CometChatTheme adapts seamlessly to **Light mode** and **Dark mode**, ensuring an optimal user experience across different system appearances.

The color resources are divided into the following categories:  
- **Primary Colors**: Define the main theme of the application.  
- **Neutral Colors**: Used for backgrounds, strokes, and secondary UI elements.  
- **Alert Colors**: Highlight states like success, warning, error, or information.  
- **Text Colors**: Used for typography.  
- **Icon Colors**: Define icon appearances.  
- **Button Colors**: Customize button backgrounds, icons, and text.  

CometChatTheme provides separate color definitions for light and dark modes, allowing seamless adaptation to the system's theme.

## Usage

Default Colors
CometChatTheme includes predefined color sets for Light and Dark modes. These color sets ensure proper visual contrast, accessibility, and consistent branding.
With CometChatTheme, the predefined colors are automatically applied based on the system’s appearance.

You can access and use these default colors directly through the CometChatTheme class.

Example: Light Mode Color Usage

<Tabs>
<TabItem value="js" label="swift">

```swift
CometChatTheme.primaryColor // Example: UIColor(hex: "#6852D6")
CometChatTheme.backgroundColor01 // Light: UIColor(hex: "#FFFFFF")
```

</TabItem>
</Tabs>

![](../assets/conversation-theme.png)

Example: Dark Mode Color Usage

<Tabs>
<TabItem value="js" label="swift">

```swift
CometChatTheme.primaryColor // Example: UIColor(hex: "#6852D6")
CometChatTheme.backgroundColor01 // Light: UIColor(hex: "#141414")
```

</TabItem>
</Tabs>

![](../assets/conversation-theme-dark.png)