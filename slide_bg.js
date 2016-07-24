//
// Background JS
// 
// よくわからないが、アイコンクリックするとこれが呼ばれるので仕方なく
//
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {}, {}, function(){
    });
});
