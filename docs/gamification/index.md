---
title: Gamification
sidebar_position: 3
---

# Gamification

|                       |                          |
|-----------------------|--------------------------|
| **Optional**          | Yes                      |
| **Default**           | FULL                     |
| **Feature Toggle**    | Gamification             |
| **Can be enabled by** | Location Administrator   |
| **Settings**          | Off, FULL, LEVEL_XP_ONLY |
|                       |                          |

### Description

We have a couple of gamification features to inspire users to engage more with the content.

## Level & XP

![Level and XP bar](/img/docs/gamification/xp-bar.png)

Users can collect experience points(XP) from different [actions](#wich-actions-yield-xp).
Once the user has reached enough XP for a level up, a level up screen will be shown and the user will have gained an
extra level.
After this the amount of XP needed for a level up is increased.

![Level up screen](/img/docs/gamification/level-up.png)

### Which actions yield XP

We calculate the amount of XP internally, we do not specify the exact amount of XP here, only a representation.

| Action                      | XP yield |
|-----------------------------|----------|
| Reviews                     | Low      |
| Theory exercise completed   | Low      |
| Practice exercise completed | Medium   |
| Self diagnostic completed   | Medium   |
| Project completed           | High     |

**Good to know:**

- The XP yield of theory and practice exercises changes with their difficulty. A higher difficulty and time indication
  will result in more XP.
- If an exercise has been reopened or restarted, the same amount of XP that the exercise yielded, will be removed from
  the students profile.

## Leaderboard

The leaderboard shows the current students with the highest level and XP.

![Leaderboard](/img/docs/gamification/leaderboard.png)

**Good to know:**

- If a student has the state *'internship'*, *'graduated'* or *'blocked'* they will not show up on the leaderboard.
- The leaderboard can be filtered to only show a certain group.

## Level gates

In the universe we have guarded some modules behind a level gate, these level gates will unlock when the required level
is reached.

For example, here the user will be able to enroll in the "Python" module when they reach level 25.

![Level gate](/img/docs/gamification/level-gate.png)

## Streaks

The Streaks feature helps to motivate a student to do something every day.
A Streak represents how many consecutive days you have worked on [exercises](exercises/introduction) within Jarvis.

Here for example the student has a Streak of 3 days.

![Streak of 3 days](/img/docs/gamification/streak.png)

### Extending a Streak

The Streak can be extended by a completing an [exercise](exercises/introduction) or by pushing a commit to an exercise on Bitlab
using Git.

If you do not extend your Streak, and have run out of [Streak freezes](#streak-freezes), your Streak will be ended.

### Streak freezes

Sometimes you don't have time to extend your Streak. For these cases we have implemented Streak freezes.

To see how many freezes you have left you can hover over the Streak icon. The red flame indicates your current Streak.
And the blue snowflake indicates the amount of freezes that you have left.

![Streak freezes](/img/docs/gamification/streak-freeze-hover.png)

#### Obtaining Streak freezes

Streak freezes are handed out at different streak lengths.

| Streak length | Streak freezes |
|---------------|----------------|
| 5             | 1              |
| 10            | 2              |
| 25            | 3              |

**Good to know:**

- After a Streak of 25, you get 3 freezes every 25 days. For example you get 3 freezes at 50, 75, 100, and so on.
- You can have a maximum of 5 Streak freezes

#### Using a Streak freeze

Streak freezes are used automatically. When you have a freeze available, it will be used when you did
not [extend](#extending-a-streak) your Streak.
The next day you can still [extend](#extending-a-streak) your streak like normal.

Here you can see that the Streak was frozen on Thursday, indicated by the blue day.

![Frozen Streak](/img/docs/gamification/streak-frozen.png)

## Badges

Badges are another gamification feature. This enabled students to acquire a badge.
All badges are different, and have different requirements to acquire them.

![Badge](/img/docs/gamification/badge.png)

**Good to know:**

- If a student has acquired a badge it will show it in a notification
- The badges of a student can be found by going to a student, and selecting the *'Badges'* tab.
- You can also forcefully grant a badge to a student, by going to the *'Badges'* tab, opening the bottom right menu, and
  selecting *'Issue badge'*.
- Some badges are not given automatically, but have to be given manually.
