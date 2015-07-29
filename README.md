# brightspot-js-infinite-content

The current infinite scroll is essentially just a wrapper for the jquery waypoints ifinite functionality with the addition
of a infinite load status, where we can keep track of which piece of content you are viewing, and some light history management.

For history managememt, I decided to just do a simple replaceState on the history. It accomplishes us changing the URL for social media purposes and since this isn't meant for big standalone single app pages that try to load up and down, we don't want to have to deal with back button handling. We can enhance later if need be. 

## Usage

Surround the infinite load content with a wrapper, give your content the appropriate class, and create a `load more` link outside the wrapper which links to the next piece of content. Once the next piece of content doesn't contain the `load more` link, the infinite loading stops. 

Example markup: 
	
	<div class="bsp-infinite-load-wrapper" data-bsp-infinite-scroll data-infinite-load-item-url="myURL.html">
		<div class="bsp-infinite-load-item">
			My Item Content Here
		</div>
		<!-- The plugin will place the bsp-infinite-load-item div out of next.html here -->
	</div>
	<a class="bsp-infinite-load-trigger" href="next.html">Next Content</a>


We also support an additional nav where we can indicate the status as we scroll down the page. This plugin will check the top of the content as you scroll and when it loads and you get to that item, it will mark it as `current` on the li

Example markup: 
	
	<ul class="bsp-infinite-load-status">
 		<li><a href="myURL.html">Current Article</a></li>
 		<li><a href="next.html">Next Article</a></li>
 	</ul>

 # todo:

 Unit testing