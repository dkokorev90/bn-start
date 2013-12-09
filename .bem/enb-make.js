//@see https://github.com/enb-make/enb
module.exports = require('../node_modules/bem-node/enb-make')
    // .noBEMHTML()
    .freeze()
    .pages('app/*')
    .levels([
        'configs/' + process.env['YENV'] + '/common.blocks',
        'common.blocks',
        'data.blocks',
        'pages.blocks'
    ]);
