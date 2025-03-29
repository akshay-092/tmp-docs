---
sidebar_position: 7
title: Stipop
slug: /stickers-stipop
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Learn how to integrate stickers by Stipop in your app._

Stipop is the world's trendiest sticker platform and creator community.

## Before you begin:

1. Sign up at [Stipop](https://stipop.io/).
2. On successful signup, provide the following details:
    1. Application name
    2. Website
    3. Category
    4. Sub-category
    5. Region
    6. App MAU

3. Click on Get Started once done.
4. You will be able to see the API Key on their Dashboard. Keep this handy.
5. In the left navigation pane, go to Settings and select the Application tab.
6. Copy the Application ID and keep this handy.

## Extension settings

1. Login to [CometChat](https://app.cometchat.com/login) and select your app.
2. Go to the extensions section and enable the Stipop extension.
3. Click on the settings button and enter your Stipop Application ID and API Key.
4. Save the settings once done.

## How does it work?

The extension provides the following functionalities:

1. Get the current Trending stickers.
2. Search for stickers using a certain phrase or keyword

This extension uses the `callExtension` method provided by the CometChat SDK.

### Get trending stickers

The API call requires the following Query Parameters:

|  |  |  | 
| ---- | ---- | ---- | 
| lang | string | Specify default language for regional stickers.<br/>Use a 2-letter ISO 639-1 language code.<br/>**Default Value: en** | 
| limit | int | The maximum number of stickers per page.<br/>Use pageNumber accordingly for optimized sticker view.<br/>**Default Value: 20 (max: 50)** | 
| pageNumber | int | Specify pageNumber to show limit number of stickers per page. | 
| countryCode | string | Specify default country for local stickers.<br/>Use a 2-letter ISO 3166-1 country code.<br/>**Default Value: US** | 

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
const qs = `?lang=${lang}&limit=${limit}&pageNumber=${pageNumber}&countryCode=${contryCode}`;

CometChat.callExtension('stickers-stipop', 'GET', 'v1/trending' + qs, null)
  .then(response => {
		// Stickers in response
	})
	.catch(error => {
		// Error occured
	});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
String URL = "/v1/trending?lang="+language+"&limit="+limit+"&pageNumber="+pageNumber+"&countryCode="+countryCode;

CometChat.callExtension("stickers-stipop", "GET", URL, null,
	new CometChat.CallbackListener < JSONObject > () {
    @Override
    public void onSuccess(JSONObject jsonObject) {
        // Stickers
    }
    @Override
    public void onError(CometChatException e) {
        // Some error occured
    }
  });
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
CometChat.callExtension(slug: "stickers-stipop", type: .get, endPoint: "v1/trending?lang="+language+"&limit="+limit+"&pageNumber="+pageNumber+"&countryCode="+countryCode, nil, onSuccess: { (response) in
        // Stickers
      }) { (error) in
        // Some error occured
      }
    }
```
</TabItem>
</Tabs>



### Search for stickers

The API call requires the following Query Parameters:

|  |  |  | 
| ---- | ---- | ---- | 
| lang | string | Specify default language for regional stickers.<br/>Use a 2-letter ISO 639-1 language code.<br/>**Default Value: en** | 
| limit | int | The maximum number of stickers per page.<br/>Use pageNumber accordingly for optimized sticker view.<br/>**Default Value: 20 (max: 50)** | 
| pageNumber | int | Specify pageNumber to show limit number of stickers per page. | 
| query | string | The search term for finding stickers. | 

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
const qs = `?lang=${lang}&limit=${limit}&pageNumber=${pageNumber}&query=${query}`;

CometChat.callExtension('stickers-stipop', 'GET', 'v1/search' + qs, null)
  .then(response => {
		// Stickers in response
	})
	.catch(error => {
		// Error occured
	});
```
</TabItem>
<TabItem value="Java" label="Java">

```java
String URL = "/v1/search?lang="+language+"&limit="+limit+"&pageNumber="+pageNumber+"&query="+query;

CometChat.callExtension("stickers-stipop", "GET", URL, null,
	new CometChat.CallbackListener < JSONObject > () {
    @Override
    public void onSuccess(JSONObject jsonObject) {
        // Stickers
    }
    @Override
    public void onError(CometChatException e) {
        // Some error occured
    }
  });
```
</TabItem>
<TabItem value="Swift" label="Swift">

```swift
CometChat.callExtension(slug: "stickers-stipop", type: .get, endPoint: "/v1/search?lang="+language+"&limit="+limit+"&pageNumber="+pageNumber+"&query="+query, nil, onSuccess: { (response) in
        // Stickers
      }) { (error) in
        // Some error occured
      }
    }
```
</TabItem>
</Tabs>

