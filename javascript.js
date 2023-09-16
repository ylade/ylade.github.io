
document.querySelector("#activate-button").onclick = function () {
    const button = document.querySelector("#activate-button");
    button.remove();
    const content = document.querySelector(".content")
    content.innerHTML = "<div class=\"centered-text\"></div>"
    const centeredText = document.querySelector(".centered-text")
    centeredText.innerHTML = "<p class=\"name-part\">ylade</p>"
    //centeredText.innerHTML += "<video class=\"background-video\" autoplay loop volume=\"1\" playsinline><source src=\"/background_video/my_star_opening.mp4\"></video>"
    centeredText.innerHTML += "<video class=\"background-video\" autoplay loop volume=\"1\" playsinline><source src=\"/background_video/shrekophone.mp4\"></video>"
    const canvas = document.querySelector("#canvas")
    canvas.remove()
}

let titleIndex = 0;

setInterval((function () {
    const title = document.querySelector("title")
    const titles = ['no bitches', 'still 0', 'damn :(', 'help me']
    titleIndex += 1
    title.innerText = titles[titleIndex % titles.length]
}), 2000)


setInterval((function () {
    const e = document.querySelector("link[rel='icon']");
    let n = parseInt(e.href.slice(-19, -16));
    let t = (n + 1) % 266;
    e.href = "/spongebobwildin/frame_" + String(t).padStart(3, "0") + "_delay-0.02s.gif"
}), 8)


let canvas = document.getElementById("canvas")
let context = canvas.getContext('2d')

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

function drawPoint(context, x, y) {
    context.beginPath();
    context.arc(x, y, 5, 0, 2 * Math.PI, false);
    context.closePath();

    context.fillStyle = "rgb(255, 255, 255)";
    context.lineJoin = "round";
    context.lineWidth = 20;
    context.filter = "blur(80px)";
    context.fill();
}

document.getElementById("canvas").onmousemove = function (event) {
    drawPoint(context, event.clientX, event.clientY)
}

document.getElementById('canvas').ontouchmove = function (event) {
    drawPoint(context, event.clientX, event.clientY)
}


const handleContextMenu = (event) => {
    event.preventDefault();
};

document.addEventListener('contextmenu', handleContextMenu);
