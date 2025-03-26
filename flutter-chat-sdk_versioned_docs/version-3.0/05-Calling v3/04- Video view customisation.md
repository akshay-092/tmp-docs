---
sidebar_position: 4
title: Video view customisation
slug: /video-view-customisation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section will guide you to customise the main video container.

## Implementation

Once you have decided to implement [Default Calling](./default-calling) or [Direct Calling](./direct-calling) calling and followed the steps to implement them. Just few additional methods will help you quickly customize the main video container.

Please make sure your callSettings is configured accordingly for [Default Calling](./default-calling) or [Direct Calling](./direct-calling).

## Main Video Container Setting

The `MainVideoContainerSetting` Class is the required in case you want to customise the main video view. You need to pass the Object of the `MainVideoContainerSetting` Class in the `setMainVideoContainerSetting()` method of the `CallSettingsBuilder`.

| Setting | Description | 
| ---- | ---- | 
| `setMainVideoAspectRatio(String aspectRatio)` | This method is used to set the aspect ratio of main video.<br/>The default value is **contain.**<br/>Possible Values:<br/>**1. CallSettings. ASPECT_RATIO_CONTAIN**<br/>**2. CallSettings. ASPECT_RATIO_COVER** | 
| `setFullScreenButtonParams(String position, Boolean visibility)` | This method is used to set the position & visibility parameter of the full screen button.<br/>By default the full screen button is visible in the **bottom-right** position.<br/><br/>Possible Values for **POSITION:**<br/>1. **CallSettings. POSITION_TOP_LEFT**<br/>2. **CallSettings. POSITION_TOP_RIGHT**<br/>3. **CallSettings. POSITION_BOTTOM_LEFT**<br/>4. **CallSettings. POSITION_BOTTOM_RIGHT**<br/><br/>Possible Values for **VISIBILITY:**<br/>1. **true**<br/>2. **false** | 
| `setNameLabelParams(String position, Boolean visibility, String backgroundColor)` | This method is used to set the position, visibility & background color of the name label.<br/>By default the name label is visible in the **bottom-left** position with a background-color **#333333**<br/><br/>Possible Values for **POSITION:**<br/>1. **CallSettings. POSITION_TOP_LEFT**<br/>2. **CallSettings. POSITION_TOP_RIGHT**<br/>3. **CallSettings. POSITION_BOTTOM_LEFT**<br/>4. **CallSettings. POSITION_BOTTOM_RIGHT**<br/><br/>Possible Values for **VISIBILITY:**<br/>1. **true**<br/>2. **false** | 
| `setZoomButtonParams(String position, Boolean visibility)` | This method is used to set the position, visibility of the zoom button.<br/>By default the zoom button is visible in the **bottom-right** position.<br/><br/>Possible Values for **POSITION:**<br/>1. **CallSettings. POSITION_TOP_LEFT**<br/>2. **CallSettings. POSITION_TOP_RIGHT**<br/>3. **CallSettings. POSITION_BOTTOM_LEFT**<br/>4. **CallSettings. POSITION_BOTTOM_RIGHT**<br/><br/>Possible Values for **VISIBILITY:**<br/>1. **true**<br/>2. **false** | 
| `setUserListButtonParams(String position, Boolean visibility)` | This method is used to set the position, visibility of the user list button.<br/>By default the user list button is visible in the **bottom-right** position.<br/><br/>Possible Values for **POSITION:**<br/>1. **CallSettings. POSITION_TOP_LEFT**<br/>2. **CallSettings. POSITION_TOP_RIGHT**<br/>3. **CallSettings. POSITION_BOTTOM_LEFT**<br/>4. **CallSettings. POSITION_BOTTOM_RIGHT**<br/><br/>Possible Values for **VISIBILITY:**<br/>1. **true**<br/>2. **false** | 


Example:

<Tabs>
<TabItem value="1" label="Dart">

```Dart
MainVideoContainerSetting videoSettings = MainVideoContainerSetting();
videoSettings.setVideoStreamProp("contain");
videoSettings.setNameLabelProps("top-left", true, "#000");
videoSettings.setZoomButtonProps("top-right", true);
videoSettings.setUserListButtonProps("top-left", true);
videoSettings.setFullScreenButtonProps("top-right", true);
```

</TabItem>
</Tabs>

