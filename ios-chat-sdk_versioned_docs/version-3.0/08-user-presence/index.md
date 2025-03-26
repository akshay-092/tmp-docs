---
sidebar_position: 8
title: User Presence
slug: /user-presence
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

User Presence helps us understand if a user is available to chat or not.

## Real-time Presence

_In other words, as a logged-in user, how do I know if a user is online or offline?_

Based on the settings provided in the AppSettings class while initializing the SDK using the init() method, the logged-in user will receive the presence for the other users in the app.
In the AppSettings class, you can set the type of Presence you wish to receive for that particular session of the app.

For presence subscription, the AppSettingsBuilder provides 3 methods :

- subscribePresenceForAllUsers() - this will inform the logged-in user when any user in the app comes online or goes offline
- subscribePresenceForRoles(roles : [String]) - This will inform the logged-in user, only when the users with the specified roles come online or go offline.
- subscribePresenceForFriends() - This will inform the logged-in user, only when either of his friends come online or go offline.
If none of the above methods are used, no presence will be sent to the logged-in user.

To get the real-time updates of users  you must add protocol conformance `CometChatUserDelegate` as Shown Below :

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
extension ViewController : CometChatUserDelegate {
    
  func onUserOnline(user: User) {
        
    print(user.stringValue() + " status becomes online.")
  }
    
  func onUserOffline(user: User) {
        
    print(user.stringValue() + " status becomes offline.")
  }
}
```
</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
@interface ViewController ()<CometChatUserDelegate>

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    [CometChat setUserdelegate:self];
}

- (void)onUserOfflineWithUser:(User * _Nonnull)user {
    
    NSLog(@"%@ status becomes offline.",[user stringValue]);
}

- (void)onUserOnlineWithUser:(User * _Nonnull)user {
    
    NSLog(@"%@ status becomes online.",[user stringValue]);
}
```
</TabItem>
</Tabs>



Do not forget to set your view controller as a CometChat delegate probably in `viewDidLoad()` as `CometChat.userdelegate = self`

## User List Presence

_In other words, as a logged-in user, when I retrieve the user list, how do I know if a user is online/offline?_

When you [fetch the list of users](./retrieve-users#retrieve-list-of-users), in the `User` object, you will receive 2 fields


1. status - This will hold either of the two values :

- online - This indicates that the user is currently online and available to chat.
- offline - This indicates that the user is currently offline and is not available to chat.

2. lastActiveAt - in case the user is offline, this field holds the timestamp of the time when the user was last online. This can be used to display the Last seen of the user if need be.