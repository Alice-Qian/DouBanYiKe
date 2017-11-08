/**
 * Created by Administrator on 2017/11/7.
 */
//配置路由
angular.module('myApp')
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/today',{
            templateUrl:"./views/today.html",
            controller:"TodayController"
        }).when('/older',{
            templateUrl:'./views/older.html',
            controller:"OlderController"
        }).when('/author',{
            templateUrl:"./views/author.html",
            controller:"AuthorController"
        }).when('/category',{
            templateUrl:"./views/category.html",
            controller:"CategoryController"
        }).when('/settings',{
            templateUrl:"./views/settings.html",
            controller:"SettingController"
        }).otherwise({
            redirectTo: '/today'
        })
    }])
