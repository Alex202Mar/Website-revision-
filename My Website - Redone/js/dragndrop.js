// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


var canvas;
var context;

$(function(){
  console.log('init fired');
  canvas = $('#canvas')[0];
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth*0.7;
  canvas.height = window.innerHeight*0.95;

  window.onresize = function(){
		canvas.width = window.innerWidth*0.7;
		canvas.height = window.innerHeight*0.95;
    context.clearRect(0, 0, canvas.width, canvas.height);
	}
});

function allowDrop(ev){
  ev.preventDefault();
}

if (isFirefox)
{
    function drag(ev){
    console.log(ev);
    ev.dataTransfer.setData("path", ev.explicitOriginalTarget.src);
    ev.dataTransfer.setData("height", ev.srcElement.height);
    ev.dataTransfer.setData("width", ev.srcElement.width);

    }
}

if (isChrome)
{
    function drag(ev){
    console.log(ev);
    ev.dataTransfer.setData("path", ev.path[0].src);
    ev.dataTransfer.setData("height", ev.srcElement.height);
    ev.dataTransfer.setData("width", ev.srcElement.width);

    }
}

function dropPicture(ev){
  ev.preventDefault();
  var image = new Image();
  var width = ev.dataTransfer.getData("width");
  var height = ev.dataTransfer.getData("height");
  image.src = ev.dataTransfer.getData("path");
  context.drawImage(image, ev.offsetX-(width/2), ev.offsetY-(height/2), width, height);
}

