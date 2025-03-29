---
sidebar_position: 2
title: Message Template
slug: /message-template
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

A MessageTemplate provides you with the capability to define and customize both the structure and the behavior of the [MessageBubble](/ui-kit/ios/message-bubble). It acts as a schema or design blueprint for the creation of a variety of [MessageBubble](/ui-kit/ios/message-bubble) components, allowing you to manage the appearance and interactions of [MessageBubble](/ui-kit/ios/message-bubble) within your application effectively and consistently.

### Structure

![](../assets/message-template-classification.png)

The MessageBubble structure can typically be broken down into the following views:

1. **Leading view**: This is where the sender's avatar is displayed. It's typically on the left of the MessageBubble for messages from others and on the right for messages from the current user.

2. **Header view**: This displays the sender's name and is especially useful in group chats where multiple users are sending messages.

3. **Reply view**: This view can be used to extend the MessageBubble with additional elements. It's typically placed above the Content view.

4. **Content view**: This is the core of the MessageBubble where the message content (text, images, videos, etc.) is displayed.

5. **Bottom view**: This view can be used to extend the MessageBubble with additional elements, such as link previews or a 'load more' button for long messages. It's typically placed beneath the Content view.

6. **Thread view**:This is where the thread reply icon and reply counts are displayed. It's located below the footer view.

7. **Footer view**: This is where the timestamp of the message and its delivery or read status are displayed. It's located at the bottom of the MessageBubble.

8. **Status Info view**: This is where the timestamp of the message and its delivery or read status are displayed. It's located inside the MessageBubble just below the content view.

### Properties

MessageTemplate provides you with methods that allow you to alter various properties of the MessageBubble. These properties include aspects such as the `type` and `category` of a message, the appearance and behavior of the header, content, and footer sections of the message bubble,

1. **Type**

   Using `setType()` you can set the type of CometChatMessage, This will map your MessageTemplate to the corresponding CometChatMessage. You can set the MessageTemplates Type using the following code snippet.

   ```swift

   let type = "custom_template"//replace this with your own custom type

   //Creating a custom message template
   let customMessageTemplate =
   CometChatMessageTemplate(category: category, type: type, contentView: { message, alignment, controller in
   return UIView() //replace this with your own UI for message list

        }, bubbleView: nil, headerView: nil, footerView: nil) { message, alignment, controller in
            return UIView() //replace this with your own UI for message composer
        } options: { message, group, controller in
            return [CometChatMessageOption]() //replace this with your own options
        }

   ```

2. **Category**

Using `.setCategory()` you can set the category of a MessageTemplate. This will create a MessageTemplate with the specified category and link it with a CometChatMessage of the same category.

Please refer to our guide on [Message Categories](/sdk/ios/message-structure-and-hierarchy) for a deeper understanding of message categories.

```swift
let category = "custom_category"//replace this with your own category

//Creating a custom message template
//You can also set UI for bubbleView, headerView and footerView instead of nil
let customMessageTemplate =
  CometChatMessageTemplate(category: category, type: type, contentView: { message, alignment, controller in
         return UIView() //replace this with your own UI for message list

     }, bubbleView: nil, headerView: nil, footerView: nil) { message, alignment, controller in
         return UIView() //replace this with your own UI for message composer
     } options: { message, group, controller in
         return [CometChatMessageOption]() //replace this with your own options
     }
```

3. **Header View**

   The .`template.headerView` method allows you to assign a custom header view to the MessageBubble. By default, it is configured to display the sender's name.

   ```swift
   var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()

   for (index, template) in allTemplates.enumerated() {
            var template = template
            template.headerView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
                return UIView()

     }
   }
   ```

4. **Content View**

   The `template.contentView` method allows you to assign a custom content view to the MessageBubble. By default, it displays the [Text Bubble](/ui-kit/ios/text-bubble), [Image Bubble](/ui-kit/ios/image-bubble), [File Bubble](/ui-kit/ios/file-bubble), [Audio Bubble](/ui-kit/ios/audio-bubble), or [Video Bubble](/ui-kit/ios/video-bubble), depending on the message type.

   ```swift
   var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()

    for (index, template) in allTemplates.enumerated() {
            var template = template
            template.contentView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
                return UIView()
    }
   }
   ```

