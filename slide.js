// alert("SLIDE.js");
//
//alert(chrome.extension.onRequest.addListener);
//
// chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {

chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
    //alert("req from BG!!! Do whatever we want!");
    // alert(document);
    var a = document.createElement("script");
    a.setAttribute("src","//shokai.github.io/GyazzAClone/dist/index.js?time="+Date.now());
    document.querySelector("body").appendChild(a);
    //alert(tab.title);
});

// alert("SLIDE.js end");