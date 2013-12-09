BN.addDecl('page-test', 'page', {
    route: /^\/$/
}).staticProp({
    init: function(matchers) {
        return this.out({
            block: 'hello-world'
        });
    }
});
