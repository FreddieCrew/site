function updateScroll() {
    var element = document.getElementById("list");
    element.scrollTop = element.scrollHeight;
}
updateScroll();

var timerId = window.setInterval(1, 1000);

setTimeout(function () {
    clearInterval(timerId)
}, 10000);