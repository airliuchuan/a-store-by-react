'use strict'

var goodsList = require('../models/wechatStore').goodsList;
var newsList = require('../models/wechatStore').newsList;

exports.goodsList = async (ctx,next) => {
    await console.log(goodsList);
     ctx.body = goodsList;
}

exports.newsList = async (ctx, next) => {
    ctx.body = newsList;
}

exports.test = async (ctx, next) => {
    await console.log(ctx.request.body.file);
    ctx.body = 'success'
}