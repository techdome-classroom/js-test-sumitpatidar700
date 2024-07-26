const getTotalIsles = function (grid) {

  function numIslands(grid) {
    if (grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    const dfs = (i, j) => {
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
            return;
        }
        grid[i][j] = 'W'; // Mark the land as visited by changing it to water
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L') { // Found an unvisited land
                islandCount++;
                dfs(i, j);
            }
        }
    }

    return islandCount;
}

// Example usage:
const map1 = [
    ["L","L","L","L","W"],
    ["L","L","W","L","W"],
    ["L","L","W","W","W"],
    ["W","W","W","W","W"],
];

const map2 = [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"],
];

console.log(numIslands(map1));  // Output: 1
console.log(numIslands(map2));  // Output: 3

};

module.exports = getTotalIsles;