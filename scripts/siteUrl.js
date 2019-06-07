'use strict';

const config = hexo.config;

hexo.extend.tag.register('img_path', function (args) {
    return `<img src="${config.img_path + args[0]}" style="margin: 6px 0;width:${args[1] ? args[1]+'px' : "auto"};height:${args[2] ? args[2]+'px' : 'auto'}/>`;
});