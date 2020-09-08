function startTime() {
  let today = new Date();
  let h = today.getHours();
  let AmOrPm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = checkHours(h);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s + " " + AmOrPm;
  let t = setInterval(startTime, 1000);
  
}
function checkTime(i) {
  if (i < 10) { 
    i = "0" + i 
  };  
  return i;
}

function checkHours(i) {
  if (i <= 9) {
    i = "0" + i
  }
  return i
}


