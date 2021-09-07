const enterButton = document.getElementById("enter");
const resetButton = document.getElementById("reset");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		li.className = "undone";
		li.onclick = markDone;
	let removebutton = document.createElement("div");
		li.appendChild(removebutton);
		removebutton.className = "removebutton";
		removebutton.onclick = removeItem;
}

function markDone() {
	this.classList.toggle("done");
}

function removeItem() {
	this.parentNode.remove();
}

function removeAllItems() {
	ul.remove();
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

enterButton.addEventListener("click", addListAfterClick);

resetButton.addEventListener("click", removeAllItems);

input.addEventListener("keypress", addListAfterKeyPress);