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

## Usage

### Integration

Add the following dependency in `pubspec.yaml`

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
flutter_localizations:
    sdk: flutter
```

</TabItem>

</Tabs>

---

Update MaterialApp Localizations Delegates

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_uikit_shared/l10n/translations.dart' as ccLocalization;
import 'package:flutter_localizations/flutter_localizations.dart';


class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter UI Kit Docs Sample App',
      theme: CustomTheme.lightTheme,
      darkTheme: CustomTheme.lightTheme,
      debugShowCheckedModeBanner: false,
      localizationsDelegates: const [
        ccLocalization.Translations.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      locale: Locale('fr', 'FR'),
      supportedLocales: const [
        Locale('en', ''),
        Locale('hi', ''),
        Locale('ar', ''),
        Locale('de', ''),
        Locale('es', ''),
        Locale('fr', ''),
        Locale('ms', ''),
        Locale('pt', ''),
        Locale('ru', ''),
        Locale('sv', ''),
        Locale('zh', ''),
        Locale('hu', ''),
      ],
      home: const SplashScreen(),
    );
  }
}
```

</TabItem>

</Tabs>

---

You can also translate specific strings. For example:

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
String translatedString = Translations.of(context).users;

//Use it in a widget
Text(translatedString);
```

</TabItem>

</Tabs>