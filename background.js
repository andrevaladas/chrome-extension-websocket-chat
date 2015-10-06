// Handle requests for passwords
chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'request_password') {
       chrome.windows.create({url: "headers.html", type: "panel", width: 450, height: 700});
    }
});