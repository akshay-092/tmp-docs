---
sidebar_position: 1
title: Multi-Tab Chat UI Guide
slug: /multi-tab-chat-ui-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide will help you achieve a tabbed layout (aka Multi-Tab Chat UI) of the components available in CometChatUIKit for React-native.

We’ll use the [CometChatConversationsWithMessages](./conversations-with-messages), [CometChatUsersWithMessages](./users-with-messages), and [CometChatGroupsWithMessages](./groups-with-messages) components and launch them as individual tab items within the tabbed layout.

Step 1: Create a new component CometChatUI

<Tabs>
<TabItem value="js" label="CometChatUI.tsx">

```tsx
export function CometChatUI() {
  return <View></View>;
}
```

</TabItem>
</Tabs>

Step 2: Import the `CometChatTabs` component from the UI Kit.

<Tabs>
<TabItem value="js" label="CometChatUI.tsx">

```tsx
import { CometChatTabs } from "@cometchat/chat-uikit-react-native";

export function CometChatUI() {
  return (
    <View style={{ marginTop: 10, height: "100%", width: "100%" }}>
      <CometChatTabs />
    </View>
  );
}
```

</TabItem>
</Tabs>

Step 3: Pass [CometChatConversationsWithMessages](./conversations-with-messages), [CometChatUsersWithMessages](./users-with-messages), [CometChatGroupsWithMessages](./groups-with-messages) components to the Tabs components to launch them as individual tab item.
We will also make the `CometChatConversationsWithMessages` tab the active tab by default.

<Tabs>
<TabItem value="js" label="CometChatUI.tsx">

```tsx
import {
  CometChatUsersWithMessages,
  CometChatGroupsWithMessages,
  CometChatConversationsWithMessages,
  CometChatTabs,
} from "@cometchat/chat-uikit-react-native";

export function CometChatUI() {
  const tabItemStyle: TabItemStyleInterface = {
    activeBackgroundColor: "#6851D6",
  };

  const chatsTab: TabItem = {
    id: "chats",
    //iconURL: <custom icon>,
    title: "Chats",
    style: tabItemStyle,
    isActive: true,
    childView: () => <CometChatConversationsWithMessages />,
  };

  const usersTab: TabItem = {
    id: "users",
    //iconURL: <custom icon>,
    title: "Users",
    style: tabItemStyle,
    childView: () => <CometChatUsersWithMessages />,
  };

  const groupsTab: TabItem = {
    id: "groups",
    title: "Groups",
    //iconURL: <custom icon>,
    style: tabItemStyle,
    childView: () => <CometChatGroupsWithMessages />,
  };

  const tabs = [chatsTab, usersTab, groupsTab];

  const tabsStyle = {
    titleTextFont: theme.typography.heading,
    titleTextColor: theme.palette.getAccent(),
    tabHeight: 36,
    tabBorderRadius: 18,
    activeTabBackgroundColor: theme.palette.getPrimary(),
    activeTabTitleTextColor: theme.palette.getSecondary(),
    backgroundColor: theme.palette.getBackgroundColor(),
    borderRadius: 18,
    backIconTint: theme.palette.getPrimary(),
    selectionIconTint: theme.palette.getPrimary(),
    tabBackgroundColor: theme.palette.getAccent200(),
    tabTitleTextColor: theme.palette.getAccent(),
    tabTitleTextFont: theme.typography.text1,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CometChatContextProvider theme={theme}>
        <View style={{ marginTop: 10, height: "100%", width: "100%" }}>
          <CometChatTabs
            tabs={tabs}
            tabAlignment="top"
            keepAlive={true}
            style={tabsStyle}
          ></CometChatTabs>
        </View>
      </CometChatContextProvider>
    </SafeAreaView>
  );
}
```

</TabItem>
</Tabs>

Step 4: Import the CometChatUI component into your App component.

<Tabs>
<TabItem value="app" label="App.jsx">

```tsx
import { CometChatUI } from "./CometChatUI";

function App() {
  const theme = new CometChatTheme({});
  theme.palette.setPrimary({ light: "#6851D6", dark: "#6851D6" });
  const [currentTheme, setCurrentTheme] = useState(theme);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CometChatContextProvider theme={currentTheme}>
        <CometChatUI />
      </CometChatContextProvider>
    </SafeAreaView>
  );
}

export default App;
```

</TabItem>
</Tabs>

You can now see chats, users and group components each as tab items. This is how you can launch CometChat UIKit’s individual component in a tabbed layout. 🎉

<Tabs>

<TabItem value="iOS" label="iOS">

![](../assets/iOS/cometchat_ui_cometchat_screens.png)

</TabItem>

<TabItem value="android" label="Android">

![](../assets/android/cometchat_ui_cometchat_screens.png)

</TabItem>

</Tabs>
