    function adBlockDetected() {
      #Something action here
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
