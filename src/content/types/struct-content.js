define(['streamhub-sdk/content/types/livefyre-content'], function (LivefyreContent) {
    function StructContent (structState) {
        if (structState && structState.type !== 4) {
            throw new InvalidStructState();
        }
        if (structState && this.type && structState.content.fields.type.value !== this.type) {
            throw new InvalidStructState("Expected struct state with type field = "+this.type.toString());
        }
        LivefyreContent.apply(this, arguments);
        structState = structState || {};
        this.sortOrder = structState.content && structState.content.sortOrder;
    }
    StructContent.prototype = new LivefyreContent();

    function InvalidStructState(message) {
        this.name = "InvalidStructState";
        this.message = message || this.message;
    }
    InvalidStructState.prototype = new Error();
    InvalidStructState.prototype.constructor = InvalidStructState;
    InvalidStructState.prototype.message = "Expected a struct state (type: 4), but got something else";

    StructContent.InvalidStructState = InvalidStructState;
    return StructContent;
});