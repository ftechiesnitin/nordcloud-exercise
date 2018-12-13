const expect = require('chai').expect;
const stations = require('../src/utils');

describe('Test Cases', () => {
  describe('findDistance()', () => {
    it('should find the distance between two points', () => {
      const pointA = [0, 0]; const pointB = [10, 10]; const
        result = 14.142135623730951;

      const distance = stations.findDistance(pointA, pointB);

      expect(distance).to.be.equal(result);
    });

    it('should result in NaN', () => {
      const pointA = [null, null]; const
        pointB = [];

      const distance = stations.findDistance(pointA, pointB);

      expect(distance).to.be.NaN;
    });
  });

  describe('findPower()', () => {
    it('should find the power as 0', () => {
      const reach = 5; const distance = 14.142135623730951; const
        result = 0;

      const power = stations.findPower(reach, distance);

      expect(power).to.be.equal(result);
    });

    it('should find the power as 100', () => {
      const reach = 20; const distance = 10; const
        result = 100;

      const power = stations.findPower(reach, distance);

      expect(power).to.be.equal(result);
    });

    it('should find the power as NaN', () => {
      let reach; const
        distance = 10;

      const power = stations.findPower(reach, distance);

      expect(power).to.be.NaN;
    });
  });

  describe('findSuitableStation()', () => {
    it('should find the most suitable station', () => {
      const point = [0, 0]; const linkStations = [
        [0, 0, 10],
        [20, 20, 5],
        [10, 0, 12],
      ]; const
        result = [0, 0, 10, 100];

      const station = stations.findSuitableStation(point, linkStations);

      expect(station).to.deep.equal(result);
    });

    it('should not find the most suitable station', () => {
      const point = [100, 100]; const
        linkStations = [
          [0, 0, 10],
          [20, 20, 5],
          [10, 0, 12],
        ];

      const station = stations.findSuitableStation(point, linkStations);

      expect(station).to.deep.undefined;
    });
  });
});
