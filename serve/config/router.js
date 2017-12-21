'use strict'

const Router = require('koa-router')
const User = require('../app/controllers/user')
const App = require('../app/controllers/app')
const Movie = require('../app/controllers/movie');
const WechatStore = require('../app/controllers/wechatStore');

module.exports = function(){
	var router = new Router({
    prefix: '/api'
  })

  // user
  router.post('/u/signup', App.hasBody, User.signup)
  router.post('/u/update', App.hasBody, App.hasToken, User.update)

  // user 路由
  router.get('/test/user/users',User.users)
  router.post('/test/user/add',User.addUser)
  router.post('/test/user/delete',User.deleteUser)
  router.post('/test/post', User.testPost)
  router.post('/test/user/user', User.findUser)

  //movie 路由
    router.get('/test/movie/movies', Movie.movies)
    router.post('/test/movie/add', Movie.addMovie)
    router.post('/test/movie/movie', Movie.findMovie)
    router.post('/test/movie/delete',Movie.deleteMovie)
    router.post('/test/movie/update', Movie.update)
  //wechat-store api
    router.get('/store/goodslist/:page', WechatStore.goodsList)
    router.get('/store/newslist/:page', WechatStore.newsList)
    router.post('/store/test', WechatStore.test)
  return router
}