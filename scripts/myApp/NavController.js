/**
 * Created by Administrator on 2017/11/7.
 */
//导航
angular.module('myApp')
    .controller("NavController",['$scope',function($scope){
           $scope.navs=[
               {link:"#/today",text:"今日一刻",icon:"icon-home"},
               {link:"#/older",text:"往期内容",icon:"icon-file-empty"},
               {link:"#/author",text:"热门作者",icon:"icon-pencil"},
               {link:"#/category",text:"栏目浏览",icon:"icon-menu"},
               {link:"#/settings",text:"设置",icon:"icon-cog"},
        ]
    }])