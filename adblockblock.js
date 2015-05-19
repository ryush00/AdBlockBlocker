    function adBlockDetected() {
        var element = document.getElementById("article");
        element.innerHTML = '<img src="./images/adblock-detected.png" /><a href="http://info.flagcounter.com/MQQT"><img src="http://s09.flagcounter.com/count/MQQT/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_6/viewers_0/labels_0/pageviews_1/flags_0/" alt="Flag Counter" border="0"></a>';
    }
    function adBlockNotDetected() {
    
    }

    if(typeof fuckAdBlock === 'undefined') {
        adBlockDetected();
    } else {
        fuckAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
    }

    function checkAgain() {
        try {
            fuckAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
            setTimeout(function() {
            fuckAdBlock.check();
            }, 500);
            
            
            if($(".adsbygoogle").contents()[0] == null) {
                isAdBlockActive = true
            }
            if (isAdBlockActive) { 
              console.log("The visitor is blocking ads");
              adBlockDetected()
            }
        } catch (err) {
        
        }
            setTimeout(function() {
                checkAgain();
            }, 500);
        
    }

$( checkAgain() );
