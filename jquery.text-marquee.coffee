$ = jQuery

$ ->
    "use strict"

    $.fn.textMarquee = (options) ->
        # Default settings
        ###
        scrollBehavior : Sets how the text is scrolled within the marquee
        scrollDirection : Sets the direction of the scrolling within the marquee
        scrollAmount : Sets the amount of scrolling at each interval in pixels
        scrollLoop : Sets the number of times the marquee will scroll
        scrollDelay : Together with scrollamount, sets the speed of the scrolling
        onMouseHover : Callback function for on mousehover
        onMouseOut : Callback function for on mouseout
        ###
        settings = $.extend
            scrollBehavior : 'alternate'
            scrollDirection : 'left'
            scrollAmount : 6,
            scrollLoop : -1
            scrollDelay : 85
            onMouseHover : null
            onMouseOut : null
        , options



        @each ->
            ### Get current text ###
            thisText = $ @
                .text()
            ### Create span for calculate text width ###
            $virtualSpan = $ "<span id='jQueryTextMarqueeVirtualSpan' style='display: none;'>#{thisText}</span>"
            ### Element width ###
            parentWidth = $ @
                .width()
            ### Apend span to body ###
            $virtualSpan.appendTo $ "body"
            ### Get text width ###
            textWidth = $ "#jQueryTextMarqueeVirtualSpan"
                .width()
            ### Remove span ###
            $ "#jQueryTextMarqueeVirtualSpan"
                .remove()

            $ @
                .on
                    ### On mouse hover element ###
                    mouseenter: ->
                        ### Create marquee if element width less than text width ###
                        $ @
                            .html """
                            <marquee
                                behavior='#{settings.scrollBehavior}'
                                scrollamount='#{settings.scrollAmount}'
                                direction='#{settings.scrollDirection}'
                                loop='#{settings.scrollLoop}'
                                scrolldelay='#{settings.scrollDelay}'
                            >
                                #{thisText}
                            </marquee>
                            """ if parentWidth < textWidth

                        ### Call callback function for mouse hover ###
                        settings.onMouseHover.call this if $.isFunction settings.onMouseHover
                    ### On mouse out ###
                    mouseleave: ->
                        ### Remove marquee when mouse out ###
                        $ @
                            .html thisText

                        ### Call callback function for mouse out ###
                        settings.onMouseOut.call this if $.isFunction settings.onMouseOut