let images = document.querySelectorAll('.slider-box img')
let button = document.querySelector('button')
let k = 0;

button.onclick = mySlider

function mySlider() {
    if (k < images.length) {
    let img = images[k]
    img.style.display = 'block'
    img.classList.add('animate__animated', 'animate__rollIn')
    img.addEventListener('animationend', () => {
        img.classList.add('animate__rollOut')
    })
    k++
    } else {
        startNewSlider()
    }
}

function startNewSlider() {
    images.forEach(item => {
        item.classList.remove('animate__animated', 'animate__rollIn', 'animate__rollOut')
        item.style.display = 'none'
    })
    k = 0
    mySlider()
}