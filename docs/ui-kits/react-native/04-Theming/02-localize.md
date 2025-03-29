---
sidebar_position: 2
title: Localize
slug: /localize
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

CometChat UI Kit provides language localization to adapt to the language of a specific country or region. The CometChatLocalize class allows you to detect the language of your users based on their browser or device settings, and set the language accordingly.

CometChatLocalize is a class that includes methods related to locale. Developers can use these methods to change the language of the UI Kit library.

Currently, we support 12 languages for localization. They are as follows:

- English (en, en-US, en-GB)
- Chinese (zh, zh-TW)
- Spanish (es)
- Hindi (hi)
- Russian (ru)
- Arabic (ar)
- Portuguese (pt)
- Malay (ms)
- French (fr)
- German (de)
- Swedish (sv)
- Lithuanian (lt)
- Hungarian (hu)

## Methods

Here are the methods included in the CometChatLocalize class:

- `setLocale("<language-code>")`: This method is used to set the language in the UI Kit. It takes the enum value from Language enum and sets the value accordingly.
- `getLocale()`: This method is used to get the current language. This method is used to get the current language. By default, it will return current language from device/browser.

## Usage

Here is how you can put these methods into use:

<Tabs>

<TabItem value="ts" label="Typescript">

```typescript
//language if provided will be set as locale
//translation resources can be overridden by passing the resource parameter
CometChatLocalize.init({ language: null, resources: null });

// Get Language
const currentLanguage = CometChatLocalize.getLocale();

// Set Language
CometChatLocalize.setLocale("fr");
```

</TabItem>

</Tabs>

By using the CometChatLocalize class, you can provide a user-friendly, localized experience to your users, enhancing the overall user experience within your application.
