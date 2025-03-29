---
sidebar_position: 1
title: Upgrading from v5
slug: /upgrading-from-v5
---

## Introduction

The **CometChat v6 React UI Kit** introduces a **revamped localization system** with enhanced support for **language management, date formatting, and missing key handling**. This guide outlines the key differences and provides a **step-by-step migration process** from **v5 to v6**.

---

## **Overview of Changes**

| Feature                      | v5                                                     | v6                                                                       |
| ---------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------ |
| **Initialization**           | Used `init(language, resources)` with separate params. | Uses `init(settings: LocalizationSettings)` with a configuration object. |
| **Translation Management**   | Manually updated translations using `resources`.       | Uses `translationsForLanguage` in `init()` and `addTranslation()`.       |
| **Language Codes**           | Used shorthand codes (e.g., `en`, `fr`).               | Uses full language-region codes (e.g., `en-US`, `fr`).                |
| **Date & Time Localization** | Not configurable.                                      | Supports `CalendarObject` for date formatting.                           |
| **Timezone Handling**        | Not available.                                         | Introduced `timezone` setting.                                           |
| **Missing Key Handler**      | Not available.                                         | Introduced `missingKeyHandler` to handle missing translations.           |

---

## CometChatLocalize

### **Initialization**

In CometChat v5 UI Kit, the [`CometChatLocalize.init()`](../../../../react-chat-ui-kit_versioned_docs/version-5.0/04-Theming/04-localize.md#methods) accepts 2 parameters: `language` & `resources`

```typescript title="V5 UI Kit"
CometChatLocalize.init("en", {
  CHATS: "Chats",
});
```

In CometChat v6 UI Kit, the [`CometChatLocalize.init()`](../04-Theming/04-localize.md#initialize-cometchatlocalize) method accepts a [**localization setting**](../04-Theming/04-localize.md#localizationsettings) instead of individual parameters.

```typescript title="V6 UI Kit"
CometChatLocalize.init({
  language: "en-US",
  translationsForLanguage: {
    "en-US": { conversation_chat_title: "Chats" },
  },
  disableAutoDetection: false,
  disableDateTimeLocalization: false,
  timezone: "Europe/Madrid",
  calendarObject: new CalendarObject({
    today: "hh:mm A",
    yesterday: "[Yesterday]",
    otherDays: "DD MMM YYYY, hh:mm A",
    relativeTime: {
      minute: "%d minute ago",
      minutes: "%d minutes ago",
      hour: "%d hour ago",
      hours: "%d hours ago",
    },
  }),
  missingKeyHandler: (key) => `Missing translation: ${key}`,
});
```

---

### **Language Code Changes**

In CometChat v5 UI Kit, the language code for English was `en`.
In CometChat v6 UI Kit, the language codes have been expanded to distinguish between regional variants:
	•	`en-US` for American English
	• `en-GB` for British English

There are no changes for any other languages.

---

### **Managing Translations**

In CometChat v5 UI Kit, the only way to add or override translations was by passing them in the [`init()`](../../../../react-chat-ui-kit_versioned_docs/version-5.0/04-Theming/04-localize.md#methods) method.

```typescript title="V5 UI Kit"
CometChatLocalize.init("en", {
  CHATS: "Chats",
});
```

In CometChat v6 UI Kit, translations can be added or overridden using the [`init()`](../04-Theming/04-localize.md#initialize-cometchatlocalize) method or the [`addTranslation()`](../04-Theming/04-localize.md#add-custom-translations) method.

```typescript title="V6 UI Kit"
CometChatLocalize.addTranslation({
  "en-US": { conversation_chat_title: "Chats" },
});
```

---

### **Handling Date & Time Localization**

CometChat v5 UI Kit lacked support for date formatting, but CometChat v6 UI Kit introduces the [`CalendarObject`](../04-Theming/04-localize.md#calendarobject) for date and time formatting.

```typescript title="V6 UI Kit"
const formattedDate = new CalendarObject({
  today: "[Today at] hh:mm A",
  yesterday: "[Yesterday at] hh:mm A",
  otherDays: "DD MMM YYYY, hh:mm A",
});
CometChatLocalize.init({
  calendarObject: formattedDate,
});
```

---

### **Handling Missing Translation Keys**

CometChat v5 UI Kit did not handle missing translation keys, whereas CometChat v6 UI Kit introduces a [`missingKeyHandler`](../04-Theming/04-localize.md#initialize-cometchatlocalize) for better control.

```typescript title="V6 UI Kit"
CometChatLocalize.init({
  missingKeyHandler: (key) => `Missing translation: ${key}`,
});
```

---

### **Migrating JSON Translation Files**

In CometChat v5 UI Kit, the language code for English was `en`.

```json title="V5 UI Kit"
{
  "en": {
    "CHATS": "Chats"
  }
}
```

In CometChat v6 UI Kit, the language codes have been expanded to distinguish between regional variants: `en-US` & `en-GB`.

```json title="V6 UI Kit"
{
  "en-US": {
    "conversation": "conversation_chat_title"
  }
}
```

🔹 **Make sure your JSON translation files follow the new format.**

---

## **Additional Resources**

🔹 **Check the GitHub Repository for More Info:**
➡ [CometChatLocalize Class](https://github.com/cometchat/cometchat-uikit-react/blob/v6/src/resources/CometChatLocalize/cometchat-localize.ts)
➡ [Language JSON Files](https://github.com/cometchat/cometchat-uikit-react/tree/v6/src/resources/CometChatLocalize/resources)

## Properties & Methods

In CometChat v6 UI Kit, several props and methods in components and the CometChatLocalize class have been updated. For a detailed overview of newly added, renamed, and removed properties/methods, refer to the [Property Changes](./02-property-changes.md) Documentation.
