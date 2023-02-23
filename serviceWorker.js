chrome.omnibox.onInputEntered.addListener((text, suggest) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.remove(tabs[0].id);
  });
  chrome.tabs.create({ url: "http://ma-kaka.ru/redirector/" + text.replace(" ", "-") });
});