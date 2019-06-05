'use strict';

const config = hexo.config;

hexo.extend.tag.register('img_path', function (args) {
    return `<br/><img src="${config.img_path + args[0]}"/><br/>`;
});