document.querySelector('.start').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '-250px'
}

document.querySelectorAll('.back').forEach(item => {
    item.onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '0'
}})



