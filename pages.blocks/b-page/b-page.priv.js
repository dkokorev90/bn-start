/**
 * Override
 */
BEM.JSON.decl('b-page', {
    onBlock: function(ctx) {
        ctx.param('x-ua-compatible', false);

        ctx.content([
            ctx.content(),
            ctx.param('footStatic')
        ], true);

        ctx.stop();
    }
});

BN.addDecl('b-page').blockTemplate(function(ctx) {
    var pathPrefix = BN('i-page').getPathPrefix(),
        headStatic,
        footStatic;

    // static files (css, js) includes to <head>
    headStatic = [
        { elem: 'css', url: pathPrefix + '.css', ie: false }
    ];

    // static files (css, js) appends to <body>
    footStatic = [
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: pathPrefix + '.js' }
    ];

    ctx.param('head', headStatic);
    ctx.param('footStatic', footStatic);
});
