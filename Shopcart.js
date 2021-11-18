function addItem(){
	let ul = document.getElementById("random-list");
  let random = document.getElementById("random");
  let li = document.createElement("li");
  li.setAttribute('id',random.value);
  li.appendChild(document.createTextNode(random.value));
  ul.appendChild(li);
}

function removeItem(){
	let ul = document.getElementById("random-list");
  let random = document.getElementById("random");
  let item = document.getElementById(random.value);
  ul.removeChild(item);
}