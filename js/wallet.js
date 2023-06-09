const WALLET_KEY = "WALLET_KEY";
const WALLET_ADDRESS = "WALLET_ADDRESS";
const walletAddress = document.querySelector("#textAddress");

function saveData() {
  var wkey = "1MZ7dWX3Gu8kLwjs7nRcUW2MHLnzC6QkGa";
  localStorage.setItem(WALLET_ADDRESS, JSON.stringify(wkey));
}

function loadData() {
  waddress = localStorage.getItem(WALLET_ADDRESS);
  if (waddress == "") {
    walletAddress.innerText = "";
  } else {
    walletAddress.innerText = waddress;
  }
}

loadData();
