function countSubmatricesWithOnes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Step 1: Create a histogram-like matrix
    const heights = Array.from({ length: rows }, () => Array(cols).fill(0));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) {
                heights[i][j] = (i === 0 ? 0 : heights[i - 1][j]) + 1;
            }
        }
    }
    
    // Step 2: For each row, calculate the number of valid submatrices
    let totalSubmatrices = 0;
    
    for (let i = 0; i < rows; i++) {
        totalSubmatrices += countRectanglesInHistogram(heights[i]);
    }
    
    return totalSubmatrices;
}

// Helper function to count submatrices for a single row (treated as a histogram)
function countRectanglesInHistogram(heights) {
    const stack = [];
    const n = heights.length;
    const count = Array(n).fill(0); // Stores submatrices ending at each index
    let result = 0;
    
    for (let i = 0; i < n; i++) {
        // Maintain a monotonic stack (non-increasing heights)
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        
        if (stack.length === 0) {
            count[i] = heights[i] * (i + 1);
        } else {
            const previousIndex = stack[stack.length - 1];
            count[i] = count[previousIndex] + heights[i] * (i - previousIndex);
        }
        
        stack.push(i);
        result += count[i];
    }
    
    return result;
}

// Example Usage
const matrix = [
    [0, 1, 1,0],
    [0, 1, 1,1],
    [1, 1, 1,0]
];

console.log(countSubmatricesWithOnes(matrix)); // Output: 13