5. **Footer View**

   The `template.footerView` method allows you to assign a custom Footer view to the MessageBubble. By default, it displays the receipt and timestamp.

   ```swift
   var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()

    for (index, template) in allTemplates.enumerated() {
            var template = template
            template.footerView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
                return UIView()
    }
   }
   ```

6. **Bottom View**

   The `template.bottomView` method allows you to assign a custom Bottom view to the MessageBubble.By defuault is has buttons such as link previews or a 'load more' button for long messages.

   ```swift
   var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()

    for (index, template) in allTemplates.enumerated() {
            var template = template
            template.bottomView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
                return UIView()
    }
   }
   ```

7. **Bubble View**

   The `template.bubbleView` method allows you to assign a custom Bubble view to the MessageBubble. By default, headerView, contentView, and footerView together form a message bubble.

   ```swift
   var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()

    for (index, template) in allTemplates.enumerated() {
            var template = template
            template.bubbleView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
                return UIView()
    }
   }
   ```

8. **Options**

   The `template.options` lets you set the list of actions that a user can perform on a message. This includes actions like reacting to, editing, or deleting a message.

   ```swift
   var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()
    for (index, template) in allTemplates.enumerated() {
            var template = template
            template.options = { message, group, controller in
                let loggedInUser = CometChat.getLoggedInUser()
                let options = CometChatUIKit.getDataSource().getMessageOptions(loggedInUser: loggedInUser!, messageObject: message!, controller: controller, group: group)

                return options
    }
     allTemplates[index] = template
   }
   ```

---

## Customization

Let's dive into how you can use the [properties](#properties) of MessageTemplate to customize an existing template or add a new one to the [MessageList](../05-Components/07-message-list.md) component.

The First step is to fetch the list of existing templates when you want to modify or add to them. This can be done using the getAllMessageTemplates() method from the DataSource of the CometChatUIKit class.

```swift
var messageTemplates : [CometChatMessageTemplate] = CometChatUIKit.getDataSource().getAllMessageTemplates()
```

### Existing Templates

You will need to first get the MessageTemplates object for the type of message you want to customize. You will be customizing the TextMessage Bubble here. The code snippet to get the Text MessageTemplate is as follows.

<Tabs>

<TabItem value="swift" label="Swift">

```swift
var messageTemplates : [CometChatMessageTemplate] = CometChatUIKit.getDataSource().getAllMessageTemplates()

for i in 0..<messageTemplates.count {
 if messageTemplates[i].type == "text" && messageTemplates[i].category == "message" {
  // Set your own content view
    messageTemplates[i].contentView = { message, alignment, controller in
    // Create your own content view and return
      return UIView()
 }
   // Set your own bubble view
     messageTemplates[i].bubbleView = { message, alignment, controller in
    // Create your own bubble view and return
     return UIView()
     }
    }
 }

let cometChatMessages = CometChatMessageList()
cometChatMessages.set(templates: messageTemplates)
```

</TabItem>
</Tabs>

You will be using `CometChatMessageBubble` Component for example here so to apply Template to Messages you will have to use [MessageList](../05-Components/07-message-list.md) component.

By utilizing this code snippet, you will retrieve `text templates`.

<Tabs>
<TabItem value="swift" label="Swift">

```swift
let messageTemplates : CometChatMessageTemplate = CometChatUIKit.getDataSource().getTextMessageTemplate()

let messageListConfiguration = MessageListConfiguration()
    .set(templates: [messageTemplates])


let cometChatMessages = CometChatMessages()
    .set(user: user)
    .set(messageListConfiguration: messageListConfiguration)
```

</TabItem>
</Tabs>

![](../assets/default_template.png)

:::info
Ensure to pass and present `cometChatMessages`. If a navigation controller is already in use, utilize the pushViewController function instead of directly presenting the view controller.
:::

---

#### Header view

The `template.headerView` method of MessageTemplate allows you to add custom views to the header of your message bubbles. In the example below, we will add a custom UIView `custom_header_view` to the header view of every text message in the MessageList.

![](../assets/message-template-header.png)

<!-- ![](./assets/50e1bcaecc46155c4363343f886128a6f7e62222.png) -->

