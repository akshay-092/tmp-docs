---
sidebar_position: 4
title: Outgoing Call
slug: /outgoing-call
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The `Outgoing Call` [Component](/ui-kit/ios/components-overview#components) is a visual representation of a user-initiated call, whether it's a voice or video call. It serves as an interface for managing outgoing calls, providing users with essential options to control the call experience. This component typically includes information about the call recipient, call controls for canceling the call, and feedback on the call status, such as indicating when the call is in progress.

![](../../assets/Outgoing_call_overview_screens.png)

---

<!-- ![](./assets/oz53ildst8dal1q80amf1tqvsje6b0p6cjl6nqh0j1ht755r7z2zf5o266b1i1ib.jpg) -->

---

## Usage

### Integration

`CometChatOutgoingCall` being a custom **view controller**, offers versatility in its integration. It can be seamlessly launched via button clicks or any user-triggered action, enhancing the overall user experience and facilitating smoother interactions within the application.

<Tabs>
<TabItem value="swift" label="Swift">

```swift
let cometChatOutgoingCall = CometChatOutgoingCall()
cometChatOutgoingCall.set(call: call)

cometChatOutgoingCall.modalPresentationStyle = .fullScreen
self.present(cometChatOutgoingCall, animated: true)
```

</TabItem>

</Tabs>

:::info
If you are already using a navigation controller, you can use the `pushViewController` function instead of presenting the view controller.
:::

### Actions

[Actions](/ui-kit/ios/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

##### 1. SetOnCancelClick

The `setOnCancelClick` action is typically triggered when the call is ended, carrying out default actions. However, with the following code snippet, you can effortlessly customize or override this default behavior to meet your specific needs.

<Tabs>

<TabItem value="swift" label="Swift">
    ```swift
let cometChatOutgoingCall = CometChatOutgoingCall()
      .setOnCancelClick { call, controller in
      //Perform Your Action
  
}
    ```
</TabItem>

</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a Component. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using RequestBuilders of Chat SDK.

The OutgoingCall component does not have any exposed filters.

---

### Events

[Events](/ui-kit/ios/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

Events emitted by the Outgoing call component is as follows.

| Event                      | Description                                  |
| -------------------------- | -------------------------------------------- |
| **onOutgoingCallAccepted** | Triggers when the outgoing call is accepted. |
| **onOutgoingCallRejected** | Triggers when the outgoing call is rejected. |

<Tabs>

<TabItem value="swift" label="Add Listener">

```swift
// View controller from your project where you want to listen events.
public class ViewController: UIViewController {

   public override func viewDidLoad() {
        super.viewDidLoad()

       // Subscribing for the listener to listen events from user module
        CometChatCallEvents.addListener("UNIQUE_ID", self as CometChatCallEventListener)
    }

}
 // Listener events from user module
extension  ViewController: CometChatCallEventListener {

    func onOutgoingCallAccepted(call: Call) {
        // Do Stuff
    }

    func onOutgoingCallRejected(call: Call){
        // Do Stuff
    }
}
```

<TabItem value="swift" label="">

```swift title='Emitting Group Events'
//emit this when the other user accepts the call
CometChatCallEvents.emitOnOutgoingCallAccepted(call: Call)

//emit this when the other user rejects a call
CometChatCallEvents.emitOnOutgoingCallRejected(call: Call)
```

</TabItem>

</TabItem>

</Tabs>

---

<Tabs>

<TabItem value="swift" label="Remove Listener">

```swift title='View Controller'
public override func viewWillDisappear(_ animated: Bool) {
      // Uncubscribing for the listener to listen events from user module
      CometChatCallEvents.removeListener("LISTENER_ID_USED_FOR_ADDING_THIS_LISTENER")
}
```

</TabItem>

</Tabs>

---

## Customization

To fit your app's design requirements, you can customize the appearance of the conversation component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. OutgoingCall Style

You can customize the appearance of the `OutgoingCall` Component by applying the `OutgoingCallStyle` to it using the following code snippet.

![](../../assets/Outgoing_call_style_screens.png)
<Tabs>
<TabItem value="swift" label="Swift">

```swift
let outgoingcall = OutgoingCallStyle()
.set(subtitleColor: .black)
.set(titleColor: .orange)
.set(background: .cyan)
.set(cornerRadius: CometChatCornerStyle.init(cornerRadius: 8))

let cometChatOutgoingCall = CometChatOutgoingCall()
.set(outgoingCallStyle: outgoingCallStyle)

```

</TabItem>

</Tabs>

List of properties exposed by OutgoingCallStyle

| Property              | Description               | Code                                       |
| --------------------- | ------------------------- | ------------------------------------------ |
| **set Background**    | Sets the background color | `.set(background: UIColor)`                |
| **set CornerRadius**  | Sets the corner radius    | `.set(cornerRadius: CometChatCornerStyle)` |
| **set BorderWidth**   | Sets the border width     | `.set(borderWidth: CGFloat)`               |
| **set BorderColor**   | Sets the border color     | `.set(borderColor: UIColor)`               |
| **set TitleColor**    | Sets the title color      | `.set(titleColor: UIColor)`                |
| **set TitleFont**     | Sets the title font       | `.set(titleFont: UIFont)`                  |
| **set SubtitleColor** | Sets the subtitle color   | `.set(subtitleColor: UIColor)`             |
| **set SubtitleFont**  | Sets the subtitle font    | `.set(subtitleFont: UIFont)`               |

##### 2. Avatar Styles

To apply customized styles to the `Avatar` component in the OutgoingCall Component, you can use the following code snippet. For further insights on `Avatar` Styles [refer](/ui-kit/ios/avatar#avatarstyle)

<Tabs>
<TabItem value="swift" label="Swift">

```swift title='Swift'
// Creating  AvatarStyle object
let avatarStyle = AvatarStyle()
.set(background: .red)
.set(textFont: .systemFont(ofSize: 18))
.set(textColor: .systemTeal)
.set(cornerRadius: CometChatCornerStyle(cornerRadius: 8.0))
.set(borderColor: .systemBlue)
.set(borderWidth: 5)
.set(outerViewWidth: 3)
.set(outerViewSpacing: 3)

let cometChatOutgoingCall = CometChatOutgoingCall()
.set(avatarStyle: avatarStyle)

```

</TabItem>

</Tabs>

##### 3. Button Styles

To apply customized styles to the `Button` component in the OutgoingCall Component, you can use the following code snippet.

<Tabs>
<TabItem value="swift" label="Swift">

```swift title='Swift'
// Creating  AvatarStyle object
let buttonStyle = ButtonStyle()
.set(background: .red)
.set(textFont: .systemFont(ofSize: 18))
.set(textColor: .systemTeal)
.set(cornerRadius: CometChatCornerStyle(cornerRadius: 8.0))
.set(borderColor: .systemBlue)
.set(borderWidth: 5)
.set(iconBackground: .systemTeal)
.set(iconBorder: 6)
.set(iconCornerRadius: 10)
.set(iconTint: .blue)

let cometChatOutgoingCall = CometChatOutgoingCall()
.set(buttonStyle: buttonStyle)

```

</TabItem>

</Tabs>

:::info
Ensure to pass and present `CometChatOutgoingCall`. If a navigation controller is already in use, utilize the pushViewController function instead of directly presenting the view controller.
:::

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

**Example**

In this example, we're enhancing the interface by customizing the decline button icons. By setting custom icons for decline buttons, users can enjoy a more visually appealing and personalized experience.

This level of customization allows developers to tailor the user interface to match the overall theme and branding of their application.

![](../../assets/Outgoing_call_functionality_screens.png)

<Tabs>

<TabItem value="swift" label="Swift">

```swift title='View Controller'
import UIKit
import CometChatSDK
import CometChatUIKitSwift
import CometChatCallsSDK

class ViewController: UIViewController, CometChatCallDelegate {
    func onIncomingCallReceived(incomingCall: CometChatSDK.Call?, error: CometChatSDK.CometChatException?) {

    }

    func onOutgoingCallAccepted(acceptedCall: CometChatSDK.Call?, error: CometChatSDK.CometChatException?) {

    }

    func onOutgoingCallRejected(rejectedCall: CometChatSDK.Call?, error: CometChatSDK.CometChatException?) {

    }

    func onIncomingCallCancelled(canceledCall: CometChatSDK.Call?, error: CometChatSDK.CometChatException?) {

    }

    override func viewDidLoad() {
        super.viewDidLoad()

        CometChat.calldelegate = self

        let receiverID = "your-uid"
        let receiverType: CometChat.ReceiverType = .user
        let callType: CometChat.CallType = .audio

        let newCall = Call(receiverId: receiverID, callType: callType, receiverType: receiverType)

        CometChat.initiateCall(call: newCall, onSuccess: { (ongoing_call) in
            print("Call initiated successfully " + ongoing_call!.stringValue())

            DispatchQueue.main.async {
                let cometChatOutgoingCall = CometChatOutgoingCall()
                    .set(declineButtonIcon: UIImage(systemName: "iphone.slash")!)
                    .set(call: ongoing_call!)

                cometChatOutgoingCall.modalPresentationStyle = .fullScreen

                self.present(cometChatOutgoingCall, animated: true)
            }
        },             onError: { (error) in

            print("Call initialization failed with error:  \(error!.errorDescription)")
        })
    }
}
```

</TabItem>

</Tabs>

:::info

If you are already using a navigation controller, you can use the pushViewController function instead of presenting the view controller.

:::

Below is a list of customizations along with corresponding code snippets

| Property                | Description                                              | Code                               |
| ----------------------- | -------------------------------------------------------- | ---------------------------------- |
| **Call**                | Sets the Call object for CometChatOutgoingCall.          | `.set(call: Call)`                 |
| **SoundForCalls**       | Disables the default sound for calls.                    | `.disable(soundForCalls: Bool)`    |
| **CustomSoundForCalls** | Sets a custom sound for calls.                           | `.set(customSoundForCalls: URL?)`  |
| **DeclineButtonIcon**   | Sets the icon for the decline button in the call screen. | `.set(declineButtonIcon: UIImage)` |
| **User**                | Sets the User object for CometChatOutgoingCall.          | `.set(user: User)`                 |

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

The `OutgoingCall` component does not provide additional functionalities beyond this level of customization.

---

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available "
/>

---
