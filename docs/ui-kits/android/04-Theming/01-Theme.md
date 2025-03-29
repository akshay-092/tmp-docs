---
sidebar_position: 1
sidebar_label: Introduction
title: Introduction
slug: /theme-introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
Theming in CometChat allows you to create visually consistent and customizable user interfaces that align with your application's branding. With the `CometChatTheme.DayNight` style which is built on `Theme.MaterialComponents.DayNight.NoActionBar` and acts as a global theme applied across all components, you can seamlessly integrate light and dark modes, define custom colors, typography, and component-specific styles, and enhance user experience across all CometChat components.


## Using Theming in Your Project
Set the `CometChatTheme.DayNight` as the parent theme for your application in the `themes.xml` file. You can extend it with your custom theme as needed:

```xml 
<!-- themes.xml -->
<style name="AppTheme" parent="CometChatTheme.DayNight">
   
</style>
```

In your AndroidManifest.xml file, set the theme for your application or activity:

```xml
<!-- AndroidManifest.xml -->
<application
    ...
    android:theme="@style/AppTheme">
    <!-- Other configurations -->
</application>
```

If you need to apply specific styles to a particular activity, override the theme as follows:

```xml 
<!-- AndroidManifest.xml -->
<application
    ...
    >
    <!-- Other configurations -->

<activity
    android:name=".YourChatActivity"
    android:theme="@style/AppTheme">
</activity>

</application>
```

![](../assets/introduction_theming_default.png)

## Customization
To customize the primary color in your app, you can override the cometchatPrimaryColor attribute in your theme. Here's how:

```xml
<!-- themes.xml -->
<style name="AppTheme" parent="CometChatTheme.DayNight">

    <item name="cometchatPrimaryColor">#F76808</item>

</style>
```
To know more such attributes, visit the [theme attributes file](https://github.com/cometchat/cometchat-uikit-android/blob/v5/chatuikit/src/main/res/values/attr_cometchat_theme.xml).

![](../assets/introduction_theming_primary_change.png)