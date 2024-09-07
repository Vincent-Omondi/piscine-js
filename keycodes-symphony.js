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
        } else if (key >= 'a' && key <= 'z') {
            let note = document.createElement("div")
            note.classList.add("note")
            let color = `hsl(${(key.charCodeAt(0) - 97) * 13}, 100%, 50%)`;
            note.style.background = color
            document.body.appendChild(note)
            note.innerHTML = key
        }

    })
}