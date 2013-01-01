;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }


    // UPDATE 10-17-2012: change in Twitter API!
$.getJSON("https://api.twitter.com/1/statuses/user_timeline.json?screen_name=lauracabrera&count=1&callback=?",
 function(data){
  $.each(data, function(i,item){
   var ct = item.text;
  // include time tweeted - thanks to will
  mytime = item.created_at;
  var strtime = mytime.replace(/(\+\S+) (.*)/, '$2 $1')
  var mydate = new Date(Date.parse(strtime)).toLocaleDateString();
  var mytime = new Date(Date.parse(strtime)).toLocaleTimeString();
  ct = ct.replace(/http:\/\/\S+/g,  '<a href="$&" target="_blank">$&</a>');
  ct = ct.replace(/\s(@)(\w+)/g,    ' <a href="http://twitter.com/$2" target="_blank">@$2</a>');
  ct = ct.replace(/\s(#)(\w+)/g,    ' <a href="http://search.twitter.com/search?q=%23$2" target="_blank">#$2</a>');
    
  $("#twitter-tweet-lc").append("<li>"+ct + " <small><i>(" + mydate + " @ " + mytime + ")</i></small></li>");
  });
 });

  
  $('#window-width').html('width: '+$(window).width()+'px');


  //$(document).ready(function() {
    $("#buttonForModal").click(function() {


      /*try{
         event.preventDefault();
        // var pimg_src = $(this).parent().find('img').attr('src');
        // var title = $(this).parent().find('h4').html();

         var pid = $(this).attr('id');
         var packageId = pid.replace('button_','');
         var packageTitle = $(this).attr('packageid');
         var modalHeight;
         var callToActionHeight;
      
         $('#myModal').html('');
         $('#myModal').append('<div class="row" packageid="'+packageTitle+'">'+$('#'+packageId).html()+'</div>');
         $('#calltoaction').append('<a class="tel centered" href="tel:'+SiteVars.localizedPhoneNumber+'">'+SiteVars.localizedPhoneNumber+'</a>');
         $('#calltoaction').append('<p>Call Now to Redeem Your<br/>Early Booking Bonus</p>');
         
         
         
         $('.tel').on('click',function(event){
       
             try{
               var pid= $(this).parent().parent().attr('packageid');
               pageTracker._trackEvent('EBB','PhoneNumberClick', SiteVars.currentLocale + ' phone package ' +pid);
             }catch(e){
               //alert('e '+e);
             }
           
         });
               
         
        // ('<a class="tel centered">'+SiteVars.localizedPhoneNumber+'</a>').insertAfter('#calltoaction img');
        // ('<p>Call Now to Redeem Your<br/>Early Booking Bonus</p>').insertAfter('#calltoaction a');
         
         $('#myModal').reveal();
         
         pageTracker._trackEvent('EBB','LP PackageLearnMoreClick', 'EBB Package '+ SiteVars.currentLocale +' ' +packageTitle);
         
         modalHeight = $('#myModal').height();
         callToActionHeight = $('#calltoaction').height();
         
         if(modalHeight >  callToActionHeight){
          $('#calltoaction').css('height',modalHeight);
          
         }
         
         
       }catch(e){
         //alert(e);
       }*/

      $("#myModal").reveal();
    });
  //});


  


})(jQuery, this);