```swift title='custom_header_view'
import UIKit
import CometChatUIKitSwift
import UIKit

class HeaderViewStyled: UIView {
            
    private let profileImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.layer.cornerRadius = 16
        imageView.clipsToBounds = true
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
            
    private let nameLabel: UILabel = {
        let label = UILabel()
        label.font = UIFont.boldSystemFont(ofSize: 14)
        label.textColor = .black
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
            
    private let statusLabel: UILabel = {
        let label = UILabel()
        label.font = UIFont.systemFont(ofSize: 12)
        label.textColor = .systemBlue
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
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
        addSubview(nameLabel)
        addSubview(statusLabel)
                
        NSLayoutConstraint.activate([
            profileImageView.leadingAnchor.constraint(equalTo: leadingAnchor),
            profileImageView.topAnchor.constraint(equalTo: topAnchor),
            profileImageView.widthAnchor.constraint(equalToConstant: 32),
            profileImageView.heightAnchor.constraint(equalToConstant: 32),
                    
            nameLabel.leadingAnchor.constraint(equalTo: profileImageView.trailingAnchor, constant: 8),
            nameLabel.topAnchor.constraint(equalTo: topAnchor),
                    
            statusLabel.leadingAnchor.constraint(equalTo: nameLabel.trailingAnchor, constant: 4),
            statusLabel.topAnchor.constraint(equalTo: topAnchor),
        ])
    }
            
    func configure(profileImage: UIImage?, name: String, status: String) {
        profileImageView.image = profileImage
        nameLabel.text = name
        statusLabel.text = status
    }
}

```

<Tabs>
<TabItem value="swift" label="Swift">

```swift title='Swift'
var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()
    for (index, template) in allTemplates.enumerated() {
    var template = template
    template.headerView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
        let customHeaderView = HeaderViewStyled()
        return customHeaderView
       }
     allTemplates[index] = template
}                                  

let cometChatMessages = CometChatMessageList()
cometChatMessages.set(templates: allTemplates)
```

</TabItem>
</Tabs>

:::info
Ensure to pass and present `cometChatMessages`. If a navigation controller is already in use, utilize the pushViewController function instead of directly presenting the view controller.
:::

---

#### Content view

The `template.contentView` method of MessageTemplate allows you to add a custom view to the content of your message bubbles. In the example below, we will add a custom `custom_message_view_file` to the content view of every text message in the MessageList.

![](../assets/message_template_content_view.png)

<Tabs>

<TabItem value="swift" label="Swift">

```swift title='custom_message_view_file'
import UIKit
import CometChatSDK
import CometChatUIKitSwift

class ContentViewStyled: UIView {

    // MARK: - UI Components
    private lazy var productImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.clipsToBounds = true
        imageView.layer.cornerRadius = 8 // For rounded corners
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
            
    private lazy var separatorView: UIView = {
        let view = UIView()
        view.backgroundColor = .systemGray6
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
            
    private lazy var buyNowButton: UIButton = {
        let button = UIButton(type: .system)
        button.setTitle("Buy Now", for: .normal)
        button.setTitleColor(.systemPurple, for: .normal)
        button.titleLabel?.font = UIFont.boldSystemFont(ofSize: 16)
        button.layer.cornerRadius = 8
        button.layer.borderWidth = 1
        button.layer.borderColor = UIColor.systemPurple.cgColor
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()

    // MARK: - Initializer
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    // MARK: - Setup View
    private func setupView() {
        backgroundColor = UIColor.systemGray6 // Light gray background
        layer.cornerRadius = 12
        layer.masksToBounds = true
                
        addSubview(productImageView)
        addSubview(separatorView)
        addSubview(buyNowButton)
                
        setupConstraints()
    }
            
    // MARK: - Constraints
    private func setupConstraints() {
        NSLayoutConstraint.activate([
            // Product Image View Constraints
            productImageView.topAnchor.constraint(equalTo: topAnchor, constant: 16),
            productImageView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 16),
            productImageView.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -16),
            productImageView.heightAnchor.constraint(equalTo: productImageView.widthAnchor), // Keep it square
                    
            buyNowButton.topAnchor.constraint(equalTo: productImageView.bottomAnchor, constant: 16),
            buyNowButton.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 16),
            buyNowButton.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -16),
            buyNowButton.heightAnchor.constraint(equalToConstant: 44),
                    
            separatorView.heightAnchor.constraint(equalToConstant: 1),
            separatorView.leadingAnchor.constraint(equalTo: leadingAnchor),
            separatorView.trailingAnchor.constraint(equalTo: trailingAnchor),
            separatorView.topAnchor.constraint(equalTo: buyNowButton.bottomAnchor, constant: 16),
            separatorView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -16),
        ])
    }
            
    // MARK: - Public Methods
    func configure(with image: UIImage) {
        productImageView.image = image
    }
}
```

