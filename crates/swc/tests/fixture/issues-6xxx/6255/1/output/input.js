function test(node) {
    return(// comment from the source code
    (_a = node.modifiers) === null || _a === void 0 ? void 0 : _a.filter(function(m) {
        return !ts.isDecorator(m);
    }));
}
