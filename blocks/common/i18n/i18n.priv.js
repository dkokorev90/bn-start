(function() {

    var Polyglot = require('./_lib/i18n_lib_polyglot'), //@see https://github.com/airbnb/polyglot.js
        locale = require('locale'), //@see https://github.com/jed/locale
        supportedLocales = new locale.Locales(['ru', 'uk', 'en']),
        keys = require('../../../l10n/l10n'),
        lang;

    BN.addDecl('i18n').elemTemplate({
        client: function() {
            return {
                tag: 'script',
                content: [
                    '(function(){BN.I18N=new Polyglot({',
                    'locale:"' + lang + '",',
                    'phrases:' + JSON.stringify(keys[lang]) + '});}())'
                ].join('')
            };
        }
    }).staticProp({
        /**
         * Set user locale
         */
        setLocale: function(req) {
            var locales = new locale.Locales(req.headers['accept-language']),
                selectedLang = BN('i-router').getParams().l10n || BN('i-cookie').get('lang'),
                bestSupLang = locales.best(supportedLocales).language;

            if (selectedLang && !keys[selectedLang]) {
                selectedLang = bestSupLang;
                BN('i-cookie').set('lang', null);
            }

            lang = selectedLang || bestSupLang;

            BN.I18N = new Polyglot({
                locale: lang,
                phrases: keys[lang]
            });
        }
    }).done();

}());
