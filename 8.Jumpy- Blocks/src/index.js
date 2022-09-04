window.onload = function () {
  let character = document.getElementsByClassName("character");
  let left_pos = 0;
  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      left_pos + 20;
      character.style.right = left_pos + " px";
      character.style = "100px";
    }
  });
};
