
var wiki_url = "https://en.wikipedia.org/wiki/";
var rand = "Special:Random";
var begin = document.getElementById('begin');
var start = document.getElementById('start');
var finish = document.getElementById('finish');



function startGame(){
  console.log("sending packet");
  chrome.runtime.sendMessage({
    start: start.value,
    finish: finish.value
  });

  console.log('starting game');
  var wiki = wiki_url + start.value.replace(" ","_");

  chrome.tabs.create({active: true, url: wiki}, function(tab){
    newTabID = tab.id;
  });
}


begin.onclick = startGame;
