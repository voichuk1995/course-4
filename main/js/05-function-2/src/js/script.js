function message(text) {
    console.log(text);
    return text;
}

function foo(fuc) {
    if (typeof fuc === 'function') return fuc(222);
}

const a = foo(message);

foo(function (a) {
    console.log(a * a);
});

console.log(a);

function baz() {
    let count = 0;

    return function () {
        return count++;
    }
}

const sss = baz();
console.log(sss());
console.log(sss());
console.log(sss());
console.log(sss());
console.log('=========');
const ddd = baz();
console.log(ddd());
console.log(ddd());
console.log(ddd());
console.log(ddd());
console.log(ddd());
console.log('=========');
console.log(sss());
console.log(sss());
console.log(sss());
console.log(sss());
console.log('=========');
console.log(ddd());
console.log(ddd());
console.log(ddd());
console.log(ddd());
console.log(ddd());

function rec(n) {
    if (n === 1) return n;

    return n * rec(n - 1);
}

console.log(rec(5));
