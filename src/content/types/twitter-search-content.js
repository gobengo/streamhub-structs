define([
    'streamhub-sdk/content/types/twitter-content',
    'twitter-text'
], function (TwitterContent, twttr) {
    /**
     * A content model that represents a Twitter Search result. This constructor saves the
     * "tweetId" property of the json object to "this".
     * @param json {Object} An object obtained via a Twitter Search response that represents the
     *        state of the content.
     * @exports streamhub-structs/content/types/twitter-search-content
     * @constructor
     */
    var TwitterSearchResultContent = function (json) {
        TwitterContent.call(this);
        json = json || {};
        this._entities = json.entities;
        this.tweetId = json.id_str;

        this.author = {};
        this.author.twitterUserId = json.user.id;
        this.author.id = this.author.twitterUserId + '@twitter.com';
        this.author.avatar = json.user.profile_image_url;
        this.author.displayName = json.user.name;
        this.author.profileUrl = 'https://twitter.com/' + json.user.screen_name;
        this.author.screenName = json.user.screen_name;

        this.body = twttr.txt.autoLink(json.text, {
            urlEntities: json.entities && json.entities.urls || [],
            usernameIncludeSymbol: true
        });
        this.createdAt = new Date(json.created_at);
    };
    TwitterSearchResultContent.prototype = new TwitterContent();

    return TwitterSearchResultContent;
});
