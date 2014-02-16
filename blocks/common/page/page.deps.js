({
    mustDeps: [
        { block: 'i-bem', elem: 'dom', mods: { init: 'auto' } },
        { block: 'i-bem', elem: 'json' },
        { block: 'i-bh' },
        { block: 'i18n' },
        { block: 'i-global', elems: ['config', 'reset'] }
    ],

    shouldDeps: [
        { elems: ['css', 'js', 'ua'] }
    ]
})
