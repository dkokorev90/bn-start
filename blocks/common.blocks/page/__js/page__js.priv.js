BN.addDecl('page').elemTemplate({
    'js': function(ctx) {
        return {
            tag: 'script',
            attrs: { src: ctx.json().url }
        };
    }
});
