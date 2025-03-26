---
sidebar_position: 4
title: Integration with Next.js
slug: /nextjs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using React UI Kit, you can integrate your Next.js application with CometChat.

## Pre-requisites

#### First, if not already installed, add React and React DOM from your terminal using the following command.

<Tabs>
<TabItem value="js" label="CLI">

```cli
npm install react@17.0.2, react-dom@17.0.2
```

</TabItem>
</Tabs>

## Install CometChat SDK

Use the following command

<Tabs>
<TabItem value="js" label="CLI">

```cli
npm install @cometchat-pro/chat@3.0.10 --save
```

</TabItem>
</Tabs>

## Include React UI Kit

<Tabs>
<TabItem value="js" label="CLI">

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
<TabItem value="js" label="React">

```Javascript
import dynamic from "next/dynamic";
import { useEffect } from "react";

const CometChatNoSSR = dynamic(
    () => import('../CometChatNoSSR'),
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

Replace APP_ID, REGION, and AUTH_KEY with your CometChat App ID, Region, and in the below code.

:::

### Create `consts.js` file with ComeChat details in your **root** folder

```Javascript
module.exports = {
  APP_ID: "APP_ID",
  REGION: "REGION",
  AUTH_KEY: "AUTH_KEY"
}
```

### Create `CometChatNoSSR` component in your **root** folder

:::warning Note

Replace UID in the below code.

:::

<Tabs>
<TabItem value="js" label="React">

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
            return (<div>Loading...</div>);
        }
    }
}
```

</TabItem>
</Tabs>


### Import images in your Next.js project

<Tabs>
<TabItem value="js" label="next.config.js">

```next.config.js
module.exports = {
	images: {
    	disableStaticImages: true
  	},
	webpack: (config, options) => {
		const { isServer } = options;
		config.module.rules.push({
			test: /\.(wav|mp3|ogg|mpe?g|png|jpe?g|gif|svg)$/i,
			exclude: config.exclude,
			use: [
				{
					loader: require.resolve("file-loader"),
					options: {
						limit: 10000,
						fallback: require.resolve("url-loader"),
						publicPath: `_next/static/images/`,
						outputPath: `${isServer ? "../" : ""}static/images/`,
						name: "[name]-[hash].[ext]",
						esModule: config.esModule || false,
					},
				},
			],
		});
		return config;			
	},
};
```

</TabItem>
</Tabs>


## Disable strict mode

If you are using React v18, make sure to disable strict mode in the next config to circumvent the re-render issue. Read more about the re-render issue [here](https://github.com/vercel/next.js/issues/35822).

<Tabs>
<TabItem value="js" label="next.config.js">

```next.config.js
module.exports = {
  reactStrictMode: false
}
```

</TabItem>
</Tabs>

