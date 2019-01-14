# OSRS Skill Visualization

Made By Kyle Weekley
# Process

## Intention

I used the RuneScape API for this project. RuneScape is a popular MMO based primarily around gaining levels in a variety of skills. Specifically, I used the "OldSchool Hiscores" portion of the API, which returns a list of values corresponding to a character's skill levels. My goal was to use this data to make a pleasing graphic highlighting some of the player's achievements in the game.

## Issues

I ran into a few problems early on in the project. 

First, I was unable to get data back from the API due to CORS errors. Thanks to Professor Chin, I was able to overcome this problem, but I lost a good chunk of work time while wrestling with the issue. 

Second, the format in which the API returns data is not very helpful. Rather than a nicely formatted selection of JSON, my calls return a mass of numbers broken up by comma and line breaks. A significant amount of time was spent parsing the data into a usable format. 

## Missing Features

These difficulties left me with less time to work on the remainder of the project. As such, there are a number of missing features which I would have liked to include, such as:

* The ability to compare one character to another.
* Saving of radio button settings between sessions.
* Better aesthetics across the board, including an animation of the columns rising.

# Existing Features

## Searching

The main function of the page is to return information about a player's character using their display name. To get a varied sampling of how the page can look, I recommend searching the following character names:

* "Zezima" (the default search term), for an example of a mid-to-high level character.
* "BizarBunny", for an example of a low-level player with zero experience in many skills.
* "Lynx_Titan", for an example of a character possessing almost as much experience as the game can keep track of.

Almost any series of characters can be someone's character name, so typing random words or numbers can have interesting results. A character can even be named with only one character, like "K".

## Sorting the Data

The first set of radio buttons change the scale of the graph's y-axis.

Without getting into too much detail, RuneScape's skills are "leveled up" by gaining experience points, or XP. The maximum level in any skill is 99, and the number of experience points required to level up increases exponentially as a character grows stronger in a discipline. 

* The first option, "Show Skill Levels", draws the columns using the character's level from 1-99. (Level 50 is the halfway point to 99).
* The second option, "Show XP Scaled to Level 99", draws the columns using the character's XP value in the skill, from 1-13,034,431 which is the amount of experience points needed to reach level 99 in a skill. Due to the exponential curve, this option can appear far more depressing. (92 is the halfway point to 99).
* The third option, "Show XP scaled to 200m", functions similarly to the second option, but it replaces the ceiling value of 13 million with 200 million experience. This is the amount of XP your character can obtain before the game gives up and stops counting. For some reason, people feel the need to achieve this goal despite a complete lack of reward for doing so. (Level 99 is 6.5% of the way to 200m)

The second set of radio buttons are more straightforward. They affect the horizontal sorting of the skills in the graph. They can be sorted alphabetically or in order according to the character's mastery of them.

## The Rest

A few statistics about the character appear below the graph, and the link above the radio buttons leads to the official page where this same data is displayed by RuneScape's developers.

# Requirements

### 3 Controls:

It's difficult to change the data received from this API in any way other than changing the searched character name. As such, I focused more on changing the ways in which the same data could be displayed.

1. Search Bar for entering term
2. Radio Buttons (two sets) to change how data is displayed
3. Link to another webpage based on the entered search term

### Last Search Term is Remembered

### Images are reasonable sizes
(most are only 20x20px, even)

### Coding standards are followed, I hope

### Page Reports Current State
(A piece of text displays when a search is occurring or has failed)

### HTML and CSS validate, and Code is Commented

# Self-Grading:

While I am proud of the final product, I feel that this project could be dragged down by some issues with D.R.Y. as well as a lack of fancy CSS or extra features. I still believe that this project could earn an A, but I'm not expecting a perfect score. 

## (Images are the property of Jagex Limited and were obtained from the game OldSchool RuneScape) 


