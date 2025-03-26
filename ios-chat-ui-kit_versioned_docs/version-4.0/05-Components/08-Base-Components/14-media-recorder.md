---
sidebar_position: 13
title: Media Recorder
slug: /media-recorder
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`CometChatMediaRecorder` is a class that allows users to record and send audio messages. It has a start button to start recording, a stop button to stop recording, a play button to play the recorded message, a pause button to pause the recorded message, a submit button to submit the recorded message and a close button to close the media recorder.

## Usage

CometChatMediaRecorder can be used as a child view inside another view or be launched with a bottom sheet.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
if let cometChatMediaRecorder = UIStoryboard(name: "CometChatMediaRecorder", bundle: CometChatUIKit.bundle).instantiateViewController(identifier: "CometChatMediaRecorder") as? CometChatMediaRecorder {
  self.present(cometChatMediaRecorder, animated: true)
}
```

</TabItem>
</Tabs>

## Properties

| Property               | Type                                                      | Description                                                                   |
| ---------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **mediaRecorderStyle** | [MediaRecorderStyle](./media-recorder#mediarecorderstyle) | used to customize the appearance of CometChatMediaRecorder                    |
| **startIcon**          | UIImage                                                   | used to set the start icon                                                    |
| **playIcon**           | UIImage                                                   | used to set the play icon                                                     |
| **pauseIcon**          | UIImage                                                   | used to set the pause icon                                                    |
| **closeIcon**          | UIImage                                                   | used to set the close icon                                                    |
| **stopIcon**           | UIImage                                                   | used to set the stop icon                                                     |
| **submitIcon**         | UIImage                                                   | used to set the submit icon                                                   |
| **pauseIconTint**      | UIColor                                                   | used to set the color of pause icon                                           |
| **playIconTint**       | UIColor                                                   | used to set the color of play icon                                            |
| **deleteIconTint**     | UIColor                                                   | used to set the color of delete icon                                          |
| **submitIconTint**     | UIColor                                                   | used to set the color of submit icon                                          |
| **startIconTint**      | UIColor                                                   | used to set the color of start icon                                           |
| **stopIconTint**       | UIColor                                                   | used to set the color of stop icon                                            |
| **timerTextFont**      | UIFont                                                    | used to set the font of timer text                                            |
| **timerTextColor**     | UIColor                                                   | used to set the color of timer text                                           |
| **onSubmit**           | (String) -&gt; Void                                       | onSubmit is used to set the action to be performed when submit icon is tapped |
| **onClose**            | () -&gt; ()                                               | onClose is used to set the action to be performed when close icon is tapped   |

### mediaRecorderStyle

A MediaRecorderStyle object is used to customize the appearance of CometChatMediaRecorder.

<Tabs>
<TabItem value="Swift" label="Swift">

```swift
if let cometChatMediaRecorder = UIStoryboard(name: "CometChatMediaRecorder", bundle: CometChatUIKit.bundle).instantiateViewController(identifier: "CometChatMediaRecorder") as? CometChatMediaRecorder {
  let mediaRecorderStyle = MediaRecorderStyle()
	mediaRecorderStyle.set(pauseIconTint: CometChatTheme.palatte.primary)
	mediaRecorderStyle.set(playIconTint: CometChatTheme.palatte.primary)
	mediaRecorderStyle.set(deleteIconTint: CometChatTheme.palatte.error)
	mediaRecorderStyle.set(timerTextFont: CometChatTheme.typography.text1)
	mediaRecorderStyle.set(timerTextColor: CometChatTheme.palatte.primary)
  mediaRecorderStyle.set(submitIconTint: CometChatTheme.palatte.primary)
  mediaRecorderStyle.set(startIconTint: CometChatTheme.palatte.secondary)
	mediaRecorderStyle.set(stopIconTint: CometChatTheme.palatte.error)
	cometChatMediaRecorder.set(style: mediaRecorderStyle)

  cometChatMediaRecorder.setSubmit(onSubmit: {url in
                print("file url", url)
            })
  self.present(cometChatMediaRecorder, animated: true)
```

</TabItem>
</Tabs>
