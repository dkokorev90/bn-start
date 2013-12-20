BN.addDecl('hello-world').blockTemplate(function(ctx) {
    ctx.content([
        BN.I18N.t('hi_name', { name: 'Dima' }),
        BN.I18N.t('friends', 2)
    ]);
});
