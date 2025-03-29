---
sidebar_position: 10
title: Change Member Scope
slug: /group-change-member-scope
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Change Scope of a Group Member

In order to change the scope of a group member, you can use the `changeGroupMemberScope()`.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let guid = "GUID"
let uid = "UID";
let scope:CometChat.MemberScope = .admin

CometChat.updateGroupMemberScope(UID: uid, GUID: guid, scope: scope, onSuccess: { (response) in

 	print("Update group member scope changed successfully.")

}) { (error) in

  print("Update group member scope failed with error: " + error!.errorDescription);
}
```

</TabItem>
</Tabs>

This method takes the below parameters:

| Paramter | Description                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------- |
| UID      | The uid of the member                                                                                                  |
| GUID     | The guid of the group for which the member's scope needs to be changed                                                 |
| scope    | The updated scope of the member. This can be either of the 3 values:<br/> 1. admin<br/>2. moderator<br/>3. participant |

The default scope of any member is `participant`. Only the `admin` of the group can change the scope of any participant in the group

## Receive Real-Time Events

_In other words, as a member of a group, how do I know when someone's scope is changed when my app is running?_

In order to receive real-time events whenever a group member's scope changes, you will need to override the `onGroupMemberScopeChanged()` method of the `GroupListener` class.

You can receive live events related to ChangeMemberScope, In order to receive the Event, you must add protocol conformance `CometChatGroupDelegate` as shown below:

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
extension AppDelegate: CometChatGroupDelegate {

  func onGroupMemberScopeChanged(action: ActionMessage, scopeChangeduser: User, scopeChangedBy: User, scopeChangedTo: String, scopeChangedFrom: String, group: Group) {

    print("\(scopeChangedUser.name) scope changed from \(scopeChangedFrom) to \(scopeChangedTo) by \(scopeChangedBy.name) in the group \(group.name).")
  }
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
@interface ViewController ()<CometChatGroupDelegate>

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    [CometChat setGroupdelegate:self];

}

- (void)onGroupMemberScopeChangedWithAction:(Action *)action user:(User * _Nonnull)user scopeChangedTo:(NSString * _Nonnull)scopeChangedTo scopeChangedFrom:(NSString * _Nonnull)scopeChangedFrom group:(Group * _Nonnull)group {
    // user scope changed
}

@end
```

</TabItem>
</Tabs>

## Missed Group Member Scope Changed Events

_In other words, as a member of a group, how do I know when someone's scope is changed when my app is not running?_

When you retrieve the list of previous messages if a member's scope has been changed for any group that the logged-in user is a member of, the list of messages will contain an `Action` message. An `Action` message is a sub-class of `BaseMessage` class.

For the group member scope changed event, in the `Action` object received, the following fields can help you get the relevant information-

1. `action` - `scopeChanged`
2. `actionOn` - User object containing the details of the user whos scope has been changed
3. `actionBy` - User object containing the details of the user who changed the scope of the member
4. `actionFor` - Group object containing the details of the group in which the member scope was changed
5. `oldScope` - The original scope of the member
6. `newScope` - The updated scope of the member
