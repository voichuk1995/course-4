// function CustomWindow(options) {
//     this.options = {
//         openClassName: 'open',
//         contentClass: '.modal__content',
//         ...options
//     }

//     this.modal = document.querySelector(this.options.selector);
// }

// CustomWindow.prototype.open = function () {
//     this.modal?.classList.add(this.options.openClassName);

// }

// CustomWindow.prototype.close = function () {
//     this.modal?.classList.remove(this.options.openClassName);

// }

function buildTemplate(template, options) {
    const div = document.createElement('div');

    div.innerHTML = template;

    const templateDOM = div.firstChild;

    templateDOM.querySelector(options.contentClass).append(options.content);

    return templateDOM;
}

function addEvent(context) {
    context.modal.addEventListener('click', function (e) {
        if (e.target === e.currentTarget || e.target.closest('button.close')) {
            context.close();
        }
    });
}

class CustomWindow {
    #template;

    constructor(options) {
        this.options = {
            openClassName: 'open',
            contentClass: '.modal__content',
            ...options
        };

        this.#template = `<div class="modal">
        <div class="modal__window">
            <div class="modal__content">
                
            </div>
            <div class="modal__footer">
                <button class="modal__close close"><span>Close</span></button>
            </div>
        </div>
    </div>`;

        this.modal = buildTemplate(this.#template, this.options);

        this.addModal();

        addEvent(this);
    }

    addModal() {
        document.body.append(this.modal);
    }

    set template(template) {
        this.#template = template;
        this.modal.remove();
        this.modal = buildTemplate(this.#template, this.options);
        this.addModal();
    }

    open() {
        console.log(this);

        this.modal?.classList.add(this.options.openClassName);
    }

    close() {
        this.modal?.classList.remove(this.options.openClassName);
    }

    get contentClass() {
        return this.options.contentClass;
    }

    set contentClass(data) {
        this.modal?.classList.replace(this.options.contentClass, data);
        this.options.contentClass = data;
    }
}

class OtheWindow extends CustomWindow {
    constructor(options) {
        super(options);
        console.log(this)
    }

    open() {
        console.log('custom window')
        this.modal?.classList.add(this.options.openClassName);
    }
}


export default { CustomWindow, OtheWindow };
