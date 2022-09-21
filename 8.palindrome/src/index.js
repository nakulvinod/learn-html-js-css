function palindrome() {
  v = document.getElementsByClassName("output");
  y = document.getElementById("output");
  x = document.getElementById("text").value;
  x = x.toLowerCase();
  x = x.replace(" ", "");
  l = x.length;
  o = x.length - 1;
  p = true;

  for (i = 0; i < l / 2; i++) {
    if (x[i] != x[o]) {
      p = false;
      break;
    }

    o--;
  }
  if (p) {
    y.innerHTML = "Word is a palindrome";
    y.style.color = "#00f5d4";
  } else {
    y.innerHTML = "Word is not a palindrome";
    y.style.color = "#f94144";
  }
}
