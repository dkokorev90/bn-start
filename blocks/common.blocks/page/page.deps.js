({
    mustDeps: [
        { block: 'i-bem', elems: ['dom', 'json'], mods: { init: 'auto' } },
        { block: 'i-bh' }
    ],

    shouldDeps: [
        { elems: ['css', 'js', 'ua'] },
        { block: 'i-global', elems: ['config', 'reset'] }
    ]
})
