# myReactjsProject

This is my attempt on learning the Reactjs framework.

In this first project, I am attempting to build a trello clone without using any external package.

## Pre-requisite installation

1. Installing npm and Node on WSL2, Ubuntu distro:
https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2#:~:text=To%20install%20the%20Node.js%20extension%20pack:%20Open%20the,installed%20for%20use%20with%20your%20Windows%20operating%20system.
1. Bootstraped using [‘create-react-app’](https://github.com/facebook/create-react-app)
    - Project was initiated via the command `npm init react-app my-app`

## Software Versions

|Software|Version|
|---|---|
|npm|7.5.3|
|node|v15.10.0|
|reactjs|17.0.1|

## Instructions for Starting the App

```
>>> cd my-app/
>>> npm start
```

## Component Hierarchy in index.js

Board
- SubBoard ("Pending" sub board)
    - subBoardName div
    - SubBoardContent
        - taskCount div
        - taskArea div
            - taskCard div
                - taskTitle input
                - taskContent input
        - ButtonDiv div
            - addTaskButton button
- SubBoard ("In Progress" sub board)
    - ... ...
- SubBoard ("Completed" sub board)
    - ... ...


## Features

- Increment count when "(+) ADD TASK" button is clicked.
- Add as many tasks on any sub-board
- Edit tasks name and content inline
- Reorder task card

## Version
- V0.0.1a

## Roadmap

### TODO

- Drag and drop any task card between sub-boards.
    - Might need Board global taskid.
- Retrieve data from a DB for data persistence.
- Add subboard.

### Bugs

- cards reordering bug.

