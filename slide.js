//
// 本体JS
//
// shokaiのGyazzACloneでやってる処理をここで書くべきなのだろうけど
//
chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
    var a = document.createElement("script");
    a.setAttribute("src","//shokai.github.io/GyazzAClone/dist/index.js?time="+Date.now());
    document.querySelector("body").appendChild(a);
});
