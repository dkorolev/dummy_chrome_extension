chrome.action.onClicked.addListener((tab) => { chrome.tabs.create({ url: `http://dima.ai?tmp=${tab.url}` }); });
