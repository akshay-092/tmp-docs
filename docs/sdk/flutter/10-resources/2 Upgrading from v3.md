---
sidebar_position: 2
title: Upgrading from v3
slug: /upgrading-from-v3-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upgrading from v3.x to v4 is fairly simple. Below are the major changes that are released as a part of CometChat v4:

Please follow the [Setup](setup) instructions to upgrade to the latest V4 version.

## Chat Import Change

Remove all the imports of CometChat Flutter v3 SDK or replace it with single import statement

<Tabs>
<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_sdk/cometchat_sdk.dart';
```

</TabItem>
</Tabs>

## Calling Import Change

Remove all the imports of CometChat Flutter v3 SDK or replace it with single import statement

<Tabs>
<TabItem value="Dart" label="Dart">

```dart
import 'package:cometchat_calls_sdk/cometchat_calls_sdk.dart';
```

</TabItem>
</Tabs>
