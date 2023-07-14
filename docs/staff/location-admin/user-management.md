---
sidebar_position: 2
description: Setting up students and staff members
---

# User administration

## Students

In Jarvis students are organized in groups. A student is always part of a single group.

When you create a student, an email will be send to them containing a password reset link. They can use this link to
reset their password.
Note that this link is only valid for 2 days. If a user (student or staff member) fails to activate their account in
time,
they can request a new link via de 'forgot password' feature on the login screen.

### After creation

Not all properties for a student can be set during creation. The following properties only come available after creating
a student:

- Mentor
- State

How Jarvis works for students is described in detail in [its own section](../../students).

### Creating multiple students at once

Student can be imported via a csv file.

To import student via csv, go to the student create dialog and click on the 'import students' button in the top right.

The CSV should contain the following fields: *email*, *firstname*, *middlename*\*, *lastname*.

\** = middlename can be left empty.*

### Multiple locations

Students can not, in comparison to staff members, exist in multiple locations simultaneously. If a student leaves your
location and should be moved to another jarvis location, you have to contact support to sort this out.

## Staff members

:::info Missing any of these capabilities for yourself? 

You can edit your own roles as location admin, which allows you to add and 
remove capabilities for your own account.

Not seeing the changes after changing your own roles? Please log out and then back into Jarvis.
:::

Staff member accounts can have different roles within Jarvis and can possess any combination of roles.
It's considered a good practice to follow the principle of least privilege: only give staff members access to what they
really need.
Below we'll go over the roles individually.
Keep in mind you can also grant other staff members location administrator rights, which might be handy to share the
responsibility of managing the location.

### Coach

A coach (some institutions might refer to this role as *teacher*) is the most common role to hand out.
Coaches teach classes and/or guide students their progress.
Coaches have access to information from students, like the progress, notes, goals and 1-on-1's.
They can also take actions related to the student. For example: unlocking modules or exercises for a student or forcing a student to redo certain exercises.

By default, a coach cannot see any students. He/she can see only the students that are in the groups that coach is attached to. So you as a location admin have to attach coaches to a group of students
first.

The coach role is described in detail in [its own section](../coaches/).

### Location editor

The location editor role allows a staff member to edit the universe and the modules within it.

This role is described in detail in [its own section](../editor).

### Intaker

Jarvis has a feature called the benchmark, which is used for intakes with students before they start their studies.
The intaker role, allows a staff member to use this feature.



## Two-factor

By default, Jarvis requires all staff members to have 2-factor authentication enabled on their accounts.

This is done to add extra protection to the staff members their accounts,
as they tend to have access to sensitive information about students.

If your organisation really does not want to work with 2-factor authentication, this is your risk to take.
It can be switched off for all staff members via the [feature toggles](feature-toggles).

*Note: if a staff member is part of multiple locations, and one of those locations requires two-factor authentication, then the staff
member has to use two-factor authentication. Regardless of the setting of your location.*
