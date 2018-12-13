const expect = require('chai').expect;
const stations = require('./utils');

describe('Test Cases', () => {

    describe('findDistance()', () => {

        it('should find the distance between two points', () => {
        
            let pointA = [0, 0], pointB = [10, 10], result = 14.142135623730951;

            let distance = stations.findDistance(pointA, pointB);

            expect(distance).to.be.equal(result);

        });

        it('should result in NaN', () => {
        
            let pointA = [null, null], pointB = [];

            let distance = stations.findDistance(pointA, pointB);

            expect(distance).to.be.NaN;

        });
    });

    describe('findPower()', () => {

        it('should find the power as 0', () => {
        
            let reach = 5, distance = 14.142135623730951, result = 0;

            let power = stations.findPower(reach, distance);

            expect(power).to.be.equal(result);

        });

        it('should find the power as 100', () => {
        
            let reach = 20, distance = 10, result = 100;

            let power = stations.findPower(reach, distance);

            expect(power).to.be.equal(result);

        });

        it('should find the power as NaN', () => {
        
            let reach, distance = 10;

            let power = stations.findPower(reach, distance);

            expect(power).to.be.NaN;
            
        });
    });

    describe('findSuitableStation()', () => {

        it('should find the most suitable station', () => {
        
            let point = [0, 0], linkStations = [
                [0, 0, 10],
                [20, 20, 5],
                [10, 0, 12]
            ], result = [0, 0, 10, 100];

            let station = stations.findSuitableStation(point, linkStations);

            expect(station).to.deep.equal(result);

        });

        it('should not find the most suitable station', () => {
        
            let point = [100, 100], linkStations = [
                [0, 0, 10],
                [20, 20, 5],
                [10, 0, 12]
            ];

            let station = stations.findSuitableStation(point, linkStations);

            expect(station).to.deep.undefined;

        });
    });
});