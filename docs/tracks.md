---
title: Tracks
sidebar_position: 7
---

# Tracks

|                       |                        |
|-----------------------|------------------------|
| **Optional**          | Yes                    |
| **Default**           | On                     |
| **Feature Toggle**    | Tracks                 |
| **Can be enabled by** | Location Administrator |
| **Settings**          | Off, On                |
|                       |                        |

### Description

A track is a sequence of modules that can be started at the first module, and when the entire sequence is completed, the
track is also completed.

Tracks are used to emphasize a certain course or education.

For example, in this universe you need to first complete `PHP - Beginner` to start the track. After this you need to
complete the modules: `HTML / CSS - Beginner`, `HTML / CSS - Advanced`, `JavaScript - Beginner`
and `JavaScript - Advanced` to complete the track.

![Frontend track](/img/docs/tracks/track.png)

## Orbiting track moons

In order to indicate where a track starts in the universe, there are moons orbiting around the module where the track can be started.

For example, from this module `PHP - Beginner` you can start 3 tracks.

![Module with track moons](/img/docs/tracks/module-track-moons.png)

You can click on one of the moons in order to see what tracks can be started from that module.

![Tracks that can be started from module](/img/docs/tracks/track-picker-dialog.png)

## Selecting a track

Once you have completed a module where a track can be started, you will be prompted to choose a track (You can always change this later).
After choosing a track, the required modules will glow in yellow.

![Picking a track](/img/docs/tracks/track-picker-dialog-2.png)

**Good to know:**

- You can always change the track you are working on, by selecting the track using the drop down menu in the top right of the universe.

## Role specific details

### Coach

As a coach you can see the track that the student is currently working on. You can find this by going to the student, and going to the `Progress` tab.
Here you will see the universe that the student sees, this will also display the track.

![Student currently active track](/img/docs/tracks/student-track-coach-showcase.png)

### Editor

As an editor you have the ability to create and edit tracks.

<div class="flex space-between">
To start the track editor, you first need to enable edit mode. After this you need to select/create a track from the
dropdown menu in the top right.
This will show a new universe toolbar on the left called `Track`, here you will find all the controls for editing a
track.
To add modules to a track you need to select the pencil, and click on the required modules, once you are satisfied you
can press the glowing save button to save the track.

<img alt="Track pencil toolbar" className="margin-left-small" src="/img/docs/tracks/tools-track-edit-track.png"/>
</div>

![Track editor](/img/docs/tracks/track-editor.gif)

<div className="flex space-between">
To edit the start module, name or image of the track, you can press the pencil with lines. This will open a dialog where
you can change the track settings and details.

<img alt="Track pencil with lines toolbar" className="margin-left-small" src="/img/docs/tracks/tools-track-edit-details.png"/>
</div>

<div className="flex space-between margin-top-small">
To delete a track, you can press the delete icon. This will ask you if you are certain you want to delete it.

<img alt="Track pencil with lines toolbar" className="margin-left-small" src="/img/docs/tracks/tools-track-delete.png"/>
</div>