</TabItem>
</Tabs>

<Tabs>
<TabItem  value="swift" label="Swift">

```swift title='Swift'
var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()
        for (index, template) in allTemplates.enumerated() {
            var template = template
                       template.contentView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
                           let customView = ContentViewStyled()
                           return customView
                       }
        allTemplates[index] = template
}                                  

let cometChatMessages = CometChatMessageList()
cometChatMessages.set(templates: allTemplates)
```

</TabItem>
</Tabs>
:::info
Ensure to pass and present `cometChatMessages`. If a navigation controller is already in use, utilize the pushViewController function instead of directly presenting the view controller.
:::

---

#### Bottom View

The `template.bottomView ` method of MessageTemplate allows you to add a custom button view to your message bubbles. In the example below, we will add a custom UIView `custom_bottom_view_file` to the bottom view of every text message in the MessageList.

![](../assets/message-template-bottom.png)

<!-- ![](./assets/e2b9134665e9b6647e170b1ec8bd88ac10735c96.png) -->

```swift title='custom_bottom_view_file'
import UIKit

class BottomViewStyled: UIView {
            
    private let warningLabel: UILabel = {
        let label = UILabel()
        label.font = UIFont.systemFont(ofSize: 12)
        label.textColor = .systemRed
        label.text = "According to guidelines you cannot share contact"
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
            
    private let warningImage: UIImageView = {
        let image = UIImageView()
        image.image = UIImage(systemName: "error-alert")
        image.translatesAutoresizingMaskIntoConstraints = false
        return image
    }()
            
    private let warningStack: UIStackView = {
        let stack = UIStackView()
        stack.translatesAutoresizingMaskIntoConstraints = false
        stack.distribution = .fill
        stack.alignment = .center
        stack.axis = .vertical
        stack.spacing = 2
        return stack
    }()
            
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }
            
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
            
    private func setupView() {
        backgroundColor = .systemBlue
        layer.cornerRadius = 8
                
        addSubview(warningStack)
        warningStack.addArrangedSubview(warningImage)
        warningStack.addArrangedSubview(warningLabel)
                
        NSLayoutConstraint.activate([
            warningStack.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 8),
            warningStack.topAnchor.constraint(equalTo: topAnchor, constant: 4),
            warningStack.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -8),
            warningStack.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -8)
        ])
    }
}
```

<Tabs>
<TabItem value="swift" label="Swift">

```swift title='Swift'
var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()
        for (index, template) in allTemplates.enumerated() {
            var template = template
                template.bottomView = { (baseMessage: BaseMessage?, bubbleAlignment:MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
                let customView = BottomViewStyled()
                return customView
            }
        allTemplates[index] = template
}                                  

let cometChatMessages = CometChatMessageList()
cometChatMessages.set(templates: allTemplates)
```

</TabItem>
</Tabs>

:::info
Ensure to pass and present `cometChatMessages`. If a navigation controller is already in use, utilize the pushViewController function instead of directly presenting the view controller.
:::

---

#### Footer View

The `template.footerView` method of MessageTemplate allows you to add a footer view to your message bubbles. In the example below, we will add a custom UIView file `custom_footer_view` to the bottom view of every text message in the MessageList.

![](../assets/message-template-footer.png)

<!-- ![](./assets/23ee95001e63351df77b5ebb03b3bbbf7fc128e2.png) -->

