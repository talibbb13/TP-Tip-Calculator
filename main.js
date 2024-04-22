function calculation() {
  let amount = document.getElementById('amount').value;

  let guest = document.getElementById('guest').value;

  let quality = document.getElementsByTagName('select')[0].value;

  let finalTipAmount = (amount * quality) / guest;

  if (isNaN(finalTipAmount)) {
    document.getElementById("errorThrow").classList.add("animation");

    document.getElementById("errorThrow").style.visibility = 'visible';

    document.getElementById('errorThrow').innerHTML = "Invalid- Put the amount correctly!"

    setTimeout(function() {
      document.getElementById("errorThrow").style.visibility = 'hidden';
    }, 3000);
  }
  else {
    document.getElementById("finalTipAmount").style.visibility = 'visible';
    document.getElementById('finalTipAmount').innerHTML = "The Tip Amount is " + finalTipAmount;

    document.getElementById('amount').value = "";
    document.getElementById('guest').value = "";
    document.getElementById('quality').value = "";
  }
}
