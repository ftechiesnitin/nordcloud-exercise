const expect = require('chai').expect;
const stations = require('./utils');

describe('findDistance()', () => {

    it('should find the distance between two points', () => {
    
        let pointA = [0, 0], pointB = [10, 10], result = 14.142135623730951;

        let distance = stations.findDistance(pointA, pointB);

        expect(distance).to.be.equal(result);

    });

    it('should result in NaN', () => {
    
        let pointA = [null, null], pointB = [], result = NaN;

        let distance = stations.findDistance(pointA, pointB);

        expect(distance).to.be.equal(result);

    });
});

// describe('findPower()', () => {

//     it('should find the power reach and distance', () => {
    
//         let pointA = [0, 0], pointB = [10, 10], result = 14.142135623730951;

//         let distance = stations.findDistance(pointA, pointB);

//         expect(distance).to.be.equal(result);

//     });
// });