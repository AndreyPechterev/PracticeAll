let elasticItems = document.querySelectorAll('.elastic li')

document.querySelector('#elastic').oninput = function() {
    let text = this.value.trim()
    if (text != '') {
        elasticItems.forEach(function(item){
            if (item.innerText.search(text) == -1) {
                item.classList.add('hide')
                item.innerHTML = item.innerText
            } else {
                item.classList.remove('hide')
                let str = item.innerText;
                item.innerHTML = colorMark(str,item.innerText.search(text),text.length)
            }
        })
    } else {
        elasticItems.forEach(item => {
            item.classList.remove('hide')
            item.innerHTML = item.innerText
    })
    }
}

function colorMark(text,position,len){
    return text.slice(0,position) + '<mark>' + text.slice(position,position+len) + '</mark>' + text.slice(position+len)
}