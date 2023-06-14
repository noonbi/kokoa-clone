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

function clickButtonAfterDelay() {
  setTimeout(function () {
    var button = document.getElementById("hiddenButton");
    button.click();
  }, 300); // 0.3초 마다 버튼 클릭
}

function clickButton() {
  setTimeout(function () {
    var button = document.getElementById("hiddenButton");
    button.click();
  }, 300); // 0.3초 후에 버튼 클릭(1회)
}

if (savedAddress != null) {
  webAddress.innerText = savedAddress;
  spanValue.value = savedAddress;
  clickButton();
}
console.log("savedAddress : ", savedAddress);
