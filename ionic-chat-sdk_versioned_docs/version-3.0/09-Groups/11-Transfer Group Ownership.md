---
sidebar_position: 11
title: Transfer Group Ownership
slug: /groups-transfer-group-ownership
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


_In other words, as a logged-in user, how do I transfer the ownership of any group if I am the owner of the group?_

In order to transfer the ownership of any group, the first condition is that you must be the owner of the group. In case you are the owner of the group, you can use the `transferGroupOwnership()` method provided by the `CometChat` class.

This will be helpful as the owner is not allowed to leave the group. In case, you as the owner would like to leave the group, you will have to use this method and transfer your ownership first to any other member of the group and only then you will be allowed to leave the group.

<Tabs>
<TabItem value="1" label="Javascript">

```javascript
let GUID = "GUID";
let UID = "UID";
CometChat.transferGroupOwnership(GUID, UID).then(
    () => {
        console.log("Successfully transferred ownership of the group.");
    }, error => {
        console.log("Could not transfer ownership of the group: ", error);
    }
)
```

</TabItem>

<TabItem value="2" label="Typescript">

```typescript
let GUID: string = "GUID";
let UID: string = "UID";
CometChat.transferGroupOwnership(GUID, UID).then(
    (ownershipTransferred: string) => {
        console.log("Successfully transferred ownership of the group.");
    }, error => {
        console.log("Could not transfer ownership of the group: ", error);
    }
);
```

</TabItem>
</Tabs>

