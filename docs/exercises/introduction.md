---
title: Exercise
sidebar_position: 1
---

|              |    |
|--------------|----|
| **Optional** | No |
|              |    |

## Exercise

Exercises are what you'll spend most of your time on in Jarvis.

![student progress example](/img/staff/coaches/exercises/exercise-view-details.png)

Exercises come in 3 types

* Theory
* Practical
* [Self diagnostic](#self-diagnostic)

Theory & pratical exercise consists of different component, not every exercise will have every component.

| Part                | Description                                                                                                                                             |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description         | Contains the scenario and the steps you'll be taking                                                                                                    |
| Learning goals      | What you'll be able to do or understand at the end of the exercise                                                                                      |
| Techniques          | These are short bits of information often with external links to something related to the exercise. <br/> These can be either new, forbidden or repeat. |
| Video               | Not everyone learns in the same way, some times you just want to watch a video instead of reading.                                                      |
| Expected outcome    | For practical exercises an exercise will show what the expected end result should look like.                                                        |
| Assessment criteria | You made something? Well someone might have to review it. These are the items that person will have to pay attention to.                                |

Additionally on the left hand side you can see some extra info for practical exercises.

| Part             | Description                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| Required files   | These are the **minimal** files to hand in                                                        |
| Upload type      | Will you be using Git or File upload to hand in your exercise                                     |
| Required credits | If any credits are required                                                                       |
| Team             | The list of who you're working with, many exercises are done solo but team work is also important |
| Online bitters   | If chat's enabled you'll be able to connect with other students here                              |

In case of a theory exercise you'll study all the information provided and visit some of the external links for more info.

In case of a practical exercise, the description will contain steps which you'll go through. 
These steps are meant to guide you on a path to the expected outcome. 
After completing this, and thoroughly testing what you've made you can hand in your exercise.
After handing in, your exercise might be tested by [BLAST](blast.mdx).
If BLAST says it's ok then the exercise might get reviewed by another human,
until that's done you'll be allowed to continue a few times with the next exercise.

## Self diagnostic

Self diagnostics are a special kind of exercise,
in which you will take a little quiz individually to verify your comprehension of a specific topic.

![self diagnostic review example](/img/staff/coaches/exercises/student-self-diagnostic.png)

This is often used for more theoretical subjects and/or subjects that are not properly verified by practical exercises.

Self diagnostics often start with a Scenario & Result, after which different types of questions can be asked.

| Type              | Description                                                                                                                                                                                                                  |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple choice   | A question is asked and it up to you to select the *most* correct answer.<br/>Or the scenario contains a blank spot shown as `BLANK1` for example. <br/>It's up to you to know what needs to go there to get to the result. |
| Connect the dots  | Multiple items are shown on the left, with open slots to their right. <br/>Drag the items above to the correct corresponding item it belongs to e.g. Cow -> Milk                                                             |
| Fill in the blank | A sentence is given, with parts missing. <br/>Fill these to make a correct sentence, be sure to use terminology used in the previous exercises                                                                               | 

# Staff roles

Coaches and editor get the same additional options, the main difference is that editor's can edit and coaches can't.

![coach exercise view](/img/staff/coaches/exercises/coach-exercise-view.png)

The tabs at the top show us all the extra options.

## Example

On the left hand side we can see different examples that have been created as some exercises allow different solutions.
The *examples* tab allows you to see an example of how the exercise is supposed to be done.
![coach example view](/img/staff/coaches/exercises/coach-example-view.png)
This can be a great way to quickly figure out the direction to guide your student towards when they ask you a question.
When an example is listed with the following icon and the relevant feature toggle is enabled, the student will be able
to see it upon completing the exercise.
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<span class="material-symbols-outlined">
visibility
</span>

## BLAST Tests

The *BLAST-Tests* tab allows you to see the exact code BLAST will run for it's testing scenario's.
[For more info on that have a look here](blast.mdx)

## Ratings

Students are regularly asked to rate an exercise and can leave feedback this comes in 2 forms:

* Just a simple thumbs up or down
* More extensive rating on different categories

## Settings

The module contains things like:

* Can a student download a certificate?
* How many open reviews can a student have within this module? (default is 7)

The exercise settings contain things like:

* What files should a student hand in?
* How should a student hand in those files? (Git or file upload)
* Does [BLAST](blast.mdx) validate the student's work?
* Who should do the review? (No one, other students or coaches)

## Handling students progress 📈

When looking at a single student in Jarvis, you can go to the progress tab to see the universe reflecting the student's
progress. This is also how the students sees it when they open Jarvis.

![student progress example](/img/staff/coaches/exercises/student-progress.png)

From here you can override the default flow of Jarvis for a student by, for example, enrolling them into a module they
shouldn't have access to yet.

By clicking on a module that a student is already enrolled in, you can view that students progress within that module.

![student progress module example](/img/staff/coaches/exercises/student-progress-module.png)

Depending on the state of an exercise, there will be a menu on the right hand side of the exercise that allows you to:

* View the exercise like that student (to see their BLAST results for example)
* Unlock a locked exercise
* [Review a self diagnostic with a student](#helping-with-self-diagnostic)
* Make a student redo an exercise

### Team exercises 👥

If the exercise requires a team, you will see extra controls to manually control these teams.

In the case of a team exercise that requires 4 students,
Jarvis will by default start a team with the first student that arrives.
The second student that arrives will be added to this team,
and the exercise will start once the required number has been reached.

You can manually override the team member requirements by disbanding a team and then manually enrolling any team you'd
like. This team doesn't need to adhere to the required team member count.
This can also be used to deal with uneven group sizes,
say you have 23 students in a group, and the exercise requires teams of 4, you don't want the last 3 to get stuck,
so you can manually start them as a group of 3.

Note that disbanding a team also removed the repository they were working in.

## Helping with Self diagnostic

If the student fails this self diagnostic, depending on location settings,
they might be forced so seek out a coach to help them understand where they went wrong.

![student progress self diagnostic example](/img/staff/coaches/exercises/student-progress-self-diagnostic.png)

There are two ways to view a students self diagnostic. The first one is to go in to the module via the student's
progress page. The second option is to use the dashboard widget *"Failed self diagnostics"*.
You'll be able to see the correct answers 
(and hide them via the toggle in the top right when going through the quiz with the student).

![self diagnostic review example](/img/staff/coaches/exercises/self-diagnostic.png)

After going through the quiz with the student you can reopen the self diagnostic from the module overview.
After which the student can retake the quiz. Please note the student can get different questions on the same subjects.

## Editing self diagnostic

[Self diagnostics](#self-diagnostic) are designed to test students their knowledge on specific subjects.
For each subject different checks can be created, each check will validate the student's knowledge of the subject.

:::info
Every time a student starts a self diagnostic quiz, 1 check will be randomly selected from each subject.
:::info

Each check consists of different questions of [several available types](#self-diagnostic), to help validate the
student's knowledge.

### Multiple choice questions

![self diagnostic multiple choice](/img/staff/coaches/exercises/self-diagnostic-multiple-choice.png)
As the name implies multiple choice questions allow students to choose 1 option from several.
In which we can mark one or more answers as being correct.

### Connect the dots questions

![self diagnostic connect the dots](/img/staff/coaches/exercises/self-diagnostic-connect-the-dots.png)  
For these questions the student has to indicate items that belong together.

### Fill in the blank

![self diagnostic fill in the blank](/img/staff/coaches/exercises/self-diagnostic-fill-in-the-blank.png)   
Fill in the blank questions ask a student to complete parts of a sentence.

You'll write the sentence up top with placeholders in it, which will correspond with the answers on a position basis.

:::info
You will get a warning if the amount of blanks in the sentence and the amount of answers given aren't in alignment.
:::
