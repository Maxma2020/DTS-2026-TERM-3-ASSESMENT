const menu = document.getElementById('menu'),
    all = document.getElementById('all'),
    homepageBtn = document.getElementById('homepageBtn'),
    btn = document.getElementById('btn'),
    btn1 = document.getElementById('btn.1')

btn.addEventListener('click', () => {
    menu.style.display = 'block';
    void menu.offsetWidth;
    menu.classList.add('open');
    all.style.display = 'none';
    homepageBtn.style.visibility = 'visible';

});

homepageBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    all.style.display = 'block';
    homepageBtn.style.visibility = 'hidden';
});

btn1.addEventListener('click', function () {
    window.open("index2.html", "_blank");
});




