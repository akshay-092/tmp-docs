---
sidebar_position: 7
title: Add Members To A Group
slug: /group-add-members
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can add members to the group using the `addMembersToGroup()` method. This method takes the below parameters:

1. GUID - GUID of the group the members are to be added to.
2. `Array<GroupMember>` members - This is a list of `GroupMember` objects. In order to add members, you need to create an object of the `GroupMember` class. The UID and the scope of the GroupMember are mandatory.
3. `Array<String>` bannedMembers - This is the list of UIDs that need to be banned from the Group. This can be set to `nil` if there are no members to be banned.
4. Callback.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let grpmem1 = GroupMember(UID: "member1", groupMemberScope: .participant)
let grpmem2 = GroupMember(UID: "member2", groupMemberScope: .participant)
let grpmem3 = GroupMember(UID: "member3", groupMemberScope: .admin)
let grpmem4 = GroupMember(UID: "member4", groupMemberScope: .admin)
let grpmem5 = GroupMember(UID: "member5", groupMemberScope: .moderator)

CometChat.addMembersToGroup(guid: "mygroup", groupMembers: [grpmem1, grpmem2, grpmem3, grpmem4, grpmem5], onSuccess: { (response) in

		print("Response from addMembersGroup: \\(response)")

}, onError : { (error) in

		print("Adding member in a group failed with error: \\(String(describing: error?.errorDescription))")

})
```

</TabItem>
<TabItem value="Objective C" label="Objective C">

```objectivec
GroupMember *grpmem1 = [GroupMember alloc] initWithUID: @"mem1" groupMemberScope: GroupMemberScopeTypeParticipant];
GroupMember *grpmem2 = [GroupMember alloc] initWithUID: @"mem2" groupMemberScope: GroupMemberScopeTypeParticipant];
GroupMember *grpmem3 = [GroupMember alloc] initWithUID: @"mem3" groupMemberScope: GroupMemberScopeTypeModerator];
GroupMember *grpmem4 = [GroupMember alloc] initWithUID: @"mem4" groupMemberScope: GroupMemberScopeTypeModerator];
GroupMember *grpmem5 = [GroupMember alloc] initWithUID: @"mem5" groupMemberScope: GroupMemberScopeTypeAdmin];

NSMutableArray<GroupMember *> members = [[NSMutableArray alloc]initWithObjects:mem1, mem2, mem3, mem4, mem5, nil];
    [CometChat addMembersToGroupWithGuid:@"mygroup" groupMembers:members bannedUIDs:nil onSuccess:^(NSDictionary<NSString *,id> * _Nonnull) {

        NSLog(@"AddMembersToGroup response is successfully.");

    } onError:^(CometChatException * _Nullable)error {

        NSLog(@"AddMembersToGroup is failed with an error %@", [error.errorDescription]);
    }]
```

</TabItem>
</Tabs>

In the `onSuccess()` callback, you will receive a dictionary which will contain the UID of the users and the value will either be `success` or an error message describing why the operation to add the user to the group or ban the user failed.

## Real-Time Group Member Added Events

To receive Real-Time Events for the same, you need to implement the `onMemberAddedToGroup()` method of the `GroupListener` class.

:::info
When a group member is added by another member, this event is triggered. When a user joins a group on their own, the joined event is triggered.
:::

- `onMemberAddedToGroup()` - This method is triggered when other users are added to the group so that the logged in user is informed of the other members added to the group or this method is triggered when the LoggedIn User is added to the Group.

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

## Member Added to Group event in Message History

_In other words, as a member of a group, how do I know when someone is added to the group when my app is not running?_

When you retrieve the list of previous messages if a member has been added to any group that the logged-in user is a member of, the list of messages will contain an `Action` message. An `Action` message is a sub-class of `BaseMessage` class.

For the group member added event, in the `Action` object received, the following fields can help you get the relevant information-

1. `action` - `added`
2. `actionOn` - User object containing the details of the user who was added to the group.
3. `actionBy` - User object containing the details of the user who added the member to the group.
4. `actionFor` - Group object containing the details of the group to which the member was added.
