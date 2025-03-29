---
sidebar_position: 1
title: Collaborative Whiteboard
slug: /collaborative-whiteboard
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Connect with other users of the app and collaborate using a Whiteboard.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the Extensions section and enable the Collaborative Whiteboard extension.

## How does it work?

### Initiating the session

Using the Collaborative Whiteboard extension is pretty straight-forward. As an initiator, you only have to create a session. The extension will handle the following for you:

1. Provide you with a link for collaboration.
2. Forward the link as an invitation to the receivers.

You can initiate a whiteboard in either one-on-one chat or a group chat. The session can be shared by simply submitting the `receiver` (uid/guid) and `receiverType` (user/group).

This extension uses the `callExtension` method provided by our SDKs.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.callExtension("whiteboard", "POST", "v1/create", {
  receiver: "UID/GUID",
  receiverType: "user/group",
})
  .then((response) => {
    // Response with board_url
  })
  .catch((error) => {
    // Some error occured
  });
```

</TabItem>

<TabItem value="Typescript" label="Typescript">

```typescript
CometChat.callExtension("whiteboard", "POST", "v1/create", {
  receiver: "UID/GUID",
  receiverType: "user/group",
})
  .then((response: any) => {
    // Response with board_url
  })
  .catch((error: any) => {
    // Some error occurred
  });
```

</TabItem>

<TabItem value="Java" label="Java">

```java
import org.json.simple.JSONObject;

JSONObject body=new JSONObject();
body.put("receiverType", "user/group");
body.put("receiver", "uid/guid");

CometChat.callExtension("whiteboard", "POST", "/v1/create", body,
	new CometChat.CallbackListener<JSONObject>() {
    @Override
    public void onSuccess(JSONObject responseObject) {
        // The whiteboard link to join as an initiator.
    }

    @Override
    public void onError(CometChatException e) {
      	// Some error occured.
    }
});
```

</TabItem>
<TabItem value="Swift" label="Swift">

```swift
CometChat.callExtension(slug: "whiteboard", type: .post, endPoint: "v1/create", body: ["receiverType":"user/group", "receiver":"uidguid"], onSuccess: { (response) in
        // Success response
      }) { (error) in
        // Some error occured
      }
```

</TabItem>
<TabItem value="Dart" label="Dart">

```swift
  Map<String, String> body = {
      'receiverType': 'user/group',
      'receiver': 'uid/guid',
    };
    CometChat.callExtension("whiteboard", "POST", "/v1/create", body, onSuccess: (map) {

    }, onError: (e) {

  });
```

</TabItem>
</Tabs>

### Receiving the details

#### As an initiator

You will be receiving the `board_url` of the whiteboard session in the success callback of the `callExtension` method as shown in the above code sample.

#### As a collaborator

The receiver (a user or group) will get a message with the following properties:

1. category: `custom`
2. type: `extension_whiteboard`

You have to implement the Custom message listener to get the message. Please check out our [Receive Messages](/sdk/javascript/receive-message) documentation under the SDK of your choice.

By default, the unread count is not incremented for Custom Messages.

Hence, the `metadata`contains `incrementUnreadCount` with value as `true`. Use this for incrementing the unread count every time a Collaborative whiteboard's custom message is received.

### Append username to the Whiteboard URL

On the whiteboard screen, the mouse pointers of the collaborating users can be identified with the help of usernames. This username can be appended to the whiteboard URL before opening it.

You can use `CometChat.getLoggedinUser()` method to get the details about the logged-in user. Refer to our [Retrieve Users](/sdk/javascript/retrieve-users) documentation for retrieving the details about the logged-in user. The following is for your reference:

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
CometChat.getLoggedinUser().then(
  (user) => {
    // Replace spaces with underscore
    let username = user.name.split(" ").join("_");

    // Append the username to the board_url
    board_url = board_url + "&username=" + username;
  },
  (error) => {
    console.log("error getting details:", { error });
  }
);
```

</TabItem>

<TabItem value="Typescript" label="Typescript">

```typescript
CometChat.getLoggedinUser().then(
  (user: CometChat.User | null) => {
    // Replace spaces with underscore
    let username = user!.getName().split(" ").join("_");

    // Append the username to the board_url
    board_url += "&username=" + username;
  },
  (error: any) => {
    console.log("error getting details:", { error });
  }
);
```

</TabItem>

<TabItem value="Java" label="Java">

```java
User user = CometChat.getLoggedInUser();
if (user != null) {
    String username = user.getName().replace(" ", "_");
    String boardUrl = "your_board_url_here"; // replace with your actual URL
    boardUrl = boardUrl + "&username=" + username;
    Log.i(TAG, "boardUrl" + boardUrl); // or use the URL as needed
}
```

</TabItem>

<TabItem value="Swift" label="Swift">

```swift
if let loggedInUser = CometChat.getLoggedInUser() {
    let userName = loggedInUser.name
    let boardUrl = "your_board_url_here"; // replace with your actual URL
    boardUrl = "\(boardUrl)&username=\(username)"
    print(boardUrl)
}
```

</TabItem>

<TabItem value="Dart" label="Dart">

