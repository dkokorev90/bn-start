/**
 * @override
 * Convert bemjson parts to content with bh
 * @see
 */
BEM.decl('i-content', null, {

    /**
     * Process given bemjson to html
     *
     * @param {String|Object|Array} bemJson
     * @param {Boolean} [isSync] if true, method will perform synchronous BEM.JSON.build and return a html string
     * @return {Vow.promise|String}
     */
    html: function(bemJson, isSync) {
        if (!Array.isArray(bemJson)) {
            bemJson = [bemJson];
        }
        return (isSync) ? this._htmlSync(bemJson) : this._htmlAsync(bemJson);
    },

    _htmlAsync: function(json) {
        return BEM.blocks['i-bh'].bh().processBemJsonAsync(json).then(function () {
            return (function() {
                var promise;

                if (typeof (json) === 'string') {
                    promise = Vow.fulfill(json);
                } else {
                    promise = Vow.promise();
                    BEM.JSON.buildAsync(
                        json,
                        function (result) {
                            promise.fulfill(BEM.HTML.build(result));
                        }
                    );
                }

                return promise;
            }());
        });
    },

    _htmlSync: function(json) {
        return BEM.HTML.build(BEM.JSON.build(BEM.blocks['i-bh'].bh().processBemJson(json)));
    }

});
