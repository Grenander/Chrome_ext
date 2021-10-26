chrome.extension.onRequest.addListener(function(request, sender, callback)
{
    console.log("JG - content.js");
    if (request.action == 'getSource')
    {
        callback(document.documentElement.outerHTML);        
    }
});