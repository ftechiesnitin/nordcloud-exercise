/**
 * Calculate the distance between 2 points in 2 dimensional space
 * @param {Number[]} pointA [x,y]
 * @param {Number[]} pointB [x,y]
 * @returns {Number}
 */
function findDistance(pointA, pointB) {
    return Math.sqrt(
        Math.pow(Math.abs(pointA[0] - pointB[0]), 2) + Math.pow(Math.abs(pointA[1] - pointB[1]), 2)
    );
}

/**
 * Calculate the power of link station with the given reach and distance from device
 * @param {Number} reach of the link station
 * @param {Number} distance to the link station from device
 * @returns {Number}
 */
function findPower(reach, distance) {
    return (distance > reach ? 0 : Math.pow((reach - distance), 2))
}

/**
 * Find the most suitable link station for given point and stations
 * @param {Number[]} point of the device [x,y]
 * @param {Number[][]} stations 2d array of all the staitions with coordinates and range
 * @returns {Number[]}
 */
function findSuitableStation(point, stations) {

    return stations.filter((station, i) => {
        let range = station[2], coordinates = station.slice(0, 2),
            power = findPower(
                range, 
                findDistance(point, coordinates)
            );

        station.splice(3, 0, power)
        return power > 0;
    }).sort((stationA, stationB) => stationA[3] < stationB[3])[0];
}

/**
 * Find the most suitable link station for all points and stations
 * @param {Number[][]} point of the device [x,y]
 * @param {Number[][]} stations 2d array of all the staitions with coordinates and range [x,y,r]
 * @returns {String}
 */
function solution(devices, stations) {
    devices.forEach(device => {
        let bestStation = findSuitableStation(device, stations);

        if(bestStation) {
            console.log("Point [", device[0], ',', device[1], "]: Best link station at [", bestStation[0], ',', bestStation[1], "] power: ", bestStation[3].toFixed(2));
        }else {
            console.log("Point [", device[0], ',', device[1], "]: No link station within reach");
        }
    });
}

module.exports = {
    findDistance,
    findPower,
    findSuitableStation,
    solution
}