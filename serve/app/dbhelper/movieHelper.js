'use strict'

var mongoose =  require('mongoose')
var Movie = mongoose.model('Movie')

/**
 * 通过电话号码查询
 * @param  {[type]} options.phoneNumber [description]
 * @return {[type]}                     [description]
 */
exports.findByPhoneNumber = async ({phoneNumber}) => {
    var query = Movie.find({phoneNumber})
    var res = null
    await query.exec(function(err, movie) {
        if(err) {
            res = {}
        }else {
            res = Movie
        }
    })
    // console.log('res====>' + res)
    return res;
}

/**
 * 查找所用电影
 * @return {[type]} [description]
 */
exports.findAllMovies = async () => {
    var query = Movie.find({});
    var res = []
    await query.exec(function(err, movies) {
        if(err) {
            res = []
        }else {
            res = movies;
        }
    })
    return res
}
/*
 * 查找某个电影
 * title
 * */

exports.findMovie = async (title) => {

    var query = Movie.find({title: title});
    var res = [];
    await query.exec(function(err, movie){
        if(err) {
            res = [];
            console.log(err, 'eeee');
        } else {
            res = movie;
            console.log('pass pass')
        }
    })
    return res;
}

/**
 * 增加电影
 * @param  {[Movie]} Movie [mongoose.model('Movie')]
 * @return {[type]}      [description]
 */
exports.addMovie = async (Movie) => {
    Movie = await Movie.save()
    return Movie
}

/**
 * 根据电影名字删除电影
 * @param  {[type]} options.phoneNumber [description]
 * @return {[type]}                     [description]
 */
exports.deleteMovie = async ({title}) => {
    var flag = false
    console.log('flag==========>'+flag)
    await Movie.remove({title}, function(err) {
        if(err) {
            flag = false
            // return false
        }else{
            flag = true
        }

    })
    console.log('flag=====await=====>'+flag)
    return flag
}
