/* This file is an image loading function which loads image files which are used within the game. It also includesa simple "caching" layer which will reuse cached images if you try to load the same image multiple times.*/
(function() {
    var resourceCache = {};
    var readyCallbacks = [];
    /* It is the publicly accessible image loading function that accepts an array of strings pointing to image files and it then call the private image loading function .*/
    function load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {     /*  looping through each value in images array and call the image loader on that image */
                _load(url);
            });
        } else {
            _load(urlOrArr);    /*  call the image loader function.*/
        }
    }
    function _load(url) {               /* This is the private image loader function which is called by the public image loader function. */
        if(resourceCache[url]) {
            return resourceCache[url];    /*return the image*/
        } else {
            var img = new Image();    /* this image is not loaded. */
            img.onload = function() {
                resourceCache[url] = img;    /* Once the image is properly loaded, add it to the cache and can return this image if the developer attempts to load this file whenever he needs.*/
                if(isReady()) {        /* Once the image is actually loaded and properly cached, the onReady() callbacks that were defined are called.*/
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            resourceCache[url] = false; /*this  value will change when the image's onload event handler is called.*/
            img.src = url;
        }
    }
    function get(url) {       /* This function is used by developers to obtain references to images have been previously loaded.*/
        return resourceCache[url];
    }
    function isReady() {       /* This function determines if all the images have been requested for loading are been properly loaded or not.*/
        var ready = true;
        for(var k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }
    function onReady(func) {      /* This function pushes a function to the callback stack which is called when all requested images are properly loaded.*/
        readyCallbacks.push(func);
    }
    window.Resources = {    /* This object is used to define the publicly accessible functions which are available to developers by creating a global Resources object.*/
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();
