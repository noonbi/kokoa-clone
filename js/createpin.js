const keyNumber = document.querySelectorAll("#inputwrapper span");
const pinpadTitle = document.getElementById("pinpad-title");
const pinpadKey = document.getElementById("pinpad-key");
const KEY_CLASSNAME = "numberinput_color";
let pinkey = "";
let check = false;

function onKeyNumber(cnt, number) {
  if (number == 9) {
    keyNumber[cnt].innerText = "";
    keyNumber[cnt].classList.remove(KEY_CLASSNAME);
  } else if (number == 10) {
    keyNumber[cnt - 1].innerText = 0;
    keyNumber[cnt - 1].classList.add(KEY_CLASSNAME);
  } else {
    keyNumber[cnt - 1].innerText = number + 1;
    keyNumber[cnt - 1].classList.add(KEY_CLASSNAME);
  }
}
function savePin() {
  localStorage.setItem("PINPAD_KEY", pinkey);
}
function saveKeyNumber() {
  let pressedKey = "";
  for (let i = 0; i < keyNumber.length; i++) {
    pressedKey = pressedKey + keyNumber[i].innerText;
    keyNumber[i].innerText = "";
    keyNumber[i].classList.remove(KEY_CLASSNAME);
  }
  console.log(pressedKey);
  if (check == false) {
    pinpadTitle.innerText = "Confirm PIN";
    pinkey = pressedKey;
    check = true;
    savePin();
  } else {
    if (pinkey == pressedKey) {
      console.log("Check Completed : ", pinkey);
      savePin();
      pinpadKey.value = pinkey;
      //window.location.href = "my";
    } else {
      alert("Check your PIN!");
    }
  }
}

function inputKeyNumber() {
  const selectKey = document.querySelectorAll("#numberline div");
  var count = 0;
  for (let i = 0; i < selectKey.length; i++) {
    (function (i) {
      selectKey[i].addEventListener("click", y);
      function y() {
        if (count < 4) {
          if (i < 9 || i == 10) {
            count++;
            console.log("count: ", count);
            onKeyNumber(count, i);
            if (count == 4) {
              count = 0;
              setTimeout(function () {
                saveKeyNumber();
              }, 200);
            }
          }
          if (i == 9) {
            count--;
            if (count < 0) {
              count = 0;
            } else {
              onKeyNumber(count, i);
            }
          }
        }
      }
    })(i);
  }
}
const savedPinkey = localStorage.getItem("PINPAD_KEY");
if (savedPinkey !== "") {
  pinkey = savedPinkey;
  check = true;
  inputKeyNumber();
} else {
  inputKeyNumber();
}
