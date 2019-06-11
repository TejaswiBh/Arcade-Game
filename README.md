# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Scratch Project Link](#Scratch-Project-Link)
- [How to observe Output](#How-to-observe-Output)
- [Steps done](#Steps-done)
- [How to play the Game](#How-to-play-the-Game)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


##  Scratch Project link

By clicking on the below `link` we can download the **Scratch Project** for `arcade game`.

<https://github.com/udacity/frontend-nanodegree-arcade-game.git>

##  How to observe Output

For observing the `output` initially after extracting the project and after making changes in files open the **index.html** file in the working directory.

##  Steps done

  ___ I have done the following steps for completing the project ___

  * Initially I have downloaded the `zip file` and unzipped it and opened the **index.html** file.

  * First, I have created the `player` object and gave the position to the player.I have displayed the player in that position written in Player `render` function.

  * Then, I ensured that player can move `left`, `right`, `top`, `bottom` and also made sure that player doesn't move beyond the boundaries of the canvas which is written in Player `handleInput` function.

  * I have created an array named `allEnemies` and pushed three enemy positions(stored in enemyLocation) into it .Also, I have given the speed for enemies and displayed those enemies which is written in Enemy `render` function.

  * I ensured that enemies moves straight along the `canvas` width completely and again starts from their initial position.

  * While playing the game, if the player collides with the enemy then the `popup` window is displayed with messages like('You have lost the game, playAgain button') which is written in Enemy `update` function and player comes to initial position.

  * After the game is won by the player i.e, after he reaches the water then the `popup` window is displayed with Congratulations message and playAgain button which is written in Player update function.

  * `playAgain` button makes sure that game is `restarted`.

## How to play the Game

Press `arrow keys` to move the player up,down,left,right so that he cannot touch the enemies.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
