define([
    'jasmine',
    'streamhub-structs/content/types/struct-content',
    'streamhub-structs/content/types/plaintext-struct-content',
    'streamhub-sdk/content/content',
    'streamhub-sdk/content/types/livefyre-content'
], function (jasmine, StructContent, PlaintextStructContent, Content, LivefyreContent) {
    describe('streamhub-structs/content/types/plaintext-struct-content', function () {
        describe('when constructed from a plaintext struct state', function () {
            var content,
                plaintextStructState;
            beforeEach(function () {
                plaintextStructState = {"content":{"fields":{"body":{"type":"text/plain","value":"Some more text"},"type":{"type":null,"value":"text/plain"}},"updatedAt":1374182270,"createdAt":1374182270,"parentId":null,"id":"7095cb02-0902-4470-a8c5-f1d84a5b9fa1","ancestorId":null,"sortOrder":6.250000086552674e+22},"source":17,"type":4,"event":1374182270623258};
                content = new PlaintextStructContent(plaintextStructState);
            });
            it('is instanceof StructContent', function () {
                expect(content instanceof Content).toBe(true);
                expect(content instanceof LivefyreContent).toBe(true);
                expect(content instanceof StructContent).toBe(true);
            });
            it('has .body', function () {
                expect(content.body).toBe(plaintextStructState.content.fields.body.value);
            });
        });

        it('can be constructed with no options', function () {
            expect(new PlaintextStructContent() instanceof PlaintextStructContent).toBe(true);
        });

        describe('when constructed with a non-struct state', function () {
            var content,
                nonStructState;
            beforeEach(function () {
                nonStructState = {"source":5,"content":{"parentId":"","bodyHtml":"<p>come over to urban farming it is a cool place </p><a href=\"http://www.urbanfarmingns.com/\" target=\"_blank\" rel=\"nofollow\">http://www.urbanfarmingns.com/</a>","annotations":{},"authorId":"_up16867675@livefyre.com","updatedAt":1373333113,"id":"84878834","createdAt":1373333112},"vis":1,"type":0,"event":1373333113653888,"childContent":[{"source":5,"content":{"parentId":"84878834","bodyHtml":"<p><a vocab=\"http://schema.org\" typeof=\"Person\" rel=\"nofollow\" resource=\"acct:_up16867675@livefyre.com\" data-lf-handle=\"\" data-lf-provider=\"livefyre\" property=\"url\" href=\"http://www.livefyre.com/profile/16867675/\" target=\"_blank\" class=\"fyre-mention fyre-mention-livefyre\">@<span property=\"name\">perreault</span></a> It is cool!<br/></p>","annotations":{},"authorId":"_up16869249@livefyre.com","createdAt":1373337256,"updatedAt":1373337256,"id":"84890673","ancestorId":"84878834"},"vis":1,"type":0,"event":1373337256231113,"childContent":[]},{"content":{"authorId":"_up16869249@livefyre.com","targetId":"84878834","id":"84878834.16869249.1"},"vis":1,"type":1,"event":1373337248552934,"source":5}]};
            });
            it('throws StructContent.InvalidStructState', function () {
                expect(function () {
                    content = new StructContent(nonStructState);
                }).toThrow(new StructContent.InvalidStructState());
            });
        });

        describe('when constructed with a struct state of wrong type', function () {
            var content,
                twitterStructState;
            beforeEach(function () {
                twitterStructState = {"content":{"fields":{"body":{"type":"application/vnd.twitter.tweet.v1.1+json","value":"{\"created_at\":\"Thu Jul 18 20:23:18 +0000 2013\",\"id\":357958778538303488,\"id_str\":\"357958778538303488\",\"text\":\"Check out skye8844's comment in \\\"Hitting Rock Bottom with Joe and Teresa\\\" http:\\/\\/t.co\\/3kMcXjubqa\",\"source\":\"\\u003ca href=\\\"http:\\/\\/www.bravotv.com\\\" rel=\\\"nofollow\\\"\\u003eBravoTV.com\\u003c\\/a\\u003e\",\"truncated\":false,\"in_reply_to_status_id\":null,\"in_reply_to_status_id_str\":null,\"in_reply_to_user_id\":null,\"in_reply_to_user_id_str\":null,\"in_reply_to_screen_name\":null,\"user\":{\"id\":1323349722,\"id_str\":\"1323349722\",\"name\":\"Rhonj Season 5\",\"screen_name\":\"rhonj_5\",\"location\":\"New Jersey!!!!!!!!!!!!\",\"description\":\"News for #RHONJ season 5!!!!\",\"url\":null,\"entities\":{\"description\":{\"urls\":[]}},\"protected\":false,\"followers_count\":514,\"friends_count\":842,\"listed_count\":1,\"created_at\":\"Tue Apr 02 22:08:28 +0000 2013\",\"favourites_count\":355,\"utc_offset\":-18000,\"time_zone\":\"Eastern Time (US & Canada)\",\"geo_enabled\":false,\"verified\":false,\"statuses_count\":2876,\"lang\":\"en\",\"contributors_enabled\":false,\"is_translator\":false,\"profile_background_color\":\"C0DEED\",\"profile_background_image_url\":\"http:\\/\\/a0.twimg.com\\/profile_background_images\\/880633606\\/a4af6e3452bafa51c8d758935100c9e8.jpeg\",\"profile_background_image_url_https\":\"https:\\/\\/si0.twimg.com\\/profile_background_images\\/880633606\\/a4af6e3452bafa51c8d758935100c9e8.jpeg\",\"profile_background_tile\":true,\"profile_image_url\":\"http:\\/\\/a0.twimg.com\\/profile_images\\/378800000007901456\\/227c7637b5f4cc1ec1fc055021e5d4ba_normal.jpeg\",\"profile_image_url_https\":\"https:\\/\\/si0.twimg.com\\/profile_images\\/378800000007901456\\/227c7637b5f4cc1ec1fc055021e5d4ba_normal.jpeg\",\"profile_banner_url\":\"https:\\/\\/pbs.twimg.com\\/profile_banners\\/1323349722\\/1369487277\",\"profile_link_color\":\"0084B4\",\"profile_sidebar_border_color\":\"FFFFFF\",\"profile_sidebar_fill_color\":\"DDEEF6\",\"profile_text_color\":\"333333\",\"profile_use_background_image\":true,\"default_profile\":false,\"default_profile_image\":false,\"following\":false,\"follow_request_sent\":false,\"notifications\":false},\"geo\":null,\"coordinates\":null,\"place\":null,\"contributors\":null,\"retweet_count\":0,\"favorite_count\":0,\"entities\":{\"hashtags\":[],\"symbols\":[],\"urls\":[{\"url\":\"http:\\/\\/t.co\\/3kMcXjubqa\",\"expanded_url\":\"http:\\/\\/fyre.it\\/1NQ9\",\"display_url\":\"fyre.it\\/1NQ9\",\"indices\":[74,96]}],\"user_mentions\":[]},\"favorited\":false,\"retweeted\":false,\"possibly_sensitive\":false,\"lang\":\"en\"}"},"type":{"type":null,"value":"application/vnd.twitter.tweet.v1.1+json"}},"updatedAt":1374182269,"createdAt":1374182269,"parentId":null,"id":"11679f82-f56f-4a4e-be33-6806b02b276f","ancestorId":null,"sortOrder":7.499999833647231e+22},"source":17,"type":4,"event":1374182270581644};
            });
            it('throws', function () {
                expect(function () {
                    new PlaintextStructContent(twitterStructState);
                }).toThrow();
            });
        });
    });
});