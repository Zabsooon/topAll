function createGrid(height, width) {
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

function createColorPalette() {
    const pallete = document.querySelector("#color_palette")

    const palleteColors = [
        '#b4de76', 
        '#76d5de', 
        '#de76da', 
        '#de7689', 
        '#7776de', 
        '#3f6322', 
        '#47130d'
    ];
    
    for(let color of palleteColors) {
        let btn = document.createElement("div");
        btn.style.backgroundColor = color;
        btn.style.width = '40px';
        btn.style.height = '40px';
        btn.style.border = '1px solid black';
        btn.addEventListener("click", () => {
            brushcolor = color;
        });

        pallete.appendChild(btn);
    }    
}

let brushcolor = '#b4de76';

createGrid(32, 32);
createColorPalette();
