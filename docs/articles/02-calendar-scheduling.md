---
sidebar_position: 3
title: Calendar Scheduling
slug: /calendar-scheduling
sidebar_class_name: hidden
---

Enable users to book time on each other's calendars from CometChat.

## How does it work?

Calendar scheduling extension has the following features:

1. Connect calendar
2. Share availability
3. Book a meeting
4. Receive an invite

## Implementation

### Connect calendar

The extension serves a web page that allows users to connect their Google Calendar using their Gmail ID. The users need to give permission to read and write to their Primary Google calendar.

The user can also use the same page to disconnect their calendar and probably connect another Google Calendar using a different Gmail ID.

### Share availability

Once the users connect their Google calendar using their Gmail ID, the extension is able to fetch the list of events that have been scheduled for the next 7 days in that calendar. The extension only gets the free-busy data in the form of Start time and the End time of the events. Other details about the events (like the title, description and participants) are not accessed by the extension.

Users can choose to share their availability with any other user. The list of events is fetched by the extension and a Custom message is sent to the receiver on behalf of the sender with these details.

### Book a meeting

On receiving the list of events in the form of a message, it can be displayed on the receiver's end in a custom Calendar UI, with the busy slots representing all the events.

The receiver can now select any free slot to book a meeting. The entry for this meeting gets automatically added to the sender's calendar that was connected in the earlier step.

### Receive an invite

On successfully scheduling the meeting in the sender's calendar, a Custom message is again sent by the extension on behalf of the sender. This message contains invitation links for various calendars like - Google Calendar, Yahoo Calendar, Outlook Calendar and details to create .ics file for Apple Calendar.

The receiver can click on any of these links to add the event to the calendar of their choice.