//@see https://github.com/enb-make/enb
module.exports = require('../node_modules/bem-node/enb-make')
    .noBEMHTML()
    .freeze()
    .pages('app/*')
    .levels([
        // в зависимости от переменной окружения YENV, подключаем нужные конфиги
        'configs/' + process.env['YENV'] + '/common.blocks',
        'blocks/common',
        'blocks/data',
        'blocks/pages'
    ]);
