const menu = document.getElementById('menu'),
    homepageBtn = document.getElementById('homepageBtn'),
    cookiebox = document.getElementById('cookiePopup'),
    acceptco = document.getElementById('acceptCookies'),
    setcookie = document.getElementById('cookiebox'),
    nav = document.getElementById('navbar'),
    open = document.getElementById('btn'),
    btn1 = document.getElementById('btn.1'),
    btn2 = document.getElementById('btn.2'),
    btn3 = document.getElementById('btn.3'),
    cookieclosebtn = document.getElementById('ckclosebtn'),
    ckoverlay = document.getElementById('ckoverlay'),
    whybtn = document.getElementById('whybtn');

open.addEventListener('click', () => {
    menu.style.display = 'block';
    void menu.offsetWidth;
    menu.classList.add('open');
    nav.style.visibility = 'hidden';
    homepageBtn.style.visibility = 'visible';
});

homepageBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    homepageBtn.style.visibility = 'hidden';
    nav.style.visibility = 'visible';
});

whybtn.addEventListener('click', () => {
    ckoverlay.style.display = 'flex';
    setcookie.style.display = 'block';
    setcookie.classList.add('open');
    nav.style.visibility = 'hidden';
    cookieclosebtn.style.visibility = 'visible';
});

cookieclosebtn.addEventListener('click', () => {
    ckoverlay.style.display = 'none';
    setcookie.classList.remove('open');
    cookieclosebtn.style.visibility = 'hidden';
    nav.style.visibility = 'visible';
});

btn1.addEventListener('click', function () {
    window.open("index2.html", "_blank");
});

btn2.addEventListener('click', function () {
    window.open("index3.html", "_blank");
});

btn3.addEventListener('click', function () {
    window.open("index4.html", "_blank");
});

setTimeout(function () {
    cookiebox.classList.add('open');
}, 17000);

acceptco.addEventListener('click', () => {
    cookiebox.classList.remove('open');
});





