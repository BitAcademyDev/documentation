# Welcome to Jarvis' docs contributing guide

Thank you for investing your time in contributing to jarvis! Any contribution you make will be reflected on [docs.jarvis.bit-academy.nl](https://docs.jarvis.bit-academy.nl) ✨.

In this guide you will get an overview of how the docs are structured and how to contribute.

## Getting started
If you spot a problem with the docs, [search if an issue already exists](https://github.com/BitAcademyDev/documentation/issues). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/BitAcademyDev/documentation/issues/new).

## Structure

At the top level pages are structures around features. Each feature / domain concept has it own page. For example
exercises and attendance both have their own pages.

Within a single page, there is a fixed template to follow. See the [gamification page](/gamification) for a great example.

### Metadata table
Feature pages always start with a table to explain their metadata. The table follows the following structure:

|                       |                                      |
|-----------------------|--------------------------------------|
| **Optional**          | Yes / No                             |
| **Default**           | \<DEFAULT VALUE>                     |
| **Feature Toggle**    | \<NAME OF THE TOGGLE>                |
| **Can be enabled by** | Location Administrator / Bit Academy |
| **Settings**          | \<AVAILABLE VALUES FOR THE TOGGLE>   |
|                       |                                      |

### Description 
The second part is the description. The description should explain the feature on a high-over level. People that
aren't known with Jarvis, should be able to read this description and get an understanding of the possibilities. The
description should explain the feature from the view of a student. Role specific information for other roles is added at the bottom of
the page. 

**Tips**:
- Whenever possible, use images / gifs instead of text to demonstrate features

### Feature parts
After the introduction is clear, you want to zoom in into the specific parts of the feature. These chapters are more
free form as different features require different documentation. Feature parts should be written very granular and explain
all the little nooks and crannies related to the feature. They should be so granular that even the jarvis developers could
potentially use this as documentation for this feature. 

We advise to close off a feature part with a list of 'good to know' things, like:

**Good to know**:
- When using X note...
- When Y, then Z and Q

It a feature part is only relevant is another feature toggle is enabled, add the following table to the
top of the feature part section:

|                       |                                      |
|-----------------------|--------------------------------------|
| **Optional**          | Yes / No                             |
| **Default**           | \<DEFAULT VALUE>                     |
| **Feature Toggle**    | \<NAME OF THE TOGGLE>                |
| **Can be enabled by** | Location Administrator / Bit Academy |
| **Settings**          | \<AVAILABLE VALUES FOR THE TOGGLE>   |
|                       |                                      |

### Role specific details
The last part are role specific details. This could be an explanation for editors how to edit this feature or for
coaches how to use this feature. This part is also free-form. 