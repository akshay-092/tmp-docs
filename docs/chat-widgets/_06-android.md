Before getting started
Go through the[ introduction](https://cometchat-docs.developerhub.io/docs/widget/overview) to set up Chat Widget from the CometChat Dashboard

![](https://res.cloudinary.com/developerhub/image/upload/v1623199534/v2_5163/ueg3ntviwqtubhqgmkme.png)

This guide demonstrates how to add chat-widget to an Android application. Before you begin, we strongly recommend you read the [Key Concepts](https://www.cometchat.com/docs/v3/more/key-concepts) guide.

<div style={{ border: '1px solid #BFBFBF', boxShadow: '2px 2px 5px #aaaaaa', borderRadius: '15px', padding: '15px' }}>
   <h4>I want to integrate Chat Widget in my app</h4>
   <ol style={{ marginBottom:0 }}>
      <li><a href="#get-your-application-keys">Get your application keys</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#add-the-chat-widget-dependency">Add Chat Widget Dependency</a></li>
      <li><a href="#initialize-chat-widget">Initialize</a></li>
      <li><a href="#login">Login</a></li>
      <li><a href="#launch-cometchat-widget">Launch</a></li>
    </ol>
</div>

### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API Keys** section and note the **Auth Key**, **App ID** & **Region**

> - Android API Level 21 > - Androidx Compatibility > - Compile and Target SDK version 29> - Build Tool Version 29

### Installation

<video width="640" height="480" controls>
  <source src="https://data-eu.cometchat.io/16932cdb926f3b3/media/1597339924_814120147_825883acdc40fdd25a4773434f5d485d.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Add the Chat Widget Dependency

First, add the repository URL to the **project level**`build.gradle` file in the `repositories` block under the `allprojects` section.

```none
allprojects {
  repositories {
    maven {
      url "https:__dl.cloudsmith.io_public_cometchat_cometchat-pro-android_maven_"
    }
  }
}
```



Then, add CometChat to the **app level**`build.gradle` file in the `dependencies` section.

```none
dependencies {
  implementation 'com.cometchat:pro-android-chat-widget:2.3.4-1'
}
```



Finally, add the below lines `android` section of the **app level** gradle file

```none
android {
  defaultConfig {
  ...
	minSdkVersion 21
  manifestPlaceholders = [file_provider: "com.yourpackagename"]
  }  

	dataBinding {
        enabled = true
  }

  compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
  }
...
}
```



> As **Chat Widget**  is using material components your app's theme should extend `Theme.MaterialComponents`.    Follow the guide at [Getting started with Material Components](https://material.io/develop/android/docs/getting-started/).

The following is the list of Material Components themes you can use to get the latest component styles and theme-level attributes.

`Theme.MaterialComponents.NoActionBar``Theme.MaterialComponents.Light.NoActionBar``Theme.MaterialComponents.DayNight.NoActionBar`

Update your app theme to inherit from one of these themes, e.g.:

```xml
<style name="AppTheme" parent="Theme.MaterialComponents.Light.NoActionBar.Bridge">

<!-- Customize your theme here. -->

<_style>
```



### Initialize Chat Widget

The `init()` method initializes the settings required for CometChat SDK. We suggest calling the `init()` method on app startup, preferably in the `onCreate()` method of the `Application` class.

```java
String appID = "APP_ID"; __ Replace with your App ID
String region = "REGION"; __ Replace with your App Region ("eu" or "us")
String apiKey = "API_KEY"; __ Replace with your API Key.
CometChatWidget.init(this,appID,region,apiKey,new CometChat.CallbackListener<String>() {
  @Override
    public void onSuccess(String s) {
    	Log.d(TAG, "Initialization completed successfully");
  	}
  
  @Override
    public void onError(CometChatException e) {
    	Log.d(TAG, "Initialization failed with exception: " + e.getMessage());
  	}
});
```

```kotlin
val appID = "APP_ID"; __ Replace with your App ID
val region = "REGION"; __ Replace with your App Region ("eu" or "us")
val apiKey = "API_KEY"; __ Replace with your API Key.
CometChatWidget.init(this,appId,region,apiKey,
							 object : CometChat.CallbackListener<String> {
               override fun onSuccess(p0: String?) {
                  Log.d(TAG, "Initialization completed successfully")
                }

                override fun onError(p0: CometChatException?) {
                  Log.d(TAG, "Initialization failed with exception: " + p0?.message)
                }
            });
```



Make sure you replace the `APP_ID`  with your CometChat **App ID** and `region` with your **App Region** in the above code.

### Register or Update your User

Once initialization is successful, you will need to create a user.

To create users on the fly, you can use the `createOrUpdateUser()` method. This method takes a `User` object as input parameters and returns the created `User` object if the request is successful.
You can use the same method to update an existing user.

```java
String uid = "user1"; __ Replace with your uid
String name = "kevin"; __ Replace with your useername
User user = new User(uid,name);
CometChatWidget.createOrUpdate(user,new CometChat.CallbackListener<User>() {
                @Override
                public void onSuccess(User user) {
					Log.d("onSuccess", user.toString());
				}

				@Override
                public void onError(CometChatException e) {
                   Log.e("onError", e.getMessage());
                }
            });
```

```kotlin
val user = User()
user.uid = "user1" __Replace with your uid
user.name = "kevin" __Replace with your name

CometChatWidget.createOrUpdate(user,object : CallbackListener<User?>() {
                    override fun onSuccess(p0: User?) {
                        __Success
                    }

                    override fun onError(p0: CometChatException?) {
                        __Error
                    }
                })
```



Make sure that `UID` and `name` are specified as these are mandatory fields to create or update a user.

### Login

We recommend you call the `CometChatWidget.login()` method once your user logs into your app. The `login()` method needs to be called only once.

```java
String UID = "user1"; __ Replace with the UID of the user to login

 if (CometChat.getLoggedInUser() == null) {
     CometChatWidget.login(UID, new CometChat.CallbackListener<User>() {
       	 @Override
         public void onSuccess(User user) {
         	Log.d(TAG, "Login Successful : " + user.toString());
       	 }
       	 @Override
         public void onError(CometChatException e) {
         	Log.d(TAG, "Login failed with exception: " + e.getMessage());
       	 }
     });
 } else {
   __ User already logged in
 }
```

```kotlin
val uid = "user1" __ Replace with the UID of the user to login

 if (CometChat.getLoggedInUser()==null) {
   CometChatWidget.login(uid,object : CometChat.CallbackListener<User>() {
     override fun onSuccess(p0: User?) {
       __Login Success
     }
     override fun onError(p0: CometChatException?) {
       __Login Error
     }
   })
 } else {
   __User already Logged In
 }
```



Make sure you replace the `AUTH_KEY`  with your App **Auth Key** in the above code.

The `login()` method returns the `User` object containing all the information of the logged-in user.

> UID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.

### Create Or Update Group

Additionally, if you want to create or update the group and launch a direct chat with a particular group then you can use `CometChatWidget.createOrUpdate(Group group)` method. This method takes a `Group` object as input parameters and returns the created `Group` object if the request is successful.
You can use the same method to update an existing group.

```java
private String GUID = "GUID";
private String groupName = "Hello Group!";
private String groupType = CometChatConstants.GROUP_TYPE_PUBLIC;
private String password = "";

Group group = new Group(GUID, groupName, groupType, password);

CometChatWidget.createOrUpdate(group,new CometChat.CallbackListener<Group>() {
  	@Override
    public void onSuccess(Group ) {
      Log.d(TAG, "OnSuccess: " + group.toString());				
    }
  
  	@Override
    public void onError(CometChatException e) {
      Log.d(TAG, "onError: " + e.getMessage());  
    }
});
```

```kotlin
var guid  = "GUID";
var groupName = "Hello Group!";
var groupType = CometChatConstants.GROUP_TYPE_PUBLIC;
var password = "";

val group = Group(guid, groupName, groupType, password);

CometChatWidget.createOrUpdate(group,object : CometChat.CallbackListener<Group>() {
  override fun onSuccess(p0: Group?) {
    Log.d(TAG, "OnSuccess: " + group.toString());
  }
  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "onError: " + p0?.message);
  }
});
```



### Launch Chat Window for User

To directly launch the chat window of a specific user, you can use `CometChatWidget.chatWithUser(String UID, LaunchListener listener);`

```java
CometChatWidget.chatWithUser("ENTER UID HERE",new CometChatWidget.LaunchListener() {
  @Override
    public void onError(CometChatException e) {
    		__Error
    }
});
```

```kotlin
CometChatWidget.chatWithUser("Enter UID Here",object : CometChatWidget.LaunchListener<Any>() {
                override fun onError(p0: CometChatException?){
                   __Error
                }
            })
```



### Launch Chat Window for Group

To directly launch the chat window of a specific group, you can use `CometChatWidget.chatWithGroup(String GUID, LaunchListener listener);`

```java
CometChatWidget.chatWithGroup("ENTER GUID HERE",new CometChatWidget.LaunchListener() {
  @Override
    public void onError(CometChatException e) {
    		__Error
    }
});
```

```kotlin
CometChatWidget.chatWithGroup("Enter GUID Here",object : CometChatWidget.LaunchListener<Any>() {
                override fun onError(p0: CometChatException?){
                  __Error
                }
            })
```



### Launch CometChat Widget

To launch CometChatWidget you need to create a constructor of WidgetSettings class and pass as parameter in the `CometChatWidget.launch()` method.

```java
String widgetID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXX"; __Replace with your widget ID.
String defaultID = "user1";
String defaultType = "user";

WidgetSettings widgetSettings = new WidgetSettings(widgetID,defaultID,defaultType);
CometChatWidget.launch(YOUR_ACTIVITY.this,widgetSettings,
                       new CometChat.LaunchListener() {
                         @Override
                         public void onError(CometChatException e) {
                           Log.e(TAG,"onError:"+e.getMessage());
                         }
                       });
```

```kotlin
val widgetID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXX"  __Replace with your widget ID
val defaultID = "user1"
val defaultType = "user"
            
val widgetSettings = WidgetSettings(widgetID,defaultID,defaultType)
CometChatWidget.launch(widgetSettings,object : CometChatWidget.LaunchListener<Any>()
{
		override fun onError(p0: CometChatException?){
    		__Error
    	}
})
```



WidgetSettings class takes the following parameters:

| No | Parameter | Description | 
| ---- | ---- | ---- | 
| 1 | widgetID | The unique identifier for widget | 
| 2 | defaultID | default ID is the UID or GUID of the user to launch chat window directly when the sidebar is turned off. | 
| 3 | defaultType | The type of the receiver to launch chat window directly when the sidebar is turned off. i.e user or group | 


On Success of `CometChatWidget.launch()`, an activity will be open and you can control the views from Chat Widget Settings in Dashboard.

![](https://res.cloudinary.com/developerhub/image/upload/v1625506930/v2_5163/o547neivcl202x0hojwo.png)

### Logout

You can use `CometChatWidget.logout()` method to log out the user from CometChat Widget. We suggest you call this method once your user has been successfully logged out from your app.

```java
CometChatWidget.logout(new CometChat.CallbackListener<String>() {
                @Override
                public void onSuccess(String s) {
								
								}

								@Override
                public void onError(CometChatException e) {
                    
                }
            });
```

