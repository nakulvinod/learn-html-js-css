let checkInputValueRef = null;
const checkInput = (event) => {
  if (checkInputValueRef) {
    clearTimeout(checkInputValueRef);
  }
  checkInputValueRef = setTimeout(function () {
    console.log("check input", event.target.value);
    let button = document.getElementById("button");
    let sourceMoney = document.getElementById("input").value;
    let output = document.getElementById("output");
    output.innerHTML = "--";
    if (isNaN(sourceMoney)) {
      button.style.backgroundColor = "#c8adad";
      button.style.cursor = "none";
      button.disabled = true;
    } else {
      button.style.cursor = "pointer";
      button.style.backgroundColor = "#f4a261";
      button.disabled = false;
    }
  }, 200);
};

const convertCurrency = () => {
  let button = document.getElementById("button");
  let sourceCurrency = document.getElementById("sourceCurrency").value;
  let destinationCurrency = document.getElementById(
    "destinationCurrency"
  ).value;
  let x = document.getElementById("output");
  let y = document.getElementById("input");

  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${sourceCurrency}.json`,
    {
      method: "GET",
    }
  )
    .then(async (response) => {
      const data = await response.json();
      if (
        typeof data === "object" &&
        data[sourceCurrency] &&
        data[sourceCurrency][destinationCurrency]
      ) {
        let o = data[sourceCurrency][destinationCurrency] * parseInt(y.value);
        if (isNaN(o)) {
          x.innerHTML = "Input is not a number.";

          throw new Error();
        }
        x.innerHTML = Math.round(o * 100) / 100;
      } else {
        console.error("Cannot parse data");
        alert("Cannot parse data");
      }
    })

    .catch((error) => {
      console.log("Error2:", error);
    });
};
