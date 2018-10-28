// access to submit button
const submitBtn = document.querySelector('#sizePicker').lastElementChild;

// access to colorPicker input
let colorPicker = document.querySelector('#colorPicker');

// access to table
let pixelTable = document.querySelector('#pixelCanvas');

let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');

// when size is submitted by the user
submitBtn.addEventListener('click', makeGrid);

// change color of cells
pixelTable.addEventListener('click', changeColor);

function makeGrid(event) {
	// without preventDefault the grid desappears right away after submit 
	event.preventDefault();
	let heightValue=height.value;
	let widthValue=width.value;
	for(i=0; i<=heightValue;i++){
		let row = document.createElement('tr');
		for(j=0; j<=widthValue;j++){
			let column = document.createElement('td');
			row.appendChild(column);
		}
		pixelTable.appendChild(row);	
	}
}

function changeColor(event){
	let selectedColor = colorPicker.value;
	event.target.style.backgroundColor=selectedColor;
}
