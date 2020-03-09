# Windows 10X Live Tile Concept

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](/LICENSE)
[![React 16.13](https://img.shields.io/badge/React-16.13-blue.svg)](https://reactjs.org)
![PRs: welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

This project is a concept of the new **Windows 10X interface with the benefits of Live Tiles**.  
The goal is to demonstrate that even **with new Fluent Design icons, Live Tiles still make sense**: they just need to be modernized a little bit.

To offer a more immersive design concept, it has been **implemented for the web using ReactJS**.  
So, you can try it out [here](https://Sylvain2703.github.io/Windows10XLiveTile) with any modern web browser.

![Windows 10X Live Tile](/docs/screenshot.png)

## Notes

- Tiles aren't clickable: it's not an app launcher but a Start Menu concept.
- Clicking the TaskView button will enable/disable the fullscreen mode.
- Works better on Microsoft Edge (Chromium or EdgeHTML) and Google Chrome (`background-filter` support is required for a more Fluent Design experience).


## Developer notes

### Installation

- Install [Node.js](https://nodejs.org/).
- Clone the code repository:  
`git clone https://github.com/Sylvain2703/Windows10XLiveTile.git`
- `cd Windows10XLiveTile` to enter the right directory.
- `npm install` to install dependancies.
- `npm start` to run the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Edit tiles content and task bar entries

In the [src/StaticDatas/Tiles.json](/src/StaticDatas/Tiles.json) file, you will find all the tiles content.  
Under the `"liveTile"` JSON variable, the schema is closely the same as defined by Microsoft for building Live Tiles with UWP APIs (see [Tile content schema](https://docs.microsoft.com/en-us/windows/uwp/design/shell/tiles-and-notifications/tile-schema) and [Adaptive tile templates](https://docs.microsoft.com/en-us/windows/uwp/design/shell/tiles-and-notifications/adaptive-tiles-schema)).

In the [src/StaticDatas/TaskBar.json](/src/StaticDatas/TaskBar.json) file, you will find all task bar entries. 


### Build for production

Use `npm run build` to build the app for production.  
It correctly bundles the React app in production mode and optimizes it for the best performance.