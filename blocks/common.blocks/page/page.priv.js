// base template for page
BN.addDecl('page').blockTemplate(function(ctx) {
    var json = ctx.json(),
        pathPrefix = BN('i-page').getPathPrefix(),
        headSt = [
            { elem: 'css', url: pathPrefix + '.css' }
        ],
        footSt = [
            { elem: 'js', url: '//yandex.st/jquery/2.0.3/jquery.min.js' },
            { elem: 'js', url: pathPrefix + '.js' }
        ];

    ctx.tag('body');
    ctx.param('x-ua-compatible', false);

    BN('i18n') && footSt.push({ block: 'i18n', elem: 'client' });

    // static files (css, js) includes to <head>
    ctx.param('head', headSt);
    // static files (css, js) appends to <body>
    ctx.param('foot', footSt);
    // meta tags includes to <head>
    ctx.param('meta', [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'keywords', content: '' } }
    ]);

    return [
        {
            elem: 'doctype',
            doctype: json.doctype || '<!DOCTYPE html>'
        },
        {
            elem: 'html',
            content: [
                {
                    elem: 'head',
                    content: [
                        {
                            tag: 'meta',
                            attrs: { charset: 'utf-8' }
                        },
                        json['x-ua-compatible'] === false ?
                            false :
                            { elem: 'xUACompatible', 'x-ua-compatible': json['x-ua-compatible'] },
                        {
                            tag: 'title',
                            content: json.title
                        },
                        json.favicon ? {
                            elem: 'favicon',
                            url: json.favicon
                        } : '',
                        json.meta,
                        { elem: 'ua' },
                        json.head
                    ]
                },
                json,
                json.foot
            ]
        }
    ];
}).elemTemplate({
    doctype: function(ctx) {
        return ctx.json().doctype;
    },

    html: function(ctx) {
        return {
            tag: 'html',
            attrs: { 'class': 'i-ua_js_no i-ua_css_standard' },
            content: ctx.content()
        };
    },

    head: function(ctx) {
        return {
            tag: 'head',
            content: ctx.content()
        };
    },

    meta: function(ctx) {
        return {
            tag: 'meta',
            attrs: ctx.json().attrs
        };
    },

    xUACompatible: function(ctx) {
        return {
            tag: 'meta',
            attrs: {
                'http-equiv': 'X-UA-Compatible',
                content: ctx.json()['x-ua-compatible'] || 'IE=EmulateIE7, IE=edge'
            }
        };
    },

    favicon: function(ctx) {
        return {
            tag: 'link',
            attrs: { rel: 'shortcut icon', href: ctx.json().url }
        };
    }
});
