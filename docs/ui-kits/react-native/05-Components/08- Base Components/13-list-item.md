---
sidebar_position: 13
title: List Item
slug: /list-item
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatListItem` contains one to three lines of text optionally flanked by icons or other widgets, such as `CometChatAvatar`, `CometChatDate` or `Text`. `CometChatAvatar` will always be shown in the leading view therefore either one among the `avatarURL` or  `avatarName` must be provided. The first line of text is optional and is specified with `title`. 

## How to integrate CometChatListItem ?

<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
let listItemStyle: ListItemStyleInterface = {
    backgroundColor: "rgba(150,150,150,0.7)",
    height: 85,
    width: "100%",
    titleColor: "blue",
    titleFont: {fontSize: 22}
  }
let statusIndicatorStyle: StatusIndicatorStyleInterface = {
    height: 40,
    width: 40
  }

  let avatarStyle: AvatarStyleInterface = {
    border: {borderWidth: 1},
    height: 65,
    width: 65,
    borderRadius: 20,
  }
 let name = "Andrew Joseph";
let avatar = require('./images/cometchat-uid-1.webp");

<CometChatListItem
        key={id}
        avatarName={name}
        title={name}
        listItemStyle={listItemStyle}
        avatarURL={avatar}
        statusIndicatorColor={'grey'}
        SubtitleView={() => <View>{/* your view*/}</View>}
        TailView={() => <View>{/* your view*/}</View>}
        statusIndicatorStyle={statusIndicatorStyle}
        avatarStyle={avatarStyle}
        onPress={() => {
          console.log("Item pressed");
        }}
        onLongPress={() => {
					console.log("Item long pressed");
        }}
      />
```


</TabItem>
</Tabs>


## Properties

| Properties | Type | Description | 
| ---- | ---- | ---- | 
| avatarURL | ImageType | sets image to be shown in avatar in the leading view | 
| avatarName | string | sets name  to be shown in avatar in the leading view if avatarURL is not available | 
| id | string &#124; number | unique id for the widget | 
| statusIndicatorColor | string | sets colour of the status indicator | 
| statusIndicatorIcon | ImageType | sets icon of the status indicator | 
| title | string | sets the title to display | 
| SubtitleView | React.FC | sets custom subtitle below the title | 
| TailView | React.FC | sets the custom tail view | 
| options | () =&gt; CometChatOptions[] | list of option available for the list item | 
| hideSeparator | boolean | used to hide the divider separating the list items | 
| listItemStyle | ListItemStyle | used to customise the appearance of this widget | 
| avatarStyle | AvatarStyle | used to customise the Avatar shown in the leading view | 
| statusIndicatorStyle | StyleProp&lt;ViewStyle&gt; | used to customise the status indicator | 
| onPress | Function | callback when user press on list item | 
| onLongPress | Function | callback when user long press on list item | 
| headViewContainerStyle | StyleProp&lt;ViewStyle&gt; | Head view contains the Avatar of list item & styles can be customise by this | 
| tailViewContainerStyle | StyleProp&lt;ViewStyle&gt; | Tail view contains the tail section of list item & styles can be customise by this | 
| bodyViewContainerStyle | StyleProp&lt;ViewStyle&gt; | Body view contains the tile & subtitle view of list item & styles can be customise by this | 


## ListItemStyle

ListItemStyle is the class containing attributes to customise appearance of this widget.

| Properties | Type | 
| ---- | ---- | 
| titleFont | FontStyleInterface | 
| titleColor | string | 
| height | number &#124; string | 
| width | number &#124; string | 
| backgroundColor | string | 
| border | BorderStyleInterface | 
| borderRadius | number | 


<Tabs>
<TabItem value="ts2" label="Typescript">

```typescript
<CometChatListItem
  SubtitleView={() => <Text>{"online"}</Text>}
  hideSeparator={false}
  title={"Andrew Joseph"}
  avatarName={"Andrew Joseph"}
  avatarURL={{ uri: "https://data-us.cometchat.io/assets/images/avatars/cometchat-uid-3.webp" }}
  statusIndicatorColor={"rgb(0,255,0)"}
  listItemStyle={{ backgroundColor: "rgb(0,0,0)", titleColor:'rgb(20,20,20)',height: 60}}
 />
```


</TabItem>
</Tabs>