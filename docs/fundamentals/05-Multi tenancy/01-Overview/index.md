---
sidebar_position: 0
sidebar_label: Overview
title: Multi-tenancy plans and apps
slug: /multi-tenancy-overview
---

## What is an app?

CometChat apps are a way to combine a set of users, groups, roles and 
other configuration that results in a particular experience for chat 
users. 

## What is a multi-app setup?

To provide different experiences to a different set of users, a developer can create many CometChat apps.

Each of these apps have their own data  within them, like it's users, messages, etc., and do not interact or share data with other apps. Similarly, each of these apps have their own billing plans and cycles which do not interact with each other.

## What is a multi-tenant setup?

To provide a similar experience to a different set of users, a developer can create many similar CometChat apps that consume from the limits and quotas of the same CometChat billing plan. The data is still not shared between apps, but the billing plan is.

This provides economies of scale as well as a streamlined experience in configuring, deploying and managing many CometChat apps.

## When should you use a multi-tenant plan?

Multi-tenant plans are quite suitable for certain use cases such as  for
 aggregators and vertical-specific software. Think of situations such as  
the following or ones adjacent to it.

- You're building an app  that allows schools and teachers to communicate with students and  parents. You'd create a multi tenant account for yourself and each  school, their students, teachers, announcements etc. would be an app of  their own.
- A business app that lets business owners or  franchises of a particular chain, their employees, and customers talk to  each other. Something like Slack. Each business would be a separate app  in this case, and the account would work on multi tenancy mode.

These, and many more similar use cases can be addressed using a multi-tenant model. As an example of something that is not a great use case for multi-tenant but rather multi-app is, is when you are running 2 or 3 apps within the same organization with different user bases, separate P & Ls, or are owned by different departments for different purposes. Multi-app setup with clearly separate billing and metrics are a better choice in such cases.

## Setting up a multi-tenant plan

To begin using the multi-tenant functionality of CometChat, an account must be enabled for multi-tenancy.  File a support ticket to learn more and enable multi-tenancy for your account.  Upon approval, the account will be configured with a base app that is associated with a billing plan and all other apps created in the multi-tenant account will be associated with this base app. 

## Multi-tenant usage, billing and features

All usage from all apps created in the mulit-tenant account will consume 
from the quotas (MAU, PCC, Voice and Video Minutes) of the base app. This usage
will be added as a pooled bill on the base app, including overages, and charged as a combined bill to the payment method of the base app. All apps created in a multi-tenant account will have access to all the features included in the plan and configurations associated with the base app.

## App Management APIs

Once an account has been enabled for muti-tenant usage, an App Management key and secret will be provided to you. The key and secret allow for the use of the App Management APIs to programmatically create and configure CometChat apps.  

App Management APIs provide the capabilities to manage apps including enable, disabling and configuring extensions, managing app team members, configuring webhooks and managing widgets.
