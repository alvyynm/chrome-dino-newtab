// Redirect to chrome://dino when a new tab is opened.
const url = "chrome://dino";
chrome.tabs.create({ url, active: true });

// remove the first opened blank tab in the active window
chrome.tabs.query({ currentWindow: true }, function (tabs) {
  // get the second last tab in the array
  const secondLastTab = tabs[tabs.length - 2];

  // get the tab ID of the second last tab
  const secondLastTabId = secondLastTab.id;

  // close the tab with the given tab ID
  chrome.tabs.remove(secondLastTabId, function () {
    // this function will be called after the tab is closed
    console.log("Tab closed");
  });
});
