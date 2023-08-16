
document.querySelector("#activate-button").onclick = function () {
    const button = document.querySelector("#activate-button");
    button.remove();
    const content = document.querySelector(".content")
    content.innerHTML = "<div class=\"centered-text\"></div>"
    const centeredText = document.querySelector(".centered-text")
    centeredText.innerHTML = "<p class=\"name-part\">delay</p>"
    centeredText.innerHTML += "<p class=\"test-text\">Heyo this is a test (please work)</p>"
}

setInterval((function () {
    const title = document.querySelector("title")
    let currentDots = title.innerText.replace(/[^.]/g, "").length
    if (currentDots === 0) {
        title.innerText = "delay."
    } else if (currentDots === 1) {
        title.innerText = "delay.."
    } else if (currentDots === 2) {
        title.innerText = "delay..."
    } else if (currentDots === 3) {
        title.innerText = "delay"
    }

}), 1000)


const canvas = document.getElementById('sheet'), g = canvas.getContext("2d");
g.canvas.width = window.innerWidth;
g.canvas.height = window.innerHeight;
g.strokeStyle = "rgb(255, 255, 255)";
g.lineJoin = "round";
g.lineWidth = 20;
g.filter = "blur(2px)";

const
    relPos = pt => [pt.pageX - canvas.offsetLeft, pt.pageY - canvas.offsetTop],
    drawStart = pt => { with (g) { beginPath(); moveTo.apply(g, pt); stroke(); } },
    drawMove = pt => { with (g) { lineTo.apply(g, pt); stroke(); } },

    pointerDown = e => drawStart(relPos(e.touches ? e.touches[0] : e)),
    pointerMove = e => drawMove(relPos(e.touches ? e.touches[0] : e)),

    draw = (method, move, stop) => e => {
        if (method == "add") pointerDown(e);
        canvas[method + "EventListener"](move, pointerMove);
        canvas[method + "EventListener"](stop, g.closePath);
    };

canvas.addEventListener("mousedown", draw("add", "mousemove", "mouseup"));
canvas.addEventListener("touchstart", draw("add", "touchmove", "touchend"));
canvas.addEventListener("mouseup", draw("remove", "mousemove", "mouseup"));
canvas.addEventListener("touchend", draw("remove", "touchmove", "touchend"));