```swift title='custom_footer_view'
import UIKit

class FooterViewStyled: UIView {
            
    private let reactionsStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 4
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
            
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }
            
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
            
    private func setupView() {
        addSubview(reactionsStackView)
                
        NSLayoutConstraint.activate([
                    
            reactionsStackView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 8),
            reactionsStackView.topAnchor.constraint(equalTo: topAnchor, constant: 8),
            reactionsStackView.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -8),
            reactionsStackView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -8)
        ])
    }
            
    func configure(reactions: [UIImage]) {
        reactionsStackView.arrangedSubviews.forEach { $0.removeFromSuperview() }
                
        for reaction in reactions {
            let imageView = UIImageView(image: reaction)
            imageView.contentMode = .scaleAspectFit
            imageView.translatesAutoresizingMaskIntoConstraints = false
            reactionsStackView.addArrangedSubview(imageView)
        }
    }
}
```

```swift title='Swift'
var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()
        for (index, template) in allTemplates.enumerated() {
            var template = template
                template.footerView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
                    let customView = FooterViewStyled()
                    return customView
        }
        allTemplates[index] = template
}                                  

let cometChatMessages = CometChatMessageList()
cometChatMessages.set(templates: allTemplates)
```

:::info
Ensure to pass and present `cometChatMessages`. If a navigation controller is already in use, utilize the pushViewController function instead of directly presenting the view controller.
:::

---

#### Bubble View

The` template.bubbleView` method of MessageTemplate allows you to add a bubble view to your message bubbles. In the example below, we will add a custom UIView `custom_bubble_view` to the bubble view of every text message in the MessageList.

![](../assets/message-template-bubble-view.png)

```swift title='custom_bubble_view'
import UIKit

class CustomMessageView: UIView {
    
    // MARK: - Subviews
    private let messageLabel: UILabel = {
        let label = UILabel()
        label.textColor = .white
        label.numberOfLines = 0
        label.font = UIFont.systemFont(ofSize: 16)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private let timeLabel: UILabel = {
        let label = UILabel()
        label.text = "4:56 pm"
        label.textColor = .gray
        label.font = UIFont.systemFont(ofSize: 12)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private let doubleTickImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = UIImage(named: "double_tick") // Add your double tick image here
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private let bubbleView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor.systemPurple
        view.layer.cornerRadius = 12
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private let timeStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 4
        stackView.alignment = .center
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    // MARK: - Initialization
    init(message: BaseMessage) {
        super.init(frame: .zero)
        // Add subviews
        addSubview(bubbleView)
        addSubview(timeStackView)
        bubbleView.addSubview(messageLabel)
        timeStackView.addArrangedSubview(timeLabel)
        timeStackView.addArrangedSubview(doubleTickImageView)
        
        // Constraints for bubble view
        NSLayoutConstraint.activate([
            bubbleView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 16),
            bubbleView.trailingAnchor.constraint(lessThanOrEqualTo: trailingAnchor, constant: -16),
            bubbleView.topAnchor.constraint(equalTo: topAnchor, constant: 8),
            bubbleView.bottomAnchor.constraint(equalTo: timeStackView.topAnchor, constant: -4),
            
            messageLabel.leadingAnchor.constraint(equalTo: bubbleView.leadingAnchor, constant: 12),
            messageLabel.trailingAnchor.constraint(equalTo: bubbleView.trailingAnchor, constant: -12),
            messageLabel.topAnchor.constraint(equalTo: bubbleView.topAnchor, constant: 8),
            messageLabel.bottomAnchor.constraint(equalTo: bubbleView.bottomAnchor, constant: -8)
        ])
        
        // Constraints for time stack view
        NSLayoutConstraint.activate([
            timeStackView.leadingAnchor.constraint(equalTo: bubbleView.leadingAnchor),
            timeStackView.topAnchor.constraint(equalTo: bubbleView.bottomAnchor, constant: 4),
            timeStackView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -8)
        ])
        
        NSLayoutConstraint.activate([
            doubleTickImageView.widthAnchor.constraint(equalToConstant: 16),
            doubleTickImageView.heightAnchor.constraint(equalToConstant: 16)
        ])
        if let textMessage = message as? TextMessage {
            messageLabel.text = textMessage.text
            var status = "Sent"
            doubleTickImageView.image = UIImage(named: "single-tick")
            if textMessage.readAt > 0 {
                status = "Read"
                doubleTickImageView.image = UIImage(named: "message-read")
            } else if textMessage.deliveredAt > 0 {
                status = "Delivered"
                doubleTickImageView.image = UIImage(named: "double-tick")
            }

            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "hh:mm a"
            let time = dateFormatter.string(from: Date(timeIntervalSince1970: TimeInterval(textMessage.sentAt)))

            timeLabel.text = "\(time)"
        }
        
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
```

