document.getElementById("clicked-btn").addEventListener("click", function (e) {
    chrome.runtime.sendMessage({ 'myPopupIsOpen': true });
});
