---
sidebar_position: 3
title: Rate Limits
slug: /rate-limits
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### CometChat REST API Rate Limits

:::info
The rate limits below are for general applications. Rate limits can be adjusted on a per need basis, depending on your use-case and plan. The rate limits are cumulative. For example: If the rate limit for core operations is 100 requests per minute, then you can either login a user, add user to a group, remove a user from a group, etc for total 100 requests per minute.
:::

1. **Core Operations:** Core operations are rate limited to `10,000` requests per minute. Core operations include user login, create/delete user, create/join group cumulatively.
2. **Standard Operations:** Standard operations are rate limited to `20,000` requests per minute. Standard operations include all other operations cumulatively.

## What happens when rate limit is reached ?

The request isn't processed and a response is sent containing a 429 response code.
Along with the response code there will be couple of headers sent which specifies the time in seconds that you must wait before you can try request again.

`Retry-After: 15`

`X-Rate-Limit-Reset: 1625143246`

## Is there any endpoint that returns rate limit of all resources ?

No, we don't provide a rate-limit endpoint.

However, we do provide the following response headers that you can use to confirm the app's current rate limit and monitor the number of requests remaining in the current minute:

`X-Rate-Limit: 700`

`X-Rate-Limit-Remaining: 699`