```swift title='Swift'
var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()
        for (index, template) in allTemplates.enumerated() {
        var template = template
        template.bubbleView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> (UIView)? in
            let customBubbleView = CustomBubbleView()
                return customBubbleView                        
            }
            allTemplates[index] = template
}

let cometChatMessages = CometChatMessages()
cometChatMessages.set(templates: allTemplates)
```

:::info
Ensure to pass and present `cometChatMessages`. If a navigation controller is already in use, utilize the pushViewController function instead of directly presenting the view controller.
:::

---

#### Options List

The `template.options` method in the MessageTemplate allows you to customize the options that appear in the action sheet when a message is long-pressed. By default, CometChat UIKit provides a set of options like "Edit", "Share", "Translated message", and "Delete".

However, if you wish to override or modify these options, you can use the `template.options` method and pass a list of `getMessageOptions`. This list of options will replace the default set.

![](../assets/message-template-options.png)

```swift title='Swift'
var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()
for (index, template) in allTemplates.enumerated() {
    var template = template
    template.options = { message, group, controller in
        let loggedInUser = CometChat.getLoggedInUser()
        var options = CometChatUIKit.getDataSource().getMessageOptions(loggedInUser: loggedInUser!, messageObject: message!, controller: controller, group: group)
        for (index, option) in (options ?? []).enumerated() {
            if option.id == "replyInThread" {

                let forwardOption = CometChatMessageOption(id: "customOptionId", title: "Forward", icon: UIImage(systemName: "chevron.right"))
                let favoriteOption = CometChatMessageOption(id: "favoriteOptionId", title: "Mark as Favorite", icon: UIImage(systemName: "star"))
                let deleteOption = CometChatMessageOption(id: "deleteOptionId", title: "Delete", icon: UIImage(systemName: "trash"))

                options?[index...index] = [forwardOption, favoriteOption, deleteOption]
            }
        }
        return options ?? []

    }
    allTemplates[index] = template
}    

let cometChatMessages = CometChatMessageList()
cometChatMessages.set(templates: allTemplates)
```

:::info
Ensure to pass and present `cometChatMessages`. If a navigation controller is already in use, utilize the pushViewController function instead of directly presenting the view controller.
:::

---

#### Status Info View

The `template.statusInfoView` method of MessageTemplate enables you to add a status info view to your message bubbles. This is a user-defined component used to display the statusInfo view, which shows the timestamp and read-receipt of the message.

In the example below, we will integrate a custom UIView file named `custom_status_view` into the status info view of every text message in the MessageList.

![](../assets/message-template-status-info.png)

```swift title='custom_status_view'
import UIKit
import CometChatSDK
import CometChatUIKitSwift

class StatusInfoView: UIView {
    
    private let timeLabel: UILabel = {
        let label = UILabel()
        label.text = "4:56 pm"
        label.textColor = .gray
        label.font = UIFont.systemFont(ofSize: 12)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private let doubleTickImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = UIImage(named: "double_tick") // Add your double tick image here
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private let timeStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 4
        stackView.alignment = .center
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    // MARK: - Initialization
    init(baseMessage: BaseMessage) {
        super.init(frame: .zero)
        // Add subviews
        addSubview(timeStackView)
        timeStackView.addArrangedSubview(timeLabel)
        timeStackView.addArrangedSubview(doubleTickImageView)
        
        // Constraints for time stack view
        NSLayoutConstraint.activate([
            timeStackView.leadingAnchor.constraint(equalTo: leadingAnchor),
            timeStackView.topAnchor.constraint(equalTo: bottomAnchor, constant: 4),
            timeStackView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -8)
        ])
        
        NSLayoutConstraint.activate([
            doubleTickImageView.widthAnchor.constraint(equalToConstant: 16),
            doubleTickImageView.heightAnchor.constraint(equalToConstant: 16)
        ])
        
        if let textMessage = baseMessage as? TextMessage {
            var status = "Sent"
            doubleTickImageView.image = UIImage(named: "single-tick")
            if textMessage.readAt > 0 {
                status = "Read"
                doubleTickImageView.image = UIImage(named: "message-read")
            } else if textMessage.deliveredAt > 0 {
                status = "Delivered"
                doubleTickImageView.image = UIImage(named: "double-tick")
            }

            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "hh:mm a"
            let time = dateFormatter.string(from: Date(timeIntervalSince1970: TimeInterval(textMessage.sentAt)))

            timeLabel.text = "\(time)"
        }
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
```

