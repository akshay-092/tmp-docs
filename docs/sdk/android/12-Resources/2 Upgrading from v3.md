---
sidebar_position: 2
title: Upgrading from V3
slug: /upgrading-from-v3-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upgrading from v3.x to v4 is fairly simple. Below are the major changes that are released as a part of CometChat v4:

Please follow the [setup](setup) instructions to upgrade to the latest V4 version.

## Maven URL Change

<Tabs>
<TabItem value="Groovy" label="Groovy">

```groovy
allprojects {
  repositories {
    maven {
      url "https://dl.cloudsmith.io/public/cometchat/cometchat/maven/"
    }
  }
}
```

</TabItem>
</Tabs>

## Dependency Change

<Tabs>
<TabItem value="Groovy" label="Groovy">

```groovy
dependencies {
  implementation 'com.cometchat:chat-sdk-android:4.0.10'
}
```

</TabItem>
</Tabs>

## Change The Import Classes Packages

In v3 the import class package name start from `com.cometchat.pro.*` . Change it to `com.cometchat.chat.*` everywhere in the project and you are done with v3 to v4 migration
