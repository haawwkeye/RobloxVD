# RobloxVD
RobloxVD combines Google's Speech API and Node.js to allow users to speak into a microphone to loosely repeat what they've said in Roblox.
Currently v1.0!

### Dependencies:
 - Google Chrome
 - Node.js

## How to use
First, download the current source of the entire project, and extract it to a directory.
Click on `cmd.cmd` and type in these commands (it may require reopening it a few times):
```
npm install express --save
npm install body-parser --save
npm install cors --save
```
You should be able to open `cmd.cmd` one last time, and type `node serv.js` and it should show
```
[SERVER]: Starting webapp !
[SERVER]: Webapp is open at `localhost:80`!
```
*If it doesn't work, check the* ***troubleshooting*** *tab.*
At this point, opening `localhost` in your browser should show a large red button with a textbox under.
If so, then it's worked! Keep this command prompt window open while you're using RobloxVD or it won't work!

To setup your game with RobloxVD, go into the `lua` folder, and find `server.rbxm`.
Import that into the game of your choice with RightClick -> Insert from file..

You'll need your global ip for this. You can easily get this by a quick google search!
If it looks something like 192.xxx then it's likely a local ip, which is only functional in Studio.
To use this in-game, you'll need to use your global ip that's attached to your router.

Open the script you've imported, and on the first line, replace
```
local YOURIP = "YOURIPHERE"
```
with the ip you have.
Make sure your game is published, and it has access to send HTTP requests.
You can change this inside Game Settings -> Security -> HTTP Requests Enabled. Switch it on.

At this point, you should be all good for testing inside of Studio! Press play in Roblox Studio and go to `localhost`.
Type in your name into the textbox, and press the red record button. It will request microphone access and should start recording!
*If it doesn't work, check the* ***troubleshooting*** *tab.*

To connect this to the rest of the world, you'll need to port forward. This will be different depending on the brand of router you have.
You can figure out how to port forward it with a couple of google searches. You may have to copy some info off the back of the router to do this.
The only port that needs to be forwarded is `80`. It should work globally after that, and you should be ready to go!

#### Enjoy!

## Troubleshooting
#### Console Error
You likely haven't installed all the required modules. Otherwise, please shoot me a message on Twitter, Devforum, or GitHub! I'd love to help you.

#### "Failed to connect to server." even though it's definitely working.
You may be using an incorrect ip. Double check everything is all good!

#### "[Object object]"
Make sure you're opening `localhost`, and not opening the `.html` file in your browser.
`localhost` will serve `api.html` by itself, but it'll allow for it to connect to the server properly.

If none of these helped, please send me a message on Twitter, Devforum, or GitHub! I'm trying to fix all the issues and doing this will make my job slightly easier :)
