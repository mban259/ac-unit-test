chrome.contextMenus.create({
    "title" : chrome.i18n.getMessage("generate"),
    "type" : "normal",
    "id": "createUnitTest",
    "contexts" : ["page"],
    "documentUrlPatterns": [
        "https://codeforces.com/contest/*/problem/*",
        "https://codeforces.com/problemset/problem/*",
        "https://codeforces.com/gym/*/problem/*"
    ]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "onClick"
        });
    });
});
