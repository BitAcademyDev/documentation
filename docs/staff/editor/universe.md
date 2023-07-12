---
sidebar_position: 2
---

# Universe

The universe is where modules are displayed in a way that students can follow a certain direction or track.
The role of the editor is to create these universes.

## Viewing the universe

When viewing the universe there are a couple of shortcuts and inputs to remember.

| Action         | Result              |
|----------------|---------------------|
| R              | Reset view          |
| CTRL + F       | Search for exercise |
| Scroll         | Zoom in and out     |
| Click and drag | Look around         |

### Module attributes

In the universe a module can have certain attributes.

#### Certificate

When a certificate is available for the module, it will be represented by a small yellow circle, with a certificate icon, on the top left of a module.

![Module certificate](/img/staff/editor/universe/module-certificate.png)

#### Education level

When the education level of a module is either *'Intermediate'* or *'Advanced'*, it will be represented by a small red circle, with a *'+'* or *'++'* respectively, on the top right of a module.

![Module education level](/img/staff/editor/universe/module-education-level.png)

#### Students currently active

When there are students actively working on the module, it will be shown by a small light blue circle, on the bottom left of the module.

When there are students that have completed the module, it will be shown by a small green circle, on the bottom right of the module.

![Module students currently active](/img/staff/editor/universe/module-student-progress.png)

#### Orbiting track moons

When a [track](#tracks) can be started from a module, it will get an orbiting moon around it. This moon represents the track that can be started from the module.
You can click on one of the moons to see what tracks can be started from the module.

For example, from this module the student can start three tracks.

![Module orbiting track moons](/img/staff/editor/universe/module-track-moons.png)

## Cloning a universe

If you are currently using a universe from a different location, it means that you are not the owner of the universe.
And cannot edit the universe. The universe will in fact update if the other location edits it.

If you want to make changes to it, you can clone it. This means Jarvis will create a copy of the current universe and make it yours.

```warn
You will no longer receive automatic updates of the old universe,
and you will be responsible for updating / maintaining the flows.
```

You can clone a universe by first switching the edit mode switch to on.

![Edit mode switch](/img/staff/editor/universe/edit-mode-switch.png)

This will show you a message that you are not the owner of the universe. Make sure you understand what the warning message means, and you agree to these terms.
When you do agree, you can click the green `Create universe` button. After you clicked this button, the cloning process will take about 10-30 seconds, depending on how big the universe is.

![Not the owner of the universe message](/img/staff/editor/universe/not-the-owner-message.png)

## Editing the universe

If you are the owner of your universe, you can edit it. You can edit the universe by switching the edit mode switch to on.

![Edit mode switch](/img/staff/editor/universe/edit-mode-switch.png)

After this you can click and drag on modules or other cells to move them around. To save the current layout, you can press the save button in the top left.

You can also resize almost all cells, you do this by first clicking on the cell, selecting it, and dragging the small gray circle on the bottom right.

To remove a cell, click on the cell, selecting it, and clicking the red `X`.

![Moving a module](/img/staff/editor/universe/move-module.gif)

### Adding cells to the universe

#### Modules

To add a module to the universe, open the menu on the bottom right by clicking on the red circle menu.
Click on `Connect module`, this will open a dialog where you can search for a module to connect to your universe.

#### Level gates

To add a level gate to the universe, open the menu on the bottom right by clicking on the red circle menu.
Click on `New level gate`, this will open a dialog where you can set the level for the level gate.

#### Groups

Groups can be used to visually group certain modules together. We have 2 types of groups, a rectangle, and a circle.
These can be added to the universe by clicking on them.

![Tools groups](/img/staff/editor/universe/tools-groups.png)

Groups also move a bit differently, because they can stack on top of each other.
To move a group, you first have to select it, then unlock it by clicking on the lock in the top right, after this you can move the group around.

![Moving a group](/img/staff/editor/universe/move-group.gif)

#### Labels

Labels can be used to add text to the universe, these are often used together with a [group](#groups). You can add a label by clicking on the `Tt` icon.

![Tools label](/img/staff/editor/universe/tools-label.png)

### Lines and flow

In order to create a flow inside your universe that the students will follow, you need to connect modules together using lines.
This will make the selected module a prerequisite for the module it is connected to. This means that the current module has to be completed before the student can continue.

For example, here the student first has to complete the module `HTML / CSS - Beginner` before the student can start on `HTML / CSS - Advanced`

![Connect module](/img/staff/editor/universe/connect-module.gif)

To remove a line between 2 modules, you need to hover over the line, and press the red `X` button.

### Start module

The start module can be selected using the dropdown menu in the top right. This is only used for the student's tour. Not the start of the universe.
The start of the universe is considered to be every module that does not have a [prerequisite line](#lines-and-flow).

### Snapping

To align modules, groups, labels and lines we have introduced a snapping feature. This feature will automatically snap the cell you are moving to adjacent cells.

![Snapping modules](/img/staff/editor/universe/snapping-modules.gif)
![Snapping lines](/img/staff/editor/universe/snapping-lines.gif)

## Tracks

When you have multiple tracks in your universe you can highlight these for the student.

The start of a track is highlighted with a white glow. The required modules to complete the track are highlighted in yellow.

![Frontend track](/img/staff/editor/universe/track.png)

### Track editor

To start the track editor, you first need to enable edit mode. After this you need to select/create a track from the dropdown menu in the top right.
This will show a new universe toolbar on the left called `Track`, here you will find all the controls for editing a track.
To add modules to a track you need to select the pencil, and click on the required modules, once you are satisfied you can press the glowing save button to save the track.

![Track pencil toolbar](/img/staff/editor/universe/tools-track-edit-track.png)

![Track editor](/img/staff/editor/universe/track-editor.gif)

To edit the start module, name or image of the track, you can press the pencil with lines. This will open a dialog where you can change the track settings and details.

![Track pencil with lines toolbar](/img/staff/editor/universe/tools-track-edit-details.png)

To delete a track, you can press the delete icon. This will ask you if you are certain you want to delete it.

![Track pencil with lines toolbar](/img/staff/editor/universe/tools-track-delete.png)
