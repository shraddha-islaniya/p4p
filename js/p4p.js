/*global $:false, document:false, window:false */ 
// his declares to JSHint that $ is a global variable, and the false indicates that it should not be overridden (http://stackoverflow.com/questions/8852765/jshint-strict-mode-and-jquery-is-not-defined)

// Keep this script out of window.load. It can just execute 'automatically.'
$(document).ready(function() {
$('.carousel').carousel({
        pause: 'none'
    }); // manually start carousel
});
        

/* After all elements, including picturefill generated imgs are loaded, make them responsive. We have to use $window.load() b/c these elements are being added to the DOM via <script> tags. */
$(window).load(function() {
    $('span img').addClass('img-responsive');
});
