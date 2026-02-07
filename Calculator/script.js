const input = document.getElementById("number-input");
const result = document.getElementById("ans-input");

function handleClickButton(value) {
  const buttonText = value.innerText.trim();
  if (buttonText === "Clear") {
    input.value = "";
    result.value = "";
    return;
  }
  const exp = input.value + buttonText;
  input.value = exp;
  try {
    result.value = eval(exp);
  } catch (error) {
    result.value = "";
  }
}
