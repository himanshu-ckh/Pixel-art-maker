let subm = document.querySelector('#inputSubmit');
let color = document.querySelector('#colorPicker');
let canv = document.getElementById("pixelCanvas");
var x = document.getElementById("inputHeight");
var y = document.getElementById("inputWidth");

function makeGrid() {
	let r = x.value;
	let c = y.value;
	canv.innerHTML = "";
	let addEvent = function(cell){
		cell.addEventListener('click', function(){
		cell.style.backgroundColor = color.value;
		})
	}
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");
	for (var i = 0; i < r; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < c; j++) {
      var cell = document.createElement("td");
      row.appendChild(cell);
      cell.addEventListener('click', addEvent(cell));
    }
    tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
canv.appendChild(tbl);
}

subm.addEventListener('click', function(event){
	event.preventDefault();
	makeGrid();
});