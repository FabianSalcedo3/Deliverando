let bottoneScrollTop = document.createElement('button');
bottoneScrollTop.innerHTML = `<i class="fa fa-arrow-up"></i>`;

window.onscroll = () => {
    navbarColor();
}

function navbarColor() {
    if (window.scrollY > 200) {
        bottoneScrollTop.classList.add('btn', 'btn-outline-primary', 'scroll-top-button');
        document.body.appendChild(bottoneScrollTop);
    } else {
        document.body.removeChild(bottoneScrollTop);
        bottoneScrollTop.classList.remove('btn btn-primary scroll-top-button');
    }
}

bottoneScrollTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

document.querySelector('#menuButton').addEventListener('click', () => {
    document.querySelector('#navbarSupportedContent').classList.add('menuMobileWrapper');
    let links = document.querySelector('#links');
    if (links.classList.contains('flex-column')) {
        links.classList.remove('flex-column', 'py-auto', 'h-100');
    } else {
        links.classList.add('flex-column', 'py-auto', 'h-100');
    }

});