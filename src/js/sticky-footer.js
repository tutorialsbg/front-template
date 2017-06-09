
 function autoHeight() {
   $('#sticky').css('min-height', 0);
   $('#sticky').css('min-height', (
     $(document).height() 
     - $('#header').height() 
     - $('#footer').height()
     + $('#bs-example-navbar-collapse-1').height()
   ));
 }

 // onDocumentReady function bind
 $(document).ready(function() {
   autoHeight();
 });

 // onResize bind of the function
 $(window).resize(function() {
   autoHeight();
 });