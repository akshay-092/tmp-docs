---
sidebar_position: 4
title: Join a Group
slug: /join-group
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Join a Group

In order to start participating in group conversations, you will have to join a group. You can do so using the `joinGroup()` method.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let guid = "cometchat-guid-11";
let password = nil; // mandatory in case of password protected group type

CometChat.joinGroup(GUID: guid, groupType: .public, password: nil, onSuccess: { (group) in

  print("Group joined successfully. " + group.stringValue())

}) { (error) in

  print("Group joining failed with error:" + error!.errorDescription);
}
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
NSString *guid = @"cometchat-guid-101";
NSString *password = nil ; // mandatory in case of password protected group type

[CometChat joinGroupWithGUID:guid groupType:groupTypePublic password:password onSuccess:^(Group * group) {

    // Success
    NSLog(@"Group joined successfully: %@",[group stringValue]);

} onError:^(CometChatException * error) {

    // Error
    NSLog(@"Group joining failed with exception: %@",[error errorDescription])
}];
```

</TabItem>
</Tabs>

The `joinGroup()` method takes four parameters

| Parameter | Description                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| GUID      | The `GUID` of the group you would like to join                                                                               |
| groupType | Type of the group. CometChat provides 3 types of groups viz. <br /><br /> .public<br /><br /> .private<br /><br /> .password |
| password  | The password is mandatory in case of a `.password` protected the group.                                                      |

Once you have joined a group successfully, you can send and receive messages in that group.

CometChat keeps a track of the groups joined and you do not need to join the group every time you want to communicate in the group.

You can identify if a group is joined using the `hasJoined` parameter in the `Group` object.

## Real-time Group Member Joined Events

_In other words, as a recipient, how do I know when someone joins a group?_

To receive Real-Time Events for the same, you need to implement the `onMemberAddedToGroup()` method of the `GroupListener` class.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
extension AppDelegate: CometChatGroupDelegate {

  func onMemberAddedToGroup(action: ActionMessage, addedBy: User, addedUser: User, addedTo: Group) {
      //When any member is added in the group this function will be called
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

- (void)onMemberAddedToGroup:(Action *)action addedBy:(User * _Nonnull)addedBy addedUser:(User * _Nonnull)addedUser addedTo:(Group * _Nonnull)addedTo {
    //When any member is added in the group this function will be called
}

@end
```

</TabItem>
</Tabs>

## Missed Group Member Joined Events

_In other words, as a member of a group, how do I know if someone joins the group when my app is not running?_

When you retrieve the list of previous messages if a member has joined any group that the logged-in user is a member of, the list of messages will contain an `Action` message. An `Action` message is a sub-class of `BaseMessage` class.

For the group member joined the event, in the `Action` object received, the following fields can help you get the relevant information-

1. `action` - `joined`
2. `actionBy` - User object containing the details of the user who joined the group
3. `actionFor `- Group object containing the details of the group the user has joined
