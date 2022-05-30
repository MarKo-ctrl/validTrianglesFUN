function validTriangles(trianglesArray) {
    let validCounter = 0;

    if (!trianglesArray.filter(Array.isArray).length) {
        return ((trianglesArray[0] + trianglesArray[1]) > trianglesArray[2] &&
            (trianglesArray[0] + trianglesArray[2]) > trianglesArray[1] &&
            (trianglesArray[2] + trianglesArray[1]) > trianglesArray[0]) ? 1 : 0;
    } else {
        for (let i in trianglesArray) {
            if ((trianglesArray[i][0] + trianglesArray[i][1]) > trianglesArray[i][2] &&
                (trianglesArray[i][0] + trianglesArray[i][2]) > trianglesArray[i][1] &&
                (trianglesArray[i][2] + trianglesArray[i][1]) > trianglesArray[i][0]) {
                validCounter += 1;
            };
        };
        return validCounter;
    };
};

module.exports = validTriangles;