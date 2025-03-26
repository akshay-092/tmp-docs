---
sidebar_position: 6
title: Action Entity
slug: /interactive-action-entity
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Base class for defining the type of actions that can be performed on `BaseInteractiveElement`

Various types of Actions:

| Action             | Description                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| **Api Action**     | To perform Post, PUT , DELETE, PATCH type of API actions on the user-defined APIs with given payload |
| **URL Navigation** | To open any defined action on given url                                                              |
| **Custom Action**  | To set custom action on front end                                                                    |

**API Action**

<Tabs>
<TabItem value="java" label="Java">

```java
APIAction apiAction = new APIAction("https url", "POST", "Keyname"); // Keyname can be any userdefined string
JSONObject payload = new JSONObject(finalString);
apiAction.setPayload(payload);

JSONObject header = new JSONObject();
apiAction.setHeaders(header);
```

</TabItem>
</Tabs>

**URL Navigation**

<Tabs>
<TabItem value="java" label="Java">

```java
URLNavigationAction urlNavigationAction = new URLNavigationAction("https://www.cometchat.com/");
```

</TabItem>
</Tabs>
