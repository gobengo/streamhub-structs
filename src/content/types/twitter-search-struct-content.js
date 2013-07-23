define([
	'streamhub-sdk/jquery',
	'streamhub-structs/content/types/struct-content',
	'streamhub-structs/content/types/twitter-search-content'
], function ($, StructContent, TwitterSearchContent) {
	function TwitterSearchStructContent (structState) {
		StructContent.apply(this, arguments);
		if ( ! structState) {
			return;
		}
		var twitterJson = JSON.parse(structState.content.fields.body.value);
		TwitterSearchContent.call(this, twitterJson);
	}
	TwitterSearchStructContent.prototype = $.extend(new StructContent(), TwitterSearchContent.prototype);

	TwitterSearchStructContent.prototype.type = "application/vnd.twitter.tweet.v1.1+json";

	return TwitterSearchStructContent;
});