function largestSquareMatrix(matrix) {
    if (!matrix || matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;

    // Create a DP table to store the size of the largest square ending at each cell
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    let maxSize = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1; // First row or first column can only be 1 if matrix[i][j] is 1
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                maxSize = Math.max(maxSize, dp[i][j]);
            }
        }
    }

    return maxSize; // Size of the largest square sub-matrix
}

// Example usage
const matrix = [
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
];

console.log(largestSquareMatrix(matrix)); // Output: 3 (size of the largest square is 3x3)
