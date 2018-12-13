# nordcloud-exercise

# Application:
### How to run the application?
- Clone this repository.
- Run `npm install` to install test libs.
- After setting up run `npm start` execute.
- If you wanna play around, you can change the link stations or devices co-ordinates and range from `index.js` in project root.
- Run test cases with the command `npm test`, it will run all the test cases present in the project.
- Feel free to add more and test.
- To check the linting config follow `.eslintrc.json`.
- Test linting configa and fix the errors with command `npm run lint`

### Folder Structure
```bash
├── src
│   └── utils.js
├── test
│   └── index.js
├── .eslintrc.json
├── .gitignore
├── Dockerfile
├── package.json
├── README.md
└── index.js
```

## Problem solving
- Create a function that solves the most suitable (with most power) link station for a device at given point [x,y]. 
Use JavaScript runnable in modern browser or Node.js.

This problem can be solved in 2-dimensional space. Link stations have reach and power.

A link station’s power can be calculated: 
`power = (reach - device's distance from link station)^2 if distance > reach, power = 0`

Function receives list of link stations and the point where the device is located.
Function should output following line:
_“Best link station for point x,y is x,y with power z”_
Or:
_“No link station within reach for point x,y”_

Link stations are located at points (x, y) and have reach (r) ([x, y, r]): 
```
[
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12]
]
```
Print out function output from points (x, y): 
`(0,0), (100, 100), (15,10) and (18, 18)`.