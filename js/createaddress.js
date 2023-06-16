const saveaddress = document.querySelector("#saveAddress");
const savekey = document.querySelector("#saveKey");

function saveKeyAddress() {
  var waddress = saveaddress.innerText;
  var wkey = savekey.innerText;
  localStorage.setItem("WALLET_ADDRESS", waddress);
  localStorage.setItem("WALLET_KEY", wkey);
  console.log("[keypad.js]Save waddress : ", waddress);
  console.log("[keypad.js]Save wkey : ", wkey);
}
function saveData() {
  setTimeout(function () {
    saveKeyAddress();
  }, 300);
}
