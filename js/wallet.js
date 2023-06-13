const WALLET_KEY = "WALLET_KEY";
const WALLET_ADDRESS = "WALLET_ADDRESS";
const webAddress = document.querySelector("#textAddress");

function copyText() {
  const textToCopy = document.getElementById("textToCopy").innerText;
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
  localStorage.setItem(WALLET_ADDRESS, JSON.stringify(wkey));
}

function loadData() {
  if (localAddress != "") {
    webAddress.innerText = localAddress;
  }
}

const localAddress = localStorage.getItem(WALLET_ADDRESS);
loadData();
