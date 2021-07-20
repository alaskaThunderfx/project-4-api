# Crab: The Game
Control a crab, pick up shells to be stored in your inventory. Click on the shells for 
a fun surprise!

## Deployed API link
[Deployed API Link](https://dry-ocean-96283.herokuapp.com/)

## Deployed Client Link
[Deployed Client Link](https://alaskathunderfx.github.io/project-4-client/) 

## Client GitHub Repository
[Client Repo Link](https://github.com/alaskaThunderfx/project-4-client)

## API Technologies Used
- GitBash
- GitHub
- Postman
- JavaScript
- MongoDB
- Mongoose
- Express API

## Unsolved Issues
---
Currently the main issues are how the inventory displays the characters items. There 
are currently no world collide bounds set so a user can go off the screen for all 
eternity :(. Also, the loaded character list does not update dynamically if you click 
it first, then create a new character.

## Planning, Process, and Problem-Solving Strategy
---
When coming up with this app, all I knew is I wanted to create a project using Phaser as the main front-end technology. 

Planning the back-end was easy, I knew that the only resource a user would have would be their characters. I spent the first day altering the user data model from the template so that instead of email, it just asks for a user name. I also created the character model as well as the paths. I tested these all with Postman to confirm that they worked. 

They next big hurdle was figureing out how exactly to start a Phaser project... I had spent some time with the Codecademy courses but this was my first independant project. I found a popular Phaser project template and I started with that. The next big hurdle was figuring out how to make API calls... There weren't any straight forward methods I could find that were native to Phaser, so I first attempted using AJAX and jQuery. I was having issues getting that to work so, seeking alternatives, I came across the Fetch built-in JavaScript method. 

After making some successful API calls using fetch and the templates logo image, I begin perusing websites that contain free game art (the website I ended up landing on was [opengameart.org](https://opengameart.org/)). I found [this adorable gif](https://opengameart.org/content/pixel-art-crab-sprites), and the game concept basically formed from there. 

In order to animate sprites in Phaser, you need to first create sprite sheets. I hadn't done this before, but I fortunately had recently met someone in the Phaser server in Discord that I had been communicating with for a bit. He recommended a program called [Aseprite](https://www.aseprite.org/) that I ended up purchasing. Similar to how Photoshop works, if you open a gif within Aseprite, it automatically splits it into each individual frame. From there I was able to make sprite sheets for the animations I wanted to use. The best way to do this is to make an entire sheet and split it up with code but I wasn't totally sure how to do this, so I made individual sheets for each animation. Some of the ones I used are:

![Standing](https://i.imgur.com/G1MNtKr.png)

![Walking](https://i.imgur.com/glMZSfU.png)

![Throwing](https://i.imgur.com/winRwny.png)

I also knew I wanted a beach background and a logo. I couldn't find any that really worked, so I made my own (they aren't exactly masterpieces, so, don't judge too harshly):

![Logo](https://i.imgur.com/XB8YvO0.png)

![background](https://i.imgur.com/SAKDIFy.png)

Along with some other little images I found on opengameart.org I had all the graphics I needed. Once I had all the images and tested API calls I was able to go ahead start building the actual game. The guy from Phaser's Discord server was a HUGE help during this ([here's a link to his GitHub](https://github.com/SkyAlpha)). He was great about letting me ask questions about Phaser syntax and concepts, as well as making very helpful code suggestions.

A notable road block I had that took me a while to figure out was how to access and store data from a fetch. I kept getting the inventory back as a long string of all the things inside of it. They were separated by commas though, so I was able to .split() them.

Anyway, I'm super proud of what I made in the 6 total days I had to make this! It was an extremely educational and challenging/fun experience.

## Expected API Routes
| Route | Method(s) |
|-------|--------------|
| `/sign-up` | POST |
| `/sign-in` | POST |
| `/sign-out` | DELETE |
| `/change-password` | PATCH |
| `/characters` | GET, POST |
| `/characters/:id` | GET, POST, DELETE |

## ERD
![Color Formulator ERD](https://i.imgur.com/QJsy0YW.png)
