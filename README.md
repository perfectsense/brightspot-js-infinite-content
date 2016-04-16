# brightspot-js-infinite-content

The current infinite scroll is essentially just a wrapper for the jquery waypoints ifinite functionality.
Surround the infinite load content with a wrapper, give your content the appropriate class, and
create a "load more" link outside the wrapper which links to the next piece of content. Once
the next piece of content doesn't contain the "load more" link, the infinite loading stops.

	<div class="bsp-infinite-load-wrapper" data-bsp-infinite-scroll>
	     <div class="bsp-infinite-load-item" data-infinite-load-item-url="myURL.html">
	         My Item Content Here
	         <a class="bsp-infinite-load-trigger" href="next.html">Next Content</a>
	     </div>
	     <!-- The plugin will place the bsp-infinite-load-item div out of next.html here -->
	</div>

We also support an additional nav where we can indicate the status as we scroll down the page

This is the markup for the load status. This plugin will check the top of the content as you
scroll and when it loads and you get to that item, it will mark it as current on the li

	<div class="bsp-infinite-load-status">
	     <ul>
	         <li><a href="myURL.html">Current Article</a></li>
	         <li><a href="next.html">Next Article</a></li>
	     </ul>
	</div>

We can add some additional params to the ajaxed URL. Let's say you want to add a _context to only get partial HTML or something
similar, you can do that by passing a JSON object to the "extraParams" option which will get serialized and added to the original link href

Lastly, we are doing light history management. Deciding to just do a simple replaceState on the history
this go around. It accomplishes us changing the URL for social media purposes and since this isn't a
big standalone single app page that tries to load up and down, we don't want to have to deal with
back button handling. We can enhance later if need be.

 # todo:

 Unit testing