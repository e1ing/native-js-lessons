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

function onClickHandler(event) {
    event.stopPropagation()
    console.dir(event.target.name)
}

// sm.onclick = onClickHandler
// sm.onmouseover = onClickHandler
// sm.onmouseleave = onClickHandler

md.onclick = onClickHandler