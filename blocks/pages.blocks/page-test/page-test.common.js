BN.addDecl('page-test', 'page', {
    route: /^\/$/
}).staticProp({
    init: function() {
        return this.out({
            block: 'hello-world'
        });
    }
});
