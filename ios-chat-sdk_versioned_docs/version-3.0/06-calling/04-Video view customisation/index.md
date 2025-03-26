---
sidebar_position: 4
title: Video View Customisation
slug: /video-view-customisation1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section will guide you to customise the main video container.

## Implementation

Once you have decided to implement [Default Calling](./default-calling) or [Direct Calling](./direct-calling) calling and followed the steps to implement them. Just few additional methods will help you quickly customize the main video container.

Please make sure your callSettings is configured accordingly for [Default Calling](./default-calling) or [Direct Calling](./direct-calling).

## Main Video Container Setting

The `MainVideoContainerSetting` Class is the required in case you want to customise the main video view. You need to pass the Object of the `MainVideoContainerSetting` Class in the `setMainVideoContainerSetting()` method of the `CallSettingsBuilder`.

|  |  | 
| ---- | ---- | 
| `setMainVideoAspectRatio(_ aspectRatio: CallSettings.AspectRatio)` | This method is used to set the aspect ratio of main video.<br />The default value is **contain.**<br />Possible Values:<br />**1. CallSettings.** **AspectRatio.CONTAIN**<br />**2. CallSettings.** **AspectRatio.COVER** | 
| `setFullScreenButtonParams(_`visibility: Bool, _`position: CallSettings.Position?)` | This method is used to set the position & visibility parameter of the full screen button.<br />By default the full screen button is visible in the **. BOTTOM_RIGHT** position.<br />Possible Values for **POSITION:**<br />1. **CallSettings. Position.TOP_LEFT**<br />2. **CallSettings.** **Position. TOP_RIGHT**<br />3. **CallSettings.** **Position. BOTTOM_LEFT**<br />4. **CallSettings.** **Position. BOTTOM_RIGHT**<br />Possible Values for **VISIBILITY:**<br />1. **true**<br />2. **false** | 
| `setNameLabelParams(_ visibility: Bool,`_ `position: CallSettings.Position?, _ backGroundColor:String?)` | This method is used to set the position, visibility & background color of the name label.<br />By default the name label is visible in the **.BOTTOM_LEFT** position with a background-color **#333333**<br />Possible Values for **POSITION:**<br />1. **CallSettings.** **Position.TOP_LEFT**<br />2. **CallSettings.** **Position. TOP_RIGHT**<br />3. **CallSettings.** **Position. BOTTOM_LEFT**<br />4. **CallSettings.** **Position. BOTTOM_RIGHT**<br />Possible Values for **VISIBILITY:**<br />1. **true**<br />2. **false** | 
| `setZoomButtonParams(_ visibility: Bool,`_`position: CallSettings.Position?)` | This method is used to set the position, visibility of the zoom button.<br />By default the zoom button is visible in the **. BOTTOM_RIGHT** position.<br />Possible Values for **POSITION:**<br />1. **CallSettings.** **Position.TOP_LEFT**<br />2. **CallSettings. Position. TOP_RIGHT**<br />3. **CallSettings.** **Position. BOTTOM_LEFT**<br />4. **CallSettings.** **Position. BOTTOM_RIGHT**<br />Possible Values for **VISIBILITY:**<br />1. **true**<br />2. **false** | 
| `setUserListButtonParams(_ visibility: Bool,_ position:CallSettings.Position?)` | This method is used to set the position, visibility of the user list button.<br />By default the user list button is visible in the **bottom-right** position.<br />Possible Values for **POSITION:**<br />1. **CallSettings.** **Position.TOP_LEFT**<br />2. **CallSettings. Position. TOP_RIGHT**<br />3. **CallSettings.** **Position. BOTTOM_LEFT**<br />4. **CallSettings.** **Position. BOTTOM_RIGHT**<br />Possible Values for **VISIBILITY:**<br />1. **true**<br />2. **false** | 


Example

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
let videoSettings = MainVideoContainerSetting()
videoSettings.setVideoStreamParams(.DEFAULT)
videoSettings.setNameLabelParams(true, .BOTTOM_LEFT, "#333333")
videoSettings.setZoomButtonParams(true,.BOTTOM_RIGHT)
videoSettings.setFullScreenButtonParams(true,.BOTTOM_RIGHT)     
videoSettings.setUserListButtonParams(true,.BOTTOM_RIGHT)
```
</TabItem>
</Tabs>

