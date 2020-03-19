# CSS Based Attack
## How to run
```
cd EvilServer
npm install
npm start
EvilServer will start at localhost:3000

cd Victim
npm install
npm start
Victim Server will start at localhost:80
```
### 1. Mouse Track
Open two tabs: 
```
localhost/table    // Victim's website
localhost/table/track.html   // Track Victim's mouse position
```
Then you can see all you mouse path show on another window.

### 2. Hover, Click Track 
Open two tabs: 
```
localhost/amazon   // Victim's website
localhost/amazon/track.html   // Track the hover, click action of Victim's website
```
Then you can see hover, click event show on another window.

### 3. Inject one billion laugh SVG
open
```
localhost/svg
``` 
Then you can see this page is loading forever, until it corrupts.
