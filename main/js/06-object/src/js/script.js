const obj = {
    user: "Viktor",
    age: 20,
    skillList: {
        css: 50,
    },
};

obj.sss = 'sss';

delete obj.sss;

console.log(obj)

obj.skillList.css = 60;


obj.age = 25;


const s = 'age';
const ss = {};
let b;
let n;
let c = b = n = 5;
console.log(ss[s] = 25);

// console.log(obj.age, obj['age'], obj[s], obj.user);

// for (let key in obj) {
//     console.log(key);
// }

const obj1 = Object.assign({}, { age: 10 }, obj);
obj['skillList']['css'] = 70;
obj.user = "Petya";

// console.log('obj => ', obj);
// console.log('obj1 => ', obj1);
// console.log(JSON.stringify(obj));
// console.log(JSON.parse(JSON.stringify(obj), function (key, value) {
//     console.log(arguments);
// }));


console.log({
    ...obj,
    skillList: {
        ...obj.skillList
    }
});


function copyObj(obj) {
    const newObj = {};

    for (let key in obj) {
        // if (typeof obj[key] === 'object') {
        //     newObj[key] = copyObj(obj[key]);
        // } else {
        //     newObj[key] = obj[key];
        // }
        if (obj.hasOwnProperty(key))
            newObj[key] = (typeof obj[key] === 'object') ? copyObj(obj[key]) : obj[key];
    }

    return newObj;
}

const user = {
    user: "dsfgdsf",
    age: 20,
    skillList: {
        css: 50
    },
    // getAge: function () {
    //     return this.age;
    // },
    // setAge: function (age) {
    //     this.age = age;
    // }
    getAge,
    setAge
}

const petya = {
    user: "Petya",
    age: 50,
    skillList: {
        css: 100
    },
    getAge: getAge,
    setAge,
};

const mykola = {
    user: "Mykola",
    age: 50,
    skillList: {
        css: 100
    },
};

function getAge() {
    return this.age;
}

//const getAge = () => this.age; 

function setAge(age) {
    this.age = age;
}

//getAge()
console.log(setAge.call(obj, 10));
console.log(setAge.apply(mykola, [100]));

console.log(getAge.call(obj));
console.log(getAge.apply(mykola));

user.setAge(15);

console.log(user.getAge())

const a = copyObj(user);

a.age = 25;
a.skillList.css = 60;

//console.log(user, a);

function createUser(user) {
    function getAge() {
        return this.age;
    }

    return {
        user: user.user,
        age: user.age,
        getAge,
    }
}

console.log(createUser({
    user: "Viktor",
    age: 25,
}));

console.log(createUser({
    user: "Petya",
    age: 30,
}));

console.table(user);
console.dir(user);
