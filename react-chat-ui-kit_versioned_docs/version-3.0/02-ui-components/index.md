---
sidebar_position: 2
title: UI Components
slug: /ui-components
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**UI Components** are building blocks of the UI Kit. **UI Components** are a set of custom classes specially designed to build a rich chat app. There are different UI Components available in the
UI Kit Library.

### CometChatUI

**CometChatUI** is an option to launch a fully functional chat application using the UI Kit. In **CometChatUI**  all the **UI Components** are interlinked and work together to launch a fully functional chat on your website/application.

![](./assets/1623200308.png)

<Tabs>
<TabItem value="js" label="React">

```React
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

class App extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '800px', height:'800px' }}>
        <CometChatUI chatWithGroup="cometchat-guid-1" />
       </div>
    );
  }
  
}
```

</TabItem>
</Tabs>


It takes the following properties:

| Parameter | Description | Type | 
| ---- | ---- | ---- | 
| chatWithUser | The ID of the user you want to chat with | Optional | 
| chatWithGroup | The ID of the group you want to chat with | Optional | 
| friendsOnly | Value could be _true_ or _false_<br />This property when set to true will return only the friends of the logged-in user in the users tab. | Optional | 

:::danger Note

_friendsOnly_ prop is deprecated from version **v3.0.0-beta5-1**. Please use **userListMode** variable <br/> [Customize UI Kit](/ui-kit/react/v3/customize)

:::

### CometChatUserListWithMessages

The `CometChatUserListWithMessages` is a component with a list of users. The component has all the necessary listeners and methods required to display the user's list and shows the set of the messages/chats of the selected user.

![](./assets/1623200314.png)

<Tabs>
<TabItem value="js" label="React">

```React
import { CometChatUserListWithMessages } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

class App extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '800px', height:'800px' }}>
        <CometChatUserListWithMessages chatWithUser="cometchat-uid-5" />
       </div>
    );
  }
  
}
```

</TabItem>
</Tabs>

It takes the following properties:

| Parameter | Description | Type | 
| ---- | ---- | ---- | 
| chatWithUser | The ID of the user you want to chat with | Optional | 
| friendsOnly | Value could be _true_ or _false_<br /><br />This property when set to true will return only the friends of the logged-in user. | Optional | 


:::danger Note

_friendsOnly_ prop is deprecated from version **v3.0.0-beta5-1**. Please use **userListMode** variable of UIKitSettings class for displaying only friends in the user list. <br/> Please refer to this link for documentation: [Customize UI Kit](/ui-kit/react/v3/customize)

:::

### CometChatGroupListWithMessages

The `CometChatGroupListWithMessages` is a component with a list of groups. The component has all the necessary listeners and methods required to display the group's list and shows the set of the messages/chats of the selected group.

![](./assets/1623200318.png)

<Tabs>
<TabItem value="js" label="React">

```React
import { CometChatGroupListWithMessages } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

class App extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '800px', height:'800px' }}>
        <CometChatGroupListWithMessages chatWithGroup="cometchat-guid-1" />
       </div>
    );
  }
  
}
```

</TabItem>
</Tabs>

It takes the following properties:

| Parameter | Description | Type | 
| ---- | ---- | ---- | 
| chatWithGroup | The ID of the group you want to chat with | Optional | 


### CometChatConversationListWithMessages

The `CometChatConversationListWithMessages` is a component with a list of recent conversations. The component has all the necessary listeners and methods required to display the recent conversation list and shows the set of the messages/chats of the selected recent conversation

![](./assets/1623200326.png)

<Tabs>
<TabItem value="js" label="React">

```React
import { CometChatConversationListWithMessages } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

class App extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '800px', height:'800px' }}>
        <CometChatConversationListWithMessages  />
       </div>
    );
  }
  
}
```

</TabItem>
</Tabs>

It takes the following properties:

| Parameter | Description | Type | 
| ---- | ---- | ---- | 
| chatWithUser | The ID of the user you want to chat with | Optional | 
| chatWithGroup | The ID of the group you want to chat with | Optional | 


### CometChatMessages

The `CometChatMessages` is a component that displays the list of messages for a particular user or group.

<Tabs>
<TabItem value="js" label="React">

```React
import { CometChatMessages } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

class App extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '800px', height:'800px' }}>
        <CometChatMessages chatWithGroup="cometchat-guid-1" />
       </div>
    );
  }
  
}
```

</TabItem>
</Tabs>

It takes the following properties:

| Parameter | Description | Type | 
| ---- | ---- | ---- | 
| chatWithUser | The ID of the user you want to chat with | Required | 
| chatWithGroup | The ID of the group you want to chat with | Optional | 


### CometChatUserList

The `CometChatUserList` is a component that displays the list of users available to chat. You can use this component within your app if you wish to display the list of users.

![](./assets/1623200332.png)

<Tabs>
<TabItem value="js" label="React">

```React
import { CometChatUserList } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

class App extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '800px', height:'800px' }}>
        <CometChatUserList friendsOnly={true} />
       </div>
    );
  }
  
}
```

</TabItem>
</Tabs>

It takes the following props:

| Parameter | Description | Type | 
| ---- | ---- | ---- | 
| friendsOnly | Value could be _true_ or _false._<br />This property when set to true will return only the friends of the logged-in user. | Optional | 


:::danger Note

_friendsOnly_ prop is deprecated from version **v3.0.0-beta5-1**. Please use **userListMode** variable of UIKitSettings class for displaying only friends in the user list. Please refer to this link for documentation: [Customize UI Kit](/ui-kit/react/v3/customize)

:::

### CometChatGroupList

The `CometChatGroupList` is a component that displays the list of groups available. You can use this component within your app if you wish to display the list of groups.

![](./assets/1623200335.png)

<Tabs>
<TabItem value="js" label="React">

```React
import { CometChatGroupList } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

class App extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '800px', height:'800px' }}>
        <CometChatGroupList />
       </div>
    );
  }
  
}
```

</TabItem>
</Tabs>

### CometChatConversationList

You can use the `CometChatConversationList` component to display the list of recent conversations that the logged-in user was a part of.

![](./assets/1623200339.png)

<Tabs>
<TabItem value="js" label="React">

```React
import { CometChatConversationList } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

class App extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '800px', height:'800px' }}>
        <CometChatConversationList />
       </div>
    );
  }
  
}
```

</TabItem>
</Tabs>


