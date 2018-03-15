/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'e2e'
};
// https://segmentfault.com/a/1190000004138375?_ea=503865
//配置接口地址
// gulp build(serve) --env qa
exports.apiconf = {
    "qa": "https://www.celloud.cc/celloud-crm",
    "prod": "https://www.celloud.cn/celloud-crm",
    "dev": "https://www.genecode.cn/celloud-crm",
    "qaIp": "https://119.254.97.211/celloud-crm",
    "test": "http://47.94.110.240/celloud-crm"
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
    /*exclude: [/bootstrap.js$/, /bootstrap\.css/],*/
    exclude: [/bootstrap\.css/],
    directory: 'bower_components'
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
    'use strict';

    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
