---
sidebar_position: 3
sidebar_label: Shortcut Formatter
title: Shortcut Formatter
slug: /shortcut-formatter-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The `ShortcutFormatter` class extends the `CometChatTextFormatter` class to provide a mechanism for handling shortcuts within messages. This guide will walk you through the process of using ShortcutFormatter to implement shortcut extensions in your CometChat application.

## Setup

1. **Create the ShortcutFormatter Class**: Define the `ShortcutFormatter` class by extending the `CometChatTextFormatter` class.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart 'shortcut_formatter.dart'
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';

class ShortcutFormatter extends CometChatTextFormatter {

}
```

</TabItem>

</Tabs>

2. **Init**: Initialize the `messageShortcuts` map and `shortcuts` list in the init().

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
@override
void init() {
  trackingCharacter ??= "!";
}
```

</TabItem>

</Tabs>

3. **Prepare Shortcuts**: Implement the `prepareShortcuts()` method to fetch shortcuts from the server using CometChat extension.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
bool isShortcutTracking = false;

void prepareShortcuts(TextEditingController textEditingController) {
  CometChat.callExtension('message-shortcuts', 'GET', '/v1/fetch', null,
      onSuccess: (map) {
    if (map.isNotEmpty) {
      Map<String, dynamic> data = map["data"];
      if (data.isNotEmpty) {
        Map<String, dynamic> shortcuts = data["shortcuts"];
        if (shortcuts.isNotEmpty) {
            parseData(
                shortcuts: shortcuts,
                textEditingController: textEditingController
            );
        }
      }
    }
  }, onError: (error) {});
}

void parseData({Map<String, dynamic>? shortcuts, required TextEditingController textEditingController}) async {
  if (shortcuts == null || shortcuts.isEmpty) {
    suggestionListEventSink?.add([]);
    if (onSearch != null) {
      onSearch!(null);
    }
    CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
  } else {
    CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
    if (suggestionListEventSink != null && shortcuts.isNotEmpty) {
      List<SuggestionListItem> list = [];
      shortcuts.forEach((key, value) => list.add(SuggestionListItem(
          id: key,
          title: "$key → $value",
          onTap: () {
            int cursorPos = textEditingController.selection.base.offset;
            String textOnLeftOfValue = textEditingController.text.substring(0, cursorPos - 1);
            String textOnRightOfValue = textEditingController.text.substring(cursorPos);
            textEditingController.text = "$textOnLeftOfValue$value $textOnRightOfValue";
            updatePreviousText(textEditingController.text);
            textEditingController.selection = TextSelection(
              baseOffset: cursorPos - 1 + "$value".length + 1,
              extentOffset: cursorPos - 1 + "$value".length + 1,
            );
            resetMatchTracker();
            isShortcutTracking = false;
            CometChatUIEvents.hidePanel(
                composerId, CustomUIPosition.composerPreview
            );
          })
      ));
      suggestionListEventSink?.add(list);
    }
  }
}

void updatePreviousText(String text) {
  if (previousTextEventSink != null) {
    previousTextEventSink!.add(text);
  }
}

