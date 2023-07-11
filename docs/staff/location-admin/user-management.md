---
sidebar_position: 2
description: Setting up students and staff members
---

# User administration

## Students

In Jarvis students live in groups, which are simply a way to organise students.
[And manage staff member access to students in bulk](#coach).

[How Jarvis works for students is described in detail in its own section.](../../students)

## Staff members

Staff member accounts can have different roles within Jarvis, you can grant any staff member any combination of roles.
Generally it's considered a good idea to only give staff members access to what they really
need as they won't need everything.
We'll go over the roles individually here,
keep in mind you can also grant other staff members location administrator rights.
Which might be handy to share the responsibility of managing others.

### Coach

A coach (some institutions might refer to as teacher) is the most common role to hand out.
Coaches teach classes and/or guide students their progress.
As a result have access to information of students, like the progress and notes.
They can take actions on their like overriding Jarvis in unlocking modules or exercises for a student.

By default, a coach cannot see any students, you as a location admin have to attach coaches to a group of students
first.
After which the coach will be able to see the students in that group and work with them.

Compared to location admin a coach is a little more limited in which actions they can take, can't block a student from
Jarvis. Nor can they move students between groups or create new students, that remains the location admins
responsibility.

[This role is described in detail in its own section.](../coaches/)

### Location editor

Editor role allows a staff member to edit your locations universe and the content that you own (or have edit access to).

[This role is described in detail in its own section.](../editor)

### Intaker

Jarvis has a feature called the benchmark, which is used for intakes with students before they start their studies.
The intaker role, allows a staff member to use this.

```info
Missing any of these capabilities for yourself? 

You can edit your own roles as location admin, 
which allows you to add and remove capabilities for your own account.

Not seeing the changes after changing your own roles? Please log out and back into Jarvis.
```

### Two-factor

By default, Jarvis requires all staff members to have 2-factor authentication enabled on their accounts.

This is done to add extra protection to the staff members their accounts,
as they tend to have access to sensitive information about students.

If your organisation really does not want to work with 2-factor authentication, this is your risk to take.
It can be switched off for all staff members via the [feature toggles](feature-toggles).
