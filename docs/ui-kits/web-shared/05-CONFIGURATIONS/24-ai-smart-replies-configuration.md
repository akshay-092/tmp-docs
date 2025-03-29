---
sidebar_position: 24
title: AISmartRepliesConfiguration
slug: /ai-smart-replies-configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This refers to the properties of the `AISmartReplies`  component that are available for customisation.

The `AISmartRepliesConfiguration`  has the below properties,

### Properties

| Property | Type | Description | 
| ---- | ---- | ---- | 
| smartRepliesStyle | [AISmartRepliesStyle](/web-shared/ai-smart-replies-style) | Used to provide custom styling to smart replies view. | 
| backIconUrl | string | Custom back button icon. | 
| loadingIconUrl | string | Custom loading icon url. | 
| loadingStateView | () =&gt; any | Custom loading state view for the component. | 
| emptyIconURL | string | Custom empty icon url. | 
| emptyStateView | () =&gt; any | Custom empty state view for the component. | 
| errorIconURL | string | Custom error icon url. | 
| errorStateView | () =&gt; any | Custom error state view for the component. | 
| apiConfiguration | (user?: CometChat.User, group?: CometChat.Group) =&gt; Promise&lt;Object&gt; | The `apiConfiguration` callback allows you to override the default logic of fetching smart replies. The `apiConfiguration` callback passes the user/group object of the conversation. You can use the [SDK Method](/ai/smart-replies) & pass additional configuration to customise the response. | 
| customView | (response: string[], closeCallBack?: () =&gt; void, backCallBack?: () =&gt; void) =&gt; Promise&lt;any&gt; | The `customView` callback allows you to display a custom UI for conversation starters. The `customView` callback passes the list of conversations starters & a close call back which you can call when you want to hide/close your UI. | 


### Usage

#### Custom icon URLs

<Tabs>
<TabItem value="react" label="React">

```react
import { AISmartRepliesConfiguration } from "@cometchat/chat-uikit-react";

const configuration = new AISmartRepliesConfiguration({
  backIconUrl: "URL",
  loadingIconURL: "URL",
  errorIconURL: "URL",
  emptyIconURL: "URL",
});
```

</TabItem>
<TabItem value="vue" label="Vue">

```vue
import { AISmartRepliesConfiguration } from "@cometchat/chat-uikit-vue";

const configuration = new AISmartRepliesConfiguration({
  backIconUrl: "URL",
  loadingIconURL: "URL",
  errorIconURL: "URL",
  emptyIconURL: "URL",
});
```

</TabItem>
</Tabs>

#### Custom state views

<Tabs>
<TabItem value="react" label="React">

```react
import { AISmartRepliesConfiguration } from "@cometchat/chat-uikit-react";

const configuration = new AISmartRepliesConfiguration({
  errorStateView: () => <CustomErrorStateView />,
  emptyStateView: () => <CustomEmptyStateView />,
  loadingStateView: () => <CustomLoadingStateView />,
});
```

</TabItem>
<TabItem value="vue" label="Vue">

```vue
import { AISmartRepliesConfiguration } from "@cometchat/chat-uikit-react";

const configuration = new AISmartRepliesConfiguration({
  errorStateView: () => ({
      componentName: "CustomErrorStateView";
    }),
  emptyStateView: () => ({
      componentName: "CustomEmptyStateView";
    }),
  loadingStateView: () => ({
      componentName: "CustomLoadingStateView";
    }),
});
```

</TabItem>
</Tabs>


#### Custom style

<Tabs>
<TabItem value="react" label="React">

```react
import { AISmartRepliesConfiguration, AISmartRepliesStyle} from "@cometchat/chat-uikit-react";

const customSmartRepliesStyle = new AISmartRepliesStyle({
  	textFont: "20px Arial, sans-serif"
})

configuration = new AISmartRepliesConfiguration({smartRepliesStyle: customSmartRepliesStyle});
```

</TabItem>
<TabItem value="vue" label="Vue">

```vue
import { AISmartRepliesConfiguration, AISmartRepliesStyle} from "@cometchat/chat-uikit-react";

const customSmartRepliesStyle = new AISmartRepliesStyle({
  	textFont: "20px Arial, sans-serif"
})

configuration = new AISmartRepliesConfiguration({smartRepliesStyle: customSmartRepliesStyle});
```

</TabItem>
</Tabs>

#### API Configuration Callback

<Tabs>
<TabItem value="react" label="React">

```react
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { AISmartRepliesConfiguration } from "@cometchat/chat-uikit-react";

const apiConfiguration = (user?:CometChat.User, group?:CometChat.Group)=> {
  return new Promise((resolve, reject) => {
    const receiverId = user ? user.getUid() : group.getGuid();
    const receiverType = user ? 'user' : 'group';
    CometChat.getSmartReplies(receiverId, receiverType).then(
      (response: any)=>{
        return resolve(response)
    })
    .catch((err:CometChat.CometChatException)=>{
      return  reject(err)
    })
  })
}

const configuration = new AISmartRepliesConfiguration({apiConfiguration: apiConfiguration});
```

</TabItem>
<TabItem value="vue" label="Vue">

```vue
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { AISmartRepliesConfiguration } from "@cometchat/chat-uikit-react";

const apiConfiguration = (user?:CometChat.User, group?:CometChat.Group)=> {
  return new Promise((resolve, reject) => {
    const receiverId = user ? user.getUid() : group.getGuid();
    const receiverType = user ? 'user' : 'group';
    CometChat.getSmartReplies(receiverId, receiverType).then(
      (response: any)=>{
        return resolve(response)
    })
    .catch((err:CometChat.CometChatException)=>{
      return  reject(err)
    })
  })
}

const configuration = new AISmartRepliesConfiguration({apiConfiguration: apiConfiguration});
```

</TabItem>
</Tabs>


#### Custom View Callback

<Tabs>
<TabItem value="javascript" label="Javascript">

```javascript
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { AISmartRepliesConfiguration } from "@cometchat/chat-uikit-react";

const customView = (response, closeCallBack, backCallBack) => {
	return new Promise((resolve, reject) => {
    /** 
    * Use the response & genrate a custom view for displaying the conversation starter.
    */
  	return resolve(<CustomSmartRepliesView />);
	})
}

configuration = new AISmartRepliesConfiguration({customView: customView});
```

</TabItem>
<TabItem value="vue" label="Vue">

```vue
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { AISmartRepliesConfiguration } from "@cometchat/chat-uikit-react";

const customView = (response, closeCallBack, backCallBack) => {
	return new Promise((resolve, reject) => {
    /** 
    * Use the response & genrate a custom view for displaying the conversation starter.
    */
  	return resolve({
    componentName: "CustomSmartRepliesView"
    });
	})
}

configuration = new AISmartRepliesConfiguration({customView: customView});
```

</TabItem>
</Tabs>