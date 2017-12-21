'use strict'

var xss = require('xss')
var mongoose =  require('mongoose')
var Movie = mongoose.model('Movie')

// var movieHelper = require('../dbhelper/movieHelper')
import movieHelper from '../dbhelper/movieHelper'


/**
 * 更新电影信息操作
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.update = async (ctx, next) => {
    var id = ctx.request.body._id;
    var title = ctx.request.body.title;
    var country = ctx.request.body.country;
    var genres = ctx.request.body.genres;
    var image = ctx.request.body.image;
    var summary = ctx.request.body.summary;
    var time = ctx.request.body.time;
    var video = ctx.request.body.video;
    var rating = ctx.request.body.rating;
    console.log(ctx.request.body);
   await Movie.update({_id: id}, {title: title, country:country, genres:genres, image:image,rating:rating,summary: summary, time:time,video: video}, function(err, movies) {
       if(err) {
           console.log(err);
           return;
       } else {
           console.log(movies)
       }
   })


    ctx.body = {
        success: true,
        data:{}
    }
}



/**
 * 数据库接口测试
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

/*
* 查找所有电影
* */
exports.movies = async (ctx, next) => {
    var data = await movieHelper.findAllMovies()
    // var obj = await movieHelper.findByPhoneNumber({phoneNumber : '13525584568'})
    // console.log('obj=====================================>'+obj)

    ctx.body = {
        success: true,
        data
    }
}
/*
 * 查找某个电影
 * */
exports.findMovie = async(ctx, next) => {
    var title = ctx.request.body.title;
    console.log(ctx.request.body)
    var data = await movieHelper.findMovie(title)

    ctx.body = {
        success: true,
        data
    }
}
/*
 * 添加电影
 * country: String,
 rating: Number,
 image: String,
 genres: String,
 time: String,
 Summary
 * */
exports.addMovie = async (ctx, next) => {

    var postData = {
        title: ctx.request.body.title,
        country: ctx.request.body.country,
        rating: ctx.request.body.rating,
        genres: ctx.request.body.genres,
        time: ctx.request.body.time,
        summary: ctx.request.body.summary,
        image: ctx.request.body.image,
        video: ctx.request.body.video
    }
    console.log(ctx.request.body, 1);

    var movie = new Movie(postData);
    var movie2 =  await movieHelper.addMovie(movie)
    if(movie2){
        ctx.body = {
            success: true,
            data : movie2
        }
    }else {
        ctx.body = {
            success: false,
            data: '添加电影失败'
        }
    }
}
exports.deleteMovie = async (ctx, next) => {
    const title = ctx.request.body.title;
    var data  = await movieHelper.deleteMovie({title})
    ctx.body = {
        success: true,
        data
    }
}

exports.testPost = async (ctx, next) => {
    console.log(ctx.request.body, 1);
    ctx.body = {
        data: ctx.request.body
    }
}