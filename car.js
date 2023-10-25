// check it user is using a phone 



function init() {
  if (window.innerWidth < 500) {
    alert("Please use a desktop to view this demo")
  }
}


// launch function init() when the page loads
window.onload = init;