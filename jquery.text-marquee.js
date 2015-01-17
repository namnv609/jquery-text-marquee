// Generated by CoffeeScript 1.8.0
(function() {
  var $;

  $ = jQuery;

  $(function() {
    "use strict";
    return $.fn.textMarquee = function(options) {

      /*
      scrollBehavior : Sets how the text is scrolled within the marquee
      scrollDirection : Sets the direction of the scrolling within the marquee
      scrollAmount : Sets the amount of scrolling at each interval in pixels
      scrollLoop : Sets the number of times the marquee will scroll
      scrollDelay : Together with scrollamount, sets the speed of the scrolling
      onMouseHover : Callback function for on mousehover
      onMouseOut : Callback function for on mouseout
       */
      var settings;
      settings = $.extend({
        scrollBehavior: 'alternate',
        scrollDirection: 'left',
        scrollAmount: 6,
        scrollLoop: -1,
        scrollDelay: 85,
        onMouseHover: null,
        onMouseOut: null
      }, options);
      return this.each(function() {

        /* Get current text */
        var $virtualSpan, parentWidth, textWidth, thisText;
        thisText = $(this).text();

        /* Create span for calculate text width */
        $virtualSpan = $("<span id='jQueryTextMarqueeVirtualSpan' style='display: none;'>" + thisText + "</span>");

        /* Element width */
        parentWidth = $(this).width();

        /* Apend span to body */
        $virtualSpan.appendTo($("body"));

        /* Get text width */
        textWidth = $("#jQueryTextMarqueeVirtualSpan").width();

        /* Remove span */
        $("#jQueryTextMarqueeVirtualSpan").remove();
        return $(this).on({

          /* On mouse hover element */
          mouseenter: function() {

            /* Create marquee if element width less than text width */
            if (parentWidth < textWidth) {
              $(this).html("<marquee\n    behavior='" + settings.scrollBehavior + "'\n    scrollamount='" + settings.scrollAmount + "'\n    direction='" + settings.scrollDirection + "'\n    loop='" + settings.scrollLoop + "'\n    scrolldelay='" + settings.scrollDelay + "'\n>\n    " + thisText + "\n</marquee>");
            }

            /* Call callback function for mouse hover */
            if ($.isFunction(settings.onMouseHover)) {
              return settings.onMouseHover.call(this);
            }
          },

          /* On mouse out */
          mouseleave: function() {

            /* Remove marquee when mouse out */
            $(this).html(thisText);

            /* Call callback function for mouse out */
            if ($.isFunction(settings.onMouseOut)) {
              return settings.onMouseOut.call(this);
            }
          }
        });
      });
    };
  });

}).call(this);