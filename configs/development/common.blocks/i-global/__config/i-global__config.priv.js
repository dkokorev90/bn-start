(function(argument) {

    var pathPrefix = BN('i-page').getPathPrefix();

    BN.addDecl('i-global').staticProp({
        pathPrefix: BN('i-page').getPathPrefix(),
        stCSS: pathPrefix + '.css',
        stJS:  pathPrefix + '.js'
    });

}());
