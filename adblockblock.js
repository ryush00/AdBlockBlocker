
function passImageTest() {
    console.log("PASS");
    isAdBlockActive = false;
    checkAgain();
}

function notPassImageTest() {
    console.log("NOT PASS");
    isAdBlockActive = true;
    checkAgain();
}
    

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
            fuckAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
            setTimeout(function() {
            fuckAdBlock.check();
            }, 500);
            
            
            try {
                if($(".adsbygoogle").contents()[0] == null) {
                    isAdBlockActive = true
                }
            } catch (err) {
                console.log(err);
            }
            
            try {
                if($('.adsbygoogle').attr('data-adsbygoogle-status') != "done") {
                    //isAdBlockActive = true data-adsbygoogle-status 기반 체크 추가해야함
                }
            } catch (err) {
                console.log(err);
            }
            
            if (isAdBlockActive) { 
              console.log("The visitor is blocking ads");
              adBlockDetected()
            }
            setTimeout(function() {
                checkAgain();
            }, 500);
        
    }
