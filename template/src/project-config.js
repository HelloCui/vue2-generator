'use strict';

var exports = {
    // base url
    get baseUrl() {
        var test = '',
            prod = '';
        return this.isTest ? test : prod;
    },
    // 是否是测试环境
    get isTest() {
        return $envType.type === 0 || $envType.type === 1;
    },
    // 是否是pc环境
    get isPcTest() {
        return $envType.type === 0;
    }
};

module.exports = exports;
