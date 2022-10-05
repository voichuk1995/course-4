function foo(event) {
    console.log(event.target, event.currentTarget);
}

// document.body.onclick = function(){}

// document.body.addEventListener('click', foo, true);
//document.body.addEventListener('click', foo);

// document.body.addEventListener('click', function () {
//     console.log(2222)
// });

const a = document.querySelectorAll('.menu__link');

a.forEach((elemt) => {
    elemt.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e.target, e.currentTarget);
    });
});

const button = document.querySelector('.my-first-button');



function myModal(options = {}) {
    options = {
        openClassName: 'open',
        contentClass: '.modal__content',
        ...options
    }

    if (!options.selector) return;

    const modal = document.querySelector(options.selector);
    const modalOpenBtn = document.querySelector(options.triggerElement);

    modalOpenBtn.addEventListener('click', openModal);

    modal.addEventListener('click', function (e) {
        if (e.target === e.currentTarget || e.target.closest('button.close')) {
            closeModal();
        }
    });

    function openModal() {
        modal.classList.add(options.openClassName);
    }

    function closeModal() {
        modal.classList.remove(options.openClassName);
    }

    function addContent(content) {
        const contentElem = modal.querySelector(options.contentClass);
        console.log(contentElem)
        contentElem.innerHTML = content;
    }

    if (options.content) {
        addContent(options.content);
    }

    if (options.isAutoOpen) {
        openModal();
    }

    return {
        openModal,
        closeModal,
        addContent,
    }
}

const modal1 = myModal({
    selector: '.modal',
    triggerElement: '.modal-open',
    isAutoOpen: false,
    content: '<p>qqqqqqqqqqqqqqqqq</p>',
});

modal1.openModal();

setTimeout(function () {
    modal1.closeModal();
}, 5000);


button.addEventListener('click', function (e) {
    e.stopPropagation();
    e.stopImmediatePropagation();

    const elem = e.currentTarget;
    const className = elem.className;
    const text = elem.textContent;

    elem.textContent = className;
    elem.classList.replace(className, text);
    modal1.addContent('<p>aaaaaaaa</p>');
});
