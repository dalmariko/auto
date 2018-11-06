const nav = document.querySelector('nav');

nav.addEventListener('click', (e) => {
    let preventliActive = document.querySelector('li.active');
    if (e.target.closest('a')) {
        let li = e.target.parentNode;
        if (!preventliActive) {
            li.classList.add('active');
        } else {
            preventliActive.classList.remove('active');
            li.classList.add('active');
        }
    }
});

const togleBtn = document.querySelector('.toggleBtn');

togleBtn.addEventListener('click', (e) => {
    nav.classList.toggle('hidden');
});


window.addEventListener('resize', () => {
    let width = document.body.clientWidth;
    width > 660 ? nav.classList.remove('hidden') : nav.classList.add('hidden');
});

const select = document.querySelector('.select');

select.addEventListener('click', (e) => {
    if (e.target.classList.contains('selectBtn')) {
        let li = e.target.closest('li');
        let option = li.dataset.option;
        let options = document.querySelector(`[data-option="${option}"] .Options`);
        if (!options)return;
        let style = window.getComputedStyle(options, null);
        let spanText = document.querySelector(`[data-option="${option}"] .SelectOption span`);

        options.addEventListener('click', (e) => {
            if (e.target.closest('li')) {
                spanText.textContent = e.target.textContent;
                options.style.height = '0em';
                options.style.border = '0';
            }
        });

        if (style.height > 0 + 'px') {
            options.style.height = '0em';
            options.style.border = '0';
        } else {
            options.style.height = 15 + 'em';
            options.style.border = '.1em solid #0091ff';
        }
    }
});

const category = document.querySelector('.categorysListCard');

category.addEventListener('click', e => {
    let li = e.target.closest('li');
    let ulChild = li.querySelector('ul');


    if (li && ulChild !== null) {
        e.preventDefault();
        if (ulChild.style.display !== 'block') {
            ulChild.style.display = 'block';
            ulChild.classList.add('openedList');
        } else {
            ulChild.style.display = 'none';
        }

    }
    e.preventDefault();
});


const allCards = document.querySelector('.allCardsProducts');

allCards.addEventListener('mouseover', e => {
    if (e.target.closest('.articul p')) {
        let articl = e.target;

        articl.onmouseover = function () {
            if (this.scrollHeight > this.offsetHeight) {
                this.style.height = this.scrollHeight + "px";
                this.parentElement.parentElement.classList.remove('shadow');
            }
        };

        articl.onmouseleave = function () {
            this.style.height = "";
            this.parentElement.parentElement.classList.add('shadow');
        };

    }
});

