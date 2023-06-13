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

const localAddress = localStorage.getItem("WALLET_ADDRESS");
webAddress.innerText = localAddress;
