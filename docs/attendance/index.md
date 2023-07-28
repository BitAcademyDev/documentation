---
title: Attendance
sidebar_position: 4
---

# Attendance

|                       |                        |
|-----------------------|------------------------|
| **Optional**          | Yes                    |
| **Default**           | Off                    |
| **Feature Toggle**    | Attendance             |
| **Can be enabled by** | Location Administrator |
| **Settings**          | Off, Group, Schedule   |

## Description
Attendance tracking allows coaches to track the attendance of students. Attendance can be recorded for a full day, not for parts of the day.
Attendance is registered in a screen like the one below. Per student you can fill in: 
- the presence
- a note

At the top of the page you can navigate to dates in the future and pre-fill a student's attendance / note. For example to note down
that they will be late on a certain date.

![student attendance dashboard widget](/img/staff/coaches/attendance/attendance-coach.png)

After filling in the attendance, it will show up on the student's dashboard. The attendance of the last 30 registrations will be shown in a graph on their dashboard. 

![student attendance dashboard widget](/img/staff/coaches/attendance/student-dashboard.png)

**Good to know:**
- If a student has the state *'internship'* their attendance will be prefilled with this information and the state: *'lawfully absent'*.
- If a student has the state *'graduated'* or *'blocked'* they will not show up in the attendance overview.
- Attendance can be changed indefinitely and is never 'locked'
- If attendance is enabled it will be used within the 'location health' monitor in the coaches dashboard
- Attendance is saved (and visible for student) immediately after altering the value of a field. No separate save action is required
- You can only fill in attendance per day. Per hour is not supported

## Relation to other features
**Sick transfer mode**

If you want the 'sick' state to be automatically transferred to the next day, you can enable the 'sick transfer mode' feature for this. 

**Coach pilot**

For a lot of its alerts, the coach pilot depends on the attendance being enabled. Read more about this on the feature toggle page for attendance. 

**Chat**

If the Chat feature is enabled, the student will receive an automated chat message everytime
they get registered as sick, late or unlawfully absent.

## Settings
### Group

In group mode you'll be able to select a group and fill in their attendance for a specific day. 

This mode works well if you'll only be coaching 1 group of students at a time, and the students get the classes schedule elsewhere.

### Schedule

The schedule mode builds on top of the group mode, by adding a schedule for students within Jarvis.

The student will see a widget like the one below indicating when they're expected in class.

![student schedule dashboard widget](/img/staff/coaches/attendance/student-dashboard-schedule.png)

When registering attendance you'll no longer go group by group, but you'll be able to register all your students from
different groups from 1 overview. This works best when you have multiple groups of students at the same time.

**Good to know**:
- A schedule can be connected to one or more groups
- You can add exceptions to the schedule on the student level
- Exceptions can be removal from attendance or that a student specifically needs to be present
- Holidays are automatically filtered out of the schedule if they are present within Jarvis
