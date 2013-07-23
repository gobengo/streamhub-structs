define([
	'jasmine',
	'streamhub-structs/content/types/struct-content',
	'streamhub-sdk/content/content',
	'streamhub-sdk/content/types/livefyre-content'
], function (jasmine, StructContent, Content, LivefyreContent) {
	describe('streamhub-structs/content/types/struct-content', function () {
		describe('when constructed with a plaintext struct state', function () {
			var content,
				plaintextStructState;
			beforeEach(function () {
				plaintextStructState = {"content":{"fields":{"body":{"type":"text/plain","value":"Some more text"},"type":{"type":null,"value":"text/plain"}},"updatedAt":1374182270,"createdAt":1374182270,"parentId":null,"id":"7095cb02-0902-4470-a8c5-f1d84a5b9fa1","ancestorId":null,"sortOrder":6.250000086552674e+22},"source":17,"type":4,"event":1374182270623258};
				content = new StructContent(plaintextStructState);
			});
			it('is instanceof LivefyreContent', function () {
				expect(content instanceof LivefyreContent).toBe(true);
			});
			it('has properties that are common across all struct types', function () {
				expect(content.id).toBe(plaintextStructState.content.id);
				expect(content.sortOrder).toBe(plaintextStructState.content.sortOrder);
				expect(content.createdAt instanceof Date).toBe(true);
				expect(content.updatedAt instanceof Date).toBe(true);
			});
		});

		it('can be constructed with no options', function () {
			expect(new StructContent() instanceof StructContent).toBe(true);
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
			})
		});

		describe('subclass', function () {
			var MyStructContent,
				plaintextStructState;
			beforeEach(function () {
				plaintextStructState = {"content":{"fields":{"body":{"type":"text/plain","value":"Some more text"},"type":{"type":null,"value":"text/plain"}},"updatedAt":1374182270,"createdAt":1374182270,"parentId":null,"id":"7095cb02-0902-4470-a8c5-f1d84a5b9fa1","ancestorId":null,"sortOrder":6.250000086552674e+22},"source":17,"type":4,"event":1374182270623258};
				MyStructContent = function () {
					StructContent.apply(this, arguments);
				};
				MyStructContent.prototype = new StructContent();
				MyStructContent.prototype.type = 'fakemimetype';
			});
			it('throws on construction if passed a struct state with the wrong type', function () {
				expect(function () {
					new MyStructContent(plaintextStructState);
				}).toThrow();
			});
		});
	});
});