```swift title='Swift'
var allTemplates = CometChatUIKit.getDataSource().getAllMessageTemplates()
    for (index, template) in allTemplates.enumerated() {
            var template = template
            template.statusInfoView = { (baseMessage: BaseMessage?, bubbleAlignment: MessageBubbleAlignment, viewController: UIViewController?) -> UIView? in
                if let baseMessage = baseMessage {
                    return CustomStatusView(baseMessage: baseMessage)
                }
                return nil
        }
    allTemplates[index] = template
}

let cometChatMessages = CometChatMessages()
cometChatMessages.set(templates: allTemplates)
```

:::info
Ensure to pass and present `cometChatMessages`. If a navigation controller is already in use, utilize the pushViewController function instead of directly presenting the view controller.
:::

---

### New Template

You can create an entirely new template for custom messages is one of the powerful features of CometChat's MessageTemplate.
To add a new template, you can create a new one and then add it to the list of existing templates.

First, let's see how to send a custom message:

```swift title='Swift'
//Creating a text template
let textTemplate = CometChatUIKit.getDataSource()
                      .getTextMessageTemplate()

// set content view for TextMessage template
textTemplate.contentView = { message, alignment, controller in
	// Create your own content view and return
  return UIView()
}

// set bubble view for TextMessage template
textTemplate.bubbleView = { message, alignment, controller in
  // Create your own bubble view and return
  return UIView()
}

//Creating an audio template
let audioTemplate = CometChatUIKit.getDataSource()
                      .getAudioMessageTemplate()

// set content view for AudioMessage template
audioTemplate.contentView = { message, alignment, controller in
	// Create your own content view and return
  return UIView()
}

// set bubble view for AudioMessage template
audioTemplate.bubbleView = { message, alignment, controller in
  // Create your own bubble view and return
  return UIView()
}


let type = "custom_template"//replace this with your own custom type
let category = "custom_category"//replace this with your own category

//Creating a custom message template
//You can also set UI for bubbleView, headerView and footerView instead of nil
let customMessageTemplate =
     CometChatMessageTemplate(category: category, type: type, contentView: { message, alignment, controller in
            return UIView() //replace this with your own UI for message list

        }, bubbleView: nil, headerView: nil, footerView: nil) { message, alignment, controller in
            return UIView() //replace this with your own UI for message composer
        } options: { message, group, controller in
            return [CometChatMessageOption]() //replace this with your own options
        }

//custom list of templates
let messageTypes = [
        textTemplate,
        audioTemplate,
   		customMessageTemplate
              ]

var templates = [(type: String, template: CometChatMessageTemplate)]()
for template in messageTypes {
	templates.append((type: template.type, template: template))
}

//passing template list to cometchatMessages
  let messageList = CometChatMessageList()
	messageList.set(templates: templates)
```

Find the example below:

![](../assets/new_template.png)

