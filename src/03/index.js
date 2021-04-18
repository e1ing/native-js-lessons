//Событие -> event
//Обработчик -> handler

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

//sm.onclick = () => alert("yo") //литерал
//sm.onclick = null

// const fn = () => alert("yo")
// sm.onclick = fn
// console.dir(sm)

function onClickHandler(e) {
    console.dir(e)
}

sm.onclock = onClickHandler