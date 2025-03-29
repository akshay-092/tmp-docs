---
sidebar_position: 0
title: Overview
slug: /data-import-and-migration-overview
---

Data import and migration, in the context of CometChat, involves transferring your existing chat-related data from your own servers or another chat service provider to the CometChat platform. This process typically encompasses the migration of users, their messages, any chat groups, and the list of members within those groups. The goal of migration is to ensure a seamless transition and continuity of the chat service for your users.

CometChat offers the follow ways to migrate your data:

<h3>1. [Import historical data](/fundamentals/import-historical-data)</h3>

This process is designed to transfer all of your pre-existing data at rest, that is, the data that is stored and not currently in transit, from your existing database to the CometChat database. This transfer is made possible through the use of CometChat's Data Import APIs, which are designed to handle the ingestion of large volumes of historical chat data, including users, messages, and group information.

<h3> 2. [Live data migration](/fundamentals/live-data-migration)</h3>

Live data migration is a process designed to minimize service disruption during the transition from one chat system to CometChat. It ensures that users who have updated their applications and are now on the new system (CometChat) can still communicate seamlessly with users who have not yet updated their applications and are on the old system. This approach is crucial for maintaining uninterrupted communication between all users throughout the migration period.