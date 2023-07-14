---
title: Exercises
sidebar_position: 2
description: What you NEED to know about exercises
---

|              |    |
|--------------|----|
| **Optional** | No |
|              |    |

## Exercise view 🪟

[For a basic introduction to the structure of an exercise, have a look here in the student guide](../../students/exercises)

In Jarvis your view of an exercise will look a bit different from the student's view.

Most importantly being the extra information you have access to, via the tabs at the top of the screen.

The *examples* tab allows you to take check an example of how the exercise is supposed to be done.
This can be a great way to quickly figure out the direction to guide your student towards when they ask you a question.
When an example is listed with the following icon and the relevant feature toggle is enabled, the student will be able to see it upon completing the exercise.
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<span class="material-symbols-outlined">
visibility
</span>

The *BLAST-Tests* tab allows you to see the exact code BLAST will run for it's testing scenario's.
[For more info on that have a look here](../editor/blast)

## Handling students progress 📈

When looking at a single student in Jarvis, you can go to the progress tab to see the universe reflecting the student's progress. This is also how the students sees it when they open Jarvis.

![student progress example](/img/staff/coaches/exercises/student-progress.png)

From here you can override the default flow of Jarvis for a student by, for example, enrolling them into a module they shouldn't have access to yet. 

By clicking on a module that a student is already enrolled in, you can view that students progress within that module.

![student progress module example](/img/staff/coaches/exercises/student-progress-module.png)

Depending on the state of an exercise, there will be a menu on the right hand side of the exercise that allows you to:

* View the exercise like that student (to see their BLAST results for example)
* Unlock a locked exercise
* [Review a self diagnostic with a student](#self-diagnostic)
* Make a student redo an exercise

### Team exercises 👥

If the exercise requires a team, you will see extra controls to manually control these teams.

In the case of a team exercise that requires 4 students,
Jarvis will by default start a team with the first student that arrives.
The second student that arrives will be added to this team,
and the exercise will start once the required number has been reached.

You can manually override this by, disbanding a team and then manually enrolling any team you'd like.
This can also be used to deal with uneven group sizes,
say you have 21 students in a group you don't want the last 3 to get stuck,
so you can manually start them as a group of 3.
This is done by disbanding the team and them manually enrolling.

## Self diagnostic

Self diagnostics are a special kind of exercise,
in which students take a little quiz individually to verify their comprehension of a specific topic.

This is often used for more theoretical subjects and/or subjects that are not properly verified by practical exercises.

If the student fails this self diagnostic, depending on location settings,
they might be forced so seek out a coach to help them understand where they went wrong.

![student progress self diagnostic example](/img/staff/coaches/exercises/student-progress-self-diagnostic.png)

From the module overview you can review a self diagnostic with a student.
You'll be able to see the correct answer's (and hide them when going through the quiz with the student).

![self diagnostic review example](/img/staff/coaches/exercises/self-diagnostic.png)

After going through the quiz with the student you can reopen the self diagnostic from the module overview.
After which the student can retake the quiz.
(please note the student can get different questions on the same subjects).

## Settings

Most of the settings of an exercise/module are part of that content. 
The module contains things like:
* Can a student download a certificate?
* How many open reviews can a student have within this module? (default is 7)

The exercise settings contain things like:
* What files should a student hand in?
* How should a student hand in those files? (Git or file upload)
* Does [BLAST](../editor/blast) validate the student's work?
* Who should do the review? (No one, other students or coaches)

For more possible settings have a look at the [editor documentation](../editor).
