var startValue = "";
var finishValue = "";
var won = false;
var clicks = 0;
var t0 = 0;
var t1 = 0;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(!won){
    if(clicks == 0)
    {
      t0 = performance.now();
      alert("You must go from " + startValue +" to " + finishValue + "... \nGood luck!");
    }
    var newQuery = changeInfo.url.replace(wiki_url,"");
    newQuery = newQuery.replace("_"," ");
    clicks += 1;
    //alert(newQuery.toLowerCase() + " " + finishValue.toLowerCase());
    //alert(newQuery.toLowerCase() == finishValue.toLowerCase())
    if(newQuery.toLowerCase() == finishValue.toLowerCase())
    {
      t1 = performance.now();
      alert("Congratulations! You have made it from " + startValue + " to " + finishValue + "!\n"+
            " It only took you " + ((t1 - t0)/1000).toFixed(1) + " seconds and " + (clicks-1) + " click(s) to do it!");
            won = true;
    }
  }
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    startValue = message.start;
    finishValue = message.finish;
    won = false;
    clicks = 0;
    console.log("messgae received");
});
