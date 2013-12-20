BN.addDecl('i18n').staticProp({
    /**
     * Change user locale
     * @param {String} lang
     */
    changeLocale: function(lang) {
        BN('i-cookie').set('lang', lang, { expires: 365 });
        BN('i-router').reload();
    }
}).done();
