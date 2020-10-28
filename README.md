## Purpose

A lightweight version of Philip Klostermann's youtube-info npm module. Similar speed but smaller and fixes certain issues. Only gives the url and title to save on space and fix problems.

**This project is in no way affiliated with YouTube.**

## Installation

Git clone the repository and run "npm i" to download all the node modules from the package.json.

## Usage

Just import the index.js from the "video" folder. Then run the imported function with the videoID as input. The function will return a promise so you have to process it with .then() or async/await.

``` javascript
var fetchVideoInfo = require('${path to "video/index.js"}');
fetchVideoInfo(videoId).then(results => console.log(results))
```

| Parameter     | Meaning       |
|:--------------|:---------------|
| videoId       | ID of youtube Video |

## Result

```
{
  url: `{video url}`,
  name: `{video name}`
}
```
