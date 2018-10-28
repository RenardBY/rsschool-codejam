function sum(a, b) {
    return a + b;
}

function make(...args) {
    return (...innerArgs) => {
        return typeof innerArgs[0] === 'function' ? args.reduce(innerArgs[0]) : make(...args, ...innerArgs)
    }
}

exports.sum = sum;
exports.make = make;