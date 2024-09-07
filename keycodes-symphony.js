export const compose = () => {
    addEventListener("keydown", (event) => {

        let key = event.key
        if (key === "Escape") {
            document.querySelectorAll("div").forEach((item) => {
                item.remove()
            })
        } else if (key === "Backspace") {
            const notes = document.querySelectorAll(".note")
            if (notes.length > 0) {
                notes[notes.length - 1].remove()
            }
        } else {
            let note = document.createElement("div")
            note.classList.add("note")
            let color = "#" + "99" + event.key + event.key
            note.style.background = color
            document.body.appendChild(note)
            note.innerHTML = key
        }

    })
}