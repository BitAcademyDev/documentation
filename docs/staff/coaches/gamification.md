---
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

![Level and XP bar](/img/staff/coaches/gamification/xp-bar.png)

Users can collect experience points(XP) from different [actions](#wich-actions-yield-xp). 
Once the user has reached enough XP for a level up, a level up screen will be shown and the user will have gained an extra level.
After this the amount of XP needed for a level up is increased.

![Level up screen](/img/staff/coaches/gamification/level-up.png)

### Wich actions yield XP

We calculate the amount of XP internally, we do not specify the exact amount of XP here, only a representation.

| Action                            | XP yield |
|-----------------------------------|----------|
| Reviews                           | Low      |
| Theory exercise completed         | Low      |
| Practice exercise completed       | Medium   |
| Self diagnostic completed         | Medium   |
| Project completed                 | High     |

**Good to know:**
- The XP yield of theory and practice exercises changes with their difficulty. A higher difficulty and time indication will result in more XP.
- If an exercise has been reopened or restarted, the same amount of XP that the exercise yielded, will be removed from the students profile.

## Leaderboard

The leaderboard shows the current students with the highest level and XP.

![Leaderboard](/img/staff/coaches/gamification/leaderboard.png)

**Good to know:**
- If a student has the state *'internship'*, *'graduated'* or *'blocked'* they will not show up on the leaderboard.
- The leaderboard can be filtered to only show a certain group.

## Level gates

In the universe we have guarded some modules behind a level gate, these level gates will unlock when the required level is reached.

For example, here the user will be able to enroll in the "Python" module when they reach level 25.

![Level gate](/img/staff/coaches/gamification/level-gate.png)

## Badges

Badges are another gamification feature. This enabled students to acquire a badge.
All badges are different, and have different requirements to acquire them.

![Badge](/img/staff/coaches/gamification/badge.png)

**Good to know:**
- If a student has acquired a badge it will show it in a notification
- The badges of a student can be found by going to a student, and selecting the *'Badges'* tab.
- You can also forcefully grant a badge to a student, by going to the *'Badges'* tab, opening the bottom right menu, and selecting *'Issue badge'*.
- Some badges are not given automatically, but have to be given manually.
