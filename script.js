function createGrid(height, width) {
    currentGridHeight = height;
    currentGridWidth = width;
    const container = document.querySelector("#container");
    for(let i = 0; i < height; i++) {
        let row = document.createElement("div");
        row.classList.toggle('row');
        for(let j = 0; j < width; j++) {
            let innerSquare = document.createElement("div");
            innerSquare.classList.toggle('square')
            innerSquare.style.width = `${640 / width}px`;
            innerSquare.style.height = `${640 / height}px`;
            innerSquare.addEventListener("mouseover", () => {
                innerSquare.style.backgroundColor = brushcolor;
            });
            row.appendChild(innerSquare);
        }
        container.appendChild(row);
    }   
}

function deleteGrid() {
    const container = document.querySelector("#container");

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createSizePalette() {
    const size_palette = document.querySelector("#size_palette");
    
    let btn8 = document.createElement("div");
    btn8.addEventListener("click", () => {
        deleteGrid();
        createGrid(8, 8);
    });
    let btn16 = document.createElement("div");
    btn16.addEventListener("click", () => {
        deleteGrid();
        createGrid(16, 16);
    });
    let btn32 = document.createElement("div");
    btn32.addEventListener("click", () => {
        deleteGrid();
        createGrid(32, 32);
    });
    
    btn8.innerText = "8x8";
    btn16.innerText = "16x16";
    btn32.innerText = "32x32";
    
    size_palette.appendChild(btn8);
    size_palette.appendChild(btn16);
    size_palette.appendChild(btn32);
}

function createColorPalette() {
    const palette = document.querySelector("#color_palette");

    const paletteColors = [
        '#b4de76', 
        '#76d5de', 
        '#de76da', 
        '#de7689', 
        '#7776de', 
        '#3f6322', 
        '#47130d'
    ];
    
    for(let color of paletteColors) {
        let btn = document.createElement("div");
        btn.style.backgroundColor = color;
        btn.style.width = '40px';
        btn.style.height = '40px';
        btn.style.border = '1px solid black';
        btn.addEventListener("click", () => {
            brushcolor = color;
        });

        palette.appendChild(btn);
    }
}

let brushcolor = '#b4de76';
let currentGridWidth = 32;
let currentGridHeight = 32;

createGrid(32, 32);
createColorPalette();
createSizePalette();
