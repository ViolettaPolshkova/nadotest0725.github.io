// Событие нажатия на кнопку
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const subInfo = document.getElementById('sub_info');
    let isHidden = true;


    toggleButton.addEventListener('click', () => {
        if (isHidden) {
            subInfo.style.transform = 'translateY(-100%)';
            toggleButton.innerHTML = '<span>▼</span>';
        } else {
            subInfo.style.transform = 'translateY(0%)';
            toggleButton.innerHTML = '<span>▲</span>';
        }
        isHidden = !isHidden;
    });
});

// Слайдер
document.addEventListener("DOMContentLoaded", function () {
    const mainBlock = document.getElementById('main');
    const backgrounds = ['../img/bg1.jpg', '../img/bg2.jpg'];
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        mainBlock.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    }

    setInterval(changeBackground, 15000);

    mainBlock.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
});

// Модальное окно
var modal = document.getElementById("modal");
var btn = document.getElementById("lock");
var span = document.getElementById("closeModal");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}