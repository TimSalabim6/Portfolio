document.querySelectorAll('.div2, .div3, .div4, .div5').forEach(div => {
    const bg = div.getAttribute('data-bg');
    if (bg) {
        div.style.backgroundImage = bg;
    }
});