void resetMatchTracker() {
  suggestionListEventSink?.add([]);
  if (onSearch != null) {
    onSearch!(null);
  }
}
```

</TabItem>

</Tabs>

4. **Override onChange Method**: Override the `onChange()` method to search for shortcuts based on the entered query.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
@override
void onChange(TextEditingController textEditingController, String previousText) {
  var cursorPosition = textEditingController.selection.base.offset;
  if (textEditingController.text.isEmpty) {
    resetMatchTracker();
    if (previousText.length > textEditingController.text.length) {
      if (previousText[cursorPosition] == trackingCharacter && isShortcutTracking) {
        isShortcutTracking = false;
        if (onSearch != null) {
          onSearch!(null);
        }
        CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
      }
      return;
    }
  }

  if (previousText.length > textEditingController.text.length) {
    if (previousText[cursorPosition] == trackingCharacter) {
      isShortcutTracking = false;
      if (onSearch != null) {
        onSearch!(null);
      }
      CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
    }
  } else {
    String previousCharacter = cursorPosition == 0 ? "" : textEditingController.text[cursorPosition - 1];
    bool isSpace = cursorPosition == 1 || (textEditingController.text.length > 1 && cursorPosition > 1 && (textEditingController.text[cursorPosition - 2] == " " || textEditingController.text[cursorPosition - 2] == "\n"));

    if (isShortcutTracking) {
      isShortcutTracking = false;
      if (onSearch != null) {
        onSearch!(null);
      }
      CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
    } else if (previousCharacter == trackingCharacter && isSpace) {
      isShortcutTracking = true;
      if (onSearch != null) {
        onSearch!(trackingCharacter);
      }
      CometChatUIEvents.showPanel(composerId, CustomUIPosition.composerPreview, (context) => getLoadingIndicator(context, cometChatTheme));
      prepareShortcuts(textEditingController);
    }
  }
}
```

</TabItem>

</Tabs>

5. **Handle Scroll to Bottom**: Override the `onScrollToBottom()` method if needed.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
@override
void onScrollToBottom(TextEditingController textEditingController) {
  // TODO: implement onScrollToBottom
}
```

</TabItem>

</Tabs>

---

## Usage

The widgets [CometChatConversations](/ui-kit/flutter/conversations), [CometChatMessageComposer](/ui-kit/flutter/message-composer) and [CometChatMessageList](/ui-kit/flutter/message-list) have a property called `textFormatters` which accepts a list of CometChatTextFormatter to format the text. The code shared below `textFormatters` consisting of the above created Shortcuts formatter being passed down to [CometChatMessageComposer](/ui-kit/flutter/message-composer) from [CometChatConversationsWithMessages](/ui-kit/flutter/conversations-with-messages) with help of configurations.

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';
import 'shortcut_formatter.dart';

class ShortcutFormatterExample extends StatefulWidget {
  const ShortcutFormatterExample({super.key});

  @override
  State<ShortcutFormatterExample> createState() => _ShortcutFormatterExampleState();
}

class _ShortcutFormatterExampleState extends State<ShortcutFormatterExample> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: CometChatConversationsWithMessages(
            messageConfiguration: MessageConfiguration(
              messageComposerConfiguration: MessageComposerConfiguration(
                textFormatters: [ShortcutFormatter()],
              ),
            )
        ),
      ),
    );
  }
}
```

</TabItem>

</Tabs>

---

## Example

Here is the complete example for reference:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title = "shortcut_formatter.dart"
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';

class ShortcutFormatter extends CometChatTextFormatter {
  @override
  void init() {
    trackingCharacter ??= "!";
  }

  bool isShortcutTracking = false;

  void prepareShortcuts(TextEditingController textEditingController) {
    CometChat.callExtension('message-shortcuts', 'GET', '/v1/fetch', null,
        onSuccess: (map) {
          if (map.isNotEmpty) {
            Map<String, dynamic> data = map["data"];
            if (data.isNotEmpty) {
              Map<String, dynamic> shortcuts = data["shortcuts"];
              if (shortcuts.isNotEmpty) {
                parseData(
                    shortcuts: shortcuts,
                    textEditingController: textEditingController);
              }
            }
          }
        }, onError: (error) {});
  }

  void parseData({Map<String, dynamic>? shortcuts, required TextEditingController textEditingController}) async {
    if (shortcuts == null || shortcuts.isEmpty) {
      suggestionListEventSink?.add([]);
      if (onSearch != null) {
        onSearch!(null);
      }
      CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
    } else {
      CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
      if (suggestionListEventSink != null && shortcuts.isNotEmpty) {
        List<SuggestionListItem> list = [];
        shortcuts.forEach((key, value) => list.add(SuggestionListItem(
            id: key,
            title: "$key → $value",
            onTap: () {
              int cursorPos = textEditingController.selection.base.offset;
              String textOnLeftOfValue = textEditingController.text.substring(0, cursorPos - 1);
              String textOnRightOfValue = textEditingController.text.substring(cursorPos);
              textEditingController.text = "$textOnLeftOfValue$value $textOnRightOfValue";
              updatePreviousText(textEditingController.text);
              textEditingController.selection = TextSelection(
                baseOffset: cursorPos - 1 + "$value".length + 1,
                extentOffset: cursorPos - 1 + "$value".length + 1,
              );
              resetMatchTracker();
              isShortcutTracking = false;
              CometChatUIEvents.hidePanel(
                  composerId, CustomUIPosition.composerPreview
              );
            })
        ));
        suggestionListEventSink?.add(list);
      }
    }
  }

