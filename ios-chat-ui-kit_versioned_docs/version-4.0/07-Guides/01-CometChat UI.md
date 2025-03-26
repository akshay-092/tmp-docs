---
sidebar_position: 1
sidebar_label: Multi-Tab Chat UI Guide
title: Multi-Tab Chat UI Guide
slug: /multi-tab-chat-ui-guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How to add Tabbed layout for Chat,Users,Groups and Call modules?

This guide will help you understand the step-by-step process to add Tab layout for the modules in the user’s application.

CometChat UI Kit provides a modular approach to building real-time messaging applications, where each module, such as Chat, Users, Groups, Call, and Messages, can be used independently or collectively to create a tab bar interface.

To implement a tab bar interface you can use the various modules as separate tabs, with each tab representing a different module.

### Steps 1

First, create a new file with a subclass of UITabBarController called CometChatUI.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
public class CometChatUI: UITabBarController {
}
```

</TabItem>
</Tabs>

---

### Steps 2

In the `CometChatUI` class, add properties and method that will create and configure tabs for Chat, Users, Groups and Call modules

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
public enum TabItems: String {
    case chats
    case users
    case groups
    case call
}

public class CometChatUI: UITabBarController {
    private let conversations = UINavigationController()
    private let users = UINavigationController()
    private let groups = UINavigationController()
    private let calls = UINavigationController()
    private var conversationsWithMessage = CometChatConversationsWithMessages()
    private var usersWithMessages =  CometChatUsersWithMessages()
    private var groupsWithMessage = CometChatGroupsWithMessages()
    private var tabs: [TabItems] = [.chats, .users , .groups]

public override func viewWillAppear(_ animated: Bool) {
        setupTabBar()
}

private func setupTabBar() {
        var controllers = [UIViewController]()
        if self.controllers == nil {
            for tab in tabs {
                switch tab {

                case .chats:
                    conversations.tabBarItem.image = UIImage(systemName: "message")
                    conversations.tabBarItem.title = "Chats"
                    conversations.navigationItem.largeTitleDisplayMode = .automatic
                    conversations.navigationController?.navigationBar.prefersLargeTitles = true
                    conversations.viewControllers = [conversationsWithMessage]
                    controllers.append(self.conversations)

                case .users:
                    users.tabBarItem.image = UIImage(systemName: "person.2")
                    users.tabBarItem.title = "Users"
                    users.navigationItem.largeTitleDisplayMode = .automatic
                    users.navigationController?.navigationBar.prefersLargeTitles = true
                    users.viewControllers = [usersWithMessages]
                    controllers.append(self.users)

                case .groups:
                    groups.tabBarItem.image = UIImage(systemName: "person.3")
                    groups.tabBarItem.title = "Groups"
                    groups.navigationItem.largeTitleDisplayMode = .automatic
                    groups.navigationController?.navigationBar.prefersLargeTitles = true
                    groups.viewControllers = [groupsWithMessage]
                    controllers.append(self.groups)
                }
            }
        } else {
            controllers = self.controllers ?? []
        }
        self.tabBar.tintColor = CometChatTheme.palatte.primary
        self.tabBar.unselectedItemTintColor = CometChatTheme.palatte.accent600
        self.viewControllers = controllers
    }
}
```

</TabItem>
</Tabs>

---

### Steps 3

Now launch `CometChatUI` class

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let cometChatUI = CometChatUI()
 cometChatUI.modalPresentationStyle = modalPresentationStyle ?? .custom
 self.present(cometChatUI, animated: true)
```

</TabItem>
</Tabs>

#### Hurray 🎉! You’ve successfully added CometChatUI tabbed layout.
