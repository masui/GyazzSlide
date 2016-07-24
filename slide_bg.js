//alert(1000);

chrome.browserAction.onClicked.addListener(function(tab) {
    //alert(tab);
    //alert(tab.id);

    //sendResponse({tabid:tab.id});
    //alert(chrome.runtime.sendMessage);

    //chrome.runtime.sendMessage(tab.id, {}, {}, function(){

    chrome.tabs.sendMessage(tab.id, {}, {}, function(){
	// alert("sendMessage end");
    });

    // alert("xxxxx");

    //var a = tab.createElement("script");
    //a.setAttribute("src","//shokai.github.io/GyazzAClone/dist/index.js?time="+Date.now());
    //tab.querySelector("body").appendChild(a);
    //alert(tab.title);
    //chrome.tabs.executeScript({
    //  code: 'alert(100)'
    //});
});