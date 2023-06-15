const webAddress = document.getElementById("webAddress");
const spanWA = document.getElementById("hiddenWA");
const spanWK = document.getElementById("hiddenWK");

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
  var wkey = "";
  localStorage.setItem(WALLET_ADDRESS, wkey);
}

function clickButton() {
  var button = document.getElementById("hiddenButton");
  button.click();
  console.log("button-click");
}

var savedAddress = localStorage.getItem("WALLET_ADDRESS");
var savedKey = localStorage.getItem("WALLET_KEY");
spanWA.value = savedAddress;
spanWK.value = savedKey;
clickButton();
