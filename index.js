const stations = require('./src/utils');

const devices = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18]
];

const linkStations = [
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
]

// findStations
stations.solution(devices, linkStations);