const saveaddress = document.getElementById("saveAddress");
const savekey = document.getElementById("saveKey");

function saveKeyAddress() {
  var waddress = saveaddress.innerText;
  var wkey = savekey.innerText;
  localStorage.setItem("WALLET_ADDRESS", waddress);
  localStorage.setItem("WALLET_KEY", wkey);
}
function saveData() {
  setTimeout(function () {
    saveKeyAddress();
  }, 300);
}
