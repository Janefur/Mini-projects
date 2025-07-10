const input = document.getElementById("input");

function reverseString(string) {
  return string.split("").reverse().join("");
}

function check() {
  const inputValue = input.value;
  const value = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverse = reverseString(value);

  if (value == reverse) {
    alert("It is a palindrome");
  } else {
    alert("It is NOT a palindrome");
  }

  input.value = "";
}
