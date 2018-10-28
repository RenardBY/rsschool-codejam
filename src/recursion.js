function recursion(node) {
    if (!(node.left && node.right)) {
      return [ [node.value] ];
    }
    const left = recursion(node.left),
          right = recursion(node.right),
          array = [[node.value]];
    left.forEach( (elemet, index) => {
        array.push(elemet.concat(right[index]));
    });
    return array;
  }

module.exports = recursion;