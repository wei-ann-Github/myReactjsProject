# myReactjsProject

This is my attempt on learning the Reactjs framework.

In this first project, I am attempting to build a trello clone without using any external package.

## Pre-requisite installation

1. Installing npm and Node on WSL2, Ubuntu distro:
https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2#:~:text=To%20install%20the%20Node.js%20extension%20pack:%20Open%20the,installed%20for%20use%20with%20your%20Windows%20operating%20system.
1. Bootstraped using [‘create-react-app’](https://github.com/facebook/create-react-app)

## Software Versions

|Software|Version|
|---|---|
|npm|7.5.3|
|node|v15.10.0|

## Instructions for Starting the App

```
>>> cd my-app/
>>> npm start
```

## APP Hierarchy

Board component
- Subboard component
    - subboardname div class
    - CardCounter component
    - taskrow div class
        - Card component
    - button div class
        - Addtaskbutton component

## Features

- elements layout
- show task name on task cards
- Increment count when "(+) ADD TASK" button is clicked.

## TODO

> Add as many tasks on any sub-board
> Drag and drop any task card between sub-boards
> Reorder task card
> Edit tasks name and content inline
