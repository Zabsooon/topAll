const container = document.querySelector("#container");

function createGrid(height, width) {
    for(let i = 0; i < height; i++) {
        let row = document.createElement("div");
        row.classList.toggle('row');
        for(let j = 0; j < width; j++) {
            let innerSquare = document.createElement("div");
            innerSquare.classList.toggle('square')
            innerSquare.style.width = `${640 / width}px`;
            innerSquare.style.height = `${640 / height}px`;
            innerSquare.addEventListener("mouseover", () => {
                innerSquare.style.backgroundColor = "#ffff33";
            });
            row.appendChild(innerSquare);
        }
        container.appendChild(row);
    }   
}

createGrid(16, 16);