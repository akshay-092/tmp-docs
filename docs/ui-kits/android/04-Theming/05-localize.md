---
sidebar_position: 5
title: Localize
slug: /localize
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

CometChat UI Kit provides language localization to adapt to the language of a specific country or region. The CometChatLocalize class allows you to detect the language of your users based on their browser or device settings, and set the language accordingly.

CometChatLocalize is a class that includes methods related to locale. Developers can use these methods to change the language of the UI Kit library.

Presently, the UI Kit supports 12 languages for localization, which are:

- English (en, en-US, en-GB)
- Chinese (zh, zh-TW)
- Spanish (es)
- Hindi (hi)
- Russian (ru)
- Portuguese (pt)
- Malay (ms)
- French (fr)
- German (de)
- Swedish (sv)
- Lithuanian (lt)
- Hungarian (hu)

## Methods

Here are the methods included in the CometChatLocalize class:

- `setLocale(Activity activity, @Language.Code String language)`: This method is used to set the language in the UI Kit. It will take the constant value from the Language class and set the value accordingly.

- `getLocale()`: This method is used to get the current language. By default, it will return the current language from the device/browser.

## Usage

Here is how you can put these methods into use:

<Tabs>

<TabItem value="java" label="Java">

```java
CometChatLocalize.setLocale(getActivity(), Language.Code.hi);

String currentLanguage = CometChatLocalize.getLocale();
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">

```kotlin
CometChatLocalize.setLocale(activity, Language.Code.hi)

val currentLanguage = CometChatLocalize.getLocale()
```

</TabItem>

</Tabs>

By using the CometChatLocalize class, you can provide a user-friendly, localized experience to your users, enhancing the overall user experience within your application.
