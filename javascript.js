
document.querySelector("#activate-button").onclick = function () {
    const button = document.querySelector("#activate-button");
    button.remove();
    const content = document.querySelector(".content")
    content.innerHTML = "<div class=\"centered-text\"></div>"
    const centeredText = document.querySelector(".centered-text")
    centeredText.innerHTML = "<p class=\"name-part\">delay</p>"
    centeredText.innerHTML += "<p class=\"test-text\">Heyo this is a test (please work)</p>"
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
    //console.log(e);
    let n = parseInt(e.href.slice(-19, -16));
    //console.log(n);
    let t = (n + 1) % 266;
    //console.log(t)
    //e.href = "http://127.0.0.1:5500/visual_studio_code_projects/websites/real%20websites/website%20with%20video%20as%20bg/images/spongebobwild/frame_" + String(t).padStart(3, "0") + "_delay-0.02s.gif"
    e.href = "/spongebobwildin/frame_" + String(t).padStart(3, "0") + "_delay-0.02s.gif"
}), 10)


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
