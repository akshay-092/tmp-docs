---
sidebar_position: 2
title: Next.js Integration
slug: /next-js-integration-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

Using React UI Kit, you can integrate your Next.js application with CometChat.

### Pre-requisites

Please make sure you have a running Next.js app. Please follow the Next.js [Documentation](https://nextjs.org/docs/getting-started/installation) in case you do not have a Next.js app setup on your system.

### Install CometChat UI Kit

Please make sure you have installed the CometChat UI Kit by following the [Integration](./getting-started) documentation.

### Build Chat component

Please make sure you have installed the CometChat UI Kit by following the [Integration](./getting-started) documentation.

1. Let's create a new file named chat.js inside the pages folder. And add the following code in the file.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
import dynamic from "next/dynamic";
import { useEffect } from "react";

const CometChatNoSSR = dynamic(() => import("./CometChatNoSSR"), {
  ssr: false,
});

function Chat() {
  useEffect(() => {
    window.CometChat = require("@cometchat/chat-sdk-javascript").CometChat;
  });

  return (
    <div>
      <CometChatNoSSR />
    </div>
  );
}

export default Chat;
```

</TabItem>
</Tabs>

:::info Note

Replace APP_ID, REGION, and AUTH_KEY with your CometChat App ID, Region and Auth Key in the below code. You can get these details from the [CometChat Dashboard](https://app.cometchat.com/)

:::

2. Create a file named `**consts.js**` where will keep the CometChat App Credentials. Place this file in the pages folder as well. And add the below code in the file.

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
module.exports = {
  APP_ID: "APP_ID",
  REGION: "REGION",
  AUTH_KEY: "AUTH_KEY",
};
```

</TabItem>
</Tabs>

3. Now let us move to the most important part, rendering the CometChat UI Kit. Create a file named `**CometChatNoSSR.js**` component in your root folder

:::info Note

Replace UID in the below code.

:::

<Tabs>
<TabItem value="js" label="Javascript">

```javascript
function CometChatNoSSR() {
  const [user, setUser] = useState(undefined);
​
  useEffect(() => {
    const UIKitSettings = new UIKitSettingsBuilder()
      .setAppId(consts.APP_ID)
      .setRegion(consts.REGION)
      .setAuthKey(consts.AUTH_KEY)
      .subscribePresenceForAllUsers()
      .build();
​
    CometChatUIKit.init(UIKitSettings)
      .then(() => {
        console.log("Initialization completed successfully");
        CometChatUIKit.getLoggedinUser().then((user) => {
          if (!user) {
            CometChatUIKit.login("UID", consts.AUTH_KEY)
              .then((user) => {
                console.log("Login Successful", { user });
                setUser(user);
              })
              .catch((error) => {}, console.log);
          } else {
            console.log("Already logged-in", { user });
            setUser(user);
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
​
  return user ? (
    <div style={{ width: "95vw", height: "95vh" }}>
      <div style={{ height: "100%", width: "100%" }}>
        <CometChatConversationsWithMessages />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
export default CometChatNoSSR;
```

</TabItem>
</Tabs>
​

4. Now run the app using npm run dev & navigate to `localhost:3000/chat`. Change the port to the port on which the app is running.
