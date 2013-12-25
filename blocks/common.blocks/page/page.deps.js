({
    mustDeps: [
        { block: 'i-bem', elems: ['dom', 'json'], mods: { init: 'auto' } },
        { block: 'i-bh' },
        { block: 'i18n' },
        { block: 'i-global', elems: ['config', 'reset'] }
    ],

    shouldDeps: [
        { elems: ['css', 'js', 'ua'] }
    ]
})
