const board = document.querySelector(".board")

for (let i = 0; i < 9; i++) {
    const grid = document.createElement("div")
    grid.className = "grid"

    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"
    grid.style.background = bgColor

    grid.innerHTML = 'X'

    board.appendChild(grid)
}
