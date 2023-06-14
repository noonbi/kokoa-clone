const webAddress = document.getElementById("webAddress");
const spanValue = document.getElementById("hiddenInput");
const savedAddress = localStorage.getItem("WALLET_ADDRESS");

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
}

if (savedAddress != null) {
  webAddress.innerText = savedAddress;
  spanValue.value = savedAddress;
  clickButton();
}
console.log("savedAddress : ", savedAddress);