  void updatePreviousText(String text) {
    if (previousTextEventSink != null) {
      previousTextEventSink!.add(text);
    }
  }

  void resetMatchTracker() {
    suggestionListEventSink?.add([]);
    if (onSearch != null) {
      onSearch!(null);
    }
  }

  @override
  TextStyle getMessageInputTextStyle(CometChatTheme theme) {
    // TODO: implement getMessageInputTextStyle
    throw UnimplementedError();
  }

  @override
  void handlePreMessageSend(BuildContext context, BaseMessage baseMessage) {
    // TODO: implement handlePreMessageSend
  }

  @override
  void onChange(TextEditingController textEditingController, String previousText) {
    var cursorPosition = textEditingController.selection.base.offset;
    if (textEditingController.text.isEmpty) {
      resetMatchTracker();
      if (previousText.length > textEditingController.text.length) {
        if (previousText[cursorPosition] == trackingCharacter && isShortcutTracking) {
          isShortcutTracking = false;
          if (onSearch != null) {
            onSearch!(null);
          }
          CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
        }
        return;
      }
    }

    if (previousText.length > textEditingController.text.length) {
      if (previousText[cursorPosition] == trackingCharacter) {
        isShortcutTracking = false;
        if (onSearch != null) {
          onSearch!(null);
        }
        CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
      }
    } else {
      String previousCharacter = cursorPosition == 0 ? "" : textEditingController.text[cursorPosition - 1];
      bool isSpace = cursorPosition == 1 || (textEditingController.text.length > 1 && cursorPosition > 1 && (textEditingController.text[cursorPosition - 2] == " " || textEditingController.text[cursorPosition - 2] == "\n"));

      if (isShortcutTracking) {
        isShortcutTracking = false;
        if (onSearch != null) {
          onSearch!(null);
        }
        CometChatUIEvents.hidePanel(composerId, CustomUIPosition.composerPreview);
      } else if (previousCharacter == trackingCharacter && isSpace) {
        isShortcutTracking = true;
        if (onSearch != null) {
          onSearch!(trackingCharacter);
        }
        CometChatUIEvents.showPanel(composerId, CustomUIPosition.composerPreview, (context) => getLoadingIndicator(context, cometChatTheme));
        prepareShortcuts(textEditingController);
      }
    }
  }

  @override
  void onScrollToBottom(TextEditingController textEditingController) {
    // TODO: implement onScrollToBottom
  }
}
```

</TabItem>

</Tabs>

<Tabs>

<TabItem value="Dart" label="Dart">

```dart title = "shortcut_formatter_example.dart"
import 'package:cometchat_chat_uikit/cometchat_chat_uikit.dart';
import 'package:flutter/material.dart';
import 'shortcut_formatter.dart';

class ShortcutFormatterExample extends StatefulWidget {
  const ShortcutFormatterExample({super.key});

  @override
  State<ShortcutFormatterExample> createState() => _ShortcutFormatterExampleState();
}

class _ShortcutFormatterExampleState extends State<ShortcutFormatterExample> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: CometChatConversationsWithMessages(
            messageConfiguration: MessageConfiguration(
              messageComposerConfiguration: MessageComposerConfiguration(
                textFormatters: [ShortcutFormatter()],
              ),
            )
        ),
      ),
    );
  }
}
```

</TabItem>

</Tabs>

![](./assets/shortcut_formatter/shortcut_extension_guide.png)

---
