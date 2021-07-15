# Multiplayer Browser Game
I don't have a super clear direction for this yet, but I really want to integrate web sockets and Phaser.js (I've been studying Phaser.js in my spare time via Codecademy, and there are tons of resources for setting up multiplayer games with web sockets, specifically Socket.io). Since most of the resources I've seen have steps for Node.js and Express, Express and Phaser.js would be the technologies I would be using for this.

## User Stories
- A user should be able to sign up/in/out and be able to change their password
- Upon signing in a user should either be assigned or be able to choose a
sprite that they control (I’m thinking that the game state is something that
can be CRUD’d on? At this point I was thinking that maybe when they start the
game, if the user has previously played a game, I guess a check could be
performed (a get request to the database) to see if they have a previously made
character, and if so, then load that state? Maybe offer the option to start a
new character, or delete a previous character? I haven’t totally decided how
it’s supposed to work but, users will be able to interact with each other some
how and a result of those interactions will be state changes. I don’t want to
get too deep in to the game logic (keeping it very simple so that it’s
realistically completable). I’m thinking maybe there’s a small field in which
users can move around, and maybe there are things they can interact with that
allow them to perform actions on the other user? I don’t totally know but I’m
pretty sure as I go I will be able to come up with those details)


## Wireframe
![Color Formulator Wireframe](https://i.imgur.com/ZPLoiO8.png)

## ERD
![Color Formulator ERD](https://i.imgur.com/QJsy0YW.png)