```swift title='Swift'
import UIKit

class CustomBubbleView: UIView {
    
    // MARK: - Subviews
    private let profileImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFill
        imageView.clipsToBounds = true
        imageView.layer.cornerRadius = 25 // Half of width/height to make it circular
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.image = UIImage(named: "profile_placeholder") // Replace with your image
        return imageView
    }()
    
    private let nameLabel: UILabel = {
        let label = UILabel()
        label.text = "Safiya Fareena"
        label.textColor = .white
        label.font = UIFont.systemFont(ofSize: 16, weight: .semibold)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private let timeLabel: UILabel = {
        let label = UILabel()
        label.text = "4:56 pm"
        label.textColor = .white
        label.font = UIFont.systemFont(ofSize: 12)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private let doubleTickImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.image = UIImage(named: "double_tick") // Replace with your double-tick image
        return imageView
    }()
    
    private let separatorView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor.white.withAlphaComponent(0.5)
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private let addContactButton: UIButton = {
        let button = UIButton(type: .system)
        button.setTitle("Add Contact", for: .normal)
        button.setTitleColor(.white, for: .normal)
        button.titleLabel?.font = UIFont.systemFont(ofSize: 14, weight: .medium)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private let messageButton: UIButton = {
        let button = UIButton(type: .system)
        button.setTitle("Message", for: .normal)
        button.setTitleColor(.white, for: .normal)
        button.titleLabel?.font = UIFont.systemFont(ofSize: 14, weight: .medium)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private let backgroundCardView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor.systemPurple
        view.layer.cornerRadius = 12
        view.clipsToBounds = true
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private let timeStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 4
        stackView.alignment = .center
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private let buttonStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 1
        stackView.distribution = .fillEqually
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    // MARK: - Initialization
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupViews()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func setupViews() {
        // Add subviews
        addSubview(backgroundCardView)
        backgroundCardView.addSubview(profileImageView)
        backgroundCardView.addSubview(nameLabel)
        backgroundCardView.addSubview(timeStackView)
        timeStackView.addArrangedSubview(timeLabel)
        timeStackView.addArrangedSubview(doubleTickImageView)
        backgroundCardView.addSubview(separatorView)
        backgroundCardView.addSubview(buttonStackView)
        buttonStackView.addArrangedSubview(addContactButton)
        buttonStackView.addArrangedSubview(messageButton)
        
        // Constraints for the card
        NSLayoutConstraint.activate([
            backgroundCardView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 16),
            backgroundCardView.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -16),
            backgroundCardView.topAnchor.constraint(equalTo: topAnchor, constant: 8),
            backgroundCardView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -8)
        ])
        
        // Constraints for profile image
        NSLayoutConstraint.activate([
            profileImageView.leadingAnchor.constraint(equalTo: backgroundCardView.leadingAnchor, constant: 16),
            profileImageView.topAnchor.constraint(equalTo: backgroundCardView.topAnchor, constant: 16),
            profileImageView.widthAnchor.constraint(equalToConstant: 50),
            profileImageView.heightAnchor.constraint(equalToConstant: 50)
        ])
        
        // Constraints for name label
        NSLayoutConstraint.activate([
            nameLabel.leadingAnchor.constraint(equalTo: profileImageView.trailingAnchor, constant: 12),
            nameLabel.centerYAnchor.constraint(equalTo: profileImageView.centerYAnchor),
            nameLabel.trailingAnchor.constraint(lessThanOrEqualTo: timeStackView.leadingAnchor, constant: -8)
        ])
        
        // Constraints for time stack view
        NSLayoutConstraint.activate([
            timeStackView.trailingAnchor.constraint(equalTo: backgroundCardView.trailingAnchor, constant: -16),
            timeStackView.centerYAnchor.constraint(equalTo: nameLabel.centerYAnchor),
            doubleTickImageView.widthAnchor.constraint(equalToConstant: 16),
            doubleTickImageView.heightAnchor.constraint(equalToConstant: 16)
        ])
        
        // Constraints for separator
        NSLayoutConstraint.activate([
            separatorView.leadingAnchor.constraint(equalTo: backgroundCardView.leadingAnchor, constant: 16),
            separatorView.trailingAnchor.constraint(equalTo: backgroundCardView.trailingAnchor, constant: -16),
            separatorView.topAnchor.constraint(equalTo: profileImageView.bottomAnchor, constant: 16),
            separatorView.heightAnchor.constraint(equalToConstant: 1)
        ])
        
        // Constraints for button stack
        NSLayoutConstraint.activate([
            buttonStackView.leadingAnchor.constraint(equalTo: backgroundCardView.leadingAnchor),
            buttonStackView.trailingAnchor.constraint(equalTo: backgroundCardView.trailingAnchor),
            buttonStackView.topAnchor.constraint(equalTo: separatorView.bottomAnchor, constant: 8),
            buttonStackView.bottomAnchor.constraint(equalTo: backgroundCardView.bottomAnchor, constant: -8)
        ])
    }
}
```

:::info
Make sure to set new type and category in to the message Request builder in order to fetch those respective messages as shown in the example below.
:::
