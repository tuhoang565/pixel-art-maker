//#GET_PASSES_THIS_REPO_UDACITY_PLEASE
// When size is submitted by the user, call makeGrid()
let table = document.querySelector('#pixelCanvas');
let color = document.querySelector('#colorPicker').value;


/**
 * @description Draws the grid based on the user input for grid height and width
 * @param void
 * @return void
 */
function makeGrid(inputHeight, inputWidth) {
    let form = document.querySelector('form');
    form.addEventListener('submit', function submitFunction(e) {
        e.preventDefault();
        let inputHeight = document.querySelector('#inputHeight').value;
        let inputWidth = document.querySelector('#inputWidth').value;
        makeGrid(inputHeight, inputWidth);
    });

    // Clear existing table
    table.innerHTML = '';
    for (let i = 0; i < inputHeight; i++) {
        // Creates height amount of rows
        let tr = document.createElement('tr');
        for (let j = 0; j < inputWidth; j++) {
            // Creates width amount of columns
            let td = document.createElement('td');
            tr.appendChild(td);

            //Change background color when user clicks
            td.addEventListener("click", function (event) {
                td.style.backgroundColor = colorPicker.value;
            });

            //Remove the existing color when user double clicks
            td.addEventListener("dblclick", function (event) {
                td.style.backgroundColor = "";
            });
        }
        table.appendChild(tr);
    }
}



