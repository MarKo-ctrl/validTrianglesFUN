const validTriangles = require('../validTriangles');

const testingTriangles = [[542, 586, 419],
[829, 272, 126],
[660, 514, 367],
[39, 703, 839],
[229, 861, 2],
[235, 952, 840],
[892, 533, 108]]

describe('validTriangles', () => {
    it('should return 0 when no triangle are passed', () => {
        expect(validTriangles([])).toBe(0);
    });

    it('should return 0 when no valid triangle is passed', () => {
        expect(validTriangles(testingTriangles[1])).toBe(0);
    });
    
    it('should return 1 when a valid triangle is passed', () => {
        expect(validTriangles(testingTriangles[0])).toBe(1)
    });

    it('should return the number of valid triangles when passed an array of triangles', () => {
        expect(validTriangles(testingTriangles)).toBe(3)
    });
});