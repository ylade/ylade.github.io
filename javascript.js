
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

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('.app');

    const coordinates = {
        x: undefined,
        y: undefined
    };

    const addElement = () => {
        const newEle = document.createElement('div');
        newEle.classList.add('line');

        newEle.style.left = coordinates.x + 'px';
        newEle.style.top = coordinates.y + 'px';

        app.appendChild(newEle);
    }

    const updateCoordinates = e => {
        if (coordinates.x === undefined || coordinates.y === undefined) {
            coordinates.x = e.x;
            coordinates.y = e.y;
            addElement();
        }
        if (Math.abs(coordinates.x - e.x) > 50 || Math.abs(coordinates.y - e.y) > 50) {
            coordinates.x = e.x;
            coordinates.y = e.y;
            addElement();
        }
    }
    app.addEventListener('mousemove', e => {
        updateCoordinates(e);
    });
    app.addEventListener('')
});