```java
CometChat.getLoggedInUser().then((user) {
  if(user != null) {
    String username = user.name.replaceAll(' ', '_');
    String boardUrl = 'your_board_url_here'; // replace with your actual URL
    boardUrl = '$boardUrl&username=$username';
    debugPrint(boardUrl); // or use the URL as needed
  }
}).catchError((error) {
  debugPrint('Error getting details: $error');
});
```

</TabItem>

</Tabs>

### Whiteboard metadata

The metadata section will have the details about the `board_url`.

<Tabs>
<TabItem value="JSON" label="JSON">

```json
"metadata": {
  	"@injected": {
      "extensions": {
        "whiteboard": {
          "board_url": "https://whiteboard-.cometchat.io?whiteboardid=abc"
        }
      }
    }
}
```

</TabItem>
</Tabs>

You can make use of the getMetadata() method for extracting the details. Refer the code samples below:

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
if (metadata != null) {
  var injectedObject = metadata["@injected"];
  if (injectedObject != null && injectedObject.hasOwnProperty("extensions")) {
    var extensionsObject = injectedObject["extensions"];
    if (
      extensionsObject != null &&
      extensionsObject.hasOwnProperty("whiteboard")
    ) {
      var whiteboardObject = extensionsObject["whiteboard"];
      var board_url = whiteboardObject["board_url"];
    }
  }
}
```

</TabItem>

<TabItem value="Typescript" label="Typescript">

```typescript
if (metadata != null) {
  const injectedObject = metadata["@injected"];
  if (injectedObject != null && injectedObject.hasOwnProperty("extensions")) {
    const extensionsObject = injectedObject["extensions"];
    if (
      extensionsObject != null &&
      extensionsObject.hasOwnProperty("whiteboard")
    ) {
      const whiteboardObject = extensionsObject["whiteboard"];
      const board_url = whiteboardObject["board_url"];
    }
  }
}
```

</TabItem>

<TabItem value="Java" label="Java">

```java
JSONObject metadata = message.getMetadata();
if (metadata != null) {
  JSONObject injectedObject = metadata.getJSONObject("@injected");
  if (injectedObject != null && injectedObject.has("extensions")) {
    JSONObject extensionsObject = injectedObject.getJSONObject("extensions");
    if (extensionsObject != null && extensionsObject.has("whiteboard"))
        {
          JSONObject whiteboardObject = extensionsObject.getJSONObject("whiteboard");
          String board_url = whiteboardObject.getString("board_url");
        }
    }
}
```

<!-- ```kotlin
if (metadata != null) {
  if (metadata.has("@injected")) {
   val injectedJSONObject = metadata.getJSONObject("@injected")
   if (injectedJSONObject != null && injectedJSONObject.has("extensions")) {
   val extensionsObject = injectedJSONObject.getJSONObject("extensions")

   if (extensionsObject != null && extensionsObject.has("whiteboard")) {
   val whiteboardObject = extensionsObject.getJSONObject("whiteboard")
   val board_url = whiteboardObject.getString("board_url")
         }
       }
     }
   }
``` -->

</TabItem>
<TabItem value="Swift" label="Swift">

```swift
let textMessage = message as? TextMessage
var metadata : [String : Any]? = textMessage.metaData
if metadata != nil {

    var injectedObject : [String : Any]? = (metadata?["@injected"] as? [String : Any])!

    if injectedObject != nil && (injectedObject!["extensions"] != nil){

      var extensionsObject : [String : Any]? = injectedObject?["extensions"] as? [String : Any]

      if extensionsObject != nil && extensionsObject?["whiteboard"] != nil             {
        var whiteboardObject = extensionsObject?["whiteboard"] as! [String :  Any]

        let board_url = whiteboardObject["board_url"] as! String
      }
   }
}
```

</TabItem>

<TabItem value="Dart" label="Dart">

```dart
if (metadata != null) {
  if (metadata.containsKey('@injected')) {
    Map<String, dynamic>? injectedJSONObject = metadata['@injected'];
    if (injectedJSONObject.containsKey('extensions')) {
      Map<String, dynamic>? extensionsObject = injectedJSONObject['extensions'];
      if (extensionsObject != null && extensionsObject.containsKey('whiteboard')) {
        Map<String, dynamic>? whiteboardObject = extensionsObject['whiteboard'];
        if (whiteboardObject != null && whiteboardObject.containsKey('board_url')) {
          String boardUrl = whiteboardObject['board_url'];
          debugPrint(boardUrl); // or use the boardUrl as needed
        }
      }
    }
  }
}
```

</TabItem>
</Tabs>

### Start collaborating

![Whiteboard from CometChat](./assets/7e81ssdu1s691hsmd3fdhal055cgiyx2baauqd3qc65pgyxthsjmrtf45wkdvwy8.png)

Our whiteboard implementation provides the following features:

1. **Edit**
   a. Clear board
   b. Undo
   c. Redo
2. **Tools**
   a. Mouse pointer
   b. Select an area
   c. Pen
   d. Line
   e. Rectangle
   f. Circle
   g. Text
   h. Eraser
3. **Tool properties**
   a. Thickness
   b. Color
4. **Upload image to whiteboard**
5. **Export whiteboard as image**
