// default number of rows and columns
let columns = 30;
let rows = 30;

// grid
const grid = document.querySelector('#grid');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

// create default grid
let totalDivs = columns * rows;
for (let i = 0; i < totalDivs; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
        grid.appendChild(gridDiv);
}

const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');

// update grid rows and columns based on the value of slider input
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
        // check if hide grid lines is active or not
        if (hide.checked) {
            gridDiv.style.border = '0px';
        }
        grid.appendChild(gridDiv);
    }
    // update the value displayed next to slider
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
}

// update the grid and slider value
slider.addEventListener('input', updateGrid);

// color picker
const colorPicker = document.querySelector('#color-picker');

// hover and drag mode
const hover = document.querySelector('#hover-toggle');
const drag = document.querySelector('#drag-toggle');

// main coloring event and function
// on event when mouse is hovering over grid
// checks if hover mode, drag mode, rainbow mode and eraser are active
grid.addEventListener('mouseover', (event) => {
    if (hover.checked) {
        if (eraser.checked) {
        event.target.style.backgroundColor = `#ffffff`;
    } else if (rainbow.checked) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = `#${randomColor}`;
    } else {
    event.target.style.backgroundColor = `${colorPicker.value}`;
    }
    }

    else if (drag.checked) {
        if (eraser.checked) {
            grid.addEventListener('mousedown', (event) => {
            event.target.style.backgroundColor = `#ffffff`;
        })
        if (event.buttons == 0) {
            return;
        }
        else if (event.buttons == 1) {
            event.target.style.backgroundColor = `#ffffff`;
        }
    }

    else if (rainbow.checked) {
        grid.addEventListener('mousedown', (event) => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = `#${randomColor}`;
        })
        if (event.buttons == 0) {
            return;
        }
        else if (event.buttons == 1) {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            event.target.style.backgroundColor = `#${randomColor}`;
        }
    }

    else {
        grid.addEventListener('mousedown', (event) => {
        event.target.style.backgroundColor = `${colorPicker.value}`;
        })
        if (event.buttons == 0) {
            return;
        }
        else if (event.buttons == 1) {
            event.target.style.backgroundColor = `${colorPicker.value}`;
        }
    }
    }
})

//rainbow
const rainbow = document.querySelector('#rainbow-toggle');

// eraser
const eraser = document.querySelector('#eraser-toggle');

// hide grid lines
const hide = document.querySelector('#hide-toggle');
function hideGridLines () {
    const gridDivs = document.getElementsByClassName('grid-div');
    if (hide.checked) {
        for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].style.border = '0px';
        }
    } else if (hide.checked == false) {
        for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].style.border = '1px solid rgb(226, 226, 226)';
        }
    }
}
hide.addEventListener('change', hideGridLines)

// clear button and event
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const gridDivs = document.getElementsByClassName('grid-div');
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].style.backgroundColor = 'white';
    }
})