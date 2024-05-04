function RC4(key, str) {
  var s = [],
    j = 0,
    x,
    res = "";
  for (var i = 0; i < 256; i++) {
    s[i] = i;
  }
  for (i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
    x = s[i];
    s[i] = s[j];
    s[j] = x;
  }
  i = 0;
  j = 0;
  for (var y = 0; y < str.length; y++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    x = s[i];
    s[i] = s[j];
    s[j] = x;
    res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
  }
  return res;
}

function encrypt() {
  const plaintext = document.getElementById("plaintext").value;
  const key = document.getElementById("key").value;

  if (plaintext && key) {
    const ciphertext = RC4(key, plaintext);
    document.getElementById("ciphertext").innerText = ciphertext;
  } else {
    alert("Please enter plaintext and key.");
  }
}

function decrypt() {
  const ciphertext = document.getElementById("ciphertext").innerText;
  const key = document.getElementById("key").value;

  if (ciphertext && key) {
    const decryptedText = RC4(key, ciphertext);
    document.getElementById("decryptedtext").innerText = decryptedText;
  } else {
    alert("Please enter ciphertext and key.");
  }
}
