
window.onorientationchange = function() { 
            //Need at least 800 milliseconds
            setTimeout(changeOrientation, 1000);
            console.log('onorientationchange has been updated and run');
}

$(window).load(function() {
		
       $('#featuredContent').orbit({ fluid: '16x9', bullets: 'true', pauseOnHover: 'true', startClockOnMouseOut: 'true', directionalNav: 'true' });

       var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);


       	var $win = $(window);
	    function update () {

	    	var portfolioImages = $('.portfolio-image');

	    	
	    	portfolioImages.each(function(){

	    		var pimage = $(this);
	    		var portfolioImageSrc = pimage.attr("data-src");
				var indexExtension = portfolioImageSrc.lastIndexOf('.');// .png
				var fileExtension = portfolioImageSrc.slice(indexExtension+1);
				var fileNameWithoutExtension = portfolioImageSrc.slice(0,indexExtension);
				var fileNameHasDesktopIndex = fileNameWithoutExtension.lastIndexOf('-desktop');
				var fileNameWithoutDesktop = fileNameWithoutExtension.slice(0,fileNameHasDesktopIndex);
		       
		        if( ($win.width() > 768  && ($win.orientation == 0   || $win.orientation == 180) ) || 
		        	($win.width() > 1024 && ($win.orientation == -90 || $win.orientation == 90)) ||
		        	($win.width() > 862 && $win.orientation===undefined) ){

		        		
		        		//console.log('case 1: orientation '+$win.orientation);
					    if(fileNameWithoutExtension.lastIndexOf('-desktop') > -1)
					    	pimage.attr("src", fileNameWithoutExtension+fileExtension);
					    else
					    	pimage.attr("src", fileNameWithoutExtension+'-desktop.'+fileExtension);

					    
					   
		        }else{ //
		        		
		        		//console.log('case 2: orientation '+$win.orientation);
					    if(fileNameHasDesktopIndex > -1)
					    	pimage.attr("src", fileNameWithoutDesktop+fileExtension);
					    else
					    	pimage.attr("src", fileNameWithoutExtension+'.'+fileExtension);

					   

		        }

		        pimage.attr("style","display:block;margin:0 auto;vertical-align:middle;");

	    	});
	        
	        //console.dir($('#featuredContent'));
	
	        //console.log("win.width "+$win.width());

	        
	    };

        update(); // call when the DOM is ready
        
        // Call when the viewport resizes:
        $win.on('resize', update);

        if(ismobile){
        	$win.on('orientationchange', update);
    	}

        


});



