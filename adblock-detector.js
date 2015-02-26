//created with Chrome Dev Editor
//@sureshdsk
function AdblockDetector(){
}
AdblockDetector.prototype.run = function() {

    var ad = document.querySelector("ins.adsbygoogle");
    if(ad && ad.innerHTML.replace(/\s/g, "").length == 0) {
        //Adblock detected
        if(typeof ga !== 'undefined') {
            ga('send', 'event', 'AdBlock', 'True', {'nonInteraction': 1}); //event hit will not be used in bounce-rate calculation.

        }else if(typeof _gaq !== 'undefined') {
            _gaq.push(['_trackEvent', 'Adblock', 'True', undefined, undefined, true]); //event hit will not be used in bounce-rate calculation.

        }
    }else{
        //Not detected
        if(typeof ga !== 'undefined') {
            ga('send', 'event', 'AdBlock', 'False', {'nonInteraction': 1}); //event hit will not be used in bounce-rate calculation.

        }else if(typeof _gaq !== 'undefined') {
            _gaq.push(['_trackEvent', 'Adblock', 'False', undefined, undefined, true]); //event hit will not be used in bounce-rate calculation.

        }
    }

};

window.onload = function() {
    setTimeout(function() {
        var AdBlockDetect = new AdblockDetector();
        AdBlockDetect.run();

    }, 3000);
};