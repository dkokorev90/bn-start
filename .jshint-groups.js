module.exports = {
    options: {
        es3: true,
        // eqeqeq: true,
        evil: true,
        expr: true,
        forin: true,
        immed: true,
        latedef: true,
        maxdepth: 4,
        maxlen: 120,
        maxerr: '100',
        maxparams: 4,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        node: true,
        quotmark: 'single',
        sub: true,
        strict: false,
        trailing: true,
        undef: true,
        unused: true,
        passfail: true,
        predef: [
            'Vow',
            'Base',
            'BEM',
            'BN',
            'BEMHTML',
            'exports',
            'i18n',
            'Ya',
            'Maps',
            'maps',
            'YMaps',
            'ymaps',
            'jQuery',
            'require',
            'include',
            'swfobject'
        ]
    },
    groups: {
        js: {
            options: {
                browser: true,
                debug: false,
                devel: false,
                jquery: true
            },
            includes: [
                'blocks*/**/*.js',
                'blocks*/**/*.common.js',
                'blocks*/**/*.priv.js'
            ],
            excludes: [
                'blocks/**/*.deps.js',
                'blocks/**/*.lib.js',
                'blocks/**/*.lib.js',
                'blocks/**/_lib/*.js'
            ]
        },
        deps: {
            options: { asi: true },
            includes: ['blocks/**/*.deps.js']
        },
        bemdecl: {
            includes: ['app/**/*.bemdecl.js'],
            excludes: ['**/all.bemdecl.js']
        }
    }
};
