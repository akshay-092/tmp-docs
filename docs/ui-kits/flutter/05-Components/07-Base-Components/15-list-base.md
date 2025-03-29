---
sidebar_position: 15
title: List Base
slug: /list-base
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatListBase` is a scaffolding widget which displays contents passed as child used across `CometChatConversations`, `CometChatGroups` & `CometChatUsers`.

![](assets/1645037818.png)

---

### Usage

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatListBase(
  title: "Title",
  container: <childWidget>,
);
```

</TabItem>

</Tabs>

---

### Parameters

| Parameter | Type | Description | 
| ---- | ---- | ---- | 
| **title** | String | Used to set title in the app bar | 
| **style** | ListBaseStyle | Used to set style for the component | 
| **showBackButton** | bool | Used to toggle visibility of backButton | 
| **placeholder** | String | placeholder for search text field | 
| **backIcon** | Widget | Used to update back button | 
| **hideSearch** | bool | Used to toggle search bar visibility | 
| **searchBoxIcon** | Widget | Used to alter searchBox | 
| **container** | Widget | Used to Give. child widget to list base | 
| **menuOptions** | List&lt;Widget&gt; | used to give menu options visible at top right corner | 
| **onSearch** | Function(String val) | Function which will be triggered when click on search icon | 
| **searchText** | String | if passed this text will be preloaded | 
| **onBack** | VoidCallback | used to set a call back triggered on tapping the back button in the app bar | 


##### Example

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
CometChatListBase(
  title: <title>,
  hideSearch: <hideSearch>,
  backIcon: <backIcon>,
  placeholder: <placeholder>,
  showBackButton: <showBackButton>,
  searchBoxIcon: <searchBoxIcon>,
  onSearch: (String search){
    // Will evaluate when click on search icon
  },
  searchText: <searchText>,
  theme: <theme>,
  style: <style>,
  container: <childWidget> // Replace with your child widget
  menuOptions: [
    // List of menuOptions
  ],
);
```

</TabItem>

</Tabs>

---

## Style

style is an instance of ListBaseStyle and responsible for styling of CometChatListBase 

| Properties | Type | Description | 
| ---- | ---- | ---- | 
| **background** | Color | used to set background color | 
| **border** | BoxBorder | used to set border | 
| **borderRadius** | double | used to modify the border radius | 
| **titleStyle** | TextStyle | used to set title style | 
| **searchBoxRadius** | double | used to set the search box radius | 
| **searchTextStyle** | TextStyle | used to set search field text style | 
| **searchPlaceholderStyle** | TextStyle | used to set text style of hint text in the search field | 
| **searchBorderWidth** | double | used to set search text field border width | 
| **searchBorderColor** | Color | used to set the search text field border color | 
| **searchBoxBackground** | Color | used to set the search text field background color | 
| **searchIconTint** | Color | used to set the search text field border color | 
| **backIconTint** | Color | used to set the color of back icon | 
| **gradient** | Gradient | used to set gradient background | 
| **height** | double | used to set height | 
| **width** | double | used to set width | 

<Tabs>

<TabItem value="Dart" label="Dart">

```dart
ListBaseStyle _style  = ListBaseStyle(
  background: <backgroundColor>,
  titleStyle: <titleStyle>,
  searchBorderColor: <SearchBorderColor>,
  searchBorderWidth: <searchBorderWidth>,
  searchBoxBackground: <SearchBoxBackgroundColor>,
  searchBoxRadius: <SearchboxCornerRadius>,
  searchTextStyle: <SearchTextStyle>,
);
```

</TabItem>

</Tabs>



