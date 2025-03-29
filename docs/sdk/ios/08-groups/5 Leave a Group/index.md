---
sidebar_position: 5
title: Leave a Group
slug: /leave-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Leave a Group

In order to stop receiving updates and messages for any particular joined group, you will have to leave the group using the `leaveGroup()` method.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let guid = "cometchat-guid-11";

CometChat.leaveGroup(GUID: guid, onSuccess: { (response) in

	print("Left group successfully.")

}) { (error) in

  print("Group leaving failed with error:" + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSString *guid = @"cometchat-guid-101";

[CometChat leaveGroupWithGUID:guid onSuccess:^(NSString * response) {

    NSLog(@"Left group successfully. %@",response);

} onError:^(CometChatException * error) {

    NSLog(@"Group leaving failed with error: %@",[error errorDescription]);
}];
```

</TabItem>
</Tabs>
<br/>

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| GUID      | The UID of the group you would like to leave |

Once a group is left, the user will not receive any updates or messages pertaining to the group.

## Real-time Leave Group Event

_In other words, as a member of a group, how do I know if someone has left it?_

If a user leaves any group, the members of the group receive a real-time event in the `onGroupMemberLeft()` method of the `CometChatGroupDelegate`. In order to receive user Events, you must add protocol conformance `CometChatGroupDelegate` as shown below :

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
extension AppDelegate: CometChatGroupDelegate {

  func onGroupMemberLeft(action: ActionMessage, leftUser: User, leftGroup: Group) {

    print("\(leftUser.name) left the group \(leftGroup.name).")
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

- (void)onGroupMemberLeftWithAction:(ActionMessage *)action leftUser:(User *)leftUser leftGroup:(Group *)leftGroup {
    //user was left
}
```

</TabItem>
</Tabs>

Do not forget to set your view controller as a CometChat delegate probably in `viewDidLoad()` as `CometChat.groupdelegate = self`

## Missed Group Member Left Events

_In other words, as a member of a group, how do I know if someone has left it when my app is not running?_

When you retrieve the list of previous messages if a member has left any group that the logged-in user is a member of, the list of messages will contain an `Action` message. An `Action` message is a sub-class of `BaseMessage` class.

For the group member left event, in the `Action` object received, the following fields can help you get the relevant information-

1. `action` - `left`
2. `actionBy` - User object containing the details of the user who left the group
3. `actionFor` - Group object containing the details of the group the user has left
