---
sidebar_position: 2
title: Upgrading from V3
slug: /upgrading-from-v3-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upgrading from v3.x to v4 is fairly simple. Below are the major changes that are released as a part of CometChat v4:

Please follow the [setup](setup) instructions to upgrade to the latest V3 version.

## Dependency Change

### Chat SDK

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
npm i @cometchat/chat-sdk-ionic
```

</TabItem>
</Tabs>

### Calls SDK

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
npm i @cometchat/calls-sdk-ionic
```

</TabItem>
</Tabs>

## Change The Import Statements

### Chat SDK

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
import { CometChat } from "@cometchat/chat-sdk-ionic";
```

</TabItem>
</Tabs>

### Calls SDK

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
import { CometChatCalls } from "@cometchat/calls-sdk-ionic";
```

</TabItem>
</Tabs>
