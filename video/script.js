document.querySelector('#play').onclick = play
document.querySelector('#stop').onclick = stop
document.querySelector('#pause').onclick = pause
document.querySelector('#speed-up').onclick = speedUp
document.querySelector('#speed-down').onclick = speedDown
document.querySelector('#speed-normal').onclick = normal
document.querySelector('#volume').addEventListener('change', volume) 

let video = document.querySelector('#video-player');
let progress = document.querySelector('#progress');

video.ontimeupdate = progressUpdate
progress.onclick = videoRewind

function play() {
    video.play()
}
function stop() {
    video.pause()
    video.currentTime = 0
}
function pause() {
    video.pause()
}
function speedUp() {
    video.play()
    video.playbackRate = 2
}
function speedDown() {
    video.play()
    video.playbackRate = 0.5
}
function normal() {
    video.play()
    video.playbackRate = 1
}
function volume() {
    video.volume = this.value / 100
}
function progressUpdate() {
    let pc = (video.currentTime / video.duration) * 100;
    if (isNaN(pc)) {
      return;
    } else {
        progress.value = pc
    }
}

function videoRewind() {
    let w = this.offsetWidth
    let o = event.offsetX
    this.value = o / w * 100
    video.pause()
    video.currentTime = video.duration * o / w 
    video.play()
}