let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		li.className = "undone";
		li.onclick = markDone;
	  let listbutton = document.createElement("button");
		listbutton.appendChild(document.createTextNode("Delete"));
		li.appendChild(listbutton);
		listbutton.className = "listbutton";
		listbutton.onclick=removeItem;
}

function markDone() {
		this.classList.toggle("done");
		}

function removeItem() {
	this.parentNode.remove();
		}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);