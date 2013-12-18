({
    shouldDeps: [
        { block: 'page' }
    ],

    // исключаем блок b-page, так как
    // теперь используем блок page
    noDeps: [
        { block: 'b-page' }
    ]
})
