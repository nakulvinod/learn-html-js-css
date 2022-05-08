let i = 1;
let list = [];
let last_col = null;
const validate = () => {
  var data = document.getElementById("data");
  if (data.value == "") {
    data.value = i;
    i++;
  }
  list.push(data.value);
  render();
  data.value = "";
  return false;
};

const render = () => {
  var cont = document.getElementById("target");
  cont.innerHTML = "";
  let i = 1;
  for (const item of list) {
    var o = document.createElement("div");
    o.innerHTML = ` ${item} `;
    o.classList = "col";
    o.id = `item-${i}`;
    cont.appendChild(o);
    i++;
  }
  console.log(document.getElementsByTagName("body")[0].innerHTML);
};
const pop = () => {
  list.pop();
  render();
};
const rem = () => {
  list.shift();
  render();
};
const item_replace = () => {
  list_num = document.getElementById("list_num");
  list_changer = document.getElementById("list_changer");
  list[list_num.value - 1] = list_changer.value;
  console.log("dd");
  render();
};
const search = (search_name) => {
  const ki = document.getElementById("ki");
  clearSearch();
  let found = false;
  if (list.length >= 1) {
    let i = 1;
    for (let x of list) {
      if (x == search_name) {
        found = true;
        last_col = x;
        ki.innerHTML = `Item found :${search_name}`;
        let b = document.getElementById(`item-${i}`);
        b.classList.add("selected");
        //   b.style.backgroundColor ="#2B4162";
        console.log(ki.innerHTML);
      }

      i++;
    }
    if (!found) {
      ki.innerHTML = "Item not found.";
    }
  } else {
    ki.innerHTML = "Input or list is empty.";
  }
  ki.style.display = "block";
};

const clearSearch = () => {
  const selectedItems = document.getElementsByClassName("col selected");
  for (const item of selectedItems) {
    item.classList.remove("selected");
  }
};
