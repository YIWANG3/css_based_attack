# CSS Based Attack
## How to run
```
cd EvilServer
npm install
npm start
EvilServer will start at 13.57.38.41:3000

cd Victim
npm install
npm start
Victim Server will start at localhost:80
```
### 1. Mouse Track
Open two tabs: 
```
localhost/table    // Victim's website
13.57.38.41:3000/table/track.html   // Track Victim's mouse position
```
Then you can see all you mouse path show on another window.

### 2. Hover, Click Track 
Open two tabs: 
```
localhost/amazon   // Victim's website
13.57.38.41:3000/amazon/track.html   // Track the hover, click action of Victim's website
```
Then you can see hover, click event show on another window.

### 3. Inject one billion laugh SVG
open
```
localhost/svg
``` 
Then you can see this page is loading forever, until it corrupts.

### 4. Media Query
open
```
localhost/mediaQuery
``` 
Then you can see all information in EvilServer's log.

### 5. KeyLogger
open
```
localhost/keylogger/    // Victim's website
13.57.38.41:3000/keylogger/track.html   // See user's input
```

### 6. KeyLogger with Font Face
open
```
localhost/keylogger_font/    // Victim's website
13.57.38.41:3000/keylogger_font/track.html   // See user's input
```
