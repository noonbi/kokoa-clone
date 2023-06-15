const webAddress = document.getElementById("webAddress");
const spanWA = document.getElementById("hiddenWA");
const spanWK = document.getElementById("hiddenWK");

const savedAddress = localStorage.getItem("WALLET_ADDRESS");
const savedKey = localStorage.getItem("WALLET_KEY");

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

//function clickButton() {
//  var button = document.getElementById("hiddenButton");
//  button.click();
//  console.log("button-click");
//}

function sendData() {
  var checkData = webAddress.innerText;
  if (checkData == "") {
    webAddress.innerText = savedAddress;
    spanWA.value = savedAddress;
    spanWK.value = savedKey;
  }
  console.log("savedAddress : ", savedAddress);
}
