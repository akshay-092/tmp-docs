---
sidebar_position: 0
title: Best practices
slug: /multi-tenancy-best-practices
---

## Configuration as code

Rather than configure apps manually in the CometChat app dashboard, it is advantageous, especially with high volume app creation, to create and manage apps using the CometChat App Management API.  By using a configuration template and/or a process based code pattern, apps can be created and managed in a consistent manner.  

## Tenancy and apps

Tenancy can be modeled in CometChat based on the inherent tenancy of the use case.

In most multi-tenant use cases, the CometChat App is also associated to some type of entity related to the use case, such as a location, customer or partner.  The CometChat App ID for each such app created should be stored as an associated data with that entity.

The app configuration other than App ID and credentials is best stored only in CometChat after app creation and initial configuration. The configuration can be queried and modified using the API.  Instead of storing the app configuration outside CometChat, simply use code patterns to get and set the app configuration within CometChat based on the logic related to the use case.

## Metrics and Usage

Because all multi-tenant apps consume from the limits associated with the base app, it is recommended to use the stats and metrics APIs to review usage for each app to determine any usage irregularities on a per app basis.