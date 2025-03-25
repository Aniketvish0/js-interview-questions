function normalFuncWithDuplicateParams(a, a, b) {
    console.log(a, b);
}
normalFuncWithDuplicateParams(1, 2, 3); // Output: 2, 3

const arrowFuncWithDuplicateParams = (c, c, d) => {
    console.log(c, d);
}
arrowFuncWithDuplicateParams(4, 5, 6); // throws SyntaxError: Duplicate parameter name not allowed in this context