---
sidebar_position: 4
title: Integration with Next.js
slug: /integration-with-nextjs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using React UI Kit, you can integrate your Next.js application with CometChat.

## Pre-requisites

#### First, if not already installed, add React and React DOM from your terminal using the following command.

<Tabs>
<TabItem value="cli" label="CLI">

```cli
npm install react@17.0.2, react-dom@17.0.2
```

</TabItem>
</Tabs>



## Install CometChat SDK

use the following command

<Tabs>
<TabItem value="cli" label="CLI">

```cli
npm install @cometchat-pro/chat@2.4.0 --save
```

</TabItem>
</Tabs>



## Include React UI Kit

<Tabs>
<TabItem value="cli" label="CLI">

```cli
git clone https://github.com/cometchat-pro/cometchat-pro-react-ui-kit.git
```

</TabItem>
</Tabs>


- Copy the cloned repository to your **root** folder
- Copy all the dependencies from package.json into your project's package.js and install them

## Build Chat component

### Create _`chat.js`_ file in your **pages** folder with the following code

<Tabs>
<TabItem value="js" label="Javascript">

```Javascript
import dynamic from "next/dynamic";
import { useEffect } from "react";

const CometChatNoSSR = dynamic(
    () => import('./CometChatNoSSR'),
    { ssr: false }
);

function Chat() {

    useEffect(() => {
        window.CometChat = require('@cometchat-pro/chat').CometChat
    });

    return (
        <div><CometChatNoSSR /></div>
    )
}

export default Chat;
```

</TabItem>
</Tabs>



:::warning Note

Replace APP_ID, REGION, and AUTH_KEY with your CometChat App ID and Region in the below code.

:::


### Create `consts.js` file with ComeChat details

<Tabs>
<TabItem value="js" label="Javascript">

```Javascript
module.exports = {
  APP_ID: "APP_ID",
  REGION: "REGION",
  AUTH_KEY: "AUTH_KEY"
}
```

</TabItem>
</Tabs>




### Build `CometChatNoSSR` component in your **pages** folder

<Tabs>
<TabItem value="js" label="Javascript">

```Javascript
import { Component } from "react";
import consts from './consts';
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/index"

export default class CometChatNoSSR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }
    componentDidMount() {
      
      /**
      Initialize CometChat
      */
      let appSetting = new 	      CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(consts.REGION).build();
      CometChat.init(consts.APP_ID, appSetting).then(
        () => {
          
          /**
          *Log in user
          */
          const UID = "cometchat-uid-1";
          const authKey = consts.AUTH_KEY;
          CometChat.login(UID, authKey).then(
            user => {
              this.setState({ user })
            },
            error => {
              console.log("Login failed with exception:", {
                error
              });
            }
          );
        },
        error => {
          console.log("Initialization failed with error:", error);
          // Check the reason for error and take appropriate action.
        }
      );
    }
    render() {
        /**
        Rendering CometChatUI  component of React UIKit
        **/
        if (this.state.user) {
            return (
                <div style={{ width: "100vw", height: "100vh" }}><CometChatUI /></div>
            );
        } else {
            return (<div>Laoding...</div>);
        }
    }
}
```

</TabItem>
</Tabs>
