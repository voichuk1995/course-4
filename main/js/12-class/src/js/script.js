import win from "./customWindow";

const CustomWindow = win.CustomWindow;
const OtheWindow = win.OtheWindow;

const s = new OtheWindow({
    content: '2222',
});

const myAlert = new CustomWindow({
    selector: '.modal',
    content: 'sdfsdfds',
});

console.log(s.open(), myAlert);

const myAlert2 = new CustomWindow({
    selector: '.modal',
    content: '11111111',
});



myAlert.contentClass = '111';

const b = document.querySelector('.open-alert');

b.addEventListener('click', myAlert.open.bind(myAlert));

const c = document.querySelector('.open-alert1');

c.addEventListener('click', myAlert2.open.bind(myAlert2));
