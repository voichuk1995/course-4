(function (w) {
    console.log(w);

    fuc('Viktor', 'Dehtiarov');

    function fuc(myName, lastName) {
        console.log('Hello ' + myName);
    }

    function foo(number = 1) {
        //number = number || 1;
        //number = number ?? 1;

        console.log(number * number);
    }

    foo(4);
    foo();
    foo(8);
    foo(15);
    // if (confirm()) {
    //     fuc();
    // }

    /**
     * Sum two number
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */

    function sum(a, b) {
        const resalt = a + b;

        return resalt;
    }

    const a = sum(2, 2);
    const b = sum(5, 5);
    const c = sum(sum(4, 2), sum(4, 4));

    console.log(a, b);

    function bar(a, b, ...other) {
        console.log(a, b, other);
        //console.log(arguments);
        sum2(1, 1);
        function ee() {

        }
    }

    const sum2 = function (a, b) {
        return a + b;
    }

    bar(1, 2, 3, 4, 5, 6, 7, 8, 9);

    console.log(sum2(100, 100));

    const sum3 = (a, b) => {
        return a + b;
    }

    const sum4 = (a, b) => a + b;

    const pow = a => a * a;

    const ddd = () => alert('ddd');

    //Math.min();
    pow(5);
    pow(10);
})(window);

(function () {

})();
