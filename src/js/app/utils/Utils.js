class Utils {
	static NormalizeMouseCoords(e, objWrapper) {
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
		}
		objWrapper.x = posx
		objWrapper.y = posy
		return objWrapper
	}
	static ResizePositionProportionally(windowW, windowH, contentW, contentH) {
		var aspectRatio = contentW / contentH
		var scale = ((windowW / windowH) < aspectRatio) ? (windowH / contentH) * 1 : (windowW / contentW) * 1
		var newW = contentW * scale
		var newH = contentH * scale
		var css = {
			width: newW,
			height: newH,
			left: (windowW >> 1) - (newW >> 1),
			top: (windowH >> 1) - (newH >> 1)
		}
		
		return css
	}
	static GetScrollTop() {
		return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
	}
	static GetSupportedPropertyName(property) {
        var prefixes = ['', 'ms', 'Webkit', 'Moz', 'O'];
        
        for(var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            property = prefix === '' ? property : property.charAt(0).toUpperCase() + property.substring(1).toLowerCase();
            var prop = prefix+property;
            
            if(typeof document.body.style[prop] != "undefined") 
                return prop;
        }
        
        return null;
    }
    static Scroll() {
    	return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			// IE Fallback, you can even fallback to onscroll
			function(callback){ window.setTimeout(callback, 1000/60) };
    }
    static Interval(value, min, max) {
    	return Math.min(Math.max(value, min), max);
    }
}

export default Utils
