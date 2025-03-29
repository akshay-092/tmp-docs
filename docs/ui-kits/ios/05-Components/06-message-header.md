---
sidebar_position: 6
title: Message Header
slug: /message-header
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

## Overview

`MessageHeader` is a [Component](/ui-kit/ios/components-overview#components) that showcases the [User](/sdk/ios/users-overview) or [Group](/sdk/ios/groups-overview) details in the toolbar. Furthermore, it also presents a typing indicator and a back navigation button for ease of use.

![](../assets/message-header.png)

The `MessageHeader` is comprised of the following components:

| Components                                  | Description                                                                                                                                    |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [ListItem Component](/ui-kit/ios/list-item) | This component’s view consists of avatar, status indicator , title, and subtitle. The fields are then mapped with the SDK’s user, group class. |
| Back Button                                 | BackButton that allows users to navigate back from the current activity or screen to the previous one                                          |

## Usage

### Integration

You can add `MessageHeader` component directly by setting the user.

```swift title="Swift"
// syntax for set(user: User)
messageHeader.set(user: user)	 // The object which is going to be rendered in the data item
```

### Actions

[Actions](/ui-kit/ios/components-overview#actions) dictate how a component functions. They are divided into two types: Predefined and User-defined. You can override either type, allowing you to tailor the behavior of the component to fit your specific needs.

The `MessageHeader` component does not have any exposed actions.

##### 1. set(onBack:)

This `set(onBack:)` method becomes valuable when a user needs to override the action triggered upon pressing the back button in CometChatMessageHeader.

<Tabs>
<TabItem value="swift" label="Swift">
```swift title=""
cometChatMessageHeader.set(onBack: {
    // Override on back
})
````

</TabItem>
</Tabs>

---

##### 2. set(onError:)

This method proves helpful when a user needs to customize the action taken upon encountering an error in CometChatMessageHeader.

<Tabs>

<TabItem value="swift" label="Swift">
```swift title=""
cometChatMessageHeader.set(onError: { error in
    // Override on error
})

````

</TabItem>
</Tabs>

---

### Filters

**Filters** allow you to customize the data displayed in a list within a `Component`. You can filter the list based on your specific criteria, allowing for a more customized. Filters can be applied using `RequestBuilders` of Chat SDK.

The `MessageHeader` component does not have any exposed filters.

### Events

[Events](/ui-kit/ios/components-overview#events) are emitted by a `Component`. By using event you can extend existing functionality. Being global events, they can be applied in Multiple Locations and are capable of being Added or Removed.

The `MessageHeader` component does not produce any events.

## Customization

To fit your app's design requirements, you can customize the appearance of the conversation component. We provide exposed methods that allow you to modify the experience and behavior according to your specific needs.

### Style

Using Style you can customize the look and feel of the component in your app, These parameters typically control elements such as the color, size, shape, and fonts used within the component.

##### 1. MessageHeader Style

To customize the appearance, you can assign a `MessageHeaderStyle` object to the `MessageHeader` component.

**Global level styling**
<Tabs>
<TabItem value="swift" label="Swift">

```swift
let customAvatarStyle = AvatarStyle()
customAvatarStyle.backgroundColor = UIColor(hex: "#FBAA75")
customAvatarStyle.textFont = UIFont(name: "Times-New-Roman", size: 18)
        
CometChatMessageHeader.style.titleTextColor = UIColor(hex: "#F76808")
CometChatMessageHeader.style.titleTextFont = UIFont(name: "Times-New-Roman", size: 16)
CometChatMessageHeader.style.subtitleTextFont = UIFont(name: "Times-New-Roman", size: 12)
CometChatMessageHeader.style.avatarStyle = customAvatarStyle
```

</TabItem>
</Tabs>

**Instance level styling**
<Tabs>
<TabItem value="swift" label="Swift">

```swift
let customAvatarStyle = AvatarStyle()
customAvatarStyle.backgroundColor = UIColor(hex: "#FBAA75")
customAvatarStyle.textFont = UIFont(name: "Times-New-Roman", size: 18)
        
let messageHeaderStyle = MessageHeaderStyle()
messageHeaderStyle.titleTextColor = UIColor(hex: "#F76808")
messageHeaderStyle.titleTextFont = UIFont(name: "Times-New-Roman", size: 16)
messageHeaderStyle.subtitleTextFont = UIFont(name: "Times-New-Roman", size: 12)
        
let messageHeader = CometChatMessageHeader()
messageHeader.style = messageHeaderStyle
messageHeader.avatarStyle = customAvatarStyle
```

</TabItem>
</Tabs>

![](../assets/message-header-style.png)

The properties exposed by `MessageHeaderStyle` are as follows:

| **Property**                           | **Description**                                                                 | **Code**                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Title Text Color**                   | Used to set the text color of the header title.                                 | `CometChatMessageHeader.style.titleTextColor = UIColor.black`     |
| **Title Text Font**                    | Used to set the font style of the header title.                                 | `CometChatMessageHeader.style.titleTextFont = UIFont.boldSystemFont(ofSize: 18)` |
| **Subtitle Text Color**                | Used to set the text color of the subtitle in the header.                       | `CometChatMessageHeader.style.subtitleTextColor = UIColor.gray`   |
| **Subtitle Text Font**                 | Used to set the font style of the subtitle in the header.                       | `CometChatMessageHeader.style.subtitleTextFont = UIFont.systemFont(ofSize: 14)` |
| **Back Button Image Tint Color**       | Used to set the tint color of the back button image in the header.              | `CometChatMessageHeader.style.backButtonImageTintColor = UIColor.blue` |
| **Private Group Badge Tint Color**     | Used to set the tint color of the private group badge in the header.            | `CometChatMessageHeader.style.privateGroupBadgeImageTintColor = UIColor.green` |
| **Password-Protected Badge Tint Color**| Used to set the tint color of the password-protected group badge in the header. | `CometChatMessageHeader.style.passwordProtectedGroupBadgeImageTintColor = UIColor.orange` |
| **Private Group Background Color**     | Used to set the background color of the private group badge.                    | `CometChatMessageHeader.style.privateGroupImageBackgroundColor = UIColor.lightGray` |
| **Password-Protected Background Color**| Used to set the background color of the password-protected group badge.         | `CometChatMessageHeader.style.passwordGroupImageBackgroundColor = UIColor.red` |
| **Group Image Background Color**       | Used to set the background color for group icons in the header.                 | `CometChatMessageHeader.style.groupImageBackgroundColor = UIColor.clear` |
| **Avatar Style**                       | Used to customize the appearance of the avatar in the header.                   | `CometChatMessageHeader.style.avatarStyle = customAvatarStyle`   |
| **Background Color**                   | Used to set the background color of the header.                                 | `CometChatMessageHeader.style.backgroundColor = UIColor.white`    |
| **Corner Radius**                      | Used to set the corner radius of the header.                                    | `CometChatMessageHeader.style.cornerRadius = CometChatCornerStyle(cornerRadius: 8)` |
| **Border Width**                       | Used to set the border width of the header.                                     | `CometChatMessageHeader.style.borderWidth = 2`                   |
| **Border Color**                       | Used to set the border color of the header.                                     | `CometChatMessageHeader.style.borderColor = UIColor.gray`         |
| **Back Button Icon**                   | Used to set a custom icon for the back button.                                  | `CometChatMessageHeader.style.backButtonIcon = UIImage(named: "customBackIcon")` |
| **Private Group Icon**                 | Used to set a custom icon for private groups.                                   | `CometChatMessageHeader.style.privateGroupIcon = UIImage(named: "privateIcon")` |
| **Protected Group Icon**               | Used to set a custom icon for password-protected groups.                        | `CometChatMessageHeader.style.protectedGroupIcon = UIImage(named: "protectedIcon")` |
| **Background Image**                   | Used to set a background image for the header.                                  | `CometChatMessageHeader.style.backgroundImage = UIImage(named: "headerBackground")` |


##### 2. Avatar Style 

If you want to apply customized styles to the `Avatar` component within the `MessageHeader` Component, you can use the following code snippet. For more information you can refer [Avatar Styles](/ui-kit/ios/avatar#methods).

**Global level styling**
<Tabs>
<TabItem value="swift" label="Swift">
```swift
let customAvatarStyle = AvatarStyle()
customAvatarStyle.cornerRadius = CometChatCornerStyle(cornerRadius: 8)
        
CometChatMessageHeader.style.avatarStyle = customAvatarStyle
```
</TabItem>
</Tabs>

**Instance level styling**
<Tabs>
<TabItem value="swift" label="Swift">
```swift
let customAvatarStyle = AvatarStyle()
customAvatarStyle.cornerRadius = CometChatCornerStyle(cornerRadius: 8)
                
let messageHeader = CometChatMessageHeader()
messageHeader.avatarStyle = customAvatarStyle
```
</TabItem>
</Tabs>

![](../assets/header-avatar-style.png)

---

### Functionality

These are a set of small functional customizations that allow you to fine-tune the overall experience of the component. With these, you can change text, set custom icons, and toggle the visibility of UI elements.

Below is a list of customizations along with corresponding code snippets

| Method                                | Description                                                                                          | Code                                                                                                   |
|---------------------------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| set(user:User)                         | Sets message header for CometChat user.                                    | `.set(user:User)`                    |
| set(group:Group)                         | Sets message header for CometChat group.                                    | `.set(group:Group)`                    |
| hideBackButton                         | Hides the back button of message header.                                    | `hideBackButton = true`                    |
| hideUserStatus                     | Hides or shows the user status of user(online/offline/last active at).                            | `hideUserStatus = true`                |
| hideVideoCallButton                            | Hides the video call button.                                         | `hideVideoCallButton = true`                       |
| hideVoiceCallButton                        | Hides the voice call button.                                        | `hideVoiceCallButton = true`                   |

---

### Advanced

For advanced-level customization, you can set custom views to the component. This lets you tailor each aspect of the component to fit your exact needs and application aesthetics. You can create and define your views, layouts, and UI elements and then incorporate those into the component.

#### SetListItemView

With this function, you can assign a custom ListItem to the message header Component.

<Tabs>
<TabItem value="swift" label="Swift">

```swift
let cometChatMessageHeader = CometChatMessageHeader()
cometChatMessageHeader.set(listItemView: { user, group in
    let view = CustomListItemView()
    return view
})
```

</TabItem>
</Tabs>

Demonstration
![](../assets/headerLisItem.png)


You can create a `CustomListItemView` as a custom `UIView`. Which we will inflate in `setListItemView()`

```swift title="swift"
import UIKit

class CustomListItemView: UIView {

    private let backButton: UIButton = {
        let button = UIButton(type: .system)
        let image = UIImage(systemName: "chevron.left")?.withRenderingMode(.alwaysTemplate)
        button.setImage(image, for: .normal)
        button.tintColor = .black
        return button
    }()

    private let profileImageView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor.systemPurple
        view.layer.cornerRadius = 18
        view.clipsToBounds = true

        let label = UILabel()
        label.text = "GA"
        label.font = UIFont.systemFont(ofSize: 16, weight: .bold)
        label.textColor = .white
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false

        view.addSubview(label)

        NSLayoutConstraint.activate([
            label.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            label.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])

        return view
    }()

    private let nameLabel: UILabel = {
        let label = UILabel()
        label.text = "George Alan"
        label.font = UIFont.systemFont(ofSize: 16, weight: .bold)
        label.textColor = .black
        return label
    }()

    private let statusLabel: UILabel = {
        let label = UILabel()
        label.text = "Online"
        label.font = UIFont.systemFont(ofSize: 12, weight: .regular)
        label.textColor = .gray
        return label
    }()

    private let videoCallButton: UIButton = {
        let button = UIButton(type: .system)
        let image = UIImage(systemName: "video.fill")?.withRenderingMode(.alwaysTemplate)
        button.setImage(image, for: .normal)
        button.tintColor = .black
        return button
    }()

    private let callButton: UIButton = {
        let button = UIButton(type: .system)
        let image = UIImage(systemName: "phone.fill")?.withRenderingMode(.alwaysTemplate)
        button.setImage(image, for: .normal)
        button.tintColor = .black
        return button
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    private func setupView() {
        backgroundColor = .white

        let userInfoStack = UIStackView(arrangedSubviews: [nameLabel, statusLabel])
        userInfoStack.axis = .vertical
        userInfoStack.spacing = 2
        userInfoStack.alignment = .leading

        let rightButtonsStack = UIStackView(arrangedSubviews: [videoCallButton, callButton])
        rightButtonsStack.axis = .horizontal
        rightButtonsStack.spacing = 16

        addSubview(backButton)
        addSubview(profileImageView)
        addSubview(userInfoStack)
        addSubview(rightButtonsStack)

        backButton.translatesAutoresizingMaskIntoConstraints = false
        profileImageView.translatesAutoresizingMaskIntoConstraints = false
        userInfoStack.translatesAutoresizingMaskIntoConstraints = false
        rightButtonsStack.translatesAutoresizingMaskIntoConstraints = false

        NSLayoutConstraint.activate([
            backButton.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 16),
            backButton.centerYAnchor.constraint(equalTo: centerYAnchor),
            backButton.widthAnchor.constraint(equalToConstant: 30),
            backButton.heightAnchor.constraint(equalToConstant: 30),

            profileImageView.leadingAnchor.constraint(equalTo: backButton.trailingAnchor, constant: 10),
            profileImageView.centerYAnchor.constraint(equalTo: centerYAnchor),
            profileImageView.widthAnchor.constraint(equalToConstant: 36),
            profileImageView.heightAnchor.constraint(equalToConstant: 36),

            userInfoStack.leadingAnchor.constraint(equalTo: profileImageView.trailingAnchor, constant: 10),
            userInfoStack.centerYAnchor.constraint(equalTo: centerYAnchor),

            rightButtonsStack.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -16),
            rightButtonsStack.centerYAnchor.constraint(equalTo: centerYAnchor)
        ])
    }
}

```

---

#### SetLeadingView

You can modify the leading view of a group cell using .set(leadingView:).

<Tabs> <TabItem value="swift" label="Swift">
```
cometChatMessageHeader.set(leadingView: { user, group in  
    let view = CustomLeadingView()
    return view  
})  
```
</TabItem> </Tabs>

Demonstration
![](../assets/headerLeadng.png)

You can create a `CustomLeadingView` as a custom `UIView`. Which we will inflate in `setLeadingView()`

<Tabs> <TabItem value="swift" label="Swift">
```
import UIKit

class CustomLeadingView: UIView {

    private let profileImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFill
        imageView.layer.cornerRadius = 20
        imageView.clipsToBounds = true
        imageView.backgroundColor = .lightGray // Placeholder color
        imageView.image = UIImage(systemName: "person.fill")
        return imageView
    }()

    private let joinButton: UIButton = {
        let button = UIButton()
        button.setTitle("Join", for: .normal)
        button.setTitleColor(.white, for: .normal)
        button.titleLabel?.font = UIFont.systemFont(ofSize: 14, weight: .bold)
        button.backgroundColor = .orange
        button.layer.cornerRadius = 6
        button.contentEdgeInsets = UIEdgeInsets(top: 8, left: 16, bottom: 8, right: 16)
        button.setImage(UIImage(systemName: "star.circle"), for: .normal)
        button.setTitle("Admin", for: .normal)
        return button
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    private func setupView() {
        addSubview(profileImageView)
        addSubview(joinButton)

        profileImageView.translatesAutoresizingMaskIntoConstraints = false
        joinButton.translatesAutoresizingMaskIntoConstraints = false

        NSLayoutConstraint.activate([
            profileImageView.leadingAnchor.constraint(equalTo: leadingAnchor),
            profileImageView.trailingAnchor.constraint(equalTo: trailingAnchor),
            profileImageView.topAnchor.constraint(equalTo: topAnchor),
            profileImageView.bottomAnchor.constraint(equalTo: bottomAnchor),
            profileImageView.heightAnchor.constraint(equalToConstant: 40),
            profileImageView.widthAnchor.constraint(equalToConstant: 40),

            joinButton.trailingAnchor.constraint(equalTo: profileImageView.trailingAnchor),
            joinButton.leadingAnchor.constraint(equalTo: profileImageView.leadingAnchor),
            joinButton.bottomAnchor.constraint(equalTo: profileImageView.bottomAnchor),
            joinButton.heightAnchor.constraint(equalToConstant: 12)
        ])
    }
}

```
</TabItem> </Tabs>

---

 #### SetTitleView

You can customize the title view of a group cell using .set(titleView:).

<Tabs> <TabItem value="swift" label="Swift">
```
cometChatMessageHeader.set(titleView: { user, group in  
    let view = CustomTitleView()
    return view
})  
```
</TabItem> </Tabs>

Demonstration
![](../assets/headerTitle.png)

You can create a `CustomTitleView` as a custom `UIView`. Which we will inflate in `setTitleView()`

<Tabs> <TabItem value="swift" label="Swift">
```
 class CustomTitleView: UIView {

    private let titleLabel: UILabel = {
        let label = UILabel()
        label.text = "Artistic Design"
        label.font = UIFont.systemFont(ofSize: 16, weight: .medium)
        label.textColor = .black
        return label
    }()

    private let publicBadge: UIView = {
        let view = UIView()
        view.backgroundColor = .blue
        view.layer.cornerRadius = 10

        let icon = UIImageView(image: UIImage(systemName: "person.3.fill"))
        icon.tintColor = .white
        icon.contentMode = .scaleAspectFit

        let label = UILabel()
        label.text = "Public"
        label.font = UIFont.systemFont(ofSize: 12, weight: .bold)
        label.textColor = .white

        let stackView = UIStackView(arrangedSubviews: [icon, label])
        stackView.spacing = 4
        stackView.alignment = .center
        stackView.translatesAutoresizingMaskIntoConstraints = false

        view.addSubview(stackView)

        NSLayoutConstraint.activate([
            stackView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            stackView.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            view.widthAnchor.constraint(equalToConstant: 60),
            view.heightAnchor.constraint(equalToConstant: 20)
        ])
        
        return view
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    private func setupView() {
        addSubview(titleLabel)
        addSubview(publicBadge)

        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        publicBadge.translatesAutoresizingMaskIntoConstraints = false

        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: leadingAnchor),
            titleLabel.centerYAnchor.constraint(equalTo: centerYAnchor),

            publicBadge.leadingAnchor.constraint(equalTo: titleLabel.trailingAnchor, constant: 6),
            publicBadge.centerYAnchor.constraint(equalTo: centerYAnchor)
        ])
    }
}

```
</TabItem> </Tabs>

---

#### SetTrailView

You can modify the trailing view of a message header using .set(trailView:).

<Tabs> <TabItem value="swift" label="Swift">
```
cometChatMessageHeader.set(trailView: { user, group in  
    let view = CustomTrailView() 
    return view  
})  
```
</TabItem> </Tabs>

Demonstration
![](../assets/headerTrail.png)

You can create a `CustomTrailView` as a custom `UIView`. Which we will inflate in `setTrailView()`

<Tabs> <TabItem value="swift" label="Swift">
```
import UIKit

class CustomTrailView: UIView {

    private let videoCallButton: UIButton = {
        let button = UIButton(type: .system)
        let image = UIImage(systemName: "video.fill")?.withRenderingMode(.alwaysTemplate)
        button.setImage(image, for: .normal)
        button.tintColor = .black
        return button
    }()

    private let callButton: UIButton = {
        let button = UIButton(type: .system)
        let image = UIImage(systemName: "phone.fill")?.withRenderingMode(.alwaysTemplate)
        button.setImage(image, for: .normal)
        button.tintColor = .black
        return button
    }()
    
    private let bookMarkButton: UIButton = {
        let button = UIButton(type: .system)
        let image = UIImage(systemName: "phone.fill")?.withRenderingMode(.alwaysTemplate)
        button.setImage(image, for: .normal)
        button.tintColor = .black
        return button
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    private func setupView() {

        let buttonsStack = UIStackView(arrangedSubviews: [videoCallButton, callButton])
        buttonsStack.axis = .horizontal
        buttonsStack.spacing = 16
        buttonsStack.distribution = .fillEqually

        buttonsStack.addArrangedSubview(videoCallButton)
        buttonsStack.addArrangedSubview(callButton)
        buttonsStack.addArrangedSubview(bookMarkButton)
        
        buttonsStack.translatesAutoresizingMaskIntoConstraints = false

        NSLayoutConstraint.activate([
            buttonsStack.leadingAnchor.constraint(equalTo: leadingAnchor),
            buttonsStack.trailingAnchor.constraint(equalTo: trailingAnchor),
            buttonsStack.topAnchor.constraint(equalTo: topAnchor),
            buttonsStack.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
    }
}
 
```
</TabItem> </Tabs>

---

#### SetSubTitleView

You can customize the subtitle view for each group item to meet your requirements

<Tabs>
<TabItem value="swift" label="Swift">
```swift
cometChatMessageHeader.set(subtitleView: { user, group in
   let view = CustomSubtitleView()
   return view
})
````
</TabItem>
</Tabs>

**Example**

Demonstration

![](../assets/groups_subtitle_view.png)

You can seamlessly integrate this `CustomSubtitleView` UIView file into the `.set(subtitleView:)` method within CometChatMessageHeader.

<Tabs>
<TabItem value="swift" label="Swift">
```
import UIKit

class CustomSubtitleView: UILabel {
    
    init(membersCount: Int) {
        super.init(frame: .zero)
        self.text = "\(membersCount) members • \("group_description")"
        self.textColor = UIColor.gray
        self.font = UIFont.systemFont(ofSize: 14)
        self.numberOfLines = 1
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

```
</TabItem>
</Tabs>

---


<!-- ## Configuration

Message Header is a [Components](/ui-kit/android/components#components), Hence it doesn't have [Configuration](/ui-kit/android/components#configurations). Configurations are only available for [Composite Components](/ui-kit/android/components#composite-components)

Message Header can be used by Composite Component, In this case, all the [Action](#style), [Filters](#filters), [Styles](#style), [Functionality](#functionality), and [Advanced](#advanced) properties of the Message Header component will be exposed via `MessageHeaderConfigurations`.

Properties marked with the <a data-tooltip-id="my-tooltip-html-prop"><span class="material-icons red">report</span></a> symbol are not accessible within the Configuration Object. -->

<Tooltip
  id="my-tooltip-html-prop"
  html="Not available in MessageHeaderConfiguration"
/>
