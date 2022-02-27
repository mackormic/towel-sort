
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const newArray = matrix.reduce((acc, cur, i) => {
    cur.sort((a, b) => i % 2 === 0 ? a - b : b - a).map(e => acc.push(e));
    return acc;
    }, []);
    return [newArray];
}

towelSort()