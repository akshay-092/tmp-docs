#Before getting started
Go through the [introduction](chat-widgets/overview) to set up Chat Widget from the CometChat Dashboard

![](https://res.cloudinary.com/developerhub/image/upload/v1623199555/v2_5163/v5akxluz4j2pwqjqbsqu.jpg)

This guide demonstrates how to add chat-widget to an Android application. Before you begin, we strongly recommend you read the [Key Concepts](https://www.cometchat.com/docs/v3/more/key-concepts) guide.

<div className="quickstart">
  <div className="box">
    <div className="box_half">
      <h4>I want to integrate Chat Widget in my App </h4>
      <ol style={{marginBottom: '0'}}>
        <li><a href="/docs/widget/ios#installation" target="_self">Installation</a></li>
        <li><a href="/docs/widget/ios#initialize-cometchatwidget" target="_self">Initialize</a></li>
        <li><a href="/docs/widget/ios#login-user" target="_self">Login</a></li>
        <li><a href="/docs/widget/ios#launch-cometchatwidget" target="_self">Launch</a></li>
      </ol>
    </div>
    <div style={{clear: 'both'}}></div>
  </div>
</div>

The **Chat Widget**  is ready to use a chat UI based framework that can easily integrate into your app within a just few minutes.

## Installation

![](https://res.cloudinary.com/developerhub/image/upload/v1623199557/v2_5163/dykfpxofr4onpbcnuxfx.jpg)

### 1. Add the CometChatWidget Dependency

Open a terminal window, move to your project directory, and then create a Podfile by running the following command.

```swift
pod init
```



Add the following lines to the Podfile.

```swift
platform :ios, '11.0'
use_frameworks!

target 'MyApp' do
  pod 'CometChatProWidget', '2.3.7-2'
end
```



And then install the CometChatPro framework through CocoaPods.

```swift
pod install
```



Or

```swift
pod install --repo-update
```



### 2.  Add Authorization Permissions

Prepare your app for this requirement by providing justification strings. The justification string is a localizable message that you add to your app's `Info.plist` file to tell the user why your app needs access to the user's photo library, Camera, Microphone. Then, App prompts the user to grant permission for access, the alert displays the justification string you provided, in the language of the locale selected on the user's device. You can do this as follows:

![](https://res.cloudinary.com/developerhub/image/upload/v1623199561/v2_5163/fovnnlupoeoyaoip38qq.png)

```xml
<key>NSAppTransportSecurity<_key>
  <dict>
	  <key>NSAllowsArbitraryLoads<_key>
	  <true _>
  <_dict>
<key>NSCameraUsageDescription<_key>
	<string>$(PRODUCT_NAME) need access to the camera in order to update your avatar<_string>
<key>NSPhotoLibraryUsageDescription<_key>
	<string>$(PRODUCT_NAME) need access to the Photo Library in order to send Media Messages<_string>
<key>NSMicrophoneUsageDescription<_key>
	<string>$(PRODUCT_NAME) need access to the Microphone in order to connect Audio_Video call <_string>
<key>NSLocationWhenInUseUsageDescription<_key>
	<string>$(PRODUCT_NAME) need access to the Location services in order to share your location <_string>
```



---

## Initialize CometChatWidget

The init() method initializes the settings required for CometChatWidget. We suggest you call the method on app startup preferably in the `didFinishLaunchingWithOptions:` method of the AppDelegate class. Also, you need to add this method in the Application class whenever the app enters in foreground to maintain real-time connectivity.

```swift
import UIKit
import CometChatProWidget

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
 
__ App Lifecycle: didFinishLaunchingWithOptions
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     self.initializeWidget()
     return true
}
    
__ App Lifecycle: applicationWillEnterForeground  
func applicationWillEnterForeground(_ application: UIApplication) {
     self.initializeWidget()
}

      
private func initializeWidget(){
 let _ = CometChatWidget.init(appID: "Enter APP ID", region:  "Enter Region Code", authKey: "Enter AuthKey", onSuccess: { (success) in
                                                                                     
       print("CometChatWidget initialized successfully \\(success)")
                                                                                     
    }) { (error) in
           
       print("Error occurred during CometChatWidget Initialization \\(error.errorDescription)")
        
}  
}
```

```objectivec
#import "AppDelegate.h"
#import <CometChatProWidget_CometChatProWidget-Swift.h>

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
 
@interface AppDelegate ()

@end
__ App Lifecycle: didFinishLaunchingWithOptions
@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [self initializeWidget];
    return YES;
}
    
__ App Lifecycle: applicationWillEnterForeground  
- (void)applicationWillEnterForeground:(UIApplication *)application {
   [self initializeWidget]; 
}

      
-(void) initializeWidget {
    [[CometChatWidget alloc] initWithAppID: @"Enter APP ID" region: @"Enter Region Code" authKey:@"Enter Auth Key" onSuccess:^(BOOL success) {
      
        NSLog(@"CometChatWidget initialized successfully %id",success);
      
    } onError:^(CometChatException * _Nonnull error) {
      
        NSLog(@"Error occurred during CometChatWidget Initialization %@",error);
      
    }];
  }
}
```



---

## Register or Update User

To create or update users on the fly, you can use the `createOrUpdate(user:)` method. This method takes a `User` object as an input parameter and returns the created or updated User object if the request is successful.

```swift
import CometChatPro
import CometChatProWidget

let user = User(uid: "Enter UID", name: "Enter User name")

CometChatWidget.createOrUpdateUser(user: User) { (user) in
                                            
    print("User is: \\(user.stringValue())") 
                                            
   } onError: { (error) in
               
    print("error is: \\(error)")
               
}
```

```objectivec
#import <CometChatProWidget_CometChatProWidget-Swift.h>
#import <CometChatPro_CometChatPro-Swift.h>

User *user = [[User alloc]initWithUid:@"Enter UID" name:@"Enter Name"];

[CometChatWidget createOrUpdateWithUser:user onSuccess:^(User * _Nonnull user) {
  
        NSLog(@"User is %@",user);
  
    } onError:^(CometChatException * _Nonnull error) {
  
        NSLog(@"Error is %@",error.errorDescription);

}];
```



---

## Login User

Once initialization is successful, you will need to log the user into CometChat using the `login()` method.

```swift
CometChatWidget.login(with: "Enter UID") { (user) in
                                          
   print("User is: \\(user.stringValue())")
                                          
  } onError: { (error) in
              
   print("error is: \\(error)")  
}
```

```objectivec
[CometChatWidget loginWith:@"Enter UID" onSuccess:^(User * _Nonnull user) {
   
        NSLog(@"User is: %@",user);
   
   } onError:^(CometChatException * _Nonnull error) {
   
        NSLog(@"Error is: %@",error.errorDescription);
 
  }];
```



---

## Launch CometChatWidget

To launch CometChatWidget you need to create a constructor of  `WidgetSettings` class. You can create this constructor using two ways.

```swift
let widgetSettings = WidgetSettings(widgetID: "Enter WidgetID", defaultID: "Enter DefaultID", receiverType: .user)
```

```objectivec
WidgetSettings *widgetSettings = [[WidgetSettings alloc] initWithWidgetID:@"Enter Widget ID" defaultID:@"Enter Default ID" receiverType:ReceiverTypeUser];
```



`WidgetSettings` class takes the following parameters:

| No | Parameters | Information | 
| ---- | ---- | ---- | 
| 1. | widgetID | The unique identifier for widget | 
| 2. | defaultID | default ID is the UID or GUID of the user to launch chat window directly when the sidebar is turned off. | 
| 3. | receiverType | The type of the receiver to launch chat window directly when the sidebar is turned off. i.e user or group | 


Or

```swift
let widgetSettings = WidgetSettings(widgetID: "Enter WidgetID", entity: User Object)
```

```objectivec
WidgetSettings *widgetSettings = [[WidgetSettings alloc] initWithWidgetID:@"Enter Widget ID" entity:ReceiverTypeUser];
```



`WidgetSettings` class takes the following parameters:

| No | Parameters | Information | 
| ---- | ---- | ---- | 
| 1. | widgetID | The unique identifier for widget | 
| 2. | entity | The entity of the receiver to to launch chat window directly when the sidebar is turned off. i.e `User` or `Group` Object | 


After creating constructor, pass it to `launch(widgetSettings:)` method.  This method launches the window and returns success when the widget launches.

```swift
CometChatWidget.launch(widgetSettings: widgetSettings) { (success) in
    
    print("CometChatWidget launched successfully \\(success)")
                                                        
   } onError: { (error) in
           
    print("Error occurred during CometChatWidget launch \\(error.errorDescription)")  
}
```

```objectivec
[CometChatWidget launchWithWidgetSettings:widgetSettings onSuccess:^(BOOL success) {
     NSLog(@"CometChatWidget launched successfully: %id",success);
  
  } onError:^(CometChatException * _Nonnull error) {
  
     NSLog(@"Error occurred during CometChatWidget launch: %id",error.errorDescription);
  
}];
```



---

## Launch Chat Window for User

You can launch a user's chat window directly by passing `uid` of the user.

```swift
CometChatWidget.chatWithUser(uid: "ENTER UID HERE") { (success) in
  
      print("Chat Window launched successfully \\(success)")
            
 } onError: { (errpr) in

      print("Error occurred during Chat Window launch \\(error.errorDescription)")
 
 }
```

```objectivec
[CometChatWidget chatWithUserWithUid:@"Enter UID HERE" onSuccess:^(BOOL success) {
        
        NSLog(@"Chat Window launched successfully: %id",success);
        
    } onError:^(CometChatException * _Nonnull error) {
        
        NSLog(@"Error occurred during Chat window launch: %@",error);
    }];
```



---

## Launch Chat Window for Group

You can launch a group's chat window directly by passing `guid` of the group.

```swift
CometChatWidget.chatWithGroup(guid: "ENTER  GUID HERE") { (success) in
  
      print("Chat Window launched successfully \\(success)")
            
 } onError: { (errpr) in

      print("Error occurred during Chat Window launch \\(error.errorDescription)")
 
 }
```

```objectivec
[CometChatWidget chatWithGroupWithGuid:@"Enter GUID HERE" onSuccess:^(BOOL success) {
        NSLog(@"Chat Window launched successfully: %id",success);
  
    } onError:^(CometChatException * _Nonnull error) {
        
        NSLog(@"Error occurred during Chat window launch: %@",error);
    }];
```



## Create or Update Group

Additionally, if you want to create or update group and launch a direct chat with a particular conversation then you can use `createOrUpdate(group:)` method. This method returns the `Group` Object which you can pass in widgetSettings directly and launch the chat window.

```swift
let group = Group(guid: "Enter GUID", name: "Enter Group Name", groupType: .public, password: nil, icon: "Icon URL", description: "Enter Group Description")
  
CometChatWidget.createOrUpdateGroup(group: Group) { (group) in
   
   print("Group is: \\(group.stringValue())")   
                                              
   } onError: { (error) in
               
    print("error is: \\(error.errorDescription)") 
               
 }
```

```objectivec
Group *group = [[Group alloc] initWithGuid:@"Enter GUID" name:@"Enter Group Name" groupType:groupTypePublic password:nil icon:@"Icon URL" description:@"Group Description"];
    
[CometChatWidget createOrUpdateWithGroup:group onSuccess:^(Group * _Nonnull group) {
   NSLog(@"Group is %@",group.stringValue);
  
  } onError:^(CometChatException * _Nonnull error) {
  
    NSLog(@"error is %@",error.errorDescription);
  
 }];
```



---

## Logout

you can use the`logout` method to remove user session which is currently logged in inside the app.

```swift
CometChatWidget.logout { (success) in
                        
   print("User logged out successfully: \\(success)")    
                        
   } onError: { (error) in
               
   print("error is: \\(error.errorDescription)")      
               
}
```

```objectivec
[CometChatWidget logoutOnSuccess:^(BOOL success) {
    
  NSLog(@"User logged out successfully:%id",success);
  
 } onError:^(CometChatException * _Nonnull error) {
   
  NSLog(@"error is %@",error.errorDescription);
  
}];
```



---

## Additional Resources

<div style={{display: 'flex', boxShadow: '0 0 4px 0 rgb(0 0 0 / 18%)', borderRadius: '3px'}}>
  <div style={{padding: '24px'}}>
    <h4 style={{fontWeight: 'bold'}}>We have a number of resources that will help you while integrating CometChat in your app.</h4>
    <br></br>
    <a style={{display: 'inline-block', backgroundColor: '#7c55c9', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '1px solid #e3e5e7', borderRadius: '3px', color: 'white', width: '100%', marginBottom: '8px'}} href="ios-sdk/ios-resources">View Resources</a>
    <hr style={{size: '8', width: '100%', color: 'black'}} /> 
  </div>
</div>

