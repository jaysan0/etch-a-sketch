// default number of rows and columns
let columns = 30;
let rows = 30;

// grid
const grid = document.querySelector('#grid');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

// default grid view
let totalDivs = columns * rows;
for (let i = 0; i < totalDivs; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
        grid.appendChild(gridDiv);
}

const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');

function updateGrid () {
    grid.innerHTML = '';
    let totalDivs = slider.value * slider.value;
    columns = slider.value;
    rows = slider.value;
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < totalDivs; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
        grid.appendChild(gridDiv);
    }
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
}

// updates the grid and slider value
slider.addEventListener('input', updateGrid);

// color picker
const colorPicker = document.querySelector('#color-picker');

// hover effect
grid.addEventListener('mouseover', (event) => {
    if (eraser.checked) {
        event.target.style.backgroundColor = `#ffffff`;
    } else if (rainbow.checked) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = `#${randomColor}`;
    } else {
    event.target.style.backgroundColor = `${colorPicker.value}`;
    }
})

// eraser
let lastColor;
const eraser = document.querySelector('#eraser-toggle');
eraser.addEventListener('change', (event) => {
    if (event.target.checked) {
        lastColor = colorPicker.value;
        colorPicker.disabled = true;
        colorPicker.value = '#ffffff';
        if (rainbow.checked) {
            rainbow.checked = false;
        }
    } else {
        colorPicker.disabled = false;
        colorPicker.value = lastColor;
    }
})

//rainbow
const rainbow = document.querySelector('#rainbow-toggle');
rainbow.addEventListener('change', (event) => {
    if (event.target.checked) {
        if (eraser.checked) {
            eraser.checked = false;
            colorPicker.disabled = false;
            colorPicker.value = lastColor;
        }
    } else {
        
    }
})

// clear button
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const gridDivs = document.getElementsByClassName('grid-div');
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].style.backgroundColor = 'white';
    }
})