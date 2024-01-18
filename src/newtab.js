// Redirect to chrome://dino when a new tab is opened.
const url = "chrome://dino";
chrome.tabs.create({ url, active: true });
