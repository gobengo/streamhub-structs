define(['streamhub-structs/content/types/struct-content'], function (StructContent) {
	function PlaintextStructContent (structState) {
		StructContent.apply(this, arguments);
		if ( ! structState) {
			return;
		}
		this.body = structState.content.fields.body.value;
	}
	PlaintextStructContent.prototype = new StructContent();

	PlaintextStructContent.prototype.type = "text/plain";

	return PlaintextStructContent;
});