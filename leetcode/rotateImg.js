/**
 * 给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
 * 
 *
 */
//思路：先将矩阵上下([i][j]与[n-1-i][j])交换，然后沿对角线翻转交换[i][j]与[j][i]交换
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var m=matrix.length;//数组的长度，也就是有多少行
    var n=matrix[0].length //有多少列
    for(var i=0;i<Math.floor(m/2);i++){
        for(var j=0;j<n;j++){
            var temp=matrix[i][j];
            matrix[i][j]=matrix[m-1-i][j];
            matrix[m-1-i][j]=temp
        }
    }
    for(var k=0;k<m;k++){
        for(var l=k;l<n;l++){
            var temp=matrix[k][l];
            matrix[k][l]=matrix[l][k];
            matrix[l][k]=temp
        }
    }
};